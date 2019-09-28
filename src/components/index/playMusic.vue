<template>
    <div class="wrap">
        <!-- playMusic -->
        <div class="playMusic">
            <aplayer autoplay :music="songList" showLrc :list="list" repeat="repeat-all" v-if="player"></aplayer>
        </div>
        <!-- secoundContent -->
        <div class="secoundContent clearFix">
            <!-- 歌曲信息 -->
            <div class="recommend fl">
                <div class="itemTitle clearFix">
                    <h3>歌曲<b>信息</b></h3>
                </div>
                <div class="songInfo">
                    <div class="lrc">
                        <ul>
                            <li v-for="(item,index) in lyricstxt" :key="index">{{item}}</li>
                        </ul>
                        <ul :style="isShow ? 'display: block;' : 'display:none;'">
                            <li v-for="(item,i) in lyricshidden" :key="i">{{item}}</li>
                        </ul>
                        <p style="margin-top:5px;">
                            <a href="javascript:;" @click="expand()">{{tip}}</a>
                            <a href="javascript:;" @click="reload()">点击刷新</a>
                        </p>
                    </div>
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
            <!-- 评论系统 -->
            <div class="comment fl">
                <div class="comment_none">评论系统升级中</div>
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
            lyricstxt: [],
            lyricshidden: [],
            isShow: false,
            tip: '[展开]',
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
                    confirmButtonText: '行吧',
                    callback: function(){
                        window.top.close();
                    }
                });
            }
            var lrc = String(this.songList.lrc);
            if(lrc.length==0) return;
            var lrcs = lrc.split('\n');//用回车拆分成数组
            for(var i in lrcs) {//遍历歌词数组
                lrcs[i] = lrcs[i].replace(/(^\s*)|(\s*$)/g, ""); //去除前后空格
                var t = lrcs[i].substring(lrcs[i].indexOf("[") + 1, lrcs[i].indexOf("]"));//取[]间的内容
                var s = t.split(":");//分离:前后文字
                if(!isNaN(parseInt(s[0]))) { //是数值
                    var arr = lrcs[i].match(/\[(\d+:.+?)\]/g);//提取时间字段，可能有多个
                    var start = 0;
                    for(var k in arr){
                        start += arr[k].length; //计算歌词位置
                    }
                    var content = lrcs[i].substring(start);//获取歌词内容
                    // parseInt(i) < (lrcs.length / 2) - 5 ? this.lyricstxt.push(content) : this.lyricshidden.push(content);
                    parseInt(i) < 25 ? this.lyricstxt.push(content) : this.lyricshidden.push(content);
                }
            }
        },250);

    },
    methods: {
        reload(){
            location.reload();
        },
        expand(){
            this.isShow = !this.isShow;
            this.tip = this.isShow ? '[收起]' : '[展开]';
        }
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
                .songInfo{
                    .lrc{
                        // text-align: center;
                        ul{
                            li{
                                font-size: 12px;
                                color: #333;
                                line-height: 23px;
                            }
                        }
                        p{
                            font-size: 12px;
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
            .comment{
                width: 820px;
                .comment_none{
                    font-size: 16px;
                    line-height: 144px;
                    text-align: center;
                    color: #000;
                }
            }
        }
    }

</style>
