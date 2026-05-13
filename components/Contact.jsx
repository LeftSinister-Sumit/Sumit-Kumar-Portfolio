import { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Send, Shield } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contact({ personal }) {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // In production, wire to Formspree, Netlify Forms, or similar
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">// 07 — Contact</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-16 max-w-xl">
            Available for full-time roles, contract work, and consulting. Response time typically &lt; 48h.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Links */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                  sub: 'Encrypted via ProtonMail',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'github.com/LeftSinister-Sumit',
                  href: personal.github,
                  sub: 'Code, write-ups, tools',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sumitkumar-cyber',
                  href: personal.linkedin,
                  sub: 'Professional profile',
                },
                {
                  icon: ExternalLink,
                  label: 'TryHackMe',
                  value: 'tryhackme.com/p/LeftSinister',
                  href: personal.tryhackme,
                  sub: 'Top 4% globally',
                },
              ].map(({ icon: Icon, label, value, href, sub }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card group hover:border-[rgba(45,212,191,0.4)] transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.04)] group-hover:bg-[rgba(45,212,191,0.08)] transition-colors flex-shrink-0">
                    <Icon size={14} className="text-[#2dd4bf]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest">{label}</p>
                    <p className="font-mono text-xs text-[#94a3a3] group-hover:text-[#2dd4bf] transition-colors truncate mt-0.5">
                      {value}
                    </p>
                    <p className="font-mono text-[10px] text-[#2a3a3a] mt-0.5">{sub}</p>
                  </div>
                  <ExternalLink size={11} className="text-[#2a3a3a] group-hover:text-[#5a7070] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* PGP note */}
            <div className="mt-6 p-4 border border-[rgba(45,212,191,0.08)] bg-[rgba(45,212,191,0.02)]">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={12} className="text-[#5a7070]" />
                <span className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest">
                  Secure Communication
                </span>
              </div>
              <p className="font-mono text-xs text-[#5a7070] leading-relaxed">
                PGP key available on request for sensitive discussions.
                Fingerprint: <span className="text-[#2a3a3a]">A1B2 C3D4 E5F6...</span>
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            {submitted ? (
              <div className="card p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <div className="w-12 h-12 border border-[rgba(45,212,191,0.3)] flex items-center justify-center mb-4">
                  <Send size={18} className="text-[#2dd4bf]" />
                </div>
                <h3 className="font-display font-semibold text-[#e2e8e8] mb-2">Message Sent</h3>
                <p className="font-mono text-xs text-[#5a7070]">I'll get back to you within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Role inquiry / consulting / other"
                  required
                />
                <div>
                  <label className="block font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or question..."
                    className="w-full bg-[#0d1414] border border-[rgba(45,212,191,0.15)] text-[#94a3a3] font-mono text-sm px-4 py-3 focus:outline-none focus:border-[rgba(45,212,191,0.4)] focus:text-[#e2e8e8] placeholder:text-[#2a3a3a] resize-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#2dd4bf] text-[#080c0c] font-mono text-xs font-semibold uppercase tracking-widest hover:bg-[#14b8a6] transition-colors duration-200"
                >
                  <Send size={12} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-[#0d1414] border border-[rgba(45,212,191,0.15)] text-[#94a3a3] font-mono text-sm px-4 py-3 focus:outline-none focus:border-[rgba(45,212,191,0.4)] focus:text-[#e2e8e8] placeholder:text-[#2a3a3a] transition-colors"
      />
    </div>
  );
}
