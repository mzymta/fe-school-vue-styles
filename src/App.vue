<template>
  <div class="app">
    <div class="app-container container">
      <aside class="app-menu menu">
        <p class="menu-label">
          Examples
        </p>
        <ul class="menu-list">
          <li>
            <router-link :to="{name: RouteNames.example1}">Example 1</router-link>
            <router-link :to="{name: RouteNames.example2}">Example 2</router-link>
            <router-link :to="{name: RouteNames.example3}">Example 3</router-link>
            <router-link :to="{name: RouteNames.example4}">Example 4</router-link>
            <router-link :to="{name: RouteNames.example5}">Example 5</router-link>
            <router-link :to="{name: RouteNames.example6}">Example 6</router-link>
            <router-link :to="{name: RouteNames.example7}">Example 7</router-link>
            <router-link :to="{name: RouteNames.example8}">Example 8</router-link>
            <router-link :to="{name: RouteNames.example9}">Example 9</router-link>
          </li>
        </ul>
      </aside>
      <main class="app-main">
        <transition
          mode="out-in"
          name="opacity">
          <router-view/>
        </transition>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {RouteNames} from './router';

  export default Vue.extend({
      data() {
        return {RouteNames};
      }
    });
</script>

<style lang="scss" scoped>
  @import './styles/utilities/variables';

  $app-menu-min-width: 300px;

  .app {
    height: 100%;

    &-container {
      display: flex;
      height: 100%;
    }

    &-menu {
      padding: $building-unit-x2;
      border-right: 1px solid $gray-237;
      flex-shrink: 0;
      min-width: $app-menu-min-width;
    }

    &-main {
      flex-grow: 1;
      padding: $building-unit-x2 $building-unit-x3;
    }
  }
</style>
