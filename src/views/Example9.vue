<template>
  <section class="example-9 section">
    <h2 class="title is-3">Example 9: transitioning lists</h2>
    <div class="box">
      <button
        @click="shuffle"
        class="button">Shuffle</button>
      <button
        @click="add"
        class="button">Add</button>
      <button
        @click="remove"
        class="button">Remove</button>
    </div>
    <transition-group name="list" tag="p">
      <span
        v-for="item in items"
        :key="item"
        class="list-item">item_{{ item }}</span>
    </transition-group>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';


  export default Vue.extend({
    data() {
      return {
        isEdit: true,
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      };
    },
    methods: {
      shuffle() {
        this.items.sort(() => (0.5 - Math.random()));
      },
      randomIndex() {
        return Math.floor(Math.random() * this.items.length);
      },
      add() {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove() {
        this.items.splice(this.randomIndex(), 1);
      }
    }
  });
</script>

<style lang="scss" scoped>
  @import '../styles/utilities/variables';

  .button {
    margin-right: $building-unit-x2;
  }

  .list-item {
    transition: all 1s;
    display: inline-flex;
    margin: $building-unit_x0_25;
    padding: $building-unit-x0_25 $building-unit-x0_5;
    color: $white;
    background-color: $blue;
    border-radius: $building-unit-x0_25;
  }

  // transition
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY($building-unit-x2);
  }

  .list-leave-active {
    position: absolute;
  }
</style>