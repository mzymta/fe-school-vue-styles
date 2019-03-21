<template>
  <section class="example-6 section">
    <h2 class="title is-3">Example 6: Animation enter / leave</h2>
    <div class="field">
      <button
        @click="isVisible = !isVisible"
        class="button is-primary">visible: {{ isVisible }}</button>
    </div>
    <div class="field">
      <transition name="popup">
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
  $transition: .5s;

  .image {
    padding-top: percentage(9/16);
    background: $gray-237 center / cover no-repeat;
  }

  .popup-enter-active {
    animation: popup $transition;
  }

  .popup-leave-active {
    animation: popup $transition reverse;
  }

  @keyframes popup {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>