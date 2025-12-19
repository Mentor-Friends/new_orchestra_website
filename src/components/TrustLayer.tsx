import { motion } from 'motion/react';
import { Shield, Target, TrendingUp, Zap } from 'lucide-react';

export function TrustLayer() {
  const features = [
    {
      icon: Shield,
      title: 'Neural Verification Layer',
      description: 'Every agent undergoes cognitive testing, reasoning benchmarks, and decision-making validation. Only AI that thinks reliably makes it to production.',
    },
    {
      icon: Target,
      title: 'AI Performance Metrics',
      description: 'Real-time analytics on reasoning depth, tool usage efficiency, and adaptive learning capabilities - complete transparency into AI intelligence.',
    },
    {
      icon: TrendingUp,
      title: 'Enterprise AI Quality',
      description: 'Built for businesses deploying autonomous systems. From predictive analytics to decision automation - AI you can trust.',
    },
    {
      icon: Zap,
      title: 'Intelligence-Ready Certification',
      description: 'All agents pass cognitive benchmarks for reasoning, problem-solving, and autonomous operation in complex environments.',
    },
  ];

  return (
    <section id="platform" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="mb-6">
            Build Trust Through <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">AI Intelligence</span>
          </h2>
          <p className="text-white/60">
            Traditional AI lacks transparency. A2A Orchestra brings neural verification and cognitive testing 
            to every agent, ensuring reliable autonomous intelligence for enterprise deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="mb-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}