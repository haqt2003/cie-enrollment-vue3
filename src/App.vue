<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
export default {
  setup() {
    return {
      layout: "default-layout",
    };
  },
};
</script>
