---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Testing unplugin-vue-components"
  text: "A test of auto-resolving components"
  tagline: My great project tagline
---

# Testing things

## An auto-imported vanilla component

<TestSomething/>

## A bootstrap-vue-next component

<BAlert variant="success" :model-value="true">Success Alert</BAlert>

## Some Client Only Code

<ClientOnly>
Does this have an effect on unplugin?
</ClientOnly>

<script setup lang="ts">
  console.log("Testing Script")
</script>
