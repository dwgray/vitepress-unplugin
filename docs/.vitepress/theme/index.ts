// https://vitepress.dev/guide/custom-theme
import type { Theme } from "vitepress";
import Layout from "./Layout.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import { createBootstrap } from "bootstrap-vue-next";

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(createBootstrap());
  },
} satisfies Theme;
