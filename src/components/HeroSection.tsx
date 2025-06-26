import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const flavorRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFlavors = () => {
    const flavorSection = document.getElementById('flavors');
    if (flavorSection) {
      flavorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative h-screen overflow-hidden"

    >
      {/* Parallax Image */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform pointer-events-none z-[-1]"
        style={{
          backgroundImage: `url('/6.jpg')`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.4}px)`,
          filter: 'contrast(1.08) brightness(1.03)',
        }}
      />

      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-brand text-[#690010] drop-shadow-xl tracking-wide animate-fade-in">
  Birdwatcher
</h1>

<p
  className="text-lg md:text-2xl mt-4 font-body text-[#EA6077] tracking-widest animate-fade-in-up"
  style={{ animationDelay: '0.5s' }}
>
  Sip the untamed.
</p>


          <motion.button
            onClick={scrollToFlavors}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{
              scale: 1.05,
              y: -3,
              backgroundColor: '#be123c',
              color: '#fff',
              boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-10 px-8 py-4 rounded-xl bg-[#690010] text-white font-medium tracking-wide transition-all duration-300 shadow-sm"
          >
            Discover Our Flavors
          </motion.button>
        </div>
      </div>

      {/* Gradient Fade-Out */}
      <div className="absolute bottom-0 left-0 w-full h-96 z-10 pointer-events-none mask-fade-to-top">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-[#FDF5E0]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
