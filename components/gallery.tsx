'use client';

import { motion } from 'framer-motion';

export default function Gallery() {
  const photos = [
    { id: 1, color: 'bg-rose-200' },
    { id: 2, color: 'bg-rose-300' },
    { id: 3, color: 'bg-rose-400' },
    { id: 4, color: 'bg-rose-200' },
    { id: 5, color: 'bg-rose-300' },
    { id: 6, color: 'bg-rose-400' },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display text-center text-rose-800 mb-12">
          Our Beautiful Moments
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`aspect-square rounded-2xl overflow-hidden shadow-lg ${photo.color} relative group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 flex items-center justify-center text-rose-900/20 font-display text-xl group-hover:bg-rose-500/10 transition-colors">
                Photo {photo.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
