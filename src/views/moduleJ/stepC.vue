<template>
  <div>
    <ToolbarAuth :name="'Rol van de ondernemer'" />
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
                    :text="statement[11].questionAppForm"
                    :note="statement[11].commentApp"
                    :nr-notes="statement[11].nrNotes"
                    :noteA="statement[11].noteAppFormA"
                    :noteB="statement[11].noteAppFormB"
                    :noteC="statement[11].noteAppFormC"
                    class="mb-5"
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

                  <div v-if="question_k === 'ke1'">
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
                  </div>
                  <div v-if="question_k === 'ke2'">
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
                      :text="statement[13].questionAppForm"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppFormA"
                      :noteB="statement[13].noteAppFormB"
                      :noteC="statement[13].noteAppFormC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[13].label"
                    />

                    <StatementText
                      :text="statement[14].questionAppForm"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppFormA"
                      :noteB="statement[14].noteAppFormB"
                      :noteC="statement[14].noteAppFormC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[14].label"
                    />

                    <StatementText
                      :text="statement[15].questionAppForm"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppFormA"
                      :noteB="statement[15].noteAppFormB"
                      :noteC="statement[15].noteAppFormC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[15].label"
                    />
                  </div>
                </div>

                <!--informal-->
                <div v-if="!formal">
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
                    v-model="question_k"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[11].nrOptions"
                    v-bind:optionA="statement[11].optionA"
                    v-bind:optionB="statement[11].optionB"
                    v-bind:optionC="statement[11].optionC"
                    v-bind:optionD="statement[11].optionD"
                  />

                  <div v-if="question_k === 'ke1'">
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
                  </div>
                  <div v-if="question_k === 'ke2'">
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
                      :text="statement[13].questionAppInform"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppInfA"
                      :noteB="statement[13].noteAppInfB"
                      :noteC="statement[13].noteAppInfC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[13].label"
                    />

                    <StatementText
                      :text="statement[14].questionAppInform"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppInfA"
                      :noteB="statement[14].noteAppInfB"
                      :noteC="statement[14].noteAppInfC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[14].label"
                    />

                    <StatementText
                      :text="statement[15].questionAppInform"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppInfA"
                      :noteB="statement[15].noteAppInfB"
                      :noteC="statement[15].noteAppInfC"
                      class="mb-5"
                    />

                    <base-val-area
                      rules="max:500"
                      v-model="text_c"
                      v-bind:label="statement[15].label"
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
import textAppLeft from "@/text/moduleJ/textAppLeftJ.json";
import textAppRight from "@/text/moduleJ/textAppRightJ.json";
import Questions from "@/text/moduleJ/moduleJ.json";
import ExtraText from "@/text/moduleJ/textJ.json";
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

      question_k: "",
      question_l: "",
      text_a: "",
      text_b: "",
      text_c: "",
      finishModJ: false,
      finishModJpartA: true,
      finishModJpartB: true,
      finishModJpartC: true,
      finishModJpartD: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-j-step-b" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_k: this.question_k,
        question_l: this.question_l,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        finishModJpartA: this.finishModJpartA,
        finishModJpartB: this.finishModJpartB,
        finishModJpartC: this.finishModJpartC,
        finishModJpartD: this.finishModJpartD,
        finishModJ: this.finishModJ,
      };
      resultService
        .saveDataJ(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-j-step-d" });
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
    this.question_k = this.planSingle.j_bv.question_k;
    this.question_l = this.planSingle.j_bv.question_l;
    this.text_a = this.planSingle.j_bv.text_a;
    this.text_b = this.planSingle.j_bv.text_b;
    this.text_c = this.planSingle.j_bv.text_c;
    this.finishModJ = this.planSingle.finishModJ;
    this.finishModJpartA = this.planSingle.finishModJpartA;
    this.finishModJpartB = this.planSingle.finishModJpartB;
    this.finishModJpartC = this.planSingle.finishModJpartC;
    this.finishModJpartD = this.planSingle.finishModJpartD;
  },
};
</script>
