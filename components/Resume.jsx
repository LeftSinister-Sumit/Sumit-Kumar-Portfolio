import { Download, FileText, Eye } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Resume({ personal }) {
  const { ref, visible } = useReveal();

  const highlights = [
    {
      section: 'Professional Experience',
      items: [
        {
          role: 'Freelance Vulnerability Assesment and pentester',
          org: 'Independent Clients',
          period: '2025-Present',
          points: [

          ],
        },
        {
          role: 'Cyber Security Student',
          org: 'Self-Learning',
          period: '2024 – 2025',
          points: [
            'Learned About Ethical Hacking and Penetration Testing',
            'Learned About Windows and Linux Security',
            'Learned About Network Security and Cryptography',
          ],
        },
      ],
    },
    {
      section: 'Education',
      items: [
        {
          role: 'BCA (Bachelor of Computer Applications)',
          org: 'Indira Gandhi National Open University',
          period: '2023 – 2026',
          points: ['Relevant: Networking, Operating Systems, Web Fundamentals, DBMS, Programming'],
        },
      ],
    },
  ];

  return (
    <section id="resume" className="py-16 md:py-20 lg:py-24 px-6 bg-[#0d1414]/40">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">{"// Resume"}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Experience & Background
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-16">
            Full PDF available for download
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Download + snapshot */}
          <div className={`reveal md:col-span-1 ${visible ? 'visible' : ''}`} style={{ transitionDelay: '100ms' }}>
            <div className="card p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={14} className="text-[#2dd4bf]" />
                <span className="font-mono text-xs text-[#94a3a3] uppercase tracking-widest">Resume</span>
              </div>

              <p className="font-display font-semibold text-[#e2e8e8] mb-1">{personal.name}</p>
              <p className="font-mono text-xs text-[#5a7070] mb-6">
                {personal.title} · {personal.subtitle}
              </p>

              <div className="space-y-3">
                <a
                  href={personal.resume}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#2dd4bf] text-[#080c0c] font-mono text-xs font-semibold uppercase tracking-widest hover:bg-[#14b8a6] transition-colors"
                >
                  <Download size={12} />
                  Download PDF
                </a>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-[rgba(45,212,191,0.2)] text-[#94a3a3] font-mono text-xs uppercase tracking-widest hover:text-[#2dd4bf] hover:border-[rgba(45,212,191,0.4)] transition-all"
                >
                  <Eye size={12} />
                  Preview
                </a>
              </div>

              {/* Quick facts */}
              <div className="mt-8 pt-6 border-t border-[rgba(45,212,191,0.08)] space-y-3">
                {[
                  { k: 'Location', v: personal.location },
                  { k: 'Availability', v: 'Open to opportunities' },
                  { k: 'Work Auth', v: 'Authorized to work' },
                  { k: 'Clearance', v: 'None (applying)' },
                  { k: 'Remote', v: 'Strongly preferred' },
                ].map(({ k, v }) => (
                  <div key={k}>
                    <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest">{k}</p>
                    <p className="font-mono text-xs text-[#94a3a3] mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience */}
          <div className={`reveal md:col-span-2 space-y-10 ${visible ? 'visible' : ''}`} style={{ transitionDelay: '200ms' }}>
            {highlights.map((section, si) => (
              <div key={si}>
                <p className="font-mono text-xs text-[#2dd4bf] uppercase tracking-widest mb-5">
                  {section.section}
                </p>
                <div className="space-y-8">
                  {section.items.map((item, ii) => (
                    <div key={ii} className="timeline-item">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div>
                          <h3 className="font-display font-semibold text-[#e2e8e8]">{item.role}</h3>
                          <p className="font-mono text-xs text-[#5a7070]">{item.org}</p>
                        </div>
                        <span className="font-mono text-xs text-[#5a7070] mt-1 sm:mt-0">{item.period}</span>
                      </div>
                      <ul className="space-y-1.5 mt-3">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-[#94a3a3]">
                            <span className="text-[#2dd4bf] mt-0.5 flex-shrink-0">›</span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Notable soft skills */}
            <div className="p-5 border border-[rgba(45,212,191,0.1)] bg-[rgba(45,212,191,0.02)]">
              <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-3">
                {"// Communication & Reporting"}
              </p>
              <p className="text-sm text-[#94a3a3] leading-relaxed">
                Experienced writing pentest reports for both technical and executive audiences.
                Reports include CVSS-scored findings, reproducible PoC steps, remediation guidance,
                and retest verification. Available on request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
