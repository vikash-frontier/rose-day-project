'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    const petalCount = 15;
    const newPetals = Array(petalCount).fill(0).map((_, i) => i);
    setPetals(newPetals);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
      {/* Vini's Photo Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/vini.jpeg" 
          alt="My Beautiful Vini" 
          fill
          className="object-cover object-center opacity-90"
          priority
          quality={100}
        />
        {/* Cinematic Vignette & Color Grade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay" />
      </div>
      
      {/* Falling Petals Animation - Slower & More Gentle */}
      {petals.map((i) => (
        <motion.div
          key={i}
          className="absolute z-10 pointer-events-none select-none"
          initial={{
            y: -100,
            x: Math.random() * 100 + "%",
            rotate: Math.random() * 360,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: `calc(${Math.random() * 100}% + ${Math.random() * 200 - 100}px)`,
            rotate: Math.random() * 720,
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 20, // Very slow fall
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
        >
          <Image 
            src="/petal.svg" 
            alt="Rose Petal" 
            width={30} 
            height={30} 
            className="w-6 h-6 md:w-10 md:h-10 opacity-80 drop-shadow-lg"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div 
        className="z-20 text-center px-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <motion.h1 
          className="font-script text-[40px] md:text-[5rem] text-rose-100 mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          My Love💜
        </motion.h1>
        
        <motion.p 
          className="font-display text-lg md:text-3xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          "In a garden of roses, you are my only flower."
        </motion.p>
      </motion.div>

      {/* clear Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 z-30 flex flex-col items-center gap-2 cursor-pointer text-white/80 hover:text-white transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }}
      >
        <span className="text-sm font-light tracking-[0.2em] uppercase drop-shadow-md">
          Our Story
        </span>
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="drop-shadow-md"
            >
                <path d="m6 9 6 6 6-6"/>
            </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
