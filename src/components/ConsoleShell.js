import clsx from 'clsx';
import { useRef, useCallback } from 'react';
import { StartButton, SelectButton, DPad, ActionButtons } from './HardwareControls';

export default function ConsoleShell({ children, isMobileMode, activeCartridge, onEject, onSelectContact, onGamepadInput }) {
  const screenRef = useRef(null);

  const scrollScreen = useCallback((direction) => {
    const container = screenRef.current;
    if (!container) return;
    // Find the scrollable child (the section content div with overflow-y-auto)
    const scrollable = container.querySelector('[class*="overflow-y-auto"]') || container;
    const amount = direction === 'up' ? -200 : 200;
    scrollable.scrollBy({ top: amount, behavior: 'smooth' });
  }, []);
  // isMobileMode mimics a vertical device, desktop mimics horizontal.
  // The screen now takes up the vast majority of the real estate.
  return (
    <div
      id="console-shell"
      className={clsx(
        "relative mx-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col items-center justify-center",
        "bg-console-light-gray shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.1),_10px_10px_20px_rgba(0,0,0,0.3)]",
        isMobileMode
          ? "w-[95vw] max-w-[400px] h-[82dvh] rounded-[20px] p-1.5"
          : "w-[80vw] max-w-[1200px] h-[90vh] max-h-[900px] rounded-[40px] p-3"
      )}
      style={{
        boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.8), 20px 20px 40px rgba(0, 0, 0, 0.4)",
      }}
    >

      {/* Decorative details - simplified to avoid brand references */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex space-x-2 opacity-20">
        <div className="w-12 h-1 bg-console-dark-gray rounded-full"></div>
      </div>


      {/* Massive Screen Area */}
      <div className={clsx(
        "bg-console-dark-gray rounded-[24px] flex flex-col relative overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
        isMobileMode ? "w-full h-full" : "w-full h-full"
      )}>

        {/* Actual Screen viewport */}
        <div className={clsx(
          "bg-console-screen-bg w-full h-full relative overflow-hidden retro-screen-effect"
        )}>
          {/* IN-SCREEN CONTENT RENDERED HERE */}
          <div ref={screenRef} className={clsx("absolute inset-0 z-0", isMobileMode ? "bottom-24" : "bottom-32")}>
            {children}
          </div>

          {/* Solid gray bar behind controls */}
          <div className={clsx("absolute bottom-0 inset-x-0 bg-console-mid-gray z-10", isMobileMode ? "h-24" : "h-32")}></div>

          {/* Hardware Controls Panel - Absolute positioned OVER the screen */}
          <div className={clsx(
            "absolute bottom-0 inset-x-0 pointer-events-none z-50 flex items-end justify-between px-6 pb-[10px]",
            isMobileMode ? "h-24" : "h-24"
          )}>

            <div className={clsx("flex justify-between w-full h-full items-end", isMobileMode ? "flex-row px-2" : "")}>


              {/* Left Side: D-Pad */}
              <div className="pointer-events-auto">
                <DPad
                  small={isMobileMode}
                  onUp={() => { scrollScreen('up'); onGamepadInput?.('up'); }}
                  onDown={() => { scrollScreen('down'); onGamepadInput?.('down'); }}
                  onLeft={() => onGamepadInput?.('left')}
                  onRight={() => onGamepadInput?.('right')}
                />
              </div>

              {/* Center: Start / Select */}
              <div className={clsx(
                "pointer-events-auto flex",
                isMobileMode ? "absolute bottom-[10px] left-1/2 -translate-x-1/2 space-x-3" : "space-x-6 mb-[10px]"
              )}>
                <StartButton onClick={onEject} small={isMobileMode} />
                <SelectButton onClick={onSelectContact} small={isMobileMode} />
              </div>

              {/* Right Side: A/B Buttons */}
              <div className={clsx("pointer-events-auto", isMobileMode ? "pb-2 -mr-4" : "pb-4")}>
                <ActionButtons
                  small={isMobileMode}
                  onA={() => onGamepadInput?.('a')}
                  onB={() => onGamepadInput?.('b')}
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
