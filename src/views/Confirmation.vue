<template>
  <div class="home">
    <ConfirmationPaymentPage />
  </div>
</template>

<script>
// @ is an alias to /src
import ConfirmationPaymentPage from '../confirmation/ConfirmationPaymentPage.vue';

export default {
  name: 'confirmation',
  components: {
    ConfirmationPaymentPage,
  },
};
</script>
