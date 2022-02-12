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
                    class="mb-5 mt-5"
                  />

                  <StatementText
                    :text="statement[1].questionAppForm"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppFormA"
                    :noteB="statement[1].noteAppFormB"
                    :noteC="statement[1].noteAppFormC"
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:150"
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
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:150"
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
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:25"
                    v-model="question_c"
                    v-bind:label="statement[3].label"
                  />
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="textData[1].textAppInf"
                    :note="textData[1].commentApp"
                    :nr-notes="textData[1].nrNotes"
                    :noteA="textData[1].noteAppInfA"
                    :noteB="textData[1].noteAppInfB"
                    :noteC="textData[1].noteAppInfC"
                    class="mb-5 mt-5"
                  />

                  <StatementText
                    :text="statement[1].questionAppInf"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:150"
                    v-model="question_a"
                    v-bind:label="statement[1].label"
                  />
                  <StatementText
                    :text="statement[2].questionAppInf"
                    :note="statement[2].commentApp"
                    :nr-notes="statement[2].nrNotes"
                    :noteA="statement[2].noteAppInfA"
                    :noteB="statement[2].noteAppInfB"
                    :noteC="statement[2].noteAppInfC"
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:150"
                    v-model="question_b"
                    v-bind:label="statement[2].label"
                  />
                  <StatementText
                    :text="statement[3].questionAppInf"
                    :note="statement[3].commentApp"
                    :nr-notes="statement[3].nrNotes"
                    :noteA="statement[3].noteAppInfA"
                    :noteB="statement[3].noteAppInfB"
                    :noteC="statement[3].noteAppInfC"
                    class="mb-5 mt-5"
                  />
                  <BaseValInput
                    rules="required|max:25"
                    v-model="question_c"
                    v-bind:label="statement[3].label"
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
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      formal: null,
      question_a: "",
      question_b: "",
      question_c: "",
      finishModA: false,
      finishModApartA: true,
      finishModApartB: false,
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
      this.$router.push({ name: "module-a-start" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      this.finishModApartA = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
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
          this.$router.push({ name: "module-a-step-b" });
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
    this.question_a = this.planSingle.a_bv.question_a;
    this.question_b = this.planSingle.a_bv.question_b;
    this.question_c = this.planSingle.a_bv.question_c;
    this.finishModA = this.planSingle.finishModA;
    this.finishModApartA = this.planSingle.finishModApartA;
    this.finishModApartB = this.planSingle.finishModApartB;
    this.finishModApartC = this.planSingle.finishModApartC;
    this.finishModApartD = this.planSingle.finishModApartD;
    this.finishModA = this.planSingle.finishModA;
  },
};
</script>
