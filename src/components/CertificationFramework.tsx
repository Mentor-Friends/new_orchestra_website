import { motion } from 'motion/react';
import { Activity, Wrench, Brain, Gauge } from 'lucide-react';
import { useState } from 'react';

export function CertificationFramework() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      icon: Activity,
      name: 'Intelligence Score',
      description: 'Measures reasoning depth, decision accuracy, and cognitive reliability',
      detail: 'Ensures the AI agent demonstrates consistent intelligent behavior. We track neural performance across thousands of scenarios to guarantee autonomous reliability in production.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wrench,
      name: 'Autonomy Score',
      description: 'Quantifies self-sufficiency and adaptive learning capability',
      detail: 'Assesses how independently the AI operates without human intervention. High autonomy scores mean the agent learns, adapts, and improves its own performance over time.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Brain,
      name: 'Reasoning Score',
      description: 'Rates multi-step logic, context understanding, and problem-solving',
      detail: 'Differentiates simple automation from true AI intelligence. Measures neural network depth, contextual awareness, and complex decision-making capabilities.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Gauge,
      name: 'Neural Efficiency',
      description: 'Measures cognitive output quality against computational resources',
      detail: 'Focuses on intelligent processing density. Ensures optimal neural performance per token, minimizing hallucinations and maximizing actionable intelligence.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="mb-6">AI Intelligence Certification</h2>
          <p className="text-white/60">
            Our neural scoring system evaluates every agent across four cognitive dimensions. 
            Every intelligence metric is visible to buyers—complete transparency into AI capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Metric Selection */}
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <motion.button
                key={metric.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setActiveMetric(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeMetric === index
                    ? 'bg-white/10 border-white/30'
                    : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.04] hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center flex-shrink-0`}>
                    <metric.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">{metric.name}</h4>
                    <p className="text-sm text-white/60">{metric.description}</p>
                  </div>
                  {activeMetric === index && (
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${metric.color} animate-pulse`} />
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Active Metric Detail */}
          <motion.div
            key={activeMetric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-24"
          >
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-br ${metrics[activeMetric].color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              <div className="relative bg-[#111111] rounded-2xl border border-white/10 p-8 lg:p-10">
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${metrics[activeMetric].color} bg-opacity-10 mb-6`}>
                  {(() => {
                    const IconComponent = metrics[activeMetric].icon;
                    return <IconComponent size={20} className="text-white" />;
                  })()}
                  <span className="text-sm">{metrics[activeMetric].name}</span>
                </div>
                
                <h3 className="mb-4">How We Measure It</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {metrics[activeMetric].detail}
                </p>

                {/* Mock Score Display */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Score Range</span>
                    <span>0 - 100</span>
                  </div>
                  <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '87%' }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`absolute inset-y-0 left-0 bg-gradient-to-r ${metrics[activeMetric].color} rounded-full`}
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Example Agent Score</span>
                    <span className={`bg-gradient-to-r ${metrics[activeMetric].color} bg-clip-text text-transparent`}>
                      87/100
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}