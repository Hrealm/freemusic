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
                </div>
                <div class="itemContent clearFix">
                    <ul>
                        <li class="fl" v-for="(item,index) in hotRadio" :key="index">
                            <a href="javascript:;">
                                <div class="cover"><i class="iconfont icon-bofang"></i></div>
                                <img :src="item.picUrl" alt="" width="100%" height="100%" v-lazy="item.picUrl">
                                <p class="radioName">{{item.name}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 相关MV -->
            <div class="relatedMV fr">
                <div class="itemTitle clearFix">
                    <h3>相关<b>MV</b></h3>
                </div>
                <div class="itemContent">
                    <a href="/#/playmv.html?mvhash=e54624e1c736dc406090b311491e11bb">
                        <div class="cover"><i class="iconfont icon-bofang"></i></div>
                        <img src="../../../static/img/hotMV/5.jpg" alt="" width="100%" height="100%">
                        <p class="mvName">Live Piano Session II</p>
                    </a>
                </div>
            </div>
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
            player: false,
            canPlay: true,
            hotRadio: []
        }
    },
    components: {},
    created(){
        let id = this.$route.query.id;
        const title = this.$route.query.title;
        let hash = this.$route.query.hash;
        if(id){
            let url ='/api/indexList?title=' + title + '&id=' + id;
            this.axios.get(url).then((res)=>{
                this.musicObj = res.data
                this.list = this.musicObj.musicList;
                this.songList = this.list[0];
                this.player = true;
            })
        };
        if(title=='SongtabContent'){
            let index = this.$route.query.index;
            let area = this.$route.query.area;
            this.axios.get('/api/indexList?title=' + title).then((res)=>{
                this.musicObj = res.data;
                this.songList = this.musicObj[area][index].musicInfo;
                this.player = true;
            })
        };
        if(hash){
            let url = '/playApi/yy/index.php?r=play/getdata&hash='+ hash;
            this.axios.get(url).then(res=>{
                this.musicObj = res.data.data;
                if(!this.musicObj.song_name){this.canPlay = false};
                this.songList = {
                    title: this.musicObj.song_name,
                    artist: this.musicObj.author_name,
                    src: this.musicObj.play_url,
                    pic: this.musicObj.img,
                    lrc: this.musicObj.lyrics
                };
                this.player = true;
            })
        }
        this.axios.get('/api/indexList?title=hotRadio').then((res)=>{
            this.hotRadio = res.data
        });
    },
    mounted(){
        setTimeout(()=>{
            if(!this.canPlay){
                this.$alert('我太难了~没抢到资源 o(︶︿︶)o','sorry',{
                    confirmButtonText: '确定',
                    callback: function(){}
                });
            }
        },200)
    }
    
}
</script>

<style scoped lang="scss">
    .wrap{
        width: 100%;
        min-height: 80vh;
        .playMusic{
            width: 1200px;
            margin: 0 auto;
            padding-top: 30px;
            border-top: 1px solid #ddd;
        }
        .secoundContent{
            width: 1200px;
            margin: 0 auto;
            margin-top: 60px;
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
				}
                .itemContent{
                    ul {
                        width: 864px;
                        li{
                            position: relative;
                            width: 100px;
                            margin-right: 44px;
                            margin-bottom: 23px;
                            text-align: center;
                            a{
                                .cover{
                                    position: absolute;
                                    visibility: hidden;
                                    width: 100px;
                                    height: 100px;
                                    line-height: 100px;
                                    text-align: 100px;
                                    background-color: rgba(0, 0, 0,.3);
                                    i{
                                        font-size: 32px;
                                        color: rgba(255,255,255,.8);
                                    }
                                }
                                display: block;
                                font-size: 0;
                                img{
                                    width: 100px;
                                    height: 100px;
                                }
                                .radioName{
                                    margin-top: 10px;
                                    width: 100px;
                                    line-height: 20px;
                                    font-size: 14px;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    color: #333;
                                }
                            }
                        }
                        li:hover .cover{
                            visibility: visible;
                        }
                        li:hover .radioName{
                            color: #31c27c;
                        }
                    }
                }
            }
            .relatedMV{
                width: 320px;
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
                        text-align: start;
                        padding-left: 3px;
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
                .itemContent{
                    width: 320px;
                    a{
                        display: block;
                        .cover{
                            position: absolute;
                            visibility: hidden;
                            width: 320px;
                            height: 180px;
                            text-align: center;
                            line-height: 180px;
                            background-color: rgba(0, 0, 0,.2);
                            i{
                                font-size: 52px;
                                color: rgba(255,255,255,.8);
                            }
                        }
                        img{
                            width: 320px;
                            height: 180px;
                        }
                        .mvName{
                            font-size: 14px;
                            line-height: 31px;
                            color: #2c3e50;
                            text-align: start;
                        }
                    }
                }
                .itemContent:hover .cover{
                    visibility: visible;
                }
                .itemContent:hover .mvName{
                    color: #31c27c;
                }
            }
        }
    }

</style>
