import { motion } from 'motion/react';
import { ArrowRight, Book, Code2, Zap, Shield, FileText, Search, ExternalLink } from 'lucide-react';

export function Docs() {
  const quickStart = [
    {
      title: 'Installation',
      description: 'Install the A2A SDK and set up your development environment',
      time: '5 min',
      link: '#',
    },
    {
      title: 'Your First Agent',
      description: 'Create and deploy your first AI agent to the marketplace',
      time: '15 min',
      link: '#',
    },
    {
      title: 'Certification Guide',
      description: 'Learn how to certify your agent with the 4-metric framework',
      time: '20 min',
      link: '#',
    },
    {
      title: 'Publishing',
      description: 'Deploy your certified agent and start earning revenue',
      time: '10 min',
      link: '#',
    },
  ];

  const sections = [
    {
      icon: Code2,
      title: 'API Reference',
      description: 'Complete API documentation with examples and code snippets',
      docs: ['Agent API', 'Authentication', 'Webhooks', 'SDK Methods'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Security best practices, zero-trust architecture, and compliance',
      docs: ['Zero-Trust Guide', 'Security Auditing', 'Compliance', 'Data Privacy'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Deployment',
      description: 'Deploy, scale, and monitor your AI agents in production',
      docs: ['Deployment Guide', 'Scaling', 'Monitoring', 'CI/CD Integration'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Book,
      title: 'Guides & Tutorials',
      description: 'In-depth guides for building and optimizing your agents',
      docs: ['Best Practices', 'Performance Tuning', 'Use Cases', 'Troubleshooting'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="mb-6">
              Everything You Need
              <br />
              <span className="text-cyan-300">
                To Build & Deploy
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-10">
              Comprehensive guides, API references, and tutorials to help you build production-ready AI agents
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-blue-500 transition-colors backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-center mb-12">Quick Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStart.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group relative block"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-lg">
                        {index + 1}
                      </div>
                      <span className="text-xs text-white/50">{item.time}</span>
                    </div>
                    <h3 className="mb-2 text-lg group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-4">{item.description}</p>
                    <div className="flex items-center gap-1 text-cyan-400 text-sm group-hover:gap-2 transition-all">
                      <span>Start</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Documentation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${section.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 transition-all duration-300">
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                    <section.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl">{section.title}</h3>
                  <p className="text-white/60 mb-6">{section.description}</p>
                  <div className="space-y-3">
                    {section.docs.map((doc) => (
                      <a
                        key={doc}
                        href="#"
                        className="flex items-center justify-between group/item p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <span className="text-white/80 group-hover/item:text-white transition-colors">
                          {doc}
                        </span>
                        <ExternalLink
                          className="text-white/40 group-hover/item:text-white/80 transition-colors"
                          size={16}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Get Started in Minutes</h2>
            <p className="text-white/60 text-lg">Simple, intuitive API for building powerful AI agents</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-2xl blur-xl" />
              <div className="relative bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-white/40">quick-start.ts</span>
                </div>
                <div className="p-8">
                  <pre className="text-sm text-white/80 overflow-x-auto">
                    <code>{`import { A2AAgent } from '@a2a/sdk';

// Initialize your agent
const agent = new A2AAgent({
  name: 'CustomerSupportAgent',
  version: '1.0.0',
  capabilities: [
    'natural_language_processing',
    'sentiment_analysis',
    'ticket_routing'
  ]
});

// Configure certification targets
agent.setCertificationTargets({
  intelligence: 95,
  autonomy: 90,
  reasoning: 92,
  efficiency: 98
});

// Deploy to marketplace
await agent.deploy({
  pricing: 'usage-based',
  revenueShare: 0.85
});

console.log('Agent deployed successfully!');`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <Book className="mx-auto mb-6 text-cyan-400" size={48} />
                <h2 className="mb-6">Need Help?</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                  Join our community or reach out to our support team for personalized assistance
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#"
                    className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors"
                  >
                    Join Community
                  </a>
                  <a
                    href="#"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}