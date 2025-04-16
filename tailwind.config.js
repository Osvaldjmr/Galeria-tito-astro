/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                background: {
                    light: '#ffffff',
                    dark: '#1a1a1a',
                },
                text: {
                    light: '#1a1a1a',
                    dark: '#ffffff',
                }
            },
            fontFamily: {
                sans: ['Inter var', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
                'bounce-slow': 'bounce 3s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse 3s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
    darkMode: 'class',
}