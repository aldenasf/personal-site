// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://aldenasf.vercel.app/",
    output: "server",

    integrations: [icon(), mdx()],

    vite: {
        plugins: [tailwindcss()],
    },

    image: {
        // service: passthroughImageService(),
        service: {
            entrypoint: "astro/assets/services/sharp",
        },
    },

    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
});
