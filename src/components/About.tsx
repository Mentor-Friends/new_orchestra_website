import { motion } from 'motion/react';
import { Music, Users, Award, Heart } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Music,
      title: 'Musical Excellence',
      description: 'Committed to the highest standards of orchestral performance and artistic interpretation.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Building bridges through music and engaging diverse audiences across all communities.',
    },
    {
      icon: Award,
      title: 'Educational Impact',
      description: 'Nurturing the next generation of musicians through innovative educational programs.',
    },
    {
      icon: Heart,
      title: 'Artistic Vision',
      description: 'Pushing boundaries with contemporary works while honoring classical traditions.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">About A2A Orchestra</h2>
          <p className="max-w-3xl mx-auto text-white/70">
            A2A Orchestra is a premier ensemble dedicated to bringing the transformative power of 
            orchestral music to audiences worldwide. Our mission is to inspire, educate, and connect 
            communities through exceptional musical experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4 w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors duration-300">
                <feature.icon className="text-blue-400" size={28} />
              </div>
              <h3 className="mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl border border-white/10"
        >
          <h3 className="mb-4 text-center">Our Vision</h3>
          <p className="text-center text-white/70 max-w-3xl mx-auto">
            We envision a world where orchestral music is accessible to all, where young musicians 
            are empowered to reach their full potential, and where the arts serve as a catalyst 
            for positive social change. Through innovative programming and community partnerships, 
            we are making this vision a reality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
