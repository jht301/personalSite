'use client';

import { useState, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ConsoleShell from '@/components/ConsoleShell';
import { CartridgeSelector, CartridgeFace } from '@/components/CartridgeSystem';
import PixelIcon from '@/components/PixelIcon';
import { CARTRIDGES, CONTACT_CARTRIDGE, SECRET_CARTRIDGE, DEFAULT_AMBIENT } from '@/data/cartridges';
import HomeContent from '@/components/sections/HomeContent';
import AboutContent from '@/components/sections/AboutContent';
import JackalContent from '@/components/sections/JackalContent';
import ProjectsContent from '@/components/sections/ProjectsContent';
import ContactContent from '@/components/sections/ContactContent';
import GamesContent from '@/components/sections/GamesContent';
import LabContent from '@/components/sections/LabContent';
import SecretContent from '@/components/sections/SecretContent';

const KONAMI = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
const BOOT_MS = 1200;
const INSERT_MS = 1000;

export default function Home() {
  const [activeCartridge, setActiveCartridge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [insertingCartridge, setInsertingCartridge] = useState(null);
  const [insertStart, setInsertStart] = useState({ x: 0, y: 0, w: 80, h: 100 });

  const boot = useCallback((cartridge) => {
    setIsLoading(true);
    setActiveCartridge(cartridge);
    setTimeout(() => setIsLoading(false), BOOT_MS);
  }, []);

  // Konami code: track last 10 gamepad inputs
  const konamiBuffer = useRef([]);

  const handleGamepadInput = useCallback((input) => {
    const buf = konamiBuffer.current;
    buf.push(input);
    if (buf.length > 10) buf.shift();
    if (buf.length === 10 && KONAMI.every((k, i) => buf[i] === k)) {
      konamiBuffer.current = [];
      if (activeCartridge?.id === 'secret') return;
      boot(SECRET_CARTRIDGE);
    }
  }, [activeCartridge, boot]);

  const handleSelectCartridge = (cartridge, e) => {
    if (activeCartridge?.id === cartridge.id) return;
    if (insertingCartridge) return;

    // Start the flight from wherever the cartridge sits on the shelf
    const rect = e?.currentTarget?.getBoundingClientRect();
    if (rect) {
      setInsertStart({ x: rect.left, y: rect.top, w: rect.width, h: rect.height });
    }

    setInsertingCartridge(cartridge);

    // After the flight, seat the cartridge and boot it
    setTimeout(() => {
      setInsertingCartridge(null);
      boot(cartridge);
    }, INSERT_MS);
  };

  const handleEject = () => {
    setActiveCartridge(null);
  };

  const handleSelectContact = () => {
    if (activeCartridge?.id === CONTACT_CARTRIDGE.id) return;
    boot(CONTACT_CARTRIDGE);
  };

  const currentContent = () => {
    if (!activeCartridge) return <HomeContent />;
    if (isLoading) return <BootScreen cartridge={activeCartridge} />;

    switch (activeCartridge.id) {
      case 'about': return <AboutContent />;
      case 'jackal': return <JackalContent />;
      case 'projects': return <ProjectsContent />;
      case 'games': return <GamesContent />;
      case 'lab': return <LabContent />;
      case 'contact': return <ContactContent />;
      case 'secret': return <SecretContent />;
      default: return <HomeContent />;
    }
  };

  return (
    <main
      style={{ '--ambient': activeCartridge?.color || DEFAULT_AMBIENT }}
      className="room relative h-[100dvh] overflow-hidden flex flex-col desk:flex-row items-center justify-center gap-2 desk:gap-6 p-1.5 desk:p-8"
    >
      <div className="room-grid absolute inset-0 pointer-events-none" />

      {/* Main Console Frame */}
      <div className="relative z-20 w-full max-w-[460px] flex-1 min-h-0 min-w-0 desk:max-w-[1200px] desk:h-[min(90dvh,900px)]">
        <ConsoleShell
          activeCartridge={activeCartridge}
          onEject={handleEject}
          onSelectContact={handleSelectContact}
          onGamepadInput={handleGamepadInput}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCartridge ? activeCartridge.id : 'home'}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full"
            >
              {currentContent()}
            </motion.div>
          </AnimatePresence>
        </ConsoleShell>
      </div>

      {/* Cartridge shelf */}
      <div className="relative z-10 w-full max-w-[460px] shrink-0 desk:w-auto desk:max-w-none">
        <CartridgeSelector
          items={CARTRIDGES}
          onSelect={handleSelectCartridge}
          activeCartridge={activeCartridge}
          insertingCartridge={insertingCartridge}
        />
      </div>

      {/* Cartridge insertion animation - fixed overlay */}
      <AnimatePresence>
        {insertingCartridge && (() => {
          const consoleRect = document.getElementById('console-shell')?.getBoundingClientRect();
          const { x, y, w, h } = insertStart;
          // Always land above the slot at the top-right of the console, then drop in behind it
          const slotInset = window.innerWidth < 850 ? 88 : 128;
          const landX = consoleRect ? consoleRect.right - slotInset - w / 2 : window.innerWidth - 130;
          const landY = consoleRect ? consoleRect.top - h * 0.75 : 80;
          return (
            <motion.div
              key="inserting-cart"
              className="fixed pointer-events-none z-[15]"
              style={{ left: 0, top: 0, width: w, height: h, perspective: 800 }}
              initial={{ x, y, rotateY: 0, scale: 1 }}
              animate={{
                x: [x, landX, landX],
                y: [y, landY, landY + h * 0.7],
                rotateY: [0, 360, 360],
                scale: [1, 0.8, 0.7],
              }}
              transition={{ duration: INSERT_MS / 1000, ease: 'easeInOut', times: [0, 0.6, 1] }}
            >
              <CartridgeFace
                title={insertingCartridge.title}
                icon={insertingCartridge.icon}
                color={insertingCartridge.color}
              />
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </main>
  );
}

function BootScreen({ cartridge }) {
  const isSecret = cartridge.id === 'secret';

  return (
    <div
      style={{ '--accent': cartridge.accent }}
      className="w-full h-full flex flex-col items-center justify-center gap-6 bg-screen text-center px-6"
    >
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="flex flex-col items-center gap-5"
      >
        <PixelIcon name={cartridge.icon} className="w-12 h-12 desk:w-16 desk:h-16 text-(--accent) drop-shadow-[4px_4px_0_rgba(0,0,0,0.6)]" />
        <div className="font-pixel text-base desk:text-2xl tracking-widest text-(--accent) glow-text">
          {isSecret ? '? ? ?' : cartridge.title.toUpperCase()}
        </div>
      </motion.div>

      {/* Block-by-block loading bar */}
      <div className="flex gap-1.5">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-2.5 h-3.5 desk:w-3.5 desk:h-5 bg-(--accent)"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 + i * 0.085, duration: 0.01 }}
          />
        ))}
      </div>

      <div className="font-pixel text-[8px] desk:text-[10px] text-zinc-500 tracking-wider">
        {isSecret ? 'CHEAT CODE ACTIVATED...' : 'NOW LOADING...'}
      </div>
    </div>
  );
}
