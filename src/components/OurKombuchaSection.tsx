import { useEffect, useState, useRef } from 'react';

const OurKombuchaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b transition-all duration-700"
    >
      {/* 🌤 Gradient Overlay Behind Content */}
<div
  className="absolute inset-0 z-[-1]"
  style={{
    background: `linear-gradient(
  to bottom,
  #FDF5E0 0%,
  #F2E0BC 50%,
  #EFD4A1 100%
)
`,
    backdropFilter: 'blur(2px)',
  }}
/>


      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className={`transform transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group rounded-lg overflow-hidden border border-white/30 bg-white/20">
              <img
                src="/2.png"
                alt="Premium Kombucha Bottles"
                className="w-full h-[600px] object-cover rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.05) brightness(1.03)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F4F2F20] to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`transform transition-opacity duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} space-y-8`}>
          <h2 className="font-brand text-5xl md:text-6xl text-[#9F1239] leading-tight">
  Our Kombucha
</h2>


            <div className="w-24 h-1 bg-white/50"></div>

            <p className="text-lg font-body text-[#690010] leading-relaxed font-light">

              Crafted in small batches using organic tea and wild botanicals, our kombucha is a symphony of flavor that awakens the senses. Each bottle captures the essence of untamed nature.
            </p>

            <p className="text-lg font-body text-[#690010] leading-relaxed font-light">

              Through ancient fermentation techniques and modern precision, we create a living beverage that nourishes both body and spirit.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 text-center">
              <div className="bg-white/20 border border-white/30 rounded-xl py-6">
              <div className="text-3xl font-bold text-[#EA6077] mb-2">100%</div>

                <div className="text-[#EA6077]/90">Organic</div>
              </div>
              <div className="bg-white/20 border border-white/30 rounded-xl py-6">
                <div className="text-3xl font-bold text-[#EA6077] mb-2">7</div>
                <div className="text-[#EA6077]/90">Days Fermented</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#EFD4A1"
            fillOpacity="1"
            d="M0,60L60,65C120,70,240,80,360,75C480,70,600,50,720,45C840,40,960,50,1080,60C1200,70,1320,80,1380,85L1440,90L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default OurKombuchaSection;
