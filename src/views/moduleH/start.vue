<template>
  <div>
    <ToolbarAuth :name="'Bedrijfsstrategie'" />
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
                :head-text="textAppLeft[1].header"
                :text-a="textAppLeft[1].texta"
                :text-b="textAppLeft[1].textb"
                :text-c="textAppLeft[1].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[1].headerInf"
                :text-a="textAppLeft[1].textaInf"
                :text-b="textAppLeft[1].textbInf"
                :text-c="textAppLeft[1].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[1].header"
              :number="1"
              class="mb-5"
              :active="true"
            />
            <vimeo-player
              :video-id="vimeo.moduleH"
              class="embed-container"
              :options="{ responsive: true }"
            ></vimeo-player>

            <v-row class="mt-10">
              <btn-stop :on-click="stopThis" />
              <v-spacer />
              <btn-continue :onClick="nextStep" />
            </v-row>
            <CustomDivider />
            <div class="mt-10" />
            <step-text
              :stepText="textAppRight[2].header"
              :number="2"
              class="mb-5"
              :active="false"
            />
            <step-text
              :stepText="textAppRight[3].header"
              :number="3"
              class="mb-5"
              :active="false"
            />

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
          </div>
        </v-col>
      </v-row>
    </div>
    <stop-element v-model="dialogStop" />
  </div>
</template>

<script>
import textAppLeft from "@/text/moduleH/textAppLeftH.json";
import textAppRight from "@/text/moduleH/textAppRightH.json";
import vimeoData from "@/text/vimeo.json";
import { mapGetters } from "vuex";
export default {
  name: "stepOne",
  components: {},
  data() {
    return {
      dialogStop: false,
      vimeo: vimeoData,
      textAppLeft: textAppLeft,
      textAppRight: textAppRight,
      formal: null,
    };
  },
  methods: {
    nextStep() {
      console.log("next Step works");
      this.$router.push({ name: "module-h-step-a" });
    },
    stopThis() {
      this.dialogStop = true;
    },
  },
  computed: {
    ...mapGetters("plan", ["loading", "planSingle"]),
  },

  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
  },
};
</script>
