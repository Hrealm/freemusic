<template>
    <div class="wrap">
        <!-- playMusic -->
        <div class="playMusic">
            <aplayer autoplay :music="songList" showLrc :list="list" repeat="repeat-all" v-if="player"></aplayer>
        </div>
        <!-- secoundContent -->
        <div class="secoundContent clearFix">
            <!-- 相关推荐 -->
            <div class="recommend fl">
                <div class="itemTitle clearFix">
                    <h3>相关<b>推荐</b></h3>
                    <a href="javascript:;">更多</a>
                </div>
            </div>
            <!--  -->
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
        .secoundContent{
            width: 1200px;
            margin: 0 auto;
            margin-top: 40px;
            .recommend{
                width: 820px;
                .itemTitle {
					width: 100%;
					height: 30px;
					line-height: 30px;
					padding-bottom: 30px;
					h3 {
						float: left;
						display: block;
						width: 120px;
						height: 30px;
						color: #31c27c;
						letter-spacing: 5px;
						font-weight: 400;
						b {
							font-weight: 400;
							color: #555;
						}
					}
					a {
						float: right;
						font-size: 13px;
						color: #999;
					}
				}
            }
        }
    }

</style>
