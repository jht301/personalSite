import clsx from 'clsx';
import { useRef, useCallback } from 'react';
import { StartButton, SelectButton, DPad, ActionButtons } from './HardwareControls';

export default function ConsoleShell({ children, activeCartridge, onEject, onSelectContact, onGamepadInput }) {
  const screenRef = useRef(null);

  const scrollScreen = useCallback((direction) => {
    const container = screenRef.current;
    if (!container) return;
    // Find the scrollable child (the section content div with overflow-y-auto)
    const scrollable = container.querySelector('[class*="overflow-y-auto"]') || container;
    const amount = direction === 'up' ? -200 : 200;
    scrollable.scrollBy({ top: amount, behavior: 'smooth' });
  }, []);

  return (
    <div
      id="console-shell"
      className="shell relative w-full h-full flex flex-col rounded-[26px] desk:rounded-[44px] p-2 desk:p-4"
    >
      {/* Cartridge slot lip along the top edge */}
      <div className="absolute top-0 right-10 desk:right-16 w-24 desk:w-32 h-1.5 desk:h-2 rounded-b-md bg-[#1A1B24] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.15)]" />

      {/* Bezel + LCD */}
      <div className="bezel relative flex-1 min-h-0 flex flex-col rounded-[18px] desk:rounded-[28px] px-2 pb-2 desk:px-4 desk:pb-4">
        <div className="flex items-center justify-between h-6 desk:h-8 px-1 shrink-0">
          <div className="flex items-center gap-2">
            <span className={clsx('led w-2 h-2 rounded-full', activeCartridge && 'led-on')} />
            <span className="font-pixel text-[6px] desk:text-[7px] tracking-widest text-zinc-500">POWER</span>
          </div>
          <span className="font-pixel text-[6px] desk:text-[7px] tracking-widest text-zinc-500">
            JHT-01 <span className="text-zinc-600">·</span> PLAYABLE PORTFOLIO
          </span>
        </div>

        <div className="lcd relative flex-1 min-h-0 rounded-[6px] desk:rounded-[10px] overflow-hidden">
          {/* IN-SCREEN CONTENT RENDERED HERE */}
          <div ref={screenRef} className="absolute inset-0 z-0">
            {children}
          </div>
          <div className="crt absolute inset-0 z-40 pointer-events-none" />
        </div>
      </div>

      {/* Control deck */}
      <div className="relative shrink-0 h-[5.75rem] desk:h-36 flex items-center justify-between px-4 desk:px-12">
        <DPad
          onUp={() => { scrollScreen('up'); onGamepadInput?.('up'); }}
          onDown={() => { scrollScreen('down'); onGamepadInput?.('down'); }}
          onLeft={() => onGamepadInput?.('left')}
          onRight={() => onGamepadInput?.('right')}
        />

        <div className="flex items-center gap-3 desk:gap-7 translate-y-4 desk:translate-y-5">
          <StartButton onClick={onEject} />
          <SelectButton onClick={onSelectContact} />
        </div>

        <div className="flex items-center gap-10">
          <div className="speaker hidden min-[1100px]:block w-[4.5rem] h-[3.25rem] -rotate-[18deg] opacity-80" />
          <ActionButtons
            onA={() => onGamepadInput?.('a')}
            onB={() => onGamepadInput?.('b')}
          />
        </div>
      </div>
    </div>
  );
}
