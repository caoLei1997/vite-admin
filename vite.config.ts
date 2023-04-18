import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import autoprefixer from "autoprefixer";
import windi from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        // 加入 babel 插件
        plugins: [
          // 适配 styled-component
          "babel-plugin-styled-components",
        ],
      },
    }),
    windi()
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
    
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 11"],
        }),
      
      ],
    },
  },
});
