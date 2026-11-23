import SectionFrame from '../SectionFrame';
import ProjectCard from '../ProjectCard';
import { CARTRIDGES } from '@/data/cartridges';
import { TOOLS } from '@/data/projects';

const cart = CARTRIDGES.find((c) => c.id === 'lab');

export default function LabContent() {
  return (
    <SectionFrame title="Apps & Tools" kicker={`${TOOLS.length} RECENT BUILDS`} icon={cart.icon} accent={cart.accent}>
      <p className="text-lg desk:text-xl font-bold text-(--accent) max-w-3xl">
        Products, utilities and experiments from the workbench.
      </p>

      {TOOLS.map((tool) => (
        <ProjectCard key={tool.title} project={tool} />
      ))}
    </SectionFrame>
  );
}
