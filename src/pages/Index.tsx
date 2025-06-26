
import HeroSection from '@/components/HeroSection';
import OurKombuchaSection from '@/components/OurKombuchaSection';
import FlavorsSection from '@/components/FlavorsSection';
import RitualSection from '@/components/RitualSection';
import WhyKombuchaSection from '@/components/WhyKombuchaSection';
import Footer from '@/components/Footer';
import StickyShopButton from '@/components/StickyShopButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OurKombuchaSection />
      <FlavorsSection />
      <RitualSection />
      <WhyKombuchaSection />
      <Footer />
      <StickyShopButton />
    </div>
  );
};

export default Index;
