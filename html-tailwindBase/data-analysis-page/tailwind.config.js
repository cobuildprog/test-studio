/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mont: "Montserrat , sans-serif",
        workSans: "Work Sans , sans-serif",
      },
      backgroundImage: {
        // 'nav':'linear-gradient(to right,rgba(0, 20, 65,.7), rgba(0, 20, 65,.7)) ,'
        nav: 'linear-gradient(270deg, rgba(66, 136, 222, 0.9) 14.45%, rgba(66, 136, 222, 0.652) 53.39%, rgba(66, 136, 222, 0.952) 83.01%),url("../images/Main-bg.png")',
        progress: "linear-gradient(180deg, #5397EF 0%, #4286DD 100%)",
      },
      colors: {
        blue: {
          dark: "#4286DD",
        },
      },

      boxShadow: {
        "level-2": "0px 2px 6px rgba(0, 0, 0, 0.04)",
        elevation: "0px 1px 14px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
