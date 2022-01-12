<template>
  <v-list-item-subtitle class="text-body-1 secondary--text">{{
    text
  }}</v-list-item-subtitle>
</template>

<script>
export default {
  name: "subHeaderModule",
  props: ["text"],
};
</script>

<style scoped></style>
