'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ConsoleShell from '@/components/ConsoleShell';
import { CartridgeSelector } from '@/components/CartridgeSystem';
// Content components (to be created)
import HomeContent from '@/components/sections/HomeContent';
import AboutContent from '@/components/sections/AboutContent';
import JackalContent from '@/components/sections/JackalContent';
import ProjectsContent from '@/components/sections/ProjectsContent';
import ContactContent from '@/components/sections/ContactContent';
import AutomateMCAContent from '@/components/sections/AutomateMCAContent';

const CARTRIDGES = [
  { id: 'about', title: 'About Jack', colorClass: 'bg-console-red' },
  { id: 'jackal', title: 'Jackal Games', colorClass: 'bg-emerald-600' },
  { id: 'automatemca', title: 'Automate MCA', colorClass: 'bg-console-purple' },
  { id: 'projects', title: 'Websites', colorClass: 'bg-console-mid-gray' },
];

export default function Home() {
  const [isMobileMode, setIsMobileMode] = useState(false);
  const [activeCartridge, setActiveCartridge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [insertingCartridge, setInsertingCartridge] = useState(null);
  const [insertStart, setInsertStart] = useState({ x: 0, y: 0 });

  // Responsive layout check
  useEffect(() => {
    const checkMobile = () => setIsMobileMode(window.innerWidth < 850);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSelectCartridge = (cartridge, e) => {
    if (activeCartridge?.id === cartridge.id) return;
    if (insertingCartridge) return;

    // Get the clicked element's position for animation start
    const rect = e?.currentTarget?.getBoundingClientRect();
    if (rect) {
      setInsertStart({ x: rect.left + rect.width / 2 - 40, y: rect.top });
    }

    // Start insertion animation
    setInsertingCartridge(cartridge);

    // After animation completes, set active and boot
    setTimeout(() => {
      setIsLoading(true);
      setActiveCartridge(cartridge);
      setInsertingCartridge(null);

      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }, 1000);
  };

  const handleEject = () => {
    setActiveCartridge(null);
  };

  const handleSelectContact = () => {
    const cartridge = { id: 'contact', title: 'Contact', colorClass: 'bg-blue-600' };
    if (activeCartridge?.id === cartridge.id) return;
    setIsLoading(true);
    setActiveCartridge(cartridge);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  const currentContent = () => {
    if (!activeCartridge) return <HomeContent />;
    if (isLoading) return <BootScreen title={activeCartridge.title} />;

    switch (activeCartridge.id) {
      case 'about': return <AboutContent />;
      case 'jackal': return <JackalContent />;
      case 'projects': return <ProjectsContent />;
      case 'automatemca': return <AutomateMCAContent />;
      case 'contact': return <ContactContent />;
      default: return <HomeContent />;
    }
  };

  return (
    <main className="min-h-[100dvh] flex items-center justify-center p-2 sm:p-8 bg-zinc-950 overflow-hidden relative">

      {/* Background ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 -z-10"></div>

      <AnimatePresence>
        <motion.div
          layout
          className={`relative z-10 w-full flex items-center justify-center ${isMobileMode ? 'flex-col' : 'flex-row gap-6'}`}
        >
          {/* Main Console Frame */}
          <motion.div
            layoutId="console"
            className="z-20 transform-gpu"
            animate={{
              scale: 1,
              y: 0
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            <ConsoleShell
              isMobileMode={isMobileMode}
              activeCartridge={activeCartridge}
              onEject={handleEject}
              onSelectContact={handleSelectContact}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCartridge ? activeCartridge.id : 'home'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {currentContent()}
                </motion.div>
              </AnimatePresence>
            </ConsoleShell>

          </motion.div>

          {/* Cartridge Selection Tray */}
          <div
            className={isMobileMode ? "w-full max-w-4xl" : "flex-shrink-0"}
          >
            <CartridgeSelector
              items={CARTRIDGES}
              onSelect={handleSelectCartridge}
              activeCartridge={activeCartridge}
              insertingCartridge={insertingCartridge}
              vertical={!isMobileMode}
              small={isMobileMode}
            />
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Cartridge insertion animation - fixed overlay */}
      <AnimatePresence>
        {insertingCartridge && (() => {
          const consoleEl = document.getElementById('console-shell');
          const consoleRect = consoleEl?.getBoundingClientRect();
          // Always land at top-right of console, tucked behind
          const landX = consoleRect ? consoleRect.right - 110 : window.innerWidth - 130;
          const landY = consoleRect ? consoleRect.top - 50 : 80;
          return (
            <motion.div
              key="inserting-cart"
              className="fixed pointer-events-none z-[5]"
              style={{ perspective: 800, left: 0, top: 0, transformStyle: 'preserve-3d' }}
              initial={{
                x: insertStart.x,
                y: insertStart.y,
                opacity: 1,
                rotateY: 0,
                scale: 1,
              }}
              animate={{
                x: [insertStart.x, landX, landX],
                y: [insertStart.y, landY, landY + 50],
                rotateY: [0, 180, 180],
                scale: [1, 0.7, 0.5],
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <div className="relative w-20 h-28" style={{ transformStyle: 'preserve-3d' }}>
                {/* Front face */}
                <div className="absolute inset-0 bg-zinc-300 rounded-t-lg rounded-b-sm border-2 border-console-dark-gray shadow-lg flex items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                  <div className={`w-16 h-16 rounded border border-zinc-500 shadow-inner flex items-center justify-center p-1 text-center ${insertingCartridge.colorClass}`}>
                    <span className="font-pixel text-[8px] leading-tight text-white drop-shadow-[1px_1px_0px_rgba(0,0,0,0.8)]">
                      {insertingCartridge.title}
                    </span>
                  </div>
                </div>
                {/* Back face */}
                <div className="absolute inset-0 bg-zinc-400 rounded-t-lg rounded-b-sm border-2 border-console-dark-gray shadow-lg" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <div className="w-full h-full flex items-center justify-center opacity-30">
                    <div className="w-12 h-3 bg-zinc-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </main>
  );
}

function BootScreen({ title }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-console-screen-bg">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-console-magenta font-pixel text-center space-y-4"
      >
        <div className="text-xl tracking-widest drop-shadow-[0_0_10px_rgba(247,37,133,0.8)]">SYSTEM OS</div>
        <div className="text-[10px] text-zinc-400 mt-8">Loading {title}...</div>
      </motion.div>
    </div>
  );
}
