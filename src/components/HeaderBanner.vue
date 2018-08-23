<template>
    <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <a class="logo" href="https://moelisaustralia.com/" title="Moelis Asset Management">
                    <img src="../assets/images/moelis-logo.png" alt="Moelis Asset Management" width="160">
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'HeaderBanner',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.navbar {
    border-top: .3em solid #eef9fd;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
}
.logo {
    margin: .5em;
}
</style>
