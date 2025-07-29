theme: {
  extend: {
    animation: {
      slide: "slideLeft 15s linear infinite",
    },
    keyframes: {
      slideLeft: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-50%)" },
      },
    },
  },
},
