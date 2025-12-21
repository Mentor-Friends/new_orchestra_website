import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { OrganizationIntakeForm } from '../components/OrganizationIntakeForm';

export function ProductDevelopment() {
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
                Conduct Secure, Enterprise Level, End-to-End Agentic Solutions
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-cyan-300 text-xl text-center"
            >
              Amplify Your Vision into an Orchestrated Symphony of Results
            </motion.p>

            {/* Three Column Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-10 w-full max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* THE CHALLENGE */}
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-xl mb-4 tracking-wide">THE CHALLENGE</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    Most enterprises know they need an autonomous workforce but lack the architecture to orchestrate it. We engineer your foundation from the ground up. <strong className="text-white">You define the vision. We multiply your team's execution power.</strong>
                  </p>
                </div>

                {/* THE APPROACH */}
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-xl mb-4 tracking-wide">THE APPROACH</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    We identify your highest-friction workflows, <strong className="text-white">engineer your custom automation layer</strong>, and deploy a workforce with perfect recall that captures value without pause. Custom-arranged for your operations. Precision-tuned for the real world. Delivered in <strong className="text-white">4-8 weeks</strong>.
                  </p>
                </div>

                {/* THE RESULT */}
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-xl mb-4 tracking-wide">THE RESULT</h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    <strong className="text-white">While competitors sit on scattered data they can't coordinate</strong>, you achieve pure operational harmony. Zero coordination overhead. Zero integration noise. Your experts command the scale. Your agents handle the grind.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 text-cyan-300 text-xl italic text-center"
            >
              Commission the capability. Conduct the tempo.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-105"
              >
                ORCHESTRATE YOUR ADVANTAGE
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </motion.div>
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