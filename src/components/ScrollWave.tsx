import { motion, useTransform, useScroll } from 'framer-motion';

const ScrollWave = () => {
  const { scrollYProgress } = useScroll();
  
  const wave1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const wave2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const wave3 = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none z-20">
      {/* Wave Layer 1 */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-16"
        style={{ x: wave1 }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,120 Q300,60 600,90 T1200,80 L1200,120 Z"
            fill="hsl(var(--brand-cream))"
            fillOpacity="0.8"
            animate={{
              d: [
                "M0,120 Q300,60 600,90 T1200,80 L1200,120 Z",
                "M0,120 Q300,90 600,60 T1200,100 L1200,120 Z",
                "M0,120 Q300,80 600,70 T1200,90 L1200,120 Z",
                "M0,120 Q300,60 600,90 T1200,80 L1200,120 Z"
              ]
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity
            }}
          />
        </svg>
      </motion.div>

      {/* Wave Layer 2 */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-12"
        style={{ x: wave2 }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,120 Q400,70 800,95 T1200,85 L1200,120 Z"
            fill="hsl(var(--brand-cream))"
            fillOpacity="0.9"
            animate={{
              d: [
                "M0,120 Q400,70 800,95 T1200,85 L1200,120 Z",
                "M0,120 Q400,95 800,70 T1200,100 L1200,120 Z",
                "M0,120 Q400,85 800,80 T1200,90 L1200,120 Z",
                "M0,120 Q400,70 800,95 T1200,85 L1200,120 Z"
              ]
            }}
            transition={{
              duration: 3.5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.5
            }}
          />
        </svg>
      </motion.div>

      {/* Wave Layer 3 */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-8"
        style={{ x: wave3 }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,120 Q200,80 400,90 Q600,100 800,85 Q1000,70 1200,95 L1200,120 Z"
            fill="hsl(var(--brand-cream))"
            animate={{
              d: [
                "M0,120 Q200,80 400,90 Q600,100 800,85 Q1000,70 1200,95 L1200,120 Z",
                "M0,120 Q200,100 400,70 Q600,80 800,105 Q1000,90 1200,75 L1200,120 Z",
                "M0,120 Q200,90 400,85 Q600,95 800,80 Q1000,105 1200,85 L1200,120 Z",
                "M0,120 Q200,80 400,90 Q600,100 800,85 Q1000,70 1200,95 L1200,120 Z"
              ]
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ScrollWave;