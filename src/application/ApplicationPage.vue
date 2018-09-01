<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    EQUITY RAISING APPLICATION FORM
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>
                        This Application Form has been issued by Moelis Australia Asset
                        Management Ltd (ACN 142 008 535, AFSL 427 515) (Trustee) as trustee
                        of the Moelis Australia Secured Loan Series (in respect of the Offer).
                    </p>
                    <p>
                        The Offer is being made in, and accompanied by, a copy of the
                        IM which contains information about investing. Persons
                        eligible to apply must apply online or,
                        if applicable, contact their adviser to submit an Application Form.
                    </p>
                    <p>
                        You should read the IM in full before making an application.
                    </p>
                    <p>
                        By completing this Application Form and making a payment
                        by BPAY® pursuant to this Application Form,
                        you make the declarations set out in this Application Form.
                    </p>
                    <p>
                        This Application Form is only available to persons within Australia.
                        The IM contains information relevant to a decision to invest in the
                        Fund and you should read the entire IM carefully before applying.
                    </p>
                    <p>

                    </p>
                    <hr>
                    <p>
                       In order to obtain payment instructions to complete your Application,
                       please click on the Submit button. This will take you to a
                       confirmation page and provide BPAY payment details.
                    </p>
                    <p>
                        If you would like more information or have any questions
                        relating to the Offer Capital Raising, you can contact the
                        Moelis Australia Asset Management on 1800 634 850
                        (within Australia) or +61 2 9290 9681 (outside Australia)
                        between 8:15am and 5:30pm (Melbourne time) Monday to Friday.
                    </p>
                </div>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <router-link to="/details" tag="button" class="button is-primary">
                            &#x2039;&nbsp;PPREVIOUS
                        </router-link>
                    </div>
                    <div class="level-right">
                        <router-link to="/confirmation" tag="button" class="button is-primary">
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
  name: 'ApplicationPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
