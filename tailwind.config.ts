
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 theme: {
                extend: {
                    fontFamily: {
                        sans: ['var(--font-geist-sans)'],
                        mono: ['var(--font-geist-mono)'],
                        manrope: ['var(--font-manrope)'],
                    },
                    colors: {
                        'kubrelo-yellow': '#FFD700',
                        'kubrelo-dark': '#1A1A1A',
                        'kubrelo-light': '#FFFFFF',
                        'kubrelo-gray': '#F7F7F7',
                    },
                    animation: {
                        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                        'fade-in': 'fadeIn 0.8s ease-out forwards',
                        'kenburns': 'kenburns 15s ease-out forwards infinite',
                    },
                    keyframes: {
                        fadeInUp: {
                            '0%': {
                                opacity: '0',
                                transform: 'translateY(20px)'
                            },
                            '100%': {
                                opacity: '1',
                                transform: 'translateY(0)'
                            },
                        },
                        fadeIn: {
                            '0%': {
                                opacity: '0'
                            },
                            '100%': {
                                opacity: '1'
                            },
                        },
                        kenburns: {
                            '0%': { transform: 'scale(1) translate(0, 0)', transformOrigin: 'center' },
                            '100%': { transform: 'scale(1.1) translate(-1%, 1%)', transformOrigin: 'center' },
                        }
                    }
                }
            },
  plugins: [],
};
export default config;
