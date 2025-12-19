import { motion } from 'motion/react';
import { Database, TestTube, Music, Video, FileText, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function AgentShowcase() {
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null);

  const categories = [
    { name: 'All Agents', count: 50 },
    { name: 'DevOps', count: 12 },
    { name: 'Content', count: 18 },
    { name: 'Business', count: 20 },
  ];

  const agents = [
    {
      icon: Database,
      name: 'Neural Query Agent',
      category: 'DevOps',
      description: 'AI-powered SQL generation with natural language understanding and query optimization',
      reliability: 98,
      maintenance: 95,
      complexity: 88,
      efficiency: 92,
      price: '$0.15/M tokens',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TestTube,
      name: 'AI Test Orchestrator',
      category: 'DevOps',
      description: 'Autonomous test analysis with predictive issue detection and intelligent triage',
      reliability: 96,
      maintenance: 91,
      complexity: 94,
      efficiency: 89,
      price: '$0.18/M tokens',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Music,
      name: 'Creative AI Composer',
      category: 'Content',
      description: 'Neural network-based music creation with style adaptation and genre intelligence',
      reliability: 93,
      maintenance: 88,
      complexity: 90,
      efficiency: 87,
      price: '$0.12/M tokens',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Video,
      name: 'Vision AI Director',
      category: 'Content',
      description: 'Intelligent video concept generation with scene understanding and narrative flow',
      reliability: 91,
      maintenance: 86,
      complexity: 89,
      efficiency: 85,
      price: '$0.20/M tokens',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: FileText,
      name: 'Cognitive Summarizer',
      category: 'Business',
      description: 'Deep learning-based document analysis with contextual insight extraction',
      reliability: 97,
      maintenance: 93,
      complexity: 85,
      efficiency: 94,
      price: '$0.10/M tokens',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Calendar,
      name: 'Predictive Planner AI',
      category: 'Business',
      description: 'Machine learning event optimization with preference learning and smart recommendations',
      reliability: 90,
      maintenance: 87,
      complexity: 82,
      efficiency: 88,
      price: '$0.08/M tokens',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="agents" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl mx-auto"
        >
          <h2 className="mb-6">Explore Intelligent Agents</h2>
          <p className="text-white/60">
            Every AI agent in our marketplace has passed neural certification and is ready 
            for autonomous deployment. Browse by cognitive capability or use case.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`px-6 py-2.5 rounded-full border transition-all duration-200 ${
                index === 0
                  ? 'bg-blue-600 border-blue-600 hover:bg-blue-700'
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredAgent(index)}
              onMouseLeave={() => setHoveredAgent(null)}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${agent.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500`} />
              <div className="relative bg-[#111111] rounded-2xl border border-white/10 group-hover:border-white/20 p-6 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center`}>
                    <agent.icon className="text-white" size={24} />
                  </div>
                  <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                    {agent.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg">{agent.name}</h3>
                <p className="text-sm text-white/60 mb-4">{agent.description}</p>

                {/* Scores */}
                <div className="space-y-2 mb-4">
                  <ScoreBar label="Reliability" score={agent.reliability} />
                  <ScoreBar label="Maintenance" score={agent.maintenance} />
                  <ScoreBar label="Complexity" score={agent.complexity} />
                  <ScoreBar label="Efficiency" score={agent.efficiency} />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {agent.price}
                  </span>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn">
                    Deploy
                    <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            View All Agents
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/60 mb-1">
        <span>{label}</span>
        <span>{score}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${score}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
        />
      </div>
    </div>
  );
}