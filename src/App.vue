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
import Home from './views/Home.vue';
import About from './views/About.vue';
import FooterBanner from './components/FooterBanner.vue';

export default {
  name: 'app',
  components: {
    HeaderBanner,
    Home,
    About,
    FooterBanner,
  },
};
</script>

<style lang="scss">
body {
  margin: 6.25rem 0;
}
#app {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
