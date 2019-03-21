<template>
  <section class="example-5 section">
    <h2 class="title is-3">Example 5: transition enter / leave</h2>
    <div class="field">
      <button
        @click="isVisible = !isVisible"
        class="button is-primary">visible: {{ isVisible }}</button>
    </div>
    <div class="field">
      <transition name="opacity">
        <div
          v-if="isVisible"
          :style="computedStyle"
          class="image"/>
      </transition>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  const imgUrl = 'https://i.ytimg.com/vi/-TXBxxPAtb0/maxresdefault.jpg';

  export default Vue.extend({
    data() {
      return {
        imgUrl: '',
        isVisible: true
      };
    },
    computed: {
      computedStyle(): {[key: string]: string} {
        return {backgroundImage: `url('${this.imgUrl}')`};
      }
    },
    created() {
      new Promise(resolve => setTimeout(() => resolve(imgUrl), 500))
        .then(image => { this.imgUrl = image as string; });
    }
  });
</script>


<style lang="scss" scoped>
  @import '../styles/utilities/variables';

  $image-width: 300px;

  .image {
    padding-top: percentage(9/16);
    background: $gray-237 center / cover no-repeat;
  }

  .opacity-enter,
  .opacity-leave-to {
    opacity: 0;
  }

  .opacity-enter-active,
  .opacity-leave-active {
    transition: opacity 1s;
  }
</style>