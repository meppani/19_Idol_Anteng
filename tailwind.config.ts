import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        idol: {
          bg: "#050714",
          card: "#0b1129",
          cardHover: "#111a3d",
          border: "rgba(212, 175, 55, 0.2)",
          gold: {
            DEFAULT: "#D4AF37",
            light: "#F3E5AB",
            bright: "#FFDF00",
            dark: "#AA771C",
            metallic: "#E5A93C",
          },
          neon: {
            blue: "#00F0FF",
            cyan: "#00D2FF",
            deep: "#0066FF",
            purple: "#7928CA",
          },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)",
        "gold-shine": "linear-gradient(90deg, transparent, rgba(255, 223, 0, 0.4), transparent)",
        "neon-glow": "radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(5,7,20,0) 70%)",
        "gold-glow": "radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(5,7,20,0) 70%)",
        "hero-gradient": "radial-gradient(ellipse at top, #131c46 0%, #050714 80%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.4), 0 0 50px rgba(212, 175, 55, 0.2)",
        "neon-glow": "0 0 25px rgba(0, 240, 255, 0.4), 0 0 50px rgba(0, 240, 255, 0.2)",
        "card-glow": "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25)",
        "hover-card": "0 20px 40px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 240, 255, 0.4), 0 0 15px rgba(212, 175, 55, 0.6)",
      },
      animation: {
        "pulse-glow": "pulseGlow 3s infinite ease-in-out",
        "shimmer": "shimmer 2.5s infinite linear",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
