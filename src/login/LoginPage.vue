<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    ENTER YOUR PRIORTY CODE
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
                                <!-- <button type="submit" class="button is-primary">
                                    Login&nbsp;&#x2714;
                                </button> -->
                                <router-link to="/details" tag="button" class="button is-primary">
                                    Login&nbsp;&#x2714;
                                </router-link>
                            </div>
                        </form>
                    </div>
                </div>
                <hr>                
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
