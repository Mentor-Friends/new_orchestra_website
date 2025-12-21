import { motion } from 'motion/react';

export function About() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h1 className="mb-6">
                                The Conductor of the Digital Workforce
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mb-12 text-cyan-300 text-xl text-center font-semibold"
                        >
                            A2A Orchestra is the architect of certainty.
                        </motion.p>

                        {/* Content Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="relative max-w-4xl mx-auto"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-50" />
                            <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
                                <div className="space-y-6 text-left">
                                    {/* The Orchestra Metaphor */}
                                    <div className="pb-6 border-b border-white/10">
                                        <h3 className="text-white font-bold text-lg mb-3">🎻 The Orchestra</h3>
                                        <p className="text-white/80 leading-relaxed">
                                            An orchestra is not a random collection of noise; it is a unified system where distinct instruments contribute to a singular, flawless performance. We are that system for the digital economy.
                                        </p>
                                    </div>

                                    {/* The Trust Layer */}
                                    <div className="pb-6 border-b border-white/10">
                                        <h3 className="text-white font-bold text-lg mb-3">🛡️ The Trust Layer</h3>
                                        <p className="text-white/80 leading-relaxed">
                                            We do not merely host code; we harmonize it. We have built the rigorous infrastructure necessary to turn isolated, autonomous agents into a synchronized workforce. We serve as the "Trust Layer" — the strict audition that every instrument must pass before taking the stage.
                                        </p>
                                    </div>

                                    {/* The Protocol */}
                                    <div className="pb-6 border-b border-white/10">
                                        <h3 className="text-white font-bold text-lg mb-3">🔐 The Protocol</h3>
                                        <p className="text-white/80 leading-relaxed">
                                            Through our proprietary A2A Protocol and adversarial verification, we ensure that every connection is secure, every interaction is standardized, and every outcome is mathematically predictable. We provide the sheet music, the protocols, and controls that allow diverse, autonomous tools to communicate without friction and execute without failure.
                                        </p>
                                    </div>

                                    {/* The Bridge */}
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-3">🌉 The Bridge</h3>
                                        <p className="text-white/80 leading-relaxed">
                                            We are the bridge between the builder's ingenuity and the enterprise's demand for reliability. We are the active force that organizes the noise into signal.
                                        </p>
                                    </div>
                                </div>

                                {/* Closing Statement */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1.0 }}
                                    className="mt-10 pt-8 border-t border-white/10 text-center"
                                >
                                    <p className="text-white text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        We are A2A Orchestra.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
