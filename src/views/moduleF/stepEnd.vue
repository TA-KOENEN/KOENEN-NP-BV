<template>
  <div>
    <ToolbarAuth :name="'Structuur'" />
    <div class="ma-0 pa-0">
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
                :head-text="textAppLeft[9].header"
                :text-a="textAppLeft[9].texta"
                :text-b="textAppLeft[9].textb"
                :text-c="textAppLeft[9].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[9].headerInf"
                :text-a="textAppLeft[9].textaInf"
                :text-b="textAppLeft[9].textbInf"
                :text-c="textAppLeft[9].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[9].header"
              :number="8"
              class="mb-5"
              :active="false"
            />

            <!--informal-->

            <v-row class="mt-10 mb-10 justify-center">
              <btn-report :on-click="getReport" :disabled="disableBtn" />
            </v-row>
            <div v-if="reportSend">
              <end-element />
            </div>

            <v-row class="mt-10">
              <div v-if="!reportSend">
                <btn-stop :on-click="stopThis" />
              </div>
              <v-spacer />
              <btn-back :on-click="goBack" />
            </v-row>

            <CustomDivider />
            <div class="mt-10" />
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
      question_e: "",
      question_m: "",
      question_u: "",
      question_ag: "",
      question_ao: "",

      disableBtn: false,
      reportSend: false,
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      formal: null,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      if (this.question_ao === "ke1") {
        this.$router.push({ name: "module-f-step-g" });
      } else if (this.question_ag === "ke1") {
        this.$router.push({ name: "module-f-step-f" });
      } else if (this.question_u === "ke1") {
        this.$router.push({ name: "module-f-step-e" });
      } else if (this.question_m === "ke1") {
        this.$router.push({ name: "module-f-step-d" });
      } else if (this.question_e === "ke1") {
        this.$router.push({ name: "module-f-step-c" });
      } else {
        this.$router.push({ name: "module-f-step-b" });
      }
    },
    getReport() {
      this.disableBtn = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      resultService
        .getReportD(clientId)
        .then(() => {
          this.disableBtn = false;
        })
        .then(() => {
          this.reportSend = true;
        });
    },
  },
  computed: {
    ...mapGetters("plan", ["loading", "planSingle"]),
  },
  created() {},
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.question_e = this.planSingle.f_bv.question_e;
    this.question_m = this.planSingle.f_bv.question_m;
    this.question_u = this.planSingle.f_bv.question_u;
    this.question_ag = this.planSingle.f_bv.question_ag;
    this.question_ao = this.planSingle.f_bv.question_ao;
  },
};
</script>
