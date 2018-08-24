<template>
    <footer class="footer">
        <div class="container is-fluid">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            <strong>©</strong> Boardroom Pty Limited
                        </p>
                    </div>
                </div>
                <div class="level-right">
                    <p class="level-item">
                        ABN 14 003 209 836
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
