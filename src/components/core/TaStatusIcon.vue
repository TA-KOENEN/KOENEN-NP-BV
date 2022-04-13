<template>
  <div>
    <v-icon v-if="finish" color="primary">
      mdi-checkbox-marked-circle-plus-outline
    </v-icon>
    <v-icon v-if="!finish" color="primary">
      mdi-checkbox-blank-circle-outline
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "statusIcon",
  props: {
    finish: null,
  },
};
</script>

<style scoped></style>
