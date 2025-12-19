import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
  currentPage: string;
}

export function Navigation({ scrolled, currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'For Business Clients', href: '#product' },
    { label: 'For Developers', href: '#developers' },
    { label: 'For Agent Builders', href: '#agent-builders' },
    { label: 'Tech and Benefits', href: '#tech-benefits' },
    { label: 'Marketplace Platform', href: '#marketplace' },
    { label: 'About Us', href: '#about' },
    { label: 'Founders', href: '#founders' },
  ];

  const isActive = (href: string) => {
    const page = href.slice(1);
    return currentPage === page;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">A2A</span>
              </div>
            </div>
            <span className="hidden sm:block">Orchestra</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 text-sm shadow-lg shadow-blue-600/20"
            >
              Sign Up
            </a>
            <a
              href="#profile"
              className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
              title="Profile"
            >
              <User size={20} className="text-white/70 hover:text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block transition-colors duration-200 py-2 ${
                  isActive(item.href)
                    ? 'text-blue-400'
                    : 'text-white/70 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#signup"
              className="block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign Up
            </a>
            <a
              href="#profile"
              className="flex items-center gap-2 transition-colors duration-200 py-2 text-white/70 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <User size={20} />
              Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}