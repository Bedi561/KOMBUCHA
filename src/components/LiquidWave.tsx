import { motion } from 'framer-motion';

interface LiquidWaveProps {
  scrollY: number;
  className?: string;
}

const LiquidWave = ({ scrollY, className = "" }: LiquidWaveProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated liquid blobs */}
      <motion.div
        className="absolute w-[120%] h-[120%] opacity-20"
        style={{
          background: 'var(--gradient-liquid)',
          transform: `translate(-10%, ${scrollY * 0.1}px)`,
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "50% 60% 70% 30% / 50% 60% 30% 70%",
            "30% 60% 70% 40% / 50% 40% 60% 70%",
            "70% 30% 40% 60% / 40% 70% 60% 30%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      
      {/* Secondary wave layer */}
      <motion.div
        className="absolute w-[100%] h-[100%] opacity-15 top-1/4"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--brand-accent) / 0.6), hsl(var(--brand-secondary) / 0.4))',
          transform: `translate(10%, ${scrollY * -0.05}px)`,
        }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 70% 60% 30%",
            "70% 30% 40% 60% / 70% 40% 30% 60%",
            "30% 70% 60% 40% / 60% 30% 70% 40%",
            "60% 40% 30% 70% / 30% 60% 40% 70%",
            "40% 60% 70% 30% / 40% 70% 60% 30%"
          ]
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 1
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-brand-secondary/30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            transform: `translateY(${scrollY * (0.02 + i * 0.01)}px)`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + i,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
};

export default LiquidWave;