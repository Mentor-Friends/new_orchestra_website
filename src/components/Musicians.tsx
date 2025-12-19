import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Musicians() {
  const musicians = [
    {
      name: 'Elena Rodriguez',
      role: 'Music Director & Conductor',
      image: 'https://images.unsplash.com/photo-1613941854763-c237d27c45d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpYyUyMGNvbmR1Y3RvcnxlbnwxfHx8fDE3NjU0MTY1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Chen',
      role: 'Concertmaster',
      image: 'https://images.unsplash.com/photo-1764590544621-3fab73b1a78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJpbmclMjBpbnN0cnVtZW50cyUyMHZpb2xpbnxlbnwxfHx8fDE3NjU0MTY1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sarah Thompson',
      role: 'Principal Cellist',
      image: 'https://images.unsplash.com/photo-1717856463173-a21be4e3f2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmElMjBtdXNpY2lhbnMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NjU0MTY1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="musicians" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Our Musicians</h2>
          <p className="max-w-3xl mx-auto text-white/70">
            Meet the talented artists who bring our performances to life. Our musicians come from 
            diverse backgrounds, united by their passion for musical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {musicians.map((musician, index) => (
            <motion.div
              key={musician.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={musician.image}
                  alt={musician.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2">{musician.name}</h3>
                <p className="text-blue-400">{musician.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="#contact"
            className="inline-flex px-8 py-4 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            Join Our Ensemble
          </a>
        </motion.div>
      </div>
    </section>
  );
}
