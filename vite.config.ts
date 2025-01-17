import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "esnext",
    rollupOptions: {
      output: {
        manualChunks: {
          slidev: [
            "@slidev/client",
            "@slidev/theme-default",
            "@slidev/theme-seriph",
          ],
        },
      },
    },
  },
});
