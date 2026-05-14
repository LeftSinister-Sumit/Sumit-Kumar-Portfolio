import { useReveal } from '../hooks/useReveal';
import { Target, Terminal, Shield, Code } from 'lucide-react';

const iconMap = { Target, Terminal, Shield, Code };

function SkillBar({ name, level, index }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-mono text-sm text-[#94a3a3] group-hover:text-[#e2e8e8] transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs text-[#5a7070]">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{
            width: visible ? `${level}%` : '0%',
            transition: `width 1s ease ${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills({ skills }) {
  const { ref, visible } = useReveal();

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24 px-6 bg-[#0d1414]/40">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`reveal ${visible ? 'visible' : ''}`}>
          <p className="section-label mb-3">{"// Skills"}</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#e2e8e8] mb-4">
            Technical Arsenal
          </h2>
          <p className="text-[#5a7070] font-mono text-sm mb-16">

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category, ci) => {
            const Icon = iconMap[category.icon] || Shield;
            return (
              <div
                key={ci}
                className={`reveal card p-6 ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${ci * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 flex items-center justify-center border border-[rgba(45,212,191,0.2)] bg-[rgba(45,212,191,0.05)]">
                    <Icon size={14} className="text-[#2dd4bf]" />
                  </div>
                  <h3 className="font-display font-semibold text-[#e2e8e8] text-sm uppercase tracking-wider">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((skill, si) => (
                    <SkillBar
                      key={si}
                      name={skill.name}
                      level={skill.level}
                      index={si}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool badges */}
        <div className={`reveal mt-12 ${visible ? 'visible' : ''}`} style={{ transitionDelay: '400ms' }}>
          <p className="font-mono text-xs text-[#5a7070] uppercase tracking-widest mb-4">
            {"// Additional tools & technologies"}
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Kali Linux', 'Parrot OS', 'Wireshark', 'Nikto', 'Hydra',
              'John the Ripper', 'hashcat', 'SIEM(Wazuh,Splunk)', 'Digital Forensics Tools',
              'Osint', 'Netcat', 'SQLmap', 'OWASP ZAP', 'Shodan',
              'Git', 'Docker', 'VirtualBox',
            ].map(tool => (
              <span
                key={tool}
                className="font-mono text-xs px-3 py-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] text-[#5a7070] hover:text-[#94a3a3] hover:border-[rgba(45,212,191,0.15)] transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
