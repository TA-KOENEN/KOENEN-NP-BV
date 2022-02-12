<template>
  <div>
    <ToolbarAuth :name="'Opvolging door medewerkers'" />
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
                    class="mb-5"
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
                      :text="statement[4].questionAppForm"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppFormA"
                      :noteB="statement[4].noteAppFormB"
                      :noteC="statement[4].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="required|max:150"
                      v-model="question_b"
                      v-bind:label="statement[1].label"
                    />

                    <div v-if="question_b !== null">
                      <StatementText
                        :text="statement[5].questionAppForm"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppFormA"
                        :noteB="statement[5].noteAppFormB"
                        :noteC="statement[5].noteAppFormC"
                      />

                      <base-radio
                        v-model="question_c"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[6].nrOptions"
                        v-bind:optionA="statement[6].optionA"
                        v-bind:optionB="statement[6].optionB"
                        v-bind:optionC="statement[6].optionC"
                        v-bind:optionD="statement[6].optionD"
                      />
                    </div>
                    <div v-if="question_c === 'ke1'">
                      <BaseValInput
                        rules="required|max:150"
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
                      />

                      <div v-if="question_d !== null">
                        <base-radio
                          v-model="question_e"
                          :error-messages="errors"
                          rules="required"
                          v-bind:nrOptions="statement[7].nrOptions"
                          v-bind:optionA="statement[7].optionA"
                          v-bind:optionB="statement[7].optionB"
                          v-bind:optionC="statement[7].optionC"
                          v-bind:optionD="statement[7].optionD"
                        />
                      </div>
                      <div v-if="question_e === 'ke1'">
                        <BaseValInput
                          rules="required|max:150"
                          v-model="question_f"
                          v-bind:label="statement[8].label"
                        />

                        <StatementText
                          :text="textData[2].textAppForm"
                          :note="textData[2].commentApp"
                          :nr-notes="textData[2].nrNotes"
                          :noteA="textData[2].noteAppFormA"
                          :noteB="textData[2].noteAppFormB"
                          :noteC="textData[2].noteAppFormC"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
                    class="mb-5"
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
                      :text="statement[4].questionAppInform"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppInfA"
                      :noteB="statement[4].noteAppInfB"
                      :noteC="statement[4].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="required|max:150"
                      v-model="question_b"
                      v-bind:label="statement[1].label"
                    />

                    <div v-if="question_b !== null">
                      <StatementText
                        :text="statement[5].questionAppInform"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppInfA"
                        :noteB="statement[5].noteAppInfB"
                        :noteC="statement[5].noteAppInfC"
                      />

                      <base-radio
                        v-model="question_c"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[6].nrOptions"
                        v-bind:optionA="statement[6].optionA"
                        v-bind:optionB="statement[6].optionB"
                        v-bind:optionC="statement[6].optionC"
                        v-bind:optionD="statement[6].optionD"
                      />
                    </div>
                    <div v-if="question_c === 'ke1'">
                      <BaseValInput
                        rules="required|max:150"
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
                      />

                      <div v-if="question_d !== null">
                        <base-radio
                          v-model="question_e"
                          :error-messages="errors"
                          rules="required"
                          v-bind:nrOptions="statement[7].nrOptions"
                          v-bind:optionA="statement[7].optionA"
                          v-bind:optionB="statement[7].optionB"
                          v-bind:optionC="statement[7].optionC"
                          v-bind:optionD="statement[7].optionD"
                        />
                      </div>
                      <div v-if="question_e === 'ke1'">
                        <BaseValInput
                          rules="required|max:150"
                          v-model="question_f"
                          v-bind:label="statement[8].label"
                        />

                        <StatementText
                          :text="textData[2].textAppInform"
                          :note="textData[2].commentApp"
                          :nr-notes="textData[2].nrNotes"
                          :noteA="textData[2].noteAppInfA"
                          :noteB="textData[2].noteAppInfB"
                          :noteC="textData[2].noteAppInfC"
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
import textAppLeft from "@/text/moduleC/textAppLeftC.json";
import textAppRight from "@/text/moduleC/textAppRightC.json";
import Questions from "@/text/moduleC/moduleC.json";
import ExtraText from "@/text/moduleC/textC.json";
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
      finishModCpartA: false,
      finishModCpartB: false,
      finishModCpartC: false,
      finishModCpartD: false,
      finishModC: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-c-start" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      this.finishModCpartA = true;
      if (this.question_a === "ke2") {
        this.finishModCpartB = true;
      }
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        finishModCpartA: this.finishModCpartA,
        finishModCpartB: this.finishModCpartB,
        finishModCpartC: this.finishModCpartC,
        finishModCpartD: this.finishModCpartD,
        finishModC: this.finishModC,
      };
      resultService
        .saveDataC(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          if (this.question_a === "ke1") {
            this.$router.push({ name: "module-c-step-b" });
          } else {
            this.$router.push({ name: "module-c-step-c" });
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
    this.question_a = this.planSingle.c_bv.question_a;
    this.question_b = this.planSingle.c_bv.question_b;
    this.question_c = this.planSingle.c_bv.question_c;
    this.question_d = this.planSingle.c_bv.question_d;
    this.question_e = this.planSingle.c_bv.question_e;
    this.question_f = this.planSingle.c_bv.question_f;
    this.finishModC = this.planSingle.finishModC;
    this.finishModCpartA = this.planSingle.finishModCpartA;
    this.finishModCpartB = this.planSingle.finishModCpartB;
    this.finishModCpartC = this.planSingle.finishModCpartC;
    this.finishModCpartD = this.planSingle.finishModCpartD;
  },
};
</script>
