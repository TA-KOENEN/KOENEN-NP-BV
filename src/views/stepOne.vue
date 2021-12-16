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
                :head-text="textIntro[1].header"
                :text-a="textIntro[1].texta"
                :text-b="textIntro[1].textb"
                :text-c="textIntro[1].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[1].headerInf"
                :text-a="textIntro[1].textaInf"
                :text-b="textIntro[1].textbInf"
                :text-c="textIntro[1].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textIntro[1].header"
              :number="1"
              class="mb-5"
              :active="true"
            />

            <form ref="form">
              <CustomDivider />
              <div v-if="formal">
                <StatementText :statement="textIntro[1].textc" />
              </div>
              <div v-if="!formal">
                <StatementText :statement="textIntro[1].textcInf" />
              </div>
              <ta-slider2 v-model="sl_a" />
              <v-row class="mt-10">
                <v-spacer />
                <btn-continue :onClick="nextStep" />
              </v-row>
            </form>
            <CustomDivider />
            <div class="mt-10" />
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :active="false"
            />
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
  name: "stepOne",
  components: {},
  data() {
    return {
      textIntro: textData,
      formal: null,
    };
  },
  computed: {
    sl_a: {
      get() {
        return this.$store.state.quick.sl_a;
      },
      set(value) {
        this.$store.commit("quick/update_sl_a", value);
      },
    },
  },
  methods: {
    nextStep() {
      console.log("next Step works");
      this.$router.push({ name: "stepTwo" });
    },
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
