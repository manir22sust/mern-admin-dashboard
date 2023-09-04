import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Define your path aliases here
      "@components": path.resolve(__dirname, "src/components"),
      "@scenes": path.resolve(__dirname, "src/scenes"),
      "@state": path.resolve(__dirname, "src/state"),
      "@assets": path.resolve(__dirname, "src/assets"),
      theme: path.resolve(__dirname, "src/theme"),
    },
  },
});
