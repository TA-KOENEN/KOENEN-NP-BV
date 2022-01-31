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
                  <StatementText
                    :text="statement[7].questionAppForm"
                    :note="statement[7].commentApp"
                    :nr-notes="statement[7].nrNotes"
                    :noteA="statement[7].noteAppFormA"
                    :noteB="statement[7].noteAppFormB"
                    :noteC="statement[7].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_f"
                    v-bind:label="statement[7].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_g"
                    v-bind:label="statement[8].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_h"
                    v-bind:label="statement[9].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_i"
                    v-bind:label="statement[10].label"
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

                  <base-radio
                    v-model="question_j"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[11].nrOptions"
                    v-bind:optionA="statement[11].optionA"
                    v-bind:optionB="statement[11].optionB"
                    v-bind:optionC="statement[11].optionC"
                    v-bind:optionD="statement[11].optionD"
                  />

                  <div v-if="question_j === 'ke1'">
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
                      v-model="question_k"
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
                      v-model="question_l"
                      v-bind:label="statement[13].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[14].questionAppForm"
                    :note="statement[14].commentApp"
                    :nr-notes="statement[14].nrNotes"
                    :noteA="statement[14].noteAppFormA"
                    :noteB="statement[14].noteAppFormB"
                    :noteC="statement[14].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[14].nrOptions"
                    v-bind:optionA="statement[14].optionA"
                    v-bind:optionB="statement[14].optionB"
                    v-bind:optionC="statement[14].optionC"
                    v-bind:optionD="statement[14].optionD"
                  />
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[7].questionAppInform"
                    :note="statement[7].commentApp"
                    :nr-notes="statement[7].nrNotes"
                    :noteA="statement[7].noteAppInfA"
                    :noteB="statement[7].noteAppInfB"
                    :noteC="statement[7].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_f"
                    v-bind:label="statement[7].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_g"
                    v-bind:label="statement[8].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_h"
                    v-bind:label="statement[9].label"
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

                  <BaseValInput
                    rules="max:150"
                    v-model="question_i"
                    v-bind:label="statement[10].label"
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

                  <base-radio
                    v-model="question_j"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[11].nrOptions"
                    v-bind:optionA="statement[11].optionA"
                    v-bind:optionB="statement[11].optionB"
                    v-bind:optionC="statement[11].optionC"
                    v-bind:optionD="statement[11].optionD"
                  />

                  <div v-if="question_j === 'ke1'">
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
                      v-model="question_k"
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
                      v-model="question_l"
                      v-bind:label="statement[13].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[14].questionAppInform"
                    :note="statement[14].commentApp"
                    :nr-notes="statement[14].nrNotes"
                    :noteA="statement[14].noteAppInfA"
                    :noteB="statement[14].noteAppInfB"
                    :noteC="statement[14].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[14].nrOptions"
                    v-bind:optionA="statement[14].optionA"
                    v-bind:optionB="statement[14].optionB"
                    v-bind:optionC="statement[14].optionC"
                    v-bind:optionD="statement[14].optionD"
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
            <step-text
              :stepText="textAppRight[7].header"
              :number="6"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[8].header"
              :number="7"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[9].header"
              :number="8"
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
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      question_k: "",
      question_l: "",
      question_m: "",
      finishModFpartA: true,
      finishModFpartB: true,
      finishModFpartC: true,
      finishModFpartD: true,
      finishModF: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-f-step-b" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));

      const payload = {
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        question_l: this.question_l,
        question_m: this.question_m,
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
          if (this.question_m === "ke1") {
            this.$router.push({ name: "module-f-step-d" });
          } else {
            this.$router.push({ name: "module-f-end" });
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
    this.question_f = this.planSingle.f_bv.question_f;
    this.question_g = this.planSingle.f_bv.question_g;
    this.question_h = this.planSingle.f_bv.question_h;
    this.question_i = this.planSingle.f_bv.question_i;
    this.question_j = this.planSingle.f_bv.question_j;
    this.question_k = this.planSingle.f_bv.question_k;
    this.question_l = this.planSingle.f_bv.question_l;
    this.question_m = this.planSingle.f_bv.question_m;
  },
};
</script>
