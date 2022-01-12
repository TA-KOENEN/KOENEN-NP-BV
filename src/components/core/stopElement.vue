<template>
  <v-dialog v-model="innerValue" max-width="500px" v-on="$listeners">
    <v-card>
      <v-card-title>Stoppen</v-card-title>
      <v-card-text>
        Wilt u stoppen en later verder gaan, terug naar het overzicht van alle
        modules. Klik sluit om dit venster te sluiten.
      </v-card-text>
      <v-card-actions>
        <v-btn color="accent" text @click="goChange">Sluit</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="goStop()">Stop</v-btn>
        <v-btn color="secondary" text @click="goModules()">Modules</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import authService from "@/services/AuthService";

export default {
  name: "stopElement",
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: "",
    };
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit("input", newVal);
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },

  methods: {
    goChange() {
      this.innerValue = false;
    },

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
    goModules() {
      this.$router.push({ name: "Modules" });
    },
  },
};
</script>

<style scoped></style>
