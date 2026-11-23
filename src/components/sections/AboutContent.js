import SectionFrame, { SubHeading, PixelList, Panel } from '../SectionFrame';
import { CARTRIDGES } from '@/data/cartridges';

const cart = CARTRIDGES.find((c) => c.id === 'about');

export default function AboutContent() {
  return (
    <SectionFrame title="About Jack" kicker="PLAYER 1" icon={cart.icon} accent={cart.accent}>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg desk:text-xl font-bold text-(--accent)">
          Product-minded builder across games, startups, and digital experiences.
        </p>
        <p>
          I have a passion for blending systems and creativity. I believe digital interfaces should be memorable, tactile, and intentionally designed.
        </p>
      </div>

      <div className="grid gap-6 min-[1000px]:grid-cols-2">
        <Panel>
          <SubHeading>What I Do</SubHeading>
          <PixelList
            items={[
              'Product strategy & operations',
              'Creative technology',
              'Interactive website development',
              'Game-inspired product building',
            ]}
          />
        </Panel>

        <Panel>
          <SubHeading>Background</SubHeading>
          <PixelList
            items={[
              'Product operations leadership',
              'Consulting & startup work',
              'Extensive experience in games',
            ]}
          />
        </Panel>
      </div>

      <Panel>
        <SubHeading>Lately</SubHeading>
        <PixelList
          items={[
            'Building two browser games: a 3D action RPG and a grid-based battler',
            'Shipping small apps and data tools, from critic matching to job tracking',
            'Designing and launching websites for brands, restaurants and foundations',
          ]}
        />
      </Panel>

      <p className="text-sm italic text-zinc-300 border-l-4 border-(--accent) pl-4">
        &ldquo;Life&rsquo;s just a game. Once you&rsquo;ve realized that you can start winning&rdquo;
      </p>
    </SectionFrame>
  );
}
