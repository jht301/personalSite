export default function AboutContent() {
  return (
    <div className="w-full h-full flex flex-col px-6 pb-6 overflow-y-auto text-console-screen-dark space-y-4">
      <h2 className="font-pixel text-lg uppercase border-b-2 border-console-screen-mid pb-2 mb-2 sticky top-0 bg-console-dark-gray z-10 w-[calc(100%+48px)] -mx-6 px-6 pt-6 text-console-red">
        About Jack
      </h2>
      
      <div className="font-sans text-base space-y-4 pb-6">
        <p className="font-bold text-console-red">
          Product-minded builder across games, startups, and digital experiences.
        </p>

        <p className="text-zinc-200">
          I have a passion for blending systems and creativity. I believe digital interfaces should be memorable, tactile, and intentionally designed.
        </p>

        <h3 className="font-pixel text-xs text-console-red mt-4 mb-2">What I Do</h3>
        <ul className="list-disc pl-4 space-y-1 text-zinc-200">
          <li>Product strategy & operations</li>
          <li>Creative technology</li>
          <li>Interactive website development</li>
          <li>Game-inspired product building</li>
        </ul>

        <h3 className="font-pixel text-xs text-console-red mt-4 mb-2">Background</h3>
        <ul className="list-disc pl-4 space-y-1 text-zinc-200">
          <li>Product operations leadership</li>
          <li>Consulting & startup work</li>
          <li>Extensive experience in games</li>
        </ul>
        
        <p className="pt-4 text-sm italic text-zinc-200 border-t border-console-screen-light mt-4">
          "Life's just a game. Once you've realized that you can start winning"
        </p>
      </div>
    </div>
  );
}
