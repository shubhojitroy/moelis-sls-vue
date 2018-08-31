<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    REGISTRATION DETAILS
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p class="subtitle is-5">
                        <!-- {{ investor.nameAddress1 }}
                        <br> -->
                        <!-- {{ investor.nameAddress2 }}
                        <br>
                        {{ investor.nameAddress3 }}
                        <br>
                        {{ investor.nameAddress4 }}
                        <br>
                        {{ investor.nameAddress5 }}
                        <br>
                        {{ investor.nameAddress6 }} -->
                    </p>
                    <hr>
                    <p>
                       By clicking 'Next' you are confirming your holding details are correct as above for an Application under the Offer. If you need to change the registered address for your holding, please complete the form available <a href="http://www.boardroomlimited.com.au/forms/Change%20of%20Address.pdf">here</a>.
                    </p>
                </div>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <router-link to="/login" tag="button" class="button is-primary">
                            &#x2039;&nbsp;PPREVIOUS
                        </router-link>
                    </div>
                    <div class="level-right">
                        <router-link to="/application" tag="button" class="button is-primary">
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
  name: 'RegistrationDetailsPage',
//   data(pcode) {
//       return {
//         investor: this.investor.nameAddress1
//       };
//   },
};
</script>

<style scoped lang="scss">
</style>
