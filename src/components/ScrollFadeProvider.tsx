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

        const viewportCenter = window.innerHeight / 2;
        const sections = containerRef.current.querySelectorAll('section');

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            // Distance from element center to viewport center
            const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

            // All sections at full opacity - no fade effect
            const sectionMinOpacity = 1.0;

            // Calculate opacity: 1 when centered, fading as it moves away
            // Use a larger fade distance for smoother transitions
            const opacity = Math.max(sectionMinOpacity, 1 - distanceFromCenter / (fadeDistance * 1.5));

            // Apply opacity to the section content, not the section itself
            // This preserves layout while fading the visuals
            (section as HTMLElement).style.opacity = String(opacity);
            (section as HTMLElement).style.transition = 'opacity 0.2s ease-out';
        });
    }, [fadeDistance, minOpacity]);

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
