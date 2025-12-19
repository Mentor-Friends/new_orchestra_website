import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Production-Ready', 'Secure', 'Verified', 'Benchmarked'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 mb-8"
          >
            <Sparkles className="text-blue-400" size={16} />
            <span className="text-blue-400 text-sm">The App Store for Enterprise AI Agents</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="mb-6">
            The Only Marketplace for{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                {words[currentWord]}
              </span>
            </span>
            <br />
            AI Agents
          </h1>

          <p className="mb-10 max-w-3xl mx-auto text-white/60">
            A2A Orchestra is the first security-focused marketplace where every AI agent is rigorously 
            benchmarked, tested, and certified as production-ready. No guesswork. No prototypes. 
            Only verified, enterprise-grade automation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#agents"
              className="group px-7 py-3.5 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              Browse Agents
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#developers"
              className="px-7 py-3.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              Publish Your Agent
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <span>4-Metric Certification</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <span>Zero-Trust Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <span>70-85% Revenue Share</span>
            </div>
          </div>
        </motion.div>

        {/* Interactive Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-[#111111] rounded-2xl border border-white/10 p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <StatCard
                  value="100%"
                  label="Production-Ready"
                  gradient="from-blue-500 to-cyan-500"
                  delay={0.5}
                />
                <StatCard
                  value="4-Metrics"
                  label="Certification System"
                  gradient="from-purple-500 to-pink-500"
                  delay={0.6}
                />
                <StatCard
                  value="Zero-Trust"
                  label="Security Architecture"
                  gradient="from-orange-500 to-red-500"
                  delay={0.7}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ value, label, gradient, delay }: { value: string; label: string; gradient: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative group/card"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover/card:opacity-20 rounded-xl transition-opacity duration-300`} />
      <div className="relative p-6 text-center">
        <div className={`mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
          {value}
        </div>
        <p className="text-sm text-white/60">{label}</p>
      </div>
    </motion.div>
  );
}
