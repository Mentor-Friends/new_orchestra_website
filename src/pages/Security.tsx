import { SecurityArchitecture } from '../components/SecurityArchitecture';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export function Security() {
  return (
    <div className="min-h-screen pt-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          href="#"
          className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </motion.a>
      </div>

      <SecurityArchitecture />
    </div>
  );
}
