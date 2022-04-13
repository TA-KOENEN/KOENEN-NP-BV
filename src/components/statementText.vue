<template>
  <div>
    <div class="primary--text">
      {{ text }}
      <v-icon v-if="note" color="primary" dark @click.stop="showToel = true"
        >mdi-chat</v-icon
      >
    </div>
    <ModalNote
      :visible="showToel"
      :nrNotes="nrNotes"
      :noteA="noteA"
      :noteB="noteB"
      :noteC="noteC"
      @close="showToel = false"
    />
  </div>
</template>

<script>
import ModalNote from "@/components/modalNote";
export default {
  name: "statementText",
  components: { ModalNote },
  props: ["text", "note", "nrNotes", "noteA", "noteB", "noteC"],
  data() {
    return {
      showToel: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
