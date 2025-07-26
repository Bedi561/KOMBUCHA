'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const OurKombuchaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const waveRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!waveRef.current) return;

    const wave1 = waveRef.current.querySelector('#wave1');
    const wave2 = waveRef.current.querySelector('#wave2');

    if (wave1 && wave2) {
      gsap.to(wave1, {
        attr: {
          d: "M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
        },
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });

      gsap.to(wave2, {
        attr: {
          d: "M0,96L48,106.7C96,117,192,139,288,144C384,149,480,139,576,128C672,117,768,107,864,112C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L0,320Z"
        },
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 transition-all duration-700 z-10"
      style={{
        background: `
          linear-gradient(
            to bottom,
            hsl(var(--brand-cream)) 0%,
            hsl(var(--brand-secondary) / 0.1) 40%,
            hsl(var(--brand-accent) / 0.15) 100%
          )
        `
      }}
    >
      {/* Optional: Soft radial glow */}
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backdropFilter: 'blur(2px)',
          background: `radial-gradient(circle at 50% 30%, hsl(var(--brand-honey) / 0.1), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className={`transform transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm"
              style={{
                border: `1px solid hsl(var(--brand-mint) / 0.4)`,
                boxShadow: `0 20px 40px hsl(var(--brand-shadow) / 0.1)`
              }}
            >
              <img
                src="/2.png"
                alt="Premium Kombucha Bottles"
                className="w-full h-[600px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                style={{ filter: 'contrast(1.05) brightness(1.03) saturate(1.1)' }}
              />
              <div className="absolute inset-0 rounded-lg"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, hsl(var(--brand-secondary) / 0.1) 100%)`
                }}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className={`transform transition-opacity duration-1000 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} space-y-8`}>
            <h2 className="font-brand text-5xl md:text-6xl font-bold leading-tight"
              style={{ color: `hsl(var(--brand-primary))` }}
            >
              Our Kombucha
            </h2>

            <div className="w-24 h-1 rounded-full" style={{ backgroundColor: `hsl(var(--brand-accent))` }} />

            <p className="text-lg font-body font-light leading-relaxed"
              style={{ color: `hsl(var(--brand-primary) / 0.85)` }}
            >
              Crafted in small batches using organic tea and wild botanicals, our kombucha is a symphony of flavor that awakens the senses. Each bottle captures the essence of untamed nature.
            </p>

            <p className="text-lg font-body font-light leading-relaxed"
              style={{ color: `hsl(var(--brand-primary) / 0.85)` }}
            >
              Through ancient fermentation techniques and modern precision, we create a living beverage that nourishes both body and spirit.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8 text-center">
              {[
                { label: 'Organic', value: '100%' },
                { label: 'Days Fermented', value: '7' }
              ].map((item, idx) => (
                <div key={idx}
                  className="rounded-xl py-6 backdrop-blur-sm border transition-all duration-300 hover:scale-105"
                  style={{
                    background: `hsl(var(--brand-cream) / 0.6)`,
                    border: `1px solid hsl(var(--brand-mint) / 0.4)`,
                    boxShadow: `0 8px 20px hsl(var(--brand-shadow) / 0.05)`
                  }}
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: `hsl(var(--brand-secondary))` }}>
                    {item.value}
                  </div>
                  <div style={{ color: `hsl(var(--brand-primary) / 0.8)` }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Morphing Waves */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
        <svg
          ref={waveRef}
          className="w-full h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            id="wave1"
            fillOpacity="0.4"
            d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z"
            style={{ fill: `hsl(var(--brand-secondary))` }}
          />
          <path
            id="wave2"
            fillOpacity="0.6"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,58.7C960,64,1056,96,1152,101.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L0,320Z"
            style={{ fill: `hsl(var(--brand-honey))` }}
          />
        </svg>
      </div>
    </section>
  );
};

export default OurKombuchaSection;
