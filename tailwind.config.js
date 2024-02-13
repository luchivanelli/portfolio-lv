/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      'colors': {
        'card': '#00000070',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

