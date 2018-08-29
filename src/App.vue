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
body {
  margin: 0 0 7.0rem;
}
#app {
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
  Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
