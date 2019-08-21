<template>
	<div class="wrap">
		<div class="banner">
			<el-carousel :interval="4000" type="card" height="305px">
				<el-carousel-item v-for="(item,index) in banner" :key="index">
                    <img :src="item.picUrl" alt="" width="100%" height="100%">
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banner: []
		}
	},
    components: {},
    created(){
        this.axios.get('banner')
            .then((res)=>{
                this.banner = res.data
            })
    }
}
</script>

<style scoped lang="scss">
.wrap{
    width: 100%;
    .banner{
        width: 1200px;
        margin: 35px auto;
        .el-carousel{
            width: 100%;
        }
        div.is-active{
            width: 751px;
            height: 300px;
            margin-left: -75.5px;
        }
    }
}

</style>
