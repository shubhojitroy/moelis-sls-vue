<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from '../components/LoginPage.vue';

export default {
  name: 'login',
  components: {
    LoginPage,
  },
};
</script>
