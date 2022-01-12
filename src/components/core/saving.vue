<template>
  <v-overlay>
    <v-progress-circular
      :size="70"
      :width="7"
      color="info"
      indeterminate
    ></v-progress-circular>
    <div v-if="formal">
      <h3>Uw data wordt opgeslagen</h3>
    </div>
    <div v-if="!formal">
      <h3>Jouw data wordt veilig opgeslagen</h3>
    </div>
  </v-overlay>
</template>
<script>
export default {
  name: "saving",
  data() {
    return {
      formal: false,
    };
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
