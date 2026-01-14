/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GTA V Official Colors
        'gta': {
          black: '#141414',        // bg-main
          graphite: '#1e1e1e',     // bg-panel
          dark: '#191919',         // bg-header
          medium: '#3c3c3c',       // elválasztók, border
          light: '#b0b0b0',        // text-muted
          white: '#f0f0f0',        // text-main

          green: '#ff8c00',        // accent (CTA, primary)
          gold: '#ffae00',         // highlight / hover
          blue: '#5dade2',         // info, secondary
          salmon: '#f5b041',       // warning / soft accent
          purple: '#c39bd3',       // extra accent
          olive: '#e67600',        // accent-dark
        }

      },
      fontFamily: {
        'pricedown': ['Pricedown', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'progress': 'progress 2s ease-out',
        'float-smooth': 'floatSmooth 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        floatSmooth: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gta-gradient': 'linear-gradient(135deg, #0d1116 0%, #1c1d21 100%)',
        'loading-gradient': 'linear-gradient(90deg, transparent, rgba(254, 217, 133, 0.1), transparent)',
      },
      boxShadow: {
        'gta': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'gta-hover': '0 8px 40px rgba(0, 0, 0, 0.4)',
        'card': '0 2px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}