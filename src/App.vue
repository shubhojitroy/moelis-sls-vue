<template>
  <div id="app">
    <main>
        <header-banner />
        <router-view />
        <footer-banner />
    </main>
  </div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue';
import FooterBanner from './components/FooterBanner.vue';

export default {
  name: 'app',
  components: {
    HeaderBanner,
    FooterBanner,
  },
};
</script>

<style lang="scss">
  @import '../src/assets/styles/style.scss';
</style>
