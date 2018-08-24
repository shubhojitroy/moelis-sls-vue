<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Registration Details
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>

                    </p>
                    <hr>
                    <p>
                       By clicking 'Next' you are confirming your holding details are correct as above for an Application under the Offer. If you need to change the registered address for your holding, please complete the form available <a href="http://www.boardroomlimited.com.au/forms/Change%20of%20Address.pdf">here</a>.
                    </p>
                </div>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <router-link to="/login" tag="button" class="button">PPREVIOUS</router-link>
                    </div>
                    <div class="level-right">
                        <router-link to="/application" tag="button" class="button">NEXT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RegistrationDetailsPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
