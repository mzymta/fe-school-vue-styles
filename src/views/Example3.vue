<template>
  <section class="example-3 section">
    <h2 class="title is-3">Example 3: class binding</h2>
    <div class="field">
      <button
        :class="{'is-disabled': isDisabled, 'is-primary': isPrimary, 'is-large': isLarge}"
        class="button">Some text</button>
    </div>
    <div class="box">
      <h3 class="title is-5">Controls</h3>
      <div class="field">
        <button
          @click="isDisabled = !isDisabled"
          class="button">disabled: {{ isDisabled }}</button>
      </div>
      <div class="field">
        <button
          @click="isPrimary = !isPrimary"
          class="button">primary: {{ isPrimary }}</button>
      </div>
      <div class="field">
        <button
          @click="isLarge = !isLarge"
          class="button">large: {{ isLarge }}</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  interface IExample3Data {
    isDisabled: boolean;
    isPrimary: boolean;
    isLarge: boolean;
  }

  export default Vue.extend({
    data(): IExample3Data {
      return {
        isDisabled: false,
        isPrimary: false,
        isLarge: false
      };
    },
    computed: {
      computedClass(): {[key: string]: boolean} {
        return {'is-disabled': this.isDisabled, 'is-primary': this.isPrimary, 'is-large': this.isLarge};
      }
    }
  });
</script>