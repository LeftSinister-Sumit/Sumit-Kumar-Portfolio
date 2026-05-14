import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Contact({ personal }) {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className={`reveal text-center ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">{"// Contact"}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-16 max-w-xl mx-auto">
            Available for full-time roles, contract work, and consulting.
          </p>
        </div>

        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
          <div className="grid sm:grid-cols-2 gap-4">
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
                  <p className="font-mono text-xs text-[#94a3a3] group-hover:text-[#2dd4bf] transition-colors break-all mt-0.5">
                    {value}
                  </p>
                </div>
                <ExternalLink size={11} className="text-[#2a3a3a] group-hover:text-[#5a7070] transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
