<template>
  <div>
    <ToolbarAuth :name="'Finance en IT'" />
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
                    :text="textData[3].textAppForm"
                    :note="textData[3].commentApp"
                    :nr-notes="textData[3].nrNotes"
                    :noteA="textData[3].noteAppFormA"
                    :noteB="textData[3].noteAppFormB"
                    :noteC="textData[3].noteAppFormC"
                    class="mb-5"
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
                    v-model="question_r"
                    v-bind:label="statement[19].label"
                  />

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

                  <StatementText
                    :text="statement[22].questionAppForm"
                    :note="statement[22].commentApp"
                    :nr-notes="statement[22].nrNotes"
                    :noteA="statement[22].noteAppFormA"
                    :noteB="statement[22].noteAppFormB"
                    :noteC="statement[22].noteAppFormC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_u"
                    v-bind:label="statement[22].label"
                  />

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
                </div>

                <!--informal-->

                <div v-if="!formal">
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
                    v-model="question_r"
                    v-bind:label="statement[19].label"
                  />

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

                  <StatementText
                    :text="statement[22].questionAppInform"
                    :note="statement[22].commentApp"
                    :nr-notes="statement[22].nrNotes"
                    :noteA="statement[22].noteAppInfA"
                    :noteB="statement[22].noteAppInfB"
                    :noteC="statement[22].noteAppInfC"
                    class="mb-5"
                  />

                  <BaseValInput
                    rules="max:150"
                    v-model="question_u"
                    v-bind:label="statement[22].label"
                  />

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
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleI/textAppLeftI.json";
import textAppRight from "@/text/moduleI/textAppRightI.json";
import Questions from "@/text/moduleI/moduleI.json";
import ExtraText from "@/text/moduleI/textI.json";
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
      question_r: "",
      question_s: "",
      question_t: "",
      question_u: "",
      question_v: "",
      question_w: "",
      question_x: "",
      finishModI: true,
      finishModIpartD: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-i-step-c" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_r: this.question_r,
        question_s: this.question_s,
        question_t: this.question_t,
        question_u: this.question_u,
        question_v: this.question_v,
        question_w: this.question_w,
        question_x: this.question_x,
        question_y: this.question_y,
        finishModIpartD: this.finishModIpartD,
        finishModI: this.finishModI,
      };
      resultService
        .saveDataI(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-i-end" });
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
    this.question_r = this.planSingle.i_bv.question_r;
    this.question_s = this.planSingle.i_bv.question_s;
    this.question_t = this.planSingle.i_bv.question_t;
    this.question_u = this.planSingle.i_bv.question_u;
    this.question_v = this.planSingle.i_bv.question_v;
    this.question_w = this.planSingle.i_bv.question_w;
    this.question_x = this.planSingle.i_bv.question_x;
  },
};
</script>
