import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { NeuralFractalBackground } from './components/NeuralFractalBackground';
import { MainLanding } from './pages/MainLanding';
import { ProductDevelopment } from './pages/ProductDevelopment';
import { Developers } from './pages/Developers';
import { AgentBuilders } from './pages/AgentBuilders';
import { Founders } from './pages/Founders';
import { Blogs } from './pages/Blogs';
import { Docs } from './pages/Docs';
import { Invest } from './pages/Invest';
import { Profile } from './pages/Profile';
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
        setCurrentPage(hash);
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
        return <ProductDevelopment />;
      case 'developers':
        return <Developers />;
      case 'agent-builders':
        return <AgentBuilders />;
      case 'founders':
        return <Founders />;
      case 'blogs':
        return <Blogs />;
      case 'docs':
        return <Docs />;
      case 'invest':
        return <Invest />;
      case 'profile':
        return <Profile />;
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