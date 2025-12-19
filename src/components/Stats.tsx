import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Stats() {
  const stats = [
    { value: 50, suffix: '+', label: 'Production-Ready Agents', duration: 2 },
    { value: 98, suffix: '%', label: 'Average Reliability Score', duration: 2.5 },
    { value: 1000, suffix: '+', label: 'Enterprise Deployments', duration: 2 },
    { value: 85, suffix: '%', label: 'Developer Revenue Share', duration: 2.5 },
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Powering Enterprise AI Worldwide</h2>
          <p className="text-white/60 max-w-3xl mx-auto">
            Organizations across industries trust A2A Orchestra to deploy autonomous, 
            intelligent AI agents that think, learn, and execute at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30" />
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} duration={stat.duration} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value, duration, suffix }: { value: number; duration: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}