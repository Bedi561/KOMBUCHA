import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        body: ['Cormorant Garamond', 'sans-serif'],
        script: ['"Pacifico"', 'cursive'],
        brand: ['BirdwatcherFont', 'cursive'],
        heading: ['Cinzel', 'serif'],
      },
      colors: {
        // Brand Colors
        lemon: '#FEEF9B',
        'amber-tea': '#EED8A1',
        basil: '#A8D29F',
        raspberry: '#D74C7B',
        mint: '#D3F3D3',
        cream: {
          50: '#FFF9F0',
          100: '#F7EBD1',
          200: '#f5f2ee',
          300: '#eae5dd',
        },
        forest: {
          700: '#2F4F2F'
        },
        amber: {
          50: '#fefbf3',
          100: '#fef3c7',
          400: '#f59e0b',
          500: '#d4a574',
          600: '#b8956a',
          700: '#92734d',
        },
        sage: {
          50: '#f8faf8',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#a8c8a8',
          400: '#7ba87b',
          500: '#5a8a5a',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        brand: {
          primary: 'hsl(var(--brand-primary))',
          secondary: 'hsl(var(--brand-secondary))',
          cream: 'hsl(var(--brand-cream))',
          accent: 'hsl(var(--brand-accent))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'parallax': {
          '0%': {
            transform: 'translateY(0px)'
          },
          '100%': {
            transform: 'translateY(-50px)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'liquid-wave': {
          '0%, 100%': {
            transform: 'translateX(-50%) translateY(0) rotate(0deg) scale(1)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
          },
          '25%': {
            transform: 'translateX(-50%) translateY(-10px) rotate(5deg) scale(1.05)',
            borderRadius: '50% 60% 70% 30% / 50% 60% 30% 70%'
          },
          '50%': {
            transform: 'translateX(-50%) translateY(10px) rotate(-3deg) scale(0.98)',
            borderRadius: '30% 60% 70% 40% / 50% 40% 60% 70%'
          },
          '75%': {
            transform: 'translateX(-50%) translateY(-5px) rotate(2deg) scale(1.02)',
            borderRadius: '70% 30% 40% 60% / 40% 70% 60% 30%'
          }
        },
        'wave-flow': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.7s ease-out',
        'parallax': 'parallax 1s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'liquid-wave': 'liquid-wave var(--liquid-speed) ease-in-out infinite',
        'wave-flow': 'wave-flow 4s linear infinite',
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
