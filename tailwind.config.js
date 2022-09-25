module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        pink: "#FF385C",
        searchBarMenu: "#f7f7f7",
      },
      boxShadow: {
        loginButton: "0 2px 4px rgba(0,0,0,0.18)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
