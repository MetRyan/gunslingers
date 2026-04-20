import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  { id: 1, url: 'https://picsum.photos/seed/guns-moments-1/800/800', size: 'large' },
  { id: 2, url: 'https://picsum.photos/seed/guns-moments-2/800/400', size: 'wide' },
  { id: 3, url: 'https://picsum.photos/seed/guns-moments-3/400/800', size: 'tall' },
  { id: 4, url: 'https://picsum.photos/seed/guns-moments-4/400/400', size: 'small' },
  { id: 5, url: 'https://picsum.photos/seed/guns-moments-5/400/400', size: 'small' },
  { id: 6, url: 'https://picsum.photos/seed/guns-moments-6/800/400', size: 'wide' },
  { id: 7, url: 'https://picsum.photos/seed/guns-moments-7/400/400', size: 'small' },
];

export const TeamMoments: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-primary font-bold text-xs tracking-[0.3em] mb-4 uppercase">Capture the Intensity</p>
          <h2 className="text-5xl md:text-7xl font-black italic uppercase">TEAM MOMENTS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group border border-white/5 
                ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${img.size === 'wide' ? 'md:col-span-2' : ''}
                ${img.size === 'tall' ? 'md:row-span-2' : ''}
              `}
            >
              <img
                src={img.url}
                alt={`Moment ${img.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute inset-0 border-2 border-primary scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
