<template>
  <div>
    <not-int />
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="primary align-center"
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
      <v-col cols="12" md="6">
        <div class="ma-5 pa-0">
          <vimeo-player
            :video-id="vimeo.intro"
            class="embed-container"
            :options="{ responsive: true }"
          ></vimeo-player>

          <br />
          <div v-if="formal">
            Beste belangstellende, <br />
            <br />
            {{ textData.formal.text_a }}
            <br />
            <br />
            {{ textData.formal.text_b }}
            <br />
            <br />
            {{ textData.formal.text_c }}
            <br />
            <br />
            {{ textData.formal.text_d }}
            <br />
            <br />
            {{ textData.formal.text_e }}
            <br />
            <br />
            {{ this.textData.formal.text_f }}
            <br />
            <br />
            <br />
            {{ contactData.name }}<br />
            {{ contactData.email }}<br />
            {{ contactData.telephone }}<br />
          </div>
          <div v-if="!formal">
            Beste belangstellende ,<br />
            <br />
            {{ textData.informal.text_a }}
            <br />
            <br />
            {{ textData.informal.text_b }}
            <br />
            <br />
            {{ textData.informal.text_c }}
            <br />
            <br />
            {{ textData.informal.text_d }}
            <br />
            <br />
            {{ textData.informal.text_e }}
            <br />
            <br />
            {{ textData.informal.text_f }}
            <br />
            <br />
            <br />
            {{ contactData.name }}<br />
            {{ contactData.email }}<br />
            {{ contactData.telephone }}<br />
          </div>
          <div class="text-end mr-15 mb-10 mt-15">
            <v-btn elevation="15" class="primary" @click="start">Ja</v-btn>
            <v-btn elevation="15" class="ml-7 primary" @click="end">Nee</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vimeoData from "@/text/vimeo.json";
import NotInt from "@/components/core/notInt";
import textData from "@/text/textAintro.json";
import contactData from "@/text/contact.json";

export default {
  name: "Intro",
  components: { NotInt },
  data() {
    return {
      formal: true,
      valid: true,
      vimeo: vimeoData,
      textData: textData,
      contactData: contactData,
    };
  },
  methods: {
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    start() {
      this.$router.push({ name: "stepOne" });
    },
    end() {
      this.$router.push({ path: "/Start" });
    },
  },

  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
  computed: {},
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
