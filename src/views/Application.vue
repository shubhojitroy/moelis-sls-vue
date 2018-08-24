<template>
  <div class="home">
    <ApplicationPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ApplicationPage from '../components/ApplicationPage.vue';

export default {
  name: 'application',
  components: {
    ApplicationPage,
  },
};
</script>
