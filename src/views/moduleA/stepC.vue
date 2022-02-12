<template>
  <div>
    <ToolbarAuth :name="'Noodopvolging'" />
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
                    :text="statement[13].questionAppForm"
                    :note="statement[13].commentApp"
                    :nr-notes="statement[13].nrNotes"
                    :noteA="statement[13].noteAppFormA"
                    :noteB="statement[13].noteAppFormB"
                    :noteC="statement[13].noteAppFormC"
                    class="mb-5 mt-5"
                  />
                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[13].nrOptions"
                    v-bind:optionA="statement[13].optionA"
                    v-bind:optionB="statement[13].optionB"
                    v-bind:optionC="statement[13].optionC"
                    v-bind:optionD="statement[13].optionD"
                  />
                  <div v-if="question_m === 'ke1'">
                    <StatementText
                      :text="statement[14].questionAppForm"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppFormA"
                      :noteB="statement[14].noteAppFormB"
                      :noteC="statement[14].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_o"
                      v-bind:label="statement[14].label"
                    />
                    <StatementText
                      :text="statement[15].questionAppForm"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppFormA"
                      :noteB="statement[15].noteAppFormB"
                      :noteC="statement[15].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_p"
                      v-bind:label="statement[15].label"
                    />
                    <StatementText
                      :text="statement[16].questionAppForm"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppFormA"
                      :noteB="statement[16].noteAppFormB"
                      :noteC="statement[16].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_q"
                      v-bind:label="statement[16].label"
                    />
                    <StatementText
                      :text="textData[3].textAppForm"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppFormA"
                      :noteB="textData[3].noteAppFormB"
                      :noteC="textData[3].noteAppFormC"
                      class="mb-5 mt-5"
                    />
                    <StatementText
                      :text="statement[17].questionAppForm"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppFormA"
                      :noteB="statement[17].noteAppFormB"
                      :noteC="statement[17].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_r"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />
                    <StatementText
                      :text="statement[18].questionAppForm"
                      :note="statement[18].commentApp"
                      :nr-notes="statement[18].nrNotes"
                      :noteA="statement[18].noteAppFormA"
                      :noteB="statement[18].noteAppFormB"
                      :noteC="statement[18].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_s"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[18].nrOptions"
                      v-bind:optionA="statement[18].optionA"
                      v-bind:optionB="statement[18].optionB"
                      v-bind:optionC="statement[18].optionC"
                      v-bind:optionD="statement[18].optionD"
                    />
                    <StatementText
                      :text="statement[19].questionAppForm"
                      :note="statement[19].commentApp"
                      :nr-notes="statement[19].nrNotes"
                      :noteA="statement[19].noteAppFormA"
                      :noteB="statement[19].noteAppFormB"
                      :noteC="statement[19].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_t"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[19].nrOptions"
                      v-bind:optionA="statement[19].optionA"
                      v-bind:optionB="statement[19].optionB"
                      v-bind:optionC="statement[19].optionC"
                      v-bind:optionD="statement[19].optionD"
                    />
                    <StatementText
                      :text="statement[20].questionAppForm"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppFormA"
                      :noteB="statement[20].noteAppFormB"
                      :noteC="statement[20].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_u"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[20].nrOptions"
                      v-bind:optionA="statement[20].optionA"
                      v-bind:optionB="statement[20].optionB"
                      v-bind:optionC="statement[20].optionC"
                      v-bind:optionD="statement[20].optionD"
                    />
                    <StatementText
                      :text="statement[21].questionAppForm"
                      :note="statement[21].commentApp"
                      :nr-notes="statement[21].nrNotes"
                      :noteA="statement[21].noteAppFormA"
                      :noteB="statement[21].noteAppFormB"
                      :noteC="statement[21].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[21].nrOptions"
                      v-bind:optionA="statement[21].optionA"
                      v-bind:optionB="statement[21].optionB"
                      v-bind:optionC="statement[21].optionC"
                      v-bind:optionD="statement[21].optionD"
                    />
                    <StatementText
                      :text="statement[22].questionAppForm"
                      :note="statement[22].commentApp"
                      :nr-notes="statement[22].nrNotes"
                      :noteA="statement[22].noteAppFormA"
                      :noteB="statement[22].noteAppFormB"
                      :noteC="statement[22].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_w"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[22].nrOptions"
                      v-bind:optionA="statement[22].optionA"
                      v-bind:optionB="statement[22].optionB"
                      v-bind:optionC="statement[22].optionC"
                      v-bind:optionD="statement[22].optionD"
                    />
                    <CustomDivider />
                    <StatementText
                      :text="statement[23].questionAppForm"
                      :note="statement[23].commentApp"
                      :nr-notes="statement[23].nrNotes"
                      :noteA="statement[23].noteAppFormA"
                      :noteB="statement[23].noteAppFormB"
                      :noteC="statement[23].noteAppFormC"
                    />

                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[23].nrOptions"
                      v-bind:optionA="statement[23].optionA"
                      v-bind:optionB="statement[23].optionB"
                      v-bind:optionC="statement[23].optionC"
                      v-bind:optionD="statement[23].optionD"
                    />
                    <StatementText
                      :text="statement[24].questionAppForm"
                      :note="statement[24].commentApp"
                      :nr-notes="statement[24].nrNotes"
                      :noteA="statement[24].noteAppFormA"
                      :noteB="statement[24].noteAppFormB"
                      :noteC="statement[24].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_y"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[24].nrOptions"
                      v-bind:optionA="statement[24].optionA"
                      v-bind:optionB="statement[24].optionB"
                      v-bind:optionC="statement[24].optionC"
                      v-bind:optionD="statement[24].optionD"
                    />
                    <StatementText
                      :text="statement[25].questionAppForm"
                      :note="statement[25].commentApp"
                      :nr-notes="statement[25].nrNotes"
                      :noteA="statement[25].noteAppFormA"
                      :noteB="statement[25].noteAppFormB"
                      :noteC="statement[25].noteAppFormC"
                    />
                    <base-radio
                      v-model="question_z"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[25].nrOptions"
                      v-bind:optionA="statement[25].optionA"
                      v-bind:optionB="statement[25].optionB"
                      v-bind:optionC="statement[25].optionC"
                      v-bind:optionD="statement[25].optionD"
                    />
                    <div v-if="question_z === 'ke3'">
                      <StatementText
                        :text="statement[26].questionAppForm"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppFormA"
                        :noteB="statement[26].noteAppFormB"
                        :noteC="statement[26].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_a"
                        v-bind:label="statement[26].label"
                      />
                    </div>
                    <div v-if="question_z === 'ke2'">
                      <StatementText
                        :text="textData[4].textAppForm"
                        :note="textData[4].commentApp"
                        :nr-notes="textData[4].nrNotes"
                        :noteA="textData[4].noteAppFormA"
                        :noteB="textData[4].noteAppFormB"
                        :noteC="textData[4].noteAppFormC"
                        class="mb-5 mt-5"
                      />
                      <StatementText
                        :text="statement[27].questionAppForm"
                        :note="statement[27].commentApp"
                        :nr-notes="statement[27].nrNotes"
                        :noteA="statement[27].noteAppFormA"
                        :noteB="statement[27].noteAppFormB"
                        :noteC="statement[27].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="statement[27].label"
                      />
                      <StatementText
                        :text="statement[28].questionAppForm"
                        :note="statement[28].commentApp"
                        :nr-notes="statement[28].nrNotes"
                        :noteA="statement[28].noteAppFormA"
                        :noteB="statement[28].noteAppFormB"
                        :noteC="statement[28].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_c"
                        v-bind:label="statement[28].label"
                      />
                      <StatementText
                        :text="statement[29].questionAppForm"
                        :note="statement[29].commentApp"
                        :nr-notes="statement[29].nrNotes"
                        :noteA="statement[29].noteAppFormA"
                        :noteB="statement[29].noteAppFormB"
                        :noteC="statement[29].noteAppFormC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[29].label"
                      />
                    </div>
                  </div>
                </div>
                <!--informal-->
                <div v-if="!formal">
                  <StatementText
                    :text="statement[13].questionAppInf"
                    :note="statement[13].commentApp"
                    :nr-notes="statement[13].nrNotes"
                    :noteA="statement[13].noteAppInfA"
                    :noteB="statement[13].noteAppInfB"
                    :noteC="statement[13].noteAppInfC"
                    class="mb-5 mt-5"
                  />
                  <base-radio
                    v-model="question_m"
                    :error-messages="errors"
                    rules="required"
                    v-bind:nrOptions="statement[13].nrOptions"
                    v-bind:optionA="statement[13].optionA"
                    v-bind:optionB="statement[13].optionB"
                    v-bind:optionC="statement[13].optionC"
                    v-bind:optionD="statement[13].optionD"
                  />
                  <div v-if="question_m === 'ke1'">
                    <StatementText
                      :text="statement[14].questionAppInf"
                      :note="statement[14].commentApp"
                      :nr-notes="statement[14].nrNotes"
                      :noteA="statement[14].noteAppInfA"
                      :noteB="statement[14].noteAppInfB"
                      :noteC="statement[14].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_o"
                      v-bind:label="statement[14].label"
                    />
                    <StatementText
                      :text="statement[15].questionAppInf"
                      :note="statement[15].commentApp"
                      :nr-notes="statement[15].nrNotes"
                      :noteA="statement[15].noteAppInfA"
                      :noteB="statement[15].noteAppInfB"
                      :noteC="statement[15].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_p"
                      v-bind:label="statement[15].label"
                    />
                    <StatementText
                      :text="statement[16].questionAppInf"
                      :note="statement[16].commentApp"
                      :nr-notes="statement[16].nrNotes"
                      :noteA="statement[16].noteAppInfA"
                      :noteB="statement[16].noteAppInfB"
                      :noteC="statement[16].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <BaseValInput
                      rules="max:150"
                      v-model="question_q"
                      v-bind:label="statement[16].label"
                    />
                    <StatementText
                      :text="textData[3].textAppInf"
                      :note="textData[3].commentApp"
                      :nr-notes="textData[3].nrNotes"
                      :noteA="textData[3].noteAppInfA"
                      :noteB="textData[3].noteAppInfB"
                      :noteC="textData[3].noteAppInfC"
                      class="mb-5 mt-5"
                    />
                    <StatementText
                      :text="statement[17].questionAppInf"
                      :note="statement[17].commentApp"
                      :nr-notes="statement[17].nrNotes"
                      :noteA="statement[17].noteAppInfA"
                      :noteB="statement[17].noteAppInfB"
                      :noteC="statement[17].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_r"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[17].nrOptions"
                      v-bind:optionA="statement[17].optionA"
                      v-bind:optionB="statement[17].optionB"
                      v-bind:optionC="statement[17].optionC"
                      v-bind:optionD="statement[17].optionD"
                    />
                    <StatementText
                      :text="statement[18].questionAppInf"
                      :note="statement[18].commentApp"
                      :nr-notes="statement[18].nrNotes"
                      :noteA="statement[18].noteAppInfA"
                      :noteB="statement[18].noteAppInfB"
                      :noteC="statement[18].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_s"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[18].nrOptions"
                      v-bind:optionA="statement[18].optionA"
                      v-bind:optionB="statement[18].optionB"
                      v-bind:optionC="statement[18].optionC"
                      v-bind:optionD="statement[18].optionD"
                    />
                    <StatementText
                      :text="statement[19].questionAppInf"
                      :note="statement[19].commentApp"
                      :nr-notes="statement[19].nrNotes"
                      :noteA="statement[19].noteAppInfA"
                      :noteB="statement[19].noteAppInfB"
                      :noteC="statement[19].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_t"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[19].nrOptions"
                      v-bind:optionA="statement[19].optionA"
                      v-bind:optionB="statement[19].optionB"
                      v-bind:optionC="statement[19].optionC"
                      v-bind:optionD="statement[19].optionD"
                    />
                    <StatementText
                      :text="statement[20].questionAppInf"
                      :note="statement[20].commentApp"
                      :nr-notes="statement[20].nrNotes"
                      :noteA="statement[20].noteAppInfA"
                      :noteB="statement[20].noteAppInfB"
                      :noteC="statement[20].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_u"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[20].nrOptions"
                      v-bind:optionA="statement[20].optionA"
                      v-bind:optionB="statement[20].optionB"
                      v-bind:optionC="statement[20].optionC"
                      v-bind:optionD="statement[20].optionD"
                    />
                    <StatementText
                      :text="statement[21].questionAppInf"
                      :note="statement[21].commentApp"
                      :nr-notes="statement[21].nrNotes"
                      :noteA="statement[21].noteAppInfA"
                      :noteB="statement[21].noteAppInfB"
                      :noteC="statement[21].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_v"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[21].nrOptions"
                      v-bind:optionA="statement[21].optionA"
                      v-bind:optionB="statement[21].optionB"
                      v-bind:optionC="statement[21].optionC"
                      v-bind:optionD="statement[21].optionD"
                    />
                    <StatementText
                      :text="statement[22].questionAppInf"
                      :note="statement[22].commentApp"
                      :nr-notes="statement[22].nrNotes"
                      :noteA="statement[22].noteAppInfA"
                      :noteB="statement[22].noteAppInfB"
                      :noteC="statement[22].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_w"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[22].nrOptions"
                      v-bind:optionA="statement[22].optionA"
                      v-bind:optionB="statement[22].optionB"
                      v-bind:optionC="statement[22].optionC"
                      v-bind:optionD="statement[22].optionD"
                    />
                    <CustomDivider />
                    <StatementText
                      :text="statement[23].questionAppInf"
                      :note="statement[23].commentApp"
                      :nr-notes="statement[23].nrNotes"
                      :noteA="statement[23].noteAppInfA"
                      :noteB="statement[23].noteAppInfB"
                      :noteC="statement[23].noteAppInfC"
                    />

                    <base-radio
                      v-model="question_x"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[23].nrOptions"
                      v-bind:optionA="statement[23].optionA"
                      v-bind:optionB="statement[23].optionB"
                      v-bind:optionC="statement[23].optionC"
                      v-bind:optionD="statement[23].optionD"
                    />
                    <StatementText
                      :text="statement[24].questionAppInf"
                      :note="statement[24].commentApp"
                      :nr-notes="statement[24].nrNotes"
                      :noteA="statement[24].noteAppInfA"
                      :noteB="statement[24].noteAppInfB"
                      :noteC="statement[24].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_y"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[24].nrOptions"
                      v-bind:optionA="statement[24].optionA"
                      v-bind:optionB="statement[24].optionB"
                      v-bind:optionC="statement[24].optionC"
                      v-bind:optionD="statement[24].optionD"
                    />
                    <StatementText
                      :text="statement[25].questionAppInf"
                      :note="statement[25].commentApp"
                      :nr-notes="statement[25].nrNotes"
                      :noteA="statement[25].noteAppInfA"
                      :noteB="statement[25].noteAppInfB"
                      :noteC="statement[25].noteAppInfC"
                    />
                    <base-radio
                      v-model="question_z"
                      :error-messages="errors"
                      rules="required"
                      v-bind:nrOptions="statement[25].nrOptions"
                      v-bind:optionA="statement[25].optionA"
                      v-bind:optionB="statement[25].optionB"
                      v-bind:optionC="statement[25].optionC"
                      v-bind:optionD="statement[25].optionD"
                    />
                    <div v-if="question_z === 'ke3'">
                      <StatementText
                        :text="statement[26].questionAppInf"
                        :note="statement[26].commentApp"
                        :nr-notes="statement[26].nrNotes"
                        :noteA="statement[26].noteAppInfA"
                        :noteB="statement[26].noteAppInfB"
                        :noteC="statement[26].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_a"
                        v-bind:label="statement[26].label"
                      />
                    </div>
                    <div v-if="question_z === 'ke2'">
                      <StatementText
                        :text="textData[4].textAppInf"
                        :note="textData[4].commentApp"
                        :nr-notes="textData[4].nrNotes"
                        :noteA="textData[4].noteAppInfA"
                        :noteB="textData[4].noteAppInfB"
                        :noteC="textData[4].noteAppInfC"
                        class="mb-5 mt-5"
                      />
                      <StatementText
                        :text="statement[27].questionAppInf"
                        :note="statement[27].commentApp"
                        :nr-notes="statement[27].nrNotes"
                        :noteA="statement[27].noteAppInfA"
                        :noteB="statement[27].noteAppInfB"
                        :noteC="statement[27].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_b"
                        v-bind:label="statement[27].label"
                      />
                      <StatementText
                        :text="statement[28].questionAppInf"
                        :note="statement[28].commentApp"
                        :nr-notes="statement[28].nrNotes"
                        :noteA="statement[28].noteAppInfA"
                        :noteB="statement[28].noteAppInfB"
                        :noteC="statement[28].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_c"
                        v-bind:label="statement[28].label"
                      />
                      <StatementText
                        :text="statement[29].questionAppInf"
                        :note="statement[29].commentApp"
                        :nr-notes="statement[29].nrNotes"
                        :noteA="statement[29].noteAppInfA"
                        :noteB="statement[29].noteAppInfB"
                        :noteC="statement[29].noteAppInfC"
                      />
                      <base-val-area
                        rules="max:500"
                        v-model="text_d"
                        v-bind:label="statement[29].label"
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
import textAppLeft from "@/text/moduleA/textAppLeftA.json";
import textAppRight from "@/text/moduleA/textAppRightA.json";
import Questions from "@/text/moduleA/moduleA.json";
import ExtraText from "@/text/moduleA/textA.json";
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
      question_z: "",
      text_a: "",
      text_b: "",
      text_c: "",
      text_d: "",

      finishModA: true,
      finishModApartA: true,
      finishModApartB: true,
      finishModApartC: true,
      finishModApartD: true,
      saving: false,
    };
  },
  methods: {
    stopThis() {
      this.dialogStop = true;
    },

    goBack() {
      this.$router.push({ name: "module-a-step-b" });
    },
    saveItem() {
      console.log("next Step works");
      this.finishModApartC = true;
      this.finishModA = true;
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
        question_z: this.question_z,
        text_a: this.text_a,
        text_b: this.text_b,
        text_c: this.text_c,
        text_d: this.text_d,
        finishModApartA: this.finishModApartA,
        finishModApartB: this.finishModApartB,
        finishModApartC: this.finishModApartC,
        finishModApartD: this.finishModApartD,
        finishModA: this.finishModA,
      };
      resultService
        .saveDataA(clientId, payload)
        .then(() => {
          let clientId = JSON.parse(localStorage.getItem("pass_token"));
          this.$store.dispatch("plan/getPlan", clientId);
        })
        .then(() => {
          this.saving = false;
          this.$router.push({ name: "module-a-end" });
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
    this.question_m = this.planSingle.a_bv.question_m;
    this.question_n = this.planSingle.a_bv.question_n;
    this.question_o = this.planSingle.a_bv.question_o;
    this.question_p = this.planSingle.a_bv.question_p;
    this.question_q = this.planSingle.a_bv.question_q;
    this.question_r = this.planSingle.a_bv.question_r;
    this.question_s = this.planSingle.a_bv.question_s;
    this.question_t = this.planSingle.a_bv.question_t;
    this.question_u = this.planSingle.a_bv.question_u;
    this.question_v = this.planSingle.a_bv.question_v;
    this.question_w = this.planSingle.a_bv.question_w;
    this.question_x = this.planSingle.a_bv.question_x;
    this.question_y = this.planSingle.a_bv.question_y;
    this.question_z = this.planSingle.a_bv.question_z;
    this.text_a = this.planSingle.a_bv.text_a;
    this.text_b = this.planSingle.a_bv.text_b;
    this.text_c = this.planSingle.a_bv.text_c;
    this.text_d = this.planSingle.a_bv.text_d;
    this.finishModApartA = this.planSingle.finishModApartA;
    this.finishModApartB = this.planSingle.finishModApartB;
    this.finishModApartC = this.planSingle.finishModApartC;
    this.finishModApartD = this.planSingle.finishModApartD;
    this.finishModA = this.planSingle.finishModA;
  },
};
</script>
