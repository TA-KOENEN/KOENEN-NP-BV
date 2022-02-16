<template>
  <div>
    <ToolbarAuth :name="'Finance en IT'" />
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
                    :text="statement[5].questionAppForm"
                    :note="statement[5].commentApp"
                    :nr-notes="statement[5].nrNotes"
                    :noteA="statement[5].noteAppFormA"
                    :noteB="statement[5].noteAppFormB"
                    :noteC="statement[5].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_e"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[5].nrOptions"
                    v-bind:optionA="statement[5].optionA"
                    v-bind:optionB="statement[5].optionB"
                    v-bind:optionC="statement[5].optionC"
                    v-bind:optionD="statement[5].optionD"
                  />

                  <div v-if="question_e === 'ke1'">
                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_f"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />

                    <StatementText
                      :text="statement[7].questionAppForm"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppFormA"
                      :noteB="statement[7].noteAppFormB"
                      :noteC="statement[7].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_g"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[7].nrOptions"
                      v-bind:optionA="statement[7].optionA"
                      v-bind:optionB="statement[7].optionB"
                      v-bind:optionC="statement[7].optionC"
                      v-bind:optionD="statement[7].optionD"
                    />

                    <StatementText
                      :text="statement[8].questionAppForm"
                      :note="statement[8].commentApp"
                      :nr-notes="statement[8].nrNotes"
                      :noteA="statement[8].noteAppFormA"
                      :noteB="statement[8].noteAppFormB"
                      :noteC="statement[8].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_h"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[8].nrOptions"
                      v-bind:optionA="statement[8].optionA"
                      v-bind:optionB="statement[8].optionB"
                      v-bind:optionC="statement[8].optionC"
                      v-bind:optionD="statement[8].optionD"
                    />

                    <StatementText
                      :text="statement[9].questionAppForm"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppFormA"
                      :noteB="statement[9].noteAppFormB"
                      :noteC="statement[9].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_i"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />

                    <StatementText
                      :text="statement[10].questionAppForm"
                      :note="statement[10].commentApp"
                      :nr-notes="statement[10].nrNotes"
                      :noteA="statement[10].noteAppFormA"
                      :noteB="statement[10].noteAppFormB"
                      :noteC="statement[10].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_j"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[10].nrOptions"
                      v-bind:optionA="statement[10].optionA"
                      v-bind:optionB="statement[10].optionB"
                      v-bind:optionC="statement[10].optionC"
                      v-bind:optionD="statement[10].optionD"
                    />

                    <StatementText
                      :text="textData[1].textAppForm"
                      :note="textData[1].commentApp"
                      :nr-notes="textData[1].nrNotes"
                      :noteA="textData[1].noteAppFormA"
                      :noteB="textData[1].noteAppFormB"
                      :noteC="textData[1].noteAppFormC"
                      class="mb-5"
                    />

                    <StatementText
                      :text="statement[11].questionAppForm"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppFormA"
                      :noteB="statement[11].noteAppFormB"
                      :noteC="statement[11].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[11].label"
                    />

                    <StatementText
                      :text="statement[12].questionAppForm"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppFormA"
                      :noteB="statement[12].noteAppFormB"
                      :noteC="statement[12].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_l"
                      v-bind:label="statement[12].label"
                    />

                    <StatementText
                      :text="statement[13].questionAppForm"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppFormA"
                      :noteB="statement[13].noteAppFormB"
                      :noteC="statement[13].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_m"
                      v-bind:label="statement[13].label"
                    />
                  </div>
                </div>

                <!--                informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[5].questionAppInform"
                    :note="statement[5].commentApp"
                    :nr-notes="statement[5].nrNotes"
                    :noteA="statement[5].noteAppInfA"
                    :noteB="statement[5].noteAppInfB"
                    :noteC="statement[5].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_e"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[5].nrOptions"
                    v-bind:optionA="statement[5].optionA"
                    v-bind:optionB="statement[5].optionB"
                    v-bind:optionC="statement[5].optionC"
                    v-bind:optionD="statement[5].optionD"
                  />

                  <div v-if="question_e === 'ke1'">
                    <StatementText
                      :text="statement[6].questionAppInform"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_f"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />

                    <StatementText
                      :text="statement[7].questionAppInform"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppInfA"
                      :noteB="statement[7].noteAppInfB"
                      :noteC="statement[7].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_g"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[7].nrOptions"
                      v-bind:optionA="statement[7].optionA"
                      v-bind:optionB="statement[7].optionB"
                      v-bind:optionC="statement[7].optionC"
                      v-bind:optionD="statement[7].optionD"
                    />

                    <StatementText
                      :text="statement[8].questionAppInform"
                      :note="statement[8].commentApp"
                      :nr-notes="statement[8].nrNotes"
                      :noteA="statement[8].noteAppInfA"
                      :noteB="statement[8].noteAppInfB"
                      :noteC="statement[8].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_h"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[8].nrOptions"
                      v-bind:optionA="statement[8].optionA"
                      v-bind:optionB="statement[8].optionB"
                      v-bind:optionC="statement[8].optionC"
                      v-bind:optionD="statement[8].optionD"
                    />

                    <StatementText
                      :text="statement[9].questionAppInform"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppInfA"
                      :noteB="statement[9].noteAppInfB"
                      :noteC="statement[9].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_i"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />

                    <StatementText
                      :text="statement[10].questionAppInform"
                      :note="statement[10].commentApp"
                      :nr-notes="statement[10].nrNotes"
                      :noteA="statement[10].noteAppInfA"
                      :noteB="statement[10].noteAppInfB"
                      :noteC="statement[10].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_j"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[10].nrOptions"
                      v-bind:optionA="statement[10].optionA"
                      v-bind:optionB="statement[10].optionB"
                      v-bind:optionC="statement[10].optionC"
                      v-bind:optionD="statement[10].optionD"
                    />

                    <StatementText
                      :text="textData[1].textAppInform"
                      :note="textData[1].commentApp"
                      :nr-notes="textData[1].nrNotes"
                      :noteA="textData[1].noteAppInfA"
                      :noteB="textData[1].noteAppInfB"
                      :noteC="textData[1].noteAppInfC"
                      class="mb-5"
                    />

                    <StatementText
                      :text="statement[11].questionAppInform"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppInfA"
                      :noteB="statement[11].noteAppInfB"
                      :noteC="statement[11].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[11].label"
                    />

                    <StatementText
                      :text="statement[12].questionAppInform"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppInfA"
                      :noteB="statement[12].noteAppInfB"
                      :noteC="statement[12].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_l"
                      v-bind:label="statement[12].label"
                    />

                    <StatementText
                      :text="statement[13].questionAppInform"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppInfA"
                      :noteB="statement[13].noteAppInfB"
                      :noteC="statement[13].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_m"
                      v-bind:label="statement[13].label"
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
import textAppLeft from "@/text/moduleI/textAppLeftI.json";
import textAppRight from "@/text/moduleI/textAppRightI.json";
import Questions from "@/text/moduleI/moduleI.json";
import ExtraText from "@/text/moduleI/textI.json";
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
      question_e: "",
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      question_k: "",
      question_l: "",
      question_m: "",
      finishModIpartA: true,
      finishModIpartB: false,
      finishModIpartC: false,
      finishModIpartD: false,
      finishModI: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-i-step-a" });
    },
    saveItem() {
      this.finishModIpartB = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        question_l: this.question_l,
        question_m: this.question_m,
        finishModIpartA: this.finishModIpartA,
        finishModIpartB: this.finishModIpartB,
        finishModIpartC: this.finishModIpartC,
        finishModIpartD: this.finishModIpartD,
        finishModI: this.finishModI,
      };
      resultService
        .saveDataI(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-i-step-c" });
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
    this.question_e = this.planSingle.i_bv.question_e;
    this.question_f = this.planSingle.i_bv.question_f;
    this.question_g = this.planSingle.i_bv.question_g;
    this.question_h = this.planSingle.i_bv.question_h;
    this.question_i = this.planSingle.i_bv.question_i;
    this.question_j = this.planSingle.i_bv.question_j;
    this.question_k = this.planSingle.i_bv.question_k;
    this.question_l = this.planSingle.i_bv.question_l;
    this.question_m = this.planSingle.i_bv.question_m;
    this.finishModI = this.planSingle.finishModI;
    this.finishModIpartA = this.planSingle.finishModIpartA;
    this.finishModIpartB = this.planSingle.finishModIpartB;
    this.finishModIpartC = this.planSingle.finishModIpartC;
    this.finishModIpartD = this.planSingle.finishModIpartD;
  },
};
</script>
