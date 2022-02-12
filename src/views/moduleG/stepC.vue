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
                    :text="statement[20].questionAppForm"
                    :note="statement[20].commentApp"
                    :nr-notes="statement[20].nrNotes"
                    :noteA="statement[20].noteAppFormA"
                    :noteB="statement[20].noteAppFormB"
                    :noteC="statement[20].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_t"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[20].nrOptions"
                    v-bind:optionA="statement[20].optionA"
                    v-bind:optionB="statement[20].optionB"
                    v-bind:optionC="statement[20].optionC"
                    v-bind:optionD="statement[20].optionD"
                  />

                  <div v-if="question_t === 'ke1'">
                    <StatementText
                      :text="textData[5].textAppForm"
                      :note="textData[5].commentApp"
                      :nr-notes="textData[5].nrNotes"
                      :noteA="textData[5].noteAppFormA"
                      :noteB="textData[5].noteAppFormB"
                      :noteC="textData[5].noteAppFormC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[21].label"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[20].questionAppInform"
                    :note="statement[20].commentApp"
                    :nr-notes="statement[20].nrNotes"
                    :noteA="statement[20].noteAppInfA"
                    :noteB="statement[20].noteAppInfB"
                    :noteC="statement[20].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_t"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[20].nrOptions"
                    v-bind:optionA="statement[20].optionA"
                    v-bind:optionB="statement[20].optionB"
                    v-bind:optionC="statement[20].optionC"
                    v-bind:optionD="statement[20].optionD"
                  />

                  <div v-if="question_t === 'ke1'">
                    <StatementText
                      :text="textData[5].textAppInform"
                      :note="textData[5].commentApp"
                      :nr-notes="textData[5].nrNotes"
                      :noteA="textData[5].noteAppInfA"
                      :noteB="textData[5].noteAppInfB"
                      :noteC="textData[5].noteAppInfC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[21].label"
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
      question_t: "",
      text_a: "",
      finishModGpartA: true,
      finishModGpartB: true,
      finishModGpartC: true,
      finishModGpartD: true,
      finishModG: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-g-step-b" });
    },
    saveItem() {
      this.finishModGpartC = true;
      this.finishModG = true;
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_t: this.question_t,
        text_a: this.text_a,
        finishModGpartA: this.finishModGpartA,
        finishModGpartB: this.finishModGpartB,
        finishModGpartC: this.finishModGpartC,
        finishModGpartD: this.finishModGpartD,
        finishModG: this.finishModG,
      };
      resultService
        .saveDataG(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-g-end" });
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
    this.question_t = this.planSingle.g_bv.question_t;
    this.text_a = this.planSingle.g_bv.text_a;
    this.finishModG = this.planSingle.finishModG;
    this.finishModGpartA = this.planSingle.finishModGpartA;
    this.finishModGpartB = this.planSingle.finishModGpartB;
    this.finishModGpartC = this.planSingle.finishModGpartC;
    this.finishModGpartD = this.planSingle.finishModGpartD;
  },
};
</script>
