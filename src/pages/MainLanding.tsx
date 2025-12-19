import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Code, Zap, Brain, Lock, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MainLanding() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Production-Ready', 'Secure', 'Verified', 'Certified'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'AI Trust Platform',
      description: 'Neural network verification with real-time performance analytics and cognitive load assessment',
      href: '#platform',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Intelligent Agents',
      description: 'Autonomous AI systems with advanced reasoning, multi-step logic, and adaptive learning',
      href: '#agents',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'AI Security',
      description: 'Zero-trust architecture with hallucination detection and prompt injection defense',
      href: '#security',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Code,
      title: 'AI Developers',
      description: 'Build and monetize intelligent agents with built-in benchmarking and analytics',
      href: '#developers',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="mb-6">
                The Secure AI Agent Marketplace & Services Platform
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 max-w-3xl mx-auto text-cyan-300 text-xl text-center"
            >
              Enterprises deploy. Developers ship. Builders cash out.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed text-center"
            >
              The agent economy has been paralyzed by a standoff between the promise of AI and the reality of enterprise risk.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10 max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-center"
            >
              A2A Orchestra ends the standoff. By enforcing the Google A2A Protocol with adversarial security testing at the protocol level, we direct the only exchange where trust is mathematical, not theoretical.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-10 max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-center"
            >
              This is the platform where Enterprises commission autonomous workforces. Developers stop building plumbing and start shipping intelligence. Builders capture enterprise budgets their competitors can't reach.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-12 text-cyan-300 text-xl italic text-center"
            >
              The overture is over. The market is open.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a
                href="#product"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
              >
                Enterprise: Deploy or Build
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#developers"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Developer: Ship
              </a>
              <a
                href="#agent-builders"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Builder: Sell
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
            >
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-24 max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '50+', label: 'Production Agents', icon: Brain },
                { value: '98%', label: 'Avg Reliability', icon: CheckCircle2 },
                { value: '1000+', label: 'Deployments', icon: Zap },
                { value: '85%', label: 'Revenue Share', icon: TrendingUp },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 max-w-4xl mx-auto"
          >
            <h2 className="mb-6">The Complete AI Agent Ecosystem</h2>
            <p className="text-white/60 text-lg">
              From neural verification to autonomous deployment - everything you need for enterprise AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.a
                key={feature.title}
                href={feature.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative block"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 lg:p-12 transition-all duration-300 h-full">
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-4 text-2xl">{feature.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <h2 className="mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                  Join enterprises and developers who trust A2A Orchestra for secure, 
                  certified, and enterprise-grade AI automation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#agents"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                    Browse Agents
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <a
                    href="#developers"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    Start Publishing
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