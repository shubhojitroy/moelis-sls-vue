<template>
  <div class="home">
    <RegistrationDetailsPage />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationDetailsPage from '../components/RegistrationDetailsPage.vue';

export default {
  name: 'details',
  components: {
    RegistrationDetailsPage,
  },
};
</script>
