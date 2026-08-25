import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

export default defineConfig({
  root: fileURLToPath(new URL(".", import.meta.url)),
  base: "/room-engine/",
  build: {
    outDir: fileURLToPath(new URL("../public/room-engine", import.meta.url)),
    emptyOutDir: true,
  },
});
