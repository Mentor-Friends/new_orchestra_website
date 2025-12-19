import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, DollarSign, Users, Target, BarChart3, Zap, Globe } from 'lucide-react';

export function Invest() {
  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '$2.4M', growth: '+85%', icon: DollarSign },
    { label: 'Active Enterprise Customers', value: '500+', growth: '+120%', icon: Users },
    { label: 'Agents Deployed', value: '10K+', growth: '+200%', icon: Zap },
    { label: 'Developer Community', value: '5K+', growth: '+150%', icon: Globe },
  ];

  const highlights = [
    {
      icon: TrendingUp,
      title: 'Explosive Growth',
      description: '200% YoY growth in agent deployments with 85%+ revenue share model attracting top developers',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Shield,
      title: 'Defensible Moat',
      description: 'Proprietary 4-metric certification framework with zero-trust security architecture',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Network Effects',
      description: 'More agents attract more enterprises, which attract more developers in a virtuous cycle',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Massive Market',
      description: '$200B+ AI automation market with enterprise AI adoption accelerating globally',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const milestones = [
    {
      quarter: 'Q4 2023',
      title: 'Platform Launch',
      description: 'Initial marketplace with 50 certified agents',
      completed: true,
    },
    {
      quarter: 'Q1 2024',
      title: 'Enterprise Adoption',
      description: 'First 100 enterprise customers, $1M ARR',
      completed: true,
    },
    {
      quarter: 'Q2 2024',
      title: 'Series A',
      description: '$15M funding round, international expansion',
      completed: true,
    },
    {
      quarter: 'Q3 2024',
      title: 'Scale Phase',
      description: '500+ enterprises, 5K+ developers, $2.4M MRR',
      completed: true,
    },
    {
      quarter: 'Q4 2024',
      title: 'Series B',
      description: '$50M growth round to accelerate expansion',
      completed: false,
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
              Invest in the Future
              <br />
              <span className="text-cyan-300">
                of AI Automation
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-10">
              Join us in building the world's premier marketplace for production-ready AI agents. 
              We're revolutionizing how enterprises deploy AI at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:investors@a2aorchestra.com"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/30 hover:scale-105"
              >
                Request Investor Deck
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#metrics"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                View Metrics
              </a>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            id="metrics"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 text-center">
                  <metric.icon className="mx-auto mb-4 text-green-400" size={32} />
                  <div className="text-3xl mb-2 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <p className="text-sm text-white/60 mb-2">{metric.label}</p>
                  <div className="text-xs text-green-400">{metric.growth} QoQ</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Why A2A Orchestra</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Category-defining platform at the intersection of AI, security, and developer economics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${highlight.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 transition-all duration-300">
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-lg`}>
                    <highlight.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl">{highlight.title}</h3>
                  <p className="text-white/60">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Our Journey</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Rapid execution and consistent growth quarter over quarter
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green-600 via-emerald-600 to-cyan-600" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.quarter}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex gap-8"
                  >
                    {/* Dot */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        milestone.completed
                          ? 'bg-gradient-to-br from-green-600 to-emerald-600'
                          : 'bg-white/10 border-2 border-white/20'
                      }`}
                    >
                      {milestone.completed ? (
                        <BarChart3 className="text-white" size={24} />
                      ) : (
                        <Target className="text-white/60" size={24} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-12">
                      <div className="relative">
                        <div className={`absolute -inset-1 rounded-2xl blur ${
                          milestone.completed
                            ? 'bg-gradient-to-br from-green-600/20 to-emerald-600/20'
                            : 'bg-gradient-to-br from-white/5 to-white/5'
                        }`} />
                        <div className={`relative rounded-2xl border p-8 ${
                          milestone.completed
                            ? 'bg-[#0f0f0f]/90 border-white/10'
                            : 'bg-[#0a0a0a]/90 border-white/5'
                        }`}>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-sm ${
                              milestone.completed ? 'text-green-400' : 'text-white/50'
                            }`}>
                              {milestone.quarter}
                            </span>
                            {milestone.completed && (
                              <span className="px-2 py-1 rounded bg-green-600/20 text-green-400 text-xs">
                                Completed
                              </span>
                            )}
                          </div>
                          <h3 className="mb-2 text-xl">{milestone.title}</h3>
                          <p className="text-white/60">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <TrendingUp className="mx-auto mb-6 text-green-400" size={48} />
                <h2 className="mb-6">Join Our Growth Story</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                  We're raising a $50M Series B to accelerate growth, expand globally, 
                  and solidify our position as the #1 AI agent marketplace.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="mailto:investors@a2aorchestra.com"
                    className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    Contact Investor Relations
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <a
                    href="#"
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Download Deck
                  </a>
                </div>
                <p className="text-xs text-white/40 mt-8">
                  * Information is confidential and subject to NDA
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}