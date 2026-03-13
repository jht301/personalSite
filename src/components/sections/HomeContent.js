import { motion } from 'framer-motion';

export default function HomeContent() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="font-pixel text-console-red text-xl sm:text-4xl mb-4 tracking-tight">JACK H TERZI</h1>
        <p className="font-pixel text-sm text-zinc-300 mb-10 leading-relaxed">
          Projects, products,<br/>and experiments.
        </p>

        <div className="animate-pulse flex flex-col items-center">
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-console-red mb-3 animate-bounce"></div>
          <p className="font-pixel text-xs text-zinc-400">
            INSERT A CARTRIDGE<br/>TO BEGIN
          </p>
        </div>
      </motion.div>
    </div>
  );
}
