export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Switzer", "sans-serif"],
      },
      colors: {
        bg:      "#F5F4F1",
        bgDark:  "#0F0E0C",
        accent:  "#1A6B5C",
        muted:   "rgba(0,0,0,0.48)",
      },
      borderRadius: {
        DEFAULT: "0px",
        pill:    "9999px",
        sm:      "0px",
        md:      "0px",
        lg:      "0px",
        xl:      "0px",
      },
    },
  },
  plugins: [],
}
