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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        {/* iOS-style glassmorphism pill container */}
        <div className={`
          flex items-center justify-between h-14 px-4 
          rounded-2xl transition-all duration-500
          ${scrolled
            ? 'bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg shadow-black/20'
            : 'bg-white/5 backdrop-blur-xl border border-white/10'
          }
        `}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-medium">A2A</span>
              </div>
            </div>
            <span className="hidden sm:block font-medium text-white/90">Orchestra</span>
          </a>

          {/* Desktop Navigation - iOS pill-style buttons */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive(item.href)
                    ? 'bg-white/15 text-white shadow-inner border border-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* iOS-style pill button for Sign Up */}
            <a
              href="#signup"
              className="
                px-5 py-2 rounded-xl text-sm font-medium
                bg-gradient-to-r from-blue-500 to-purple-500 
                hover:from-blue-400 hover:to-purple-400
                shadow-lg shadow-blue-500/30
                border border-white/20
                transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40
              "
            >
              Sign Up
            </a>
            {/* iOS-style circular button for Profile */}
            <a
              href="#profile"
              className="
                p-2.5 rounded-xl 
                bg-white/10 hover:bg-white/20 
                border border-white/10 hover:border-white/20
                transition-all duration-300
              "
              title="Profile"
            >
              <User size={18} className="text-white/80" />
            </a>
          </div>

          {/* Mobile Menu Button - iOS style */}
          <button
            className="
              lg:hidden p-2 rounded-xl 
              bg-white/10 hover:bg-white/20 
              border border-white/10
              transition-all duration-200
            "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} className="text-white" /> : <Menu size={22} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu - iOS style dropdown */}
        {mobileMenuOpen && (
          <div className="
            lg:hidden mt-2 p-4 
            bg-white/10 backdrop-blur-2xl 
            rounded-2xl border border-white/20 
            shadow-xl shadow-black/20
          ">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2 space-y-2">
                <a
                  href="#signup"
                  className="
                    block px-4 py-3 rounded-xl text-sm font-medium text-center
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    border border-white/20 shadow-lg shadow-blue-500/20
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </a>
                <a
                  href="#profile"
                  className="
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    text-white/70 hover:text-white hover:bg-white/10
                    transition-all duration-200
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User size={18} />
                  Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}