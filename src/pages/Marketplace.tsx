import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Zap, ArrowRight, HardHat, TrendingUp, Scale, Stethoscope, Building2, BarChart3 } from 'lucide-react';

// Helper function to get category-specific icon
const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Construction':
            return HardHat;
        case 'Finance':
            return TrendingUp;
        case 'Legal':
            return Scale;
        case 'Healthcare':
            return Stethoscope;
        case 'Real Estate':
            return Building2;
        case 'Data Analysis':
            return BarChart3;
        default:
            return Shield;
    }
};

export function Marketplace() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Finance', 'Legal', 'Construction', 'Healthcare', 'Real Estate', 'Data Analysis'];

    const agents = [
        {
            id: 'construction-bid-leveler',
            name: 'Construction Bid Leveler',
            category: 'Construction',
            description: 'Compares PDF proposals to find outliers and analyze bid competitiveness.',
            rating: 4.9,
            executions: '50K+',
            verified: true,
            tokenCost: 50,
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop'
        },
        {
            id: 'zoning-compliance-engine',
            name: 'Zoning Compliance Engine',
            category: 'Real Estate',
            description: 'Cross-references municipal codes vs GIS data for compliance verification.',
            rating: 4.8,
            executions: '25K+',
            verified: true,
            tokenCost: 75,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
        },
        {
            id: 'contract-analyzer',
            name: 'Contract Analyzer',
            category: 'Legal',
            description: 'Extracts key terms, identifies risks, and summarizes legal documents.',
            rating: 4.7,
            executions: '100K+',
            verified: true,
            tokenCost: 40,
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop'
        },
        {
            id: 'financial-report-analyzer',
            name: 'Financial Report Analyzer',
            category: 'Finance',
            description: 'Analyzes financial statements and generates insights with KPI tracking.',
            rating: 4.8,
            executions: '75K+',
            verified: true,
            tokenCost: 60,
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop'
        },
        {
            id: 'medical-records-processor',
            name: 'Medical Records Processor',
            category: 'Healthcare',
            description: 'Extracts and organizes medical record data with HIPAA compliance.',
            rating: 4.9,
            executions: '30K+',
            verified: true,
            tokenCost: 80,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
        },
        {
            id: 'data-pipeline-builder',
            name: 'Data Pipeline Builder',
            category: 'Data Analysis',
            description: 'Automatically creates and optimizes data pipelines from natural language.',
            rating: 4.6,
            executions: '45K+',
            verified: true,
            tokenCost: 55,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
        }
    ];

    const filteredAgents = selectedCategory === 'All'
        ? agents
        : agents.filter(agent => agent.category === selectedCategory);

    return (
        <div className="min-h-screen pt-16">
            {/* Hero Section */}
            <section className="relative py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-12"
                    >
                        <h1 className="mb-6">
                            AI Agent Marketplace
                        </h1>
                        <p className="text-amber-100/70 text-lg">
                            Browse certified, production-ready AI agents for your enterprise needs
                        </p>
                    </motion.div>

                    {/* Category Filter Nav Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <div className="bg-[#1a1208]/60 backdrop-blur-xl rounded-2xl border border-amber-500/20 p-2 inline-flex flex-wrap gap-2 mx-auto w-full justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 shadow-lg shadow-amber-500/25'
                                        : 'text-amber-100/70 hover:text-amber-100 hover:bg-amber-500/10'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Agents Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAgents.map((agent, index) => (
                            <motion.a
                                key={agent.id}
                                href={`#agent-${agent.id}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                className="group block"
                            >
                                <div className="relative h-full">
                                    <div className="absolute -inset-1 bg-green-500/20 rounded-3xl blur-lg transition-all duration-300 group-hover:bg-green-400/40 group-hover:blur-xl group-hover:-inset-2" />
                                    <div className="marketplace-card relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-green-500/30 overflow-hidden h-full flex flex-col shadow-lg shadow-green-500/10 transition-all duration-300 group-hover:border-green-400/50 group-hover:shadow-green-400/30 group-hover:shadow-xl">
                                        {/* Category Header */}
                                        <div className="p-6 pb-0">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-amber-400 text-2xl font-bold uppercase tracking-wide">{agent.category}</span>
                                                {agent.verified && (
                                                    <span className="text-green-400 text-xs font-medium">Verified</span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-amber-100 mb-2 group-hover:text-amber-400 transition-colors">
                                                {agent.name}
                                            </h3>
                                            <p className="text-amber-100/60 text-sm mb-4 flex-1">
                                                {agent.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center gap-1">
                                                        <Star size={14} className="text-amber-400" />
                                                        <span className="text-amber-100 text-sm font-medium">{agent.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Zap size={14} className="text-amber-400" />
                                                        <span className="text-amber-100/60 text-sm">{agent.executions}</span>
                                                    </div>
                                                </div>
                                                <span className="text-amber-400 font-semibold text-sm">{agent.tokenCost} tokens</span>
                                            </div>

                                            {/* CTA */}
                                            <div className="flex items-center justify-between pt-4 border-t border-amber-500/10">
                                                <span className="text-amber-400 text-sm font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                                                    View Details
                                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
