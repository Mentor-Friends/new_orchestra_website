import { motion } from 'motion/react';
import { ArrowRight, Rocket, TrendingUp, Shield, Zap, Users, Target, LineChart } from 'lucide-react';

export function Founders() {
  const solutions = [
    {
      icon: Rocket,
      title: 'Rapid Deployment',
      description: 'Launch AI-powered features in days, not months, with production-ready agents',
      stat: '10x faster',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Zero-trust architecture and comprehensive security auditing built-in',
      stat: '100% secure',
    },
    {
      icon: TrendingUp,
      title: 'Scale Confidently',
      description: 'Agents certified for performance, reliability, and enterprise workloads',
      stat: '98% uptime',
    },
    {
      icon: Zap,
      title: 'Cost Efficient',
      description: 'Pay only for what you use with transparent, predictable pricing',
      stat: '60% savings',
    },
  ];

  const useCases = [
    {
      category: 'Customer Experience',
      title: 'Intelligent Customer Support',
      description: 'Deploy AI agents that handle complex customer queries with human-like understanding and response quality',
      impact: '+85% satisfaction',
    },
    {
      category: 'Operations',
      title: 'Process Automation',
      description: 'Automate repetitive workflows and decision-making processes with autonomous AI agents',
      impact: '70% time saved',
    },
    {
      category: 'Analytics',
      title: 'Data Intelligence',
      description: 'Extract insights, generate reports, and make data-driven recommendations automatically',
      impact: '5x faster insights',
    },
    {
      category: 'Development',
      title: 'Code Generation & Review',
      description: 'Accelerate development with AI agents that write, review, and optimize code',
      impact: '3x productivity',
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
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="mb-6">
              Ship AI Features
              <br />
              <span className="text-cyan-300">
                10x Faster
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-10">
              Stop building AI infrastructure from scratch. Deploy certified, production-ready AI agents 
              and focus on what makes your product unique. Trusted by forward-thinking startups and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#agents"
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-orange-600/30 hover:scale-105"
              >
                Explore Agents
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#invest"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-600/30 to-red-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 text-center h-full">
                  <solution.icon className="mx-auto mb-4 text-orange-400" size={32} />
                  <div className="text-2xl mb-2 text-orange-400">{solution.stat}</div>
                  <h3 className="mb-2 text-lg">{solution.title}</h3>
                  <p className="text-sm text-white/60">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Transform Every Part of Your Business</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Production-ready AI agents for every use case, from customer support to data analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-lg bg-orange-600/20 border border-orange-600/30 text-sm text-orange-400">
                      {useCase.category}
                    </span>
                    <span className="text-green-400 text-sm font-semibold">{useCase.impact}</span>
                  </div>
                  <h3 className="mb-3 text-xl">{useCase.title}</h3>
                  <p className="text-white/60">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/30 to-red-600/30 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16">
              <div className="text-center mb-12">
                <h2 className="mb-4">Trusted by Innovative Companies</h2>
                <p className="text-white/60 text-lg">Join startups and enterprises building the future with AI agents</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { value: '500+', label: 'Companies', icon: Users },
                  { value: '10x', label: 'Faster Deployment', icon: Rocket },
                  { value: '98%', label: 'Uptime SLA', icon: Shield },
                  { value: '$2M+', label: 'Cost Saved', icon: LineChart },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="mx-auto mb-3 text-orange-400" size={32} />
                    <div className="text-3xl mb-2 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <Rocket className="mx-auto mb-6 text-orange-400" size={48} />
                <h2 className="mb-6">Ready to Accelerate Your Product?</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                  Schedule a demo to see how A2A Orchestra can help you ship AI features 10x faster 
                  with production-ready agents.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#invest"
                    className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    Schedule Demo
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <a
                    href="#agents"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Browse Agents
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