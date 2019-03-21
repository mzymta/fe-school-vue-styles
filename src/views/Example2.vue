<template>
  <section class="example-2 section">
    <h2 class="title is-3">Example 2: Local component styles</h2>
    <button class="button">Some text</button>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({});

</script>

<style lang="scss" scoped>
  @import '../styles/utilities/variables';

  .button {
    background: $blue;
    color: $white;
  }
</style>