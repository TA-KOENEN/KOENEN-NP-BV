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
                  <v-row no-gutters>
                    <v-col cols="12">
                      <StatementText
                        :text="textData[5].textAppForm"
                        :note="textData[5].commentApp"
                        :nr-notes="textData[5].nrNotes"
                        :noteA="textData[5].noteAppFormA"
                        :noteB="textData[5].noteAppFormB"
                        :noteC="textData[5].noteAppFormC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[23].questionAppForm"
                        :note="statement[23].commentApp"
                        :nr-notes="statement[23].nrNotes"
                        :noteA="statement[23].noteAppFormA"
                        :noteB="statement[23].noteAppFormB"
                        :noteC="statement[23].noteAppFormC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_s"
                        v-bind:label="statement[23].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[24].questionAppForm"
                        :note="statement[24].commentApp"
                        :nr-notes="statement[24].nrNotes"
                        :noteA="statement[24].noteAppFormA"
                        :noteB="statement[24].noteAppFormB"
                        :noteC="statement[24].noteAppFormC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_t"
                        v-bind:label="statement[24].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[25].questionAppForm"
                        :note="statement[25].commentApp"
                        :nr-notes="statement[25].nrNotes"
                        :noteA="statement[25].noteAppFormA"
                        :noteB="statement[25].noteAppFormB"
                        :noteC="statement[25].noteAppFormC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_u"
                        v-bind:label="statement[25].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[26].questionAppForm"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppFormA"
                        :noteB="statement[26].noteAppFormB"
                        :noteC="statement[26].noteAppFormC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <base-radio
                        v-model="question_v"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[26].nrOptions"
                        v-bind:optionA="statement[26].optionA"
                        v-bind:optionB="statement[26].optionB"
                        v-bind:optionC="statement[26].optionC"
                        v-bind:optionD="statement[26].optionD"
                      />
                    </v-col>
                  </v-row>
                  <div v-if="question_v === 'ke1'">
                    <StatementText
                      :text="statement[27].questionAppForm"
                      :note="statement[27].commentApp"
                      :nr-notes="statement[27].nrNotes"
                      :noteA="statement[27].noteAppFormA"
                      :noteB="statement[27].noteAppFormB"
                      :noteC="statement[27].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:180"
                      v-model="question_w"
                      v-bind:label="statement[27].label"
                    />

                    <StatementText
                      :text="statement[28].questionAppForm"
                      :note="statement[28].commentApp"
                      :nr-notes="statement[28].nrNotes"
                      :noteA="statement[28].noteAppFormA"
                      :noteB="statement[28].noteAppFormB"
                      :noteC="statement[28].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[28].nrOptions"
                      v-bind:optionA="statement[28].optionA"
                      v-bind:optionB="statement[28].optionB"
                      v-bind:optionC="statement[28].optionC"
                      v-bind:optionD="statement[28].optionD"
                    />

                    <div v-if="question_x === 'ke1'">
                      <StatementText
                        :text="statement[29].questionAppForm"
                        :note="statement[29].commentApp"
                        :nr-notes="statement[29].nrNotes"
                        :noteA="statement[29].noteAppFormA"
                        :noteB="statement[29].noteAppFormB"
                        :noteC="statement[29].noteAppFormC"
                        class="mb-5"
                      />
                    </div>
                    <BaseValInput
                      rules="max:180"
                      v-model="question_y"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[6].textAppForm"
                    :note="textData[6].commentApp"
                    :nr-notes="textData[6].nrNotes"
                    :noteA="textData[6].noteAppFormA"
                    :noteB="textData[6].noteAppFormB"
                    :noteC="textData[6].noteAppFormC"
                    class="mb-5"
                  />

                  <StatementText
                    :text="statement[30].questionAppForm"
                    :note="statement[30].commentApp"
                    :nr-notes="statement[30].nrNotes"
                    :noteA="statement[30].noteAppFormA"
                    :noteB="statement[30].noteAppFormB"
                    :noteC="statement[30].noteAppFormC"
                    class="mb-5"
                  />

                  <base-val-area
                    rules="max:500"
                    v-model="text_e"
                    v-bind:label="statement[30].label"
                  />
                </div>

                <!--informal-->

                <div v-if="!formal">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <StatementText
                        :text="textData[5].textAppInform"
                        :note="textData[5].commentApp"
                        :nr-notes="textData[5].nrNotes"
                        :noteA="textData[5].noteAppInfA"
                        :noteB="textData[5].noteAppInfB"
                        :noteC="textData[5].noteAppInfC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[23].questionAppInform"
                        :note="statement[23].commentApp"
                        :nr-notes="statement[23].nrNotes"
                        :noteA="statement[23].noteAppInfA"
                        :noteB="statement[23].noteAppInfB"
                        :noteC="statement[23].noteAppInfC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_s"
                        v-bind:label="statement[23].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[24].questionAppInform"
                        :note="statement[24].commentApp"
                        :nr-notes="statement[24].nrNotes"
                        :noteA="statement[24].noteAppInfA"
                        :noteB="statement[24].noteAppInfB"
                        :noteC="statement[24].noteAppInfC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_t"
                        v-bind:label="statement[24].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[25].questionAppInform"
                        :note="statement[25].commentApp"
                        :nr-notes="statement[25].nrNotes"
                        :noteA="statement[25].noteAppInfA"
                        :noteB="statement[25].noteAppInfB"
                        :noteC="statement[25].noteAppInfC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <BaseValInput
                        rules="max:150"
                        v-model="question_u"
                        v-bind:label="statement[25].label"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <StatementText
                        :text="statement[26].questionAppInform"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppInfA"
                        :noteB="statement[26].noteAppInfB"
                        :noteC="statement[26].noteAppInfC"
                        class="mb-5"
                      />
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="mt-3">
                    <v-col cols="12">
                      <base-radio
                        v-model="question_v"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[26].nrOptions"
                        v-bind:optionA="statement[26].optionA"
                        v-bind:optionB="statement[26].optionB"
                        v-bind:optionC="statement[26].optionC"
                        v-bind:optionD="statement[26].optionD"
                      />
                    </v-col>
                  </v-row>
                  <div v-if="question_v === 'ke1'">
                    <StatementText
                      :text="statement[27].questionAppInform"
                      :note="statement[27].commentApp"
                      :nr-notes="statement[27].nrNotes"
                      :noteA="statement[27].noteAppInfA"
                      :noteB="statement[27].noteAppInfB"
                      :noteC="statement[27].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:180"
                      v-model="question_w"
                      v-bind:label="statement[27].label"
                    />

                    <StatementText
                      :text="statement[28].questionAppInform"
                      :note="statement[28].commentApp"
                      :nr-notes="statement[28].nrNotes"
                      :noteA="statement[28].noteAppInfA"
                      :noteB="statement[28].noteAppInfB"
                      :noteC="statement[28].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[28].nrOptions"
                      v-bind:optionA="statement[28].optionA"
                      v-bind:optionB="statement[28].optionB"
                      v-bind:optionC="statement[28].optionC"
                      v-bind:optionD="statement[28].optionD"
                    />

                    <div v-if="question_x === 'ke1'">
                      <StatementText
                        :text="statement[29].questionAppInform"
                        :note="statement[29].commentApp"
                        :nr-notes="statement[29].nrNotes"
                        :noteA="statement[29].noteAppInfA"
                        :noteB="statement[29].noteAppInfB"
                        :noteC="statement[29].noteAppInfC"
                        class="mb-5"
                      />
                    </div>
                    <BaseValInput
                      rules="max:180"
                      v-model="question_y"
                      v-bind:label="statement[29].label"
                    />
                  </div>

                  <StatementText
                    :text="textData[6].textAppInform"
                    :note="textData[6].commentApp"
                    :nr-notes="textData[6].nrNotes"
                    :noteA="textData[6].noteAppInfA"
                    :noteB="textData[6].noteAppInfB"
                    :noteC="textData[6].noteAppInfC"
                    class="mb-5"
                  />

                  <StatementText
                    :text="statement[30].questionAppInform"
                    :note="statement[30].commentApp"
                    :nr-notes="statement[30].nrNotes"
                    :noteA="statement[30].noteAppInfA"
                    :noteB="statement[30].noteAppInfB"
                    :noteC="statement[30].noteAppInfC"
                    class="mb-5"
                  />

                  <base-val-area
                    rules="max:500"
                    v-model="text_e"
                    v-bind:label="statement[30].label"
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
      question_s: "",
      question_t: "",
      question_u: "",
      question_v: "",
      question_w: "",
      question_x: "",
      question_y: "",
      text_e: "",
      finishModD: true,
      finishModDpartA: true,
      finishModDpartB: true,
      finishModDpartC: true,
      finishModDpartD: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-d-step-c" });
    },
    saveItem() {
      console.log("next Step works");
      this.finishModDpartD = true;
      this.finishModD = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_s: this.question_s,
        question_t: this.question_t,
        question_u: this.question_u,
        question_v: this.question_v,
        question_w: this.question_w,
        question_x: this.question_x,
        question_y: this.question_y,
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
          this.$router.push({ name: "module-d-end" });
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
    this.question_s = this.planSingle.d_bv.question_s;
    this.question_t = this.planSingle.d_bv.question_t;
    this.question_u = this.planSingle.d_bv.question_u;
    this.question_v = this.planSingle.d_bv.question_v;
    this.question_w = this.planSingle.d_bv.question_w;
    this.question_x = this.planSingle.d_bv.question_x;
    this.question_y = this.planSingle.d_bv.question_y;
    this.text_e = this.planSingle.d_bv.text_e;
    this.finishModD = this.planSingle.finishModD;
    this.finishModCpartA = this.planSingle.finishModCpartA;
    this.finishModCpartB = this.planSingle.finishModCpartB;
    this.finishModCpartC = this.planSingle.finishModCpartC;
    this.finishModCpartD = this.planSingle.finishModCpartD;
  },
};
</script>
