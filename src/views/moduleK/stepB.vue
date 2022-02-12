<template>
  <div>
    <ToolbarAuth :name="'Management en Medewerkers'" />
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
                  <BaseValInput
                    rules="max:150"
                    v-model="question_n"
                    v-bind:label="statement[17].label"
                  />
                  <StatementText
                    :text="statement[18].questionAppForm"
                    :note="statement[18].commentApp"
                    :nr-notes="statement[18].nrNotes"
                    :noteA="statement[18].noteAppFormA"
                    :noteB="statement[18].noteAppFormB"
                    :noteC="statement[18].noteAppFormC"
                    class="mb-5"
                  />
                  <base-radio
                    v-model="question_o"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[18].nrOptions"
                    v-bind:optionA="statement[18].optionA"
                    v-bind:optionB="statement[18].optionB"
                    v-bind:optionC="statement[18].optionC"
                    v-bind:optionD="statement[18].optionD"
                  />
                  <div v-if="question_o === 'ke1'">
                    <StatementText
                      :text="textData[8].textAppForm"
                      :note="textData[8].commentApp"
                      :nr-notes="textData[8].nrNotes"
                      :noteA="textData[8].noteAppFormA"
                      :noteB="textData[8].noteAppFormB"
                      :noteC="textData[8].noteAppFormC"
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
                      v-model="question_p"
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
                      v-model="question_q"
                      v-bind:label="statement[20].label"
                    />
                    <StatementText
                      :text="textData[9].textAppForm"
                      :note="textData[9].commentApp"
                      :nr-notes="textData[9].nrNotes"
                      :noteA="textData[9].noteAppFormA"
                      :noteB="textData[9].noteAppFormB"
                      :noteC="textData[9].noteAppFormC"
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
                      v-bind:optionD="statement[22].optionD"
                    />
                    <div v-if="question_r === 'ke1'">
                      <StatementText
                        :text="textData[10].textAppForm"
                        :note="textData[10].commentApp"
                        :nr-notes="textData[10].nrNotes"
                        :noteA="textData[10].noteAppFormA"
                        :noteB="textData[10].noteAppFormB"
                        :noteC="textData[10].noteAppFormC"
                        class="mb-5"
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
                        v-model="question_s"
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
                        v-model="question_t"
                        v-bind:label="statement[24].label"
                      />
                      <StatementText
                        :text="textData[11].textAppForm"
                        :note="textData[11].commentApp"
                        :nr-notes="textData[11].nrNotes"
                        :noteA="textData[11].noteAppFormA"
                        :noteB="textData[11].noteAppFormB"
                        :noteC="textData[11].noteAppFormC"
                        class="mb-5"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_e"
                        v-bind:label="statement[25].label"
                      />
                      <StatementText
                        :text="statement[26].questionAppForm"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppFormA"
                        :noteB="statement[26].noteAppFormB"
                        :noteC="statement[26].noteAppFormC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_u"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[26].nrOptions"
                        v-bind:optionA="statement[26].optionA"
                        v-bind:optionB="statement[26].optionB"
                        v-bind:optionC="statement[26].optionC"
                        v-bind:optionD="statement[26].optionD"
                      />
                      <div v-if="question_u === 'ke1'">
                        <StatementText
                          :text="textData[12].textAppForm"
                          :note="textData[12].commentApp"
                          :nr-notes="textData[12].nrNotes"
                          :noteA="textData[12].noteAppFormA"
                          :noteB="textData[12].noteAppFormB"
                          :noteC="textData[12].noteAppFormC"
                          class="mb-5"
                        />
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
                          rules="max:150"
                          v-model="question_v"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_w"
                          v-bind:label="statement[28].label"
                        />
                        <StatementText
                          :text="textData[13].textAppForm"
                          :note="textData[13].commentApp"
                          :nr-notes="textData[13].nrNotes"
                          :noteA="textData[13].noteAppFormA"
                          :noteB="textData[13].noteAppFormB"
                          :noteC="textData[13].noteAppFormC"
                          class="mb-5"
                        />
                        <StatementText
                          :text="statement[29].questionAppForm"
                          :note="statement[29].commentApp"
                          :nr-notes="statement[29].nrNotes"
                          :noteA="statement[29].noteAppFormA"
                          :noteB="statement[29].noteAppFormB"
                          :noteC="statement[29].noteAppFormC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_f"
                          v-bind:label="statement[29].label"
                        />
                        <StatementText
                          :text="textData[14].textAppForm"
                          :note="textData[14].commentApp"
                          :nr-notes="textData[14].nrNotes"
                          :noteA="textData[14].noteAppFormA"
                          :noteB="textData[14].noteAppFormB"
                          :noteC="textData[14].noteAppFormC"
                          class="mb-5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
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
                  <BaseValInput
                    rules="max:150"
                    v-model="question_n"
                    v-bind:label="statement[17].label"
                  />
                  <StatementText
                    :text="statement[18].questionAppInform"
                    :note="statement[18].commentApp"
                    :nr-notes="statement[18].nrNotes"
                    :noteA="statement[18].noteAppInfA"
                    :noteB="statement[18].noteAppInfB"
                    :noteC="statement[18].noteAppInfC"
                    class="mb-5"
                  />
                  <base-radio
                    v-model="question_o"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[18].nrOptions"
                    v-bind:optionA="statement[18].optionA"
                    v-bind:optionB="statement[18].optionB"
                    v-bind:optionC="statement[18].optionC"
                    v-bind:optionD="statement[18].optionD"
                  />
                  <div v-if="question_o === 'ke1'">
                    <StatementText
                      :text="textData[8].textAppInform"
                      :note="textData[8].commentApp"
                      :nr-notes="textData[8].nrNotes"
                      :noteA="textData[8].noteAppInfA"
                      :noteB="textData[8].noteAppInfB"
                      :noteC="textData[8].noteAppInfC"
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
                      v-model="question_p"
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
                      v-model="question_q"
                      v-bind:label="statement[20].label"
                    />
                    <StatementText
                      :text="textData[9].textAppInform"
                      :note="textData[9].commentApp"
                      :nr-notes="textData[9].nrNotes"
                      :noteA="textData[9].noteAppInfA"
                      :noteB="textData[9].noteAppInfB"
                      :noteC="textData[9].noteAppInfC"
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
                      v-bind:optionD="statement[22].optionD"
                    />
                    <div v-if="question_r === 'ke1'">
                      <StatementText
                        :text="textData[10].textAppInform"
                        :note="textData[10].commentApp"
                        :nr-notes="textData[10].nrNotes"
                        :noteA="textData[10].noteAppInfA"
                        :noteB="textData[10].noteAppInfB"
                        :noteC="textData[10].noteAppInfC"
                        class="mb-5"
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
                        v-model="question_s"
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
                        v-model="question_t"
                        v-bind:label="statement[24].label"
                      />
                      <StatementText
                        :text="textData[11].textAppInform"
                        :note="textData[11].commentApp"
                        :nr-notes="textData[11].nrNotes"
                        :noteA="textData[11].noteAppInfA"
                        :noteB="textData[11].noteAppInfB"
                        :noteC="textData[11].noteAppInfC"
                        class="mb-5"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_e"
                        v-bind:label="statement[25].label"
                      />
                      <StatementText
                        :text="statement[26].questionAppInform"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppInfA"
                        :noteB="statement[26].noteAppInfB"
                        :noteC="statement[26].noteAppInfC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_u"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[26].nrOptions"
                        v-bind:optionA="statement[26].optionA"
                        v-bind:optionB="statement[26].optionB"
                        v-bind:optionC="statement[26].optionC"
                        v-bind:optionD="statement[26].optionD"
                      />
                      <div v-if="question_u === 'ke1'">
                        <StatementText
                          :text="textData[12].textAppInform"
                          :note="textData[12].commentApp"
                          :nr-notes="textData[12].nrNotes"
                          :noteA="textData[12].noteAppInfA"
                          :noteB="textData[12].noteAppInfB"
                          :noteC="textData[12].noteAppInfC"
                          class="mb-5"
                        />
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
                          rules="max:150"
                          v-model="question_v"
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
                        <BaseValInput
                          rules="max:150"
                          v-model="question_w"
                          v-bind:label="statement[28].label"
                        />
                        <StatementText
                          :text="textData[13].textAppInform"
                          :note="textData[13].commentApp"
                          :nr-notes="textData[13].nrNotes"
                          :noteA="textData[13].noteAppInfA"
                          :noteB="textData[13].noteAppInfB"
                          :noteC="textData[13].noteAppInfC"
                          class="mb-5"
                        />
                        <StatementText
                          :text="statement[29].questionAppInform"
                          :note="statement[29].commentApp"
                          :nr-notes="statement[29].nrNotes"
                          :noteA="statement[29].noteAppInfA"
                          :noteB="statement[29].noteAppInfB"
                          :noteC="statement[29].noteAppInfC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_f"
                          v-bind:label="statement[29].label"
                        />
                        <StatementText
                          :text="textData[14].textAppInform"
                          :note="textData[14].commentApp"
                          :nr-notes="textData[14].nrNotes"
                          :noteA="textData[14].noteAppInfA"
                          :noteB="textData[14].noteAppInfB"
                          :noteC="textData[14].noteAppInfC"
                          class="mb-5"
                        />
                      </div>
                    </div>
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
      errors: null,
      dialogStop: false,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      statement: Questions,
      textData: ExtraText,
      formal: null,
      question_m: "",
      question_n: "",
      question_o: "",
      question_p: "",
      question_q: "",
      question_r: "",
      question_s: "",
      question_t: "",
      question_u: "",
      question_v: "",
      question_w: "",
      text_d: "",
      text_e: "",
      text_f: "",
      finishModHpartA: true,
      finishModHpartB: false,
      finishModHpartC: false,
      finishModHpartD: false,
      finishModH: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-k-step-a" });
    },
    saveItem() {
      this.finishModKpartB = true;
      this.finishModK = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_m: this.question_m,
        question_n: this.question_n,
        question_o: this.question_o,
        question_p: this.question_p,
        question_q: this.question_q,
        question_r: this.question_r,
        question_s: this.question_s,
        question_t: this.question_t,
        question_u: this.question_u,
        question_v: this.question_v,
        question_w: this.question_w,
        text_d: this.text_d,
        text_e: this.text_e,
        text_f: this.text_f,
        finishModKpartA: this.finishModKpartA,
        finishModKpartB: this.finishModKpartB,
        finishModKpartC: this.finishModKpartC,
        finishModKpartD: this.finishModKpartD,
        finishModK: this.finishModK,
      };
      resultService
        .saveDataK(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-k-end" });
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
    this.question_m = this.planSingle.k_bv.question_m;
    this.question_n = this.planSingle.k_bv.question_n;
    this.question_o = this.planSingle.k_bv.question_o;
    this.question_p = this.planSingle.k_bv.question_p;
    this.question_q = this.planSingle.k_bv.question_q;
    this.question_r = this.planSingle.k_bv.question_r;
    this.question_s = this.planSingle.k_bv.question_s;
    this.question_t = this.planSingle.k_bv.question_t;
    this.question_u = this.planSingle.k_bv.question_u;
    this.question_v = this.planSingle.k_bv.question_v;
    this.question_w = this.planSingle.k_bv.question_w;
    this.text_d = this.planSingle.k_bv.text_d;
    this.text_e = this.planSingle.k_bv.text_e;
    this.text_f = this.planSingle.k_bv.text_f;
    this.finishModK = this.planSingle.finishModK;
    this.finishModKpartA = this.planSingle.finishModKpartA;
    this.finishModKpartB = this.planSingle.finishModKpartB;
    this.finishModKpartC = this.planSingle.finishModKpartC;
    this.finishModKpartD = this.planSingle.finishModKpartD;
  },
};
</script>
