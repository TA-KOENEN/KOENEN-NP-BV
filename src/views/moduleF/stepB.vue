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
                  <div
                    v-if="
                      planSingle.question_c === 'ke1' &&
                      planSingle.question_a === 'ke2'
                    "
                  >
                    <StatementText :text="'Tussen holding'" class="mb-5" />
                    Het belang in deze bv wordt aangehouden via een tussen
                    holding.

                    <StatementText
                      :text="statement[30].questionAppForm"
                      :note="statement[30].commentApp"
                      :nr-notes="statement[30].nrNotes"
                      :noteA="statement[30].noteAppFormA"
                      :noteB="statement[30].noteAppFormB"
                      :noteC="statement[30].noteAppFormC"
                      class="mb-5 mt-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_ac"
                      v-bind:label="statement[30].label"
                    />

                    <StatementText
                      :text="statement[31].questionAppForm"
                      :note="statement[31].commentApp"
                      :nr-notes="statement[31].nrNotes"
                      :noteA="statement[31].noteAppFormA"
                      :noteB="statement[31].noteAppFormB"
                      :noteC="statement[31].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_ad"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[31].nrOptions"
                      v-bind:optionA="statement[31].optionA"
                      v-bind:optionB="statement[31].optionB"
                      v-bind:optionC="statement[31].optionC"
                      v-bind:optionD="statement[31].optionD"
                    />

                    <div
                      v-if="
                        planSingle.question_c === 'ke1' &&
                        planSingle.question_a === 'ke2' &&
                        question_ad === 'ke1'
                      "
                    >
                      <StatementText
                        :text="statement[32].questionAppForm"
                        :note="statement[32].commentApp"
                        :nr-notes="statement[32].nrNotes"
                        :noteA="statement[32].noteAppFormA"
                        :noteB="statement[32].noteAppFormB"
                        :noteC="statement[32].noteAppFormC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_ae"
                        v-bind:label="statement[32].label"
                      />

                      <StatementText
                        :text="statement[33].questionAppForm"
                        :note="statement[33].commentApp"
                        :nr-notes="statement[33].nrNotes"
                        :noteA="statement[33].noteAppFormA"
                        :noteB="statement[33].noteAppFormB"
                        :noteC="statement[33].noteAppFormC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_af"
                        v-bind:label="statement[33].label"
                      />
                    </div>
                  </div>
                  <custom-divider />
                  <div
                    v-if="
                      planSingle.question_a === 'ke1' ||
                      (planSingle.question_c === 'ke1' &&
                        planSingle.question_a === 'ke2')
                    "
                  >
                    <StatementText
                      :text="'Personal holding'"
                      class="mb-5 mt-5"
                    />

                    <div
                      v-if="
                        planSingle.question_a === 'ke2' &&
                        planSingle.question_c === 'ke1'
                      "
                    >
                      <StatementText
                        :text="textData[6].textAppForm"
                        :note="textData[6].commentApp"
                        :nr-notes="textData[6].nrNotes"
                        :noteA="textData[6].noteAppFormA"
                        :noteB="textData[6].noteAppFormB"
                        :noteC="textData[6].noteAppFormC"
                        class="mb-5"
                      />
                    </div>
                    <div v-if="planSingle.question_a === 'ke1'">
                      <StatementText
                        :text="textData[7].textAppForm"
                        :note="textData[7].commentApp"
                        :nr-notes="textData[7].nrNotes"
                        :noteA="textData[7].noteAppFormA"
                        :noteB="textData[7].noteAppFormB"
                        :noteC="textData[7].noteAppFormC"
                        class="mb-5"
                      />
                    </div>

                    <StatementText
                      :text="statement[2].questionAppForm"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppFormA"
                      :noteB="statement[2].noteAppFormB"
                      :noteC="statement[2].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_a"
                      v-bind:label="statement[2].label"
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

                    <base-radio
                      v-model="question_b"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[3].nrOptions"
                      v-bind:optionA="statement[3].optionA"
                      v-bind:optionB="statement[3].optionB"
                      v-bind:optionC="statement[3].optionC"
                      v-bind:optionD="statement[3].optionD"
                    />

                    <div v-if="question_b === 'ke1'">
                      <StatementText
                        :text="statement[4].questionAppForm"
                        :note="statement[4].commentApp"
                        :nr-notes="statement[4].nrNotes"
                        :noteA="statement[4].noteAppFormA"
                        :noteB="statement[4].noteAppFormB"
                        :noteC="statement[4].noteAppFormC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_c"
                        v-bind:label="statement[4].label"
                      />

                      <StatementText
                        :text="statement[5].questionAppForm"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppFormA"
                        :noteB="statement[5].noteAppFormB"
                        :noteC="statement[5].noteAppFormC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_d"
                        v-bind:label="statement[5].label"
                      />
                    </div>
                  </div>

                  <div v-if="planSingle.question_i === 'ke1'">
                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                  </div>
                  <div v-if="planSingle.question_i === 'ke2'">
                    Vanwege de complexiteit van de organisatie zullen wij de
                    detailinformatie van dochterondernemingen en deelnemingen in
                    het rapport opnemen.
                  </div>
                </div>

                <!--                informal-->
                <div v-if="!formal">
                  <div
                    v-if="
                      planSingle.question_c === 'ke1' &&
                      planSingle.question_a === 'ke2'
                    "
                  >
                    <StatementText :text="'Tussen holding'" class="mb-5" />
                    Het belang in deze bv wordt aangehouden via een tussen
                    holding.

                    <StatementText
                      :text="statement[30].questionAppInform"
                      :note="statement[30].commentApp"
                      :nr-notes="statement[30].nrNotes"
                      :noteA="statement[30].noteAppInfA"
                      :noteB="statement[30].noteAppInfB"
                      :noteC="statement[30].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_ac"
                      v-bind:label="statement[30].label"
                    />

                    <StatementText
                      :text="statement[31].questionAppInform"
                      :note="statement[31].commentApp"
                      :nr-notes="statement[31].nrNotes"
                      :noteA="statement[31].noteAppInfA"
                      :noteB="statement[31].noteAppInfB"
                      :noteC="statement[31].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_ad"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[31].nrOptions"
                      v-bind:optionA="statement[31].optionA"
                      v-bind:optionB="statement[31].optionB"
                      v-bind:optionC="statement[31].optionC"
                      v-bind:optionD="statement[31].optionD"
                    />

                    <div
                      v-if="
                        planSingle.question_c === 'ke1' &&
                        planSingle.question_a === 'ke2' &&
                        question_ad === 'ke1'
                      "
                    >
                      <StatementText
                        :text="statement[32].questionAppInform"
                        :note="statement[32].commentApp"
                        :nr-notes="statement[32].nrNotes"
                        :noteA="statement[32].noteAppInfA"
                        :noteB="statement[32].noteAppInfB"
                        :noteC="statement[32].noteAppInfC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_ae"
                        v-bind:label="statement[32].label"
                      />

                      <StatementText
                        :text="statement[33].questionAppInform"
                        :note="statement[33].commentApp"
                        :nr-notes="statement[33].nrNotes"
                        :noteA="statement[33].noteAppInfA"
                        :noteB="statement[33].noteAppInfB"
                        :noteC="statement[33].noteAppInfC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_af"
                        v-bind:label="statement[33].label"
                      />
                    </div>
                  </div>
                  <custom-divider />
                  <div
                    v-if="
                      planSingle.question_a === 'ke1' ||
                      (planSingle.question_c === 'ke1' &&
                        planSingle.question_a === 'ke2')
                    "
                  >
                    <StatementText :text="'Personal holding'" class="mb-5" />

                    <div
                      v-if="
                        planSingle.question_a === 'ke2' &&
                        planSingle.question_c === 'ke1'
                      "
                    >
                      <StatementText
                        :text="textData[6].textAppInform"
                        :note="textData[6].commentApp"
                        :nr-notes="textData[6].nrNotes"
                        :noteA="textData[6].noteAppInfA"
                        :noteB="textData[6].noteAppInfB"
                        :noteC="textData[6].noteAppInfC"
                        class="mb-5"
                      />
                    </div>
                    <div v-if="planSingle.question_a === 'ke1'">
                      <StatementText
                        :text="textData[7].textAppInform"
                        :note="textData[7].commentApp"
                        :nr-notes="textData[7].nrNotes"
                        :noteA="textData[7].noteAppInfA"
                        :noteB="textData[7].noteAppInfB"
                        :noteC="textData[7].noteAppInfC"
                        class="mb-5"
                      />
                    </div>

                    <StatementText
                      :text="statement[2].questionAppInform"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppInfA"
                      :noteB="statement[2].noteAppInfB"
                      :noteC="statement[2].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_a"
                      v-bind:label="statement[2].label"
                    />

                    <div class="mt-3">
                      <StatementText
                        :text="statement[3].questionAppInform"
                        :note="statement[3].commentApp"
                        :nr-notes="statement[3].nrNotes"
                        :noteA="statement[3].noteAppInfA"
                        :noteB="statement[3].noteAppInfB"
                        :noteC="statement[3].noteAppInfC"
                        class="mb-5"
                      />
                    </div>

                    <base-radio
                      v-model="question_b"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[3].nrOptions"
                      v-bind:optionA="statement[3].optionA"
                      v-bind:optionB="statement[3].optionB"
                      v-bind:optionC="statement[3].optionC"
                      v-bind:optionD="statement[3].optionD"
                      class="mb-5"
                    />

                    <div v-if="question_b === 'ke1'">
                      <StatementText
                        :text="statement[4].questionAppInform"
                        :note="statement[4].commentApp"
                        :nr-notes="statement[4].nrNotes"
                        :noteA="statement[4].noteAppInfA"
                        :noteB="statement[4].noteAppInfB"
                        :noteC="statement[4].noteAppInfC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_c"
                        v-bind:label="statement[4].label"
                      />

                      <StatementText
                        :text="statement[5].questionAppInform"
                        :note="statement[5].commentApp"
                        :nr-notes="statement[5].nrNotes"
                        :noteA="statement[5].noteAppInfA"
                        :noteB="statement[5].noteAppInfB"
                        :noteC="statement[5].noteAppInfC"
                        class="mb-5"
                      />

                      <BaseValInput
                        rules="max:150"
                        v-model="question_d"
                        v-bind:label="statement[5].label"
                      />
                    </div>
                  </div>

                  <div v-if="planSingle.question_i === 'ke1'">
                    <StatementText
                      :text="statement[6].questionAppInform"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                  </div>
                  <div v-if="planSingle.question_i === 'ke2'">
                    Vanwege de complexiteit van de organisatie zullen wij de
                    detailinformatie van dochterondernemingen en deelnemingen in
                    het rapport opnemen.
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
              :number="4"
              class="mb-5"
              :active="false"
            />
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
      question_a: "",
      question_b: "",
      question_c: "",
      question_d: "",
      question_e: "",
      question_ac: "",
      question_ad: "",
      question_ae: "",
      question_af: "",
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
      this.$router.push({ name: "module-f-step-a" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_ac: this.question_ac,
        question_ad: this.question_ad,
        question_ae: this.question_ae,
        question_af: this.question_af,
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
          if (this.question_e === "ke1") {
            this.$router.push({ name: "module-f-step-c" });
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
    this.question_a = this.planSingle.f_bv.question_a;
    this.question_b = this.planSingle.f_bv.question_b;
    this.question_c = this.planSingle.f_bv.question_c;
    this.question_d = this.planSingle.f_bv.question_d;
    this.question_e = this.planSingle.f_bv.question_e;
    this.question_ac = this.planSingle.f_bv.question_ac;
    this.question_ad = this.planSingle.f_bv.question_ad;
    this.question_ae = this.planSingle.f_bv.question_ae;
    this.question_af = this.planSingle.f_bv.question_af;
  },
};
</script>
