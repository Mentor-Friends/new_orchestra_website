import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { NeuralFractalBackground } from './components/NeuralFractalBackground';
import { ScrollFadeProvider } from './components/ScrollFadeProvider';
import { MainLanding } from './pages/MainLanding';
import { ProductDevelopment } from './pages/ProductDevelopment';
import { Developers } from './pages/Developers';
import { AgentBuilders } from './pages/AgentBuilders';
import { Founders } from './pages/Founders';
import { About } from './pages/About';
import { Blogs } from './pages/Blogs';
import { Docs } from './pages/Docs';
import { Invest } from './pages/Invest';
import { Profile } from './pages/Profile';
import { SignIn } from './pages/SignIn';
import { TechBenefits } from './pages/TechBenefits';
import { Marketplace } from './pages/Marketplace';
import { AgentDetail } from './pages/AgentDetail';
import { Footer } from './components/Footer';

export default function App() {
    const [scrolled, setScrolled] = useState(false);
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Handle hash navigation
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash) {
                // Handle agent detail pages (agent-{id}) but NOT agent-builders
                if (hash.startsWith('agent-') && hash !== 'agent-builders') {
                    setCurrentPage('agent-detail');
                } else {
                    setCurrentPage(hash);
                }
            } else {
                setCurrentPage('home');
            }
            window.scrollTo(0, 0);
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'product':
            case 'product-development':
                return <ProductDevelopment />;
            case 'developers':
                return <Developers />;
            case 'agent-builders':
                return <AgentBuilders />;
            case 'founders':
                return <Founders />;
            case 'about':
                return <About />;
            case 'blogs':
                return <Blogs />;
            case 'docs':
                return <Docs />;
            case 'invest':
                return <Invest />;
            case 'profile':
                return <Profile />;
            case 'tech-benefits':
                return <TechBenefits />;
            case 'marketplace':
                return <Marketplace />;
            case 'agent-detail':
                return <AgentDetail />;
            case 'signin':
            case 'signup':
                return <SignIn />;
            default:
                return <MainLanding />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
            <NeuralFractalBackground />
            <div className="relative z-10">
                <Navigation scrolled={scrolled} currentPage={currentPage} />
                {renderPage()}
                <Footer />
            </div>
        </div>
    );
}