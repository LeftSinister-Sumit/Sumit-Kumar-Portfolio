import { useReveal } from '../hooks/useReveal';
import { ExternalLink, TrendingUp, Award, Layers } from 'lucide-react';

export default function Labs({ labProgress }) {
  const { ref, visible } = useReveal();
  const thm = labProgress[0];
  const htb = labProgress[1];

  return (
    <section id="labs" className="py-28 px-6 bg-[#0d1414]/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">// 04 — Labs & Practice</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Hands-On Training
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-16">
            Active on CTF platforms, HTB machines, and TryHackMe learning paths
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TryHackMe Card */}
          <div
            className={`reveal card p-7 ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.05)] font-mono text-xs text-[#2dd4bf] font-bold">
                  THM
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[#e2e8e8]">TryHackMe</h3>
                  <p className="font-mono text-xs text-[#5a7070]">@{thm.handle}</p>
                </div>
              </div>
              <a
                href="https://tryhackme.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5a7070] hover:text-[#2dd4bf] transition-colors"
                aria-label="TryHackMe"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Rooms', value: thm.rooms },
                { label: 'Points', value: thm.points.toLocaleString() },
                { label: 'Day Streak', value: thm.streak },
              ].map(({ label, value }) => (
                <div key={label} className="text-center p-3 bg-[rgba(45,212,191,0.03)] border border-[rgba(45,212,191,0.08)]">
                  <div className="font-display font-bold text-xl text-[#2dd4bf]">{value}</div>
                  <div className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Rank */}
            <div className="flex items-center gap-2 mb-5">
              <Award size={13} className="text-[#2dd4bf]" />
              <span className="font-mono text-xs text-[#94a3a3]">
                Rank: <span className="text-[#2dd4bf]">{thm.rank}</span>
                <span className="text-[#5a7070] ml-2">· {thm.percentile}</span>
              </span>
            </div>

            {/* Learning paths */}
            <div>
              <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-3 flex items-center gap-2">
                <Layers size={10} /> Completed Paths
              </p>
              <div className="flex flex-wrap gap-2">
                {thm.paths.map(path => (
                  <span key={path} className="badge text-[10px]">✓ {path}</span>
                ))}
              </div>
            </div>
          </div>

          {/* HTB Card */}
          <div
            className={`reveal card p-7 ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.05)] font-mono text-xs text-[#2dd4bf] font-bold">
                  PS
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[#e2e8e8]">PortSwigger</h3>
                  <p className="font-mono text-xs text-[#5a7070]">@{htb.handle}</p>
                </div>
              </div>
              <a
                href="https://portswigger.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5a7070] hover:text-[#2dd4bf] transition-colors"
                aria-label="Hack The Box"
              >
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Machines', value: htb.machines },
                { label: 'Challenges', value: htb.challenges },
                { label: 'Points', value: htb.points.toLocaleString() },
              ].map(({ label, value }) => (
                <div key={label} className="text-center p-3 bg-[rgba(45,212,191,0.03)] border border-[rgba(45,212,191,0.08)]">
                  <div className="font-display font-bold text-xl text-[#2dd4bf]">{value}</div>
                  <div className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Rank & active lab */}
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp size={13} className="text-[#2dd4bf]" />
              <span className="font-mono text-xs text-[#94a3a3]">
                Rank: <span className="text-[#2dd4bf]">{htb.rank}</span>
              </span>
            </div>

            <div className="p-3 bg-[rgba(45,212,191,0.04)] border border-[rgba(45,212,191,0.1)] mb-5">
              <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-1">Active</p>
              <p className="font-mono text-xs text-[#94a3a3]">{htb.active}</p>
            </div>

            {/* Notable machines */}
            <div>
              <p className="font-mono text-[10px] text-[#5a7070] uppercase tracking-widest mb-3">
                Notable Machines Pwned
              </p>
              <div className="flex flex-wrap gap-2">
                {htb.notable.map(machine => (
                  <span
                    key={machine}
                    className="font-mono text-[10px] px-2 py-1 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-[#5a7070]"
                  >
                    {machine}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTF & Bug Bounty row */}
        <div
          className={`reveal mt-8 grid md:grid-cols-3 gap-4 ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '300ms' }}
        >
          {[
            {
              title: 'CTF Competitions',
              value: '0',
              detail: 'Not_Started_Yet',
            },
            {
              title: 'Bug Bounty',
              value: '0',
              detail: 'Not_Started_Yet',
            },
            {
              title: 'Write-ups Published',
              value: '5',
              detail: 'Documented solutions on GitHub and personal notes — methodology-focused.',
            },
          ].map(({ title, value, detail }) => (
            <div key={title} className="card p-5">
              <div className="font-display font-bold text-2xl text-[#2dd4bf] mb-1">{value}</div>
              <div className="font-mono text-xs text-[#94a3a3] uppercase tracking-widest mb-2">{title}</div>
              <p className="text-sm text-[#5a7070] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
