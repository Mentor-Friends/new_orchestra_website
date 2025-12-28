import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Lock, Brain, CheckCircle2, Building2, Users } from 'lucide-react';
import { OrganizationIntakeForm } from '../components/OrganizationIntakeForm';

export function ProductDevelopment() {
    return (
        <div className="min-h-screen">
            {/* Hero Section - Split Layout */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">For Business Clients</p>
                            <h1
                                className="mb-6 text-left whitespace-nowrap"
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
                                Conduct Secure Agentic Solutions
                            </h1>
                            <p className="text-amber-300 text-xl mb-6">
                                Amplify Your Vision into an Orchestrated Symphony of Results
                            </p>
                            <p className="text-amber-100/70 text-lg mb-8 leading-relaxed">
                                You define the vision. We multiply your team's execution power. Our platform provides the security,
                                verification, and infrastructure you need to build autonomous workforces at scale.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-100/50 hover:border-amber-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center text-amber-100 cursor-pointer"
                                >
                                    Explore Capabilities
                                </button>
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
                                            'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop',
                                            'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop'
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

            {/* Enterprise Capabilities Section - 3 Column Grid */}
            <section id="capabilities" className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Centered Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Enterprise Capabilities</p>
                        <h2 className="mb-6">
                            Everything You Need to Deploy AI at Scale
                        </h2>
                        <p className="text-amber-100/70 text-lg mx-auto text-center">
                            We identify your highest-friction workflows, engineer your custom automation layer,
                            and deploy a workforce with perfect recall that captures value without pause.
                            Delivered in 4-8 weeks.
                        </p>
                    </motion.div>

                    {/* 3 Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=400&fit=crop',
                                title: 'Enterprise Security',
                                description: 'Zero-trust architecture with adversarial security testing at the protocol level. End-to-end encryption for all communications.',
                                features: ['Protocol-level security', 'Adversarial testing', 'End-to-end encryption']
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop',
                                title: 'Verified AI Agents',
                                description: 'Every agent is certified and tested before deployment. Real-time performance monitoring and analytics.',
                                features: ['Certification process', 'Performance monitoring', 'Quality assurance']
                            },
                            {
                                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop',
                                title: 'Custom Solutions',
                                description: 'Work with our team to build custom AI solutions tailored to your specific business requirements.',
                                features: ['Dedicated support', 'Custom development', 'Integration assistance']
                            }
                        ].map((capability, index) => (
                            <motion.div
                                key={capability.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 p-8 h-full transition-all duration-300 text-center">
                                    <div className="photo-immersive-thumb w-20 h-20 rounded-2xl mb-6 mx-auto">
                                        <img src={capability.image} alt={capability.title} className="w-full h-full object-cover rounded-2xl" />
                                    </div>
                                    <h3 className="text-xl font-bold text-amber-100 mb-3">{capability.title}</h3>
                                    <p className="text-amber-100/70 mb-6 leading-relaxed">{capability.description}</p>
                                    <ul className="space-y-2 flex flex-col items-center">
                                        {capability.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-amber-100/60 text-sm">
                                                <CheckCircle2 className="text-amber-400 flex-shrink-0" size={16} />
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

            {/* How It Works - Alternating Sections */}
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
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">How It Works</p>
                        <h2 className="mb-6">
                            From Vision to Deployment
                        </h2>
                    </motion.div>

                    {/* Step 1 - Text Left, Visual Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-amber-400 font-bold text-sm mb-4">STEP 01</div>
                            <h3 className="text-2xl font-bold text-amber-100 mb-4">Define Your Requirements</h3>
                            <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                                Work with our team to identify your automation needs and design the perfect
                                AI workforce for your organization. We'll help you scope, plan, and architect
                                your solution.
                            </p>
                            <ul className="space-y-3">
                                {['Requirement analysis', 'Solution architecture', 'Security assessment'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-amber-100/70">
                                        <CheckCircle2 className="text-amber-400 flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-600/20 to-amber-700/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 flex items-center justify-center min-h-[300px]">
                                    <div className="photo-immersive-circle w-32 h-32 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop" alt="Team planning" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Step 2 - Visual Left, Text Right (Zig-Zag) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-700/20 to-amber-800/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 flex items-center justify-center min-h-[300px]">
                                    <div className="photo-immersive-circle w-32 h-32 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop" alt="AI Agent" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-1 lg:order-2"
                        >
                            <div className="text-amber-400 font-bold text-sm mb-4">STEP 02</div>
                            <h3 className="text-2xl font-bold text-amber-100 mb-4">Select & Customize Agents</h3>
                            <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                                Choose from our marketplace of verified AI agents or commission custom agents
                                built to your specifications. Every agent is certified for enterprise use.
                            </p>
                            <ul className="space-y-3">
                                {['50+ verified agents', 'Custom development', 'Enterprise certification'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-amber-100/70">
                                        <CheckCircle2 className="text-amber-400 flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Step 3 - Text Left, Visual Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="text-amber-400 font-bold text-sm mb-4">STEP 03</div>
                            <h3 className="text-2xl font-bold text-amber-100 mb-4">Deploy & Scale</h3>
                            <p className="text-amber-100/70 text-lg leading-relaxed mb-6">
                                Launch your AI workforce with confidence. Our platform handles scaling, monitoring,
                                and security so you can focus on results.
                            </p>
                            <ul className="space-y-3">
                                {['Auto-scaling infrastructure', 'Real-time monitoring', '24/7 enterprise support'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-amber-100/70">
                                        <CheckCircle2 className="text-amber-400 flex-shrink-0" size={20} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl blur-2xl" />
                                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 flex items-center justify-center min-h-[300px]">
                                    <div className="photo-immersive-circle w-32 h-32 rounded-full">
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop" alt="Data analytics" className="w-full h-full object-cover rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Get Started</p>
                        <h2 className="mb-6">
                            Orchestrate Your Advantage
                        </h2>
                        <p className="text-amber-100/70 text-lg mx-auto text-center">
                            Fill out the form below and our team will reach out to discuss your requirements
                            and how A2A Orchestra can help transform your business.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <OrganizationIntakeForm />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
