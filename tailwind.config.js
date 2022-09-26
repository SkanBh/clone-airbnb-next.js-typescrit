module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        buttonSearch:
          "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      colors: {
        pink: "#FF385C",
        searchBarMenu: "#f7f7f7",
        footerForm: "#ffffff80",
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
