<template>
  <div>
    <ToolbarAuth :name="'Noodopvolging'" />
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
              :number="2"
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
import textAppLeft from "@/text/moduleA/textAppLeftA.json";
import textAppRight from "@/text/moduleA/textAppRightA.json";
import Questions from "@/text/moduleA/moduleA.json";
import ExtraText from "@/text/moduleA/textA.json";
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
      formal: null,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-a-step-c" });
    },
    getReport() {
      this.disableBtn = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      resultService
        .getReportA(clientId)
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
  },
};
</script>
