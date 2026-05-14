import { Shield, Github, Linkedin } from 'lucide-react';

export default function Footer({ personal }) {
  return (
    <footer className="border-t border-[rgba(45,212,191,0.08)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 flex items-center gap-2">
          <Shield size={14} className="text-[#2dd4bf]" />
          <span className="font-mono text-xs text-[#5a7070]">
            {personal.name} alias LeftSinister
          </span>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="font-mono text-[10px] text-[#2a3a3a] uppercase tracking-widest">
            © {new Date().getFullYear()}
          </span>
          <span className="text-[#2a3a3a]">·</span>
          <span className="font-mono text-[10px] text-[#2a3a3a]">
            Hack responsibly. Document everything.
          </span>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer"
            className="text-[#2a3a3a] hover:text-[#2dd4bf] transition-colors">
            <Github size={14} />
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            className="text-[#2a3a3a] hover:text-[#2dd4bf] transition-colors">
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
