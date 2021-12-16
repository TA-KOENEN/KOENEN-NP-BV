<template>
  <div>
    <ToolbarAuth :name="'Noodopvolging'" />
    <report />
    <error-report />
    <div class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          class="leftPanel justify-center"
          :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
        >
          <div class="ma-10">
            <div v-if="formal">
              <text-left-end
                :head-text="textEnd.header"
                :text-a="textEnd.texta"
                :text-b="textEnd.textb"
                :text-c="textEnd.textc"
                :text-d="textEnd.textd"
                :text-e="textEnd.texte"
                :text-f="textEnd.textf"
                :text-g="textEnd.textg"
                :name="contactData.name"
                :email="contactData.email"
                :telephone="contactData.telephone"
                :website="contactData.website"
              />
            </div>
            <div v-if="!formal">
              <text-left-end
                :head-text="textEnd.headerInf"
                :text-a="textEnd.textaInf"
                :text-b="textEnd.textbInf"
                :text-c="textEnd.textcInf"
                :text-d="textEnd.textdInf"
                :text-e="textEnd.texteInf"
                :text-f="textEnd.textfInf"
                :text-g="textEnd.textgInf"
                :name="contactData.name"
                :email="contactData.email"
                :telephone="contactData.telephone"
                :website="contactData.website"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textEnd.header"
              :number="12"
              class="mb-5"
              :active="true"
            />
            <CustomDivider />
            <ValidationObserver v-slot="{ invalid }">
              <form ref="form">
                <base-val-input
                  :textA="'Voornaam'"
                  :textB="'Verplicht veld'"
                  :rules="'required|max:50'"
                  :label="'Voornaam'"
                  v-model="firstNameClient"
                />
                <base-val-input
                  :textA="'Achternaam'"
                  :textB="'Verplicht veld'"
                  :rules="'required|max:150'"
                  :label="'Achternaam'"
                  v-model="lastNameClient"
                />
                <base-val-input
                  :textA="'email'"
                  :textB="'Verplicht veld'"
                  :rules="'required|email'"
                  :label="'email'"
                  v-model="emailClient"
                />
                <base-val-input
                  :textA="'Telefoon'"
                  :textB="'Niet verplicht'"
                  :rules="'max:25'"
                  :label="'Telefoon'"
                  v-model="telephoneClient"
                />
                <base-val-input
                  :textA="'Bedrijfsnaam'"
                  :textB="'Niet verplicht'"
                  :rules="'max:150'"
                  :label="'Bedrijfsnaam'"
                  v-model="companyNameClient"
                />
                <base-val-input
                  :textA="'Heeft u al een contactpersoon binnen onze organisatie'"
                  :textB="'Zo ja wie, zo kunnen wij zorgen dat het op de juiste plek terecht komt.'"
                  :rules="'max:150'"
                  :label="'Contactpersoon'"
                  v-model="contactClient"
                />

                <v-row class="mt-10 mb-10 justify-center">
                  <btn-report :on-click="getReport" :disabled="invalid" />
                </v-row>
                <CustomDivider />
              </form>
            </ValidationObserver>
            <v-row class="mt-10 mb-10">
              <v-spacer />
              <btn-back :onClick="backStep" />
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textEind from "@/text/textEind.json";
import textData from "@/text/textApp.json";
import contactData from "@/text/contact.json";
import ResultService from "@/services/ResultService";
import BaseValInput from "@/components/input/BaseValInput";

export default {
  name: "stepEnd",
  components: { BaseValInput },
  data() {
    return {
      textEnd: textEind,
      contactData: contactData,
      textIntro: textData,
      formal: null,
      firstNameClient: null,
      lastNameClient: null,
      emailClient: null,
      telephoneClient: "",
      companyNameClient: "",
      contactClient: "",
      team_id: 1,
      user_id: 1,
      style: "informeel",
    };
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quick.question_b;
      },
    },
    question_c: {
      get() {
        return this.$store.state.quick.question_c;
      },
    },
    question_d: {
      get() {
        return this.$store.state.quick.question_d;
      },
    },
    question_e: {
      get() {
        return this.$store.state.quick.question_e;
      },
    },
    question_f: {
      get() {
        return this.$store.state.quick.question_f;
      },
    },
    question_g: {
      get() {
        return this.$store.state.quick.question_g;
      },
    },

    sl_a: {
      get() {
        return this.$store.state.quick.sl_a;
      },
    },
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },

    async getReport() {
      // eslint-disable-next-line
      console.log("gaat goed");
      if (this.formal) {
        this.style = "formeel";
      }
      if (!this.formal) {
        this.style = "informeel";
      }
      const payload = {
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        sl_a: this.sl_a,
        emailClient: this.emailClient,
        firstNameClient: this.firstNameClient,
        lastNameClient: this.lastNameClient,
        companyNameClient: this.companyNameClient,
        telephoneClient: this.telephoneClient,
        contactClient: this.contactClient,
        team_id: this.team_id,
        user_id: this.user_id,
        style: this.style,
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReport(payload);
        console.log("rapport verzonden");
        // eslint-disable-next-line no-undef
        EventBus.$emit("reportSend", true);

        await this.sleep(4000);
        localStorage.removeItem("dark_theme");
        localStorage.removeItem("guest");
        localStorage.removeItem("formal");
        await this.$router.push({ path: "/Start" });
      } catch (error) {
        // eslint-disable-next-line no-undef
        EventBus.$emit("errReport", true);
        this.disableBtnReport = false;
      }
    },
    backStep() {
      this.$router.push({ name: "stepSeven" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.clientId = JSON.parse(localStorage.getItem("clientId"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
    this.website_team = JSON.parse(localStorage.getItem("website_team"));
  },
};
</script>
