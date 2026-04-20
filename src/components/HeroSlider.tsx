import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HeroSlider: React.FC = () => {
  // Using the uploaded image and some placeholders for the effect
  const slides = [
    { id: 1, url: '//z7746465426269_8513dfa78885acf8887221d034dc5a82.jpg', title: 'Gunslingers Flag Football Club.' },
    { id: 2, url: 'https://picsum.photos/seed/guns-hero-2/1920/1080', title: 'BORN TO WIN.' },
    { id: 3, url: 'https://picsum.photos/seed/guns-hero-3/1920/1080', title: 'ELITE PERFORMANCE.' },
    { id: 4, url: 'https://picsum.photos/seed/guns-hero-4/1920/1080', title: 'JOIN THE SQUAD.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1, rotateY: 5, translateZ: -50 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, translateZ: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotateY: -5, translateZ: -50 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
          style={{ perspective: '1200px' }}
        >
          <img
            src={slides[currentIndex].url}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-100 brightness-110 contrast-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-left md:text-center mt-20">
        <AnimatePresence mode='wait'>
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] mb-8">
              {slides[currentIndex].title.split('OF').length > 1 ? (
                <>
                  {slides[currentIndex].title.split('OF')[0]} OF <br /> 
                  <span className="text-primary italic font-black">{slides[currentIndex].title.split('OF')[1]}</span>
                </>
              ) : (
                slides[currentIndex].title
              )}
            </h1>
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <a 
            href="#team-section"
            className="inline-block rounded-none border-2 border-white px-10 py-4 font-bold tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all bg-transparent text-white no-underline"
          >
            VIEW TEAM
          </a>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button onClick={prevSlide} className="p-2 border border-white/20 hover:border-primary transition-all text-white/50 hover:text-white">
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-[2px] transition-all duration-500 ${i === currentIndex ? 'w-12 bg-primary' : 'w-6 bg-white/20'}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 border border-white/20 hover:border-primary transition-all text-white/50 hover:text-white">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};
