/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
         eswasthyaprim:"#71b5f5"
      },
      backgroundImage : {
             'Nav-image' : "url(/assests/Twitter.svg)"
      },
      fontFamily : {
        cera : ["cera","sans-serif"],
        ceraBold : ["cera-bold","sans-serif"]
      }
    },
  },
  plugins: [],
}