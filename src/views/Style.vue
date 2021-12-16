<template>
  <div>
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="secondary align-center"
        :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
      >
        <v-row class="ma-16">
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <v-img
              :src="
                require(`@/assets/core/logo_${
                  $vuetify.theme.dark ? 'light' : 'dark'
                }.png`)
              "
              max-height="1200px"
            />
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <h3>Welkom bij Trusted Accountant</h3>
        </v-row>
        <v-row class="justify-center mt-10">
          <h5>Liever een ander kleurschema klik op de knop</h5></v-row
        >
        <v-row class="justify-center mt-10">
          <div class="text-center">
            <v-btn class="secondary mb-10" @click="toggle_dark_mode">
              <v-icon left>mdi-theme-light-dark</v-icon>
              <span>Donker/Licht</span>
            </v-btn>
          </div>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="justify-center align-center">
        <div class="ma-5 pa-0">
          <v-row class="mt-15 ml-10">
            <h3 class="primary--text">Stijl</h3>
          </v-row>
        </div>
        <v-row class="ml-15 mt-15 mr-15">
          <div>
            Beste belangstellende, <br /><br />
            Voordat we verder gaan, kunt u / kan je aangeven wat uw / jouw
            voorkeur heeft?<br />
            Onze rapportage en vraagstelling kunnen wij hier dan op aansluiten.
          </div>
        </v-row>
        <v-row class="ml-15 mr-15 mt-15">
          <base-radio
            v-model="style"
            rules="required"
            nrOptions="2"
            optionA="MIjn voorkeur gaat uit naar een formele stijl."
            optionB="Mijn voorkeur gaat uit naar een informele stijl."
          ></base-radio>
        </v-row>

        <v-row justify="end" class="mr-8">
          <v-btn elevation="15" class="primary ma-16" @click="start"
            >Verder</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Style",
  components: {},
  data() {
    return {
      style: null,
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    start() {
      if (this.style === "ke1") {
        localStorage.setItem("formal", JSON.stringify(true));
      } else {
        localStorage.setItem("formal", JSON.stringify(false));
      }
      this.$router.push({ name: "Intro" });
    },
  },
  mounted() {},

  computed: {},
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
