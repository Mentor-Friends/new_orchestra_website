import { motion } from 'motion/react';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export function SecurityArchitecture() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'AI-Native Authentication',
      description: 'Token-scoped permissions with neural fingerprinting. Every AI agent operates with minimal necessary access and cognitive boundaries.',
      detail: 'Zero-knowledge AI auth',
    },
    {
      icon: Eye,
      title: 'Hallucination Detection',
      description: 'Real-time monitoring for AI drift, logic inconsistencies, and neural hallucinations using adversarial testing.',
      detail: 'Cognitive monitoring',
    },
    {
      icon: AlertTriangle,
      title: 'Prompt Injection Shield',
      description: 'Multi-layer defense against jailbreaking, adversarial prompts, and neural manipulation attempts.',
      detail: 'AI safety barriers',
    },
    {
      icon: Shield,
      title: 'Neural Sandboxing',
      description: 'AI agents run in isolated cognitive containers preventing cross-contamination and ensuring deterministic behavior.',
      detail: 'Complete AI isolation',
    },
  ];

  return (
    <section id="security" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 mb-6">
            <Shield className="text-red-400" size={16} />
            <span className="text-red-400 text-sm">AI-First Security Architecture</span>
          </div>
          <h2 className="mb-6">Security Built for Autonomous Intelligence</h2>
          <p className="text-white/60">
            Traditional security isn&apos;t enough for AI. We built A2A Orchestra with cognitive security - 
            protecting against hallucinations, prompt attacks, and neural drift from the ground up.
          </p>
        </motion.div>

        {/* Main Security Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-[#111111] to-[#0a0a0a] rounded-3xl border border-white/10 p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Authentication', 'Monitoring', 'Defense', 'Isolation'].map((layer, index) => (
                  <motion.div
                    key={layer}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 animate-ping opacity-20" />
                      <Shield className="text-white relative z-10" size={24} />
                    </div>
                    <p className="text-sm text-white/80">{layer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/10 hover:border-red-600/30 p-8 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg">{feature.title}</h3>
                      <span className="text-xs px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-red-400">
                        {feature.detail}
                      </span>
                    </div>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/5 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <Shield className="text-green-500" size={20} />
              <span className="text-sm text-white/80">SOC 2 Compliant</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Shield className="text-blue-500" size={20} />
              <span className="text-sm text-white/80">GDPR Ready</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex items-center gap-2">
              <Shield className="text-purple-500" size={20} />
              <span className="text-sm text-white/80">ISO 27001</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}