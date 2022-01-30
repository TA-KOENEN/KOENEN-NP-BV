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
                    :text="statement[23].questionAppForm"
                    :note="statement[23].commentApp"
                    :nr-notes="statement[23].nrNotes"
                    :noteA="statement[23].noteAppFormA"
                    :noteB="statement[23].noteAppFormB"
                    :noteC="statement[23].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_ap"
                    v-bind:label="statement[23].label"
                  />

                  <StatementText
                    :text="statement[24].questionAppForm"
                    :note="statement[24].commentApp"
                    :nr-notes="statement[24].nrNotes"
                    :noteA="statement[24].noteAppFormA"
                    :noteB="statement[24].noteAppFormB"
                    :noteC="statement[24].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_aq"
                    v-bind:label="statement[24].label"
                  />

                  <StatementText
                    :text="statement[25].questionAppForm"
                    :note="statement[25].commentApp"
                    :nr-notes="statement[25].nrNotes"
                    :noteA="statement[25].noteAppFormA"
                    :noteB="statement[25].noteAppFormB"
                    :noteC="statement[25].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_ar"
                    v-bind:label="statement[25].label"
                  />

                  <StatementText
                    :text="statement[26].questionAppForm"
                    :note="statement[26].commentApp"
                    :nr-notes="statement[26].nrNotes"
                    :noteA="statement[26].noteAppFormA"
                    :noteB="statement[26].noteAppFormB"
                    :noteC="statement[26].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_as"
                    v-bind:label="statement[26].label"
                  />

                  <StatementText
                    :text="statement[27].questionAppForm"
                    :note="statement[27].commentApp"
                    :nr-notes="statement[27].nrNotes"
                    :noteA="statement[27].noteAppFormA"
                    :noteB="statement[27].noteAppFormB"
                    :noteC="statement[27].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_at"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[27].nrOptions"
                    v-bind:optionA="statement[27].optionA"
                    v-bind:optionB="statement[27].optionB"
                    v-bind:optionC="statement[27].optionC"
                    v-bind:optionD="statement[27].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_at === 'ke1'">
                    <StatementText
                      :text="statement[28].questionAppForm"
                      :note="statement[28].commentApp"
                      :nr-notes="statement[28].nrNotes"
                      :noteA="statement[28].noteAppFormA"
                      :noteB="statement[28].noteAppFormB"
                      :noteC="statement[28].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_au"
                      v-bind:label="statement[28].label"
                    />

                    <StatementText
                      :text="statement[29].questionAppForm"
                      :note="statement[29].commentApp"
                      :nr-notes="statement[29].nrNotes"
                      :noteA="statement[29].noteAppFormA"
                      :noteB="statement[29].noteAppFormB"
                      :noteC="statement[29].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_av"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[5].textAppForm"
                    :note="textData[5].commentApp"
                    :nr-notes="textData[5].nrNotes"
                    :noteA="textData[5].noteAppFormA"
                    :noteB="textData[5].noteAppFormB"
                    :noteC="textData[5].noteAppFormC"
                    class="info--text mb-5"
                  />
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[23].questionAppInform"
                    :note="statement[23].commentApp"
                    :nr-notes="statement[23].nrNotes"
                    :noteA="statement[23].noteAppInfA"
                    :noteB="statement[23].noteAppInfB"
                    :noteC="statement[23].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_ap"
                    v-bind:label="statement[23].label"
                  />

                  <StatementText
                    :text="statement[24].questionAppInform"
                    :note="statement[24].commentApp"
                    :nr-notes="statement[24].nrNotes"
                    :noteA="statement[24].noteAppInfA"
                    :noteB="statement[24].noteAppInfB"
                    :noteC="statement[24].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_aq"
                    v-bind:label="statement[24].label"
                  />

                  <StatementText
                    :text="statement[25].questionAppInform"
                    :note="statement[25].commentApp"
                    :nr-notes="statement[25].nrNotes"
                    :noteA="statement[25].noteAppInfA"
                    :noteB="statement[25].noteAppInfB"
                    :noteC="statement[25].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_ar"
                    v-bind:label="statement[25].label"
                  />

                  <StatementText
                    :text="statement[26].questionAppInform"
                    :note="statement[26].commentApp"
                    :nr-notes="statement[26].nrNotes"
                    :noteA="statement[26].noteAppInfA"
                    :noteB="statement[26].noteAppInfB"
                    :noteC="statement[26].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_as"
                    v-bind:label="statement[26].label"
                  />

                  <StatementText
                    :text="statement[27].questionAppInform"
                    :note="statement[27].commentApp"
                    :nr-notes="statement[27].nrNotes"
                    :noteA="statement[27].noteAppInfA"
                    :noteB="statement[27].noteAppInfB"
                    :noteC="statement[27].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_at"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[27].nrOptions"
                    v-bind:optionA="statement[27].optionA"
                    v-bind:optionB="statement[27].optionB"
                    v-bind:optionC="statement[27].optionC"
                    v-bind:optionD="statement[27].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_at === 'ke1'">
                    <StatementText
                      :text="statement[28].questionAppInform"
                      :note="statement[28].commentApp"
                      :nr-notes="statement[28].nrNotes"
                      :noteA="statement[28].noteAppInfA"
                      :noteB="statement[28].noteAppInfB"
                      :noteC="statement[28].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_au"
                      v-bind:label="statement[28].label"
                    />

                    <StatementText
                      :text="statement[29].questionAppInform"
                      :note="statement[29].commentApp"
                      :nr-notes="statement[29].nrNotes"
                      :noteA="statement[29].noteAppInfA"
                      :noteB="statement[29].noteAppInfB"
                      :noteC="statement[29].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_av"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[5].textAppInform"
                    :note="textData[5].commentApp"
                    :nr-notes="textData[5].nrNotes"
                    :noteA="textData[5].noteAppInfA"
                    :noteB="textData[5].noteAppInfB"
                    :noteC="textData[5].noteAppInfC"
                    class="info--text mb-5"
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
      question_ap: "",
      question_aq: "",
      question_ar: "",
      question_as: "",
      question_at: "",
      question_au: "",
      question_av: "",
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
      this.$router.push({ name: "module-f-step-e" });
    },
    saveItem() {
      if (this.question_r === "ke2") {
        this.finishModDpartD = true;
        this.finishModD = true;
      }
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));

      const payload = {
        question_ap: this.question_ap,
        question_aq: this.question_aq,
        question_ar: this.question_ar,
        question_as: this.question_as,
        question_at: this.question_at,
        question_au: this.question_au,
        question_av: this.question_av,
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
          this.$router.push({ name: "module-f-end" });
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
    this.question_ap = this.planSingle.f_bv.question_ap;
    this.question_aq = this.planSingle.f_bv.question_aq;
    this.question_ar = this.planSingle.f_bv.question_ar;
    this.question_as = this.planSingle.f_bv.question_as;
    this.question_at = this.planSingle.f_bv.question_at;
    this.question_au = this.planSingle.f_bv.question_au;
    this.question_av = this.planSingle.f_bv.question_av;
  },
};
</script>
