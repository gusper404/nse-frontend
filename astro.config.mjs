import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  image: {
    domains: ["https://img.youtube.com/"],
  },
  site: {
    title: "NSE Internacional.",
    description: "NSE (Nuestra Señora del Encuentro con Dios) Internacional es un portal de multimedia que promueve el material audiovisual de NSE TV y NSE Radio.",
    url: "https://nse-frontend-three.vercel.app",
  }
  // output: "hybrid",
});