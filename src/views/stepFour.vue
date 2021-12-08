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
                :head-text="textIntro[4].header"
                :text-a="textIntro[4].texta"
                :text-b="textIntro[4].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[4].headerInf"
                :text-a="textIntro[4].textaInf"
                :text-b="textIntro[4].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[4].textb" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[4].textbInf" />
                </div>
                <base-radio
                  v-model="question_d"
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
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :active="false"
            />
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
  name: "stepThree",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
    };
  },
  computed: {
    question_b: {
      get() {
        return this.$store.state.quick.question_b;
      },
    },

    question_d: {
      get() {
        return this.$store.state.quick.question_d;
      },
      set(value) {
        this.$store.commit("quick/update_question_d", value);
      },
    },
  },
  methods: {
    nextStep() {
      this.$router.push({ name: "stepFive" });
    },
    backStep() {
      if (this.question_b === "ke1") {
        this.$router.push({ name: "stepThree" });
      } else {
        this.$router.push({ name: "stepTwo" });
      }
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
