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
                :head-text="textIntro[2].header"
                :text-a="textIntro[2].texta"
                :text-b="textIntro[2].textb"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[2].headerInf"
                :text-a="textIntro[2].textaInf"
                :text-b="textIntro[2].textbInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver v-slot="{ invalid, validate, errors }">
              <form ref="form">
                <CustomDivider />
                <div v-if="formal">
                  <StatementText :statement="textIntro[2].textb" />
                </div>
                <div v-if="!formal">
                  <StatementText :statement="textIntro[2].textbInf" />
                </div>
                <base-radio
                  v-model="question_b"
                  :error-messages="errors"
                  rules="required"
                  nrOptions="2"
                  optionA="Ja"
                  optionB="Nee"
                ></base-radio>
                <div v-if="question_b === 'ke2'">
                  <div v-if="formal">
                    <StatementText
                      :statement="'De volgende vraag (juridische vertegenwoordiging) is niet voor u van toepassing en wordt overgeslagen'"
                    ></StatementText>
                  </div>
                  <div v-if="!formal">
                    <StatementText
                      :statement="'De volgende vraag (juridische vertegenwoordiging) is niet voor jou van toepassing en wordt overgeslagen'"
                    ></StatementText>
                  </div>
                </div>
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
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :active="false"
            />

            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :active="false"
            />
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
  name: "stepTwo",
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
      set(value) {
        this.$store.commit("quick/update_question_b", value);
      },
    },
  },
  methods: {
    nextStep() {
      if (this.question_b === "ke1") {
        this.$router.push({ name: "stepThree" });
      } else {
        this.$router.push({ name: "stepFour" });
      }
    },
    backStep() {
      this.$router.push({ name: "stepOne" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
