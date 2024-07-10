import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {},
    },

    daisyui: {
        themes: ["dark", "business"],
    },

    plugins: [require("daisyui")],
} as Config;
