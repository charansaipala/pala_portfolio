module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#4f46e5",
        brandDark: "#4338ca",
        ink: "#0f172a"
      },
      backgroundImage: {
        sweep: "linear-gradient(135deg, rgba(79,70,229,.10), rgba(14,165,233,.10), rgba(236,72,153,.10))",
      },
      keyframes: {
        sweep: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } }
      },
      animation: {
        sweep: "sweep 14s ease-in-out infinite",
        float: "float 4s ease-in-out infinite"
      },
      boxShadow: { soft: "0 10px 25px -12px rgba(16,24,40,.25)" },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      maxWidth: { wide: "90rem" }
    }
  },
  plugins: []
};
