<template>
    <div class="page">
        <div class="logo"></div>
        <div class="ani">
            <img class="loding" src="assets/loding.png" alt="">
            <img class="loding2" src="assets/loding2.png" alt="">
            <p>loading...</p>
            <div class="progress">{{progress}}%</div>
        </div>
    </div>
</template>

<script>
    import imgArr from '../tools/img-arr'
    import preLoad from '../tools/pre-load'
    const total = imgArr.length;
    let current = 0;
    const preLoading = (that) => {
        imgArr.forEach((item) => {
            preLoad(() => {
                that.progress = Math.floor(++current / total * 100);
                if (current === total) {
                    console.log('加载完成')
                    // 加载完毕后就跳转到其它页面
                    that.$router.push('banner')
                }
            }, item);
        });
    };

    export default {
        data () {
            return {
                progress: 0
            }
        },
        created () {
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
            preLoading(this);
        }
    };
</script>

<style lang="sass" scoped>

    @import "../main"

    .page
        padding-top: 19.188px

    .logo
        @include position-center
            top: 19.188px

    .ani
        position: relative
        margin-top: 50%
        text-align: center
        z-index: 1
        font-size: 40px

    .loding
        @include animation(loding, 1s linear infinite)
            from, to
                @include transform(rotate(0))
            50%
                @include transform(rotate(10deg))

    .loding2
        @include translate-center(row)
            top: 40%
        z-index: -1
        @include animation(loding2, 1s linear infinite)
            from, to
                @include transform(translate3d(-45%, -10%, 0))
            50%
                @include transform(translate3d(-50%, 0, 0))

    p
        color: #ffe06a

    .progress
        margin-top: 10px
        color: #fff

</style>