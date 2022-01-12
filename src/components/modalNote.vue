<template>
  <v-dialog
    v-model="show"
    max-width="600px"
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Toelichting</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <div class="ma-5">
        {{ noteA }}
        <div v-if="nrNotes === 2 || nrNotes === 3">
          {{ noteB }}
        </div>
        <div v-if="nrNotes === 3">
          {{ noteC }}
        </div>
      </div>
      <v-divider />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["visible", "tekstkop", "nrNotes", "noteA", "noteB", "noteC"],
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },
};
</script>

<style scoped></style>
