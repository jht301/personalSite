import SectionFrame from '../SectionFrame';
import { CARTRIDGES } from '@/data/cartridges';
import { WEBSITES } from '@/data/projects';

const cart = CARTRIDGES.find((c) => c.id === 'projects');

export default function ProjectsContent() {
  return (
    <SectionFrame title="Websites" kicker={`${WEBSITES.length} SITES LIVE`} icon={cart.icon} accent={cart.accent}>
      <p className="text-lg desk:text-xl font-bold text-(--accent) max-w-3xl">
        A showcase of custom digital experiences.
      </p>

      {WEBSITES.map((site) => (
        <a
          key={site.url}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group pixel-box mx-[3px] flex flex-col min-[1000px]:flex-row min-[1000px]:items-stretch bg-screen-panel hover:[--box:var(--accent)] transition-shadow overflow-hidden"
        >
          <div className="p-4 desk:p-5 min-[1000px]:w-[28%] min-[1000px]:shrink-0 flex flex-col justify-center">
            <span className="font-pixel text-xs desk:text-sm text-white leading-relaxed">{site.title}</span>
            <p className="text-sm text-zinc-300 mt-3">{site.blurb}</p>
            <span className="font-pixel text-[8px] uppercase text-(--accent) mt-4 group-hover:translate-x-1 transition-transform">
              Visit site &gt;
            </span>
          </div>
          <img
            src={site.image}
            alt={`${site.title} website`}
            loading="lazy"
            className="w-full min-[1000px]:w-[72%] object-cover object-top border-t-[3px] min-[1000px]:border-t-0 min-[1000px]:border-l-[3px] border-screen-line"
          />
        </a>
      ))}
    </SectionFrame>
  );
}
