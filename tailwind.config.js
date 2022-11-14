/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        organizationThoughtBG: "#F8F8F8",
        textMuted: "#505050",
        borderColor: "#D9D9D9",
        primary: "#5063AA",
        primaryMuted: "#F6F8FE"
      },
      fontSize: {
        "4.5xl": "2.5rem"
      },
      spacing: {
        23.5: "5.872rem",
        36.5: "9.125rem",
        53: "13.25rem",
        55: "13.75rem",
        65.5: "16.375rem",
        86: "21.5rem",
        89: "22.25rem",
        105: "26.25rem",
        115: "28.75rem",
        117.5: "29.375rem",
        156: "39rem",
        160: "40rem",
        185: "46.25rem",
        242: "60.5rem",
      },
      borderRadius: {
        "4.5xl": "2.625rem"
      },
      borderWidth: {
        1: "1px"
      }
    },
  },
  plugins: [],
}
