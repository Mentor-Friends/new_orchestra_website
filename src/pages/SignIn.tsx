import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, LogIn } from 'lucide-react';

export function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Handle sign in logic here
            console.log('Sign in attempted:', { email, password });
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                {/* Header */}
                <div className="text-center mb-10">
                    <h1
                        className="text-3xl font-bold text-white mb-3"
                        style={{ textShadow: '0 0 20px rgba(74, 222, 128, 0.5), 0 0 40px rgba(74, 222, 128, 0.3), 0 0 80px rgba(16, 185, 129, 0.2)' }}
                    >
                        Welcome Back
                    </h1>
                    <p className="text-white/60">
                        Sign in to access your A2A Orchestra dashboard
                    </p>
                </div>

                {/* Sign In Form */}
                <div className="relative">
                    {/* Soft angelic glow */}
                    <div
                        className="absolute -inset-2 rounded-3xl blur-2xl opacity-60"
                        style={{ background: 'linear-gradient(135deg, rgba(196, 181, 253, 0.25), rgba(255, 255, 255, 0.1), rgba(253, 186, 199, 0.2))' }}
                    />
                    <div
                        className="relative backdrop-blur-xl rounded-3xl border border-white/10 p-8"
                        style={{ background: 'linear-gradient(135deg, rgba(20, 15, 30, 0.9), rgba(15, 15, 25, 0.95))' }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="label-uppercase text-violet-300/80 mb-2 block">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400/40" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="you@example.com"
                                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-400/20 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className="label-uppercase text-violet-300/80 mb-2 block">
                                    Password
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-400/40" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-400/20 transition-all"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-400/40 hover:text-violet-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Forgot Password Link */}
                            <div className="flex justify-end">
                                <a
                                    href="#forgot-password"
                                    className="text-sm text-violet-300/70 hover:text-violet-200 transition-colors"
                                >
                                    Forgot your password?
                                </a>
                            </div>

                            {/* Submit Button - Soft angelic gradient */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group w-full py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-white font-semibold disabled:opacity-70 disabled:cursor-not-allowed"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(139, 127, 180, 0.9), rgba(180, 160, 200, 0.8), rgba(200, 180, 190, 0.85))',
                                    boxShadow: '0 4px 30px rgba(196, 181, 253, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)'
                                }}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sign Up Link */}
                <p className="text-center mt-8 text-white/80 font-semibold text-lg">
                    Don't have an account?{' '}
                    <a
                        href="#signup"
                        className="text-white hover:text-violet-200 font-bold transition-colors underline underline-offset-2"
                    >
                        Sign Up
                    </a>
                </p>
            </motion.div>
        </div>
    );
}
