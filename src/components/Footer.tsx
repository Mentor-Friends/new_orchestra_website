import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    Platform: [
      { label: 'Browse Agents', href: '#marketplace' },
      { label: 'Certification', href: '#agent-builders' },
      { label: 'Security', href: '#tech-benefits' },
      { label: 'Pricing', href: '#developers' },
    ],
    Developers: [
      { label: 'Publish Agent', href: '#agent-builders' },
      { label: 'API Reference', href: '#' },
      { label: 'Revenue Calculator', href: '#' },
    ],
    Resources: [
      { label: 'Blog', href: '#blogs' },
      { label: 'Case Studies', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Status', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Founders', href: '#founders' },
      { label: 'Contact', href: '#product' },
      { label: 'Privacy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/a2a-orchestra/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:storeaiagent@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0a0804] border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/logos/a2a-logo.png"
                  alt="A2A Orchestra"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <span className="text-amber-100 font-medium">A2A Orchestra</span>
            </div>
            <p className="text-sm text-amber-100/60 mb-6 max-w-xs">
              The first security focused marketplace for production ready AI agents.
              Built for enterprises, designed for developers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200"
                >
                  <social.icon size={16} className="text-amber-100/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm text-amber-100">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-amber-100/60 hover:text-amber-100 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-amber-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-amber-100/50">
            &copy; {new Date().getFullYear()} A2A Orchestra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-amber-100/50 hover:text-amber-100 transition-colors duration-200">
              Terms
            </a>
            <a href="#" className="text-amber-100/50 hover:text-amber-100 transition-colors duration-200">
              Privacy
            </a>
            <a href="#" className="text-amber-100/50 hover:text-amber-100 transition-colors duration-200">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
