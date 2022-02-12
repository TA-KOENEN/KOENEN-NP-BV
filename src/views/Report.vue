<template>
  <div>
    <ToolbarAuth :name="'Adviseurs'" />
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
                :head-text="textAppLeft[0].header"
                :text-a="textAppLeft[0].texta"
                :text-b="textAppLeft[0].textb"
                :text-c="textAppLeft[0].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[0].headerInf"
                :text-a="textAppLeft[0].textaInf"
                :text-b="textAppLeft[0].textbInf"
                :text-c="textAppLeft[0].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <div v-if="!reportSend">
              <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
                <v-form ref="form">
                  <!--informal-->
                  <div v-if="formal">
                    <StatementText
                      :text="statement[1].questionAppForm"
                      :note="statement[1].commentApp"
                      :nr-notes="statement[1].nrNotes"
                      :noteA="statement[1].noteAppFormA"
                      :noteB="statement[1].noteAppFormB"
                      :noteC="statement[1].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="report_question"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[2].nrOptions"
                      v-bind:optionA="statement[2].optionA"
                      v-bind:optionB="statement[2].optionB"
                      v-bind:optionC="statement[2].optionC"
                      v-bind:optionD="statement[2].optionD"
                    />
                    <StatementText
                      :text="statement[3].questionAppForm"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppFormA"
                      :noteB="statement[3].noteAppFormB"
                      :noteC="statement[3].noteAppFormC"
                      class="mb-5"
                    />
                    <base-val-area
                      rules="max:1000"
                      v-model="report_text"
                      v-bind:label="statement[3].label"
                    />
                  </div>

                  <div v-if="!formal">
                    <StatementText
                      :text="statement[1].questionAppInform"
                      :note="statement[1].commentApp"
                      :nr-notes="statement[1].nrNotes"
                      :noteA="statement[1].noteAppInfA"
                      :noteB="statement[1].noteAppInfB"
                      :noteC="statement[1].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="report_question"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[2].nrOptions"
                      v-bind:optionA="statement[2].optionA"
                      v-bind:optionB="statement[2].optionB"
                      v-bind:optionC="statement[2].optionC"
                      v-bind:optionD="statement[2].optionD"
                    />
                    <StatementText
                      :text="statement[3].questionAppInform"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppInfA"
                      :noteB="statement[3].noteAppInfB"
                      :noteC="statement[3].noteAppInfC"
                      class="mb-5"
                    />
                    <base-val-area
                      rules="max:1000"
                      v-model="report_text"
                      v-bind:label="statement[3].label"
                    />
                  </div>
                  <v-row class="mt-10 mb-10 justify-center">
                    <btn-report
                      :on-click="getReport"
                      :disabled="invalid || !validate"
                    />
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <div v-if="reportSend">
              <report-element />
            </div>

            <v-row class="mt-10">
              <div v-if="!reportSend">
                <btn-stop :on-click="stopThis" />
              </div>
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
import textAppLeft from "@/text/Report/textAppLeftReport.json";
import Questions from "@/text/Report/moduleReport.json";
import { mapGetters } from "vuex";
import resultService from "@/services/ResultService";
import ReportElement from "@/components/core/reportElement";
export default {
  name: "stepOne",
  components: { ReportElement },

  data() {
    return {
      disableBtn: false,
      reportSend: false,
      dialogStop: false,
      textAppLeft: textAppLeft,
      statement: Questions,
      formal: null,
      report_question: null,
      report_text: null,
      completedUser: true,
      errors: null,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    getReport() {
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        completedUser: this.completedUser,
        report_question: this.report_question,
        report_text: this.report_text,
      };
      resultService
        .saveDataReport(clientId, payload)
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
