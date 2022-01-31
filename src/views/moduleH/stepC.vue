<template>
  <div>
    <ToolbarAuth :name="'Bedrijfsstrategie'" />
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
                :head-text="textAppLeft[4].header"
                :text-a="textAppLeft[4].texta"
                :text-b="textAppLeft[4].textb"
                :text-c="textAppLeft[4].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[4].headerInf"
                :text-a="textAppLeft[4].textaInf"
                :text-b="textAppLeft[4].textbInf"
                :text-c="textAppLeft[4].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[4].header"
              :number="4"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <!-- formal-->
                <div v-if="formal">
                  <StatementText
                    :text="statement[11].questionAppForm"
                    :note="statement[11].commentApp"
                    :nr-notes="statement[11].nrNotes"
                    :noteA="statement[11].noteAppFormA"
                    :noteB="statement[11].noteAppFormB"
                    :noteC="statement[11].noteAppFormC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[11].nrOptions"
                    v-bind:optionA="statement[11].optionA"
                    v-bind:optionB="statement[11].optionB"
                    v-bind:optionC="statement[11].optionC"
                    v-bind:optionD="statement[11].optionD"
                  />

                  <div v-if="question_g === 'ke1'">
                    <StatementText
                      :text="textData[3].textAppForm"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppFormA"
                      :noteB="textData[3].noteAppFormB"
                      :noteC="textData[3].noteAppFormC"
                      class="mb-5"
                    />

                    <StatementText
                      :text="statement[12].questionAppForm"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppFormA"
                      :noteB="statement[12].noteAppFormB"
                      :noteC="statement[12].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_h"
                      v-bind:label="statement[12].label"
                    />

                    <StatementText
                      :text="statement[13].questionAppForm"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppFormA"
                      :noteB="statement[13].noteAppFormB"
                      :noteC="statement[13].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_i"
                      v-bind:label="statement[13].label"
                    />

                    <StatementText
                      :text="statement[14].questionAppForm"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppFormA"
                      :noteB="statement[14].noteAppFormB"
                      :noteC="statement[14].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_j"
                      v-bind:label="statement[14].label"
                    />

                    <StatementText
                      :text="statement[15].questionAppForm"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppFormA"
                      :noteB="statement[15].noteAppFormB"
                      :noteC="statement[15].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[15].label"
                    />

                    <StatementText
                      :text="statement[16].questionAppForm"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppFormA"
                      :noteB="statement[16].noteAppFormB"
                      :noteC="statement[16].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_l"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[16].nrOptions"
                      v-bind:optionA="statement[16].optionA"
                      v-bind:optionB="statement[16].optionB"
                      v-bind:optionC="statement[16].optionC"
                      v-bind:optionD="statement[16].optionD"
                    />
                  </div>
                  <div v-if="question_l === 'ke1' && question_g === 'ke1'">
                    <StatementText
                      :text="statement[17].questionAppForm"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppFormA"
                      :noteB="statement[17].noteAppFormB"
                      :noteC="statement[17].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_m"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />
                  </div>
                  <div v-if="question_g === 'ke1' && question_m === 'ke1'">
                    <StatementText
                      :text="statement[18].questionAppForm"
                      :note="statement[18].commentApp"
                      :nr-notes="statement[18].nrNotes"
                      :noteA="statement[18].noteAppFormA"
                      :noteB="statement[18].noteAppFormB"
                      :noteC="statement[18].noteAppFormC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_n"
                      v-bind:label="statement[18].label"
                    />
                  </div>
                  <div v-if="question_l === 'ke1' && question_g === 'ke1'">
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
                      v-model="question_o"
                      v-bind:label="statement[19].label"
                    />
                  </div>
                  <div v-if="question_g === 'ke1'">
                    <custom-divider />
                    <h3 class="primary--text mb-5">
                      Tweede strategische partner
                    </h3>

                    <StatementText
                      :text="statement[20].questionAppForm"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppFormA"
                      :noteB="statement[20].noteAppFormB"
                      :noteC="statement[20].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[20].nrOptions"
                      v-bind:optionA="statement[20].optionA"
                      v-bind:optionB="statement[20].optionB"
                      v-bind:optionC="statement[20].optionC"
                      v-bind:optionD="statement[20].optionD"
                    />
                  </div>

                  <div v-if="question_g === 'ke1' && question_p === 'ke1'">
                    <StatementText
                      :text="textData[4].textAppForm"
                      :note="textData[4].commentApp"
                      :nr-notes="textData[4].nrNotes"
                      :noteA="textData[4].noteAppFormA"
                      :noteB="textData[4].noteAppFormB"
                      :noteC="textData[4].noteAppFormC"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_q"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_r"
                      v-bind:label="statement[22].label"
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
                      :text="statement[25].questionAppForm"
                      :note="statement[25].commentApp"
                      :nr-notes="statement[25].nrNotes"
                      :noteA="statement[25].noteAppFormA"
                      :noteB="statement[25].noteAppFormB"
                      :noteC="statement[25].noteAppFormC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_u"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[25].nrOptions"
                      v-bind:optionA="statement[25].optionA"
                      v-bind:optionB="statement[25].optionB"
                      v-bind:optionC="statement[25].optionC"
                      v-bind:optionD="statement[25].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_u === 'ke1' &&
                      question_g === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[26].nrOptions"
                      v-bind:optionA="statement[26].optionA"
                      v-bind:optionB="statement[26].optionB"
                      v-bind:optionC="statement[26].optionC"
                      v-bind:optionD="statement[26].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_g === 'ke1' &&
                      question_v === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_w"
                      v-bind:label="statement[27].label"
                    />
                  </div>
                  <div
                    v-if="
                      question_u === 'ke1' &&
                      question_g === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_x"
                      v-bind:label="statement[28].label"
                    />
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[11].questionAppInform"
                    :note="statement[11].commentApp"
                    :nr-notes="statement[11].nrNotes"
                    :noteA="statement[11].noteAppInfA"
                    :noteB="statement[11].noteAppInfB"
                    :noteC="statement[11].noteAppInfC"
                    class="mb-5"
                  />

                  <base-radio
                    v-model="question_g"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[11].nrOptions"
                    v-bind:optionA="statement[11].optionA"
                    v-bind:optionB="statement[11].optionB"
                    v-bind:optionC="statement[11].optionC"
                    v-bind:optionD="statement[11].optionD"
                  />

                  <div v-if="question_g === 'ke1'">
                    <StatementText
                      :text="textData[3].textAppInform"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppInfA"
                      :noteB="textData[3].noteAppInfB"
                      :noteC="textData[3].noteAppInfC"
                      class="mb-5"
                    />

                    <StatementText
                      :text="statement[12].questionAppInform"
                      :note="statement[12].commentApp"
                      :nr-notes="statement[12].nrNotes"
                      :noteA="statement[12].noteAppInfA"
                      :noteB="statement[12].noteAppInfB"
                      :noteC="statement[12].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_h"
                      v-bind:label="statement[12].label"
                    />

                    <StatementText
                      :text="statement[13].questionAppInform"
                      :note="statement[13].commentApp"
                      :nr-notes="statement[13].nrNotes"
                      :noteA="statement[13].noteAppInfA"
                      :noteB="statement[13].noteAppInfB"
                      :noteC="statement[13].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_i"
                      v-bind:label="statement[13].label"
                    />

                    <StatementText
                      :text="statement[14].questionAppInform"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppInfA"
                      :noteB="statement[14].noteAppInfB"
                      :noteC="statement[14].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_j"
                      v-bind:label="statement[14].label"
                    />

                    <StatementText
                      :text="statement[15].questionAppInform"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppInfA"
                      :noteB="statement[15].noteAppInfB"
                      :noteC="statement[15].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_k"
                      v-bind:label="statement[15].label"
                    />

                    <StatementText
                      :text="statement[16].questionAppInform"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppInfA"
                      :noteB="statement[16].noteAppInfB"
                      :noteC="statement[16].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_l"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[16].nrOptions"
                      v-bind:optionA="statement[16].optionA"
                      v-bind:optionB="statement[16].optionB"
                      v-bind:optionC="statement[16].optionC"
                      v-bind:optionD="statement[16].optionD"
                    />
                  </div>
                  <div v-if="question_l === 'ke1' && question_g === 'ke1'">
                    <StatementText
                      :text="statement[17].questionAppInform"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppInfA"
                      :noteB="statement[17].noteAppInfB"
                      :noteC="statement[17].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_m"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />
                  </div>
                  <div v-if="question_g === 'ke1' && question_m === 'ke1'">
                    <StatementText
                      :text="statement[18].questionAppInform"
                      :note="statement[18].commentApp"
                      :nr-notes="statement[18].nrNotes"
                      :noteA="statement[18].noteAppInfA"
                      :noteB="statement[18].noteAppInfB"
                      :noteC="statement[18].noteAppInfC"
                      class="mb-5"
                    />

                    <BaseValInput
                      rules="max:150"
                      v-model="question_n"
                      v-bind:label="statement[18].label"
                    />
                  </div>
                  <div v-if="question_l === 'ke1' && question_g === 'ke1'">
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
                      v-model="question_o"
                      v-bind:label="statement[19].label"
                    />
                  </div>
                  <div v-if="question_g === 'ke1'">
                    <custom-divider />
                    <h3 class="primary--text mb-5">
                      Tweede strategische partner
                    </h3>

                    <StatementText
                      :text="statement[20].questionAppInform"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppInfA"
                      :noteB="statement[20].noteAppInfB"
                      :noteC="statement[20].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_p"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[20].nrOptions"
                      v-bind:optionA="statement[20].optionA"
                      v-bind:optionB="statement[20].optionB"
                      v-bind:optionC="statement[20].optionC"
                      v-bind:optionD="statement[20].optionD"
                    />
                  </div>

                  <div v-if="question_g === 'ke1' && question_p === 'ke1'">
                    <StatementText
                      :text="textData[4].textAppInform"
                      :note="textData[4].commentApp"
                      :nr-notes="textData[4].nrNotes"
                      :noteA="textData[4].noteAppInfA"
                      :noteB="textData[4].noteAppInfB"
                      :noteC="textData[4].noteAppInfC"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_q"
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

                    <BaseValInput
                      rules="max:150"
                      v-model="question_r"
                      v-bind:label="statement[22].label"
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
                      :text="statement[25].questionAppInform"
                      :note="statement[25].commentApp"
                      :nr-notes="statement[25].nrNotes"
                      :noteA="statement[25].noteAppInfA"
                      :noteB="statement[25].noteAppInfB"
                      :noteC="statement[25].noteAppInfC"
                      class="mb-5"
                    />

                    <base-radio
                      v-model="question_u"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[25].nrOptions"
                      v-bind:optionA="statement[25].optionA"
                      v-bind:optionB="statement[25].optionB"
                      v-bind:optionC="statement[25].optionC"
                      v-bind:optionD="statement[25].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_u === 'ke1' &&
                      question_g === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[26].nrOptions"
                      v-bind:optionA="statement[26].optionA"
                      v-bind:optionB="statement[26].optionB"
                      v-bind:optionC="statement[26].optionC"
                      v-bind:optionD="statement[26].optionD"
                    />
                  </div>
                  <div
                    v-if="
                      question_g === 'ke1' &&
                      question_v === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_w"
                      v-bind:label="statement[27].label"
                    />
                  </div>
                  <div
                    v-if="
                      question_u === 'ke1' &&
                      question_g === 'ke1' &&
                      question_p === 'ke1'
                    "
                  >
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
                      v-model="question_x"
                      v-bind:label="statement[28].label"
                    />
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
              :stepText="textAppRight[5].header"
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
import textAppLeft from "@/text/moduleH/textAppLeftH.json";
import textAppRight from "@/text/moduleH/textAppRightH.json";
import Questions from "@/text/moduleH/moduleH.json";
import ExtraText from "@/text/moduleH/textH.json";
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
      question_g: "",
      question_h: "",
      question_i: "",
      question_j: "",
      question_k: "",
      question_l: "",
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
      question_x: "",
      finishModHpartC: true,
      finishModH: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-h-step-b" });
    },
    saveItem() {
      console.log("next Step works");
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_g: this.question_g,
        question_h: this.question_h,
        question_i: this.question_i,
        question_j: this.question_j,
        question_k: this.question_k,
        question_l: this.question_l,
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
        question_x: this.question_x,
        finishModH: this.finishModH,
        finishModHpartC: this.finishModHpartC,
      };
      resultService
        .saveDataH(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-h-end" });
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
    this.question_g = this.planSingle.h_bv.question_g;
    this.question_h = this.planSingle.h_bv.question_h;
    this.question_i = this.planSingle.h_bv.question_i;
    this.question_j = this.planSingle.h_bv.question_j;
    this.question_k = this.planSingle.h_bv.question_k;
    this.question_l = this.planSingle.h_bv.question_l;
    this.question_m = this.planSingle.h_bv.question_m;
    this.question_n = this.planSingle.h_bv.question_n;
    this.question_o = this.planSingle.h_bv.question_o;
    this.question_p = this.planSingle.h_bv.question_p;
    this.question_q = this.planSingle.h_bv.question_q;
    this.question_r = this.planSingle.h_bv.question_r;
    this.question_s = this.planSingle.h_bv.question_s;
    this.question_t = this.planSingle.h_bv.question_t;
    this.question_u = this.planSingle.h_bv.question_u;
    this.question_v = this.planSingle.h_bv.question_v;
    this.question_w = this.planSingle.h_bv.question_w;
    this.question_x = this.planSingle.h_bv.question_x;
  },
};
</script>
