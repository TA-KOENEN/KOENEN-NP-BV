<template>
  <div>
    <ToolbarAuth :name="'Structuur'" />
    <div class="ma-0 pa-0">
      <div v-if="saving">
        <saving />
      </div>
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          class="leftPanel justify-center"
          :class="{ 'full-page': $vuetify.breakpoint.mdAndUp }"
        >
          <div class="ma-10">
            <div v-if="formal">
              <text-left
                :head-text="textAppLeft[2].header"
                :text-a="textAppLeft[2].texta"
                :text-b="textAppLeft[2].textb"
                :text-c="textAppLeft[2].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[2].headerInf"
                :text-a="textAppLeft[2].textaInf"
                :text-b="textAppLeft[2].textbInf"
                :text-c="textAppLeft[2].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[2].header"
              :number="2"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <div v-if="formal">
                  <StatementText :text="'Gegevens onderneming'" class="mb-5" />
                  Bedrijfsnaam: {{ planSingle.name_company }}<br />
                  Vestigingsadres: {{ planSingle.address_company }}<br />
                  Vestigingsplaats: {{ planSingle.zip_company }}
                  {{ planSingle.place_company }}<br /><br /><br />

                  <StatementText
                    :text="statement[1].questionAppForm"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppFormA"
                    :noteB="statement[1].noteAppFormB"
                    :noteC="statement[1].noteAppFormC"
                  />

                  <base-val-area
                    rules="max:500"
                    v-model="text_a"
                    v-bind:label="statement[1].label"
                  />
                </div>

                <div v-if="!formal">
                  <StatementText :text="'Gegevens onderneming'" class="mb-5" />
                  Bedrijfsnaam: {{ planSingle.name_company }}<br />
                  Vestigingsadres: {{ planSingle.address_company }}<br />
                  Vestigingsplaats: {{ planSingle.zip_company }}
                  {{ planSingle.place_company }}<br /><br /><br />

                  <StatementText
                    :text="statement[1].questionAppInform"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                  />

                  <base-val-area
                    rules="max:500"
                    v-model="text_a"
                    v-bind:label="statement[1].label"
                  />
                </div>

                <v-row class="mt-10">
                  <btn-stop :on-click="stopThis" />
                  <v-spacer />
                  <btn-back :on-click="goBack" />
                  <btn-continue
                    :on-click="saveItem"
                    :disabled="invalid || !validate"
                  />
                </v-row>
              </v-form>
            </ValidationObserver>

            <CustomDivider />
            <div class="mt-10" />
            <step-text
              :stepText="textAppRight[3].header"
              :number="3"
              class="mb-5"
              :active="false"
            />

            <step-text
              :stepText="textAppRight[4].header"
              :number="4"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[5].header"
              :number="4"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[6].header"
              :number="5"
              class="mb-5"
              :active="false"
            />
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleF/textAppLeftF.json";
import textAppRight from "@/text/moduleF/textAppRightF.json";
import Questions from "@/text/moduleF/moduleF.json";
import ExtraText from "@/text/moduleF/textF.json";
import { mapGetters } from "vuex";
import resultService from "@/services/ResultService";

export default {
  name: "stepOne",

  data() {
    return {
      errors: null,
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      formal: null,
      text_a: "",
      finishModFpartA: true,
      finishModFpartB: false,
      finishModFpartC: false,
      finishModFpartD: false,
      finishModF: false,

      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-f-start" });
    },
    saveItem() {
      console.log("next Step works");
      if (
        this.planSingle.question_a === "ke2" &&
        this.planSingle.question_c === "ke2"
      ) {
        this.finishModFpartA = true;
        this.finishModFpartB = true;
        this.finishModFpartC = true;
        this.finishModFpartD = true;
        this.finishModF = true;
      }
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        text_a: this.text_a,
        finishModFpartA: this.finishModFpartA,
        finishModFpartB: this.finishModFpartB,
        finishModFpartC: this.finishModFpartC,
        finishModFpartD: this.finishModFpartD,
        finishModF: this.finishModF,
      };
      resultService
        .saveDataF(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          if (
            this.planSingle.question_a === "ke2" &&
            this.planSingle.question_c === "ke2"
          ) {
            this.$router.push({ name: "module-f-end" });
          } else this.$router.push({ name: "module-f-step-b" });
        });
    },
  },
  computed: {
    ...mapGetters("plan", ["loading", "planSingle"]),
  },
  created() {
    let clientId = JSON.parse(localStorage.getItem("pass_token"));
    this.$store.dispatch("plan/getPlan", clientId);
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.text_a = this.planSingle.f_bv.text_a;
  },
};
</script>
