<template>
  <section class="example-7 section">
    <h2 class="title is-3">Example 7: JS hooks</h2>
    <div class="field">
      <button
        @click="isVisible = !isVisible"
        class="button is-primary">visible: {{ isVisible }}</button>
    </div>
    <transition
      name="height"
      @enter="collapseHeightEnter"
      @after-enter="collapseHeightAfter"
      @leave="collapseHeightLeave"
      @after-leave="collapseHeightAfter">
      <div
        v-if="isVisible"
        class="text">
        <p class="text-inner">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolores inventore molestiae quibusdam. Ab aliquam corporis ea eveniet illo iste libero minus natus nihil, nulla quis similique voluptate voluptates? Animi at aut beatae consectetur corporis deleniti doloremque dolores error excepturi expedita facilis fuga id illum in incidunt, inventore iure laborum libero modi necessitatibus odio odit, omnis, perspiciatis quaerat rem repudiandae totam ullam? Cumque exercitationem illo itaque laborum laudantium perferendis possimus quod, similique. Est expedita fuga incidunt, laboriosam laborum maxime natus nostrum nulla, officia, quibusdam quidem quod reprehenderit sed sit temporibus. A aliquam amet enim nihil quos sunt veniam. Consectetur dignissimos esse est hic non? Aperiam enim et optio. Aliquid amet culpa deleniti dicta dolore dolorem eos eum id illo, incidunt ipsam iure iusto labore laudantium magnam nam necessitatibus nisi nulla optio perferendis praesentium quam, quibusdam reiciendis repellendus saepe sit temporibus voluptas? Ab cumque laborum optio perferendis, quaerat quos reprehenderit voluptatum.
        </p>
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({
    data() {
      return {
        isVisible: true,
        transitionDuration: 500
      };
    },
    methods: {
      collapseHeightEnter(el: HTMLElement, done: () => void) {
        el.style.transition = `height ${this.transitionDuration}ms`;
        el.style.overflow = 'hidden';
        const height = el.offsetHeight;
        el.style.height = '0px';
        setTimeout(() => {
          el.style.height = `${height}px`;
          setTimeout(() => done(), this.transitionDuration);
        });
      },
      collapseHeightLeave(el: HTMLElement, done: () => void) {
        el.style.transition = `${this.transitionDuration}ms`;
        el.style.overflow = 'hidden';
        el.style.height = `${el.offsetHeight}px`;
        setTimeout(() => {
          el.style.height = '0px';
          setTimeout(() => done(), this.transitionDuration);
        });
      },
      collapseHeightAfter(el: HTMLElement) {
        el.style.height = '';
        el.style.transition = '';
        el.style.overflow = '';
      }
    }
  });
</script>


<style lang="scss" scoped>
  @import '../styles/utilities/variables';

  .text {
    &-inner {
      padding: $building-unit-x2;
    }
    border: 1px solid $blue;
    overflow: hidden;
  }
</style>