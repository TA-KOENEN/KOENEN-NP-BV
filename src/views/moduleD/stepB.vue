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
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_b"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[4].nrOptions"
                    v-bind:optionA="statement[4].optionA"
                    v-bind:optionB="statement[4].optionB"
                    v-bind:optionC="statement[4].optionC"
                    v-bind:optionD="statement[4].optionD"
                  />

                  <div v-if="question_b === 'ke1'">
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
                      :text="statement[5].questionAppForm"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppFormA"
                      :noteB="statement[5].noteAppFormB"
                      :noteC="statement[5].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_c"
                      v-bind:label="statement[5].label"
                    />

                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[6].label"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_e"
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

                    <base-radio
                      v-model="question_f"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[8].nrOptions"
                      v-bind:optionA="statement[8].optionA"
                      v-bind:optionB="statement[8].optionB"
                      v-bind:optionC="statement[8].optionC"
                      v-bind:optionD="statement[8].optionD"
                      class="mb-5"
                    />

                    <div v-if="question_f === 'ke1'">
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
                        rules="max:180"
                        v-model="question_g"
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

                      <base-radio
                        v-model="question_h"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[10].nrOptions"
                        v-bind:optionA="statement[10].optionA"
                        v-bind:optionB="statement[10].optionB"
                        v-bind:optionC="statement[10].optionC"
                        v-bind:optionD="statement[10].optionD"
                      />

                      <div v-if="question_h === 'ke1'">
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
                          rules="max:180"
                          v-model="question_i"
                          v-bind:label="statement[11].label"
                        />
                      </div>
                    </div>

                    <StatementText
                      :text="textData[2].textAppForm"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppFormA"
                      :noteB="textData[2].noteAppFormB"
                      :noteC="textData[2].noteAppFormC"
                      class="mb-5"
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

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[2].label"
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

                    <base-radio
                      v-model="question_j"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[13].nrOptions"
                      v-bind:optionA="statement[13].optionA"
                      v-bind:optionB="statement[13].optionB"
                      v-bind:optionC="statement[13].optionC"
                      v-bind:optionD="statement[13].optionD"
                      class="mb-5"
                    />
                  </div>
                </div>

                <!--                informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[4].questionAppInform"
                    :note="statement[4].commentApp"
                    :nr-notes="statement[4].nrNotes"
                    :noteA="statement[4].noteAppInfA"
                    :noteB="statement[4].noteAppInfB"
                    :noteC="statement[4].noteAppInfC"
                  />

                  <base-radio
                    v-model="question_b"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[4].nrOptions"
                    v-bind:optionA="statement[4].optionA"
                    v-bind:optionB="statement[4].optionB"
                    v-bind:optionC="statement[4].optionC"
                    v-bind:optionD="statement[4].optionD"
                  />

                  <div v-if="question_b === 'ke1'">
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
                      :text="statement[5].questionAppInform"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppInfA"
                      :noteB="statement[5].noteAppInfB"
                      :noteC="statement[5].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_c"
                      v-bind:label="statement[5].label"
                    />

                    <StatementText
                      :text="statement[6].questionAppInform"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[6].label"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_e"
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

                    <base-radio
                      v-model="question_f"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[8].nrOptions"
                      v-bind:optionA="statement[8].optionA"
                      v-bind:optionB="statement[8].optionB"
                      v-bind:optionC="statement[8].optionC"
                      v-bind:optionD="statement[8].optionD"
                      class="mb-5"
                    />

                    <div v-if="question_f === 'ke1'">
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
                        rules="max:180"
                        v-model="question_g"
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

                      <base-radio
                        v-model="question_h"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[10].nrOptions"
                        v-bind:optionA="statement[10].optionA"
                        v-bind:optionB="statement[10].optionB"
                        v-bind:optionC="statement[10].optionC"
                        v-bind:optionD="statement[10].optionD"
                      />

                      <div v-if="question_h === 'ke1'">
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
                          rules="max:180"
                          v-model="question_i"
                          v-bind:label="statement[11].label"
                        />
                      </div>
                    </div>

                    <StatementText
                      :text="textData[2].textAppInform"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppInfA"
                      :noteB="textData[2].noteAppInfB"
                      :noteC="textData[2].noteAppInfC"
                      class="mb-5"
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

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[2].label"
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

                    <base-radio
                      v-model="question_j"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[13].nrOptions"
                      v-bind:optionA="statement[13].optionA"
                      v-bind:optionB="statement[13].optionB"
                      v-bind:optionC="statement[13].optionC"
                      v-bind:optionD="statement[13].optionD"
                      class="mb-5"
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
      question_b: "",
      question_c: "",
      question_d: "",
      question_e: "",
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      text_c: "",
      finishModDpartA: true,
      finishModDpartB: true,
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
      this.$router.push({ name: "module-d-step-a" });
    },
    saveItem() {
      if (this.question_j === "ke2") {
        this.finishModDpartC = true;
        this.finishModDpartD = true;
        this.finishModD = true;
      }
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        text_c: this.text_c,
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
          if (this.question_j === "ke1") {
            this.$router.push({ name: "module-d-step-c" });
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
    this.question_b = this.planSingle.d_bv.question_b;
    this.question_c = this.planSingle.d_bv.question_c;
    this.question_d = this.planSingle.d_bv.question_d;
    this.question_e = this.planSingle.d_bv.question_e;
    this.question_f = this.planSingle.d_bv.question_f;
    this.question_g = this.planSingle.d_bv.question_g;
    this.question_h = this.planSingle.d_bv.question_h;
    this.question_i = this.planSingle.d_bv.question_i;
    this.question_j = this.planSingle.d_bv.question_j;
    this.text_c = this.planSingle.d_bv.text_c;
  },
};
</script>
