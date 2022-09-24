module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF385C",
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
