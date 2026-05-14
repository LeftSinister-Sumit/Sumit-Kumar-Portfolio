import { MapPin, Mail, Github, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function About({ personal, timeline }) {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">{"// About"}</p>
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

            {/* Core Principles */}
            <div className="mt-10">
              <p className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mb-4">
                {"// Methodology & Approach"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Continuous Enumeration",
                  "Assume Breach Mentality",
                  "Methodical Documentation",
                  "Responsible Disclosure",
                ].map((principle) => (
                  <div key={principle} className="flex items-center gap-3 bg-[rgba(45,212,191,0.02)] border border-[rgba(45,212,191,0.08)] p-3">
                    <div className="w-1.5 h-1.5 bg-[#2dd4bf] flex-shrink-0" />
                    <span className="font-mono text-xs text-[#94a3a3]">{principle}</span>
                  </div>
                ))}
              </div>
            </div>



          </div>

          {/* Right: timeline */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            <p className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mb-6">
              {"// Journey"}
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
