import SectionFrame from '../SectionFrame';
import ProjectCard from '../ProjectCard';
import { CARTRIDGES } from '@/data/cartridges';
import { GAMES } from '@/data/projects';

const cart = CARTRIDGES.find((c) => c.id === 'games');

export default function GamesContent() {
  return (
    <SectionFrame title="Game Lab" kicker={`${GAMES.length} GAMES IN THE WORKS`} icon={cart.icon} accent={cart.accent}>
      <p className="text-lg desk:text-xl font-bold text-(--accent) max-w-3xl">
        Original games built for the browser, playable on a phone or a desktop.
      </p>

      {GAMES.map((game) => (
        <ProjectCard key={game.title} project={game} />
      ))}
    </SectionFrame>
  );
}
