import { useState } from 'react';
import { motion } from 'motion/react';
import {
  User, Mail, Shield, Code2, Package, DollarSign, BarChart3, Settings, Bell, Lock,
  Wallet, Award, Star, TrendingUp, Activity, ExternalLink, Copy, Check,
  Building2, Zap, Clock, ChevronRight, Eye, EyeOff, RefreshCw, LogOut
} from 'lucide-react';

type UserType = 'enterprise' | 'developer' | 'builder';

export function Profile() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'agents' | 'settings'>('overview');

  // User profile data
  const userProfile = {
    name: 'Alex Developer',
    email: 'alex.developer@company.com',
    type: 'developer' as UserType,
    verified: true,
    memberSince: 'January 2024',
    avatar: null,
    organization: 'TechCorp AI Labs',
    walletConnected: true,
    walletAddress: '0x7a23...8f4b',
    certificationLevel: 'Gold',
  };

  const stats = [
    { label: 'Agents Published', value: '12', icon: Package, trend: '+2 this month' },
    { label: 'Total Revenue', value: '$24,580', icon: DollarSign, trend: '+18% vs last month' },
    { label: 'Active Deployments', value: '847', icon: BarChart3, trend: '+124 this week' },
    { label: 'Trust Score', value: '98.4%', icon: Shield, trend: 'Top 5% of builders' },
  ];

  const publishedAgents = [
    {
      id: 'agent-1',
      name: 'DataAnalyzer Pro',
      status: 'Active',
      deployments: 234,
      revenue: '$8,420',
      rating: 4.9,
      reviews: 47,
      category: 'Analytics',
    },
    {
      id: 'agent-2',
      name: 'CustomerSupportAI',
      status: 'Active',
      deployments: 412,
      revenue: '$12,340',
      rating: 4.8,
      reviews: 89,
      category: 'Support',
    },
    {
      id: 'agent-3',
      name: 'CodeReviewer',
      status: 'Pending Certification',
      deployments: 0,
      revenue: '$0',
      rating: null,
      reviews: 0,
      category: 'Development',
    },
    {
      id: 'agent-4',
      name: 'DocumentProcessor',
      status: 'Active',
      deployments: 201,
      revenue: '$3,820',
      rating: 4.7,
      reviews: 31,
      category: 'Automation',
    },
  ];

  const recentActivity = [
    { action: 'Agent deployed', detail: 'DataAnalyzer Pro deployed by Enterprise Corp', time: '2 hours ago', icon: Zap },
    { action: 'Revenue payout', detail: '$2,450 transferred to wallet', time: '1 day ago', icon: DollarSign },
    { action: 'Certification passed', detail: 'CustomerSupportAI passed security audit', time: '3 days ago', icon: Shield },
    { action: 'New review', detail: '5-star review on DataAnalyzer Pro', time: '4 days ago', icon: Star },
    { action: 'Agent updated', detail: 'DataAnalyzer Pro v2.1.0 published', time: '5 days ago', icon: RefreshCw },
  ];

  const certifications = [
    { name: 'A2A Protocol Certified', level: 'Gold', icon: Award, date: 'Jan 2024' },
    { name: 'Security Verified', level: 'Passed', icon: Shield, date: 'Feb 2024' },
    { name: 'Enterprise Ready', level: 'Approved', icon: Building2, date: 'Mar 2024' },
  ];

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case 'enterprise': return 'Enterprise Client';
      case 'developer': return 'Agent Developer';
      case 'builder': return 'Platform Builder';
    }
  };

  const getUserTypeColor = (type: UserType) => {
    switch (type) {
      case 'enterprise': return 'from-amber-400 to-amber-600';
      case 'developer': return 'from-amber-500 to-amber-700';
      case 'builder': return 'from-amber-600 to-amber-800';
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Header */}
            <div className="relative mb-10">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl blur-xl" />
              <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`absolute -inset-1 bg-gradient-to-br ${getUserTypeColor(userProfile.type)} rounded-2xl blur`} />
                      <div className={`relative w-24 h-24 bg-gradient-to-br ${getUserTypeColor(userProfile.type)} rounded-2xl flex items-center justify-center`}>
                        <User className="text-amber-950" size={48} />
                      </div>
                      {userProfile.verified && (
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-2 border-[#1a1208]">
                          <Check className="text-amber-950" size={16} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h1 className="text-3xl lg:text-4xl font-bold text-amber-100">{userProfile.name}</h1>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getUserTypeColor(userProfile.type)} text-amber-950`}>
                        {getUserTypeLabel(userProfile.type)}
                      </span>
                    </div>
                    <p className="text-amber-100/60 mb-4">{userProfile.organization}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-amber-100/70">
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-amber-500" />
                        <span>{userProfile.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-amber-500" />
                        <span>{userProfile.certificationLevel} Certified</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-amber-500" />
                        <span>Member since {userProfile.memberSince}</span>
                      </div>
                    </div>
                  </div>

                  {/* Wallet & Actions */}
                  <div className="flex flex-col gap-3">
                    {userProfile.walletConnected ? (
                      <div className="px-4 py-3 bg-amber-500/10 rounded-xl border border-amber-500/20 flex items-center gap-3">
                        <Wallet className="text-amber-500" size={20} />
                        <div>
                          <p className="text-xs text-amber-100/50">Connected Wallet</p>
                          <p className="text-sm text-amber-100 font-mono">{userProfile.walletAddress}</p>
                        </div>
                      </div>
                    ) : (
                      <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-xl transition-all duration-300 flex items-center gap-2 text-amber-950 font-semibold">
                        <Wallet size={18} />
                        Connect Wallet
                      </button>
                    )}
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all text-amber-100 text-sm">
                        Edit Profile
                      </button>
                      <button className="p-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
                        <Settings className="text-amber-400" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 mb-8 p-1 bg-[#1a1208]/60 rounded-xl border border-amber-500/10 w-fit">
              {[
                { id: 'overview', label: 'Overview', icon: Activity },
                { id: 'agents', label: 'My Agents', icon: Package },
                { id: 'settings', label: 'Settings', icon: Settings },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950'
                      : 'text-amber-100/70 hover:text-amber-100 hover:bg-amber-500/10'
                    }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                      <div className="relative bg-[#1a1208]/90 backdrop-blur-sm rounded-2xl border border-amber-500/10 group-hover:border-amber-500/30 p-6 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <stat.icon className="text-amber-500" size={24} />
                          <TrendingUp className="text-green-500" size={16} />
                        </div>
                        <div className="text-2xl font-bold mb-1 text-amber-100">
                          {stat.value}
                        </div>
                        <p className="text-sm text-amber-100/60 mb-2">{stat.label}</p>
                        <p className="text-xs text-green-400">{stat.trend}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Recent Activity */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="lg:col-span-2"
                  >
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur" />
                      <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-8">
                        <h2 className="text-2xl font-bold text-amber-100 mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                          {recentActivity.map((activity, index) => (
                            <div key={index} className="flex gap-4 p-4 rounded-xl bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                                <activity.icon className="text-amber-500" size={18} />
                              </div>
                              <div className="flex-1">
                                <p className="text-amber-100 font-medium mb-1">{activity.action}</p>
                                <p className="text-sm text-amber-100/60">{activity.detail}</p>
                              </div>
                              <p className="text-xs text-amber-100/40">{activity.time}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur" />
                      <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-8">
                        <h2 className="text-2xl font-bold text-amber-100 mb-6">Certifications</h2>
                        <div className="space-y-4">
                          {certifications.map((cert, index) => (
                            <div key={index} className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                              <div className="flex items-center gap-3 mb-2">
                                <cert.icon className="text-amber-500" size={20} />
                                <span className="text-amber-100 font-medium">{cert.name}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs px-2 py-1 rounded bg-amber-500/20 text-amber-400">{cert.level}</span>
                                <span className="text-xs text-amber-100/40">{cert.date}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-6 px-4 py-3 bg-amber-500/10 hover:bg-amber-500/20 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all text-amber-100 text-sm flex items-center justify-center gap-2">
                          View All Certifications
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {/* Agents Tab */}
            {activeTab === 'agents' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur" />
                  <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-amber-100">My Published Agents</h2>
                      <button className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 text-amber-950 font-semibold text-sm flex items-center gap-2">
                        <Package size={16} />
                        Publish New Agent
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {publishedAgents.map((agent) => (
                        <div
                          key={agent.id}
                          className="p-6 bg-amber-500/5 hover:bg-amber-500/10 rounded-2xl border border-amber-500/10 hover:border-amber-500/30 transition-all cursor-pointer group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-amber-100 mb-1 group-hover:text-amber-400 transition-colors">{agent.name}</h3>
                              <span className="text-xs text-amber-100/50">{agent.category}</span>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${agent.status === 'Active'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-amber-500/20 text-amber-400'
                                }`}
                            >
                              {agent.status}
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                            <div>
                              <p className="text-amber-100/40 mb-1">Deploys</p>
                              <p className="text-amber-100 font-medium">{agent.deployments}</p>
                            </div>
                            <div>
                              <p className="text-amber-100/40 mb-1">Revenue</p>
                              <p className="text-green-400 font-medium">{agent.revenue}</p>
                            </div>
                            <div>
                              <p className="text-amber-100/40 mb-1">Rating</p>
                              {agent.rating ? (
                                <div className="flex items-center gap-1">
                                  <Star className="text-amber-500 fill-amber-500" size={14} />
                                  <span className="text-amber-100 font-medium">{agent.rating}</span>
                                  <span className="text-amber-100/40">({agent.reviews})</span>
                                </div>
                              ) : (
                                <span className="text-amber-100/40">—</span>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button className="flex-1 px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 text-amber-100 text-sm transition-all">
                              View Details
                            </button>
                            <button className="px-3 py-2 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 text-amber-100 transition-all">
                              <ExternalLink size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Account Settings */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur" />
                    <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-8">
                      <h3 className="text-xl font-bold text-amber-100 mb-6 flex items-center gap-3">
                        <Settings className="text-amber-500" size={24} />
                        Account Settings
                      </h3>
                      <div className="space-y-3">
                        {[
                          { icon: User, label: 'Profile Information', action: 'Edit' },
                          { icon: Lock, label: 'Security & Password', action: 'Update' },
                          { icon: Bell, label: 'Notifications', action: 'Configure' },
                          { icon: DollarSign, label: 'Billing & Payments', action: 'Manage' },
                          { icon: Wallet, label: 'Connected Wallets', action: 'Manage' },
                        ].map((setting) => (
                          <button
                            key={setting.label}
                            className="w-full flex items-center justify-between p-4 rounded-xl bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/10 hover:border-amber-500/20 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <setting.icon className="text-amber-500" size={20} />
                              <span className="text-amber-100">{setting.label}</span>
                            </div>
                            <span className="text-sm text-amber-400">{setting.action}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* API Keys */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur" />
                    <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/10 p-8">
                      <h3 className="text-xl font-bold text-amber-100 mb-6 flex items-center gap-3">
                        <Code2 className="text-amber-500" size={24} />
                        API Keys
                      </h3>
                      <div className="space-y-4 mb-6">
                        {[
                          { name: 'Production Key', key: 'a2a_prod_sk_live_4a7b8c9d', status: 'Active', type: 'prod' },
                          { name: 'Development Key', key: 'a2a_dev_sk_test_8c2f3e4a', status: 'Active', type: 'dev' },
                        ].map((apiKey) => (
                          <div key={apiKey.name} className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-amber-100 font-medium">{apiKey.name}</span>
                              <span className={`px-2 py-1 rounded text-xs ${apiKey.type === 'prod'
                                  ? 'bg-green-500/20 text-green-400'
                                  : 'bg-amber-500/20 text-amber-400'
                                }`}>
                                {apiKey.status}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <code className="flex-1 font-mono text-sm text-amber-100/70 bg-black/30 px-3 py-2 rounded-lg">
                                {showApiKey ? apiKey.key : '••••••••••••••••••••'}
                              </code>
                              <button
                                onClick={() => setShowApiKey(!showApiKey)}
                                className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors"
                              >
                                {showApiKey ? <EyeOff className="text-amber-400" size={16} /> : <Eye className="text-amber-400" size={16} />}
                              </button>
                              <button
                                onClick={() => handleCopyKey(apiKey.key)}
                                className="p-2 hover:bg-amber-500/10 rounded-lg transition-colors"
                              >
                                {copiedKey === apiKey.key ? <Check className="text-green-400" size={16} /> : <Copy className="text-amber-400" size={16} />}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-xl transition-all duration-300 text-amber-950 font-semibold">
                        Generate New Key
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Danger Zone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-2"
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-3xl blur" />
                    <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-red-500/20 p-8">
                      <h3 className="text-xl font-bold text-red-400 mb-4">Danger Zone</h3>
                      <p className="text-amber-100/60 mb-6">Irreversible actions that affect your account.</p>
                      <div className="flex flex-wrap gap-4">
                        <button className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all text-red-400 text-sm flex items-center gap-2">
                          <LogOut size={16} />
                          Sign Out All Devices
                        </button>
                        <button className="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 rounded-lg border border-red-500/30 hover:border-red-500/50 transition-all text-red-400 text-sm">
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
