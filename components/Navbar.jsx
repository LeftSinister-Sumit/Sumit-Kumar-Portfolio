import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Labs', href: '#labs' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ resumeLink }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map(i => i.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#080c0c]/95 backdrop-blur-md border-b border-[rgba(45,212,191,0.12)]'
        : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative">
            <Shield size={18} className="text-[#2dd4bf]" />
            <div className="absolute inset-0 blur-sm bg-[#2dd4bf] opacity-30 group-hover:opacity-60 transition-opacity" />
          </div>
          <span className="font-mono text-sm text-[#e2e8e8] tracking-wider group-hover:text-[#2dd4bf] transition-colors">
            LeftSinister<span className="text-[#2dd4bf]"></span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link ${active === href.slice(1) ? 'active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[rgba(45,212,191,0.3)] text-[#2dd4bf] hover:bg-[rgba(45,212,191,0.08)] transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#94a3a3] hover:text-[#2dd4bf] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1414]/98 backdrop-blur-md border-b border-[rgba(45,212,191,0.12)]">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="font-mono text-sm text-[#94a3a3] hover:text-[#2dd4bf] transition-colors uppercase tracking-widest"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={resumeLink}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border border-[rgba(45,212,191,0.3)] text-[#2dd4bf] inline-block hover:bg-[rgba(45,212,191,0.08)] transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
