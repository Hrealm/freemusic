<template>
	<div class="wrap">
        <div class="main clearFix">
            <div class="toplistNav fl">
                <p class="navItem" v-for="(item,index) in navList" :key="index"
                v-text="item.title" :class="item.tip === activeNav ? 'selectTitle' : 'nav'"
                @click="getSongList(item.tip)"></p>
            </div>
            <div class="songList">
                <div class="listTitle">
                    <h3>{{activeNav}}</h3>
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
            activeNav: 'SoaringList'
		}
	},
    components: {},
    created(){
        this.axios.get('/api/navList').then((res)=>{
            this.navList = res.data;
        })
    },
    methods:{
        getSongList(title){
            this.activeNav = title;
        }
    }
}
</script>

<style scoped lang="scss">
.wrap{
    width: 100%;
    background: linear-gradient(#f3f3f3, #fdfdfd);
    .main{
        width: 1200px;
        margin: 0 auto;
        padding-top: 60px;
        .toplistNav{
            width: 178px;
            border-right: 1px solid rgba(153, 153, 153, .2);
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
            margin-left: 210px;
        }
    }
}
</style>
