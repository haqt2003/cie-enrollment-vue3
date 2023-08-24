module.exports = {
  content: [
    // Example content paths...
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000719",
        blur: "#B5B5B5",
        primary: "#000032",
        yellow: "#F6C656",
        red: "#C23B33",
        white: "#FFFFFF",
      },
      width: {
        wrap: "1146px",
      },
      height: {
        192: "768px",
      },
      opacity: {
        16: "0.16",
      },
      backgroundImage: {
        header: "url('@/assets/images/png/header-bg.png')",
        contact: "url('@/assets/images/png/footer-contact-bg.png')",
      },
    },
  },
  plugins: [],
};
