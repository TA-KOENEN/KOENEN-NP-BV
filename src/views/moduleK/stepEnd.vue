<template>
  <div>
    <ToolbarAuth :name="'Management en Medewerkers'" />
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
              :number="5"
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
import textAppLeft from "@/text/moduleK/textAppLeftK.json";
import textAppRight from "@/text/moduleK/textAppRightK.json";
import Questions from "@/text/moduleK/moduleK.json";
import ExtraText from "@/text/moduleK/textK.json";
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
      this.$router.push({ name: "module-k-step-b" });
    },
    getReport() {
      this.disableBtn = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      resultService
        .finishModK(clientId)
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
