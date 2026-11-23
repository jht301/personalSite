import PixelIcon from './PixelIcon';

// Shared chrome for every cartridge screen: sticky title bar + scrolling body.
// The `overflow-y-auto` class is what the D-pad looks for when scrolling.
export default function SectionFrame({ title, kicker, icon, accent, children, bodyClassName = '' }) {
  return (
    <div style={{ '--accent': accent }} className="w-full h-full overflow-y-auto">
      <header className="sticky top-0 z-10 bg-screen/95 backdrop-blur-sm flex items-center gap-3 desk:gap-4 px-5 desk:px-8 pt-5 pb-3 border-b-2 border-dashed border-screen-line">
        <div className="pixel-box shrink-0 bg-screen-panel p-1.5 desk:p-2 ml-[3px]" style={{ '--box': 'color-mix(in srgb, var(--accent) 55%, transparent)' }}>
          <PixelIcon name={icon} className="w-6 h-6 desk:w-7 desk:h-7 text-(--accent)" />
        </div>
        <div className="min-w-0">
          {kicker && (
            <p className="font-pixel text-[7px] desk:text-[8px] tracking-widest text-zinc-500 mb-1.5">{kicker}</p>
          )}
          <h2 className="font-pixel text-sm desk:text-xl uppercase text-(--accent) glow-text leading-snug">{title}</h2>
        </div>
      </header>

      <div className={`font-sans text-base text-zinc-200 px-5 desk:px-8 pt-6 pb-10 space-y-6 ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
}

export function SubHeading({ children }) {
  return (
    <h3 className="font-pixel text-[10px] desk:text-xs uppercase text-(--accent) mb-3 flex items-center gap-2">
      <span className="inline-block w-2 h-2 bg-(--accent)" />
      {children}
    </h3>
  );
}

export function PixelList({ items }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-zinc-200">
          <span className="text-(--accent) font-pixel text-[8px] leading-6 shrink-0">&gt;</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Panel({ children, className = '' }) {
  return <div className={`pixel-box bg-screen-panel mx-[3px] p-4 desk:p-5 ${className}`}>{children}</div>;
}

export function PixelLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ '--box': 'var(--accent)' }}
      className="pixel-box inline-block mx-[3px] font-pixel text-[9px] desk:text-[10px] uppercase text-screen bg-(--accent) px-4 py-2.5 hover:brightness-110 active:translate-y-px transition"
    >
      {children} <span aria-hidden="true">&gt;</span>
    </a>
  );
}
