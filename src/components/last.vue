<template>
    <div class="page">
        <div class="img">
            <img :src="'assets/scene04_0'+result+'.png'" alt="">
            <div class="info">
                <img :src="'assets/scene04_0'+result+'_2.png'" alt="">
                <img src="assets/scene_r.png" alt="">
            </div>
        </div>
        <div class="btn">
            <img @click="shareSeen = true" src="assets/scene04_share.png" alt="">
            <img @click="jump" src="assets/scene04_again.png" alt="">
        </div>
        <div class="share" v-if="shareSeen" @click="shareSeen = false">
            <img src="assets/share.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                shareSeen: false,
                result: ''
            }
        },
        created () {
            this.result = this.$router.currentRoute.params.result + 1;
            this.aniIsActive = true;
        },
        methods: {
            jump () {
                this.$router.push('begin')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import "../main"
    .page
        padding-top: 5%

    .img
        position: relative

        .info
            width: 556px
            height: 274px
            overflow: hidden
            @include translate-center(row)
                bottom: 4%
            img:last-child
                position: absolute
                top: 0
                right: 0
                z-index: 1

    .share
        position: fixed
        width: 100vw
        height: 100vh
        top: 0
        left: 0
        background-color: rgba(0, 0, 0, .75)


</style>