<template>
  <div>
    <ToolbarAuth :name="'Opvolging door medewerkers'" />
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
                :head-text="textAppLeft[4].header"
                :text-a="textAppLeft[4].texta"
                :text-b="textAppLeft[4].textb"
                :text-c="textAppLeft[4].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[4].headerInf"
                :text-a="textAppLeft[4].textaInf"
                :text-b="textAppLeft[4].textbInf"
                :text-c="textAppLeft[4].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[4].header"
              :number="4"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <!-- formal-->
                <div v-if="formal">
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[13].questionAppForm"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppFormA"
                      :noteB="statement[13].noteAppFormB"
                      :noteC="statement[13].noteAppFormC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>

                  <div v-if="question_a === 'ke2'">
                    <StatementText
                      :text="statement[3].questionAppForm"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppFormA"
                      :noteB="statement[3].noteAppFormB"
                      :noteC="statement[3].noteAppFormC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="formal">
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[13].questionAppInform"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppInfA"
                      :noteB="statement[13].noteAppInfB"
                      :noteC="statement[13].noteAppInfC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>

                  <div v-if="question_a === 'ke2'">
                    <StatementText
                      :text="statement[3].questionAppInform"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppInfA"
                      :noteB="statement[3].noteAppInfB"
                      :noteC="statement[3].noteAppInfC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>
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
              :stepText="textAppRight[5].header"
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
import textAppLeft from "@/text/moduleC/textAppLeftC.json";
import textAppRight from "@/text/moduleC/textAppRightC.json";
import Questions from "@/text/moduleC/moduleC.json";
import ExtraText from "@/text/moduleC/textC.json";
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
      question_a: "",
      text_b: "",
      text_d: "",
      finishModCpartC: true,
      finishModC: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      if (this.question_a === "ke1") {
        this.$router.push({ name: "module-c-step-b" });
      } else {
        this.$router.push({ name: "module-c-step-a" });
      }
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        text_b: this.text_b,
        text_d: this.text_d,
        finishModC: this.finishModC,
        finishModCpartC: this.finishModCpartC,
      };
      resultService
        .saveDataC(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-c-end" });
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
    this.question_a = this.planSingle.c_bv.question_a;
    this.text_b = this.planSingle.c_bv.text_b;
    this.text_d = this.planSingle.c_bv.text_d;
  },
};
</script>
