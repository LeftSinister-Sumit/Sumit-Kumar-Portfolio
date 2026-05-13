import { MapPin, Mail, Github, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function About({ personal, timeline }) {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">// 01 — About</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-16">
            Background & Approach
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: bio */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="space-y-5 text-[#94a3a3] leading-relaxed">
              <p>{personal.bio}</p>
              <p>{personal.bio2}</p>
            </div>

            {/* Contact info */}
            <div className="mt-8 space-y-3">
              {[
                { icon: MapPin, label: personal.location },
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: Github, label: 'github.com/', href: personal.github },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon size={14} className="text-[#2dd4bf] flex-shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-[#94a3a3] hover:text-[#2dd4bf] transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-[#94a3a3]">{label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Platform badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              <a href={personal.tryhackme} target="_blank" rel="noopener noreferrer"
                className="badge hover:border-[rgba(45,212,191,0.5)] transition-colors">
                <ExternalLink size={10} /> TryHackMe: Top 5%
              </a>
              <span className="badge">HTB: Pro Hacker</span>
              <span className="badge">PNPT Certified</span>
            </div>
          </div>

          {/* Right: timeline */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <p className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mb-6">
              // Journey
            </p>
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item pb-4">
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-xs text-[#2dd4bf] tracking-widest">{item.year}</span>
                        <div className="h-px flex-1 bg-[rgba(45,212,191,0.1)]" />
                      </div>
                      <h3 className="font-display font-semibold text-[#e2e8e8] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#94a3a3] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
