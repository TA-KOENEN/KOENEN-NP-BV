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
                :head-text="textAppLeft[3].header"
                :text-a="textAppLeft[3].texta"
                :text-b="textAppLeft[3].textb"
                :text-c="textAppLeft[3].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[3].headerInf"
                :text-a="textAppLeft[3].textaInf"
                :text-b="textAppLeft[3].textbInf"
                :text-c="textAppLeft[3].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[3].header"
              :number="3"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <div v-if="formal">
                  <StatementText
                    :text="statement[9].questionAppForm"
                    :note="statement[9].commentApp"
                    :nr-notes="statement[9].nrNotes"
                    :noteA="statement[9].noteAppFormA"
                    :noteB="statement[9].noteAppFormB"
                    :noteC="statement[9].noteAppFormC"
                  />

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[9].nrOptions"
                    v-bind:optionA="statement[9].optionA"
                    v-bind:optionB="statement[9].optionB"
                    v-bind:optionC="statement[9].optionC"
                    v-bind:optionD="statement[9].optionD"
                  />

                  <div v-if="question_g === 'ke1'">
                    <StatementText
                      :text="textData[3].textAppForm"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppFormA"
                      :noteB="textData[3].noteAppFormB"
                      :noteC="textData[3].noteAppFormC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[10].label"
                    />

                    <StatementText
                      :text="statement[11].questionAppForm"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppFormA"
                      :noteB="statement[11].noteAppFormB"
                      :noteC="statement[11].noteAppFormC"
                    />

                    <base-radio
                      v-model="question_h"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[11].nrOptions"
                      v-bind:optionA="statement[11].optionA"
                      v-bind:optionB="statement[11].optionB"
                      v-bind:optionC="statement[11].optionC"
                      v-bind:optionD="statement[11].optionD"
                    />

                    <div v-if="question_h === 'ke1'">
                      <StatementText
                        :text="statement[12].questionAppForm"
                        :note="statement[12].commentApp"
                        :nr-notes="statement[12].nrNotes"
                        :noteA="statement[12].noteAppFormA"
                        :noteB="statement[12].noteAppFormB"
                        :noteC="statement[12].noteAppFormC"
                      />

                      <BaseValInput
                        rules="required|max:150"
                        v-model="question_i"
                        v-bind:label="statement[12].label"
                      />
                    </div>
                  </div>
                </div>
                <div v-if="!formal">
                  <StatementText
                    :text="statement[9].questionAppInform"
                    :note="statement[9].commentApp"
                    :nr-notes="statement[9].nrNotes"
                    :noteA="statement[9].noteAppInfA"
                    :noteB="statement[9].noteAppInfB"
                    :noteC="statement[9].noteAppInfC"
                  />

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[9].nrOptions"
                    v-bind:optionA="statement[9].optionA"
                    v-bind:optionB="statement[9].optionB"
                    v-bind:optionC="statement[9].optionC"
                    v-bind:optionD="statement[9].optionD"
                  />

                  <div v-if="question_g === 'ke1'">
                    <StatementText
                      :text="textData[3].textAppInform"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppInfA"
                      :noteB="textData[3].noteAppInfB"
                      :noteC="textData[3].noteAppInfC"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[10].label"
                    />

                    <StatementText
                      :text="statement[11].questionAppInform"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppInfA"
                      :noteB="statement[11].noteAppInfB"
                      :noteC="statement[11].noteAppInfC"
                    />

                    <base-radio
                      v-model="question_h"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[11].nrOptions"
                      v-bind:optionA="statement[11].optionA"
                      v-bind:optionB="statement[11].optionB"
                      v-bind:optionC="statement[11].optionC"
                      v-bind:optionD="statement[11].optionD"
                    />

                    <div v-if="question_h === 'ke1'">
                      <StatementText
                        :text="statement[12].questionAppInform"
                        :note="statement[12].commentApp"
                        :nr-notes="statement[12].nrNotes"
                        :noteA="statement[12].noteAppInfA"
                        :noteB="statement[12].noteAppInfB"
                        :noteC="statement[12].noteAppInfC"
                      />

                      <BaseValInput
                        rules="required|max:150"
                        v-model="question_i"
                        v-bind:label="statement[12].label"
                      />
                    </div>
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
      question_g: "",
      question_h: "",
      question_i: "",
      text_c: "",
      finishModCpartA: false,
      finishModCpartB: false,
      finishModCpartC: false,
      finishModCpartD: false,
      finishModC: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-c-step-a" });
    },
    saveItem() {
      console.log("next Step works");
      this.finishModCpartB = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        text_c: this.text_c,
        finishModCpartA: this.finishModCpartA,
        finishModCpartB: this.finishModCpartB,
        finishModCpartC: this.finishModCpartC,
        finishModCpartD: this.finishModCpartD,
        finishModC: this.finishModC,
      };
      resultService
        .saveDataC(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-c-step-c" });
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
    this.question_g = this.planSingle.c_bv.question_g;
    this.question_h = this.planSingle.c_bv.question_h;
    this.question_i = this.planSingle.c_bv.question_i;
    this.text_c = this.planSingle.c_bv.text_c;
    this.finishModC = this.planSingle.finishModC;
    this.finishModCpartA = this.planSingle.finishModCpartA;
    this.finishModCpartB = this.planSingle.finishModCpartB;
    this.finishModCpartC = this.planSingle.finishModCpartC;
    this.finishModCpartD = this.planSingle.finishModCpartD;
  },
};
</script>
