import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Testing unplugin-vue-components",
  description: "A test of auto-resolving components",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    plugins: [
      Components({
        globs: ["components/*.vue", "docs/**/demo/*.vue"],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),
    ],
  },
});
