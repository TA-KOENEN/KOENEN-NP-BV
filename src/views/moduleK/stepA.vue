<template>
  <div>
    <ToolbarAuth :name="'Management en Medewerkers'" />
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
                  <div v-if="question_a === 'ke1'">
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
                    <StatementText
                      :text="statement[4].questionAppForm"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppFormA"
                      :noteB="statement[4].noteAppFormB"
                      :noteC="statement[4].noteAppFormC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[4].label"
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
                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                    <div v-if="question_e === 'ke1'">
                      <StatementText
                        :text="textData[3].textAppForm"
                        :note="textData[3].commentApp"
                        :nr-notes="textData[3].nrNotes"
                        :noteA="textData[3].noteAppFormA"
                        :noteB="textData[3].noteAppFormB"
                        :noteC="textData[3].noteAppFormC"
                        class="mb-5"
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
                        :text="textData[4].textAppForm"
                        :note="textData[4].commentApp"
                        :nr-notes="textData[4].nrNotes"
                        :noteA="textData[4].noteAppFormA"
                        :noteB="textData[4].noteAppFormB"
                        :noteC="textData[4].noteAppFormC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="textData[4].label"
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
                        v-model="question_i"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[11].nrOptions"
                        v-bind:optionA="statement[11].optionA"
                        v-bind:optionB="statement[11].optionB"
                        v-bind:optionC="statement[11].optionC"
                        v-bind:optionD="statement[11].optionD"
                      />
                      <div v-if="question_i === 'ke1'">
                        <StatementText
                          :text="textData[5].textAppForm"
                          :note="textData[5].commentApp"
                          :nr-notes="textData[5].nrNotes"
                          :noteA="textData[5].noteAppFormA"
                          :noteB="textData[5].noteAppFormB"
                          :noteC="textData[5].noteAppFormC"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_j"
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
                          v-model="question_k"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_l"
                          v-bind:label="statement[14].label"
                        />
                        <StatementText
                          :text="textData[6].textAppForm"
                          :note="textData[6].commentApp"
                          :nr-notes="textData[6].nrNotes"
                          :noteA="textData[6].noteAppFormA"
                          :noteB="textData[6].noteAppFormB"
                          :noteC="textData[6].noteAppFormC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_c"
                          v-bind:label="textData[6].label"
                        />
                        <StatementText
                          :text="textData[7].textAppForm"
                          :note="textData[7].commentApp"
                          :nr-notes="textData[7].nrNotes"
                          :noteA="textData[7].noteAppFormA"
                          :noteB="textData[7].noteAppFormB"
                          :noteC="textData[7].noteAppFormC"
                          class="mb-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!--                informal-->
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
                  <div v-if="question_a === 'ke1'">
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
                    <StatementText
                      :text="statement[4].questionAppInform"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppInfA"
                      :noteB="statement[4].noteAppInfB"
                      :noteC="statement[4].noteAppInfC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[4].label"
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
                    <StatementText
                      :text="statement[6].questionAppInform"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                    <div v-if="question_e === 'ke1'">
                      <StatementText
                        :text="textData[3].textAppInform"
                        :note="textData[3].commentApp"
                        :nr-notes="textData[3].nrNotes"
                        :noteA="textData[3].noteAppInfA"
                        :noteB="textData[3].noteAppInfB"
                        :noteC="textData[3].noteAppInfC"
                        class="mb-5"
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
                        :text="textData[4].textAppInform"
                        :note="textData[4].commentApp"
                        :nr-notes="textData[4].nrNotes"
                        :noteA="textData[4].noteAppInfA"
                        :noteB="textData[4].noteAppInfB"
                        :noteC="textData[4].noteAppInfC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="textData[4].label"
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
                        v-model="question_i"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[11].nrOptions"
                        v-bind:optionA="statement[11].optionA"
                        v-bind:optionB="statement[11].optionB"
                        v-bind:optionC="statement[11].optionC"
                        v-bind:optionD="statement[11].optionD"
                      />
                      <div v-if="question_i === 'ke1'">
                        <StatementText
                          :text="textData[5].textAppInform"
                          :note="textData[5].commentApp"
                          :nr-notes="textData[5].nrNotes"
                          :noteA="textData[5].noteAppInfA"
                          :noteB="textData[5].noteAppInfB"
                          :noteC="textData[5].noteAppInfC"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_j"
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
                          v-model="question_k"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_l"
                          v-bind:label="statement[14].label"
                        />
                        <StatementText
                          :text="textData[6].textAppInform"
                          :note="textData[6].commentApp"
                          :nr-notes="textData[6].nrNotes"
                          :noteA="textData[6].noteAppInfA"
                          :noteB="textData[6].noteAppInfB"
                          :noteC="textData[6].noteAppInfC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_c"
                          v-bind:label="textData[6].label"
                        />
                        <StatementText
                          :text="textData[7].textAppInform"
                          :note="textData[7].commentApp"
                          :nr-notes="textData[7].nrNotes"
                          :noteA="textData[7].noteAppInfA"
                          :noteB="textData[7].noteAppInfB"
                          :noteC="textData[7].noteAppInfC"
                          class="mb-5"
                        />
                      </div>
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

            <step-text
              :stepText="textAppRight[4].header"
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
import textAppLeft from "@/text/moduleK/textAppLeftK.json";
import textAppRight from "@/text/moduleK/textAppRightK.json";
import Questions from "@/text/moduleK/moduleK.json";
import ExtraText from "@/text/moduleK/textK.json";
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
      question_l: "",
      text_a: "",
      text_b: "",
      text_c: "",
      finishModHpartA: true,
      finishModHpartB: false,
      finishModHpartC: false,
      finishModHpartD: false,
      finishModH: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-k-start" });
    },
    saveItem() {
      this.finishModKpartA = true;
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
        question_l: this.question_l,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        finishModKpartA: this.finishModKpartA,
        finishModKpartB: this.finishModKpartB,
        finishModKpartC: this.finishModKpartC,
        finishModKpartD: this.finishModKpartD,
        finishModK: this.finishModK,
      };
      resultService
        .saveDataK(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-k-step-b" });
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
    this.question_a = this.planSingle.k_bv.question_a;
    this.question_b = this.planSingle.k_bv.question_b;
    this.question_c = this.planSingle.k_bv.question_c;
    this.question_d = this.planSingle.k_bv.question_d;
    this.question_e = this.planSingle.k_bv.question_e;
    this.question_f = this.planSingle.k_bv.question_f;
    this.question_g = this.planSingle.k_bv.question_g;
    this.question_h = this.planSingle.k_bv.question_h;
    this.question_i = this.planSingle.k_bv.question_i;
    this.question_j = this.planSingle.k_bv.question_j;
    this.question_k = this.planSingle.k_bv.question_k;
    this.question_l = this.planSingle.k_bv.question_l;
    this.text_a = this.planSingle.k_bv.text_a;
    this.text_b = this.planSingle.k_bv.text_b;
    this.text_c = this.planSingle.k_bv.text_c;
    this.finishModK = this.planSingle.finishModK;
    this.finishModKpartA = this.planSingle.finishModKpartA;
    this.finishModKpartB = this.planSingle.finishModKpartB;
    this.finishModKpartC = this.planSingle.finishModKpartC;
    this.finishModKpartD = this.planSingle.finishModKpartD;
  },
};
</script>
