<template>
    <div class="wrap">
        <div class="playMusic">
            <aplayer autoplay :music="{
                title: '特色女嗓 · 爆破型鬼才声线集',
                artist: 'Hrealm',
                src: 'https://music.163.com/song/media/outer/url?id=1298111231.mp3',
                pic: '../static/img/songList/2.jpg',
                theme: '#31C27C'
            }"></aplayer>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {}
    },
    components: {}
}
</script>

<style scoped lang="scss">
    .wrap{
        width: 100%;
        .playMusic{
            width: 1200px;
            margin: 0 auto;
            padding-top: 30px;
            border-top: 1px solid #ddd;
        }
    }

</style>
