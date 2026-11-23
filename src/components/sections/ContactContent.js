import { Mail, Linkedin, Github } from 'lucide-react';
import SectionFrame from '../SectionFrame';
import { CONTACT_CARTRIDGE } from '@/data/cartridges';

const LINKS = [
  { label: 'Email Me', href: 'mailto:jhterzi@gmail.com', Icon: Mail, external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jht301/', Icon: Linkedin, external: true },
  { label: 'GitHub', href: 'https://github.com/jht301', Icon: Github, external: true },
];

export default function ContactContent() {
  return (
    <SectionFrame title="Contact" kicker="SAY HELLO" icon={CONTACT_CARTRIDGE.icon} accent={CONTACT_CARTRIDGE.accent}>
      <div className="max-w-md mx-auto w-full space-y-6 pt-2 desk:pt-8">
        <p className="text-center italic text-zinc-300 leading-relaxed">
          &ldquo;Available for selected consulting, product, and creative projects.&rdquo;
        </p>

        <div className="space-y-5">
          {LINKS.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group pixel-box mx-[3px] flex items-center gap-4 p-4 bg-screen-panel hover:[--box:var(--accent)] transition-shadow"
            >
              <span className="bg-(--accent) text-screen p-2">
                <Icon className="w-5 h-5" />
              </span>
              <span className="font-pixel text-xs text-white">{label}</span>
              <span className="ml-auto font-pixel text-[10px] text-(--accent) group-hover:translate-x-1 transition-transform" aria-hidden="true">&gt;</span>
            </a>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
