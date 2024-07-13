import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      fontFamily: {
        highlight: "Handlee",
      },
      borderRadius: {
        "tagButton": "1.647px 19.761px 19.761px 19.761px",
        "tagButton-2": "2.238px 26.852px 26.852px 26.852px;",
      },
      boxShadow: {
        "custom-accent":
          "3.294px 3.294px 8.234px 0px rgba(240, 114, 205, 0.16)",
        "custom-primary":
          "3.294px 3.294px 8.234px 0px rgba(229, 193, 65, 0.16)",
        "custom-secondary":
          "3.294px 3.294px 8.234px 0px rgba(90, 181, 232, 0.16)",
        "custom-success":
          "3.294px 3.294px 8.234px 0px rgba(240, 114, 205, 0.16)",
        "custom-accent-2":
          "4.475px 4.475px 11.188px 0px rgba(240, 114, 205, 0.16)",
        "custom-primary-2":
          "4.475px 4.475px 11.188px 0px rgba(229, 193, 65, 0.16)",
        "custom-secondary-2":
          "4.475px 4.475px 11.188px 0px rgba(90, 181, 232, 0.16)",
        "custom-success-2":
          "4.475px 4.475px 11.188px 0px rgba(240, 114, 205, 0.16)",
      },
    },
  },
};
