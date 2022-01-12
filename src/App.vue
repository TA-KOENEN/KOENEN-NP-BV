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
  created() {
    this.tokkie = this.$route.query.name;
    localStorage.setItem("tokkie", JSON.stringify(this.tokkie));
  },
};
</script>
<style>
html,
body {
  overflow-x: hidden;
}
.full-page {
  height: 300vh;
}
</style>
