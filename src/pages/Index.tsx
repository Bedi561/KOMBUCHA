
// import HeroSection from '@/components/HeroSection';
// import OurKombuchaSection from '@/components/OurKombuchaSection';
// import FlavorsSection from '@/components/FlavorsSection';
// import RitualSection from '@/components/RitualSection';
// import WhyKombuchaSection from '@/components/WhyKombuchaSection';
// import Footer from '@/components/Footer';
// import StickyShopButton from '@/components/StickyShopButton';

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <HeroSection />
//       <OurKombuchaSection />
//       <FlavorsSection />
//       <RitualSection />
//       <WhyKombuchaSection />
//       <Footer />
//       <StickyShopButton />
//     </div>
//   );
// };

// export default Index;
'use client'

import { useState } from 'react';
import { motion } from "framer-motion";

import HeroSection from "@/components/HeroSection";
import OurKombuchaSection from "@/components/OurKombuchaSection";
import FlavorsSection from "@/components/FlavorsSection";
import RitualSection from "@/components/RitualSection";
import WhyKombuchaSection from "@/components/WhyKombuchaSection";
import Footer from "@/components/Footer";
import StickyShopButton from "@/components/StickyShopButton";

const Index = () => {
   const [showHero, setShowHero] = useState(true);
  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <OurKombuchaSection />
      <FlavorsSection />
      <RitualSection />
      <WhyKombuchaSection />
      <Footer />
      <StickyShopButton />
    </motion.div>
  );
};

export default Index;
