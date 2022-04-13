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
                :head-text="textIntro[0].header"
                :text-a="textIntro[0].texta"
                :text-b="textIntro[0].textb"
                :text-c="textIntro[0].textc"
                :text-d="textIntro[0].textd"
                :text-e="textIntro[0].texte"
                :text-f="textIntro[0].textf"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textIntro[0].headerInf"
                :text-a="textIntro[0].textaInf"
                :text-b="textIntro[0].textbInf"
                :text-c="textIntro[0].textcInf"
                :text-d="textIntro[0].textdInf"
                :text-e="textIntro[0].texteInf"
                :text-f="textIntro[0].textfInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-5">
            <div>
              <h3 class="primary--text">Openstaande modules</h3>
              <ta-module-card-np
                v-if="planSingle.useModA && !planSingle.finishModA"
                :text-module="moduleData[1]"
                :nr-options="3"
                :on-click="goModA"
                :ready-a="planSingle.finishModApartA"
                :ready-b="planSingle.finishModApartB"
                :ready-c="planSingle.finishModApartC"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModB && !planSingle.finishModB"
                :text-module="moduleData[2]"
                :nr-options="1"
                :on-click="goModB"
                :ready-a="planSingle.finishModBpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModC && !planSingle.finishModC"
                :text-module="moduleData[3]"
                :nr-options="3"
                :on-click="goModC"
                :ready-a="planSingle.finishModCpartA"
                :ready-b="planSingle.finishModCpartB"
                :ready-c="planSingle.finishModCpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModD && !planSingle.finishModD"
                :text-module="moduleData[4]"
                :nr-options="4"
                :on-click="goModD"
                :ready-a="planSingle.finishModDpartA"
                :ready-b="planSingle.finishModDpartB"
                :ready-c="planSingle.finishModDpartC"
                :ready-d="planSingle.finishModDpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModE && !planSingle.finishModE"
                :text-module="moduleData[5]"
                :nr-options="1"
                :on-click="goModE"
                :ready-a="planSingle.finishModEpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModF && !planSingle.finishModF"
                :text-module="moduleData[6]"
                :nr-options="4"
                :on-click="goModF"
                :ready-a="planSingle.finishModFpartA"
                :ready-b="planSingle.finishModFpartB"
                :ready-c="planSingle.finishModFpartC"
                :ready-d="planSingle.finishModFpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModG && !planSingle.finishModG"
                :text-module="moduleData[7]"
                :nr-options="3"
                :on-click="goModG"
                :ready-a="planSingle.finishModGpartA"
                :ready-b="planSingle.finishModGpartB"
                :ready-c="planSingle.finishModGpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModH && !planSingle.finishModH"
                :text-module="moduleData[8]"
                :nr-options="3"
                :on-click="goModH"
                :ready-a="planSingle.finishModHpartA"
                :ready-b="planSingle.finishModHpartB"
                :ready-c="planSingle.finishModHpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModI && !planSingle.finishModI"
                :text-module="moduleData[9]"
                :nr-options="4"
                :on-click="goModI"
                :ready-a="planSingle.finishModIpartA"
                :ready-b="planSingle.finishModIpartB"
                :ready-c="planSingle.finishModIpartC"
                :ready-d="planSingle.finishModIpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModJ && !planSingle.finishModJ"
                :text-module="moduleData[10]"
                :nr-options="4"
                :on-click="goModJ"
                :ready-a="planSingle.finishModJpartA"
                :ready-b="planSingle.finishModJpartB"
                :ready-c="planSingle.finishModJpartC"
                :ready-d="planSingle.finishModJpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModK && !planSingle.finishModK"
                :text-module="moduleData[11]"
                :nr-options="2"
                :on-click="goModK"
                :ready-a="planSingle.finishModKpartA"
                :ready-b="planSingle.finishModKpartB"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModL && !planSingle.finishModL"
                :text-module="moduleData[12]"
                :nr-options="1"
                :on-click="goModL"
                :ready-a="planSingle.finishModLpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModM && !planSingle.finishModM"
                :text-module="moduleData[13]"
                :nr-options="1"
                :on-click="goModM"
                :ready-a="planSingle.finishModMpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModN && !planSingle.finishModN"
                :text-module="moduleData[14]"
                :nr-options="1"
                :on-click="goModN"
                :ready-a="planSingle.finishModNpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                :text-module="moduleData[15]"
                :nr-options="0"
                :on-click="goReport"
                :formal="formal"
                class="mt-3 mb-3"
              />
            </div>

            <div>
              <h3 class="primary--text">Afgeronde modules</h3>
              <ta-module-card-np
                v-if="planSingle.useModA && planSingle.finishModA"
                :text-module="moduleData[1]"
                :nr-options="3"
                :on-click="goModA"
                :ready-a="planSingle.finishModApartA"
                :ready-b="planSingle.finishModApartB"
                :ready-c="planSingle.finishModApartC"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModB && planSingle.finishModB"
                :text-module="moduleData[2]"
                :nr-options="1"
                :on-click="goModB"
                :ready-a="planSingle.finishModBpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModC && planSingle.finishModC"
                :text-module="moduleData[3]"
                :nr-options="3"
                :on-click="goModC"
                :ready-a="planSingle.finishModCpartA"
                :ready-b="planSingle.finishModCpartB"
                :ready-c="planSingle.finishModCpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModD && planSingle.finishModD"
                :text-module="moduleData[4]"
                :nr-options="4"
                :on-click="goModD"
                :ready-a="planSingle.finishModDpartA"
                :ready-b="planSingle.finishModDpartB"
                :ready-c="planSingle.finishModDpartC"
                :ready-d="planSingle.finishModDpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModE && planSingle.finishModE"
                :text-module="moduleData[5]"
                :nr-options="1"
                :on-click="goModE"
                :ready-a="planSingle.finishModEpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />

              <ta-module-card-np
                v-if="planSingle.useModF && planSingle.finishModF"
                :text-module="moduleData[6]"
                :nr-options="4"
                :on-click="goModF"
                :ready-a="planSingle.finishModFpartA"
                :ready-b="planSingle.finishModFpartB"
                :ready-c="planSingle.finishModFpartC"
                :ready-d="planSingle.finishModFpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModG && planSingle.finishModG"
                :text-module="moduleData[7]"
                :nr-options="3"
                :on-click="goModG"
                :ready-a="planSingle.finishModGpartA"
                :ready-b="planSingle.finishModGpartB"
                :ready-c="planSingle.finishModGpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModH && planSingle.finishModH"
                :text-module="moduleData[8]"
                :nr-options="3"
                :on-click="goModH"
                :ready-a="planSingle.finishModHpartA"
                :ready-b="planSingle.finishModHpartB"
                :ready-c="planSingle.finishModHpartC"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModI && planSingle.finishModI"
                :text-module="moduleData[9]"
                :nr-options="4"
                :on-click="goModI"
                :ready-a="planSingle.finishModIpartA"
                :ready-b="planSingle.finishModIpartB"
                :ready-c="planSingle.finishModIpartC"
                :ready-d="planSingle.finishModIpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModJ && planSingle.finishModJ"
                :text-module="moduleData[10]"
                :nr-options="4"
                :on-click="goModJ"
                :ready-a="planSingle.finishModJpartA"
                :ready-b="planSingle.finishModJpartB"
                :ready-c="planSingle.finishModJpartC"
                :ready-d="planSingle.finishModJpartD"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModK && planSingle.finishModK"
                :text-module="moduleData[11]"
                :nr-options="2"
                :on-click="goModK"
                :ready-a="planSingle.finishModKpartA"
                :ready-b="planSingle.finishModKpartB"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModL && planSingle.finishModL"
                :text-module="moduleData[12]"
                :nr-options="1"
                :on-click="goModL"
                :ready-a="planSingle.finishModLpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModM && planSingle.finishModM"
                :text-module="moduleData[13]"
                :nr-options="1"
                :on-click="goModM"
                :ready-a="planSingle.finishModMpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
              <ta-module-card-np
                v-if="planSingle.useModN && planSingle.finishModN"
                :text-module="moduleData[14]"
                :nr-options="1"
                :on-click="goModN"
                :ready-a="planSingle.finishModNpartA"
                :formal="formal"
                class="mt-3 mb-3"
              />
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textData from "@/text/modules/textLeft.json";
import moduleData from "@/text/modules/textModules.json";
import { mapGetters } from "vuex";

