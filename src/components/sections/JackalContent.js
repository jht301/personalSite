import SectionFrame, { SubHeading, PixelList, Panel } from '../SectionFrame';
import { CARTRIDGES } from '@/data/cartridges';

const cart = CARTRIDGES.find((c) => c.id === 'jackal');

const SHOTS = [
  { src: '/jakkal/landing.png', alt: 'Jakkal landing page' },
  { src: '/jakkal/assistant.png', alt: 'Jakkal AI assistant' },
  { src: '/jakkal/gameplay.png', alt: 'Jakkal gameplay' },
];

export default function JackalContent() {
  return (
    <SectionFrame title="Jackal Games" kicker="AI GAME CREATION" icon={cart.icon} accent={cart.accent}>
      <p className="text-lg desk:text-xl font-bold text-(--accent) max-w-3xl">
        Jackal is an exploration into AI-enabled game creation, where play itself is the act of creation.
      </p>

      <div className="grid gap-6 min-[1000px]:grid-cols-2">
        <Panel>
          <SubHeading>The Vision</SubHeading>
          <p>
            Building a sandbox-like experience that lowers the barrier between experiencing a dynamic world and shaping it. It&rsquo;s about bringing the joy of systems-level creativity to everyone.
          </p>
        </Panel>

        <Panel>
          <SubHeading>Current Focus</SubHeading>
          <PixelList
            items={[
              'Prototype iteration',
              'Technical systems design',
              'Creative AI tooling integration',
            ]}
          />
        </Panel>
      </div>

      <div>
        <SubHeading>Screenshots</SubHeading>
        <div className="space-y-6">
          {SHOTS.map((shot) => (
            <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" className="pixel-box block w-[calc(100%-6px)] mx-[3px]" />
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
