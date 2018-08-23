<template>
<div id="app">
    <main>
        <header-banner />
        <HomePage />
        <footer-banner />
    </main>
</div>
</template>

<script>
import HeaderBanner from './components/HeaderBanner.vue';
import HomePage from './components/HomePage.vue';
import FooterBanner from './components/FooterBanner.vue';

export default {
  name: 'app',
  components: {
    HeaderBanner,
    HomePage,
    FooterBanner,
  },
};
</script>

<style lang="scss">
body {
  margin: 6.25rem 0 4.5rem;
}
#app {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
}
</style>
