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
                :head-text="textIntro[7].header"
                :text-a="textIntro[7].texta"
                :text-b="textIntro[7].textb"
                :text-c="textIntro[7].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[7].headerInf"
                :text-a="textIntro[7].textaInf"
                :text-b="textIntro[7].textbInf"
                :text-c="textIntro[7].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[7].textc" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[7].textcInf" />
                </div>
                <base-radio
                  v-model="question_g"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="3"
                  optionA="Ja"
                  optionB="Nee"
                  optionC="Weet niet / onbekend"
                ></base-radio>
                <CustomDivider />
                <v-row class="mt-10">
                  <v-spacer />
                  <btn-back :onClick="backStep" />
                  <btn-continue :onClick="nextStep" :disabled="invalid" />
                </v-row>
              </form>
            </ValidationObserver>
            <div class="mt-10" />
            <step-text
              :stepText="textIntro[8].header"
              :number="8"
              class="mb-5"
              :active="false"
            />
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textData from "@/text/textApp.json";

export default {
  name: "stepSeven",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
      sl_a: 0,
    };
  },
  computed: {
    question_g: {
      get() {
        return this.$store.state.quick.question_g;
      },
      set(value) {
        this.$store.commit("quick/update_question_g", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepEnd" });
    },
    backStep() {
      this.$router.push({ name: "stepSix" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
