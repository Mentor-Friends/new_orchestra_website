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
                        style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.3), 0 0 60px rgba(196, 181, 253, 0.2)' }}
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

                        {/* Divider */}
                        <div className="my-8 flex items-center gap-4">
                            <div className="flex-1 h-px bg-white/10" />
                            <span className="text-white/40 text-sm">or continue with</span>
                            <div className="flex-1 h-px bg-white/10" />
                        </div>

                        {/* Social Sign In */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white hover:border-violet-400/30 hover:bg-violet-400/10 transition-all flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </button>
                            <button className="py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white hover:border-violet-400/30 hover:bg-violet-400/10 transition-all flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </button>
                        </div>
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
