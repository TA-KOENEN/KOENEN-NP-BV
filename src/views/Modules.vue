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
            <v-list three-line>
              <v-list-item @click="goModA">
                <v-list-item-content>
                  <v-list-item-title class="text-h5 primary--text"
                    >Uw gegevens</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-body-1 secondary--text"
                    >Uw basisgegevens zoals worden opgenomen in rapportages
                    (klik om te starten)</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>status</v-list-item-action-text>
                  <v-icon color="green darken-3">
                    mdi-checkbox-marked-circle-plus-outline
                  </v-icon>
                  <v-icon color="red darken-3">
                    mdi-checkbox-blank-circle-outline
                  </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item @click="goModA">
                <v-list-item-content>
                  <header-module text="Noodopvolging" />
                  <sub-header-module
                    text="Wie zijn uw waarnemer en opvolger (klik om te
                    starten)"
                  />
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>status</v-list-item-action-text>
                  <status-icon :finish="planSingle.finishModApartA" />
                  <status-icon :finish="planSingle.finishModApartB" />
                  <status-icon :finish="planSingle.finishModApartC" />
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Twee</v-list-item-title>
                  <v-list-item-subtitle>Ja ja</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>status</v-list-item-action-text>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Noodopvolging</v-list-item-title>
                  <v-list-item-subtitle>Ja ja</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>status</v-list-item-action-text>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                  <v-icon color="yellow darken-3"> mdi-star </v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import textData from "@/text/textApp.json";
import { mapGetters } from "vuex";
import StatusIcon from "@/components/modules/statusIcon";
import SubHeaderModule from "@/components/modules/subHeaderModule";
import HeaderModule from "@/components/modules/headerModule";

export default {
  name: "stepTwo",
  components: { HeaderModule, SubHeaderModule, StatusIcon },
  data() {
    return {
      textIntro: textData,
      formal: null,
      active: true,
    };
  },
  methods: {
    goModA() {
      this.$router.push({ name: "module-a-start" });
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

<style scoped></style>
