import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      // requests to local host 5174/wyr to go to localhost:3000/wyr
      wyr: "http://localhost:3000/",
    },
  },
});
