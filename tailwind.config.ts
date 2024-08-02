import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },

    daisyui: {
        themes: ["light", "dark", "business", "retro"],
    },

    plugins: [require("daisyui")],
} as Config;
