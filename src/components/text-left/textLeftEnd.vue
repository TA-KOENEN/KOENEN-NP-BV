<template>
  <div>
    <h3>{{ headText }}</h3>
    <br />
    {{ textA }}
    <br />
    <br />
    {{ textB }}
    <br />
    <br />
    {{ textC }}
    <br />
    <br />
    {{ textD }}
    <br />
    <br />
    {{ textE }}
    <br />
    <br />
    {{ name }}<br />
    {{ email }}<br />
    {{ telephone }}<br />
    <br />
    <br />
    {{ textF }}
    {{ website }}
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "textLeftEnd",
  props: [
    "headText",
    "textA",
    "textB",
    "textC",
    "textD",
    "textE",
    "textF",
    "textG",
    "name",
    "email",
    "telephone",
    "website",
  ],
};
</script>

<style scoped></style>
