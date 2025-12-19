import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
              <h2 className="mb-6">
                Ready to Deploy Intelligent AI Agents?
              </h2>
              <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                Join enterprises and AI developers who trust A2A Orchestra for cognitive certification, 
                neural security, and autonomous intelligence deployment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#agents"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-blue-600/20"
                >
                  Browse Marketplace
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a
                  href="#developers"
                  className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
                >
                  Publish Your Agent
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">Need enterprise support?</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <a
                    href="mailto:storeaiagent@gmail.com"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  >
                    <Mail size={16} />
                    storeaiagent@gmail.com
                  </a>
                  <div className="hidden sm:block w-px h-4 bg-white/20" />
                  <span className="text-white/70">Miami, Florida</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}