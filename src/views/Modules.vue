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
              <statement-text :text="'Openstaande modules'" />
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModA">
                <v-card
                  class="mt-10"
                  @click="goModA"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[1].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[1].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[1].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[1].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModApartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModApartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModApartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModB && !planSingle.finishModB"
              >
                <v-card
                  class="mt-10"
                  @click="goModB"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[2].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[2].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[2].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[2].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModBpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModC && !planSingle.finishModC"
              >
                <v-card
                  class="mt-10"
                  @click="goModC"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[3].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[3].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[3].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[3].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModCpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModCpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModCpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModD && !planSingle.finishModD"
              >
                <v-card
                  class="mt-10"
                  @click="goModD"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[4].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[4].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[4].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[4].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModDpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModE && !planSingle.finishModE"
              >
                <v-card
                  class="mt-10"
                  @click="goModE"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[5].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[5].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[5].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[5].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModEpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModF && !planSingle.finishModF"
              >
                <v-card
                  class="mt-10"
                  @click="goModF"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[6].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[6].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[6].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[6].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModFpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModG && !planSingle.finishModG"
              >
                <v-card
                  class="mt-10"
                  @click="goModG"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[7].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[7].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[7].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[7].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModGpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModGpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModGpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModH">
                <v-card
                  class="mt-10"
                  @click="goModH"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[8].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[8].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[8].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[8].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModHpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModHpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModHpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModI">
                <v-card
                  class="mt-10"
                  @click="goModI"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[9].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[9].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[9].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[9].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModIpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModJ">
                <v-card
                  class="mt-10"
                  @click="goModJ"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[10].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[10].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[10].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[10].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModJpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModK">
                <v-card
                  class="mt-10"
                  @click="goModK"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[11].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[11].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[11].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[11].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModKpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModKpartB"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModL">
                <v-card
                  class="mt-10"
                  @click="goModL"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[12].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[12].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[12].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[12].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModLpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModM">
                <v-card
                  class="mt-10"
                  @click="goModM"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[13].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[13].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[13].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[13].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModMpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="!planSingle.finishModN">
                <v-card
                  class="mt-10"
                  @click="goModN"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[14].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[14].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[14].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[14].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModNpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </div>
            <v-hover v-slot="{ hover }">
              <v-card
                class="mt-10"
                @click="goReport"
                :class="{ 'on-hover': hover }"
              >
                <v-card-title v-if="formal" class="primary--text text-h5">{{
                  moduleData[15].header
                }}</v-card-title>
                <v-card-title v-if="!formal" class="primary--text text-h5">{{
                  moduleData[15].headerInf
                }}</v-card-title>
                <v-card-text>
                  <v-row v-if="formal" no-gutters
                    >{{ moduleData[15].text }}
                  </v-row>
                  <v-row v-if="!formal" no-gutters
                    >{{ moduleData[15].InfText }}
                  </v-row>
                </v-card-text>
                <v-card-actions class="mb-10">
                  <v-spacer />
                  <v-btn class="primary mr-10 mb-5">start</v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
            <div>
              <statement-text :text="'Afgeronde modules'" />
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModA">
                <v-card
                  class="mt-10"
                  @click="goModA"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[1].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[1].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[1].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[1].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModApartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModApartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModApartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModB && planSingle.finishModB"
              >
                <v-card
                  class="mt-10"
                  @click="goModB"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[2].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[2].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[2].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[2].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModBpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModC && planSingle.finishModC"
              >
                <v-card
                  class="mt-10"
                  @click="goModC"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[3].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[3].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[3].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[3].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModCpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModCpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModCpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModD && planSingle.finishModD"
              >
                <v-card
                  class="mt-10"
                  @click="goModD"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[4].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[4].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[4].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[4].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModDpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModDpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModE && planSingle.finishModE"
              >
                <v-card
                  class="mt-10"
                  @click="goModE"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[5].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[5].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[5].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[5].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModEpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModF && planSingle.finishModF"
              >
                <v-card
                  class="mt-10"
                  @click="goModF"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[6].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[6].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[6].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[6].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModFpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModFpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover
                v-slot="{ hover }"
                v-if="planSingle.useModG && planSingle.finishModG"
              >
                <v-card
                  class="mt-10"
                  @click="goModG"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[7].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[7].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[7].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[7].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModGpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModGpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModGpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModH">
                <v-card
                  class="mt-10"
                  @click="goModH"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[8].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[8].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[8].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[8].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModHpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModHpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModHpartC"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModI">
                <v-card
                  class="mt-10"
                  @click="goModI"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[9].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[9].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[9].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[9].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModIpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModIpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModJ">
                <v-card
                  class="mt-10"
                  @click="goModJ"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[10].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[10].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[10].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[10].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModJpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartB"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartC"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModJpartD"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModK">
                <v-card
                  class="mt-10"
                  @click="goModK"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[11].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[11].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[11].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[11].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModKpartA"
                        class="ml-2"
                      />
                      <status-icon
                        :finish="planSingle.finishModKpartB"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModL">
                <v-card
                  class="mt-10"
                  @click="goModL"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[12].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[12].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[12].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[12].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModLpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModM">
                <v-card
                  class="mt-10"
                  @click="goModM"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[13].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[13].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[13].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[13].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModMpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
              <v-hover v-slot="{ hover }" v-if="planSingle.finishModN">
                <v-card
                  class="mt-10"
                  @click="goModN"
                  :class="{ 'on-hover': hover }"
                >
                  <v-card-title v-if="formal" class="primary--text text-h5">{{
                    moduleData[14].header
                  }}</v-card-title>
                  <v-card-title v-if="!formal" class="primary--text text-h5">{{
                    moduleData[14].headerInf
                  }}</v-card-title>
                  <v-card-text>
                    <v-row v-if="formal" no-gutters
                      >{{ moduleData[14].text }}
                    </v-row>
                    <v-row v-if="!formal" no-gutters
                      >{{ moduleData[14].InfText }}
                    </v-row>
                    <v-row no-gutters class="mt-5">
                      Status:
                      <status-icon
                        :finish="planSingle.finishModNpartA"
                        class="ml-2"
                      />
                    </v-row>
                  </v-card-text>
                  <v-card-actions class="mb-10">
                    <v-spacer />
                    <v-btn class="primary mr-10 mb-5">start</v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
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
import StatusIcon from "@/components/modules/statusIcon";

export default {
  name: "stepTwo",
  components: { StatusIcon },
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
