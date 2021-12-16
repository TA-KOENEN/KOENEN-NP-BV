<template>
  <v-app ma="0" pa="0">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
};
</script>
<style>
html,
body {
  overflow-x: hidden;
}
.full-page {
  height: 250vh;
}
</style>
