<template>
  <div>
    <ToolbarAuth :name="'Verkoop aan een externe partij'" />
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
                    :text="statement[14].questionAppForm"
                    :note="statement[14].commentApp"
                    :nr-notes="statement[14].nrNotes"
                    :noteA="statement[14].noteAppFormA"
                    :noteB="statement[14].noteAppFormB"
                    :noteC="statement[14].noteAppFormC"
                    class="mb-5"
                  />
                  <BaseValInput
                    rules="max:150"
                    v-model="question_k"
                    v-bind:label="statement[14].label"
                  />

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
                    v-model="question_l"
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
                    v-model="question_m"
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

                  <base-radio
                    v-model="question_n"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[17].nrOptions"
                    v-bind:optionA="statement[17].optionA"
                    v-bind:optionB="statement[17].optionB"
                    v-bind:optionC="statement[17].optionC"
                    v-bind:optionD="statement[17].optionD"
                  />

                  <div v-if="question_n === 'ke1'">
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
                      rules="max:180"
                      v-model="question_o"
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
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[19].nrOptions"
                      v-bind:optionA="statement[19].optionA"
                      v-bind:optionB="statement[19].optionB"
                      v-bind:optionC="statement[19].optionC"
                      v-bind:optionD="statement[19].optionD"
                    />

                    <div v-if="question_p === 'ke1'">
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
                        rules="max:180"
                        v-model="question_q"
                        v-bind:label="statement[20].label"
                      />
                    </div>
                  </div>

                  <StatementText
                    :text="textData[4].textAppForm"
                    :note="textData[4].commentApp"
                    :nr-notes="textData[4].nrNotes"
                    :noteA="textData[4].noteAppFormA"
                    :noteB="textData[4].noteAppFormB"
                    :noteC="textData[4].noteAppFormC"
                    class="mb-5"
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
                  <base-val-area
                    rules="max:500"
                    v-model="text_d"
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

                  <base-radio
                    v-model="question_r"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[22].nrOptions"
                    v-bind:optionA="statement[22].optionA"
                    v-bind:optionB="statement[22].optionB"
                    v-bind:optionC="statement[22].optionC"
                    class="mb-5"
                  />
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[14].questionAppInform"
                    :note="statement[14].commentApp"
                    :nr-notes="statement[14].nrNotes"
                    :noteA="statement[14].noteAppInfA"
                    :noteB="statement[14].noteAppInfB"
                    :noteC="statement[14].noteAppInfC"
                    class="mb-5"
                  />
                  <BaseValInput
                    rules="max:150"
                    v-model="question_k"
                    v-bind:label="statement[14].label"
                  />

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
                    v-model="question_l"
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
                    v-model="question_m"
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

                  <base-radio
                    v-model="question_n"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[17].nrOptions"
                    v-bind:optionA="statement[17].optionA"
                    v-bind:optionB="statement[17].optionB"
                    v-bind:optionC="statement[17].optionC"
                    v-bind:optionD="statement[17].optionD"
                  />

                  <div v-if="question_n === 'ke1'">
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
                      rules="max:180"
                      v-model="question_o"
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
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[19].nrOptions"
                      v-bind:optionA="statement[19].optionA"
                      v-bind:optionB="statement[19].optionB"
                      v-bind:optionC="statement[19].optionC"
                      v-bind:optionD="statement[19].optionD"
                    />

                    <div v-if="question_p === 'ke1'">
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
                        rules="max:180"
                        v-model="question_q"
                        v-bind:label="statement[20].label"
                      />
                    </div>
                  </div>

                  <StatementText
                    :text="textData[4].textAppInform"
                    :note="textData[4].commentApp"
                    :nr-notes="textData[4].nrNotes"
                    :noteA="textData[4].noteAppInfA"
                    :noteB="textData[4].noteAppInfB"
                    :noteC="textData[4].noteAppInfC"
                    class="mb-5"
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
                  <base-val-area
                    rules="max:500"
                    v-model="text_d"
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

                  <base-radio
                    v-model="question_r"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[22].nrOptions"
                    v-bind:optionA="statement[22].optionA"
                    v-bind:optionB="statement[22].optionB"
                    v-bind:optionC="statement[22].optionC"
                    class="mb-5"
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
      errors: null,
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      formal: null,
      question_k: "",
      question_l: "",
      question_m: "",
      question_n: "",
      question_o: "",
      question_p: "",
      question_q: "",
      question_r: "",
      text_d: "",
      finishModDpartA: true,
      finishModDpartB: true,
      finishModDpartC: true,
      finishModDpartD: false,
      finishModD: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-d-step-b" });
    },
    saveItem() {
      if (this.question_r === "ke2") {
        this.finishModDpartD = true;
        this.finishModD = true;
      }
      this.finishModDpartC = true;
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));

      const payload = {
        question_k: this.question_k,
        question_l: this.question_l,
        question_m: this.question_m,
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        question_r: this.question_r,
        text_d: this.text_d,
        finishModDpartA: this.finishModDpartA,
        finishModDpartB: this.finishModDpartB,
        finishModDpartC: this.finishModDpartC,
        finishModDpartD: this.finishModDpartD,
        finishModD: this.finishModD,
      };
      resultService
        .saveDataD(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          if (this.question_r === "ke1") {
            this.$router.push({ name: "module-d-step-d" });
          } else {
            this.$router.push({ name: "module-d-end" });
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
    this.question_k = this.planSingle.d_bv.question_k;
    this.question_l = this.planSingle.d_bv.question_l;
    this.question_m = this.planSingle.d_bv.question_m;
    this.question_n = this.planSingle.d_bv.question_n;
    this.question_o = this.planSingle.d_bv.question_o;
    this.question_p = this.planSingle.d_bv.question_p;
    this.question_q = this.planSingle.d_bv.question_q;
    this.question_r = this.planSingle.d_bv.question_r;
    this.text_d = this.planSingle.d_bv.text_d;
    this.finishModD = this.planSingle.finishModD;
    this.finishModCpartA = this.planSingle.finishModCpartA;
    this.finishModCpartB = this.planSingle.finishModCpartB;
    this.finishModCpartC = this.planSingle.finishModCpartC;
    this.finishModCpartD = this.planSingle.finishModCpartD;
  },
};
</script>
