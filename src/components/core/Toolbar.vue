<template>
  <div>
    <report />
    <logout />
    <v-toolbar dark class="primary">
      <!--    <v-toolbar dark :src="require('@/assets/core/alleenlijn.jpg')">-->
      <v-toolbar-title class="ml-15">{{ name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined small color="secondary" @click="logout">Logout</v-btn>
      <v-btn icon @click="toggle_dark_mode">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import Report from "@/components/core/report";
import { mapGetters } from "vuex";
import authService from "@/services/AuthService";

export default {
  name: "Toolbar",
  props: ["name"],
  components: { Report },
  data() {
    return {
      theme: null,
    };
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    toggle_dark_mode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    },
    async logout() {
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
      this.$router.push({ path: "/einde" });
    },
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  computed: {
    ...mapGetters("auth", ["email"]),
  },
};
</script>
<style scoped></style>
