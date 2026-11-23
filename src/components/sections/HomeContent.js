import { motion } from 'framer-motion';
import PixelIcon from '../PixelIcon';
import { CARTRIDGES } from '@/data/cartridges';

export default function HomeContent() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Night sky */}
      <div className="starfield-far absolute inset-0 animate-drift opacity-70" />
      <div className="starfield absolute inset-0 animate-drift-fast opacity-80" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-console-magenta/15 via-console-purple/5 to-transparent" />
      {/* Receding floor grid */}
      <div className="absolute inset-x-[-50%] bottom-0 h-[34%] overflow-hidden">
        <div className="horizon-grid absolute inset-x-0 top-0 h-[300%] opacity-40" />
      </div>

      {/* HUD */}
      <div className="absolute top-0 inset-x-0 flex justify-between px-4 desk:px-6 pt-4 font-pixel text-[7px] desk:text-[9px] tracking-wider text-zinc-500">
        <span>JHT-OS V2.0</span>
        <span>{String(CARTRIDGES.length).padStart(2, '0')} CARTRIDGES</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative h-full flex flex-col items-center justify-center px-4 pb-6 text-center"
      >
        <h1 className="font-pixel text-console-red pixel-text-shadow text-[1.35rem] min-[400px]:text-2xl desk:text-5xl leading-tight mb-5 desk:mb-7">
          JACK H TERZI
        </h1>
        <p className="font-pixel text-[10px] desk:text-sm text-zinc-200 leading-loose mb-8 desk:mb-10">
          Projects, products,<br />and experiments.
        </p>

        {/* The line-up */}
        <div className="flex items-end gap-3 desk:gap-6 mb-9 desk:mb-12">
          {CARTRIDGES.map((cart, i) => (
            <div key={cart.id} className="animate-bob" style={{ animationDelay: `${i * 0.18}s`, color: cart.accent }}>
              <PixelIcon name={cart.icon} title={cart.title} className="w-6 h-6 desk:w-10 desk:h-10 drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)]" />
            </div>
          ))}
        </div>

        <p className="font-pixel text-[9px] desk:text-xs text-zinc-300 leading-loose animate-blink">
          INSERT A CARTRIDGE<br className="desk:hidden" /> TO BEGIN
          <span className="hidden desk:inline text-console-red"> &gt;</span>
        </p>
        <div className="desk:hidden mt-3 w-0 h-0 border-l-[7px] border-r-[7px] border-t-[9px] border-l-transparent border-r-transparent border-t-console-red animate-bounce" />
      </motion.div>
    </div>
  );
}
