<template>
  <div>
    <ToolbarAuth :name="'Rol van de ondernemer'" />
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
                :head-text="textAppLeft[5].header"
                :text-a="textAppLeft[5].texta"
                :text-b="textAppLeft[5].textb"
                :text-c="textAppLeft[5].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[5].headerInf"
                :text-a="textAppLeft[5].textaInf"
                :text-b="textAppLeft[5].textbInf"
                :text-c="textAppLeft[5].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[5].header"
              :number="5"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <!-- formal-->
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

                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[16].nrOptions"
                    v-bind:optionA="statement[16].optionA"
                    v-bind:optionB="statement[16].optionB"
                    v-bind:optionC="statement[16].optionC"
                    v-bind:optionD="statement[16].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_m === 'ke1'">
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
                      v-model="question_n"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />

                    <div v-if="question_n === 'ke1'">
                      <StatementText
                        :text="textData[2].textAppForm"
                        :note="textData[2].commentApp"
                        :nr-notes="textData[2].nrNotes"
                        :noteA="textData[2].noteAppFormA"
                        :noteB="textData[2].noteAppFormB"
                        :noteC="textData[2].noteAppFormC"
                        class="mb-5"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[18].label"
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
                      <base-radio
                        v-model="question_o"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[19].nrOptions"
                        v-bind:optionA="statement[19].optionA"
                        v-bind:optionB="statement[19].optionB"
                        v-bind:optionC="statement[19].optionC"
                        v-bind:optionD="statement[19].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
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
                    <div v-if="question_p === 'ke1'">
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
                        v-model="text_e"
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
                        v-model="question_q"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[22].nrOptions"
                        v-bind:optionA="statement[22].optionA"
                        v-bind:optionB="statement[22].optionB"
                        v-bind:optionC="statement[22].optionC"
                        v-bind:optionD="statement[22].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[23].questionAppForm"
                      :note="statement[23].commentApp"
                      :nr-notes="statement[23].nrNotes"
                      :noteA="statement[23].noteAppFormA"
                      :noteB="statement[23].noteAppFormB"
                      :noteC="statement[23].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_r"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[23].nrOptions"
                      v-bind:optionA="statement[23].optionA"
                      v-bind:optionB="statement[23].optionB"
                      v-bind:optionC="statement[23].optionC"
                      v-bind:optionD="statement[23].optionD"
                    />
                    <div v-if="question_r === 'ke1'">
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
                        :text="statement[24].questionAppForm"
                        :note="statement[24].commentApp"
                        :nr-notes="statement[24].nrNotes"
                        :noteA="statement[24].noteAppFormA"
                        :noteB="statement[24].noteAppFormB"
                        :noteC="statement[24].noteAppFormC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_f"
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
                        v-model="question_s"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[25].nrOptions"
                        v-bind:optionA="statement[25].optionA"
                        v-bind:optionB="statement[25].optionB"
                        v-bind:optionC="statement[25].optionC"
                        v-bind:optionD="statement[25].optionD"
                        class="mb-5"
                      />
                    </div>
                    <custom-divider class="mb-5" />
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
                      v-model="question_t"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[26].nrOptions"
                      v-bind:optionA="statement[26].optionA"
                      v-bind:optionB="statement[26].optionB"
                      v-bind:optionC="statement[26].optionC"
                      v-bind:optionD="statement[26].optionD"
                    />
                    <div v-if="question_t === 'ke1'">
                      <StatementText
                        :text="textData[5].textAppForm"
                        :note="textData[5].commentApp"
                        :nr-notes="textData[5].nrNotes"
                        :noteA="textData[5].noteAppFormA"
                        :noteB="textData[5].noteAppFormB"
                        :noteC="textData[5].noteAppFormC"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_g"
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
                      <base-radio
                        v-model="question_u"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[28].nrOptions"
                        v-bind:optionA="statement[28].optionA"
                        v-bind:optionB="statement[28].optionB"
                        v-bind:optionC="statement[28].optionC"
                        v-bind:optionD="statement[28].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[29].questionAppForm"
                      :note="statement[29].commentApp"
                      :nr-notes="statement[29].nrNotes"
                      :noteA="statement[29].noteAppFormA"
                      :noteB="statement[29].noteAppFormB"
                      :noteC="statement[29].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[29].nrOptions"
                      v-bind:optionA="statement[29].optionA"
                      v-bind:optionB="statement[29].optionB"
                      v-bind:optionC="statement[29].optionC"
                      v-bind:optionD="statement[29].optionD"
                    />
                    <div v-if="question_v === 'ke1'">
                      <StatementText
                        :text="textData[6].textAppForm"
                        :note="textData[6].commentApp"
                        :nr-notes="textData[6].nrNotes"
                        :noteA="textData[6].noteAppFormA"
                        :noteB="textData[6].noteAppFormB"
                        :noteC="textData[6].noteAppFormC"
                        class="mb-5"
                      />
                      <StatementText
                        :text="statement[30].questionAppForm"
                        :note="statement[30].commentApp"
                        :nr-notes="statement[30].nrNotes"
                        :noteA="statement[30].noteAppFormA"
                        :noteB="statement[30].noteAppFormB"
                        :noteC="statement[30].noteAppFormC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_h"
                        v-bind:label="statement[30].label"
                      />
                      <StatementText
                        :text="statement[31].questionAppForm"
                        :note="statement[31].commentApp"
                        :nr-notes="statement[31].nrNotes"
                        :noteA="statement[31].noteAppFormA"
                        :noteB="statement[31].noteAppFormB"
                        :noteC="statement[31].noteAppFormC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_w"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[31].nrOptions"
                        v-bind:optionA="statement[31].optionA"
                        v-bind:optionB="statement[31].optionB"
                        v-bind:optionC="statement[31].optionC"
                        v-bind:optionD="statement[31].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[32].questionAppForm"
                      :note="statement[32].commentApp"
                      :nr-notes="statement[32].nrNotes"
                      :noteA="statement[32].noteAppFormA"
                      :noteB="statement[32].noteAppFormB"
                      :noteC="statement[32].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[32].nrOptions"
                      v-bind:optionA="statement[32].optionA"
                      v-bind:optionB="statement[32].optionB"
                      v-bind:optionC="statement[32].optionC"
                      v-bind:optionD="statement[32].optionD"
                    />
                    <div v-if="question_x === 'ke1'">
                      <StatementText
                        :text="textData[7].textAppForm"
                        :note="textData[7].commentApp"
                        :nr-notes="textData[7].nrNotes"
                        :noteA="textData[7].noteAppFormA"
                        :noteB="textData[7].noteAppFormB"
                        :noteC="textData[7].noteAppFormC"
                        class="mb-5"
                      />
                      <StatementText
                        :text="statement[33].questionAppForm"
                        :note="statement[33].commentApp"
                        :nr-notes="statement[33].nrNotes"
                        :noteA="statement[33].noteAppFormA"
                        :noteB="statement[33].noteAppFormB"
                        :noteC="statement[33].noteAppFormC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_i"
                        v-bind:label="statement[33].label"
                      />
                      <StatementText
                        :text="statement[34].questionAppForm"
                        :note="statement[34].commentApp"
                        :nr-notes="statement[34].nrNotes"
                        :noteA="statement[34].noteAppFormA"
                        :noteB="statement[34].noteAppFormB"
                        :noteC="statement[34].noteAppFormC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_y"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[34].nrOptions"
                        v-bind:optionA="statement[34].optionA"
                        v-bind:optionB="statement[34].optionB"
                        v-bind:optionC="statement[34].optionC"
                        v-bind:optionD="statement[34].optionD"
                      />
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

                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[16].nrOptions"
                    v-bind:optionA="statement[16].optionA"
                    v-bind:optionB="statement[16].optionB"
                    v-bind:optionC="statement[16].optionC"
                    v-bind:optionD="statement[16].optionD"
                    class="mb-5"
                  />

                  <div v-if="question_m === 'ke1'">
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
                      v-model="question_n"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />

                    <div v-if="question_n === 'ke1'">
                      <StatementText
                        :text="textData[2].textAppInform"
                        :note="textData[2].commentApp"
                        :nr-notes="textData[2].nrNotes"
                        :noteA="textData[2].noteAppInfA"
                        :noteB="textData[2].noteAppInfB"
                        :noteC="textData[2].noteAppInfC"
                        class="mb-5"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[18].label"
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
                      <base-radio
                        v-model="question_o"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[19].nrOptions"
                        v-bind:optionA="statement[19].optionA"
                        v-bind:optionB="statement[19].optionB"
                        v-bind:optionC="statement[19].optionC"
                        v-bind:optionD="statement[19].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
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
                    <div v-if="question_p === 'ke1'">
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
                        v-model="text_e"
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
                        v-model="question_q"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[22].nrOptions"
                        v-bind:optionA="statement[22].optionA"
                        v-bind:optionB="statement[22].optionB"
                        v-bind:optionC="statement[22].optionC"
                        v-bind:optionD="statement[22].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[23].questionAppInform"
                      :note="statement[23].commentApp"
                      :nr-notes="statement[23].nrNotes"
                      :noteA="statement[23].noteAppInfA"
                      :noteB="statement[23].noteAppInfB"
                      :noteC="statement[23].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_r"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[23].nrOptions"
                      v-bind:optionA="statement[23].optionA"
                      v-bind:optionB="statement[23].optionB"
                      v-bind:optionC="statement[23].optionC"
                      v-bind:optionD="statement[23].optionD"
                    />
                    <div v-if="question_r === 'ke1'">
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
                        :text="statement[24].questionAppInform"
                        :note="statement[24].commentApp"
                        :nr-notes="statement[24].nrNotes"
                        :noteA="statement[24].noteAppInfA"
                        :noteB="statement[24].noteAppInfB"
                        :noteC="statement[24].noteAppInfC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_f"
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
                        v-model="question_s"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[25].nrOptions"
                        v-bind:optionA="statement[25].optionA"
                        v-bind:optionB="statement[25].optionB"
                        v-bind:optionC="statement[25].optionC"
                        v-bind:optionD="statement[25].optionD"
                        class="mb-5"
                      />
                    </div>
                    <custom-divider class="mb-5" />
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
                      v-model="question_t"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[26].nrOptions"
                      v-bind:optionA="statement[26].optionA"
                      v-bind:optionB="statement[26].optionB"
                      v-bind:optionC="statement[26].optionC"
                      v-bind:optionD="statement[26].optionD"
                    />
                    <div v-if="question_t === 'ke1'">
                      <StatementText
                        :text="textData[5].textAppInform"
                        :note="textData[5].commentApp"
                        :nr-notes="textData[5].nrNotes"
                        :noteA="textData[5].noteAppInfA"
                        :noteB="textData[5].noteAppInfB"
                        :noteC="textData[5].noteAppInfC"
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
                      <base-val-area
                        rules="max:500"
                        v-model="text_g"
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
                      <base-radio
                        v-model="question_u"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[28].nrOptions"
                        v-bind:optionA="statement[28].optionA"
                        v-bind:optionB="statement[28].optionB"
                        v-bind:optionC="statement[28].optionC"
                        v-bind:optionD="statement[28].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[29].questionAppInform"
                      :note="statement[29].commentApp"
                      :nr-notes="statement[29].nrNotes"
                      :noteA="statement[29].noteAppInfA"
                      :noteB="statement[29].noteAppInfB"
                      :noteC="statement[29].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[29].nrOptions"
                      v-bind:optionA="statement[29].optionA"
                      v-bind:optionB="statement[29].optionB"
                      v-bind:optionC="statement[29].optionC"
                      v-bind:optionD="statement[29].optionD"
                    />
                    <div v-if="question_v === 'ke1'">
                      <StatementText
                        :text="textData[6].textAppInform"
                        :note="textData[6].commentApp"
                        :nr-notes="textData[6].nrNotes"
                        :noteA="textData[6].noteAppInfA"
                        :noteB="textData[6].noteAppInfB"
                        :noteC="textData[6].noteAppInfC"
                        class="mb-5"
                      />
                      <StatementText
                        :text="statement[30].questionAppInform"
                        :note="statement[30].commentApp"
                        :nr-notes="statement[30].nrNotes"
                        :noteA="statement[30].noteAppInfA"
                        :noteB="statement[30].noteAppInfB"
                        :noteC="statement[30].noteAppInfC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_h"
                        v-bind:label="statement[30].label"
                      />
                      <StatementText
                        :text="statement[31].questionAppInform"
                        :note="statement[31].commentApp"
                        :nr-notes="statement[31].nrNotes"
                        :noteA="statement[31].noteAppInfA"
                        :noteB="statement[31].noteAppInfB"
                        :noteC="statement[31].noteAppInfC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_w"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[31].nrOptions"
                        v-bind:optionA="statement[31].optionA"
                        v-bind:optionB="statement[31].optionB"
                        v-bind:optionC="statement[31].optionC"
                        v-bind:optionD="statement[31].optionD"
                      />
                    </div>
                    <custom-divider class="mb-5" />
                    <StatementText
                      :text="statement[32].questionAppInform"
                      :note="statement[32].commentApp"
                      :nr-notes="statement[32].nrNotes"
                      :noteA="statement[32].noteAppInfA"
                      :noteB="statement[32].noteAppInfB"
                      :noteC="statement[32].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[32].nrOptions"
                      v-bind:optionA="statement[32].optionA"
                      v-bind:optionB="statement[32].optionB"
                      v-bind:optionC="statement[32].optionC"
                      v-bind:optionD="statement[32].optionD"
                    />
                    <div v-if="question_x === 'ke1'">
                      <StatementText
                        :text="textData[7].textAppInform"
                        :note="textData[7].commentApp"
                        :nr-notes="textData[7].nrNotes"
                        :noteA="textData[7].noteAppInfA"
                        :noteB="textData[7].noteAppInfB"
                        :noteC="textData[7].noteAppInfC"
                        class="mb-5"
                      />
                      <StatementText
                        :text="statement[33].questionAppInform"
                        :note="statement[33].commentApp"
                        :nr-notes="statement[33].nrNotes"
                        :noteA="statement[33].noteAppInfA"
                        :noteB="statement[33].noteAppInfB"
                        :noteC="statement[33].noteAppInfC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_i"
                        v-bind:label="statement[33].label"
                      />
                      <StatementText
                        :text="statement[34].questionAppInform"
                        :note="statement[34].commentApp"
                        :nr-notes="statement[34].nrNotes"
                        :noteA="statement[34].noteAppInfA"
                        :noteB="statement[34].noteAppInfB"
                        :noteC="statement[34].noteAppInfC"
                        class="mb-5"
                      />
                      <base-radio
                        v-model="question_y"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[34].nrOptions"
                        v-bind:optionA="statement[34].optionA"
                        v-bind:optionB="statement[34].optionB"
                        v-bind:optionC="statement[34].optionC"
                        v-bind:optionD="statement[34].optionD"
                      />
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
              :stepText="textAppRight[6].header"
              :number="6"
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
import textAppLeft from "@/text/moduleJ/textAppLeftJ.json";
import textAppRight from "@/text/moduleJ/textAppRightJ.json";
import Questions from "@/text/moduleJ/moduleJ.json";
import ExtraText from "@/text/moduleJ/textJ.json";
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
      question_x: "",
      question_y: "",
      text_d: "",
      text_e: "",
      text_f: "",
      text_g: "",
      text_h: "",
      text_i: "",
      finishModJ: true,
      finishModJpartA: true,
      finishModJpartB: true,
      finishModJpartC: true,
      finishModJpartD: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-j-step-c" });
    },
    saveItem() {
      console.log("next Step works");
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
        question_x: this.question_x,
        question_y: this.question_y,
        text_d: this.text_d,
        text_e: this.text_e,
        text_f: this.text_f,
        text_g: this.text_g,
        text_h: this.text_h,
        text_i: this.text_i,
        finishModJpartA: this.finishModJpartA,
        finishModJpartB: this.finishModJpartB,
        finishModJpartC: this.finishModJpartC,
        finishModJpartD: this.finishModJpartD,
        finishModJ: this.finishModJ,
      };
      resultService
        .saveDataJ(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-j-end" });
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
    this.question_m = this.planSingle.j_bv.question_m;
    this.question_n = this.planSingle.j_bv.question_n;
    this.question_o = this.planSingle.j_bv.question_o;
    this.question_p = this.planSingle.j_bv.question_p;
    this.question_q = this.planSingle.j_bv.question_q;
    this.question_r = this.planSingle.j_bv.question_r;
    this.question_s = this.planSingle.j_bv.question_s;
    this.question_t = this.planSingle.j_bv.question_t;
    this.question_u = this.planSingle.j_bv.question_u;
    this.question_v = this.planSingle.j_bv.question_v;
    this.question_w = this.planSingle.j_bv.question_w;
    this.question_x = this.planSingle.j_bv.question_x;
    this.question_y = this.planSingle.j_bv.question_y;
    this.text_d = this.planSingle.j_bv.text_d;
    this.text_e = this.planSingle.j_bv.text_e;
    this.text_f = this.planSingle.j_bv.text_f;
    this.text_g = this.planSingle.j_bv.text_g;
    this.text_h = this.planSingle.j_bv.text_h;
    this.text_i = this.planSingle.j_bv.text_i;
    this.finishModJ = this.planSingle.finishModJ;
    this.finishModJpartA = this.planSingle.finishModJpartA;
    this.finishModJpartB = this.planSingle.finishModJpartB;
    this.finishModJpartC = this.planSingle.finishModJpartC;
    this.finishModJpartD = this.planSingle.finishModJpartD;
  },
};
</script>
