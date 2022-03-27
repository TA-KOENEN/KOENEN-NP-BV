<template>
  <v-container xs12 sm6 offset-sm3>
    <v-row justify="center">
      <ErrorStart />
      <div class="hoofd" @click="begin">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoA"
            :src="
              require(`@/assets/core/logo_${
                $vuetify.theme.dark ? 'light' : 'dark'
              }.png`)
            "
            :width="imageHeight"
            alt="logo"
            style="cursor: pointer"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="tekst mt-10">
        <transition
          enter-active-class="animate__animated animate__slideInDown"
          appear
        >
          <v-img
            contain
            class="logoB"
            src="img/tekst-wit.png"
            :width="imageHeight2"
            alt="logo"
          />
        </transition>
      </div>
    </v-row>
    <v-row justify="center">
      <div class="verder primary--text">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft"
          appear
        >
          <p class="logoC">Klik op het logo om verder te gaan <br /></p>
        </transition>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import ResultService from "@/services/ResultService";
import ErrorStart from "@/components/core/errorStart";
export default {
  name: "Start",
  components: { ErrorStart },
  data() {
    return {
      tokkie: "",
    };
  },

  methods: {
    async begin() {
      // eslint-disable-next-line
      console.log("gaat goed");

      if (this.tokkie) {
        console.log("zijn we hier");
        try {
          const payload = {
            tokkie: this.tokkie,
          };
          const response = await ResultService.getStart(payload);
          let app = this;
          app.clientId = response.data.data.clientId;
          app.firstNameClient = response.data.data.firstNameClient;
          app.lastNameClient = response.data.data.lastNameClient;
          app.firstNameUser = response.data.data.firstNameUser;
          app.lastNameUser = response.data.data.lastNameUser;
          app.emailUser = response.data.data.emailUser;
          app.telephoneUser = response.data.data.telephoneUser;
          app.websiteTeam = response.data.data.websiteTeam;
          app.companyNameTeam = response.data.data.companyNameTeam;
          app.moduleFour = response.data.data.moduleFour;
          app.companyName = response.data.data.nameCompany;
          app.pass_token = response.data.data.password_np_sec;
          localStorage.setItem("clientId", JSON.stringify(this.clientId));
          localStorage.setItem("pass_token", JSON.stringify(this.pass_token));
          localStorage.setItem(
            "firstNameClient",
            JSON.stringify(this.firstNameClient)
          );
          localStorage.setItem(
            "lastNameClient",
            JSON.stringify(this.lastNameClient)
          );
          localStorage.setItem("companyName", JSON.stringify(this.companyName));
          localStorage.setItem(
            "firstNameUser",
            JSON.stringify(this.firstNameUser)
          );
          localStorage.setItem(
            "lastNameUser",
            JSON.stringify(this.lastNameUser)
          );
          localStorage.setItem("emailUser", JSON.stringify(this.emailUser));
          localStorage.setItem(
            "telephoneUser",
            JSON.stringify(this.telephoneUser)
          );
          localStorage.setItem(
            "companyNameTeam",
            JSON.stringify(this.companyNameTeam)
          );
          localStorage.setItem("moduleFour", JSON.stringify(this.moduleFour));
          localStorage.setItem("websiteTeam", JSON.stringify(this.websiteTeam));

          this.$router.push({ name: "Style" });
        } catch (error) {
          // eslint-disable-next-line no-undef
          await EventBus.$emit("errStart", true);
        }
      } else {
        // eslint-disable-next-line no-undef
        await EventBus.$emit("errStart", true);
      }
    },
  },

  created() {
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
    if (this.tokkie !== undefined) {
      console.log("do nothing");
    } else {
      this.tokkie = this.$route.query.name;
      localStorage.setItem("tokkie", JSON.stringify(this.tokkie));
    }
  },
  computed: {
    // eslint-disable-next-line
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "350px";
        case "md":
          return "350px";
        case "lg":
          return "350px";
        case "xl":
          return "600px";
      }
    },
    // eslint-disable-next-line
    imageHeight2() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200px";
        case "sm":
          return "250px";
        case "md":
          return "300px";
        case "lg":
          return "400px";
        case "xl":
          return "600px";
      }
    },
  },
};
</script>

<style scoped>
.hoofd {
  padding-top: 15vh;
}

.logoA {
  animation-duration: 3s;
}

.logoB {
  animation-duration: 1s;
  animation-delay: 3s;
}
.logoC {
  animation-duration: 1s;
  animation-delay: 3s;
}

.verder {
  animation-delay: 3s;
}

v-img {
  margin-left: 20px;
}
</style>
