import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import markdownItClass from "@toycode/markdown-it-class";
import { demoContainer } from "./plugins/demo-container";
import { defineConfig } from "vitepress";
import { BootstrapVueNextResolver } from "bootstrap-vue-next";

const baseUrl = "/bootstrap-vue-next/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Testing unplugin-vue-components",
  description: "A test of auto-resolving components",
  vite: {
    plugins: [
      testPlugin(),
      Components({
        globs: ["components/*.vue", "docs/**/demo/*.vue"],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [BootstrapVueNextResolver()],
      }),
      Icons(),
    ],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
  },
  appearance: false,
  sitemap: {
    hostname: `https://bootstrap-vue-next.github.io${baseUrl}`,
  },
  themeConfig: {
    search: {
      provider: "local",
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItClass, { table: ["table", "table-striped"] });
      md.use(demoContainer, "src");
    },
  },
});

function testPlugin() {
  return {
    name: "log-files",

    transform(src: unknown, id: unknown) {
      console.log("transforming", id);
    },
  };
}
