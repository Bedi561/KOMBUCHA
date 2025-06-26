import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // TODO: Integrate toast or API logic
  };

  return (
    <footer
      className="relative py-24"
      style={{
        background: `linear-gradient(
          to top,
          #EFD4A1 0%,
          #FFD3A5 50%,
          #FF8F48 100%
        )`,
      }}
    >
      {/* Decorative Bird Silhouette */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 text-cream-50 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M20,50 C20,30 35,20 50,25 C65,20 80,30 80,50 C75,60 65,65 50,60 C35,65 25,60 20,50 Z"
            fill="currentColor"
          />
          <path
            d="M45,45 C45,42 47,40 50,40 C53,40 55,42 55,45 C55,48 53,50 50,50 C47,50 45,48 45,45 Z"
            fill="#2f4f2f"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <motion.h3
          className="text-4xl md:text-5xl font-brand text-[#690010] mb-6"
          style={{ fontFamily: 'Ortland, serif' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the Flock
        </motion.h3>

        <motion.p
          className="text-lg text-[#9F1239] font-body mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Be the first to discover new flavors and exclusive brewing insights.
        </motion.p>

        <motion.form
          onSubmit={handleNewsletterSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-6 py-4 rounded-lg bg-[#ffffff18] border border-[#ffffff30] text-[#690010] placeholder-[#9F1239] font-body focus:outline-none focus:border-[#FFD3A5] backdrop-blur-md shadow-inner"
            required
          />
          <button
            type="submit"
            className="px-6 py-4 bg-[#FFD3A5] text-[#690010] font-semibold rounded-lg hover:bg-[#ffc98c] transition-colors duration-300 shadow-md"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </footer>
  );
};

export default Footer;
