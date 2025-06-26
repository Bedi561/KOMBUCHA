
import { useState, useEffect } from 'react';

const StickyShopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShopClick = () => {
    console.log('Navigate to shop');
    // Add navigation logic here
  };

  return (
    <button
      onClick={handleShopClick}
      className={`fixed bottom-8 right-8 z-50 px-6 py-3 bg-amber-500 text-forest-900 font-medium rounded-full shadow-lg hover:bg-amber-400 hover:shadow-xl transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <div className="flex items-center space-x-2">
        <span>Shop Now</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </div>
    </button>
  );
};

export default StickyShopButton;
