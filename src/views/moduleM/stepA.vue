<template>
  <div>
    <ToolbarAuth :name="'Klanten'" />
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
                :head-text="textAppLeft[2].header"
                :text-a="textAppLeft[2].texta"
                :text-b="textAppLeft[2].textb"
                :text-c="textAppLeft[2].textc"
              />
            </div>
            <div v-if="!formal">
              <text-left
                :head-text="textAppLeft[2].headerInf"
                :text-a="textAppLeft[2].textaInf"
                :text-b="textAppLeft[2].textbInf"
                :text-c="textAppLeft[2].textcInf"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="rightPanel justify-center">
          <div class="ma-10">
            <step-text
              :stepText="textAppRight[2].header"
              :number="2"
              class="mb-5"
              :active="true"
            />
            <ValidationObserver ref="obs" v-slot="{ invalid, validate }">
              <v-form ref="form">
                <div v-if="formal">
                  <StatementText
                    :text="statement[1].questionAppForm"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppFormA"
                    :noteB="statement[1].noteAppFormB"
                    :noteC="statement[1].noteAppFormC"
                    class="mb-5"
                  />
                  <base-radio
                    v-model="question_a"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[1].nrOptions"
                    v-bind:optionA="statement[1].optionA"
                    v-bind:optionB="statement[1].optionB"
                    v-bind:optionC="statement[1].optionC"
                    v-bind:optionD="statement[1].optionD"
                  />
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="textData[1].textAppForm"
                      :note="textData[1].commentApp"
                      :nr-notes="textData[1].nrNotes"
                      :noteA="textData[1].noteAppFormA"
                      :noteB="textData[1].noteAppFormB"
                      :noteC="textData[1].noteAppFormC"
                      class="mb-5"
                    />
                    <StatementText
                      :text="statement[2].questionAppForm"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppFormA"
                      :noteB="statement[2].noteAppFormB"
                      :noteC="statement[2].noteAppFormC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_b"
                      v-bind:label="statement[2].label"
                    />
                    <StatementText
                      :text="statement[3].questionAppForm"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppFormA"
                      :noteB="statement[3].noteAppFormB"
                      :noteC="statement[3].noteAppFormC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_c"
                      v-bind:label="statement[3].label"
                    />
                    <StatementText
                      :text="statement[4].questionAppForm"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppFormA"
                      :noteB="statement[4].noteAppFormB"
                      :noteC="statement[4].noteAppFormC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[4].label"
                    />
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
                      :text="statement[5].questionAppForm"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppFormA"
                      :noteB="statement[5].noteAppFormB"
                      :noteC="statement[5].noteAppFormC"
                      class="mb-5"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[5].label"
                    />
                    <StatementText
                      :text="statement[6].questionAppForm"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppFormA"
                      :noteB="statement[6].noteAppFormB"
                      :noteC="statement[6].noteAppFormC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                    <div v-if="question_e === 'ke1'">
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
                        :text="statement[7].questionAppForm"
                        :note="statement[7].commentApp"
                        :nr-notes="statement[7].nrNotes"
                        :noteA="statement[7].noteAppFormA"
                        :noteB="statement[7].noteAppFormB"
                        :noteC="statement[7].noteAppFormC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_f"
                        v-bind:label="statement[7].label"
                      />
                      <StatementText
                        :text="statement[8].questionAppForm"
                        :note="statement[8].commentApp"
                        :nr-notes="statement[8].nrNotes"
                        :noteA="statement[8].noteAppFormA"
                        :noteB="statement[8].noteAppFormB"
                        :noteC="statement[8].noteAppFormC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_g"
                        v-bind:label="statement[8].label"
                      />
                      <StatementText
                        :text="statement[9].questionAppForm"
                        :note="statement[9].commentApp"
                        :nr-notes="statement[9].nrNotes"
                        :noteA="statement[9].noteAppFormA"
                        :noteB="statement[9].noteAppFormB"
                        :noteC="statement[9].noteAppFormC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_h"
                        v-bind:label="statement[9].label"
                      />
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
                        :text="statement[10].questionAppForm"
                        :note="statement[10].commentApp"
                        :nr-notes="statement[10].nrNotes"
                        :noteA="statement[10].noteAppFormA"
                        :noteB="statement[10].noteAppFormB"
                        :noteC="statement[10].noteAppFormC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="statement[10].label"
                      />
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
                        v-model="question_i"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[11].nrOptions"
                        v-bind:optionA="statement[11].optionA"
                        v-bind:optionB="statement[11].optionB"
                        v-bind:optionC="statement[11].optionC"
                        v-bind:optionD="statement[11].optionD"
                      />
                      <div v-if="question_i === 'ke1'">
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
                          v-model="question_j"
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
                          v-model="question_k"
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
                          v-model="question_l"
                          v-bind:label="statement[14].label"
                        />
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
                          :text="statement[15].questionAppForm"
                          :note="statement[15].commentApp"
                          :nr-notes="statement[15].nrNotes"
                          :noteA="statement[15].noteAppFormA"
                          :noteB="statement[15].noteAppFormB"
                          :noteC="statement[15].noteAppFormC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_c"
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
                          v-model="question_m"
                          :error-messages="errors"
                          rules="required"
                          v-bind:nrOptions="statement[16].nrOptions"
                          v-bind:optionA="statement[16].optionA"
                          v-bind:optionB="statement[16].optionB"
                          v-bind:optionC="statement[16].optionC"
                          v-bind:optionD="statement[16].optionD"
                        />
                        <div v-if="question_m === 'ke1'">
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
                            :text="statement[17].questionAppForm"
                            :note="statement[17].commentApp"
                            :nr-notes="statement[17].nrNotes"
                            :noteA="statement[17].noteAppFormA"
                            :noteB="statement[17].noteAppFormB"
                            :noteC="statement[17].noteAppFormC"
                            class="mb-5"
                          />
                          <BaseValInput
                            rules="max:150"
                            v-model="question_n"
                            v-bind:label="statement[17].label"
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
                          <BaseValInput
                            rules="max:150"
                            v-model="question_o"
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
                          <BaseValInput
                            rules="max:150"
                            v-model="question_p"
                            v-bind:label="statement[19].label"
                          />
                          <StatementText
                            :text="textData[8].textAppForm"
                            :note="textData[8].commentApp"
                            :nr-notes="textData[8].nrNotes"
                            :noteA="textData[8].noteAppFormA"
                            :noteB="textData[8].noteAppFormB"
                            :noteC="textData[8].noteAppFormC"
                            class="mb-5"
                          />
                          <StatementText
                            :text="statement[20].questionAppForm"
                            :note="statement[20].commentApp"
                            :nr-notes="statement[20].nrNotes"
                            :noteA="statement[20].noteAppFormA"
                            :noteB="statement[20].noteAppFormB"
                            :noteC="statement[20].noteAppFormC"
                            class="mb-5"
                          />
                          <base-val-area
                            rules="max:500"
                            v-model="text_d"
                            v-bind:label="statement[20].label"
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
                          <base-radio
                            v-model="question_q"
                            :error-messages="errors"
                            rules="required"
                            v-bind:nrOptions="statement[21].nrOptions"
                            v-bind:optionA="statement[21].optionA"
                            v-bind:optionB="statement[21].optionB"
                            v-bind:optionC="statement[21].optionC"
                            v-bind:optionD="statement[21].optionD"
                          />
                          <div v-if="question_q === 'ke1'">
                            <StatementText
                              :text="textData[9].textAppForm"
                              :note="textData[9].commentApp"
                              :nr-notes="textData[9].nrNotes"
                              :noteA="textData[9].noteAppFormA"
                              :noteB="textData[9].noteAppFormB"
                              :noteC="textData[9].noteAppFormC"
                              class="mb-5"
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
                              :text="textData[10].textAppForm"
                              :note="textData[10].commentApp"
                              :nr-notes="textData[10].nrNotes"
                              :noteA="textData[10].noteAppFormA"
                              :noteB="textData[10].noteAppFormB"
                              :noteC="textData[10].noteAppFormC"
                              class="mb-5"
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
                            <base-val-area
                              rules="max:500"
                              v-model="text_e"
                              v-bind:label="statement[25].label"
                            />
                            <StatementText
                              :text="textData[11].textAppForm"
                              :note="textData[11].commentApp"
                              :nr-notes="textData[11].nrNotes"
                              :noteA="textData[11].noteAppFormA"
                              :noteB="textData[11].noteAppFormB"
                              :noteC="textData[11].noteAppFormC"
                              class="mb-5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[1].questionAppInform"
                    :note="statement[1].commentApp"
                    :nr-notes="statement[1].nrNotes"
                    :noteA="statement[1].noteAppInfA"
                    :noteB="statement[1].noteAppInfB"
                    :noteC="statement[1].noteAppInfC"
                    class="mb-5"
                  />
                  <base-radio
                    v-model="question_a"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[1].nrOptions"
                    v-bind:optionA="statement[1].optionA"
                    v-bind:optionB="statement[1].optionB"
                    v-bind:optionC="statement[1].optionC"
                    v-bind:optionD="statement[1].optionD"
                  />
                  <div v-if="question_a === 'ke1'">
                    <StatementText
                      :text="textData[1].textAppInform"
                      :note="textData[1].commentApp"
                      :nr-notes="textData[1].nrNotes"
                      :noteA="textData[1].noteAppInfA"
                      :noteB="textData[1].noteAppInfB"
                      :noteC="textData[1].noteAppInfC"
                      class="mb-5"
                    />
                    <StatementText
                      :text="statement[2].questionAppInform"
                      :note="statement[2].commentApp"
                      :nr-notes="statement[2].nrNotes"
                      :noteA="statement[2].noteAppInfA"
                      :noteB="statement[2].noteAppInfB"
                      :noteC="statement[2].noteAppInfC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_b"
                      v-bind:label="statement[2].label"
                    />
                    <StatementText
                      :text="statement[3].questionAppInform"
                      :note="statement[3].commentApp"
                      :nr-notes="statement[3].nrNotes"
                      :noteA="statement[3].noteAppInfA"
                      :noteB="statement[3].noteAppInfB"
                      :noteC="statement[3].noteAppInfC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_c"
                      v-bind:label="statement[3].label"
                    />
                    <StatementText
                      :text="statement[4].questionAppInform"
                      :note="statement[4].commentApp"
                      :nr-notes="statement[4].nrNotes"
                      :noteA="statement[4].noteAppInfA"
                      :noteB="statement[4].noteAppInfB"
                      :noteC="statement[4].noteAppInfC"
                      class="mb-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_d"
                      v-bind:label="statement[4].label"
                    />
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
                      :text="statement[5].questionAppInform"
                      :note="statement[5].commentApp"
                      :nr-notes="statement[5].nrNotes"
                      :noteA="statement[5].noteAppInfA"
                      :noteB="statement[5].noteAppInfB"
                      :noteC="statement[5].noteAppInfC"
                      class="mb-5"
                    />
                    <base-val-area
                      rules="max:500"
                      v-model="text_a"
                      v-bind:label="statement[5].label"
                    />
                    <StatementText
                      :text="statement[6].questionAppInform"
                      :note="statement[6].commentApp"
                      :nr-notes="statement[6].nrNotes"
                      :noteA="statement[6].noteAppInfA"
                      :noteB="statement[6].noteAppInfB"
                      :noteC="statement[6].noteAppInfC"
                      class="mb-5"
                    />
                    <base-radio
                      v-model="question_e"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[6].nrOptions"
                      v-bind:optionA="statement[6].optionA"
                      v-bind:optionB="statement[6].optionB"
                      v-bind:optionC="statement[6].optionC"
                      v-bind:optionD="statement[6].optionD"
                    />
                    <div v-if="question_e === 'ke1'">
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
                        :text="statement[7].questionAppInform"
                        :note="statement[7].commentApp"
                        :nr-notes="statement[7].nrNotes"
                        :noteA="statement[7].noteAppInfA"
                        :noteB="statement[7].noteAppInfB"
                        :noteC="statement[7].noteAppInfC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_f"
                        v-bind:label="statement[7].label"
                      />
                      <StatementText
                        :text="statement[8].questionAppInform"
                        :note="statement[8].commentApp"
                        :nr-notes="statement[8].nrNotes"
                        :noteA="statement[8].noteAppInfA"
                        :noteB="statement[8].noteAppInfB"
                        :noteC="statement[8].noteAppInfC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_g"
                        v-bind:label="statement[8].label"
                      />
                      <StatementText
                        :text="statement[9].questionAppInform"
                        :note="statement[9].commentApp"
                        :nr-notes="statement[9].nrNotes"
                        :noteA="statement[9].noteAppInfA"
                        :noteB="statement[9].noteAppInfB"
                        :noteC="statement[9].noteAppInfC"
                        class="mb-5"
                      />
                      <BaseValInput
                        rules="max:150"
                        v-model="question_h"
                        v-bind:label="statement[9].label"
                      />
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
                        :text="statement[10].questionAppInform"
                        :note="statement[10].commentApp"
                        :nr-notes="statement[10].nrNotes"
                        :noteA="statement[10].noteAppInfA"
                        :noteB="statement[10].noteAppInfB"
                        :noteC="statement[10].noteAppInfC"
                        class="mb-5"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="statement[10].label"
                      />
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
                        v-model="question_i"
                        :error-messages="errors"
                        rules="required"
                        v-bind:nrOptions="statement[11].nrOptions"
                        v-bind:optionA="statement[11].optionA"
                        v-bind:optionB="statement[11].optionB"
                        v-bind:optionC="statement[11].optionC"
                        v-bind:optionD="statement[11].optionD"
                      />
                      <div v-if="question_i === 'ke1'">
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
                          v-model="question_j"
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
                          v-model="question_k"
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
                          v-model="question_l"
                          v-bind:label="statement[14].label"
                        />
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
                          :text="statement[15].questionAppInform"
                          :note="statement[15].commentApp"
                          :nr-notes="statement[15].nrNotes"
                          :noteA="statement[15].noteAppInfA"
                          :noteB="statement[15].noteAppInfB"
                          :noteC="statement[15].noteAppInfC"
                          class="mb-5"
                        />
                        <base-val-area
                          rules="max:500"
                          v-model="text_c"
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
                          v-model="question_m"
                          :error-messages="errors"
                          rules="required"
                          v-bind:nrOptions="statement[16].nrOptions"
                          v-bind:optionA="statement[16].optionA"
                          v-bind:optionB="statement[16].optionB"
                          v-bind:optionC="statement[16].optionC"
                          v-bind:optionD="statement[16].optionD"
                        />
                        <div v-if="question_m === 'ke1'">
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
                            :text="statement[17].questionAppInform"
                            :note="statement[17].commentApp"
                            :nr-notes="statement[17].nrNotes"
                            :noteA="statement[17].noteAppInfA"
                            :noteB="statement[17].noteAppInfB"
                            :noteC="statement[17].noteAppInfC"
                            class="mb-5"
                          />
                          <BaseValInput
                            rules="max:150"
                            v-model="question_n"
                            v-bind:label="statement[17].label"
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
                          <BaseValInput
                            rules="max:150"
                            v-model="question_o"
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
                          <BaseValInput
                            rules="max:150"
                            v-model="question_p"
                            v-bind:label="statement[19].label"
                          />
                          <StatementText
                            :text="textData[8].textAppInform"
                            :note="textData[8].commentApp"
                            :nr-notes="textData[8].nrNotes"
                            :noteA="textData[8].noteAppInfA"
                            :noteB="textData[8].noteAppInfB"
                            :noteC="textData[8].noteAppInfC"
                            class="mb-5"
                          />
                          <StatementText
                            :text="statement[20].questionAppInform"
                            :note="statement[20].commentApp"
                            :nr-notes="statement[20].nrNotes"
                            :noteA="statement[20].noteAppInfA"
                            :noteB="statement[20].noteAppInfB"
                            :noteC="statement[20].noteAppInfC"
                            class="mb-5"
                          />
                          <base-val-area
                            rules="max:500"
                            v-model="text_d"
                            v-bind:label="statement[20].label"
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
                          <base-radio
                            v-model="question_q"
                            :error-messages="errors"
                            rules="required"
                            v-bind:nrOptions="statement[21].nrOptions"
                            v-bind:optionA="statement[21].optionA"
                            v-bind:optionB="statement[21].optionB"
                            v-bind:optionC="statement[21].optionC"
                            v-bind:optionD="statement[21].optionD"
                          />
                          <div v-if="question_q === 'ke1'">
                            <StatementText
                              :text="textData[9].textAppInform"
                              :note="textData[9].commentApp"
                              :nr-notes="textData[9].nrNotes"
                              :noteA="textData[9].noteAppInfA"
                              :noteB="textData[9].noteAppInfB"
                              :noteC="textData[9].noteAppInfC"
                              class="mb-5"
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
                              :text="textData[10].textAppInform"
                              :note="textData[10].commentApp"
                              :nr-notes="textData[10].nrNotes"
                              :noteA="textData[10].noteAppInfA"
                              :noteB="textData[10].noteAppInfB"
                              :noteC="textData[10].noteAppInfC"
                              class="mb-5"
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
                            <base-val-area
                              rules="max:500"
                              v-model="text_e"
                              v-bind:label="statement[25].label"
                            />
                            <StatementText
                              :text="textData[11].textAppInform"
                              :note="textData[11].commentApp"
                              :nr-notes="textData[11].nrNotes"
                              :noteA="textData[11].noteAppInfA"
                              :noteB="textData[11].noteAppInfB"
                              :noteC="textData[11].noteAppInfC"
                              class="mb-5"
                            />
                          </div>
                        </div>
                      </div>
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
              :stepText="textAppRight[3].header"
              :number="3"
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
import textAppLeft from "@/text/moduleM/textAppLeftM.json";
import textAppRight from "@/text/moduleM/textAppRightM.json";
import Questions from "@/text/moduleM/moduleM.json";
import ExtraText from "@/text/moduleM/textM.json";
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
      question_a: "",
      question_b: "",
      question_c: "",
      question_d: "",
      question_e: "",
      question_f: "",
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
      text_a: "",
      text_b: "",
      text_c: "",
      text_d: "",
      text_e: "",
      finishModMpartA: true,
      finishModMpartB: false,
      finishModMpartC: false,
      finishModMpartD: false,
      finishModM: false,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-m-start" });
    },
    saveItem() {
      this.finishModMpartA = true;
      this.finishModM = true;
      this.saving = true;
      const clientId = JSON.parse(localStorage.getItem("pass_token"));
      const payload = {
        question_a: this.question_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
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
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
        text_e: this.text_e,
        finishModMpartA: this.finishModMpartA,
        finishModMpartB: this.finishModMpartB,
        finishModMpartC: this.finishModMpartC,
        finishModMpartD: this.finishModMpartD,
        finishModM: this.finishModM,
      };
      resultService
        .saveDataM(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-m-end" });
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
    this.question_a = this.planSingle.m_bv.question_a;
    this.question_b = this.planSingle.m_bv.question_b;
    this.question_c = this.planSingle.m_bv.question_c;
    this.question_d = this.planSingle.m_bv.question_d;
    this.question_e = this.planSingle.m_bv.question_e;
    this.question_f = this.planSingle.m_bv.question_f;
    this.question_g = this.planSingle.m_bv.question_g;
    this.question_h = this.planSingle.m_bv.question_h;
    this.question_i = this.planSingle.m_bv.question_i;
    this.question_j = this.planSingle.m_bv.question_j;
    this.question_k = this.planSingle.m_bv.question_k;
    this.question_l = this.planSingle.m_bv.question_l;
    this.question_m = this.planSingle.m_bv.question_m;
    this.question_n = this.planSingle.m_bv.question_n;
    this.question_o = this.planSingle.m_bv.question_o;
    this.question_p = this.planSingle.m_bv.question_p;
    this.question_q = this.planSingle.m_bv.question_q;
    this.question_r = this.planSingle.m_bv.question_r;
    this.question_s = this.planSingle.m_bv.question_s;
    this.question_t = this.planSingle.m_bv.question_t;
    this.text_a = this.planSingle.m_bv.text_a;
    this.text_b = this.planSingle.m_bv.text_b;
    this.text_c = this.planSingle.m_bv.text_c;
    this.text_d = this.planSingle.m_bv.text_d;
    this.text_e = this.planSingle.m_bv.text_e;
    this.finishModM = this.planSingle.finishModM;
    this.finishModMpartA = this.planSingle.finishModMpartA;
    this.finishModMpartB = this.planSingle.finishModMpartB;
    this.finishModMpartC = this.planSingle.finishModMpartC;
    this.finishModMpartD = this.planSingle.finishModMpartD;
  },
};
</script>
