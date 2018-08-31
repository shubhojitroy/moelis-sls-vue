<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Confirmation and Payment Instructions
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>

                    </p>
                    <hr>
                    <p>
                       You should check the processing cut-off time for BPAY®
                       transactions with your bank, credit union or building
                       society to ensure your payment will be received by the Registry in time.
                    </p>
                </div>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <router-link to="/application" tag="button" class="button is-primary">
                            &#x2039;&nbsp;PPREVIOUS
                        </router-link>
                    </div>
                    <div class="level-right">
                        <router-link to="/finish" tag="button" class="button is-primary">
                            NEXT&nbsp;&#x203A;
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ConfirmationPaymentPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
