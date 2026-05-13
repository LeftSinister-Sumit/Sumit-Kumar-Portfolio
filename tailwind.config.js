/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Syne', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#080c0c',
          secondary: '#0d1414',
          tertiary: '#111a1a',
          card: '#0f1a1a',
          elevated: '#162020',
        },
        teal: {
          50: '#f0fdfc',
          100: '#ccfbf6',
          200: '#99f6ed',
          300: '#5eead8',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        accent: {
          primary: '#2dd4bf',
          secondary: '#14b8a6',
          dim: '#0d9488',
          glow: 'rgba(45, 212, 191, 0.15)',
          border: 'rgba(45, 212, 191, 0.2)',
          borderHover: 'rgba(45, 212, 191, 0.5)',
        },
        text: {
          primary: '#e2e8e8',
          secondary: '#94a3a3',
          muted: '#5a7070',
          accent: '#2dd4bf',
        },
      },
      animation: {
        'scan-line': 'scanLine 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.6s ease forwards',
        'blink': 'blink 1s step-end infinite',
        'grid-fade': 'gridFade 8s ease-in-out infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gridFade: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.07' },
        },
      },
      boxShadow: {
        'teal-sm': '0 0 10px rgba(45, 212, 191, 0.1)',
        'teal-md': '0 0 20px rgba(45, 212, 191, 0.15)',
        'teal-lg': '0 0 40px rgba(45, 212, 191, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}
