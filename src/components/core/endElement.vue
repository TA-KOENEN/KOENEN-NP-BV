<template>
  <div>
    <div v-if="formal">
      <h3 class="primary--text">Uw rapportage is onderweg.</h3>
      <br />
      Let op deze rapportage kan in uw spambox terecht komen.<br />
      U kan nu direct verder gaan met een volgende module of stoppen en later
      verder gaan.
    </div>
    <div v-if="!formal">
      <h3 class="primary--text">Jouw rapportage is onderweg.</h3>
      <br />
      Let op deze rapportage kan in je spambox terecht komen.<br />
      Je kan nu direct verder gaan met een volgende module of stoppen en later
      verder gaan.
    </div>

    <v-row no-gutters class="mt-5">
      <v-col cols="1" />
      <v-col cols="4">
        <v-btn large block color="primary" @click="goStop">STOP</v-btn>
      </v-col>
      <v-col cols="2" />
      <v-col cols="4">
        <v-btn large block color="accent" @click="goOn">Verder</v-btn>
      </v-col>
      <v-col />
    </v-row>
  </div>
</template>

<script>
import authService from "@/services/AuthService";

export default {
  name: "endElement",
  data() {
    return {
      formal: true,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    async goStop() {
      // eslint-disable-next-line no-undef
      await EventBus.$emit("logoutApp", true);
      await this.sleep(2000);
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      await authService.logout(clientId);
      localStorage.removeItem("lastNameClient");
      localStorage.removeItem("firstNameClient");
      localStorage.removeItem("stepTwo");
      localStorage.removeItem("firstNameUser");
      localStorage.removeItem("lastNameUser");
      localStorage.removeItem("pass_token");
      localStorage.removeItem("companyName");
      localStorage.removeItem("emailUser");
      localStorage.removeItem("moduleFour");
      localStorage.removeItem("clientId");
      localStorage.removeItem("token");
      localStorage.removeItem("formal");
      localStorage.removeItem("telephoneUser");
      localStorage.removeItem("companyNameTeam");
      localStorage.removeItem("websiteTeam");
      this.$router.push({ path: "/" });
    },
    goOn() {
      this.$router.push({ name: "Modules" });
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
