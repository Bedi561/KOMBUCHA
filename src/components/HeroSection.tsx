// import { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const flavorRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToFlavors = () => {
//     const flavorSection = document.getElementById('flavors');
//     if (flavorSection) {
//       flavorSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       className="relative h-screen overflow-hidden"

//     >
//       {/* Parallax Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center will-change-transform pointer-events-none z-[-1]"
//         style={{
//           backgroundImage: `url('/6.jpg')`,
//           backgroundAttachment: 'fixed',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           transform: `translateY(${scrollY * 0.4}px)`,
//           filter: 'contrast(1.08) brightness(1.03)',
//         }}
//       />



//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//         <div className="max-w-5xl mx-auto">
//         <h1 className="text-5xl md:text-8xl font-brand text-[#690010] drop-shadow-xl tracking-wide animate-fade-in">
//   Birdwatcher
// </h1>

// <p
//   className="text-lg md:text-2xl mt-4 font-body text-[#EA6077] tracking-widest animate-fade-in-up"
//   style={{ animationDelay: '0.5s' }}
// >
//   Sip the untamed.
// </p>


//           <motion.button
//             onClick={scrollToFlavors}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             whileHover={{
//               scale: 1.05,
//               y: -3,
//               backgroundColor: '#be123c',
//               color: '#fff',
//               boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
//             }}
//             whileTap={{ scale: 0.96 }}
//             className="mt-10 px-8 py-4 rounded-xl bg-[#690010] text-white font-medium tracking-wide transition-all duration-300 shadow-sm"
//           >
//             Discover Our Flavors
//           </motion.button>
//         </div>
//       </div>

//       {/* Gradient Fade-Out */}
//       <div className="absolute bottom-0 left-0 w-full h-96 z-10 pointer-events-none mask-fade-to-top">
//         <div className="w-full h-full bg-gradient-to-b from-transparent to-[#FDF5E0]"></div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import LiquidWave from './LiquidWave';
import ScrollWave from './ScrollWave';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), {
    stiffness: 100,
    damping: 30,
  });

  const textY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), {
    stiffness: 200,
    damping: 50,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFlavors = () => {
    const flavorSection = document.getElementById('flavors');
    if (flavorSection) {
      flavorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(to bottom, hsl(var(--brand-honey)) 0%, hsl(var(--brand-tan)) 80%)`,
        }}
      />

      <LiquidWave scrollY={scrollY} />

      {/* Floating Accent Bubbles (without blur or shadow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => {
          const colorVar =
            i % 2 === 0 ? '--brand-accent' : i % 3 === 0 ? '--brand-secondary' : '--brand-honey';
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 360],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 8 + i * 2,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: `hsl(var(${colorVar}))`,
                  transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
        style={{ y: textY }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.h1
            className="text-5xl md:text-8xl font-bold tracking-wide"
            style={{ color: `hsl(var(--brand-primary))` }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.25, 0, 1],
              type: 'spring',
              stiffness: 100,
            }}
          >
            <motion.span>Birdwatcher</motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-2xl mt-6 font-medium tracking-[0.2em]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="bg-gradient-to-r from-[hsl(var(--brand-secondary))] via-[hsl(var(--brand-accent))] to-[hsl(var(--brand-honey))] bg-[length:200%_100%] bg-clip-text text-transparent"
            >
              Sip the untamed.
            </motion.span>
          </motion.p>

          {/* CTA */}
          <motion.button
            onClick={scrollToFlavors}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: '0 20px 40px hsl(var(--brand-accent) / 0.25)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative mt-12 px-10 py-5 rounded-full text-white font-semibold tracking-wide overflow-hidden transition-all duration-500"
            style={{
              background: `linear-gradient(45deg, hsl(var(--brand-accent)), hsl(var(--brand-honey)))`,
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                background: `linear-gradient(45deg, hsl(var(--brand-honey)), hsl(var(--brand-accent)))`,
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Discover Our Flavors
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Wave Transition */}
      <ScrollWave />
    </section>
  );
};

export default HeroSection;
