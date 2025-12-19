import { motion } from 'motion/react';
import { Calendar, MapPin, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'Winter Gala Concert',
      date: 'December 15, 2025',
      time: '7:30 PM',
      location: 'Symphony Hall',
      description: 'Featuring Beethoven\'s Symphony No. 9 and works by contemporary composers.',
      type: 'Concert',
    },
    {
      title: 'New Year\'s Celebration',
      date: 'January 1, 2026',
      time: '8:00 PM',
      location: 'Grand Theater',
      description: 'Ring in the new year with classical favorites and festive surprises.',
      type: 'Special Event',
    },
    {
      title: 'Spring Chamber Series',
      date: 'March 20, 2026',
      time: '6:00 PM',
      location: 'Recital Hall',
      description: 'Intimate performances featuring small ensembles from our orchestra.',
      type: 'Chamber Music',
    },
    {
      title: 'Youth Orchestra Showcase',
      date: 'April 12, 2026',
      time: '3:00 PM',
      location: 'Community Center',
      description: 'Talented young musicians perform works they\'ve been perfecting all season.',
      type: 'Educational',
    },
  ];

  return (
    <section id="events" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-600/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Upcoming Events</h2>
          <p className="max-w-3xl mx-auto text-white/70">
            Join us for unforgettable musical experiences. From grand symphonies to intimate 
            chamber performances, there&apos;s something for every music lover.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="px-3 py-1 bg-blue-600/20 rounded-full border border-blue-600/30">
                  <span className="text-blue-400">{event.type}</span>
                </div>
              </div>

              <h3 className="mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {event.title}
              </h3>

              <p className="text-white/60 mb-6">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <Calendar size={18} className="text-blue-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Clock size={18} className="text-blue-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin size={18} className="text-blue-400" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button className="mt-6 w-full py-3 bg-blue-600/10 hover:bg-blue-600/20 rounded-lg border border-blue-600/20 hover:border-blue-600/40 transition-all duration-200">
                Get Tickets
              </button>
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
            View Full Calendar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
