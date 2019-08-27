<template>
    <div class="wrap">
        <div class="playMusic">
            <aplayer autoplay :music="songList" showLrc :list="list" repeat="repeat-all" v-if="player"></aplayer>
        </div>
        <div class="recommend">
            
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            songList: {},
            list: [],
            musicObj: {},
            player: false
        }
    },
    components: {},
    created(){
        let id = this.$route.query.id;
        const title = this.$route.query.title;
        if(id){
            let url = title + '?id=' + id;
            this.axios.get(url).then((res)=>{
                this.musicObj = res.data
                this.list = this.musicObj.musicList;
                this.songList = this.list[0];
                this.player = true;
            })
        }
        if(title=='SongtabContent'){
            let index = this.$route.query.index;
            let area = this.$route.query.area;
            this.axios.get(title).then((res)=>{
                this.musicObj = res.data;
                this.songList = this.musicObj[area][index].musicInfo;
                this.player = true;
            })
        }
    }
    
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
