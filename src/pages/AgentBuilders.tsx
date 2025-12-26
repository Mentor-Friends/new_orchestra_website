import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, DollarSign, CheckCircle2, FileSearch, Cpu, Lock } from 'lucide-react';

export function AgentBuilders() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div
          className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">For Agent Builders</p>
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
                Join the Orchestra
              </h1>
              <p className="text-amber-300 text-xl mb-6">
                Where builders compose the future.
              </p>
              <p className="text-amber-100/70 text-lg mb-4 leading-relaxed">
                A2A Orchestra is the marketplace for production-grade AI agents. Every agent here
                is verified before listing. Developers integrate with confidence. Enterprises deploy
                without second-guessing.
              </p>
              <p className="text-amber-100/70 text-lg mb-8 leading-relaxed">
                What you compose becomes infrastructure others build on. Early builders shape the
                repertoire. First movers set the standard.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#signin"
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105 text-amber-950 font-semibold"
                >
                  Audition Your Agent
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a
                  href="#standards"
                  className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  View Standards
                </a>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-3xl blur-2xl" />
                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 text-center">
                  <p className="text-amber-300 italic text-lg mb-4">The ensemble is forming. The score is being written.</p>
                  <p className="text-amber-100 font-semibold text-xl">Compose the instrument. Take the stage.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Standards - 3 Column Grid */}
      <section id="standards" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Quality Assurance</p>
            <h2 className="mb-6">
              Our Core Standards
            </h2>
            <p className="text-amber-100/70 text-lg mx-auto text-center">
              We differentiate ourselves through strict adherence to quality and security. Unlike open
              repositories where quantity is the metric, our marketplace prioritizes <strong className="text-amber-100">reliability</strong>.
            </p>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
                title: 'Reliability & Quality Assurance',
                gradient: 'from-amber-500 to-amber-600',
                description: 'Our clients rely on A2A for critical workflows. Therefore, we maintain a strict curation policy:',
                features: [
                  { title: 'Performance Verification', desc: 'Every agent undergoes rigorous stress testing.' },
                  { title: 'Subpar Agents are Rejected', desc: 'Only consistent, repeatable performance is deployed.' },
                  { title: 'Continuous Monitoring', desc: 'Live agents are monitored for uptime and accuracy.' }
                ]
              },
              {
                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop',
                title: 'Enterprise-Grade Security',
                gradient: 'from-amber-600 to-amber-700',
                description: 'Security is the foundation of our platform. We employ a defense-in-depth architecture:',
                features: [
                  { title: 'Sandboxed Execution', desc: 'All agent code runs within isolated environments.' },
                  { title: 'Malicious Actor Prevention', desc: 'Guardian Agent scans for attack vectors.' },
                  { title: 'Immediate Isolation', desc: 'Suspicious agents are instantly quarantined.' }
                ]
              },
              {
                image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=400&fit=crop',
                title: 'Developer-First Monetization',
                gradient: 'from-amber-700 to-amber-800',
                description: 'We believe architects of the future workforce deserve the majority of value they create.',
                features: [
                  { title: '70% Revenue Share', desc: 'You retain 70% of all gross revenue.' },
                  { title: '30% Platform Fee', desc: 'Minimal fee for orchestration and security.' }
                ]
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
                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full transition-all duration-300">
                  <div className="photo-immersive-thumb w-14 h-14 rounded-2xl mb-6">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                  <p className="text-amber-100/70 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-amber-100/70">
                        <CheckCircle2 className="text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                        <span><strong className="text-amber-100">{feature.title}:</strong> {feature.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process - 3 Column Grid */}
      <section id="certification" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Getting Listed</p>
            <h2 className="mb-6 text-center">
              The Certification Process
            </h2>
            <p className="text-amber-100/70 text-lg text-center">
              To ensure compliance with our standards, all developers must pass our three-stage
              verification workflow before publishing.
            </p>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
                step: '01',
                title: 'Technical Review',
                description: 'We analyze your agent\'s architecture to ensure it meets our API standards and best practices for modular design.'
              },
              {
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
                step: '02',
                title: 'Automated Benchmarking',
                description: 'Your agent is tested against standardized datasets to measure accuracy, efficiency, and stability. We evaluate precision in data retrieval, token usage optimization, and error recovery ability.'
              },
              {
                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=400&fit=crop',
                step: '03',
                title: 'Security Audit',
                description: 'Our systems perform static and dynamic analysis to ensure your agent does not leak sensitive data or contain vulnerabilities.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 h-full">
                  <div className="photo-immersive-thumb w-12 h-12 rounded-2xl mb-6">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <div className="text-amber-400 font-bold text-sm mb-2">STAGE {item.step}</div>
                  <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                  <p className="text-amber-100/70 mb-4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Model - Split Layout */}
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
              <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Monetization</p>
              <h2 className="mb-6 text-left">
                Compensation Model: Token-Based Pay
              </h2>
              <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                We utilize a standardized token economy. Each token has a fixed value, and more complex agents
                consume more tokens per task based on their computational requirements.
              </p>
              <div className="bg-[#1a1208]/80 backdrop-blur-xl rounded-2xl border border-amber-500/20 p-6 mb-6">
                <h4 className="text-amber-100 font-semibold mb-2">Pricing Structure</h4>
                <p className="text-amber-100/70 mb-4">Tokens are standardized. Complexity determines token consumption.</p>
                <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                  <code className="text-amber-300 text-sm">
                    Agent Complexity → Tokens Per Task → Your Revenue
                  </code>
                </div>
              </div>
            </motion.div>

            {/* Revenue Table */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-6 overflow-hidden">
                <h3 className="text-lg font-bold text-amber-100 mb-4">Token Consumption Examples</h3>
                <div className="space-y-4">
                  {[
                    { type: 'Simple', color: 'text-amber-400', example: 'Zillow Scraper', value: '~50 tokens/task' },
                    { type: 'Moderate', color: 'text-amber-500', example: 'Construction Bid Leveler', value: '~500 tokens/task' },
                    { type: 'Complex', color: 'text-amber-600', example: 'Zoning Compliance Engine', value: '~5,000+ tokens/task' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-amber-500/10 last:border-0">
                      <div>
                        <span className={`${item.color} font-semibold`}>{item.type}</span>
                        <p className="text-amber-100/60 text-sm">{item.example}</p>
                      </div>
                      <span className="text-green-400 font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-amber-100/50 text-xs mt-4 italic">
                  More complex agents command higher payouts per task execution.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Get Started</p>
                <h2 className="mb-6 text-center">
                  Become a Partner
                </h2>
                <p className="text-amber-100/70 mb-10 text-lg text-center">
                  Join a network of professional engineers automating the physical economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#docs"
                    className="px-6 py-3 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 text-amber-100"
                  >
                    View Developer Documentation
                  </a>
                  <a
                    href="#certification"
                    className="group px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-amber-600/30 text-amber-950 font-semibold"
                  >
                    Apply for Certification
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
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
