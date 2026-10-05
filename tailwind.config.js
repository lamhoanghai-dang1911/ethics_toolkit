/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#ECE2D0',
          400: '#DFD2BC',
          DEFAULT: '#FAF6EE',
        },
        charcoal: {
          50: '#F4F4F4',
          100: '#E4E4E4',
          300: '#8E8E8E',
          500: '#4A4A4A',
          700: '#2A2928',
          800: '#1F1E1D',
          900: '#141312',
          DEFAULT: '#191817',
        },
        burgundy: {
          50: '#FAF0F2',
          100: '#F3DCE0',
          200: '#E5B4BC',
          300: '#D28593',
          400: '#BD576B',
          500: '#9E2A41',
          600: '#851E32', // Primary deep burgundy
          700: '#6C1425',
          800: '#530E1C',
          900: '#3D0813',
          DEFAULT: '#851E32',
        },
        academic: {
          slate: '#334155',
          sand: '#EFECE6',
          border: '#E2DCD2',
          card: '#FFFFFF',
          tag: '#F2EDE4',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', '"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(20, 19, 18, 0.04), 0 1px 2px -1px rgba(20, 19, 18, 0.04)',
        'academic': '0 4px 20px -2px rgba(26, 24, 23, 0.06), 0 2px 6px -1px rgba(26, 24, 23, 0.04)',
        'elevated': '0 20px 30px -10px rgba(26, 24, 23, 0.08), 0 10px 15px -3px rgba(26, 24, 23, 0.05)',
      }
    },
  },
  plugins: [],
}
