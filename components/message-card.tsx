'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Heart } from 'lucide-react';


export default function MessageCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center p-4 py-20 relative overflow-hidden">


      <div className="relative z-10 w-full max-w-lg">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="closed"
              onClick={() => setIsOpen(true)}
              className="w-full bg-white/60 backdrop-blur-md border border-white/80 p-16 rounded-[2rem] shadow-xl flex flex-col items-center gap-8 group hover:bg-white/80 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 bg-rose-400 blur-2xl opacity-20" />
                <Heart className="w-24 h-24 text-rose-500 fill-rose-500 drop-shadow-md" />
              </motion.div>
              <span className="font-display text-3xl text-rose-800 tracking-wide">A Note for You</span>
              <span className="font-sans text-sm text-rose-600/70 uppercase tracking-widest">Tap to read</span>
            </motion.button>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white/95 backdrop-blur-xl border border-white/80 p-12 rounded-[2rem] shadow-2xl relative overflow-hidden"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-rose-300 hover:text-rose-500 transition-colors p-2"
              >
                ✕
              </button>
              
              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                 <Heart className="w-64 h-64 text-rose-500 transform -rotate-12" />
              </div>

              <h2 className="font-script text-5xl text-rose-700 mb-8 leading-tight">My Dearest Love,</h2>
              
              <div className="font-display text-rose-900/80 text-xl leading-relaxed space-y-6">
                <p>
                  Like a rose, your presence adds color and fragrance to the garden of my life.
                  Every petal tells a story of the love I hold for you.
                </p>
                <p>
                  Thank you for being my beautiful rose, ensuring my days are always bright and filled with affection.
                </p>
                <div className="pt-8 mt-4 border-t border-rose-100 flex flex-col items-center">
                  <p className="font-script text-4xl text-rose-600">
                    Happy Rose Day 🌹
                  </p>
                  <p className="text-sm text-rose-400 font-sans mt-2 tracking-widest uppercase">Forever Yours</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
