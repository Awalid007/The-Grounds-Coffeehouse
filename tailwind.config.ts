
import { Config } from 'tailwindcss';

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}", // Just in case components are outside src, though file structure says they are in root? No, list_dir showed components in root.
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'coffee-dark': '#2C1B12',
                'coffee-brown': '#4A3728',
                'coffee-gold': '#A67C52',
                'coffee-beige': '#E8D9C5',
                'coffee-cream': '#FDFBF7',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;
