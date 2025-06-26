import { useEffect, useState, useRef } from 'react';

const benefits = [
  {
    icon: "🌱",
    title: "Living Probiotics",
    description: "Billions of beneficial bacteria support digestive wellness and immune function.",
  },
  {
    icon: "⚡",
    title: "Natural Energy",
    description: "Gentle caffeine and B-vitamins provide sustained energy without the crash.",
  },
  {
    icon: "🛡️",
    title: "Antioxidant Rich",
    description: "Tea polyphenols and botanical compounds fight oxidative stress naturally.",
  },
  {
    icon: "🧘",
    title: "Mind & Body",
    description: "Adaptogens and amino acids promote mental clarity and stress resilience.",
  },
];

const WhyKombuchaSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24"
      style={{
        background: `linear-gradient(
          to top,
          #FF8F48 0%,
          #FF7A2F 50%,
          #E26519 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-brand text-5xl md:text-6xl font-bold text-[#690010] mb-6">
            Why Kombucha?
          </h2>
          <div className="w-24 h-1 bg-lemon mx-auto mb-8"></div>
          <p className="text-xl text-[#9F1239] font-body max-w-3xl mx-auto leading-relaxed font-light">
            More than just a beverage, kombucha is a bridge between ancient wisdom and modern wellness. 
            Each sip delivers nature's most powerful compounds in perfect harmony.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`text-center group transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-[#F9E4DC]/40 border border-[#9F1239]/20 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="font-brand text-xl font-bold text-[#690010] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#9F1239] font-body leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`transition-all duration-1000 rounded-2xl p-12 bg-[#F9E4DC]/40 border border-[#9F1239]/20 backdrop-blur-md shadow-2xl ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl font-bold text-[#690010] mb-2">1B+</div>
              <div className="text-[#9F1239] font-medium">Live Cultures</div>
              <div className="text-sm text-[#9F1239]/80 mt-1">Per Bottle</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#690010] mb-2">12</div>
              <div className="text-[#9F1239] font-medium">Essential Vitamins</div>
              <div className="text-sm text-[#9F1239]/80 mt-1">& Minerals</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#690010] mb-2">0</div>
              <div className="text-[#9F1239] font-medium">Artificial Additives</div>
              <div className="text-sm text-[#9F1239]/80 mt-1">Always Pure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKombuchaSection;
