// 'use client';

// import { useEffect, useState, useRef } from 'react';

// const benefits = [
//   {
//     icon: "🌱",
//     title: "Living Probiotics",
//     description: "Billions of beneficial bacteria support digestive wellness and immune function.",
//   },
//   {
//     icon: "⚡",
//     title: "Natural Energy",
//     description: "Gentle caffeine and B-vitamins provide sustained energy without the crash.",
//   },
//   {
//     icon: "🛡️",
//     title: "Antioxidant Rich",
//     description: "Tea polyphenols and botanical compounds fight oxidative stress naturally.",
//   },
//   {
//     icon: "🧘",
//     title: "Mind & Body",
//     description: "Adaptogens and amino acids promote mental clarity and stress resilience.",
//   },
// ];

// const WhyKombuchaSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-24"
//       style={{
//         background: `linear-gradient(
//           to top,
//           #FF9B4A 0%,
//           #FF7A2F 50%,
//           #E25A1F 100%
//         )`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//           <h2 className="font-brand text-5xl md:text-6xl font-bold text-[#5E0B15] mb-6">
//             Why Kombucha?
//           </h2>
//           <div className="w-24 h-1 bg-[#FFD9A0] mx-auto mb-8"></div>
//           <p className="text-xl text-[#7A1A2C] font-body max-w-3xl mx-auto leading-relaxed font-light">
//             More than just a beverage, kombucha is a bridge between ancient wisdom and modern wellness. 
//             Each sip delivers nature's most powerful compounds in perfect harmony.
//           </p>
//         </div>

//         {/* Benefits Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           {benefits.map((benefit, index) => (
//             <div
//               key={benefit.title}
//               className={`text-center group transform transition-all duration-700 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}
//               style={{ transitionDelay: `${index * 0.1}s` }}
//             >
//               <div className="bg-[#FFF3EA]/60 border border-[#7A1A2C]/15 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
//                 <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="font-brand text-xl font-bold text-[#5E0B15] mb-4">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-[#7A1A2C] font-body leading-relaxed font-light">
//                   {benefit.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div
//           className={`transition-all duration-1000 rounded-2xl p-12 bg-[#FFF3EA]/60 border border-[#7A1A2C]/15 backdrop-blur-md shadow-2xl ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//         >
//           <div className="grid md:grid-cols-3 gap-12 text-center">
//             <div>
//               <div className="text-4xl font-bold text-[#5E0B15] mb-2">1B+</div>
//               <div className="text-[#7A1A2C] font-medium">Live Cultures</div>
//               <div className="text-sm text-[#7A1A2C]/80 mt-1">Per Bottle</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-[#5E0B15] mb-2">12</div>
//               <div className="text-[#7A1A2C] font-medium">Essential Vitamins</div>
//               <div className="text-sm text-[#7A1A2C]/80 mt-1">& Minerals</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-[#5E0B15] mb-2">0</div>
//               <div className="text-[#7A1A2C] font-medium">Artificial Additives</div>
//               <div className="text-sm text-[#7A1A2C]/80 mt-1">Always Pure</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyKombuchaSection;
'use client';

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
          hsl(var(--brand-accent) / 0.6) 0%,
          hsl(var(--brand-secondary) / 0.4) 50%,
          hsl(var(--brand-primary) / 0.3) 100%
        )`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-brand text-5xl md:text-6xl font-bold text-[hsl(var(--brand-forest))] mb-6">
            Why Kombucha?
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--brand-primary))] mx-auto mb-8"></div>
          <p className="text-xl text-[hsl(var(--brand-shadow))] font-body max-w-3xl mx-auto leading-relaxed font-light">
            More than just a beverage, kombucha is a bridge between ancient wisdom and modern wellness. Each sip delivers nature's most powerful compounds in perfect harmony.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group text-center p-8 rounded-3xl transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, hsl(var(--brand-cream)), hsl(var(--brand-accent) / 0.8))`,
                backdropFilter: 'blur(10px)',
                border: '1px solid hsl(var(--brand-primary) / 0.2)',
              }}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[hsl(var(--brand-forest))] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-[hsl(var(--brand-shadow))] font-body leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ background: `hsl(var(--brand-primary))` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKombuchaSection;