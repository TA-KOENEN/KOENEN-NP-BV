<template>
  <div>
    <ToolbarAuth :name="'Verkoop aan een externe partij'" />
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
                :head-text="textAppLeft[6].header"
                :text-a="textAppLeft[6].texta"
                :text-b="textAppLeft[6].textb"
                :text-c="textAppLeft[6].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[6].headerInf"
                :text-a="textAppLeft[6].textaInf"
                :text-b="textAppLeft[6].textbInf"
                :text-c="textAppLeft[6].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[6].header"
              :number="5"
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
import textAppLeft from "@/text/moduleD/textAppLeftD.json";
import textAppRight from "@/text/moduleD/textAppRightD.json";
import Questions from "@/text/moduleD/moduleD.json";
import ExtraText from "@/text/moduleD/textD.json";
import { mapGetters } from "vuex";
import resultService from "@/services/ResultService";

export default {
  name: "stepOne",

  data() {
    return {
      question_a: "",
      question_b: "",
      question_j: "",
      question_r: "",

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
      if (this.question_a === "ke2") {
        this.$router.push({ name: "module-d-step-a" });
      }
      if (this.question_b === "ke2") {
        this.$router.push({ name: "module-d-step-b" });
      }
      if (this.question_j === "ke2") {
        this.$router.push({ name: "module-d-step-c" });
      } else {
        this.$router.push({ name: "module-d-step-d" });
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
    this.question_a = this.planSingle.d_bv.question_a;
    this.question_b = this.planSingle.d_bv.question_b;
    this.question_j = this.planSingle.d_bv.question_j;
    this.question_r = this.planSingle.d_bv.question_r;
  },
};
</script>
