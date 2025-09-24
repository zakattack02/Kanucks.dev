module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        animation: {
          fadeIn: "fadeIn 1s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        },
        screens: {
          'xs': '450px',
        },
      },
    },
    plugins: [],
  };
  