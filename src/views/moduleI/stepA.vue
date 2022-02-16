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
                    class="mb-5"
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

                  <StatementText
                    :text="statement[2].questionAppForm"
                    :note="statement[2].commentApp"
                    :nr-notes="statement[2].nrNotes"
                    :noteA="statement[2].noteAppFormA"
                    :noteB="statement[2].noteAppFormB"
                    :noteC="statement[2].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_b"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[2].nrOptions"
                    v-bind:optionA="statement[2].optionA"
                    v-bind:optionB="statement[2].optionB"
                    v-bind:optionC="statement[2].optionC"
                    v-bind:optionD="statement[2].optionD"
                  />

                  <div v-if="question_b === 'ke1'">
                    <StatementText
                      :text="statement[3].questionAppForm"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppFormA"
                      :noteB="statement[3].noteAppFormB"
                      :noteC="statement[3].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_c"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[3].nrOptions"
                      v-bind:optionA="statement[3].optionA"
                      v-bind:optionB="statement[3].optionB"
                      v-bind:optionC="statement[3].optionC"
                      v-bind:optionD="statement[3].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_b === 'ke1' &&
                      (question_c === 'ke2' || question_c === 'ke3')
                    "
                  >
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
                  </div>
                </div>
                <!--informal-->

                <div v-if="!formal">
                  <StatementText
                    :text="statement[1].questionAppInform"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                    class="mb-5"
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

                  <StatementText
                    :text="statement[2].questionAppInform"
                    :note="statement[2].commentApp"
                    :nr-notes="statement[2].nrNotes"
                    :noteA="statement[2].noteAppInfA"
                    :noteB="statement[2].noteAppInfB"
                    :noteC="statement[2].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_b"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[2].nrOptions"
                    v-bind:optionA="statement[2].optionA"
                    v-bind:optionB="statement[2].optionB"
                    v-bind:optionC="statement[2].optionC"
                    v-bind:optionD="statement[2].optionD"
                  />

                  <div v-if="question_b === 'ke1'">
                    <StatementText
                      :text="statement[3].questionAppInform"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppInfA"
                      :noteB="statement[3].noteAppInfB"
                      :noteC="statement[3].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_c"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[3].nrOptions"
                      v-bind:optionA="statement[3].optionA"
                      v-bind:optionB="statement[3].optionB"
                      v-bind:optionC="statement[3].optionC"
                      v-bind:optionD="statement[3].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_b === 'ke1' &&
                      (question_c === 'ke2' || question_c === 'ke3')
                    "
                  >
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
      question_a: "",
      question_b: "",
      question_c: "",
      question_d: "",
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
      this.$router.push({ name: "module-i-start" });
    },
    saveItem() {
      this.finishModIpartA = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
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
          this.$router.push({ name: "module-i-step-b" });
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
    this.question_a = this.planSingle.i_bv.question_a;
    this.question_b = this.planSingle.i_bv.question_b;
    this.question_c = this.planSingle.i_bv.question_c;
    this.question_d = this.planSingle.i_bv.question_d;
    this.finishModI = this.planSingle.finishModI;
    this.finishModIpartA = this.planSingle.finishModIpartA;
    this.finishModIpartB = this.planSingle.finishModIpartB;
    this.finishModIpartC = this.planSingle.finishModIpartC;
    this.finishModIpartD = this.planSingle.finishModIpartD;
  },
};
</script>
