import { forwardRef, useEffect, useState } from 'react';

const flavors = [
  {
    name: "Amber Flight",
    description: "Golden turmeric and ginger with a whisper of black pepper",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    color: "from-[hsl(var(--brand-accent))] to-[hsl(var(--brand-honey))]"
  },
  {
    name: "Citrus Nest",
    description: "Bright lemon and orange with fresh thyme and elderflower",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    color: "from-[hsl(var(--brand-mint))] to-[hsl(var(--brand-accent))]"
  },
  {
    name: "Berry Canopy",
    description: "Wild blueberries and blackberries with lavender and mint",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    color: "from-[hsl(var(--brand-secondary))] to-[hsl(var(--brand-primary))]"
  }
];

const FlavorsSection = forwardRef<HTMLElement>((props, ref) => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }, index * 200);
        }
      });
    }, { threshold: 0.2 });

    const cards = document.querySelectorAll('.flavor-card');
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="flavors"
      ref={ref}
      className="relative py-24"
      style={{
        background: `linear-gradient(to bottom, 
          hsl(var(--brand-cream)) 0%, 
          hsl(var(--brand-accent) / 0.2) 30%, 
          hsl(var(--brand-honey) / 0.3) 70%, 
          hsl(var(--brand-honey) / 0.4) 100%
        )`
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-brand mb-4 tracking-tight font-bold"
            style={{ color: `hsl(var(--brand-primary))` }}
          >
            Wild Flavors
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-8 rounded-full shadow-md"
            style={{ backgroundColor: `hsl(var(--brand-accent))` }}
          ></div>
          <p 
            className="text-xl font-body max-w-2xl mx-auto leading-relaxed font-light"
            style={{ color: `hsl(var(--brand-primary) / 0.85)` }}
          >
            Three distinct expressions of nature's bounty, each carefully crafted to transport you to untamed landscapes.
          </p>
        </div>

        {/* Flavor Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <div
              key={flavor.name}
              className={`flavor-card scroll-reveal transform transition-all duration-700 ease-in-out ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } group`}
            >
              <div 
                className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 backdrop-blur-md"
                style={{
                  background: `hsl(var(--brand-cream) / 0.8)`,
                  border: `1px solid hsl(var(--brand-mint) / 0.3)`,
                  boxShadow: `0 10px 30px hsl(var(--brand-shadow) / 0.1)`
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <img
                    src={flavor.image}
                    alt={flavor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${flavor.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 
                    className="text-2xl font-brand mb-3 font-semibold"
                    style={{ color: `hsl(var(--brand-primary))` }}
                  >
                    {flavor.name}
                  </h3>
                  <p 
                    className="leading-relaxed font-light mb-6"
                    style={{ color: `hsl(var(--brand-primary) / 0.8)` }}
                  >
                    {flavor.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span 
                      className="font-medium"
                      style={{ color: `hsl(var(--brand-secondary))` }}
                    >
                      Premium Blend
                    </span>
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `hsl(var(--brand-mint) / 0.3)`,
                        border: `1px solid hsl(var(--brand-accent) / 0.5)`
                      }}
                    >
                      <svg
                        className="w-4 h-4 transition-colors duration-300"
                        style={{ 
                          color: `hsl(var(--brand-secondary))` 
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave with improved colors */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fillOpacity="0.8"
            d="M0,60L60,65C120,70,240,80,360,75C480,70,600,50,720,45C840,40,960,50,1080,60C1200,70,1320,80,1380,85L1440,90L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
            style={{ fill: `hsl(var(--brand-honey))` }}
          />
        </svg>
      </div>
    </section>
  );
});

export default FlavorsSection;