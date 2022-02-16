<template>
  <div>
    <ToolbarAuth :name="'Verkoop aan een externe partij'" />
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
                  <StatementText
                    :text="statement[1].questionAppForm"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppFormA"
                    :noteB="statement[1].noteAppFormB"
                    :noteC="statement[1].noteAppFormC"
                  />

                  <base-radio
                    v-model="question_a"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[1].nrOptions"
                    v-bind:optionA="statement[1].optionA"
                    v-bind:optionB="statement[1].optionB"
                    v-bind:optionC="statement[1].optionC"
                    v-bind:optionD="statement[1].optionD"
                  />

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

                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[2].questionAppForm"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppFormA"
                      :noteB="statement[2].noteAppFormB"
                      :noteC="statement[2].noteAppFormC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[2].label"
                    />
                  </div>
                </div>
                <div v-if="!formal">
                  <StatementText
                    :text="statement[1].questionAppInform"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                  />

                  <base-radio
                    v-model="question_a"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[1].nrOptions"
                    v-bind:optionA="statement[1].optionA"
                    v-bind:optionB="statement[1].optionB"
                    v-bind:optionC="statement[1].optionC"
                    v-bind:optionD="statement[1].optionD"
                  />

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

                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[2].questionAppInform"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppInfA"
                      :noteB="statement[2].noteAppInfB"
                      :noteC="statement[2].noteAppInfC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[2].label"
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
              :number="5"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[6].header"
              :number="6"
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
import textAppLeft from "@/text/moduleD/textAppLeftD.json";
import textAppRight from "@/text/moduleD/textAppRightD.json";
import Questions from "@/text/moduleD/moduleD.json";
import ExtraText from "@/text/moduleD/textD.json";
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
      text_a: "",
      text_b: "",
      finishModDpartA: true,
      finishModDpartB: false,
      finishModDpartC: false,
      finishModDpartD: false,
      finishModD: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-d-start" });
    },
    saveItem() {
      if (this.question_a === "ke2") {
        this.finishModDpartB = true;
        this.finishModDpartC = true;
        this.finishModDpartD = true;
        this.finishModD = true;
      }
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        text_a: this.text_a,
        text_b: this.text_b,
        finishModDpartA: this.finishModDpartA,
        finishModDpartB: this.finishModDpartB,
        finishModDpartC: this.finishModDpartC,
        finishModDpartD: this.finishModDpartD,
        finishModD: this.finishModD,
      };
      resultService
        .saveDataD(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          if (this.question_a === "ke1") {
            this.$router.push({ name: "module-d-step-b" });
          } else {
            this.$router.push({ name: "module-d-end" });
          }
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
    this.question_a = this.planSingle.d_bv.question_a;
    this.text_a = this.planSingle.d_bv.text_a;
    this.text_b = this.planSingle.d_bv.text_b;
    this.finishModD = this.planSingle.finishModD;
    this.finishModCpartA = this.planSingle.finishModCpartA;
    this.finishModCpartB = this.planSingle.finishModCpartB;
    this.finishModCpartC = this.planSingle.finishModCpartC;
    this.finishModCpartD = this.planSingle.finishModCpartD;
  },
};
</script>
