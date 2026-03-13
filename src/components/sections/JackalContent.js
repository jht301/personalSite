export default function JackalContent() {
  return (
    <div className="w-full h-full flex flex-col px-6 pb-6 overflow-y-auto text-console-screen-dark space-y-4">
      <h2 className="font-pixel text-lg uppercase border-b-2 border-console-screen-mid pb-2 mb-2 sticky top-0 bg-console-dark-gray z-10 w-[calc(100%+48px)] -mx-6 px-6 pt-6 text-emerald-400">
        Jackal Games
      </h2>
      
      <div className="font-sans text-base space-y-6 pb-6">
        <p className="font-bold text-emerald-400">
          Jackal is an exploration into AI-enabled game creation, where play itself is the act of creation.
        </p>

        <div>
          <h3 className="font-pixel text-xs font-bold mt-4 mb-2 text-emerald-400">The Vision</h3>
          <p className="text-zinc-200">
            Building a sandbox-like experience that lowers the barrier between experiencing a dynamic world and shaping it. It's about bringing the joy of systems-level creativity to everyone.
          </p>
        </div>

        <div>
          <h3 className="font-pixel text-xs font-bold mt-4 mb-2 text-emerald-400">Current Focus</h3>
          <ul className="list-[square] pl-4 space-y-1 text-zinc-200">
            <li>Prototype iteration</li>
            <li>Technical systems design</li>
            <li>Creative AI tooling integration</li>
          </ul>
        </div>

        <h3 className="font-pixel text-xs font-bold mt-4 mb-2 text-emerald-400">Screenshots</h3>
        <div className="space-y-4">
          <img src="/jakkal/landing.png" alt="Jakkal landing page" className="w-full rounded border border-zinc-600" />
          <img src="/jakkal/assistant.png" alt="Jakkal AI assistant" className="w-full rounded border border-zinc-600" />
          <img src="/jakkal/gameplay.png" alt="Jakkal gameplay" className="w-full rounded border border-zinc-600" />
        </div>
      </div>
    </div>
  );
}
