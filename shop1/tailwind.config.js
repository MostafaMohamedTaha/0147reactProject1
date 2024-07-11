const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {
        fontFamily: {
        sans: ['Playwrite CU','Helvetica', 'Arial', 'sans-serif', 'cursive'], // default
        arabic: ['Cairo', 'sans-serif'], // Arabic-specific font
        },
    },
},
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ]
}