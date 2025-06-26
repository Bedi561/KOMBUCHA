import { forwardRef, useEffect, useState } from 'react';

const flavors = [
  {
    name: "Amber Flight",
    description: "Golden turmeric and ginger with a whisper of black pepper",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600&q=80",
    color: "from-amber-400 to-amber-600"
  },
  {
    name: "Citrus Nest",
    description: "Bright lemon and orange with fresh thyme and elderflower",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Berry Canopy",
    description: "Wild blueberries and blackberries with lavender and mint",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-indigo-600"
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
      background: `linear-gradient(
  to bottom,
  #EFD4A1 0%,
  #FFD3A5 50%,     /* peach-orange */
  #FF8F48 100%     /* deep orange */
)
`
    }}
    
  >
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-brand text-[#9F1239] mb-4 tracking-tight">

          Wild Flavors
        </h2>
        <div className="w-24 h-1 bg-lemon mx-auto mb-8 rounded-full shadow-sm"></div>
        <p className="text-xl font-body text-[#690010] max-w-2xl mx-auto leading-relaxed font-light">

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
            <div className="relative overflow-hidden rounded-2xl bg-white/30 shadow-xl hover:shadow-2xl hover:scale-[1.015] transition-all duration-500 border border-white/20 backdrop-blur-md">
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
              <h3 className="text-2xl font-brand text-[#9F1239] mb-3">

                  {flavor.name}
                </h3>
                <p className="text-forest-600 leading-relaxed font-light mb-6">
                  {flavor.description}
                </p>
  
                <div className="flex items-center justify-between">
                  <span className="text-forest-700 font-medium">Premium Blend</span>
                  <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center group-hover:bg-lemon transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-forest-700 group-hover:text-white transition-colors duration-300"
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
  
    {/* Bottom Wave flowing into next section */}
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
      <svg
        className="relative block w-full h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#FF8F48"
          fillOpacity="1"
          d="M0,60L60,65C120,70,240,80,360,75C480,70,600,50,720,45C840,40,960,50,1080,60C1200,70,1320,80,1380,85L1440,90L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
        />
      </svg>
    </div>
  </section>
  
  );
});

export default FlavorsSection;