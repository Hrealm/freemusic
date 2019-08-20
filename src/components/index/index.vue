<template>
	<div class="wrap">
		<div class="banner">
			<el-carousel :interval="4000" type="card" height="305px">
				<el-carousel-item v-for="item in 6" :key="item">
					<h3 class="medium">{{ item }}</h3>
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
                console.log(res.data);
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
        .el-carousel__item h3 {
            color: #475669;
            font-size: 14px;
            opacity: 0.75;
            line-height: 200px;
            margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
}

</style>
