<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Enter Your Priority Code
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p>

                    </p>
                </div>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <router-link to="/" tag="button" class="button">PPREVIOUS</router-link>
                    </div>
                    <div class="level-right">
                        <router-link to="/details" tag="button" class="button">NEXT</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">

</style>
