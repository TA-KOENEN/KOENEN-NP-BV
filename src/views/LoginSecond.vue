<template>
  <div>
    <v-row no-gutters>
      <new-code />
      <v-col
        cols="12"
        md="6"
        class="leftPanel align-center"
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
          <h3>Welkom bij Koenen en Co</h3>
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
            <h3 class="primary--text">Persoonlijke inlogcode</h3>
          </v-row>
        </div>
        <v-row class="ml-15 mt-15 mr-15">
          <div v-if="formal">
            Beste {{ firstNameClient }} {{ lastNameClient }}, <br /><br />
            Vul hier de persoonlijke inlogcode in om toegang te krijgen tot de
            Noodplan app. Let op: deze persoonlijke inlogcode is 30 minuten
            geldig. Lukt het niet om binnen deze tijd in te loggen, ga dan terug
            naar het beginscherm.
          </div>
          <div v-if="!formal">
            Beste {{ firstNameClient }}, <br />
            <br />
            Vul hier de persoonlijke inlogcode in om toegang te krijgen tot de
            Noodplan app. Let op: deze persoonlijke inlogcode is 30 minuten
            geldig. Lukt het niet om binnen deze tijd in te loggen, ga dan terug
            naar het beginscherm.
          </div>
        </v-row>
        <v-row class="ml-15 mr-15 mt-15">
          <v-text-field
            outlined
            shaped
            placeholder="Toegangscode"
            v-model="securityCode"
            required
          />
        </v-row>

        <v-row justify="end" class="mr-8">
          <v-btn
            elevation="15"
            class="primary mt-15 mr-15"
            v-if="errorBtn"
            @click="newCode"
            >Nieuwe Code</v-btn
          >
          <v-btn elevation="15" class="primary mt-15 ml-16 mr-16" @click="login"
            >Verder</v-btn
          >
        </v-row>
        <v-row justify="center" class="ml-8 mr-8 mt-15">
          <flash-message :error="error" v-if="error" key="error" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getError } from "@/utils/helpers";
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import ResultService from "@/services/ResultService";
import newCode from "@/components/core/newCode";

export default {
  name: "LoginFam",
  components: { FlashMessage, newCode },
  data() {
    return {
      clientId: null,
      firstNameClient: null,
      lastNameClient: null,
      emailClient: null,
      firstNameUser: null,
      lastNameUser: null,
      formal: true,
      error: null,
      securityCode: null,
      valid: false,
      errorBtn: false,
    };
  },
  methods: {
    async newCode() {
      console.log("gaat goed");
      const payload = {
        tokkie: JSON.parse(localStorage.getItem("tokkie")),
      };
      try {
        await ResultService.getNewCode(payload);
        // eslint-disable-next-line no-undef
        EventBus.$emit("newCode", true);
        this.error = null;
        this.errorBtn = false;
        this.securityCode = null;
      } catch (error) {
        this.error = getError(error);
      }
    },
    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async login() {
      let payload = {
        clientId: this.clientId,
        token: this.securityCode,
        tokkie: this.tokkie,
        formal: this.formal,
      };
      this.error = null;
      try {
        await this.$store.dispatch("auth/loginB", payload);
        if (this.stepTwo) {
          this.$router.push({ name: "Modules" });
        } else {
          this.errorBtn = true;
          const error = Error(
            "Deze toegangscode is onjuist of verlopen, probeer het a.u.b opnieuw. Mocht u problemen blijven ondervinden dan verzoeken wij contact met ons op te nemen. U kunt een nieuwe code opvragen met de knop NIEUWE CODE. Deze code is dan ook weer 30 minuten geldig."
          );
          error.name = "Fetch User";
          throw error;
        }
      } catch (error) {
        this.error = getError(error);
      }
    },
  },
  mounted() {
    this.clientId = JSON.parse(localStorage.getItem("clientId"));
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
    this.firstNameClient = JSON.parse(localStorage.getItem("firstNameClient"));
    this.lastNameClient = JSON.parse(localStorage.getItem("lastNameClient"));
    this.emailClient = JSON.parse(localStorage.getItem("emailClient"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },

  computed: {
    ...mapGetters("auth", ["stepTwo"]),
  },
};
</script>

<style scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important; /* maybe !important  */
}
</style>
