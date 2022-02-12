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
                :head-text="textAppLeft[3].header"
                :text-a="textAppLeft[3].texta"
                :text-b="textAppLeft[3].textb"
                :text-c="textAppLeft[3].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[3].headerInf"
                :text-a="textAppLeft[3].textaInf"
                :text-b="textAppLeft[3].textbInf"
                :text-c="textAppLeft[3].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[3].header"
              :number="3"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <div v-if="formal">
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
                    v-model="question_f"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[6].nrOptions"
                    v-bind:optionA="statement[6].optionA"
                    v-bind:optionB="statement[6].optionB"
                    v-bind:optionC="statement[6].optionC"
                    v-bind:optionD="statement[6].optionD"
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

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[7].nrOptions"
                    v-bind:optionA="statement[7].optionA"
                    v-bind:optionB="statement[7].optionB"
                    v-bind:optionC="statement[7].optionC"
                    v-bind:optionD="statement[7].optionD"
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

                  <base-radio
                    v-model="question_h"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[8].nrOptions"
                    v-bind:optionA="statement[8].optionA"
                    v-bind:optionB="statement[8].optionB"
                    v-bind:optionC="statement[8].optionC"
                    v-bind:optionD="statement[8].optionD"
                  />

                  <div v-if="question_h === 'ke1'">
                    <StatementText
                      :text="statement[9].questionAppForm"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppFormA"
                      :noteB="statement[9].noteAppFormB"
                      :noteC="statement[9].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_i"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />

                    <div v-if="question_i === 'ke1'">
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
                    </div>
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
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
                    v-model="question_f"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[6].nrOptions"
                    v-bind:optionA="statement[6].optionA"
                    v-bind:optionB="statement[6].optionB"
                    v-bind:optionC="statement[6].optionC"
                    v-bind:optionD="statement[6].optionD"
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

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[7].nrOptions"
                    v-bind:optionA="statement[7].optionA"
                    v-bind:optionB="statement[7].optionB"
                    v-bind:optionC="statement[7].optionC"
                    v-bind:optionD="statement[7].optionD"
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

                  <base-radio
                    v-model="question_h"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[8].nrOptions"
                    v-bind:optionA="statement[8].optionA"
                    v-bind:optionB="statement[8].optionB"
                    v-bind:optionC="statement[8].optionC"
                    v-bind:optionD="statement[8].optionD"
                  />

                  <div v-if="question_h === 'ke1'">
                    <StatementText
                      :text="statement[9].questionAppInform"
                      :note="statement[9].commentApp"
                      :nr-notes="statement[9].nrNotes"
                      :noteA="statement[9].noteAppInfA"
                      :noteB="statement[9].noteAppInfB"
                      :noteC="statement[9].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_i"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[9].nrOptions"
                      v-bind:optionA="statement[9].optionA"
                      v-bind:optionB="statement[9].optionB"
                      v-bind:optionC="statement[9].optionC"
                      v-bind:optionD="statement[9].optionD"
                    />

                    <div v-if="question_i === 'ke1'">
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
      question_f: "",
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      finishModJ: false,
      finishModJpartA: true,
      finishModJpartB: true,
      finishModJpartC: false,
      finishModJpartD: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-j-step-a" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_f: this.question_f,
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
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
          this.$router.push({ name: "module-j-step-c" });
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
    this.question_f = this.planSingle.j_bv.question_f;
    this.question_g = this.planSingle.j_bv.question_g;
    this.question_h = this.planSingle.j_bv.question_h;
    this.question_i = this.planSingle.j_bv.question_i;
    this.question_j = this.planSingle.j_bv.question_j;
    this.finishModJ = this.planSingle.finishModJ;
    this.finishModJpartA = this.planSingle.finishModJpartA;
    this.finishModJpartB = this.planSingle.finishModJpartB;
    this.finishModJpartC = this.planSingle.finishModJpartC;
    this.finishModJpartD = this.planSingle.finishModJpartD;
  },
};
</script>
