export default function ProjectsContent() {
  const projects = [
    {
      title: 'Bola',
      url: 'https://www.shopbola.com/',
      blurb: 'Protection. Power. Strength. An e-commerce brand offering luxury athletic apparel.',
      image: '/websites/bola.png',
    },
    {
      title: 'Jakkal Games',
      url: 'https://www.jakkal.games/',
      blurb: 'Where Creation is Play. Jakkal lets kids describe an idea, play it instantly, and share it with friends to remix and compete.',
      image: '/websites/jakkal.png',
    },
    {
      title: 'Siena',
      url: 'https://www.sienany.com/',
      blurb: 'An elegant restaurant and bar in New York featuring refined Kosher, Italian-inspired cuisine and a curated dining experience.',
      image: '/websites/siena.png',
    },
    {
      title: 'Darmoni Foundation',
      url: 'https://www.darmonifamilyfoundation.org/',
      blurb: 'Honoring Edan Darmoni. A foundation created in loving memory to continue Edan\'s legacy of kindness and devotion.',
      image: '/websites/darmoni.png',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-6 pb-6 overflow-y-auto text-console-screen-dark space-y-4">
      <h2 className="font-pixel text-lg uppercase border-b-2 border-console-screen-mid pb-2 mb-2 sticky top-0 bg-console-dark-gray z-10 w-[calc(100%+48px)] -mx-6 px-6 pt-6 text-console-mid-gray">
        Websites
      </h2>

      <div className="font-sans text-base space-y-6 pb-6">
        <p className="font-bold text-console-mid-gray">
          A showcase of custom digital experiences.
        </p>

        {projects.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="block border border-zinc-600 p-4 bg-zinc-800/50 shadow-md rounded hover:bg-zinc-700/50 transition-colors text-center">
            <span className="font-pixel text-sm font-bold text-white">{p.title}</span>
            <p className="text-sm text-zinc-200 mt-2 mb-3">{p.blurb}</p>
            <img src={p.image} alt={p.title} className="w-full rounded border border-zinc-600" />
          </a>
        ))}
      </div>
    </div>
  );
}
