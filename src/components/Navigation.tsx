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
    { label: 'About', href: '#about' },
    { label: 'Founders', href: '#founders' },
  ];

  const isActive = (href: string) => {
    const page = href.slice(1);
    return currentPage === page;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism pill container */}
        <div className={`
          flex items-center justify-between h-14 px-4 
          rounded-2xl transition-all duration-500
          ${scrolled
            ? 'bg-neutral-950/40 backdrop-blur-2xl border border-white/10 shadow-lg shadow-black/20'
            : 'bg-neutral-950/20 backdrop-blur-xl border border-white/5'
          }
        `}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline cursor-pointer hover:opacity-100">
            <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="/logo.png"
                alt="A2A Orchestra"
                className="w-10 h-10 object-cover rounded-full hover:brightness-100"
              />
            </div>
            <span className="hidden sm:block font-medium text-amber-100 hover:text-amber-100">A2A Orchestra</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
                  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  ${isActive(item.href)
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.5)] border border-white/50'
                    : 'text-white/70 hover:text-black hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Sign In button with angelic glow */}
            <a
              href="#signin"
              className="
                px-5 py-2 rounded-xl text-sm font-medium
                bg-gradient-to-r from-violet-400 to-violet-500 
                hover:from-violet-300 hover:to-violet-400
                shadow-lg shadow-violet-500/30
                border border-violet-300/30
                text-white font-semibold
                transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]
              "
            >
              Sign In
            </a>
            {/* Profile button */}
            <a
              href="#profile"
              className="
                p-2.5 rounded-xl 
                bg-violet-500/10 hover:bg-violet-500/20 
                border border-violet-400/20 hover:border-violet-400/40
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.3)]
              "
              title="Profile"
            >
              <User size={18} className="text-violet-200/80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              lg:hidden p-2 rounded-xl 
              bg-amber-500/10 hover:bg-amber-500/20 
              border border-amber-500/20
              transition-all duration-200
            "
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} className="text-amber-100" /> : <Menu size={22} className="text-amber-100" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="
            lg:hidden mt-2 p-4 
            bg-amber-950/30 backdrop-blur-2xl 
            rounded-2xl border border-amber-500/20 
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
                      ? 'bg-amber-500/20 text-amber-200 border border-amber-500/30'
                      : 'text-amber-100/70 hover:text-amber-100 hover:bg-amber-500/10'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-amber-500/20 mt-2 space-y-2">
                <a
                  href="#signin"
                  className="
                    block px-4 py-3 rounded-xl text-sm font-medium text-center
                    bg-gradient-to-r from-amber-500 to-amber-600 
                    border border-amber-400/30 shadow-lg shadow-amber-500/20
                    text-amber-950 font-semibold
                  "
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="#profile"
                  className="
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                    text-amber-100/70 hover:text-amber-100 hover:bg-amber-500/10
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