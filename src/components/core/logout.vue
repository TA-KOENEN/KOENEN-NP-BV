<template>
  <v-snackbar
    :timeout="5000"
    auto-heigth
    multi-line
    v-model="successFull"
    color="info"
    absolute
    centered
  >
    <v-layout align-center pr-4>
      <v-icon class="pr-3" dark large>mdi-logout</v-icon>
      <v-layout column>
        <div>
          <strong>STOP</strong>
        </div>
        <div v-if="formal">
          Uw wordt uitgelogd<br />
          Op elk moment kunt u weer verder gaan. <br />Gebruik hiervoor de knop
          in de uitnodigingsmail.
        </div>
        <div v-if="!formal">
          Je wordt uitgelogd<br />
          Op elk moment kan je weer inloggen.<br />Gebruik hiervoor de knop in
          de uitnodigingsmail.
        </div>
      </v-layout>
    </v-layout>
  </v-snackbar>
</template>

<script>
export default {
  name: "report",
  methods: {},

  data() {
    return {
      formal: true,
      successFull: false,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    EventBus.$on("logoutApp", (data) => {
      this.successFull = data;
    });
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
