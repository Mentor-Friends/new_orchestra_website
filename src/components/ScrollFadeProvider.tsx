import { ReactNode, useEffect, useRef, useCallback } from 'react';

interface ScrollFadeProviderProps {
    children: ReactNode;
    fadeDistance?: number;
    minOpacity?: number;
}

/**
 * Global provider that automatically applies viewport-based fade effect to all sections.
 * Content is most visible when centered on screen and fades as it scrolls away.
 * This works by tracking all `section` elements and their position relative to viewport center.
 */
export function ScrollFadeProvider({
    children,
    fadeDistance = 500,
    minOpacity = 0.15
}: ScrollFadeProviderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const updateOpacities = useCallback(() => {
        if (!containerRef.current) return;

        const sections = containerRef.current.querySelectorAll('section');
        const NAV_BAR_HEIGHT = 80;
        const FADE_START = 230; // Extended zone for smoother transition

        sections.forEach((section: HTMLElement) => {
            const rect = section.getBoundingClientRect();
            
            // GPU acceleration hint for smoother rendering
            section.style.willChange = 'mask-image, opacity';
            
            // If section is completely below the fade start point, clear mask and keep full opacity
            if (rect.top >= FADE_START) {
                section.style.webkitMaskImage = '';
                section.style.maskImage = '';
                section.style.opacity = '1';
                return;
            }

            // If section is completely above the nav bar, hide it completely
            if (rect.bottom <= NAV_BAR_HEIGHT) {
                section.style.opacity = '0';
                section.style.willChange = 'auto'; // Release GPU resources
                return;
            }

            // Section is partially in the fade zone
            const maskTop = NAV_BAR_HEIGHT - rect.top;
            const maskMid = (FADE_START - rect.top + maskTop) / 2; // Midpoint for easing
            const maskFade = FADE_START - rect.top;

            // Multi-stop gradient for smoother easing (approximates ease-in-out)
            const maskEffect = `linear-gradient(to bottom, 
                transparent 0px, 
                transparent ${maskTop}px, 
                rgba(0,0,0,0.3) ${maskTop + (maskMid - maskTop) * 0.5}px,
                rgba(0,0,0,0.7) ${maskMid}px,
                black ${maskFade}px, 
                black 100%)`;
            
            section.style.opacity = '1';
            section.style.webkitMaskImage = maskEffect;
            section.style.maskImage = maskEffect;
        });
    }, []);

    useEffect(() => {
        // Initial update
        updateOpacities();

        // Throttled scroll handler using requestAnimationFrame
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateOpacities();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', updateOpacities, { passive: true });

        // Also observe for new sections being added (for dynamic content)
        const observer = new MutationObserver(() => {
            updateOpacities();
        });

        if (containerRef.current) {
            observer.observe(containerRef.current, {
                childList: true,
                subtree: true
            });
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateOpacities);
            observer.disconnect();
        };
    }, [updateOpacities]);

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}
