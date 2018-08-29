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
                    <div class="box">
                        <form novalidate>
                            <b-field label="Priority Code">
                                <b-input v-model="pcode" type="text" maxlength="4"
                                placeholder="Input the Priority Code">
                                </b-input>
                            </b-field>
                            <div class="control">
                                <button type="submit" class="button">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
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
  data() {
    return {
      pcode: '',
    };
  },
};
</script>

<style scoped lang="scss">

</style>
