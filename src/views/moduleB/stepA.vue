<template>
  <div>
    <ToolbarAuth :name="'Voortzetten familie'" />
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
                    class="mb-5 mt-5"
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
                  <div v-if="question_a === 'ke2'">
                    <StatementText
                      :text="statement[3].questionAppForm"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppFormA"
                      :noteB="statement[3].noteAppFormB"
                      :noteC="statement[3].noteAppFormC"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[2].questionAppForm"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppFormA"
                      :noteB="statement[2].noteAppFormB"
                      :noteC="statement[2].noteAppFormC"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[2].label"
                    />
                    <StatementText
                      :text="statement[4].questionAppForm"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppFormA"
                      :noteB="statement[4].noteAppFormB"
                      :noteC="statement[4].noteAppFormC"
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
                      v-bind:optionE="statement[4].optionE"
                    />
                    <div v-if="question_b === 'ke5'">
                      <StatementText
                        :text="statement[5].questionAppForm"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppFormA"
                        :noteB="statement[5].noteAppFormB"
                        :noteC="statement[5].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_c"
                        v-bind:label="statement[5].label"
                      />
                    </div>

                    <div
                      v-if="
                        question_b === 'ke1' ||
                        question_b === 'ke2' ||
                        question_b === 'ke3' ||
                        question_b === 'ke4' ||
                        question_b === 'ke5'
                      "
                    >
                      <StatementText
                        :text="statement[6].questionAppForm"
                        :note="statement[6].commentApp"
                        :nr-notes="statement[6].nrNotes"
                        :noteA="statement[6].noteAppFormA"
                        :noteB="statement[6].noteAppFormB"
                        :noteC="statement[6].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[6].label"
                      />
                    </div>
                    <StatementText
                      :text="statement[7].questionAppForm"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppFormA"
                      :noteB="statement[7].noteAppFormB"
                      :noteC="statement[7].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_c"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[7].nrOptions"
                      v-bind:optionA="statement[7].optionA"
                      v-bind:optionB="statement[7].optionB"
                      v-bind:optionC="statement[7].optionC"
                    />
                    <div
                      v-if="
                        question_c === 'ke1' ||
                        question_c === 'ke2' ||
                        question_c === 'ke3'
                      "
                    >
                      <StatementText
                        :text="statement[8].questionAppForm"
                        :note="statement[8].commentApp"
                        :nr-notes="statement[8].nrNotes"
                        :noteA="statement[8].noteAppFormA"
                        :noteB="statement[8].noteAppFormB"
                        :noteC="statement[8].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_e"
                        v-bind:label="statement[8].label"
                      />
                    </div>
                    <StatementText
                      :text="statement[9].questionAppForm"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppFormA"
                      :noteB="statement[9].noteAppFormB"
                      :noteC="statement[9].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_d"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />
                    <div
                      v-if="
                        question_d === 'ke1' ||
                        question_d === 'ke2' ||
                        question_d === 'ke3' ||
                        question_d === 'ke4'
                      "
                    >
                      <StatementText
                        :text="statement[10].questionAppForm"
                        :note="statement[10].commentApp"
                        :nr-notes="statement[10].nrNotes"
                        :noteA="statement[10].noteAppFormA"
                        :noteB="statement[10].noteAppFormB"
                        :noteC="statement[10].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_f"
                        v-bind:label="statement[10].label"
                      />
                    </div>
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
                    class="mb-5 mt-5"
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
                  <div v-if="question_a === 'ke2'">
                    <StatementText
                      :text="statement[3].questionAppInform"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppInfA"
                      :noteB="statement[3].noteAppInfB"
                      :noteC="statement[3].noteAppInfC"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_b"
                      v-bind:label="statement[3].label"
                    />
                  </div>
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="statement[2].questionAppInform"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppInfA"
                      :noteB="statement[2].noteAppInfB"
                      :noteC="statement[2].noteAppInfC"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[2].label"
                    />
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
                      v-bind:optionE="statement[4].optionE"
                    />
                    <div v-if="question_b === 'ke5'">
                      <StatementText
                        :text="statement[5].questionAppInform"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppInfA"
                        :noteB="statement[5].noteAppInfB"
                        :noteC="statement[5].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_c"
                        v-bind:label="statement[5].label"
                      />
                    </div>

                    <div
                      v-if="
                        question_b === 'ke1' ||
                        question_b === 'ke2' ||
                        question_b === 'ke3' ||
                        question_b === 'ke4' ||
                        question_b === 'ke5'
                      "
                    >
                      <StatementText
                        :text="statement[6].questionAppInform"
                        :note="statement[6].commentApp"
                        :nr-notes="statement[6].nrNotes"
                        :noteA="statement[6].noteAppInfA"
                        :noteB="statement[6].noteAppInfB"
                        :noteC="statement[6].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[6].label"
                      />
                    </div>
                    <StatementText
                      :text="statement[7].questionAppInform"
                      :note="statement[7].commentApp"
                      :nr-notes="statement[7].nrNotes"
                      :noteA="statement[7].noteAppInfA"
                      :noteB="statement[7].noteAppInfB"
                      :noteC="statement[7].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_c"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[7].nrOptions"
                      v-bind:optionA="statement[7].optionA"
                      v-bind:optionB="statement[7].optionB"
                      v-bind:optionC="statement[7].optionC"
                    />
                    <div
                      v-if="
                        question_c === 'ke1' ||
                        question_c === 'ke2' ||
                        question_c === 'ke3'
                      "
                    >
                      <StatementText
                        :text="statement[8].questionAppInform"
                        :note="statement[8].commentApp"
                        :nr-notes="statement[8].nrNotes"
                        :noteA="statement[8].noteAppInfA"
                        :noteB="statement[8].noteAppInfB"
                        :noteC="statement[8].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_e"
                        v-bind:label="statement[8].label"
                      />
                    </div>
                    <StatementText
                      :text="statement[9].questionAppInform"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppInfA"
                      :noteB="statement[9].noteAppInfB"
                      :noteC="statement[9].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_d"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />
                    <div
                      v-if="
                        question_d === 'ke1' ||
                        question_d === 'ke2' ||
                        question_d === 'ke3' ||
                        question_d === 'ke4'
                      "
                    >
                      <StatementText
                        :text="statement[10].questionAppInform"
                        :note="statement[10].commentApp"
                        :nr-notes="statement[10].nrNotes"
                        :noteA="statement[10].noteAppInfA"
                        :noteB="statement[10].noteAppInfB"
                        :noteC="statement[10].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_f"
                        v-bind:label="statement[10].label"
                      />
                    </div>
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
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleB/textAppLeftB.json";
import textAppRight from "@/text/moduleB/textAppRightB.json";
import Questions from "@/text/moduleB/moduleB.json";
import ExtraText from "@/text/moduleB/textB.json";
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
      text_a: "",
      text_b: "",
      text_c: "",
      text_d: "",
      text_e: "",
      text_f: "",
      finishModB: true,
      finishModBpartA: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-b-start" });
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
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
        text_e: this.text_e,
        text_f: this.text_f,
        finishModB: this.finishModB,
        finishModBpartA: this.finishModBpartA,
      };
      resultService
        .saveDataB(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-b-end" });
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
    this.question_a = this.planSingle.b_bv.question_a;
    this.question_b = this.planSingle.b_bv.question_b;
    this.question_c = this.planSingle.b_bv.question_c;
    this.question_d = this.planSingle.b_bv.question_d;
    this.text_a = this.planSingle.b_bv.text_a;
    this.text_b = this.planSingle.b_bv.text_b;
    this.text_c = this.planSingle.b_bv.text_c;
    this.text_d = this.planSingle.b_bv.text_d;
    this.text_e = this.planSingle.b_bv.text_e;
    this.text_f = this.planSingle.b_bv.text_f;
  },
};
</script>
