import { motion } from 'motion/react';
import { ArrowRight, Shield, Award, DollarSign, CheckCircle2, FileSearch, Cpu, Lock, FileText } from 'lucide-react';

export function AgentBuilders() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 mt-8">
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
                Join the Orchestra
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-cyan-300 text-xl text-center"
            >
              Where builders compose the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8 max-w-3xl mx-auto space-y-6 text-white/80 text-lg leading-relaxed text-center"
            >
              <p>
                A2A Orchestra is the marketplace for production-grade AI agents.
              </p>
              <p>
                Every agent here is verified before listing. Developers integrate with confidence. Enterprises deploy without second-guessing. Your work joins a catalog designed to perform.
              </p>
              <p>
                What you compose becomes infrastructure others build on. Early builders shape the repertoire. First movers set the standard.
              </p>
              <p className="text-cyan-300 italic">
                The ensemble is forming. The score is being written.
              </p>
              <p className="font-semibold text-white">
                Compose the instrument. Take the stage.
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <a
                href="#certification"
                className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/30 hover:scale-105"
              >
                AUDITION YOUR AGENT
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Core Standards Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Our Core Standards</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We differentiate ourselves through strict adherence to quality and security. Unlike open repositories where quantity is the metric, our marketplace prioritizes <strong className="text-white">reliability</strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Reliability & Quality Assurance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">1. Reliability & Quality Assurance</h3>
                <p className="text-white/70 mb-6">Our clients rely on A2A for critical workflows. Therefore, we maintain a strict curation policy:</p>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Performance Verification:</strong> Every agent undergoes rigorous stress testing. We do not list agents that fail to handle edge cases or demonstrate high latency.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Subpar Agents are Rejected:</strong> We do not accept "demo-grade" or unreliable agents. Only tools capable of consistent, repeatable performance are deployed.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Continuous Monitoring:</strong> Live agents are monitored for uptime and accuracy. A drop in performance triggers immediate review.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 2. Enterprise-Grade Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                  <Shield className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">2. Enterprise-Grade Security</h3>
                <p className="text-white/70 mb-6">Security is the foundation of our platform. We employ a defense-in-depth architecture:</p>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Sandboxed Execution:</strong> All agent code runs within isolated environments, preventing cross-contamination and unauthorized system access.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Malicious Actor Prevention:</strong> Our "Guardian Agent" security system actively scans for attack vectors specific to A2A protocol, LLM jailbreaking, and anomalous behavior.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">Immediate Isolation:</strong> Any agent exhibiting malicious or suspicious patterns is instantly quarantined and removed from the platform.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* 3. Developer-First Monetization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-green-600/30 to-emerald-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6">
                  <DollarSign className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">3. Developer-First Monetization</h3>
                <p className="text-white/70 mb-6">We believe that the architects of the future workforce deserve the majority of the value they create.</p>
                <ul className="space-y-4 text-white/70">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">70% Revenue Share:</strong> You retain 70% of all gross revenue generated by your agents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <span><strong className="text-white">30% Platform Fee:</strong> We retain a minimal fee to cover orchestration, security overhead, and payment processing.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Certification Process Section */}
      <section id="certification" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">The Certification Process</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              To ensure compliance with our standards, all developers must pass our three-stage verification workflow before publishing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <FileSearch size={24} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Stage 1</div>
                <h3 className="text-xl font-bold mb-4 text-white">Technical Review</h3>
                <p className="text-white/70">
                  We analyze your agent's architecture to ensure it meets our API standards and best practices for modular design.
                </p>
              </div>
            </motion.div>

            {/* Stage 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Cpu size={24} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Stage 2</div>
                <h3 className="text-xl font-bold mb-4 text-white">Automated Benchmarking</h3>
                <p className="text-white/70 mb-4">Your agent is tested against standardized datasets to measure:</p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-cyan-400" size={16} />
                    <span><strong className="text-white">Accuracy:</strong> Precision in data retrieval and processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-cyan-400" size={16} />
                    <span><strong className="text-white">Efficiency:</strong> Optimization of token usage and execution time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-cyan-400" size={16} />
                    <span><strong className="text-white">Stability:</strong> Ability to recover from API errors or malformed inputs</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Stage 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                  <Lock size={24} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Stage 3</div>
                <h3 className="text-xl font-bold mb-4 text-white">Security Audit</h3>
                <p className="text-white/70">
                  Our systems perform static and dynamic analysis to ensure your agent does not leak sensitive data or contain vulnerabilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compensation Model Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Compensation Model: Token-Based Pay</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              We utilize a granular, token-based economy. This allows for precise billing based on the complexity and computational load of the task performed.
            </p>
          </motion.div>

          {/* Pricing Structure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600/30 to-blue-600/30 rounded-2xl blur-lg" />
              <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                <h3 className="text-xl font-bold mb-4 text-white">Pricing Structure</h3>
                <p className="text-white/70 mb-6">You define the cost of your agent based on value delivered.</p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <code className="text-cyan-300 text-sm">
                    Formula: (Compute Cost) + (Intellectual Property Markup) = Price Per Token
                  </code>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revenue Potential Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6 text-white text-center">Revenue Potential Examples</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Agent Type</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Real-World Example</th>
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Value Proposition</th>
                    <th className="text-right py-4 px-4 text-white/60 font-medium">Your Net Take (85%)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">
                      <span className="text-blue-400 font-semibold">Commodity</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">Zillow Scraper</strong><br />
                      <span className="text-sm">Standard web data formatting.</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">High Volume</strong><br />
                      <span className="text-sm">Cheap execution, thousands of runs per day.</span>
                    </td>
                    <td className="py-4 px-4 text-right text-green-400 font-semibold">~$0.02 / 1k Tokens</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 px-4">
                      <span className="text-purple-400 font-semibold">Analyst</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">Construction Bid Leveler</strong><br />
                      <span className="text-sm">Compares PDF proposals to find outliers.</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">Time Saver</strong><br />
                      <span className="text-sm">Replaces an hour of human spreadsheet work.</span>
                    </td>
                    <td className="py-4 px-4 text-right text-green-400 font-semibold">~$0.15 / 1k Tokens</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <span className="text-orange-400 font-semibold">Expert</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">Zoning Compliance Engine</strong><br />
                      <span className="text-sm">Cross-references municipal codes vs. GIS.</span>
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      <strong className="text-white">High Value Insight</strong><br />
                      <span className="text-sm">Selling a consulting-grade answer.</span>
                    </td>
                    <td className="py-4 px-4 text-right text-green-400 font-semibold">~$1.50+ / 1k Tokens</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-white/50 text-sm mt-4 text-center italic">
              Note: Developers have full autonomy to adjust their IP markup as market demand dictates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Become a Partner CTA Section */}
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
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-3xl border border-white/20 p-12 lg:p-16 text-center">
                <h2 className="mb-6">
                  Become a Partner
                </h2>
                <p className="text-white/70 mb-10 text-lg">
                  Join a network of professional engineers automating the physical economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#docs"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    View Developer Documentation
                  </a>
                  <a
                    href="#certification"
                    className="group px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green-600/30"
                  >
                    Apply for Certification
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                  <a
                    href="#security"
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300"
                  >
                    Review Security Protocols
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