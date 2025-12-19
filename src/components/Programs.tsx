import { motion } from 'motion/react';
import { GraduationCap, Sparkles, Globe, Mic } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Youth Orchestra Program',
      description: 'Comprehensive training for young musicians ages 8-18, featuring masterclasses, sectionals, and performance opportunities.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'Professional Development',
      description: 'Advanced training and mentorship for emerging professional musicians looking to take their careers to the next level.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Community Outreach',
      description: 'Free concerts and educational workshops in underserved communities, making orchestral music accessible to everyone.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Mic,
      title: 'Chamber Music Series',
      description: 'Intimate performances featuring smaller ensembles, showcasing the versatility of our talented musicians.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-6">Our Programs</h2>
          <p className="max-w-3xl text-white/70">
            We offer a diverse range of programs designed to nurture talent, build community, 
            and expand access to world-class musical experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-white/5 hover:bg-white/10 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`mb-6 w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center`}>
                  <program.icon className="text-white" size={32} />
                </div>
                
                <h3 className="mb-4">{program.title}</h3>
                <p className="text-white/60">{program.description}</p>
                
                <button className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-2 group/btn">
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full transition-all duration-200"
          >
            Join Our Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
