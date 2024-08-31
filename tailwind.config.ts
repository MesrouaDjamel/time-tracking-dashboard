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
        // Primary
        Blue: "hsl(246, 80%, 60%)",
        LightRed: "hsl(15, 100%, 70%)", //(work)
        Softblue: "hsl(195, 74%, 62%)", //(play)
        Lightred: "hsl(348, 100%, 68%)", //(study)
        Limegreen: " hsl(145, 58%, 55%)", //(exercise)
        Violet: "hsl(264, 64%, 52%)", //(social)
        Softorange: "hsl(43, 84%, 65%)", //(self care)

        // Neutral
        Verydarkblue: "hsl(226, 43%, 10%)", //(bg-main)
        Darkblue: "hsl(235, 46%, 20%)", //(bg-stat)
        DarkblueHover: "hsl(235, 46%, 30%)", //(bg-stat)
        Desaturatedblue: "hsl(235, 45%, 61%)", //(hover)
        Paleblue: "hsl(236, 100%, 87%)", //(some text)
      },
    },
  },
  plugins: [],
};
export default config;
