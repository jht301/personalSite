'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

// Anti-scrape: number is split and only assembled at runtime via user interaction
const _p = ['\x39', '\x31', '\x37'];
const _m = ['\x37', '\x35', '\x37'];
const _s = ['\x34', '\x35', '\x31', '\x34'];

export default function SecretContent() {
  const [revealed, setRevealed] = useState(false);
  const [line, setLine] = useState('');

  const getNum = useCallback(() => {
    return _p.join('') + _m.join('') + _s.join('');
  }, []);

  const formatted = useCallback(() => {
    const n = getNum();
    return n.slice(0, 3) + '-' + n.slice(3, 6) + '-' + n.slice(6);
  }, [getNum]);

  // Typewriter effect for the "decrypting" line
  useEffect(() => {
    const text = '> ACCESS GRANTED. DECRYPTING DIRECT LINE...';
    let i = 0;
    const interval = setInterval(() => {
      setLine(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setRevealed(true), 400);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-black overflow-hidden relative">
      {/* Scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)',
        }}
      />

      {/* CRT flicker */}
      <motion.div
        className="absolute inset-0 bg-green-500/5 pointer-events-none z-10"
        animate={{ opacity: [0, 0.08, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
      />

      <div className="relative z-20 text-center space-y-6 max-w-md">
        {/* Glitch title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
        >
          <motion.h2
            className="font-pixel text-green-400 text-lg sm:text-xl tracking-wider"
            animate={{
              textShadow: [
                '0 0 10px rgba(0,255,0,0.8)',
                '0 0 20px rgba(0,255,0,1)',
                '0 0 10px rgba(0,255,0,0.8)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SECRET UNLOCKED
          </motion.h2>
        </motion.div>

        {/* Stars / sparkle decoration */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.span
              key={i}
              className="text-yellow-400 font-pixel text-xs"
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            >
              *
            </motion.span>
          ))}
        </motion.div>

        {/* Terminal typewriter */}
        <div className="bg-black/80 border border-green-500/30 rounded p-4 text-left">
          <p className="font-mono text-sm text-green-400 whitespace-pre-wrap">
            {line}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              _
            </motion.span>
          </p>
        </div>

        {/* Phone number reveal */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="space-y-4"
          >
            <a
              href={`tel:+1${getNum()}`}
              className="inline-flex items-center space-x-3 bg-green-500/20 border border-green-400/50 rounded-lg px-6 py-4 hover:bg-green-500/30 transition-colors group"
            >
              <div className="bg-green-500 p-2 rounded-full text-black">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-pixel text-sm text-green-400 group-hover:text-green-300">
                {formatted()}
              </span>
            </a>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-pixel text-[8px] text-green-500/40"
            >
              CALL OR TEXT
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
