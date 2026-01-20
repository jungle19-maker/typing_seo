/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#ffffff', // Changed to white for marketing
                    secondary: '#f8fafc', // Light gray
                    card: '#ffffff'
                },
                primary: '#2563eb', // Bright Blue
                secondary: '#64748b', // Slate 500
                accent: {
                    primary: '#2563eb', // Bright Blue
                    secondary: '#4f46e5', // Indigo
                    success: '#10b981', // Emerald
                    warning: '#f59e0b', // Amber
                    danger: '#ef4444', // Red
                },
                brand: {
                    blue: '#0ea5e9', // Sky 500
                    teal: '#14b8a6', // Teal 500
                    purple: '#8b5cf6', // Violet 500
                    orange: '#f97316', // Orange 500
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
