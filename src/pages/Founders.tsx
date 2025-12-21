import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

interface Founder {
  name: string;
  role: string;
  image: string;
  description: string;
  responsibilities: string[];
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export function Founders() {
  const founders: Founder[] = [
    {
      name: 'John Riley',
      role: 'Co-Founder',
      image: '/founders/john-riley.png',
      description: 'Add a brief bio about John Riley here. Describe his background, expertise, and what drives his vision for A2A Orchestra.',
      responsibilities: [
        'Add responsibility 1',
        'Add responsibility 2',
        'Add responsibility 3',
      ],
      linkedin: '#',
      twitter: '#',
      email: 'john@a2aorchestra.com',
    },
    {
      name: 'Ilan Danial',
      role: 'Co-Founder',
      image: '/founders/ilan-danial.png',
      description: 'Add a brief bio about Ilan Danial here. Describe his background, expertise, and what drives his vision for A2A Orchestra.',
      responsibilities: [
        'Add responsibility 1',
        'Add responsibility 2',
        'Add responsibility 3',
      ],
      linkedin: '#',
      twitter: '#',
      email: 'ilan@a2aorchestra.com',
    },
    {
      name: 'Paul Bobev',
      role: 'Co-Founder',
      image: '/founders/paul-bobev.png',
      description: 'Add a brief bio about Paul Bobev here. Describe his background, expertise, and what drives his vision for A2A Orchestra.',
      responsibilities: [
        'Add responsibility 1',
        'Add responsibility 2',
        'Add responsibility 3',
      ],
      linkedin: '#',
      twitter: '#',
      email: 'paul@a2aorchestra.com',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Centered */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Our Team</p>
            <h1 className="mb-6">
              Meet the Founders
            </h1>
            <p className="text-amber-100/70 text-lg">
              The architects behind A2A Orchestra, united by a vision to transform how enterprises deploy autonomous AI.
            </p>
          </motion.div>

          {/* Founders Grid - 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-amber-800/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                <div className="relative bg-[#1a1208]/80 backdrop-blur-xl rounded-3xl border border-amber-500/20 group-hover:border-amber-500/40 overflow-hidden transition-all duration-300 h-full">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Name & Role */}
                    <h3 className="text-2xl font-bold mb-1 text-amber-100">{founder.name}</h3>
                    <p className="text-amber-400 font-medium mb-4">{founder.role}</p>

                    {/* Description */}
                    <p className="text-amber-100/70 leading-relaxed mb-6">
                      {founder.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-amber-100/50 text-sm uppercase tracking-wide mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {founder.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-amber-100/70 text-sm">
                            <span className="text-amber-400 mt-1">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-amber-500/20">
                      {founder.linkedin && (
                        <a
                          href={founder.linkedin}
                          className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                          title="LinkedIn"
                        >
                          <Linkedin size={18} className="text-amber-100/70" />
                        </a>
                      )}
                      {founder.twitter && (
                        <a
                          href={founder.twitter}
                          className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                          title="Twitter"
                        >
                          <Twitter size={18} className="text-amber-100/70" />
                        </a>
                      )}
                      {founder.email && (
                        <a
                          href={`mailto:${founder.email}`}
                          className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 transition-all"
                          title="Email"
                        >
                          <Mail size={18} className="text-amber-100/70" />
                        </a>
                      )}
                    </div>
                  </div>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl blur-xl opacity-30" />
              <div className="relative bg-gradient-to-br from-[#1a1208] to-[#0a0804] rounded-3xl border border-amber-500/30 p-12 lg:p-16 text-center">
                <p className="text-amber-400 font-medium mb-4 uppercase tracking-wide text-sm">Join Us</p>
                <h2 className="mb-6">
                  Ready to Build the Future?
                </h2>
                <p className="text-amber-100/70 mb-10 max-w-2xl mx-auto text-lg">
                  Whether you're an enterprise looking to deploy AI or a developer ready to build,
                  we're here to help you succeed.
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
                    href="#about"
                    className="px-8 py-4 bg-amber-500/10 hover:bg-amber-500/20 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all duration-200 text-amber-100"
                  >
                    Learn More About Us
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