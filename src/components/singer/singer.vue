<template>
	<div class="wrap">
		<div class="hd">
            <div class="section_inner">
              <h2 class="title">万千歌手 &nbsp; 尽在眼前</h2>
            </div>
        </div>
        <div class="main">
            <div class="singerTab">
                <span class="title" v-for="(item,index) in singerTab" :key="index" v-text="item.classname"
                :class="item.classid === singerListId ? 'selectTitle' : 'tab' " @click="getSingerList(item.classid)"></span>
            </div>
            <div class="itemContent">
                <div class="singerList clearFix">
                    <ul :style="singerList.classid === singerListId ? 'display: block;' : 'display: none;'">
                        <li class="singerListItem fl" v-for="(item,index) in listArry" :key="index">
                            <div class="singerListBox">
                                <a href="javascript:;" class="imgUrl" :title="item.singername">
                                    <img :src="item.imgurl" alt="" width="100%" height="100%" v-lazy="item.imgurl">
                                </a>
                                <h3 class="singerName"><a href="javascript:;" :title="item.singername">{{item.singername}}</a></h3>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            singerTab: [],
            singerListId: 88,
            singerList: {},
            listArry: []
		}
	},
    components: {},
    created(){
        this.axios.get('/kugouApi/singer/class&json=true').then((res)=>{
            this.singerTab = res.data.list;
        })
        this.getSingerList(88);
    },
    methods:{
        getSingerList(listId){
            this.singerListId = listId;
            let url = '/kugouApi/singer/list/' + listId +'?json=true';
            this.axios.get(url).then((res)=>{
                this.singerList = res.data;
                this.listArry = this.singerList.singers.list.info;
                this.machining();
            })
        },
        machining(){
            this.listArry.forEach((item)=>{
                let imgurl = item.imgurl.replace('{size}','100');
                item.imgurl = imgurl;
            })
        }

    }
}
</script>

<style scoped lang="scss">
.wrap{
    width: 100%;
    min-height: 100vh;
    .hd{
        width: 100%;
        height: 376px;
        background: url('../../../static/img/singer/bg_singer.jpg') 50% 0 repeat-x;
        .section_inner{
            position: relative;
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            line-height: 376px;
            .title{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                font-size: 55px;
                font-weight: 300;
            }
        }
    }
    .main{
        width: 1200px;
        margin: 0 auto;
        .singerTab{
            margin: 40px 0;
            text-align: center;
            .title{
                font-size: 14px;
                margin: 0 6px;
                padding: 6px 8px;
                cursor: pointer;
            }
            .tab:hover{
                color: #31C27C;
            }
            .selectTitle{
                color: #fff;
                background-color: #31C27C;
            }
        }
        .itemContent{
            width: 1200px;
            .singerList{
                ul{
                    width: 1220px;
                    li{
                        width: 244px;
                        margin-bottom: 20px;
                        text-align: center;
                        overflow: hidden;
                        .singerListBox{
                            margin: 0 10px;
                            padding: 25px 0;
                            font-size: 0;
                            background-color: #fbfbfb6b;
                            .imgUrl{
                                display: block;
                                width: 140px;
                                height: 140px;
                                margin: 0 auto;
                                border-radius: 50%;
                                img{
                                    width: 140px;
                                    height: 140px;
                                    border-radius: 50%;
                                }
                            }
                            .singerName{
                                font-size: 16px;
                                font-weight: 400;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                line-height: 31px;
                                margin: 15px 30px 4px;
                                a{
                                    color: #2c3e50;
                                }
                                a:hover{
                                    color: #31C27C;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
