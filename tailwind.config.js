 /** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff3f1',
                    100: '#ffe2de',
                    200: '#ffc9c2',
                    300: '#f99b91',
                    400: '#f16b5e',
                    500: '#e84a3c',
                    600: '#d93b2e',
                    700: '#c73428',
                    800: '#a72c23',
                    900: '#8a2922',
                },
                secondary: {
                    50: '#f5f5f5',
                    100: '#eeeeee',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#666666',
                    700: '#4a4a4a',
                    800: '#333333',
                    900: '#222222',
                    950: '#171717',
                },
                accent: {
                    50: '#fff3f1',
                    100: '#ffe2de',
                    200: '#ffc9c2',
                    300: '#f99b91',
                    400: '#f16b5e',
                    500: '#e84a3c',
                    600: '#d93b2e',
                    700: '#c73428',
                    800: '#a72c23',
                    900: '#8a2922',
                }
            },
            fontFamily: {
                sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            boxShadow: {
                'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)',
                'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
                'xl': '0 20px 50px -15px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [],
}

