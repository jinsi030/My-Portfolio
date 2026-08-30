import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, Send, Loader2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { RESUME_DATA } from '../data/interests';

export const ContactSection: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Simulate backend network latency / Firestore trigger
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
      window.open(`mailto:${RESUME_DATA.email}?subject=${subject}&body=${body}`, '_blank');
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 border-t border-[#DCCDD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Big Editorial Headline & Contact Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9C8CF]/50 text-[#351C35] text-xs font-technical">
                <span className="w-2 h-2 rounded-full bg-[#B96F7D]" />
                INITIATE CONVERSATION
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display-serif italic text-[#351C35] leading-tight">
                Have an idea that deserves better UX than a screenshot in Notion?
              </h2>

              <p className="text-base sm:text-lg text-[#756A70] font-editorial max-w-xl leading-relaxed">
                Currently open for product design roles, AI interaction design collaborations, and design technologist opportunities in Ahmedabad or remote.
              </p>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {/* Email Direct Copy Card */}
              <div className="p-5 rounded-2xl border border-[#DCCDD1] bg-white space-y-2 shadow-2xs">
                <span className="text-[11px] font-technical uppercase text-[#756A70]">Direct Email</span>
                <div className="text-sm font-bold text-[#351C35] font-technical">{RESUME_DATA.email}</div>
                <div className="flex gap-2 pt-1">
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FBF7F5] border border-[#DCCDD1] text-xs font-technical text-[#21151F] hover:bg-[#E9C8CF]/30 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? <><Check className="w-3 h-3 text-emerald-600" /> Copied!</> : <><Copy className="w-3 h-3 text-[#756A70]" /> Copy Email</>}
                  </button>
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#351C35] text-white text-xs font-technical hover:bg-[#21151F]"
                  >
                    <Mail className="w-3 h-3" /> Compose
                  </a>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="p-5 rounded-2xl border border-[#DCCDD1] bg-white space-y-2 shadow-2xs">
                <span className="text-[11px] font-technical uppercase text-[#756A70]">Online Profiles</span>
                <div className="flex flex-col gap-1.5 text-xs font-technical">
                  <a
                    href={RESUME_DATA.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-[#351C35] hover:text-[#B96F7D]"
                  >
                    <span className="flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-[#756A70]" />
                  </a>
                  <a
                    href={RESUME_DATA.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between text-[#351C35] hover:text-[#B96F7D]"
                  >
                    <span className="flex items-center gap-1.5"><Github className="w-3.5 h-3.5" /> GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-[#756A70]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Simple Contact Form */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#DCCDD1] p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold font-display-serif text-[#351C35] mb-1">
              Send a Direct Note
            </h3>
            <p className="text-xs text-[#756A70] font-editorial mb-6">
              No bloated questionnaires. Just your name, email, and what you’re building.
            </p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-[#E9C8CF]/30 border border-[#B96F7D] text-center space-y-3"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#351C35] text-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#E9C8CF]" />
                  </div>
                  <h4 className="text-base font-bold font-display-serif text-[#351C35]">
                    Message Dispatched!
                  </h4>
                  <p className="text-xs text-[#756A70] font-editorial">
                    Thank you, {formData.name}. Your email client was initiated, or you can email directly at {RESUME_DATA.email}.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs font-technical text-[#351C35] underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-technical uppercase text-[#756A70] block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCCDD1] bg-[#FBF7F5] text-xs text-[#21151F] focus:outline-none focus:border-[#351C35] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-technical uppercase text-[#756A70] block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCCDD1] bg-[#FBF7F5] text-xs text-[#21151F] focus:outline-none focus:border-[#351C35] focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-technical uppercase text-[#756A70] block">
                      What are you working on?
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the product, timeline, or design challenge..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCCDD1] bg-[#FBF7F5] text-xs text-[#21151F] focus:outline-none focus:border-[#351C35] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <MagneticButton
                      id="contact-submit-btn"
                      strength={0.3}
                      className="w-full py-3 text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                      variant="primary"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#E9C8CF]" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <span>SAY HI →</span>
                      )}
                    </MagneticButton>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

