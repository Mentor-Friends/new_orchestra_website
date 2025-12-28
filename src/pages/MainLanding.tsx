import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Shield, Zap, Brain, TrendingUp, Users, Building2, Code, Lock, Network, AlertTriangle, XCircle, Unlink } from 'lucide-react';

export function MainLanding() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="mb-6 text-left"
                style={{
                  textShadow: `
                    0 0 10px rgba(16, 185, 129, 0.4),
                    0 0 20px rgba(16, 185, 129, 0.3),
                    0 0 40px rgba(16, 185, 129, 0.2),
                    0 0 80px rgba(16, 185, 129, 0.15),
                    0 0 120px rgba(16, 185, 129, 0.1)
                  `
                }}
              >
                The Secure AI Agent Marketplace
              </h1>
              <p className="text-amber-300 text-xl mb-6">
                Organizations deploy. Developers ship. Builders cash out.
              </p>
              <p className="text-amber-100/70 text-lg mb-8 leading-relaxed">
                A2A Orchestra is the only exchange where trust is mathematical, not theoretical.
                We enforce the Google A2A Protocol with adversarial security testing at the protocol level.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#product"
                  className="px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  Deploy
                </a>
                <a
                  href="#developers"
                  className="px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  Ship
                </a>
                <a
                  href="#agent-builders"
                  className="px-6 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  Build
                </a>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Central Orchestra Image */}
              <div className="relative flex items-center justify-center min-h-[300px]">
                <div className="relative rounded-full overflow-hidden" style={{ width: '320px', height: '320px' }}>
                  <div className="absolute -inset-4 bg-amber-400/20 blur-3xl rounded-full" />
                  <img
                    src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&h=500&fit=crop"
                    alt="Orchestra conductor"
                    className="relative w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section - Text Left, Image Right */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">The Opportunity</p>
              <h2 className="mb-6 text-left">
                The Agent Economy is Ready to Thrive
              </h2>
              <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                The agent economy is <strong className="text-amber-100">primed for breakthrough</strong> as
                AI capabilities align with <strong className="text-amber-100">enterprise readiness</strong>.
              </p>
              <p className="text-amber-100/70 text-lg leading-relaxed">
                Enterprises are ready for autonomous AI with verified trust. Developers are building incredible agents
                ready to reach business clients. Builders are creating value ready to be captured.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Problem Visual - Clean Image */}
              <div className="relative flex items-center justify-center min-h-[280px]">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <div className="absolute -inset-4 bg-rose-900/30 blur-3xl rounded-full" />
                  <img
                    src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=400&h=400&fit=crop"
                    alt="Digital fragmentation"
                    className="relative w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution Section - Image Left, Text Right (Zig-Zag) */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - Now on Left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              {/* Solution Visual - Clean Image */}
              <div className="relative flex items-center justify-center min-h-[280px]">
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                  <div className="absolute -inset-4 bg-amber-400/30 blur-3xl rounded-full" />
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop"
                    alt="Security and trust"
                    className="relative w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Text Content - Now on Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">The Solution</p>
              <h2 className="mb-6 text-left">
                Trust Infrastructure for the Agent Economy
              </h2>
              <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                A2A Orchestra <strong className="text-amber-100">verifies agents at the protocol level</strong>.
                Every agent on our platform has passed rigorous adversarial testing.
              </p>
              <ul className="space-y-3">
                {[
                  'Protocol-level security verification',
                  'Adversarial testing for every agent',
                  'Mathematical trust, not theoretical',
                  'Fair compensation for builders'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-amber-100/70">
                    <CheckCircle2 className="text-amber-400 flex-shrink-0" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve - 3 Column Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Who We Serve</p>
            <h2 className="mb-6">
              One Platform, Three Winners
            </h2>
            <p className="text-amber-100/70 text-lg mx-auto text-center">
              A2A Orchestra creates value for everyone in the AI agent ecosystem.
            </p>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
                title: 'Enterprises',
                gradient: 'from-amber-500 to-amber-600',
                description: 'Deploy AI agents with confidence. Every agent is verified, secure, and compliant.',
                cta: 'Deploy Agents',
                href: '#product-development'
              },
              {
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
                title: 'Developers',
                gradient: 'from-amber-600 to-amber-700',
                description: 'Stop building plumbing and start shipping intelligence. Orchestrate verified agents into your stack with one protocol and one token.',
                cta: 'Start Shipping',
                href: '#signin'
              },
              {
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
                title: 'Agent Builders',
                gradient: 'from-amber-700 to-amber-800',
                description: 'Create the building blocks of the agent economy. Get certified. Get discovered. Get paid.',
                cta: 'Get Certified',
                href: '#signin'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <a
                  href={item.href}
                  className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 overflow-hidden h-full transition-all duration-300 flex flex-col cursor-pointer block"
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-40 overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/60 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                  </div>
                  <div className="p-8 pt-4 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                    <p className="text-amber-100/70 mb-6 flex-grow">{item.description}</p>
                    <span className="inline-flex items-center gap-2 text-amber-400 group-hover:text-amber-300 transition-colors mt-auto">
                      {item.cta}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1208] to-[#0a0804] rounded-3xl border border-amber-500/30 p-12 lg:p-16 text-center">
                <h2 className="mb-6">
                  Ready to Join the Agent Economy?
                </h2>
                <p className="text-amber-100/70 mb-10 mx-auto text-lg text-center">
                  The overture is over. The market is open.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#signin"
                    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-600/20 text-amber-950 font-semibold"
                  >
                    Deploy AI Agents
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <a
                    href="#signin"
                    className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 text-amber-100"
                  >
                    Publish Your Agent
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
