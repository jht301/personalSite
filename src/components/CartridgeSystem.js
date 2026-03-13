import clsx from 'clsx';
import { motion } from 'framer-motion';

export function Cartridge({ title, colorClass, onClick, isSelected, small }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -10, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        "relative rounded-t-lg rounded-b-sm border-2 border-console-dark-gray shadow-[4px_4px_0px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col items-center justify-between transition-opacity bg-zinc-300",
        small ? "w-[4.5rem] h-16 p-1 pt-2" : "w-32 h-40 p-2 pt-4",
        isSelected ? "opacity-0" : "opacity-100"
      )}
    >
      {/* Top grip lines */}
      <div className={clsx("flex space-x-1 absolute left-1/2 -translate-x-1/2", small ? "top-1" : "top-2")}>
        <div className={clsx("bg-zinc-400 rounded-full", small ? "w-2.5 h-[1.5px]" : "w-4 h-[2px]")}></div>
        <div className={clsx("bg-zinc-400 rounded-full", small ? "w-2.5 h-[1.5px]" : "w-4 h-[2px]")}></div>
        <div className={clsx("bg-zinc-400 rounded-full", small ? "w-2.5 h-[1.5px]" : "w-4 h-[2px]")}></div>
      </div>

      {/* Cartridge Label/Artwork */}
      <div className={clsx(
        "w-full flex-grow mt-2 rounded border border-zinc-500 shadow-inner flex items-center justify-center p-2 text-center overflow-hidden",
        colorClass
      )}>
        <span className={clsx("font-pixel leading-tight text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]", small ? "text-[7px]" : "text-[10px]")}>
          {title}
        </span>
      </div>

      {/* Bottom Notch Details */}
      <div className="flex w-full justify-between items-end mt-1 px-1 opacity-50">
        <div className="w-2 h-2 border-t border-r border-console-dark-gray rounded-tr-sm"></div>
        <div className="w-2 h-2 border-t border-l border-console-dark-gray rounded-tl-sm"></div>
      </div>

      {/* Console arrow */}
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-4 h-2 bg-zinc-400 translate-y-2 clip-path-triangle opacity-30"></div>
    </motion.button>
  );
}

export function CartridgeSelector({ items, onSelect, activeCartridge, insertingCartridge, vertical, small }) {
  return (
    <div className={clsx(
      "bg-zinc-800/80 backdrop-blur rounded-2xl border-b-4 border-zinc-900 shadow-2xl flex items-center justify-center",
      small ? "p-2" : "p-6",
      vertical
        ? clsx("flex-col", small ? "space-y-3" : "space-y-6")
        : small
          ? "grid grid-cols-4 gap-2 w-full mt-2 mb-2"
          : "w-full max-w-4xl mx-auto overflow-x-auto mt-12 mb-8 space-x-6"
    )}>
      {items.map((item) => (
        <Cartridge
          key={item.id}
          title={item.title}
          colorClass={item.colorClass}
          onClick={(e) => onSelect(item, e)}
          isSelected={activeCartridge?.id === item.id || insertingCartridge?.id === item.id}
          small={small}
        />
      ))}
    </div>
  );
}
