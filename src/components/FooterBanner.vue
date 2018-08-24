<template>
    <footer class="footer">
        <div class="container">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-7">
                            <strong>©</strong> Boardroom Pty Limited
                        </p>
                    </div>
                </div>
                <div class="level-right">
                    <p class="level-item">
                        <span class="subtitle is-7">
                            ABN 14 003 209 836
                        </span>                        
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterBanner',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.footer {
    padding: 1rem 1.5rem;
    border-top: .0075em solid rgb(221, 214, 214);
    position: fixed;
    bottom: 0;
    width: 100%;
}
</style>
