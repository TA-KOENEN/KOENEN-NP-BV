<template>
  <div>
    <ToolbarAuth :name="'Rol van de ondernemer'" />
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
              :number="6"
              class="mb-5"
              :active="true"
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
      disableBtn: false,
      reportSend: false,
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      question_d: "",
      formal: null,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      if (this.question_d === "ke1") {
        this.$router.push({ name: "module-j-step-a" });
      } else {
        this.$router.push({ name: "module-j-step-d" });
      }
    },
    getReport() {
      this.disableBtn = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      resultService
        .finishModJ(clientId)
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
    this.question_d = this.planSingle.j_bv.question_d;
  },
};
</script>
