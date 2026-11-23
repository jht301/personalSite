import clsx from 'clsx';
import { motion } from 'framer-motion';
import PixelIcon from './PixelIcon';

// The cartridge artwork on its own, so the shelf and the insert animation
// draw exactly the same thing. Fills whatever box it is given; lays out as a
// wide cart on phones and a tall cart on desktop.
export function CartridgeFace({ title, icon, color, className }) {
  return (
    <div
      style={{ '--cart': color }}
      className={clsx(
        'cart-plastic relative w-full h-full rounded-t-[10px] rounded-b-[4px] flex flex-col p-1.5 pt-2.5 desk:p-2 desk:pt-4',
        className
      )}
    >
      {/* Grip ridges */}
      <div className="absolute top-1 desk:top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="w-3 desk:w-4 h-[2px] rounded-full bg-black/25 shadow-[0_1px_0_rgba(255,255,255,0.25)]" />
        ))}
      </div>

      {/* Label art */}
      <div className="cart-label flex-1 min-h-0 rounded-[4px] flex flex-row desk:flex-col items-center justify-center gap-1.5 desk:gap-2 px-1.5 py-1 overflow-hidden">
        <PixelIcon name={icon} className="w-5 h-5 desk:w-[38%] desk:h-auto shrink-0 text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]" />
        <span className="font-pixel text-[6.5px] desk:text-[clamp(6px,0.6vw,8px)] leading-[1.5] text-white text-left desk:text-center [text-shadow:1px_1px_0_rgba(0,0,0,0.9)]">
          {title}
        </span>
      </div>

      {/* Contact-edge notches */}
      <div className="hidden desk:flex justify-between items-end mt-1.5 px-0.5 h-2">
        <div className="w-2 h-2 border-t-2 border-r-2 border-black/25 rounded-tr-sm" />
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-black/25" />
        <div className="w-2 h-2 border-t-2 border-l-2 border-black/25 rounded-tl-sm" />
      </div>
    </div>
  );
}

export function Cartridge({ item, onClick, isSelected }) {
  return (
    <div className="cart-slot relative rounded-[10px] w-full h-14 desk:w-[clamp(5.25rem,7.6vw,7rem)] desk:h-auto desk:aspect-[4/5]">
      <motion.button
        type="button"
        data-cart={item.id}
        aria-label={`Insert ${item.title} cartridge`}
        onClick={onClick}
        disabled={isSelected}
        whileHover={{ y: -8, scale: 1.04 }}
        whileTap={{ scale: 0.95 }}
        className={clsx(
          'absolute inset-0 cursor-pointer transition-opacity duration-200',
          isSelected ? 'opacity-0 pointer-events-none' : 'opacity-100'
        )}
      >
        <CartridgeFace title={item.title} icon={item.icon} color={item.color} />
      </motion.button>
    </div>
  );
}

export function CartridgeSelector({ items, onSelect, activeCartridge, insertingCartridge }) {
  return (
    <div className="shelf rounded-2xl p-2.5 desk:p-4 w-full desk:w-auto">
      <div className="flex items-center justify-between mb-2 desk:mb-3 px-0.5">
        <span className="font-pixel text-[6px] desk:text-[7px] tracking-widest text-zinc-500">CARTRIDGES</span>
        <span className="font-pixel text-[6px] desk:text-[7px] tracking-widest text-zinc-600">
          {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 desk:grid-cols-2 desk:gap-4">
        {items.map((item) => (
          <Cartridge
            key={item.id}
            item={item}
            onClick={(e) => onSelect(item, e)}
            isSelected={activeCartridge?.id === item.id || insertingCartridge?.id === item.id}
          />
        ))}
      </div>
    </div>
  );
}
