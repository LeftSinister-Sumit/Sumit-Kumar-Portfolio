import { useEffect, useState, useRef } from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const TYPING_STRINGS = [
  'Web Application Pentester',
  'CyberSecurity Analyst',
  'Vulnerability Assessor',
  'CTF Player & Learner',
  'Bug Bounty Hunter',
];

function TypingEffect() {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setStringIndex(i => (i + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <span className="text-[#2dd4bf]">
      {text}
      <span className="animate-[blink_1s_step-end_infinite] text-[#2dd4bf]">_</span>
    </span>
  );
}

export default function Hero({ personal }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(45,212,191,0.04) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Scan line */}
      <div className="scan-line opacity-20" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-24 pb-32">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse-slow" />
            {personal.status}
          </div>
        </div>

        {/* Name */}
        <div
          className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '200ms' }}
        >
          <p className="font-mono text-[#5a7070] text-sm tracking-[0.3em] uppercase mb-3">
            &gt; whoami
          </p>
          <h1 className="font-display font-800 leading-none mb-2">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-[#e2e8e8] tracking-tight">
              {personal.name.split(' ')[0]}
            </span>
            <span
              className="block text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ color: '#2dd4bf', textShadow: '0 0 40px rgba(45,212,191,0.3)' }}
            >
              {personal.name.split(' ')[1]}
            </span>
          </h1>
        </div>

        {/* Typing subtitle */}
        <div
          className={`mt-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '350ms' }}
        >
          <p className="font-mono text-lg md:text-xl text-[#94a3a3]">
            <span className="text-[#5a7070]">$ role=</span>
            <TypingEffect />
          </p>
        </div>

        {/* Bio snippet */}
        <div
          className={`mt-8 max-w-2xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '450ms' }}
        >
          <p className="text-[#94a3a3] text-base md:text-lg leading-relaxed">
            {personal.heroBio}
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`mt-10 flex flex-wrap gap-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '550ms' }}
        >
          {[
            { label: 'Experience', value: personal.experience },
            { label: 'Certifications', value: personal.certs },
            { label: 'Labs Completed', value: `${personal.labs}+` },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-display font-bold text-3xl md:text-4xl"
                style={{ color: '#2dd4bf' }}
              >
                {value}
              </span>
              <span className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          style={{ transitionDelay: '650ms' }}
        >
          <a
            href="#cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#2dd4bf] text-[#080c0c] font-display font-semibold text-sm hover:bg-[#14b8a6] transition-colors duration-200"
          >
            View Case Studies
            <ArrowDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[rgba(45,212,191,0.3)] text-[#94a3a3] font-mono text-xs uppercase tracking-widest hover:text-[#2dd4bf] hover:border-[rgba(45,212,191,0.6)] transition-all duration-200"
          >
            Get in Touch
          </a>

          <div className="flex items-center gap-3 ml-2">
            {[
              { href: personal.github, icon: Github, label: 'GitHub' },
              { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border border-[rgba(45,212,191,0.15)] text-[#5a7070] hover:text-[#2dd4bf] hover:border-[rgba(45,212,191,0.4)] transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="font-mono text-[10px] text-[#5a7070] uppercase tracking-[0.2em]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(45,212,191,0.4)] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
