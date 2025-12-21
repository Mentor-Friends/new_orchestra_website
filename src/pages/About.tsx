import { motion } from 'motion/react';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

export function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Centered Layout */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-amber-400 font-medium mb-6 uppercase tracking-wide text-sm">About Us</p>
                        <h1 className="mb-8">
                            The Conductor of the Digital Workforce
                        </h1>
                        <p className="text-amber-100/70 text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
                            The conductor of the digital workforce. The architect of certainty. The bridge
                            between innovation and enterprise. We are the active force that organizes the noise into signal.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#product"
                                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105 text-amber-950 font-semibold"
                            >
                                Get Started
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                            </a>
                            <a
                                href="#founders"
                                className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                            >
                                Meet Our Team
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do - 2x2 Grid */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Centered Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">What We Do</p>
                        <h2 className="mb-6">
                            We Are That System for the Digital Economy
                        </h2>
                    </motion.div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop',
                                title: 'The Orchestra',
                                description: 'An orchestra is not a random collection of noise; it is a unified system where distinct instruments contribute to a singular, flawless performance. We are that system for the digital economy.'
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop',
                                title: 'The Trust Layer',
                                description: 'We do not merely host code; we harmonize it. We have built the rigorous infrastructure necessary to turn isolated, autonomous agents into a synchronized workforce. We serve as the "Trust Layer" — the strict audition that every instrument must pass before taking the stage.'
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=400&fit=crop',
                                title: 'The Protocol',
                                description: 'Through our proprietary A2A Protocol and adversarial verification, we ensure that every connection is secure, every interaction is standardized, and every outcome is mathematically predictable.'
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
                                title: 'The Bridge',
                                description: 'We are the bridge between the builder\'s ingenuity and the enterprise\'s demand for reliability. We are the active force that organizes the noise into signal.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full transition-all duration-300">
                                    <div className="w-14 h-14 mb-4 rounded-full overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                                    <p className="text-amber-100/70 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values - 3 Column */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Centered Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Our Values</p>
                        <h2 className="mb-6">
                            What Drives Us
                        </h2>
                    </motion.div>

                    {/* 3 Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=400&fit=crop',
                                title: 'Security First',
                                description: 'Every decision we make prioritizes the security and privacy of our users and their data.'
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&h=400&fit=crop',
                                title: 'Performance Excellence',
                                description: 'We set the highest standards for reliability and only accept agents that exceed them.'
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop',
                                title: 'Developer Partnership',
                                description: 'We believe builders deserve the majority of value they create. 70% revenue share proves it.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-6">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-amber-100 mb-3">{item.title}</h3>
                                <p className="text-amber-100/70">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl blur-xl opacity-30" />
                            <div className="relative bg-gradient-to-br from-[#1a1208] to-[#0a0804] rounded-3xl border border-amber-500/30 p-12 lg:p-16 text-center">
                                <h2 className="mb-6 bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                                    We Are A2A Orchestra.
                                </h2>
                                <p className="text-amber-100/70 mb-10 max-w-2xl mx-auto text-lg">
                                    The conductor of the digital workforce. The architect of certainty.
                                    The bridge between innovation and enterprise.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="#product"
                                        className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-600/20 text-amber-950 font-semibold"
                                    >
                                        Get Started
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                    </a>
                                    <a
                                        href="#founders"
                                        className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 text-amber-100"
                                    >
                                        Meet Our Team
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
