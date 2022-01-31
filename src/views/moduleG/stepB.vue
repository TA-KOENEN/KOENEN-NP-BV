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
                    :text="statement[12].questionAppForm"
                    :note="statement[12].commentApp"
                    :nr-notes="statement[12].nrNotes"
                    :noteA="statement[12].noteAppFormA"
                    :noteB="statement[12].noteAppFormB"
                    :noteC="statement[12].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_l"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[12].nrOptions"
                    v-bind:optionA="statement[12].optionA"
                    v-bind:optionB="statement[12].optionB"
                    v-bind:optionC="statement[12].optionC"
                    v-bind:optionD="statement[12].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_l === 'ke1'">
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
                      v-model="question_m"
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
                  </div>

                  <div v-if="question_l === 'ke1' && question_n === 'ke1'">
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
                      v-model="question_o"
                      v-bind:label="statement[15].label"
                    />
                  </div>

                  <div v-if="question_l === 'ke1'">
                    <StatementText
                      :text="statement[16].questionAppForm"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppFormA"
                      :noteB="statement[16].noteAppFormB"
                      :noteC="statement[16].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[16].nrOptions"
                      v-bind:optionA="statement[16].optionA"
                      v-bind:optionB="statement[16].optionB"
                      v-bind:optionC="statement[16].optionC"
                      v-bind:optionD="statement[16].optionD"
                      class="mb-5"
                    />
                  </div>
                  <div v-if="question_p === 'ke1' && question_l === 'ke1'">
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
                      v-model="question_q"
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
                      v-model="question_r"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_s"
                      v-bind:label="statement[19].label"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[12].questionAppInform"
                    :note="statement[12].commentApp"
                    :nr-notes="statement[12].nrNotes"
                    :noteA="statement[12].noteAppInfA"
                    :noteB="statement[12].noteAppInfB"
                    :noteC="statement[12].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_l"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[12].nrOptions"
                    v-bind:optionA="statement[12].optionA"
                    v-bind:optionB="statement[12].optionB"
                    v-bind:optionC="statement[12].optionC"
                    v-bind:optionD="statement[12].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_l === 'ke1'">
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
                      v-model="question_m"
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
                  </div>

                  <div v-if="question_l === 'ke1' && question_n === 'ke1'">
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
                      v-model="question_o"
                      v-bind:label="statement[15].label"
                    />
                  </div>

                  <div v-if="question_l === 'ke1'">
                    <StatementText
                      :text="statement[16].questionAppInform"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppInfA"
                      :noteB="statement[16].noteAppInfB"
                      :noteC="statement[16].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[16].nrOptions"
                      v-bind:optionA="statement[16].optionA"
                      v-bind:optionB="statement[16].optionB"
                      v-bind:optionC="statement[16].optionC"
                      v-bind:optionD="statement[16].optionD"
                      class="mb-5"
                    />
                  </div>
                  <div v-if="question_p === 'ke1' && question_l === 'ke1'">
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
                      v-model="question_q"
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
                      v-model="question_r"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_s"
                      v-bind:label="statement[19].label"
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
      question_l: "",
      question_m: "",
      question_n: "",
      question_o: "",
      question_p: "",
      question_q: "",
      question_r: "",
      question_s: "",
      finishModGpartB: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-g-step-a" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_l: this.question_l,
        question_m: this.question_m,
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        question_r: this.question_r,
        question_s: this.question_s,
        finishModGpartB: this.finishModGpartB,
      };
      resultService
        .saveDataG(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-g-step-c" });
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
    this.question_l = this.planSingle.g_bv.question_l;
    this.question_m = this.planSingle.g_bv.question_m;
    this.question_n = this.planSingle.g_bv.question_n;
    this.question_o = this.planSingle.g_bv.question_o;
    this.question_p = this.planSingle.g_bv.question_p;
    this.question_q = this.planSingle.g_bv.question_q;
    this.question_r = this.planSingle.g_bv.question_r;
    this.question_s = this.planSingle.g_bv.question_s;
  },
};
</script>
