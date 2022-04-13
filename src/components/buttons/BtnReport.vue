<template>
  <v-btn color="primary" x-large @click="onClick" :disabled="disabled">
    <slot>Bewaar</slot>
  </v-btn>
</template>

<script>
export default {
  name: "BtnReport",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>
