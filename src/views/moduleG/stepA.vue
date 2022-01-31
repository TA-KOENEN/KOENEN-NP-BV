<template>
  <div>
    <ToolbarAuth :name="'Mede-eigenaren'" />
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
                    :text="textData[1].textAppForm"
                    :note="textData[1].commentApp"
                    :nr-notes="textData[1].nrNotes"
                    :noteA="textData[1].noteAppFormA"
                    :noteB="textData[1].noteAppFormB"
                    :noteC="textData[1].noteAppFormC"
                    class="mb-5"
                  />

                  <StatementText
                    :text="statement[1].questionAppForm"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppFormA"
                    :noteB="statement[1].noteAppFormB"
                    :noteC="statement[1].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_a"
                    v-bind:label="statement[1].label"
                  />

                  <StatementText
                    :text="statement[2].questionAppForm"
                    :note="statement[2].commentApp"
                    :nr-notes="statement[2].nrNotes"
                    :noteA="statement[2].noteAppFormA"
                    :noteB="statement[2].noteAppFormB"
                    :noteC="statement[2].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_b"
                    v-bind:label="statement[2].label"
                  />

                  <StatementText
                    :text="statement[3].questionAppForm"
                    :note="statement[3].commentApp"
                    :nr-notes="statement[3].nrNotes"
                    :noteA="statement[3].noteAppFormA"
                    :noteB="statement[3].noteAppFormB"
                    :noteC="statement[3].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_c"
                    v-bind:label="statement[3].label"
                  />

                  <custom-divider />

                  <h3 class="primary--text mb-5 mt-5">Tweede mede-eigenaar</h3>

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
                      class="mb-5"
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
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_f"
                      v-bind:label="statement[6].label"
                    />

                    =
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
                      v-model="question_g"
                      v-bind:label="statement[7].label"
                    />

                    <custom-divider />

                    <h3 class="primary--text mb-5">Derde mede-eigenaar</h3>

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
                      class="mb-5"
                    />
                  </div>

                  <div v-if="question_d === 'ke1' && question_h === 'ke1'">
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
                      v-model="question_i"
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
                      v-model="question_j"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[11].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[4].textAppForm"
                    :note="textData[4].commentApp"
                    :nr-notes="textData[4].nrNotes"
                    :noteA="textData[4].noteAppFormA"
                    :noteB="textData[4].noteAppFormB"
                    :noteC="textData[4].noteAppFormC"
                    class="mb-5"
                  />
                </div>

                <!--                informal-->
                <div v-if="!formal">
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
                    :text="statement[1].questionAppInform"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_a"
                    v-bind:label="statement[1].label"
                  />

                  <StatementText
                    :text="statement[2].questionAppInform"
                    :note="statement[2].commentApp"
                    :nr-notes="statement[2].nrNotes"
                    :noteA="statement[2].noteAppInfA"
                    :noteB="statement[2].noteAppInfB"
                    :noteC="statement[2].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_b"
                    v-bind:label="statement[2].label"
                  />

                  <StatementText
                    :text="statement[3].questionAppInform"
                    :note="statement[3].commentApp"
                    :nr-notes="statement[3].nrNotes"
                    :noteA="statement[3].noteAppInfA"
                    :noteB="statement[3].noteAppInfB"
                    :noteC="statement[3].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_c"
                    v-bind:label="statement[3].label"
                  />

                  <custom-divider />

                  <h3 class="primary--text mb-5 mt-5">Tweede mede-eigenaar</h3>

                  <StatementText
                    :text="statement[4].questionAppInform"
                    :note="statement[4].commentApp"
                    :nr-notes="statement[4].nrNotes"
                    :noteA="statement[4].noteAppInfA"
                    :noteB="statement[4].noteAppInfB"
                    :noteC="statement[4].noteAppInfC"
                    class="mb-5"
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
                      v-model="question_e"
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
                      v-model="question_f"
                      v-bind:label="statement[6].label"
                    />

                    =
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
                      v-model="question_g"
                      v-bind:label="statement[7].label"
                    />

                    <custom-divider />

                    <h3 class="primary--text mb-5">Derde mede-eigenaar</h3>

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
                      class="mb-5"
                    />
                  </div>

                  <div v-if="question_d === 'ke1' && question_h === 'ke1'">
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
                      v-model="question_i"
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
                      v-model="question_j"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[11].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[4].textAppInform"
                    :note="textData[4].commentApp"
                    :nr-notes="textData[4].nrNotes"
                    :noteA="textData[4].noteAppInfA"
                    :noteB="textData[4].noteAppInfB"
                    :noteC="textData[4].noteAppInfC"
                    class="mb-5"
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
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleG/textAppLeftG.json";
import textAppRight from "@/text/moduleG/textAppRightG.json";
import Questions from "@/text/moduleG/moduleG.json";
import ExtraText from "@/text/moduleG/textG.json";
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
      question_b: "",
      question_c: "",
      question_d: "",
      question_e: "",
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      question_k: "",
      finishModGpartA: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-g-start" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        finishModGpartA: this.finishModGpartA,
      };
      resultService
        .saveDataG(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-g-step-b" });
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
    this.question_a = this.planSingle.g_bv.question_a;
    this.question_b = this.planSingle.g_bv.question_b;
    this.question_c = this.planSingle.g_bv.question_c;
    this.question_d = this.planSingle.g_bv.question_d;
    this.question_e = this.planSingle.g_bv.question_e;
    this.question_f = this.planSingle.g_bv.question_f;
    this.question_g = this.planSingle.g_bv.question_g;
    this.question_h = this.planSingle.g_bv.question_h;
    this.question_i = this.planSingle.g_bv.question_i;
    this.question_j = this.planSingle.g_bv.question_j;
    this.question_k = this.planSingle.g_bv.question_k;
  },
};
</script>
