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
        primaryMuted: "#F6F8FE",
        b1: "#A5BEE2",
        b2: "#80E4CC",
        b3: "#E9AFAF",
        secondary: "#283771"
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "6.5xl": "4rem"
      },
      spacing: {
        18: "4.5rem",
        23.5: "5.872rem",
        36.5: "9.125rem",
        39.25: "9.8125rem",
        41.25: "10.3125rem",
        42: "10.5rem",
        53: "13.25rem",
        55: "13.75rem",
        56: "14rem",
        63.5: "15.875rem",
        65.5: "16.375rem",
        67.5: "16.875rem",
        86: "21.5rem",
        89: "22.25rem",
        105: "26.25rem",
        115: "28.75rem",
        117.5: "29.375rem",
        156: "39rem",
        160: "40rem",
        185: "46.25rem",
        225: "56.25rem",
        242: "60.5rem",
      },
      borderRadius: {
        "4.5xl": "2.625rem"
      },
      borderWidth: {
        1: "1px"
      },
      lineHeight: {
        big: "3.125rem",
        vvBig: "5rem",
        vvvBig: "5.625rem"
      }
    },
  },
  plugins: [],
}
