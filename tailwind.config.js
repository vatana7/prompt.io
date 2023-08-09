/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "white",
          secondary: "#ef4444",
          accent: "#f3f4f6",
          neutral: "#f3f4f6",
          "base-100": "#f5f5f4",
          info: "#67e8f9",
          success: "#86efac",
          warning: "#fde047",
          error: "#ef4444",
        },
      },
    ],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: ["responsive", "group-hover", "hover", "focus", "active"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
