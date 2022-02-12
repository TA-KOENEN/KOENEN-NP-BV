<template>
  <div>
    <ToolbarAuth :name="'Noodopvolging'" />
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
                    :text="statement[4].questionAppForm"
                    :note="statement[4].commentApp"
                    :nr-notes="statement[4].nrNotes"
                    :noteA="statement[4].noteAppFormA"
                    :noteB="statement[4].noteAppFormB"
                    :noteC="statement[4].noteAppFormC"
                    class="mb-5 mt-5"
                  />
                  <base-radio
                    v-model="question_d"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[4].nrOptions"
                    v-bind:optionA="statement[4].optionA"
                    v-bind:optionB="statement[4].optionB"
                    v-bind:optionC="statement[4].optionC"
                    v-bind:optionD="statement[4].optionD"
                  />
                  <div v-if="question_d === 'ke1'">
                    <StatementText
                      :text="statement[5].questionAppForm"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppFormA"
                      :noteB="statement[5].noteAppFormB"
                      :noteC="statement[5].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_e"
                      v-bind:label="statement[5].label"
                    />
                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_f"
                      v-bind:label="statement[6].label"
                    />
                    <StatementText
                      :text="statement[7].questionAppForm"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppFormA"
                      :noteB="statement[7].noteAppFormB"
                      :noteC="statement[7].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_g"
                      v-bind:label="statement[7].label"
                    />
                    <StatementText
                      :text="textData[2].textAppForm"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppFormA"
                      :noteB="textData[2].noteAppFormB"
                      :noteC="textData[2].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <StatementText
                      :text="statement[8].questionAppForm"
                      :note="statement[8].commentApp"
                      :nr-notes="statement[8].nrNotes"
                      :noteA="statement[8].noteAppFormA"
                      :noteB="statement[8].noteAppFormB"
                      :noteC="statement[8].noteAppFormC"
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
                      :text="statement[11].questionAppForm"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppFormA"
                      :noteB="statement[11].noteAppFormB"
                      :noteC="statement[11].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_k"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[11].nrOptions"
                      v-bind:optionA="statement[11].optionA"
                      v-bind:optionB="statement[11].optionB"
                      v-bind:optionC="statement[11].optionC"
                      v-bind:optionD="statement[11].optionD"
                    />
                    <StatementText
                      :text="statement[12].questionAppForm"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppFormA"
                      :noteB="statement[12].noteAppFormB"
                      :noteC="statement[12].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_l"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[12].nrOptions"
                      v-bind:optionA="statement[12].optionA"
                      v-bind:optionB="statement[12].optionB"
                      v-bind:optionC="statement[12].optionC"
                      v-bind:optionD="statement[12].optionD"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[4].questionAppInf"
                    :note="statement[4].commentApp"
                    :nr-notes="statement[4].nrNotes"
                    :noteA="statement[4].noteAppInfA"
                    :noteB="statement[4].noteAppInfB"
                    :noteC="statement[4].noteAppInfC"
                    class="mb-5 mt-5"
                  />
                  <base-radio
                    v-model="question_d"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[4].nrOptions"
                    v-bind:optionA="statement[4].optionA"
                    v-bind:optionB="statement[4].optionB"
                    v-bind:optionC="statement[4].optionC"
                    v-bind:optionD="statement[4].optionD"
                  />
                  <div v-if="question_d === 'ke1'">
                    <StatementText
                      :text="statement[5].questionAppInf"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppInfA"
                      :noteB="statement[5].noteAppInfB"
                      :noteC="statement[5].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_e"
                      v-bind:label="statement[5].label"
                    />
                    <StatementText
                      :text="statement[6].questionAppInf"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_f"
                      v-bind:label="statement[6].label"
                    />
                    <StatementText
                      :text="statement[7].questionAppInf"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppInfA"
                      :noteB="statement[7].noteAppInfB"
                      :noteC="statement[7].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_g"
                      v-bind:label="statement[7].label"
                    />
                    <StatementText
                      :text="textData[2].textAppInf"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppInfA"
                      :noteB="textData[2].noteAppInfB"
                      :noteC="textData[2].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <StatementText
                      :text="statement[8].questionAppInf"
                      :note="statement[8].commentApp"
                      :nr-notes="statement[8].nrNotes"
                      :noteA="statement[8].noteAppInfA"
                      :noteB="statement[8].noteAppInfB"
                      :noteC="statement[8].noteAppInfC"
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
                      :text="statement[9].questionAppInf"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppInfA"
                      :noteB="statement[9].noteAppInfB"
                      :noteC="statement[9].noteAppInfC"
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
                      :text="statement[10].questionAppInf"
                      :note="statement[10].commentApp"
                      :nr-notes="statement[10].nrNotes"
                      :noteA="statement[10].noteAppInfA"
                      :noteB="statement[10].noteAppInfB"
                      :noteC="statement[10].noteAppInfC"
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
                      :text="statement[11].questionAppInf"
                      :note="statement[11].commentApp"
                      :nr-notes="statement[11].nrNotes"
                      :noteA="statement[11].noteAppInfA"
                      :noteB="statement[11].noteAppInfB"
                      :noteC="statement[11].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_k"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[11].nrOptions"
                      v-bind:optionA="statement[11].optionA"
                      v-bind:optionB="statement[11].optionB"
                      v-bind:optionC="statement[11].optionC"
                      v-bind:optionD="statement[11].optionD"
                    />
                    <StatementText
                      :text="statement[12].questionAppInf"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppInfA"
                      :noteB="statement[12].noteAppInfB"
                      :noteC="statement[12].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_l"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[12].nrOptions"
                      v-bind:optionA="statement[12].optionA"
                      v-bind:optionB="statement[12].optionB"
                      v-bind:optionC="statement[12].optionC"
                      v-bind:optionD="statement[12].optionD"
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
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleA/textAppLeftA.json";
import textAppRight from "@/text/moduleA/textAppRightA.json";
import Questions from "@/text/moduleA/moduleA.json";
import ExtraText from "@/text/moduleA/textA.json";
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
      question_d: "",
      question_e: "",
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      question_k: "",
      question_l: "",
      finishModA: false,
      finishModApartA: true,
      finishModApartB: true,
      finishModApartC: false,
      finishModApartD: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-a-step-a" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      this.finishModApartB = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        question_l: this.question_l,
        finishModApartA: this.finishModApartA,
        finishModApartB: this.finishModApartB,
        finishModApartC: this.finishModApartC,
        finishModApartD: this.finishModApartD,
        finishModA: this.finishModA,
      };
      resultService
        .saveDataA(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-a-step-c" });
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
    this.question_d = this.planSingle.a_bv.question_d;
    this.question_e = this.planSingle.a_bv.question_e;
    this.question_f = this.planSingle.a_bv.question_f;
    this.question_g = this.planSingle.a_bv.question_g;
    this.question_h = this.planSingle.a_bv.question_h;
    this.question_i = this.planSingle.a_bv.question_i;
    this.question_j = this.planSingle.a_bv.question_j;
    this.question_k = this.planSingle.a_bv.question_k;
    this.question_l = this.planSingle.a_bv.question_l;
    this.finishModApartA = this.planSingle.finishModApartA;
    this.finishModApartB = this.planSingle.finishModApartB;
    this.finishModApartC = this.planSingle.finishModApartC;
    this.finishModApartD = this.planSingle.finishModApartD;
    this.finishModA = this.planSingle.finishModA;
  },
};
</script>
