<template>
  <v-list-item-title class="text-h5 primary--text">{{
    text
  }}</v-list-item-title>
</template>

<script>
export default {
  name: "headerModule",
  props: ["text"],
};
</script>

<style scoped></style>
