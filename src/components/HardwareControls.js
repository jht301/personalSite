import clsx from 'clsx';
import { useState } from 'react';

const ARROWS = {
  up: 'top-1 desk:top-1.5 left-1/2 -translate-x-1/2 border-l-[4px] border-r-[4px] border-b-[5px] border-l-transparent border-r-transparent border-b-white/25',
  down: 'bottom-1 desk:bottom-1.5 left-1/2 -translate-x-1/2 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-white/25',
  left: 'left-1 desk:left-1.5 top-1/2 -translate-y-1/2 border-t-[4px] border-b-[4px] border-r-[5px] border-t-transparent border-b-transparent border-r-white/25',
  right: 'right-1 desk:right-1.5 top-1/2 -translate-y-1/2 border-t-[4px] border-b-[4px] border-l-[5px] border-t-transparent border-b-transparent border-l-white/25',
};

const HIT_AREAS = {
  up: 'left-1/2 -translate-x-1/2 top-0 w-1/3 h-[42%]',
  down: 'left-1/2 -translate-x-1/2 bottom-0 w-1/3 h-[42%]',
  left: 'top-1/2 -translate-y-1/2 left-0 h-1/3 w-[42%]',
  right: 'top-1/2 -translate-y-1/2 right-0 h-1/3 w-[42%]',
};

export function DPad({ onUp, onDown, onLeft, onRight }) {
  const [pressed, setPressed] = useState(null);
  const handlers = { up: onUp, down: onDown, left: onLeft, right: onRight };

  const handlePress = (dir) => {
    setPressed(dir);
    handlers[dir]?.();
    setTimeout(() => setPressed(null), 150);
  };

  return (
    <div className="relative w-[4.25rem] h-[4.25rem] desk:w-24 desk:h-24">
      {/* Recess the pad sits in */}
      <div className="absolute -inset-1.5 desk:-inset-2 rounded-full bg-black/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)]" />
      {/* Horizontal + vertical arms */}
      <div className="dpad-arm absolute top-1/2 left-0 w-full h-1/3 -translate-y-1/2 rounded-[5px]" />
      <div className="dpad-arm absolute left-1/2 top-0 h-full w-1/3 -translate-x-1/2 rounded-[5px]" />
      {/* Centre cap hides the overlap seam */}
      <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 -translate-x-1/2 -translate-y-1/2 bg-[#2A2C38] flex items-center justify-center">
        <div className="w-1/2 h-1/2 rounded-full bg-black/35 shadow-[inset_0_1px_2px_rgba(0,0,0,0.6)]" />
      </div>

      {Object.keys(HIT_AREAS).map((dir) => (
        <button
          key={dir}
          type="button"
          aria-label={`D-pad ${dir}`}
          onClick={() => handlePress(dir)}
          className={clsx('absolute z-20 cursor-pointer rounded-[5px] transition-colors', HIT_AREAS[dir], pressed === dir && 'bg-black/40')}
        >
          <span className={clsx('absolute w-0 h-0', ARROWS[dir])} />
        </button>
      ))}
    </div>
  );
}

function RoundButton({ label, color, onClick }) {
  return (
    <button
      type="button"
      aria-label={`${label} button`}
      onClick={onClick}
      style={{ '--btn': color }}
      className="round-btn rounded-full w-10 h-10 desk:w-16 desk:h-16 font-pixel text-[9px] desk:text-xs text-white/90 cursor-pointer"
    >
      {label}
    </button>
  );
}

export function ActionButtons({ onA, onB }) {
  return (
    <div className="relative flex items-end -rotate-[18deg] gap-2.5 desk:gap-5">
      <div className="absolute -inset-x-1.5 -inset-y-1.5 desk:-inset-x-3 desk:-inset-y-2 rounded-full bg-black/[0.07] shadow-[inset_0_2px_4px_rgba(0,0,0,0.18)]" />
      <div className="relative">
        <RoundButton label="B" color="#F72585" onClick={onB} />
      </div>
      <div className="relative -translate-y-1 desk:-translate-y-2">
        <RoundButton label="A" color="#E63946" onClick={onA} />
      </div>
    </div>
  );
}

function PillButton({ label, onClick }) {
  return (
    <div className="flex flex-col items-center -rotate-[18deg]">
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className="pill-btn rounded-full w-10 h-3 desk:w-16 desk:h-[1.1rem] cursor-pointer"
      />
      <span className="font-pixel text-[6px] desk:text-[8px] tracking-wider text-[#5C584F] mt-2">{label}</span>
    </div>
  );
}

export function StartButton({ onClick }) {
  return <PillButton label="HOME" onClick={onClick} />;
}

export function SelectButton({ onClick }) {
  return <PillButton label="CONTACT" onClick={onClick} />;
}
