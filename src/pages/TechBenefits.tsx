import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArrowRight, Shield, Zap, Lock, Brain, CheckCircle2, Cpu, Network, Eye, Globe } from 'lucide-react';

export function TechBenefits() {
    // Scroll-based fade effect for hero content
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate opacity: fade out between 0-500px scroll for smooth, gradual fade
    const heroOpacity = Math.max(0, 1 - scrollY / 500);

    return (
        <div className="min-h-screen">
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-[80vh] flex items-center overflow-hidden">
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
                    style={{
                        opacity: heroOpacity,
                        transform: `translateY(${scrollY * 0.3}px)`,
                        transition: 'opacity 0.1s ease-out'
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Technology & Benefits</p>
                            <h1
                                className="mb-6 text-left"
                                style={{
                                    textShadow: `
                                        0 0 10px rgba(16, 185, 129, 0.4),
                                        0 0 20px rgba(16, 185, 129, 0.3),
                                        0 0 40px rgba(16, 185, 129, 0.2),
                                        0 0 80px rgba(16, 185, 129, 0.15),
                                        0 0 120px rgba(16, 185, 129, 0.1)
                                    `
                                }}
                            >
                                Enterprise-Grade AI Infrastructure
                            </h1>
                            <p className="text-amber-300 text-xl mb-6">
                                Built for reliability. Designed for scale. Secured by default.
                            </p>
                            <p className="text-amber-100/70 text-lg mb-8 leading-relaxed">
                                A2A Orchestra is powered by cutting-edge technology that ensures every agent interaction
                                is secure, verified, and performant. Our infrastructure handles millions of executions
                                while maintaining mathematical certainty.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#security"
                                    className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105 text-amber-950 font-semibold"
                                >
                                    Explore Security
                                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                </a>
                                <a
                                    href="#protocol"
                                    className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/30 hover:border-amber-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100"
                                >
                                    View A2A Protocol
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Side - Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-800/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1573164713619-24c711fe7878?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop'
                                        ].map((src, i) => (
                                            <div key={i} className="photo-immersive-thumb aspect-square rounded-2xl">
                                                <img src={src} alt="" className="w-full h-full object-cover rounded-2xl" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Technology - 3 Column Grid */}
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
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Core Technology</p>
                        <h2 className="mb-6 text-center">
                            The Foundation of Trust
                        </h2>
                        <p className="text-amber-100/70 text-lg text-center">
                            Our platform is built on three pillars: the Google A2A Protocol, adversarial security testing,
                            and enterprise-grade infrastructure.
                        </p>
                    </motion.div>

                    {/* 3 Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop',
                                title: 'Google A2A Protocol',
                                gradient: 'from-amber-500 to-amber-600',
                                description: 'We enforce the Google A2A Protocol at the framework level, ensuring standardized communication between agents and systems.',
                                features: ['Standardized agent communication', 'Protocol-level verification', 'Interoperability by design']
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=400&h=400&fit=crop',
                                title: 'Adversarial Security Testing',
                                gradient: 'from-amber-600 to-amber-700',
                                description: 'Every agent undergoes rigorous adversarial testing at the protocol level before deployment, simulating real-world attack vectors.',
                                features: ['LLM jailbreak prevention', 'Prompt injection defense', 'Anomalous behavior detection']
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
                                title: 'Sandboxed Execution',
                                gradient: 'from-amber-700 to-amber-800',
                                description: 'All agent code runs in isolated, ephemeral environments for maximum security.',
                                features: ['Isolated containers', 'Ephemeral environments', 'Secure execution']
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
                                    <div className="photo-immersive-thumb w-14 h-14 rounded-2xl mb-6">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                                    <p className="text-amber-100/70 mb-6">{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-amber-100/60 text-sm">
                                                <CheckCircle2 className="text-amber-400" size={16} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section - Split Layout */}
            <section id="security" className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Visual - Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="photo-immersive-hero relative rounded-3xl">
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
                                        alt="Enterprise Security"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Text - Right */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Security First</p>
                            <h2 className="mb-6 text-left">
                                Trust That's Mathematical, Not Theoretical
                            </h2>
                            <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                                Every connection is verified. Every interaction is logged. Every outcome is predictable.
                                Our Guardian Agent security system actively scans for attack vectors specific to A2A protocol,
                                LLM jailbreaking, and anomalous behavior.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Protocol-level verification for all agent interactions',
                                    'Real-time threat detection and automatic isolation',
                                    'Complete audit trail for compliance requirements',
                                    'End-to-end encryption for all data in transit'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-amber-100/70">
                                        <CheckCircle2 className="text-amber-400 flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits - 2x2 Grid */}
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
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Benefits</p>
                        <h2 className="mb-6">
                            Why A2A Orchestra?
                        </h2>
                    </motion.div>

                    {/* 2x2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            {
                                title: 'Reduce Integration Time',
                                description: 'Stop building plumbing. Our standardized protocol means agents work together out of the box, cutting integration time by 90%.',
                                metric: '90%',
                                metricLabel: 'Faster Integration'
                            },
                            {
                                title: 'Lower Operational Costs',
                                description: 'Pay only for successful executions. No idle time charges, no failed task costs. Token-based billing that aligns with actual value delivered.',
                                metric: '70%',
                                metricLabel: 'Cost Reduction'
                            },
                            {
                                title: 'Built-in Compliance',
                                description: 'Comprehensive security framework with complete audit trails. Meet regulatory requirements without building custom compliance systems.',
                                metric: '100%',
                                metricLabel: 'Audit Coverage'
                            },
                            {
                                title: 'Scale Without Limits',
                                description: 'Auto-scaling infrastructure handles millions of agent executions. Deploy globally with auto-scaling infrastructure.',
                                metric: '99.9%',
                                metricLabel: 'Uptime SLA'
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
                                    <h3 className="text-xl font-bold text-amber-100 mb-4">{item.title}</h3>
                                    <p className="text-amber-100/70 leading-relaxed">{item.description}</p>
                                </div>
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
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl blur-xl opacity-30" />
                            <div className="relative bg-gradient-to-br from-[#1a1208] to-[#0a0804] rounded-2xl border border-amber-500/30 p-8 lg:p-10 text-center">
                                <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Get Started</p>
                                <h2 className="mb-6 text-center">
                                    Ready to Experience the Difference?
                                </h2>
                                <p className="text-amber-100/70 mb-10 text-lg text-center">
                                    See how A2A Orchestra's technology can transform your AI operations.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="#product"
                                        className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-600/20 text-amber-950 font-semibold"
                                    >
                                        Start Building
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                    </a>
                                    <a
                                        href="#developers"
                                        className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 text-amber-100"
                                    >
                                        View Documentation
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
