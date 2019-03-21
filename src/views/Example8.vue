<template>
  <section class="example-8 section">
    <h2 class="title is-3">Example 8: transitioning between elements</h2>
    <div class="field">
      <button
        @click="isEdit = !isEdit"
        class="button is-primary">edit mode: {{ isEdit }}</button>
    </div>
    <transition name="opacity">
      <input
        v-if="isEdit"
        class="input"/>
      <div
        v-else
        class="box is-marginless"
        placeholder="input placeholder">Some text</div>
    </transition>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({
    data() {
      return {
        isEdit: true
      };
    }
  });
</script>