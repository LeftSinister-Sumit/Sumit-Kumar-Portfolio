import { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Wrench, Search, AlertTriangle, CheckSquare, TrendingUp, Tag } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const severityColor = {
  Critical: { bg: 'rgba(239, 68, 68, 0.1)', border: 'rgba(239, 68, 68, 0.3)', text: '#ef4444' },
  High: { bg: 'rgba(249, 115, 22, 0.1)', border: 'rgba(249, 115, 22, 0.3)', text: '#f97316' },
  Medium: { bg: 'rgba(234, 179, 8, 0.1)', border: 'rgba(234, 179, 8, 0.3)', text: '#eab308' },
  Low: { bg: 'rgba(99, 102, 241, 0.1)', border: 'rgba(99, 102, 241, 0.3)', text: '#818cf8' },
};

function CaseStudyCard({ study, index }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, visible } = useReveal();

  return (
    <article
      ref={ref}
      className={`reveal card overflow-hidden ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Card header — always visible */}
      <div
        className="p-6 cursor-pointer group"
        onClick={() => setExpanded(!expanded)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Type + platform */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="badge text-[10px]">{study.type}</span>
              <span className="font-mono text-[10px] text-[#5a7070]">{study.platform}</span>
              <span
                className="font-mono text-[10px] px-2 py-0.5 border"
                style={{
                  background: study.difficulty === 'Hard'
                    ? 'rgba(239,68,68,0.08)'
                    : study.difficulty === 'Medium'
                    ? 'rgba(234,179,8,0.08)'
                    : 'rgba(45,212,191,0.08)',
                  borderColor: study.difficulty === 'Hard'
                    ? 'rgba(239,68,68,0.25)'
                    : study.difficulty === 'Medium'
                    ? 'rgba(234,179,8,0.25)'
                    : 'rgba(45,212,191,0.25)',
                  color: study.difficulty === 'Hard'
                    ? '#ef4444'
                    : study.difficulty === 'Medium'
                    ? '#eab308'
                    : '#2dd4bf',
                }}
              >
                {study.difficulty}
              </span>
            </div>

            <h3 className="font-display font-semibold text-lg text-[#e2e8e8] group-hover:text-[#2dd4bf] transition-colors mb-2 leading-snug">
              {study.title}
            </h3>
            <p className="text-sm text-[#94a3a3] leading-relaxed">{study.summary}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {study.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 font-mono text-[10px] text-[#5a7070]">
                  <Tag size={8} className="text-[#2dd4bf]" /> {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-[rgba(45,212,191,0.2)] text-[#5a7070] group-hover:text-[#2dd4bf] group-hover:border-[rgba(45,212,191,0.4)] transition-all">
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-[rgba(45,212,191,0.1)] divide-y divide-[rgba(45,212,191,0.06)]">
          {/* Objective */}
          <div className="p-6">
            <SectionHeader icon={Target} label="Objective" />
            <p className="text-sm text-[#94a3a3] leading-relaxed mt-3">{study.objective}</p>

            <div className="mt-4">
              <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-2">Scope</p>
              <ul className="space-y-1">
                {study.scope.map((s, i) => (
                  <li key={i} className="font-mono text-xs text-[#94a3a3] flex items-center gap-2">
                    <span className="text-[#2dd4bf]">›</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Methodology */}
          <div className="p-6">
            <SectionHeader icon={Search} label="Methodology" />
            <ol className="mt-4 space-y-3">
              {study.methodology.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-mono text-[10px] text-[#2dd4bf] mt-0.5 flex-shrink-0 w-5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm text-[#94a3a3] leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Tools */}
          <div className="p-6">
            <SectionHeader icon={Wrench} label="Tools Used" />
            <div className="flex flex-wrap gap-2 mt-3">
              {study.tools.map(tool => (
                <span key={tool} className="badge">{tool}</span>
              ))}
            </div>
          </div>

          {/* Findings */}
          <div className="p-6">
            <SectionHeader icon={AlertTriangle} label="Findings" />
            <div className="mt-4 space-y-3">
              {study.findings.map((f, i) => {
                const sev = severityColor[f.severity] || severityColor.Low;
                return (
                  <div
                    key={i}
                    className="p-4 border"
                    style={{
                      background: sev.bg,
                      borderColor: sev.border,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                        style={{ color: sev.text, background: sev.bg, border: `1px solid ${sev.border}` }}
                      >
                        {f.severity}
                      </span>
                      <span className="font-mono text-xs text-[#e2e8e8]">{f.title}</span>
                    </div>
                    <p className="text-xs text-[#94a3a3] leading-relaxed">{f.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Remediation */}
          <div className="p-6">
            <SectionHeader icon={CheckSquare} label="Remediation Recommendations" />
            <ul className="mt-4 space-y-2">
              {study.remediation.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#94a3a3]">
                  <span className="text-[#2dd4bf] mt-0.5 flex-shrink-0">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="p-6 bg-[rgba(45,212,191,0.03)]">
            <SectionHeader icon={TrendingUp} label="Outcome" />
            <p className="text-sm text-[#94a3a3] leading-relaxed mt-3">{study.outcome}</p>
          </div>
        </div>
      )}
    </article>
  );
}

function SectionHeader({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={13} className="text-[#2dd4bf]" />
      <span className="font-mono text-xs text-[#2dd4bf] uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function CaseStudies({ caseStudies }) {
  const { ref, visible } = useReveal();

  return (
    <section id="cases" className="py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`reveal ${visible ? 'visible' : ''}`} ref={ref}>
          <p className="section-label mb-3">{"// Case Studies"}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Documented Work
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-3 max-w-2xl">
            Each engagement is documented with objective, methodology, findings, and remediation —
            the way real pentest reports are written.
          </p>
          <p className="font-mono text-xs text-[#2a3a3a] mb-16">
            Click any case to expand the full methodology ↓
          </p>
        </div>

        <div className="space-y-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
