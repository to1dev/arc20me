import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },

    daisyui: {
        themes: [
            "dark",
            "business",
            "dim",
            "dracula",
            "coffee",
            "halloween",
            "forest",
            "luxury",
            "night",
            "sunset",
        ],
    },

    plugins: [require("daisyui")],
} as Config;
