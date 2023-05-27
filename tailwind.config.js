/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./packages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        background: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",

        destructive: "hsl(var(--destructive))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "dot-1": "bounce-1 400ms ease-in-out infinite alternate",
        "dot-2": "bounce-1 400ms ease-in-out 200ms infinite alternate",
        "dot-3": "bounce-1 400ms ease-in-out 300ms infinite alternate",
      },
      boxShadow:(theme)=>{
       
        return {
          "strong":'4px 4px 0px 0px hsl(var(--accent))'
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
