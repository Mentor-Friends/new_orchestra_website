import { motion } from 'motion/react';
import { DollarSign, TrendingUp, Code, Server } from 'lucide-react';
import { useState } from 'react';

export function DeveloperEconomy() {
  const [selectedTier, setSelectedTier] = useState(1);

  const tiers = [
    { name: 'New Developer', share: '70%', color: 'from-blue-500 to-cyan-500' },
    { name: 'Growing Developer', share: '77%', color: 'from-purple-500 to-pink-500' },
    { name: 'Established Developer', share: '85%', color: 'from-orange-500 to-red-500' },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: '70-85% Revenue Share',
      description: 'Keep most of your earnings while we handle infrastructure. Focus on building intelligent agents, not payment systems.',
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Pricing',
      description: 'Smart pricing recommendations based on neural complexity, token efficiency, and market intelligence for optimal monetization.',
    },
    {
      icon: Code,
      title: 'Neural Analytics Dashboard',
      description: 'Track cognitive performance, reasoning patterns, and user interactions. Optimize your AI with real intelligence metrics.',
    },
    {
      icon: Server,
      title: 'Autonomous Deployment',
      description: 'Auto-scaling infrastructure that adapts to your AI agent&apos;s needs. From GPU clusters to serverless neural processing.',
    },
  ];

  return (
    <section id="developers" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="mb-6">
            Built for <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">AI Creators</span>
          </h2>
          <p className="text-white/60">
            A2A Orchestra is your AI publishing platform. We handle neural infrastructure, cognitive monitoring, 
            and payments while you retain majority revenue and full control of your intelligent agents.
          </p>
        </motion.div>

        {/* Revenue Share Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-5xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />
            <div className="relative bg-[#111111] rounded-3xl border border-white/10 p-8 lg:p-12">
              <h3 className="text-center mb-8">Revenue Share by Tier</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {tiers.map((tier, index) => (
                  <button
                    key={tier.name}
                    onClick={() => setSelectedTier(index)}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      selectedTier === index
                        ? 'bg-white/10 border-white/30'
                        : 'bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                    }`}
                  >
                    <div className={`mb-3 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.share}
                    </div>
                    <p className="text-sm text-white/70">{tier.name}</p>
                  </button>
                ))}
              </div>

              {/* Visual Representation */}
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-white/70">Your Share</span>
                  <span className="text-sm text-white/70">Platform Fee</span>
                </div>
                <div className="h-12 bg-white/5 rounded-lg overflow-hidden flex">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: tiers[selectedTier].share }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-r ${tiers[selectedTier].color} flex items-center justify-center`}
                  >
                    <span className="text-sm">{tiers[selectedTier].share}</span>
                  </motion.div>
                  <div className="flex-1 bg-white/10 flex items-center justify-center">
                    <span className="text-sm text-white/60">
                      {100 - parseInt(tiers[selectedTier].share)}%
                    </span>
                  </div>
                </div>
                <p className="text-xs text-white/50 text-center mt-4">
                  Tier based on monthly revenue and agent quality score
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/10 hover:border-white/20 p-8 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-3 text-lg">{benefit.title}</h3>
                <p className="text-white/60">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20"
          >
            Start Publishing
            <Code size={18} />
          </a>
          <p className="mt-4 text-sm text-white/50">Free to list. No upfront costs.</p>
        </motion.div>
      </div>
    </section>
  );
}