<template>
    <nav class="navbar header has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand"><!--navbar-menu is-active-->
                <div class="logo">
                    <a class="" href="/" title="Moelis Asset Management">
                        <img :src="availableParts.logos[selectedLogosIndex].src"
                        alt="Moelis Asset Management" width="160">
                    </a>
                </div>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    &nbsp;
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <p class="subtitle is-7">
                            Offer Information Line<br>
                            1800 634 850 (within Australia)<br>
                            +61 2 9290 9681 (International)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import availableParts from '../data/parts';

export default {
  name: 'HeaderBanner',
  props: {
    msg: String,
  },
  data() {
    return {
      availableParts,
      selectedLogosIndex: 0,
    };
  },
  methods: {
    selectedLogos() {
      this.selectedLogosIndex += 1;
    },
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
