/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'park-bg' : "url('src/assets/images/park.JPG')"
            }
        },
    },
    plugins: [],
}