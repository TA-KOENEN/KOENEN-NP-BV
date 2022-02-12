<template>
  <div>
    <div v-if="formal">
      <h3 class="primary--text">Wij gaan voor u aan de slag</h3>
      <br />
      U heeft alle modules afgerond!<br />
      Wij gaan met de informatie aan de slag om een noodplan voor u op te
      stellen.
    </div>
    <div v-if="!formal">
      <h3 class="primary--text">Wij gaan voor jou aan de slag.</h3>
      <br />
      Je hebt alle modules afgerond<br />
      Wij gaan met de informatie aan de slag om een noodplan voor jou op te
      stellen.
    </div>

    <v-row no-gutters class="mt-5">
      <v-col cols="1" />
      <v-col cols="4">
        <v-btn large block color="primary" @click="goStop">STOP</v-btn>
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
      this.$router.push({ path: "/einde" });
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>

<style scoped></style>
