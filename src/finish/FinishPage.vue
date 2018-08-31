
<template>
    <div class="home">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    Your application is noted.
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <div class="box">
                      Thankyou for making the application your details are being processed and you shall be informed accordingly.  
                    </div>
                </div>
                <hr>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FinishPage',
  props: {
    msg: String,
  },  
};
</script>

<style scoped lang="scss">

</style>
