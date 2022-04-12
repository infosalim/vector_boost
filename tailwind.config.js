module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        header: "#1a1a36",
        wallet: "#24244A",
      },
      colors: {
        "nav-link": "#c7c7e1",
      },
    },
  },
  important: "#__next",
  plugins: [],
};
