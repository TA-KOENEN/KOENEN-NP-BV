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
                    v-model="question_v"
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
                    v-model="question_w"
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
                    v-model="question_x"
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
                    v-model="question_y"
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
                    v-model="question_z"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[27].nrOptions"
                    v-bind:optionA="statement[27].optionA"
                    v-bind:optionB="statement[27].optionB"
                    v-bind:optionC="statement[27].optionC"
                    v-bind:optionD="statement[27].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_z === 'ke1'">
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
                      v-model="question_aa"
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
                      v-model="question_ab"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[34].questionAppForm"
                    :note="statement[34].commentApp"
                    :nr-notes="statement[34].nrNotes"
                    :noteA="statement[34].noteAppFormA"
                    :noteB="statement[24].noteAppFormB"
                    :noteC="statement[24].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_ag"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[34].nrOptions"
                    v-bind:optionA="statement[34].optionA"
                    v-bind:optionB="statement[34].optionB"
                    v-bind:optionC="statement[34].optionC"
                    v-bind:optionD="statement[34].optionD"
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
                    v-model="question_v"
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
                    v-model="question_w"
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
                    v-model="question_x"
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
                    v-model="question_y"
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
                    v-model="question_z"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[27].nrOptions"
                    v-bind:optionA="statement[27].optionA"
                    v-bind:optionB="statement[27].optionB"
                    v-bind:optionC="statement[27].optionC"
                    v-bind:optionD="statement[27].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_z === 'ke1'">
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
                      v-model="question_aa"
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
                      v-model="question_ab"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[34].questionAppInform"
                    :note="statement[34].commentApp"
                    :nr-notes="statement[34].nrNotes"
                    :noteA="statement[34].noteAppInfA"
                    :noteB="statement[24].noteAppInfB"
                    :noteC="statement[24].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_ag"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[34].nrOptions"
                    v-bind:optionA="statement[34].optionA"
                    v-bind:optionB="statement[34].optionB"
                    v-bind:optionC="statement[34].optionC"
                    v-bind:optionD="statement[34].optionD"
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
      question_v: "",
      question_w: "",
      question_x: "",
      question_y: "",
      question_z: "",
      question_aa: "",
      question_ab: "",
      question_ag: "",
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
      this.$router.push({ name: "module-f-step-d" });
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
        question_v: this.question_v,
        question_w: this.question_w,
        question_x: this.question_x,
        question_y: this.question_y,
        question_z: this.question_z,
        question_aa: this.question_aa,
        question_ab: this.question_ab,
        question_ag: this.question_ag,
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
          if (this.question_ag === "ke1") {
            this.$router.push({ name: "module-f-step-f" });
          } else {
            this.$router.push({ name: "module-f-end" });
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
    this.question_v = this.planSingle.f_bv.question_v;
    this.question_w = this.planSingle.f_bv.question_w;
    this.question_x = this.planSingle.f_bv.question_x;
    this.question_y = this.planSingle.f_bv.question_y;
    this.question_z = this.planSingle.f_bv.question_z;
    this.question_aa = this.planSingle.f_bv.question_aa;
    this.question_ab = this.planSingle.f_bv.question_ab;
    this.question_ag = this.planSingle.f_bv.question_ag;
  },
};
</script>
