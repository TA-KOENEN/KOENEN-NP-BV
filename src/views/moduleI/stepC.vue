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
                    :text="statement[14].questionAppForm"
                    :note="statement[14].commentApp"
                    :nr-notes="statement[14].nrNotes"
                    :noteA="statement[14].noteAppFormA"
                    :noteB="statement[14].noteAppFormB"
                    :noteC="statement[14].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_n"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[14].nrOptions"
                    v-bind:optionA="statement[14].optionA"
                    v-bind:optionB="statement[14].optionB"
                    v-bind:optionC="statement[14].optionC"
                    v-bind:optionD="statement[14].optionD"
                  />

                  <div v-if="question_n === 'ke1'">
                    <StatementText
                      :text="statement[15].questionAppForm"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppFormA"
                      :noteB="statement[15].noteAppFormB"
                      :noteC="statement[15].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_o"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[15].nrOptions"
                      v-bind:optionA="statement[15].optionA"
                      v-bind:optionB="statement[15].optionB"
                      v-bind:optionC="statement[15].optionC"
                      v-bind:optionD="statement[15].optionD"
                    />

                    <div v-if="question_o === 'ke1'">
                      <StatementText
                        :text="statement[16].questionAppForm"
                        :note="statement[16].commentApp"
                        :nr-notes="statement[16].nrNotes"
                        :noteA="statement[16].noteAppFormA"
                        :noteB="statement[16].noteAppFormB"
                        :noteC="statement[16].noteAppFormC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_p"
                        v-bind:label="statement[16].label"
                      />
                    </div>

                    <StatementText
                      :text="statement[17].questionAppForm"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppFormA"
                      :noteB="statement[17].noteAppFormB"
                      :noteC="statement[17].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_q"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />

                    <StatementText
                      :text="textData[2].textAppForm"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppFormA"
                      :noteB="textData[2].noteAppFormB"
                      :noteC="textData[2].noteAppFormC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="textData[2].label"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
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
                    v-model="question_n"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[14].nrOptions"
                    v-bind:optionA="statement[14].optionA"
                    v-bind:optionB="statement[14].optionB"
                    v-bind:optionC="statement[14].optionC"
                    v-bind:optionD="statement[14].optionD"
                  />

                  <div v-if="question_n === 'ke1'">
                    <StatementText
                      :text="statement[15].questionAppInform"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppInfA"
                      :noteB="statement[15].noteAppInfB"
                      :noteC="statement[15].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_o"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[15].nrOptions"
                      v-bind:optionA="statement[15].optionA"
                      v-bind:optionB="statement[15].optionB"
                      v-bind:optionC="statement[15].optionC"
                      v-bind:optionD="statement[15].optionD"
                    />

                    <div v-if="question_o === 'ke1'">
                      <StatementText
                        :text="statement[16].questionAppInform"
                        :note="statement[16].commentApp"
                        :nr-notes="statement[16].nrNotes"
                        :noteA="statement[16].noteAppInfA"
                        :noteB="statement[16].noteAppInfB"
                        :noteC="statement[16].noteAppInfC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_p"
                        v-bind:label="statement[16].label"
                      />
                    </div>

                    <StatementText
                      :text="statement[17].questionAppInform"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppInfA"
                      :noteB="statement[17].noteAppInfB"
                      :noteC="statement[17].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_q"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />

                    <StatementText
                      :text="textData[2].textAppInform"
                      :note="textData[2].commentApp"
                      :nr-notes="textData[2].nrNotes"
                      :noteA="textData[2].noteAppInfA"
                      :noteB="textData[2].noteAppInfB"
                      :noteC="textData[2].noteAppInfC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="textData[2].label"
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
      question_n: "",
      question_o: "",
      question_p: "",
      question_q: "",
      text_a: "",
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
      this.$router.push({ name: "module-i-step-b" });
    },
    saveItem() {
      this.finishModIpartC = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));

      const payload = {
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        text_a: this.text_a,
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
          this.$router.push({ name: "module-i-step-d" });
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
    this.question_n = this.planSingle.i_bv.question_n;
    this.question_o = this.planSingle.i_bv.question_o;
    this.question_p = this.planSingle.i_bv.question_p;
    this.question_q = this.planSingle.i_bv.question_q;
    this.text_a = this.planSingle.i_bv.text_a;
    this.finishModI = this.planSingle.finishModI;
    this.finishModIpartA = this.planSingle.finishModIpartA;
    this.finishModIpartB = this.planSingle.finishModIpartB;
    this.finishModIpartC = this.planSingle.finishModIpartC;
    this.finishModIpartD = this.planSingle.finishModIpartD;
  },
};
</script>
