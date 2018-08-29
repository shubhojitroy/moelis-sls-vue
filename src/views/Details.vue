<template>
  <div class="home">
    <RegistrationDetailsPage />
  </div>
</template>

<script>
// @ is an alias to /src
import RegistrationDetailsPage from '../registration/RegistrationDetailsPage.vue';

export default {
  name: 'details',
  components: {
    RegistrationDetailsPage,
  },
};
</script>
