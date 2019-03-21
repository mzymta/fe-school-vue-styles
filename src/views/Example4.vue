<template>
  <section class="example-4 section">
    <h2 class="title is-3">Example 4: style binding</h2>
    <div class="field">
      <div
        :style="{backgroundImage: `url('${imgUrl}')`}"
        class="image"/>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  const imgUrl = 'https://i.ytimg.com/vi/-TXBxxPAtb0/maxresdefault.jpg';

  export default Vue.extend({
    data() {
      return {
        imgUrl: ''
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
</style>