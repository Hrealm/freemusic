<template>
	<div class="wrap">
        <div class="main clearFix">
            <div class="toplistNav fl">
                <p class="navItem" v-for="(item,index) in navList" :key="index"
                v-text="item.title" :class="item.tip === activeNav ? 'selectTitle' : 'nav'"
                @click="getSongList(item.tip,item.title)"></p>
            </div>
            <div class="songList">
                <div class="listTitle">
                    <h3>{{activeTitle}}</h3>
                    <span class="updated fr">{{updateTiem}} 更新</span>
                </div>
                <div class="listContent">
                    <ul v-for="(item,index) in songlistContent" :key="index" 
                    :style="index === activeNav ? 'display: block;' : 'display: none;'">
                        <li class="listItem" v-for="(item,index) in item" :key="index">
                            <a href="javascript:;" class="clearFix">
                                <span class="num"><strong>{{item.id}}</strong></span>
                                <span class="songName">{{item.name}}</span>
                                <span class="time fr">{{item.time}}</span>
                                <span style="display:none;"></span>
                            </a>
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
            navList: [],
            activeNav: 'SoaringList',
            activeTitle: '飙升榜',
            songlistContent: {}
		}
	},
    components: {},
    created(){
        this.axios.get('/api/navList').then((res)=>{
            this.navList = res.data;
        })
        this.axios.get('/api/songlistContent').then((res)=>{
            this.songlistContent = res.data;
        })
    },
    methods:{
        getSongList(tip,title){
            this.activeNav = tip;
            this.activeTitle = title;
        }
    },
    computed: {
        updateTiem: function(){
            let time = new Date();
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            return `${year}-${month}-${day}`;
        }
    }

}
</script>

<style scoped lang="scss">
.wrap{
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(#f3f3f3, #ffffff);
    .main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 60px;
        .toplistNav{
            width: 178px;
            // border-right: 1px solid rgba(153, 153, 153, .2);
            text-align: start;
            .navItem{
                font-size: 15px;
                line-height: 22px;
                padding: 8px 17px;
                cursor: pointer;
                color: #000;
            }
            .nav:hover{
                color: #31C27C;
            }
            .selectTitle{
                color: #fff;
                background-color: #31C27C;
            }
        }
        .songList{
            position: relative;
            margin-left: 178px;
            padding-left: 35px;
            border-left: 1px solid rgba(153, 153, 153, .2);
            .listTitle{
                margin-bottom: 24px;
                border-bottom: 1px dotted #cacaca;
                h3{
                    display: inline-block;
                    line-height: 38px;
                    font-size: 24px;
                    margin-right: 20px;
                    margin-bottom: 33px;
                    font-weight: 400;
                    color: #333;
                }
                .updated{
                    font-size: 14px;
                    color: #999;
                    line-height: 40px;
                }
            }
            .listContent{
                width: 100%;
                ul{
                    .listItem{
                        height: 54px;
                        line-height: 54px;
                        padding: 0 20px;
                        font-size: 0;
                        border-bottom: 1px solid #f2f2f2;
                        cursor: pointer;
                        a{
                            display: block;
                            .num{
                                margin-right: 20px;
                                strong{
                                    font-size: 18px;
                                    font-family: Tahoma;
                                    color: #fe2c62;
                                    font-weight: 400;
                                }
                            }
                            .songName{
                                font-size: 14px;
                                color: #333;
                            }
                            .time{
                                font-size: 14px;
                                color: #999;
                            }
                        }
                    }
                    .listItem:hover{
                        background-color: #f2f2f2;
                    }
                    .listItem:hover a .songName{
                        color: #31C27C;
                    }
                    .listItem:hover a .time{
                        color: #31C27C;
                    }
                }
            }
        }
    }
}
</style>
