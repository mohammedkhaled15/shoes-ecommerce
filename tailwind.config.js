module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        grayishBlue: "#F1F5F9",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        blackTransparent: "rgba(0,0,0,0.8)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "Verdana", "Tahoma"],
      },
    },
  },
  plugins: [],
};
