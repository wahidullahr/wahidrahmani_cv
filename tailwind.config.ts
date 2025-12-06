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

        // The Background: Not pure black. Deep, rich charcoal.

        background: "#0a0a0a", 

        // The Surface: Slightly lighter for cards/sections.

        surface: "#111111",

        // The Accent: Emerald (Growth/Success) or Electric Blue. 

        // We go Emerald for "Software Stability".

        primary: "#10b981", 

        // Text Colors:

        "text-primary": "#ededed", // Almost white

        "text-secondary": "#a1a1aa", // Zinc-400

      },

      fontFamily: {

        sans: ["var(--font-inter)"], // We will set this in layout

      },

    },

  },

  plugins: [],

};

export default config;

