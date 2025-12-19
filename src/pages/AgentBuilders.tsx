import { motion } from 'motion/react';
import { ArrowRight, Code2, Package, Rocket, DollarSign, BarChart3, Award, Users } from 'lucide-react';

export function AgentBuilders() {
  const benefits = [
    {
      icon: DollarSign,
      title: '70-85% Revenue Share',
      description: 'Industry-leading revenue share for agent creators. Keep what you earn.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Comprehensive testing framework and certification guidance included.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Track performance, usage metrics, and revenue in real-time.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Enterprise Access',
      description: 'Direct access to enterprise customers seeking production-ready agents.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const buildingProcess = [
    {
      title: 'Design Your Agent',
      description: 'Define capabilities, use cases, and target certification metrics',
      tools: ['Agent Blueprint', 'Metric Planning', 'Architecture Design'],
    },
    {
      title: 'Build & Test',
      description: 'Develop using our SDK with integrated testing and benchmarking tools',
      tools: ['A2A SDK', 'Testing Framework', 'Local Development'],
    },
    {
      title: 'Certify',
      description: 'Submit for 4-metric certification with automated and manual review',
      tools: ['Automated Testing', 'Security Audit', 'Performance Review'],
    },
    {
      title: 'Launch & Earn',
      description: 'Publish to marketplace and start earning with every deployment',
      tools: ['Marketplace Listing', 'Revenue Dashboard', 'Customer Support'],
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
              Build, Certify & Monetize
              <br />
              <span className="text-cyan-300">
                Your AI Agents
              </span>
            </h1>

            <p className="text-white/70 text-lg mb-10">
              Join the premier marketplace for AI agent creators. Build once, earn forever with 
              70-85% revenue share and access to enterprise customers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#developers"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/30 hover:scale-105"
              >
                Start Building
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#docs"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                View SDK Docs
              </a>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-10 transition-all duration-300">
                  <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg`}>
                    <benefit.icon className="text-white" size={32} />
                  </div>
                  <h3 className="mb-3 text-2xl">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Building Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">From Concept to Revenue in 4 Steps</h2>
            <p className="text-white/60 text-lg max-w-3xl mx-auto">
              Our streamlined process takes you from idea to marketplace in days, not months
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buildingProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur-lg" />
                <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-3xl border border-white/10 p-10">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl">{step.title}</h3>
                      <p className="text-white/60 mb-6">{step.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70"
                          >
                            {tool}
                          </span>
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

      {/* SDK Preview */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-400" size={32} />
                <h2>Powerful SDK</h2>
              </div>
              <p className="text-white/70 text-lg mb-8">
                Build agents faster with our comprehensive SDK. Includes testing frameworks, 
                certification tools, and deployment automation out of the box.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'TypeScript & Python Support',
                  'Built-in Testing & Benchmarking',
                  'Certification Pre-validation',
                  'One-Click Deployment',
                  'Real-time Performance Monitoring',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="text-blue-400" size={14} />
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Explore SDK Documentation
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl blur-xl" />
              <div className="relative bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-white/40">agent.ts</span>
                </div>
                <pre className="text-sm text-white/70 overflow-x-auto">
                  <code>{`import { A2AAgent } from '@a2a/sdk';

const myAgent = new A2AAgent({
  name: 'DataAnalyzer',
  capabilities: ['analysis', 'insights'],
  certification: {
    intelligence: 95,
    autonomy: 90,
    reasoning: 92,
    efficiency: 98
  }
});

await myAgent.deploy();`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <Package className="mx-auto mb-6 text-green-400" size={48} />
                <h2 className="mb-6">Ready to Build Your First Agent?</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                  Join hundreds of builders creating the next generation of AI agents. 
                  Start earning today with our industry-leading revenue share.
                </p>
                <a
                  href="#developers"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 shadow-lg"
                >
                  Get Started Now
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}