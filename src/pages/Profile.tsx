import { motion } from 'motion/react';
import { User, Mail, Shield, Code2, Package, DollarSign, BarChart3, Settings, Bell, Lock } from 'lucide-react';

export function Profile() {
  const stats = [
    { label: 'Agents Published', value: '12', icon: Package },
    { label: 'Total Revenue', value: '$24,580', icon: DollarSign },
    { label: 'Active Deployments', value: '847', icon: BarChart3 },
    { label: 'Avg Rating', value: '4.8/5.0', icon: Shield },
  ];

  const recentAgents = [
    {
      name: 'DataAnalyzer Pro',
      status: 'Active',
      deployments: 234,
      revenue: '$8,420',
      rating: 4.9,
    },
    {
      name: 'CustomerSupportAI',
      status: 'Active',
      deployments: 412,
      revenue: '$12,340',
      rating: 4.8,
    },
    {
      name: 'CodeReviewer',
      status: 'Pending Certification',
      deployments: 0,
      revenue: '$0',
      rating: null,
    },
  ];

  const recentActivity = [
    { action: 'Agent deployed', agent: 'DataAnalyzer Pro', time: '2 hours ago' },
    { action: 'Revenue payout', amount: '$2,450', time: '1 day ago' },
    { action: 'New certification', agent: 'CustomerSupportAI', time: '3 days ago' },
    { action: 'Agent updated', agent: 'DataAnalyzer Pro', time: '5 days ago' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Header */}
            <div className="relative mb-12">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl" />
              <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-10">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur" />
                      <div className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                        <User className="text-white" size={48} />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h1 className="mb-2">Alex Developer</h1>
                    <p className="text-white/60 mb-4">Professional AI Agent Builder</p>
                    <div className="flex flex-wrap gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>alex.developer@email.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield size={16} />
                        <span>Verified Developer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code2 size={16} />
                        <span>Member since Jan 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                      Edit Profile
                    </button>
                    <button className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all">
                      <Settings size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-sm rounded-2xl border border-white/10 group-hover:border-white/20 p-6 transition-all duration-300">
                    <stat.icon className="mb-3 text-blue-400" size={24} />
                    <div className="text-2xl mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Agents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl">Your Agents</h2>
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition-colors">
                        + New Agent
                      </button>
                    </div>

                    <div className="space-y-4">
                      {recentAgents.map((agent) => (
                        <div
                          key={agent.name}
                          className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="mb-1">{agent.name}</h3>
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  agent.status === 'Active'
                                    ? 'bg-green-600/20 text-green-400'
                                    : 'bg-yellow-600/20 text-yellow-400'
                                }`}
                              >
                                {agent.status}
                              </span>
                            </div>
                            {agent.rating && (
                              <div className="flex items-center gap-1">
                                <span className="text-yellow-400">★</span>
                                <span className="text-sm">{agent.rating}</span>
                              </div>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <p className="text-white/50 mb-1">Deployments</p>
                              <p className="text-white/90">{agent.deployments}</p>
                            </div>
                            <div>
                              <p className="text-white/50 mb-1">Revenue</p>
                              <p className="text-green-400">{agent.revenue}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h2 className="text-2xl mb-6">Recent Activity</h2>

                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400" />
                          <div className="flex-1">
                            <p className="text-white/90 mb-1">{activity.action}</p>
                            <p className="text-sm text-white/60">
                              {activity.agent || activity.amount}
                            </p>
                            <p className="text-xs text-white/40 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Settings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Account Settings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h3 className="text-xl mb-6 flex items-center gap-3">
                      <Settings className="text-blue-400" size={24} />
                      Account Settings
                    </h3>
                    <div className="space-y-4">
                      {[
                        { icon: User, label: 'Profile Information', action: 'Edit' },
                        { icon: Lock, label: 'Security & Password', action: 'Update' },
                        { icon: Bell, label: 'Notifications', action: 'Configure' },
                        { icon: DollarSign, label: 'Billing & Payments', action: 'Manage' },
                      ].map((setting) => (
                        <button
                          key={setting.label}
                          className="w-full flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <setting.icon className="text-white/60" size={20} />
                            <span className="text-white/90">{setting.label}</span>
                          </div>
                          <span className="text-sm text-blue-400">{setting.action}</span>
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
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl blur" />
                  <div className="relative bg-[#0f0f0f]/90 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                    <h3 className="text-xl mb-6 flex items-center gap-3">
                      <Code2 className="text-purple-400" size={24} />
                      API Keys
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/70 text-sm">Production Key</span>
                          <span className="px-2 py-1 rounded bg-green-600/20 text-green-400 text-xs">
                            Active
                          </span>
                        </div>
                        <p className="font-mono text-sm text-white/50">a2a_prod_••••••••••••4a7b</p>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white/70 text-sm">Development Key</span>
                          <span className="px-2 py-1 rounded bg-blue-600/20 text-blue-400 text-xs">
                            Active
                          </span>
                        </div>
                        <p className="font-mono text-sm text-white/50">a2a_dev_••••••••••••8c2f</p>
                      </div>
                    </div>
                    <button className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                      Generate New Key
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
