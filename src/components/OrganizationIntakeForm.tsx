import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, Target, Settings, Calendar } from 'lucide-react';

interface FormData {
  // Step 1
  organizationName: string;
  organizationWebsite: string;
  primaryContactName: string;
  primaryContactEmail: string;
  linkedin: string;
  organizationSize: string;

  // Step 2
  primaryGoal: string;
  goalCategory: string;
  beforeState: string;
  afterState: string;
  successMetric: string;

  // Step 3
  dataSources: string[];
  dataReadiness: string;
  operationalLogic: string;
  interactionChannels: string[];
  autonomyLevel: string;
  frequency: string;
  technicalPreferences: string;

  // Step 4
  pilotStartDate: string;
  agreement: boolean;
}

export function OrganizationIntakeForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    organizationWebsite: '',
    primaryContactName: '',
    primaryContactEmail: '',
    linkedin: '',
    organizationSize: '',
    primaryGoal: '',
    goalCategory: '',
    beforeState: '',
    afterState: '',
    successMetric: '',
    dataSources: [],
    dataReadiness: '',
    operationalLogic: '',
    interactionChannels: [],
    autonomyLevel: '',
    frequency: '',
    technicalPreferences: '',
    pilotStartDate: '',
    agreement: false,
  });

  const totalSteps = 4;

  const updateFormData = (field: string, value: string | string[] | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleCheckbox = (field: 'dataSources' | 'interactionChannels', value: string) => {
    const current = formData[field];
    if (current.includes(value)) {
      updateFormData(field, current.filter(item => item !== value));
    } else {
      updateFormData(field, [...current, value]);
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your submission has been received. Our team will contact you shortly.');
  };

  const stepIcons = [Building2, Target, Settings, Calendar];
  const StepIcon = stepIcons[currentStep - 1];

  return (
    <div className="max-w-4xl mx-auto">

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-3xl blur-xl" />
            <div className="relative bg-[#1a1208]/90 backdrop-blur-xl rounded-3xl border border-amber-500/20 p-8 lg:p-12">
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <StepIcon size={32} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">
                    {currentStep === 1 && 'Organization'}
                    {currentStep === 2 && 'The Vision'}
                    {currentStep === 3 && 'Technical Scope'}
                    {currentStep === 4 && 'Timeline & Submission'}
                  </h2>
                  <p className="text-amber-100/60">
                    {currentStep === 1 && 'Identify the client and key stakeholder'}
                    {currentStep === 2 && 'Capture the qualitative outcome and dream state'}
                    {currentStep === 3 && 'Determine complexity, integration needs, and data readiness'}
                    {currentStep === 4 && 'Establish urgency and set expectations'}
                  </p>
                </div>
              </div>

              {/* Step 1: Organization */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-amber-100/80 mb-2">Organization Name *</label>
                    <input
                      type="text"
                      value={formData.organizationName}
                      onChange={(e) => updateFormData('organizationName', e.target.value)}
                      className="w-full px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-lg focus:outline-none focus:border-amber-400 transition-colors text-amber-100"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Organization Website (Optional)</label>
                    <input
                      type="text"
                      value={formData.organizationWebsite}
                      onChange={(e) => updateFormData('organizationWebsite', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Primary Contact Name *</label>
                    <input
                      type="text"
                      value={formData.primaryContactName}
                      onChange={(e) => updateFormData('primaryContactName', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Primary Contact Email *</label>
                    <input
                      type="email"
                      value={formData.primaryContactEmail}
                      onChange={(e) => updateFormData('primaryContactEmail', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">LinkedIn (Optional)</label>
                    <input
                      type="text"
                      value={formData.linkedin}
                      onChange={(e) => updateFormData('linkedin', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Organization Size *</label>
                    <select
                      value={formData.organizationSize}
                      onChange={(e) => updateFormData('organizationSize', e.target.value)}
                      className="w-full px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors text-emerald-100"
                      required
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1–50</option>
                      <option value="51-250">51–250</option>
                      <option value="251-1000">251–1,000</option>
                      <option value="1000+">1,000+</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: The Vision */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-white/80 mb-2">What is the primary goal? *</label>
                    <select
                      value={formData.goalCategory}
                      onChange={(e) => updateFormData('goalCategory', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors mb-3"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="customer-support">Customer Support & CX</option>
                      <option value="knowledge-search">Internal Knowledge & Search</option>
                      <option value="operations-automation">Operations & Workflow Automation</option>
                      <option value="developer-productivity">Developer Productivity</option>
                      <option value="risk-compliance">Risk & Compliance</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea
                      value={formData.primaryGoal}
                      onChange={(e) => updateFormData('primaryGoal', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      placeholder="Describe your primary goal..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">The "Before" State *</label>
                    <p className="text-xs text-white/50 mb-2">How do you handle this task today? (e.g., "We manually download CSVs from Stripe and paste them into Excel...")</p>
                    <textarea
                      value={formData.beforeState}
                      onChange={(e) => updateFormData('beforeState', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">The "After" State *</label>
                    <p className="text-xs text-white/50 mb-2">What should the agent do ideally? (e.g., "The agent should read the CSV, analyze trends, and email us a summary...")</p>
                    <textarea
                      value={formData.afterState}
                      onChange={(e) => updateFormData('afterState', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">Success Metric *</label>
                    <p className="text-xs text-white/50 mb-2">How will you know it's working? (e.g., "We save 10 hours a week" or "Response time drops to under 5 mins")</p>
                    <textarea
                      value={formData.successMetric}
                      onChange={(e) => updateFormData('successMetric', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Technical Scope */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm text-white/80 mb-3">1. Inputs & Data Sources *</label>
                    <p className="text-xs text-white/50 mb-3">Which systems does the agent need to access or "read" from? (Select all that apply)</p>
                    <div className="space-y-2">
                      {[
                        { value: 'public-web', label: 'Public Web (Website URLs, Google Search)' },
                        { value: 'documents', label: 'Documents (PDFs, Word Docs, Excel, Google Drive, SharePoint)' },
                        { value: 'communication', label: 'Communication Tools (Email, Slack, Teams logs)' },
                        { value: 'business-software', label: 'Business Software (Salesforce, HubSpot, Quickbooks, Shopify)' },
                        { value: 'databases-apis', label: 'Databases / APIs (SQL, REST, Webhooks)' },
                        { value: 'manual-upload', label: 'No external connection (We will upload data manually)' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.dataSources.includes(option.value)}
                            onChange={() => toggleCheckbox('dataSources', option.value)}
                            className="w-4 h-4 rounded border-white/20 bg-white/5"
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-3">2. Data Readiness *</label>
                    <p className="text-xs text-white/50 mb-3">What state is that information in right now?</p>
                    <div className="space-y-2">
                      {[
                        { value: 'ready', label: 'Ready to go: It\'s organized, documented, and easy to find.' },
                        { value: 'needs-polish', label: 'Needs Polish: We have it, but it needs sorting or cleaning.' },
                        { value: 'unstructured', label: 'Unstructured: It\'s scattered across emails, chat logs, or just "in our heads."' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="dataReadiness"
                            value={option.value}
                            checked={formData.dataReadiness === option.value}
                            onChange={(e) => updateFormData('dataReadiness', e.target.value)}
                            className="w-4 h-4"
                            required
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-3">3. Operational Logic *</label>
                    <p className="text-xs text-white/50 mb-3">How complex is the decision-making required?</p>
                    <div className="space-y-2">
                      {[
                        { value: 'retriever', label: 'Retriever: Find information and summarize it. (e.g., "Search the policy PDF")' },
                        { value: 'rule-follower', label: 'Rule-Follower: If X happens, do Y. (e.g., "If lead score > 50, send email template A")' },
                        { value: 'reasoning', label: 'Reasoning Agent: Analyze, plan, and solve unique problems. (e.g., "Research this company and write a personalized intro")' },
                        { value: 'not-sure', label: 'Not sure yet' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="operationalLogic"
                            value={option.value}
                            checked={formData.operationalLogic === option.value}
                            onChange={(e) => updateFormData('operationalLogic', e.target.value)}
                            className="w-4 h-4"
                            required
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-3">4. Interaction Channels (Output) *</label>
                    <p className="text-xs text-white/50 mb-3">How will users (or customers) interact with the agent?</p>
                    <div className="space-y-2">
                      {[
                        { value: 'chat-text', label: 'Chat / Text: (Web widget, WhatsApp, SMS, Slack)' },
                        { value: 'voice-audio', label: 'Voice / Audio: (Phone calls, Voice memos)' },
                        { value: 'email', label: 'Email: (Auto-drafting or sending emails)' },
                        { value: 'background', label: 'Background Process: (No direct interaction; it just updates a spreadsheet/database)' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="checkbox"
                            checked={formData.interactionChannels.includes(option.value)}
                            onChange={() => toggleCheckbox('interactionChannels', option.value)}
                            className="w-4 h-4 rounded border-white/20 bg-white/5"
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-3">5. Autonomy Level *</label>
                    <p className="text-xs text-white/50 mb-3">What is the agent allowed to do?</p>
                    <div className="space-y-2">
                      {[
                        { value: 'advisory', label: 'Advisory: Agent answers questions only. (Human must take action)' },
                        { value: 'copilot', label: 'Co-Pilot: Agent drafts emails/files. (Human must click "Approve" to send)' },
                        { value: 'autonomous', label: 'Autonomous: Agent executes actions instantly. (No human review required)' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="autonomyLevel"
                            value={option.value}
                            checked={formData.autonomyLevel === option.value}
                            onChange={(e) => updateFormData('autonomyLevel', e.target.value)}
                            className="w-4 h-4"
                            required
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-3">6. Frequency / Volume *</label>
                    <p className="text-xs text-white/50 mb-3">Roughly how often will this task happen?</p>
                    <div className="space-y-2">
                      {[
                        { value: 'low', label: 'Low Volume: Occasional use (Less than 50 times/week)' },
                        { value: 'high', label: 'High Volume: Constant use (500+ times/week)' },
                        { value: 'unsure', label: 'Unsure' },
                      ].map((option) => (
                        <label key={option.value} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="frequency"
                            value={option.value}
                            checked={formData.frequency === option.value}
                            onChange={(e) => updateFormData('frequency', e.target.value)}
                            className="w-4 h-4"
                            required
                          />
                          <span className="text-sm text-white/80">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/80 mb-2">7. Technical Preferences (Optional)</label>
                    <p className="text-xs text-white/50 mb-2">Do you have specific technical constraints? (e.g., "Must be on-premise," "Python only," "SOC-2 compliance," "Specific LLM preference")</p>
                    <textarea
                      value={formData.technicalPreferences}
                      onChange={(e) => updateFormData('technicalPreferences', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Timeline & Submission */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-white/80 mb-2">Desired Pilot Start Date *</label>
                    <select
                      value={formData.pilotStartDate}
                      onChange={(e) => updateFormData('pilotStartDate', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="">Select timeframe</option>
                      <option value="0-3-months">Within 0–3 months</option>
                      <option value="3-6-months">3–6 months</option>
                      <option value="exploring">Just exploring / No timeline</option>
                    </select>
                  </div>

                  <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreement}
                        onChange={(e) => updateFormData('agreement', e.target.checked)}
                        className="w-5 h-5 mt-0.5 rounded border-white/20 bg-white/5"
                        required
                      />
                      <span className="text-sm text-amber-100/90">
                        I understand A2A Orchestra will review this scope and schedule a consultation to discuss feasibility and pricing.
                      </span>
                    </label>
                  </div>

                  <div className="p-6 bg-amber-500/10 rounded-xl border border-amber-500/20">
                    <h3 className="text-lg mb-4">Summary</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-white/60">Organization:</span> <span className="text-white">{formData.organizationName || 'Not provided'}</span></p>
                      <p><span className="text-white/60">Contact:</span> <span className="text-white">{formData.primaryContactEmail || 'Not provided'}</span></p>
                      <p><span className="text-white/60">Goal Category:</span> <span className="text-white">{formData.goalCategory || 'Not selected'}</span></p>
                      <p><span className="text-white/60">Autonomy Level:</span> <span className="text-white">{formData.autonomyLevel || 'Not selected'}</span></p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-8 border-t border-amber-500/20">
                <button
                  type="button"
                  onClick={prevStep}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${currentStep === 1
                    ? 'opacity-0 pointer-events-none'
                    : 'bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/20 hover:border-amber-500/40 text-amber-100'
                    }`}
                >
                  <ArrowLeft size={18} />
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 shadow-lg shadow-amber-600/20 text-amber-950 font-semibold"
                  >
                    Next
                    <span className="text-amber-950/70 font-normal">{currentStep}/{totalSteps}</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.agreement}
                    className="group flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 rounded-lg transition-all duration-300 shadow-lg shadow-amber-600/20 disabled:opacity-50 disabled:cursor-not-allowed text-amber-950 font-semibold"
                  >
                    Submit Application
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </form>
    </div>
  );
}
