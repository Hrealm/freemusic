<template>
    <div class="wrap">
        <div class="searchHd">
            <div class="searchInput">
                <input class="input" type="text" placeholder="搜索音乐、MV、歌单、专辑" @keydown="keyDown()">
                <button class="searchBtn" @click="searchSong()"><i class="iconfont icon-sousuo"></i></button>
            </div>
        </div>
        <div class="searchContent">
            <div class="searchTab">
                <ul class="clearFix">
                    <li class="fl" v-for="(item,index) in searchTab" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="songList">
                <ul class="listTitle clearFix">
                    <li class="songName fl">歌曲</li>
                    <li class="album fl">专辑</li>
                    <li class="time fr">时长</li>
                </ul>
                <ul class="listContent">
                    <li class="tip" :style="showTip ? 'display: block;' : 'display: none;'">
                        没有搜索到
                        <b :style="keyword == '' ? 'display:none;' : 'display:inline-block;'">"{{keyword}}"</b>
                        相关的歌曲
                    </li>
                    <li class="listItem" v-for="(item,index) in searchInfo" :key="index">
                        <router-link :to="{name: 'playmusic',query:{hash:item.hash,album_id:item.album_id}}"
                        class="clearFix" target="_blank">
                            <p class="list_songName fl">{{item.filename}}</p>
                            <p class="list_album fl">{{item.album_name}}</p>
                            <p class="list_time fr">{{item.duration | songTime}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTab: ['单曲','MV','歌单'],
            keyword: '',
            searchInfo: [],
            showTip: true,
        }
    },
    components: {},
    methods: {
        searchSong(){
            let keyword = document.getElementsByClassName('input')[0].value;
            this.keyword = keyword;
            if(keyword.trim() == ""){
                // alert('1')
                 this.$alert('搜索内容不能为空哦！', '提示', {
                    confirmButtonText: '确定',
                    callback: function () {}
                });

            }
            if(keyword.trim()){
                let url = '/searchApi/api/v3/search/song?format=json&keyword=' + keyword + '&page=1&pagesize=20&showtype=1';
                this.axios.get(url).then(res=>{
                    this.searchInfo = [];
                    this.searchInfo = res.data.data.info;
                    if(this.searchInfo.length !== 0) {this.showTip = false;}
                    else{this.showTip = true;}

                })
            }
        },
        keyDown(){
            if(event.keyCode == 13){
                this.searchSong();
                // document.getElementsByClassName('searchBtn')[0].click();
            }
        }
    },
    filters: {
        songTime: function(time){
            let min = Math.floor(time / 60);
            let second = time % 60;
            return `${min < 10 ? ('0' + min) : min }:${second > 9 ? second : ('0' + second)}`
        }
    }
}
</script>

<style scoped lang="scss">
    .wrap{
        width: 100%;
        min-height: 100vh;
        .searchHd{
            position: relative;
            width: 100%;
            height: 247px;
            background-image: url('../../../static/img/search/bg_search.jpg');
            background-position: 50%;
            background-size: cover;
            .searchInput{
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
                width: 639px;
                height: 50px;
                padding: 0 50px 0 15px;
                line-height: 50px;
                background-color: #fff;
                border-radius: 3px;
                font-size: 0;
                .input{
                    width: 600px;
                    height: 50px;
                    border: 0 none;
                    font-size: 14px;
                    background: 0 0;
                    font-family: poppin,Tahoma,Arial,sans-serif;
                }
                .input:focus {
                    outline: 0;
                }
                .searchBtn{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 50px;
                    height: 50px;
                    border: 0 none;
                    background-color: #fff;
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                    cursor: pointer;
                    color: #7f7f7f;
                    i{
                        font-size: 22px;
                        
                    }
                }
                .searchBtn:hover{
                    color: #31C27C;
                }
                .searchBtn:focus{
                    outline: 0;
                }
            }
        }
        .searchContent{
            width: 1200px;
            margin: 0 auto;
            .searchTab{
                width: 100%;
                height: 56px;
                margin-bottom: 30px;
                border-bottom: 1px solid #f0f0f0;
                ul{
                    li{
                        width: 100px;
                        height: 56px;
                        line-height: 56px;
                        text-align: center;
                        font-size: 16px;
                        cursor: pointer;
                    }
                }
            }
            .songList{
                width: 100%;
                .listTitle{
                    padding-left: 20px;
                    padding-right: 50px;
                    background-color: #f8f8f8;
                    li{
                        // min-width: 50px;
                        height: 54px;
                        line-height: 54px;
                        font-size: 14px;
                        color: #999;
                        // border-bottom: 1px solid #f2f2f2;
                    }
                    .songName{
                        width: 600px;
                    }
                    .album{
                        width: 470px;
                    }
                }
                .listContent{
                    width: 100%;
                    .tip{
                        height: 54px;
                        padding-left: 20px;
                        margin-top: 40px;
                        line-height: 54px;
                        font-size: 16px;
                        color: #333;
                        text-align: center;
                        b{
                            color: #31C27C;
                        }
                    }
                    .listItem{
                        height: 54px;
                        line-height: 54px;
                        padding-left: 20px;
                        padding-right: 50px;
                        font-size: 0;
                        border-bottom: 1px solid #f2f2f2;
                        cursor: pointer;
                        a{
                            display: block;
                            p{
                                font-size: 14px;
                                color: #333;
                            }
                            .list_songName{
                                width: 550px;
                                padding-right: 50px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                            .list_album{
                                width: 470px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                            }
                            .list_time{
                                color: #999;
                            }
                        }
                    }
                    .listItem:hover{
                        // background-color: #f8f8f8;
                        background-color: #31c27c0f;
                    }
                    .listItem:hover .list_songName{
                        color: #31C27C;
                    }
                    .listItem:hover .list_album{
                        color: #999;
                    }
                }
            }
        }
    }
</style>
