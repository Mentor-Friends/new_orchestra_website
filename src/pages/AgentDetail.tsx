import { motion } from 'motion/react';
import { ArrowLeft, Star, Shield, CheckCircle2, Zap, Clock, Users } from 'lucide-react';

// Sample agent data - in a real app this would come from an API
const agentData: Record<string, {
    id: string;
    name: string;
    category: string;
    description: string;
    longDescription: string;
    rating: number;
    executions: string;
    verified: boolean;
    tokenCost: number;
    features: string[];
    image: string;
    developer: string;
    lastUpdated: string;
}> = {
    'construction-bid-leveler': {
        id: 'construction-bid-leveler',
        name: 'Construction Bid Leveler',
        category: 'Construction',
        description: 'Compares PDF proposals to find outliers and analyze bid competitiveness.',
        longDescription: 'The Construction Bid Leveler is an advanced AI agent designed to streamline the bid evaluation process for construction projects. It automatically extracts key data from PDF proposals, normalizes pricing structures, identifies pricing anomalies, and provides a comprehensive analysis of bid competitiveness. Perfect for general contractors, project managers, and procurement teams.',
        rating: 4.9,
        executions: '50K+',
        verified: true,
        tokenCost: 50,
        features: [
            'Automatic PDF parsing and data extraction',
            'Multi-bid comparison analysis',
            'Outlier detection and flagging',
            'Cost breakdown visualization',
            'Export to Excel/CSV',
            'API integration available'
        ],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
        developer: 'BuildTech Labs',
        lastUpdated: '2024-12-15'
    },
    'zoning-compliance-engine': {
        id: 'zoning-compliance-engine',
        name: 'Zoning Compliance Engine',
        category: 'Real Estate',
        description: 'Cross-references municipal codes vs GIS data for compliance verification.',
        longDescription: 'The Zoning Compliance Engine automates the tedious process of verifying property zoning compliance. It cross-references municipal zoning codes with GIS data, parcel information, and local ordinances to provide instant compliance reports. Essential for real estate developers, architects, and municipal planners.',
        rating: 4.8,
        executions: '25K+',
        verified: true,
        tokenCost: 75,
        features: [
            'Municipal code database integration',
            'GIS data analysis',
            'Automatic compliance scoring',
            'Variance identification',
            'Report generation',
            'Historical zoning tracking'
        ],
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
        developer: 'PropTech Solutions',
        lastUpdated: '2024-12-10'
    },
    'contract-analyzer': {
        id: 'contract-analyzer',
        name: 'Contract Analyzer',
        category: 'Legal',
        description: 'Extracts key terms, identifies risks, and summarizes legal documents.',
        longDescription: 'The Contract Analyzer uses advanced NLP to parse legal documents, extract key terms and conditions, identify potential risks and unusual clauses, and generate comprehensive summaries. It supports various contract types including NDAs, service agreements, employment contracts, and more.',
        rating: 4.7,
        executions: '100K+',
        verified: true,
        tokenCost: 40,
        features: [
            'Key terms extraction',
            'Risk identification and scoring',
            'Clause comparison',
            'Plain English summaries',
            'Multi-document analysis',
            'Version comparison'
        ],
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
        developer: 'LegalAI Corp',
        lastUpdated: '2024-12-18'
    },
    'financial-report-analyzer': {
        id: 'financial-report-analyzer',
        name: 'Financial Report Analyzer',
        category: 'Finance',
        description: 'Analyzes financial statements and generates insights with KPI tracking.',
        longDescription: 'The Financial Report Analyzer automates the analysis of financial statements including income statements, balance sheets, and cash flow statements. It calculates key financial ratios, identifies trends, and generates executive summaries with actionable insights.',
        rating: 4.8,
        executions: '75K+',
        verified: true,
        tokenCost: 60,
        features: [
            'Financial statement parsing',
            'Ratio calculation',
            'Trend analysis',
            'Peer comparison',
            'Executive summary generation',
            'Custom KPI tracking'
        ],
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
        developer: 'FinanceAI Labs',
        lastUpdated: '2024-12-12'
    },
    'medical-records-processor': {
        id: 'medical-records-processor',
        name: 'Medical Records Processor',
        category: 'Healthcare',
        description: 'Extracts and organizes medical record data with HIPAA compliance.',
        longDescription: 'The Medical Records Processor securely processes medical records, extracting patient information, diagnoses, treatments, and medications while maintaining full HIPAA compliance. Ideal for healthcare providers, insurance companies, and medical research institutions.',
        rating: 4.9,
        executions: '30K+',
        verified: true,
        tokenCost: 80,
        features: [
            'HIPAA compliant processing',
            'Medical terminology recognition',
            'Diagnosis code extraction',
            'Medication tracking',
            'Patient timeline generation',
            'Integration with EHR systems'
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
        developer: 'HealthTech AI',
        lastUpdated: '2024-12-08'
    },
    'data-pipeline-builder': {
        id: 'data-pipeline-builder',
        name: 'Data Pipeline Builder',
        category: 'Data Analysis',
        description: 'Automatically creates and optimizes data pipelines from natural language.',
        longDescription: 'The Data Pipeline Builder converts natural language descriptions into functional data pipelines. It supports multiple data sources, handles transformations, and optimizes for performance. Perfect for data engineers and analysts who want to accelerate pipeline development.',
        rating: 4.6,
        executions: '45K+',
        verified: true,
        tokenCost: 55,
        features: [
            'Natural language to pipeline',
            'Multi-source integration',
            'Automatic optimization',
            'Error handling',
            'Scheduling support',
            'Monitoring dashboard'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
        developer: 'DataFlow Inc',
        lastUpdated: '2024-12-14'
    }
};

export function AgentDetail() {
    // Get agent ID from hash
    const hash = window.location.hash;
    const agentId = hash.replace('#agent-', '');
    const agent = agentData[agentId];

    if (!agent) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-amber-100 mb-4">Agent Not Found</h1>
                    <a href="#marketplace" className="text-amber-400 hover:text-amber-300">
                        ← Back to Marketplace
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Back Button */}
                <motion.a
                    href="#marketplace"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Marketplace
                </motion.a>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-2"
                    >

                        {/* Agent Info */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <span className="text-amber-400 text-sm font-medium uppercase tracking-wide">{agent.category}</span>
                                <h1 className="text-3xl font-bold text-amber-100 mt-1">{agent.name}</h1>
                            </div>
                            {agent.verified && (
                                <div className="bg-green-500/20 p-3 rounded-xl flex items-center gap-2">
                                    <Shield className="text-green-400" size={20} />
                                    <span className="text-green-400 text-sm font-medium">Verified</span>
                                </div>
                            )}
                        </div>

                        {/* Stats Row */}
                        <div className="flex items-center gap-6 mb-8">
                            <div className="flex items-center gap-2">
                                <Star className="text-amber-400" size={18} />
                                <span className="text-amber-100 font-medium">{agent.rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="text-amber-400" size={18} />
                                <span className="text-amber-100/70">{agent.executions} executions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="text-amber-400" size={18} />
                                <span className="text-amber-100/70">Updated {agent.lastUpdated}</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-xl font-bold text-amber-100 mb-4">About This Agent</h2>
                            <p className="text-amber-100/70 leading-relaxed">{agent.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div className="bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8">
                            <h2 className="text-xl font-bold text-amber-100 mb-6">Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {agent.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-amber-400 flex-shrink-0" size={18} />
                                        <span className="text-amber-100/70">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar - Purchase Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="sticky top-24">
                            <div className="bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8">
                                <h3 className="text-lg font-bold text-amber-100 mb-6">Purchase Tokens</h3>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="text-4xl font-bold text-amber-400 mb-1">{agent.tokenCost} Tokens</div>
                                    <div className="text-amber-100/50 text-sm">per successful execution</div>
                                </div>

                                {/* Purchase Button */}
                                <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-xl transition-all duration-300 text-amber-950 font-semibold mb-4 hover:scale-[1.02]">
                                    Purchase & Deploy
                                </button>

                                <button className="w-full py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all text-amber-100 mb-6">
                                    Try Demo
                                </button>

                                {/* Developer Info */}
                                <div className="border-t border-amber-500/20 pt-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Users className="text-amber-400" size={18} />
                                        <div>
                                            <div className="text-amber-100/50 text-xs">Developed by</div>
                                            <div className="text-amber-100 font-medium">{agent.developer}</div>
                                        </div>
                                    </div>
                                    <p className="text-amber-100/50 text-sm">
                                        70% of your tokens go directly to the developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
