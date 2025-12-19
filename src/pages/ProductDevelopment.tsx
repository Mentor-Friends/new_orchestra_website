import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, Shield, Brain, Network, Layers, CheckCircle2 } from 'lucide-react';
import { OrganizationIntakeForm } from '../components/OrganizationIntakeForm';

export function ProductDevelopment() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligence Score',
      description: 'Cognitive assessment and reasoning capability benchmarking',
      metric: '95+',
    },
    {
      icon: Cpu,
      title: 'Autonomy Level',
      description: 'Self-directed decision-making and task execution capabilities',
      metric: '90+',
    },
    {
      icon: Network,
      title: 'Reasoning Depth',
      description: 'Multi-step logic processing and causal inference abilities',
      metric: '92+',
    },
    {
      icon: Zap,
      title: 'Neural Efficiency',
      description: 'Processing speed, resource optimization, and response latency',
      metric: '98+',
    },
  ];

  const developmentStages = [
    {
      phase: 'Discovery',
      title: 'Agent Ideation & Requirements',
      description: 'Define use cases, performance requirements, and certification targets',
      features: ['Market Analysis', 'Use Case Definition', 'Metric Planning'],
    },
    {
      phase: 'Design',
      title: 'Architecture & Neural Design',
      description: 'Build agent architecture with security-first principles and neural optimization',
      features: ['System Architecture', 'Security Design', 'Neural Modeling'],
    },
    {
      phase: 'Development',
      title: 'Agent Implementation',
      description: 'Develop and integrate AI capabilities with A2A Orchestra standards',
      features: ['Core Development', 'API Integration', 'Testing Suite'],
    },
    {
      phase: 'Certification',
      title: '4-Metric Verification',
      description: 'Rigorous benchmarking against Intelligence, Autonomy, Reasoning, and Neural Efficiency',
      features: ['Performance Testing', 'Security Audit', 'Quality Assurance'],
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
              Conduct Secure, Enterprise Level,
              <br />
              <span className="text-cyan-300">
                End-to-End Agentic Solutions
              </span>
            </h1>

            <p className="text-cyan-300 text-xl mb-10">
              Amplify Human Vision into a Symphony of Inspired Momentum
            </p>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Most enterprises know they need an autonomous workforce but lack the architecture to orchestrate it. We engineer your foundation from the ground up. <strong className="text-white">You define the vision. We multiply your team's execution power.</strong>
            </p>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              We identify your highest-friction workflows, <strong className="text-white">engineer your custom automation layer</strong>, and deploy a workforce with perfect recall that captures value without pause. It scales human command beyond biological limits. Custom-arranged for your operations. Precision-tuned for the real world. Delivered in <strong className="text-white">4-8 weeks</strong>.
            </p>

            <p className="text-white/80 text-lg mb-10 leading-relaxed">
              <strong className="text-white">While competitors sit on scattered data they can't coordinate</strong>, you achieve pure operational harmony. Zero coordination overhead. Zero integration noise. Your experts command the scale. Your agents handle the grind.
            </p>

            <p className="text-cyan-300 text-xl mb-10">
              Commission the capability. Conduct the tempo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105"
              >
                ORCHESTRATE YOUR ADVANTAGE
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
          </motion.div>

          {/* 4-Metric Framework */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-center mb-12">4-Metric Certification Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                    <feature.icon className="mb-4 text-blue-400" size={32} />
                    <div className="text-3xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {feature.metric}
                    </div>
                    <h3 className="mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-white/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Stages */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Development Lifecycle</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              A structured approach to building certified AI agents with enterprise-grade security and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentStages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-blue-400 mb-2">{stage.phase}</div>
                      <h3 className="mb-3 text-xl">{stage.title}</h3>
                      <p className="text-white/60 mb-6">{stage.description}</p>
                      <div className="space-y-2">
                        {stage.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle2 className="text-green-400" size={16} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security First */}
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
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <Shield className="text-blue-400" size={64} />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="mb-4">Security-First Development</h2>
                    <p className="text-white/70 mb-6">
                      Every agent is built with zero-trust architecture, hallucination detection, 
                      and comprehensive security auditing. Your agents are production-ready from day one.
                    </p>
                    <a
                      href="#security"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Learn about our security
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Start Your Project</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Complete our comprehensive intake form to begin orchestrating your autonomous workforce
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <OrganizationIntakeForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}