import { CheckCircle, Clock, ExternalLink } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Certifications({ certifications }) {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">{"// 03 — Certifications"}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-16">
            Professional Credentials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`reveal card p-6 relative overflow-hidden group ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Accent stripe */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to bottom, ${cert.color}, transparent)` }}
              />

              <div className="pl-4">
                {/* Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {cert.status === 'Active' ? (
                      <CheckCircle size={13} className="text-[#2dd4bf]" />
                    ) : (
                      <Clock size={13} className="text-[#5a7070]" />
                    )}
                    <span
                      className={`font-mono text-xs uppercase tracking-widest ${cert.status === 'Active' ? 'text-[#2dd4bf]' : 'text-[#5a7070]'
                        }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#5a7070]">{cert.date}</span>
                </div>

                {/* Cert name */}
                <h3 className="font-display font-bold text-xl text-[#e2e8e8] mb-1 group-hover:text-[#2dd4bf] transition-colors">
                  {cert.name}
                </h3>
                <p className="font-mono text-xs text-[#5a7070] mb-3">{cert.code}</p>
                <p className="font-mono text-xs text-[#5a7070] mb-4">
                  Issued by: <span className="text-[#94a3a3]">{cert.issuer}</span>
                </p>

                <p className="text-sm text-[#94a3a3] leading-relaxed mb-5">{cert.description}</p>

                {/* Credential ID */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(45,212,191,0.08)]">
                  <div>
                    <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest">Credential</p>
                    <p className="font-mono text-xs text-[#94a3a3] mt-0.5">{cert.credential}</p>
                  </div>
                  {cert.status === 'Active' && (
                    <button className="flex items-center gap-1.5 font-mono text-xs text-[#2dd4bf] hover:text-[#5eead8] transition-colors">
                      Verify <ExternalLink size={10} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning roadmap */}
        <div className={`reveal mt-12 p-6 border border-[rgba(45,212,191,0.1)] bg-[rgba(45,212,191,0.02)] ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '400ms' }}>
          <p className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mb-4">
            {"// Certification Roadmap"}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {[
              { name: 'CC', done: true },
              { name: 'IBM', done: true },
              { name: 'ejpt', done: false, active: true },
              { name: 'OSCP', done: false, active: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span
                  className={`font-mono text-xs px-3 py-1.5 border ${item.done
                      ? 'border-[rgba(45,212,191,0.3)] text-[#2dd4bf] bg-[rgba(45,212,191,0.06)]'
                      : item.active
                        ? 'border-[rgba(45,212,191,0.2)] text-[#5a7070] bg-transparent animate-pulse'
                        : 'border-[rgba(255,255,255,0.05)] text-[#2a3a3a]'
                    }`}
                >
                  {item.done ? '✓ ' : item.active ? '→ ' : '○ '}{item.name}
                </span>
                {i < 5 && <span className="text-[#2a3a3a] font-mono text-xs">—</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
