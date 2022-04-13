<template>
  <div>
    <v-list-item three-line class="elevation-24 leftPanel" @click="onClick">
      <v-list-item-content>
        <v-list-item-title v-if="formal">{{
          textModule.header
        }}</v-list-item-title>
        <v-list-item-title v-if="!formal">{{
          textModule.headerInf
        }}</v-list-item-title>
        <v-list-item-subtitle v-if="formal" class="mt-2">{{
          textModule.text
        }}</v-list-item-subtitle>
        <v-list-item-subtitle v-if="!formal" class="mt-2">{{
          textModule.InfText
        }}</v-list-item-subtitle>
        <v-list-item-subtitle>
          <div class="text-end">
            <v-btn color="primary" class="mr-3">start</v-btn>
          </div>
        </v-list-item-subtitle>
        <v-row no-gutters>
          <div v-if="nrOptions >= 1"><ta-status-icon :finish="readyA" /></div>
          <div v-if="nrOptions >= 2"><ta-status-icon :finish="readyB" /></div>
          <div v-if="nrOptions >= 3"><ta-status-icon :finish="readyC" /></div>
          <div v-if="nrOptions >= 4"><ta-status-icon :finish="readyD" /></div>
          <div v-if="nrOptions >= 5"><ta-status-icon :finish="readyE" /></div>
          <div v-if="nrOptions >= 6"><ta-status-icon :finish="readyF" /></div>
          <div v-if="nrOptions >= 7"><ta-status-icon :finish="readyG" /></div>
          <div v-if="nrOptions >= 8"><ta-status-icon :finish="readyH" /></div>
          <div v-if="nrOptions >= 9"><ta-status-icon :finish="readyI" /></div>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  name: "TaModuleCard",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    nrOptions: {
      type: Number,
      required: true,
    },
    textModule: {
      required: true,
    },
    formal: {
      type: Boolean,
    },
    readyA: {
      type: Boolean,
    },
    readyB: {
      type: Boolean,
    },
    readyC: {
      type: Boolean,
    },
    readyD: {
      type: Boolean,
    },
    readyE: {
      type: Boolean,
    },
    readyF: {
      type: Boolean,
    },
    readyG: {
      type: Boolean,
    },
    readyH: {
      type: Boolean,
    },
    readyI: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>
