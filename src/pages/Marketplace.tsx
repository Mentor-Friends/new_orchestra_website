import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Star, Shield, Filter, X } from 'lucide-react';

export function Marketplace() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const agentCategories = [
        { name: 'Finance', count: 12, image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400' },
        { name: 'Legal', count: 8, image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400' },
        { name: 'Construction', count: 15, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400' },
        { name: 'Healthcare', count: 6, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400' },
        { name: 'Real Estate', count: 10, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400' },
        { name: 'Data Analysis', count: 18, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400' }
    ];
    const allAgents = [
        { id: 'construction-bid-leveler', name: 'Construction Bid Leveler', category: 'Construction', description: 'Compares PDF proposals to find outliers.', rating: 4.9, executions: '50K+', verified: true },
        { id: 'zoning-compliance-engine', name: 'Zoning Compliance Engine', category: 'Real Estate', description: 'Cross-references municipal codes vs GIS data.', rating: 4.8, executions: '25K+', verified: true },
        { id: 'contract-analyzer', name: 'Contract Analyzer', category: 'Legal', description: 'Extracts key terms and identifies risks.', rating: 4.7, executions: '100K+', verified: true },
        { id: 'financial-report-analyzer', name: 'Financial Report Analyzer', category: 'Finance', description: 'Analyzes financial statements.', rating: 4.8, executions: '75K+', verified: true },
        { id: 'medical-records-processor', name: 'Medical Records Processor', category: 'Healthcare', description: 'Extracts medical record data.', rating: 4.9, executions: '30K+', verified: true },
        { id: 'data-pipeline-builder', name: 'Data Pipeline Builder', category: 'Data Analysis', description: 'Creates data pipelines from natural language.', rating: 4.6, executions: '45K+', verified: true }
    ];
    const filteredAgents = allAgents.filter(agent => {
        const matchesCategory = !activeCategory || agent.category === activeCategory;
        const matchesSearch = !searchQuery || agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || agent.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <div className="min-h-screen">
            <section className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Marketplace</p>
                        <h1 className="mb-6">The Secure AI Agent Marketplace</h1>
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-100/40" size={20} />
                            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search agents..." className="w-full pl-12 pr-4 py-4 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-100 placeholder-amber-100/40 focus:outline-none focus:border-amber-400/50" />
                        </div>
                    </motion.div>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button onClick={() => setActiveCategory(null)} className={activeCategory === null ? 'px-4 py-2 rounded-full bg-amber-500 text-amber-950 font-semibold' : 'px-4 py-2 rounded-full bg-amber-500/10 text-amber-100 border border-amber-500/20'}>All</button>
                        {agentCategories.map((cat) => (<button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={activeCategory === cat.name ? 'px-4 py-2 rounded-full bg-amber-500 text-amber-950 font-semibold' : 'px-4 py-2 rounded-full bg-amber-500/10 text-amber-100 border border-amber-500/20'}>{cat.name}</button>))}
                    </div>
                    {(activeCategory || searchQuery) && (<div className="flex items-center justify-center gap-2 mb-8"><Filter size={16} className="text-amber-400" /><span className="text-amber-100/70">{filteredAgents.length} results</span></div>)}
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAgents.map((agent, index) => (
                            <motion.div key={agent.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full">
                                    <div className="flex items-start justify-between mb-4">
                                        <div><span className="text-amber-400 text-xs uppercase">{agent.category}</span><h3 className="text-xl font-bold text-amber-100">{agent.name}</h3></div>
                                        {agent.verified && <div className="bg-green-500/20 p-2 rounded-lg"><Shield className="text-green-400" size={18} /></div>}
                                    </div>
                                    <p className="text-amber-100/70 mb-6">{agent.description}</p>
                                    <div className="flex items-center gap-4 mb-6"><div className="flex items-center gap-1"><Star className="text-amber-400" size={16} /><span className="text-amber-100">{agent.rating}</span></div><span className="text-amber-100/50"></span><span className="text-amber-100/60">{agent.executions}</span></div>
                                    <a href={'#agent-' + agent.id} className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500/10 hover:bg-amber-500/20 rounded-xl border border-amber-500/20 text-amber-100">View Details <ArrowRight size={16} /></a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {filteredAgents.length === 0 && <div className="text-center py-16"><p className="text-amber-100/50">No agents found.</p><button onClick={() => { setActiveCategory(null); setSearchQuery(''); }} className="mt-4 text-amber-400">Clear filters</button></div>}
                </div>
            </section>
        </div>
    );
}
