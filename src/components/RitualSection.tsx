'use client';

import { useEffect, useState, useRef } from 'react';

const ritualSteps = [
  {
    step: "01",
    title: "Wild Harvest",
    description: "We source organic tea leaves and botanicals from sustainable farms, respecting the earth's rhythms."
  },
  {
    step: "02",
    title: "Ancient Fermentation",
    description: "Our SCOBY cultures transform tea into living kombucha over seven careful days of fermentation."
  },
  {
    step: "03",
    title: "Botanical Infusion",
    description: "Each flavor is infused with hand-selected herbs, fruits, and spices at the perfect moment."
  },
  {
    step: "04",
    title: "Patient Maturation",
    description: "Time allows flavors to marry and develop complexity, creating our signature taste profile."
  }
];

const RitualSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24"
      style={{
        background: `linear-gradient(
          to bottom,
          #E26519 0%,
          #9C4221 50%,
          #5F2C1D 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-brand text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#FFECDC]">
              Our Ritual
            </h2>
            <div className="w-24 h-1 bg-[#FFD29C] mb-8"></div>
            <p className="text-xl text-[#FBD5B3] font-body leading-relaxed mb-8">
              Like patient birdwatchers waiting for that perfect moment of discovery, we craft our kombucha with time, attention, and endless curiosity.
            </p>
            <p className="text-xl text-[#FBD5B3] font-body leading-relaxed mb-8">
              Our brewing process mirrors the gentle rhythms of nature — slow fermentation, organic ingredients, and the kind of care that comes from truly watching and waiting.
            </p>
            <p className="text-xl text-[#FBD5B3] font-body leading-relaxed mb-8">
              Each bottle captures the essence of a morning spent in quiet observation, where the smallest details create the most beautiful moments.
            </p>
          </div>

          {/* Image */}
          <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://i.pinimg.com/736x/84/cf/d3/84cfd368858261b1e0cdf405bb273c00.jpg"
                alt="Kombucha Fermentation Process"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F60] to-transparent rounded-lg" />

              {/* Floating badge */}
              <div className="absolute top-8 right-8 px-6 py-4 rounded-lg backdrop-blur-sm bg-[#FFECDC]/70 shadow-lg animate-[float_3s_ease-in-out_infinite]">
                <div className="text-2xl font-bold text-[#9C4221]">7</div>
                <div className="text-sm text-[#7C341A]">Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#5F2C1D"
            fillOpacity="1"
            d="M0,60L60,65C120,70,240,80,360,75C480,70,600,50,720,45C840,40,960,50,1080,60C1200,70,1320,80,1380,85L1440,90L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default RitualSection;
