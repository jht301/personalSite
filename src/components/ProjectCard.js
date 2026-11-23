import clsx from 'clsx';
import { PixelLink } from './SectionFrame';

const STATUS_DOT = {
  Live: 'bg-emerald-400',
  'In production': 'bg-emerald-400',
  'In testing': 'bg-amber-400',
  'In development': 'bg-amber-400',
  Research: 'bg-sky-400',
};

// `image.shape` is 'wide' (a banner across the top of the card) or
// 'tall' (a phone-shaped capture that sits beside the text on desktop).
export default function ProjectCard({ project }) {
  const { title, tagline, status, description, highlights, stack, url, linkLabel, image } = project;
  const wide = image?.shape === 'wide';
  const tall = image?.shape === 'tall';

  return (
    <article className="pixel-box bg-screen-panel mx-[3px] overflow-hidden">
      {wide && (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className="block w-full aspect-[1440/760] object-cover object-top border-b-[3px] border-screen-line"
        />
      )}

      <div className={clsx('p-4 desk:p-6', tall && 'flex flex-col min-[1100px]:flex-row min-[1100px]:gap-8')}>
        {tall && (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="pixel-box order-first min-[1100px]:order-last self-center min-[1100px]:self-start shrink-0 w-[190px] min-[1100px]:w-[clamp(200px,19vw,250px)] mt-[3px] mb-5 min-[1100px]:mb-0 min-[1100px]:mr-[3px]"
          />
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <h3 className="font-pixel text-xs desk:text-base text-white leading-relaxed">{title}</h3>
            {status && (
              <span className="flex items-center gap-2 font-pixel text-[7px] desk:text-[8px] uppercase tracking-wider text-zinc-300 bg-black/40 px-2 py-1.5">
                <span className={`w-1.5 h-1.5 ${STATUS_DOT[status] || 'bg-zinc-400'}`} />
                {status}
              </span>
            )}
          </div>

          <p className="font-semibold text-(--accent) mt-2">{tagline}</p>
          <p className="text-sm desk:text-base text-zinc-300 mt-3 max-w-3xl">{description}</p>

          <ul className={clsx('mt-4 grid gap-x-8 gap-y-1.5 text-sm text-zinc-300', !tall && 'min-[1000px]:grid-cols-2')}>
            {highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="text-(--accent) font-pixel text-[7px] leading-5 shrink-0">&gt;</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-1.5">
            {stack.map((s) => (
              <span key={s} className="text-[11px] font-medium uppercase tracking-wide text-zinc-400 border border-screen-line bg-black/25 px-2 py-1">
                {s}
              </span>
            ))}
          </div>

          {url && (
            <div className="mt-5">
              <PixelLink href={url}>{linkLabel || 'Visit'}</PixelLink>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
