/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        neon: {
          red: '#ff0033',
          blue: '#00ffff',
          green: '#00ff66',
          purple: '#9933ff',
        },
        cyber: {
          black: '#0a0a0a',
          darker: '#121212',
          dark: '#1a1a1a',
          light: '#2a2a2a',
          accent: '#2d364d',
        },
        'cyber-black': '#0a0a0a',
        'cyber-dark': '#1a1a1a',
        'cyber-light': '#2a2a2a',
        'neon-blue': '#00ffff',
        'neon-purple': '#ff00ff',
        'neon-red': '#ff0000',
        'neon-green': '#00ff00',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-blink': 'neon-blink 1.5s ease-in-out infinite',
        'cyber-float': 'cyber-float 6s ease-in-out infinite',
        'data-stream': 'data-stream 15s linear infinite',
        'terminal-cursor': 'terminal-cursor 1s step-end infinite',
        'scan': 'scan 2s linear infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-slow': 'pulse 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 0.5rem currentColor)',
          },
          '50%': {
            filter: 'brightness(1.2) drop-shadow(0 0 1rem currentColor)',
          },
        },
        'neon-blink': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 0.5rem currentColor)',
          },
          '20%, 24%, 55%': {
            filter: 'brightness(1.2) drop-shadow(0 0 2rem currentColor)',
          },
        },
        'cyber-float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'data-stream': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        'terminal-cursor': {
          '0%, 100%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 5px theme(colors.neon-blue), 0 0 20px theme(colors.neon-blue)',
          },
          '50%': {
            'box-shadow': '0 0 10px theme(colors.neon-blue), 0 0 30px theme(colors.neon-blue)',
          }
        }
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.neon.blue), 0 0 20px theme(colors.neon.blue)',
        'neon-red': '0 0 5px theme(colors.neon.red), 0 0 20px theme(colors.neon.red)',
        'neon-green': '0 0 5px theme(colors.neon.green), 0 0 20px theme(colors.neon.green)',
        'neon-purple': '0 0 5px theme(colors.neon.purple), 0 0 20px theme(colors.neon.purple)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon-blue': '0 0 5px theme(colors.neon-blue), 0 0 20px theme(colors.neon-blue)',
        'neon-purple': '0 0 5px theme(colors.neon-purple), 0 0 20px theme(colors.neon-purple)',
        'neon-red': '0 0 5px theme(colors.neon-red), 0 0 20px theme(colors.neon-red)',
        'neon-green': '0 0 5px theme(colors.neon-green), 0 0 20px theme(colors.neon-green)',
      }
    },
  },
  plugins: [],
}