export default {
  name: "stepTwo",
  components: {},
  data() {
    return {
      textIntro: textData,
      moduleData: moduleData,
      formal: null,
      active: true,
    };
  },
  methods: {
    goModA() {
      this.$router.push({ name: "module-a-start" });
    },
    goModB() {
      this.$router.push({ name: "module-b-start" });
    },
    goModC() {
      this.$router.push({ name: "module-c-start" });
    },
    goModD() {
      this.$router.push({ name: "module-d-start" });
    },
    goModE() {
      this.$router.push({ name: "module-e-start" });
    },
    goModF() {
      this.$router.push({ name: "module-f-start" });
    },
    goModG() {
      this.$router.push({ name: "module-g-start" });
    },
    goModH() {
      this.$router.push({ name: "module-h-start" });
    },
    goModI() {
      this.$router.push({ name: "module-i-start" });
    },
    goModJ() {
      this.$router.push({ name: "module-j-start" });
    },
    goModK() {
      this.$router.push({ name: "module-k-start" });
    },
    goModL() {
      this.$router.push({ name: "module-l-start" });
    },
    goModM() {
      this.$router.push({ name: "module-m-start" });
    },
    goModN() {
      this.$router.push({ name: "module-n-start" });
    },
    goReport() {
      this.$router.push({ name: "report-end" });
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
    this.tokkie = JSON.parse(localStorage.getItem("tokkie"));
  },
};
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
.v-card.on-hover.theme--light
  background-color: rgba(0, 0, 0, 0.2)
  >.v-card__text
    color: #000
</style>
