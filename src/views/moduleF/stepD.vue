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
                :head-text="textAppLeft[5].header"
                :text-a="textAppLeft[5].texta"
                :text-b="textAppLeft[5].textb"
                :text-c="textAppLeft[5].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[5].headerInf"
                :text-a="textAppLeft[5].textaInf"
                :text-b="textAppLeft[5].textbInf"
                :text-c="textAppLeft[5].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[5].header"
              :number="5"
              class="mb-5"
              :active="false"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <!-- formal-->
                <div v-if="formal">
                  <StatementText
                    :text="statement[15].questionAppForm"
                    :note="statement[15].commentApp"
                    :nr-notes="statement[15].nrNotes"
                    :noteA="statement[15].noteAppFormA"
                    :noteB="statement[15].noteAppFormB"
                    :noteC="statement[15].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_n"
                    v-bind:label="statement[15].label"
                  />

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
                    v-model="question_o"
                    v-bind:label="statement[16].label"
                  />

                  <StatementText
                    :text="statement[17].questionAppForm"
                    :note="statement[17].commentApp"
                    :nr-notes="statement[17].nrNotes"
                    :noteA="statement[17].noteAppFormA"
                    :noteB="statement[17].noteAppFormB"
                    :noteC="statement[17].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_p"
                    v-bind:label="statement[17].label"
                  />

                  <StatementText
                    :text="statement[18].questionAppForm"
                    :note="statement[18].commentApp"
                    :nr-notes="statement[18].nrNotes"
                    :noteA="statement[18].noteAppFormA"
                    :noteB="statement[18].noteAppFormB"
                    :noteC="statement[18].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_q"
                    v-bind:label="statement[18].label"
                  />

                  <StatementText
                    :text="statement[19].questionAppForm"
                    :note="statement[19].commentApp"
                    :nr-notes="statement[19].nrNotes"
                    :noteA="statement[19].noteAppFormA"
                    :noteB="statement[19].noteAppFormB"
                    :noteC="statement[19].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_r"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[19].nrOptions"
                    v-bind:optionA="statement[19].optionA"
                    v-bind:optionB="statement[19].optionB"
                    v-bind:optionC="statement[19].optionC"
                    v-bind:optionD="statement[19].optionD"
                  />

                  <div v-if="question_r === 'ke1'">
                    <StatementText
                      :text="statement[20].questionAppForm"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppFormA"
                      :noteB="statement[20].noteAppFormB"
                      :noteC="statement[20].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_s"
                      v-bind:label="statement[20].label"
                    />

                    <StatementText
                      :text="statement[21].questionAppForm"
                      :note="statement[21].commentApp"
                      :nr-notes="statement[21].nrNotes"
                      :noteA="statement[21].noteAppFormA"
                      :noteB="statement[21].noteAppFormB"
                      :noteC="statement[21].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_t"
                      v-bind:label="statement[21].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[22].questionAppForm"
                    :note="statement[22].commentApp"
                    :nr-notes="statement[22].nrNotes"
                    :noteA="statement[22].noteAppFormA"
                    :noteB="statement[22].noteAppFormB"
                    :noteC="statement[22].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_u"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[22].nrOptions"
                    v-bind:optionA="statement[22].optionA"
                    v-bind:optionB="statement[22].optionB"
                    v-bind:optionC="statement[22].optionC"
                    v-bind:optionD="statement[22].optionD"
                  />
                </div>

                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[15].questionAppInform"
                    :note="statement[15].commentApp"
                    :nr-notes="statement[15].nrNotes"
                    :noteA="statement[15].noteAppInfA"
                    :noteB="statement[15].noteAppInfB"
                    :noteC="statement[15].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_n"
                    v-bind:label="statement[15].label"
                  />

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
                    v-model="question_o"
                    v-bind:label="statement[16].label"
                  />

                  <StatementText
                    :text="statement[17].questionAppInform"
                    :note="statement[17].commentApp"
                    :nr-notes="statement[17].nrNotes"
                    :noteA="statement[17].noteAppInfA"
                    :noteB="statement[17].noteAppInfB"
                    :noteC="statement[17].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_p"
                    v-bind:label="statement[17].label"
                  />

                  <StatementText
                    :text="statement[18].questionAppInform"
                    :note="statement[18].commentApp"
                    :nr-notes="statement[18].nrNotes"
                    :noteA="statement[18].noteAppInfA"
                    :noteB="statement[18].noteAppInfB"
                    :noteC="statement[18].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_q"
                    v-bind:label="statement[18].label"
                  />

                  <StatementText
                    :text="statement[19].questionAppInform"
                    :note="statement[19].commentApp"
                    :nr-notes="statement[19].nrNotes"
                    :noteA="statement[19].noteAppInfA"
                    :noteB="statement[19].noteAppInfB"
                    :noteC="statement[19].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_r"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[19].nrOptions"
                    v-bind:optionA="statement[19].optionA"
                    v-bind:optionB="statement[19].optionB"
                    v-bind:optionC="statement[19].optionC"
                    v-bind:optionD="statement[19].optionD"
                  />

                  <div v-if="question_r === 'ke1'">
                    <StatementText
                      :text="statement[20].questionAppInform"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppInfA"
                      :noteB="statement[20].noteAppInfB"
                      :noteC="statement[20].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_s"
                      v-bind:label="statement[20].label"
                    />

                    <StatementText
                      :text="statement[21].questionAppInform"
                      :note="statement[21].commentApp"
                      :nr-notes="statement[21].nrNotes"
                      :noteA="statement[21].noteAppInfA"
                      :noteB="statement[21].noteAppInfB"
                      :noteC="statement[21].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_t"
                      v-bind:label="statement[21].label"
                    />
                  </div>

                  <StatementText
                    :text="statement[22].questionAppInform"
                    :note="statement[22].commentApp"
                    :nr-notes="statement[22].nrNotes"
                    :noteA="statement[22].noteAppInfA"
                    :noteB="statement[22].noteAppInfB"
                    :noteC="statement[22].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_u"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[22].nrOptions"
                    v-bind:optionA="statement[22].optionA"
                    v-bind:optionB="statement[22].optionB"
                    v-bind:optionC="statement[22].optionC"
                    v-bind:optionD="statement[22].optionD"
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
              :stepText="textAppRight[6].header"
              :number="5"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[7].header"
              :number="6"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[8].header"
              :number="7"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[9].header"
              :number="8"
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
      question_n: "",
      question_o: "",
      question_p: "",
      question_q: "",
      question_r: "",
      question_s: "",
      question_t: "",
      question_u: "",
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
      this.$router.push({ name: "module-f-step-c" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        question_r: this.question_r,
        question_s: this.question_s,
        question_t: this.question_t,
        question_u: this.question_u,
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
          if (this.question_u === "ke1") {
            this.$router.push({ name: "module-f-step-e" });
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
    this.question_n = this.planSingle.f_bv.question_n;
    this.question_o = this.planSingle.f_bv.question_o;
    this.question_p = this.planSingle.f_bv.question_p;
    this.question_q = this.planSingle.f_bv.question_q;
    this.question_r = this.planSingle.f_bv.question_r;
    this.question_s = this.planSingle.f_bv.question_s;
    this.question_t = this.planSingle.f_bv.question_t;
    this.question_u = this.planSingle.f_bv.question_u;
  },
};
</script>
