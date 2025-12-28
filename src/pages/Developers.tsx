import { motion } from 'motion/react';
import { ArrowRight, Shield, Coins, Code, Search, Key, CheckCircle2, Building2, Zap } from 'lucide-react';

export function Developers() {
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
              <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">For Developers</p>
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
                Conduct the Impossible.
              </h1>
              <p className="text-amber-300 text-xl mb-6">
                Silence the noise. Deploy the symphony.
              </p>
              <p className="text-amber-100/70 text-lg mb-8 leading-relaxed">
                The world's premier marketplace of verified autonomous agents. 100% audited for security.
                Benchmarked for exceptional precision. You don't just build software anymore, you orchestrate
                a workforce that works around the clock.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#signin"
                  className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  Enter the Orchestra
                </a>
                <a
                  href="#workflow"
                  className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                >
                  How It Works
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
                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8">
                  <div className="photo-immersive-circle w-32 h-32 mx-auto mb-4 rounded-full">
                    <img src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=400&h=400&fit=crop" alt="Orchestra" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div className="text-center text-amber-100/60">Orchestrate Your Workforce</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Harmonized Automation - 3 Column Grid */}
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
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Why A2A Orchestra</p>
            <h2 className="mb-6">
              Harmonized Automation
            </h2>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
                title: 'Curated Performance',
                description: 'Just as an orchestra requires every musician to be a master, A2A requires every agent to be flawless. We do not list experimental code. Every agent here is audited, tested, and proven to perform complex tasks.'
              },
              {
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
                title: 'Secure Composition',
                description: 'Your data is the sheet music, it is yours alone. Agents execute in isolated, ephemeral environments. Once the note is played (the task is done), the environment dissolves.'
              },
              {
                image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=400&fit=crop',
                title: 'Universal Token Standard',
                description: 'One unified currency across the entire marketplace. No fragmented subscriptions or hidden fees, just straightforward token-based billing that scales with your usage.'
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
                  <div className="photo-immersive-thumb w-16 h-16 mb-6 rounded-full">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                  <p className="text-amber-100/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair-Trade Economy - Split Layout */}
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
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Economics</p>
            <h2 className="mb-6">
              The Fair-Trade Economy
            </h2>
          </motion.div>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* For the Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-700/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full transition-all duration-300">
                <div className="photo-immersive-thumb w-14 h-14 rounded-2xl mb-6">
                  <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop" alt="Enterprise" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">For the Enterprise</h3>
                <p className="text-amber-300 font-semibold mb-4">Standardized Token Pricing</p>
                <p className="text-amber-100/70 leading-relaxed mb-6">
                  Each token has a fixed value. More complex agents consume more tokens per task based on their computational requirements. Transparent, predictable pricing.
                </p>
                <div
                  className="flex items-center gap-2 text-green-400 font-semibold"
                  style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}
                >
                  <CheckCircle2 size={20} />
                  Result: Lower OpEx
                </div>
              </div>
            </motion.div>

            {/* For the Engineer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-700/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full transition-all duration-300">
                <div className="photo-immersive-thumb w-14 h-14 rounded-2xl mb-6">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop" alt="Engineer" className="w-full h-full object-cover rounded-2xl" />
                </div>
                <h3 className="text-xl font-bold text-amber-100 mb-2">For the Engineer</h3>
                <p className="text-amber-300 font-semibold mb-4">Meritocratic Payouts</p>
                <p className="text-amber-100/70 leading-relaxed mb-6">
                  Developers earn based on token consumption. Complex agents command higher payouts per task, the more value you create, the more you earn.
                </p>
                <div
                  className="flex items-center gap-2 text-green-400 font-semibold"
                  style={{ textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}
                >
                  <CheckCircle2 size={20} />
                  Result: Superior Tool Quality
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Section - 4 Steps */}
      <section id="workflow" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Centered Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Getting Started</p>
            <h2 className="mb-6">
              Orchestrating Your Workflow
            </h2>
          </motion.div>

          {/* 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop', step: '01', title: 'Select Instruments', description: 'Browse the marketplace for specific capabilities like Finance, Construction, Legal.' },
              { image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=400&fit=crop', step: '02', title: 'Acquire Tokens', description: 'Pay as you go, load your account with A2A Tokens and use them across the entire marketplace.' },
              { image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=400&fit=crop', step: '03', title: 'Connect via API', description: 'Use our unified SDK to send your data to the agent.' },
              { image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop', step: '04', title: 'Receive Performance', description: 'Get structured data back. Integrate it directly into your systems and your own agentic solutions.' }
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
                  <div className="text-amber-400 font-bold text-sm mb-2">STEP {item.step}</div>
                  <h3 className="text-lg font-bold text-amber-100 mb-3">{item.title}</h3>
                  <p className="text-amber-100/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
                <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Start Building</p>
                <h2 className="mb-6 text-center">
                  Ready to Start the Music?
                </h2>
                <p className="text-amber-100/70 mb-10 text-lg text-center">
                  Join the orchestra and start building with verified, enterprise-grade AI agents today.
                </p>
                <a
                  href="#marketplace"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 shadow-lg shadow-amber-600/30 hover:scale-105 text-amber-950 font-semibold"
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
