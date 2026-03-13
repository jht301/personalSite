import clsx from 'clsx';
import { useState } from 'react';

export function DPad({ small, onUp, onDown, onLeft, onRight }) {
  const [pressed, setPressed] = useState(null);

  const handlePress = (dir, callback) => {
    setPressed(dir);
    callback?.();
    setTimeout(() => setPressed(null), 150);
  };

  return (
    <div className={clsx("relative opacity-80 backdrop-blur-sm z-50", small ? "w-14 h-14" : "w-24 h-24")}>
      {/* Horizontal Bar */}
      <div className={clsx("absolute top-1/2 left-0 w-full -translate-y-1/2 bg-console-light-gray rounded-sm shadow-[2px_2px_10px_rgba(0,0,0,0.8)] border border-console-mid-gray/30", small ? "h-5" : "h-8")}></div>
      {/* Vertical Bar */}
      <div className={clsx("absolute top-0 left-1/2 h-full -translate-x-1/2 bg-console-light-gray rounded-sm shadow-[2px_2px_10px_rgba(0,0,0,0.8)] border border-console-mid-gray/30", small ? "w-5" : "w-8")}></div>
      {/* Up button */}
      <button
        onClick={() => handlePress('up', onUp)}
        className={clsx("absolute left-1/2 -translate-x-1/2 top-0 cursor-pointer transition-all duration-100 z-20", small ? "w-5 h-6" : "w-8 h-10", pressed === 'up' ? "scale-90 brightness-75" : "")}
      />
      {/* Down button */}
      <button
        onClick={() => handlePress('down', onDown)}
        className={clsx("absolute left-1/2 -translate-x-1/2 bottom-0 cursor-pointer transition-all duration-100 z-20", small ? "w-5 h-6" : "w-8 h-10", pressed === 'down' ? "scale-90 brightness-75" : "")}
      />
      {/* Left button */}
      <button
        onClick={() => handlePress('left', onLeft)}
        className={clsx("absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer transition-all duration-100 z-20", small ? "w-6 h-5" : "w-10 h-8", pressed === 'left' ? "scale-90 brightness-75" : "")}
      />
      {/* Right button */}
      <button
        onClick={() => handlePress('right', onRight)}
        className={clsx("absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer transition-all duration-100 z-20", small ? "w-6 h-5" : "w-10 h-8", pressed === 'right' ? "scale-90 brightness-75" : "")}
      />
      {/* Center detail */}
      <div className={clsx("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-console-light-gray flex items-center justify-center z-10", small ? "w-4 h-4" : "w-6 h-6")}>
        <div className={clsx("rounded-full bg-console-dark-gray opacity-20", small ? "w-2.5 h-2.5" : "w-4 h-4")}></div>
      </div>
      {/* Visual press overlay - up */}
      {pressed === 'up' && <div className={clsx("absolute left-1/2 -translate-x-1/2 top-0 bg-console-dark-gray/20 rounded-sm z-30 pointer-events-none", small ? "w-5 h-6" : "w-8 h-10")} />}
      {/* Visual press overlay - down */}
      {pressed === 'down' && <div className={clsx("absolute left-1/2 -translate-x-1/2 bottom-0 bg-console-dark-gray/20 rounded-sm z-30 pointer-events-none", small ? "w-5 h-6" : "w-8 h-10")} />}
      {/* Visual press overlay - left */}
      {pressed === 'left' && <div className={clsx("absolute top-1/2 -translate-y-1/2 left-0 bg-console-dark-gray/20 rounded-sm z-30 pointer-events-none", small ? "w-6 h-5" : "w-10 h-8")} />}
      {/* Visual press overlay - right */}
      {pressed === 'right' && <div className={clsx("absolute top-1/2 -translate-y-1/2 right-0 bg-console-dark-gray/20 rounded-sm z-30 pointer-events-none", small ? "w-6 h-5" : "w-10 h-8")} />}
    </div>
  );
}

export function ActionButtons({ small, onA, onB }) {
  return (
    <div className={clsx("flex items-end rotate-[-15deg] z-50 opacity-90", small ? "space-x-3 pb-2" : "space-x-6 pb-4")}>
      <div className="flex flex-col items-center">
        <button onClick={onB} className={clsx("rounded-full bg-console-magenta/90 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3),_2px_4px_10px_rgba(0,0,0,0.8)] border border-console-magenta hover:bg-[#ff33ff] hover:scale-105 active:scale-95 transition-all text-white font-pixel drop-shadow-md cursor-pointer", small ? "w-9 h-9 text-[8px]" : "w-14 h-14 text-xs")}>
          B
        </button>
      </div>
      <div className={clsx("flex flex-col items-center", small ? "-mt-6" : "-mt-10")}>
        <button onClick={onA} className={clsx("rounded-full bg-console-red/90 shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.3),_2px_4px_10px_rgba(0,0,0,0.8)] border border-console-red hover:bg-[#ff4444] hover:scale-105 active:scale-95 transition-all text-white font-pixel drop-shadow-md cursor-pointer", small ? "w-9 h-9 text-[8px]" : "w-14 h-14 text-xs")}>
          A
        </button>
      </div>
    </div>
  );
}

export function StartButton({ onClick, small }) {
  return (
    <div className="flex flex-col items-center z-50 opacity-90 rotate-[-15deg]">
      <button
        onClick={onClick}
        className={clsx("rounded-full bg-console-light-gray shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.8)] border border-console-mid-gray/40 hover:bg-white active:scale-95 transition-all cursor-pointer", small ? "w-10 h-3" : "w-16 h-4")}
      ></button>
      <span className={clsx("font-sans font-bold tracking-widest text-console-dark-gray drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] mt-[3px]", small ? "text-[7px]" : "text-[10px]")}>HOME</span>
    </div>
  );
}

export function SelectButton({ onClick, small }) {
  return (
    <div className="flex flex-col items-center z-50 opacity-90 rotate-[-15deg]">
      <button
        onClick={onClick}
        className={clsx("rounded-full bg-console-light-gray shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.8)] border border-console-mid-gray/40 hover:bg-white active:scale-95 transition-all cursor-pointer", small ? "w-10 h-3" : "w-16 h-4")}
      ></button>
      <span className={clsx("font-sans font-bold tracking-widest text-console-dark-gray drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] mt-[3px]", small ? "text-[7px]" : "text-[10px]")}>CONTACT</span>
    </div>
  );
}
