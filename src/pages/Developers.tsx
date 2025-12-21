import { motion } from 'motion/react';
import { ArrowRight, Music, Shield, Coins, Building2, Code, Search, Key, Send, CheckCircle2 } from 'lucide-react';

export function Developers() {
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
                Conduct the Impossible.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-cyan-300 text-xl text-center"
            >
              Silence the noise. Deploy the symphony.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12 max-w-3xl mx-auto text-white/80 text-lg leading-relaxed text-center"
            >
              The world's first arsenal of verified autonomous agents. 100% audited for security. Benchmarked for lethal precision. You don't just build software anymore, you orchestrate a workforce that never sleeps.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <a
                href="#marketplace"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105"
              >
                Enter the Orchestra
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Harmonized Automation Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Harmonized Automation</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Curated Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🎻</div>
                <h3 className="text-xl font-bold mb-4 text-white">Curated Performance</h3>
                <p className="text-white/70 leading-relaxed">
                  Just as an orchestra requires every musician to be a master, A2A requires every agent to be flawless. We do not list experimental code. Every agent here is audited, tested, and proven to perform complex tasks without hallucination.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Secure Composition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🎼</div>
                <h3 className="text-xl font-bold mb-4 text-white">Secure Composition</h3>
                <p className="text-white/70 leading-relaxed">
                  Your data is the sheet music, it is yours alone. Agents execute in isolated, ephemeral environments. Once the note is played (the task is done), the environment dissolves. Zero data retention, absolute privacy.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Universal Token Standard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🪙</div>
                <h3 className="text-xl font-bold mb-4 text-white">Universal Token Standard</h3>
                <p className="text-white/70 leading-relaxed">
                  A single currency for a symphony of tools. Our 30% token model means you pay one standardized rate across all agents, only for successful executions. No fragmented subscriptions, just pure utility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Fair-Trade Economy Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">The Fair-Trade Economy</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For the Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-4 text-white">For the Enterprise</h3>
                <h4 className="text-lg font-semibold mb-3 text-cyan-300">Pay Per Success</h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  You never pay for idle time. 1 Token = 1 Successful Execution. If the agent hallucinates or fails, the cost is 0.
                </p>
                <p className="text-green-400 font-semibold">Result: Lower OpEx</p>
              </div>
            </motion.div>

            {/* For the Engineer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 group-hover:border-white/20 p-8 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">👨‍💻</div>
                <h3 className="text-xl font-bold mb-4 text-white">For the Engineer</h3>
                <h4 className="text-lg font-semibold mb-3 text-purple-300">Meritocratic Payouts</h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  We pay developers 70% of every token. This industry-leading split ensures the world's best talent builds for A2A.
                </p>
                <p className="text-green-400 font-semibold">Result: Superior Tool Quality</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Orchestrating Your Workflow Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6">Orchestrating Your Workflow</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Search size={20} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Step 1</div>
                <h3 className="text-lg font-bold mb-3 text-white">Select Instruments</h3>
                <p className="text-white/70 text-sm">
                  Browse the marketplace for specific capabilities—Finance, Construction, Legal.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Coins size={20} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Step 2</div>
                <h3 className="text-lg font-bold mb-3 text-white">Acquire Tokens</h3>
                <p className="text-white/70 text-sm">
                  Load your account with A2A Tokens. One balance, universal access.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <Key size={20} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Step 3</div>
                <h3 className="text-lg font-bold mb-3 text-white">Connect via API</h3>
                <p className="text-white/70 text-sm">
                  Use our unified SDK to send your "sheet music" (data) to the agent.
                </p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-[#0f0f0f]/80 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <div className="text-sm text-blue-400 mb-2">Step 4</div>
                <h3 className="text-lg font-bold mb-3 text-white">Receive Performance</h3>
                <p className="text-white/70 text-sm">
                  Get structured data back. Integrate it directly into your systems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
                <h2 className="mb-8">
                  Ready to start the music?
                </h2>
                <a
                  href="#marketplace"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:scale-105"
                >
                  Enter the Marketplace
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
