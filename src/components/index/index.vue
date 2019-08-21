<template>
	<div class="wrap">
		<div class="hd">
			<div class="banner">
				<el-carousel :interval="4000" type="card" height="305px">
					<el-carousel-item v-for="(item,index) in banner" :key="index">
						<img :src="item.picUrl" alt width="100%" height="100%" />
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="content clearFix">
			<div class="secoundContent clearFix">
				<!-- 精选歌单 -->
				<div class="selectSongList">
					<div class="itemTitle clearFix">
						<h3>精选<b>歌单</b></h3>
						<a href>更多</a>
					</div>
					<div class="itemContent clearFix">
						<div class="itemList" v-for="(item,index) in songList" :key="index">
							<p class="PlayNum">
								<span>{{item.PlayNum}}万</span>
							</p>
							<img :src="item.picUrl" alt width="100%" height="100%" />
							<p class="des">{{item.des}}</p>
							<div class="cover" style="visibility: hidden;"></div>
						</div>
					</div>
				</div>
				<!-- 热门榜单 -->
				<div class="hotList">
					<div class="itemTitle clearFix">
						<h3>热门<b>榜单</b></h3>
						<a href>更多</a>
					</div>
					<div class="itemContent">
                        <div class="itemList clearFix" v-for="(item,index) in hotList" :key="index">
                            <a href="javascript:;">
                                <div class="cover" style="visibility: hidden;"></div>
                                <span class="right" style="visibility: hidden;"></span>
                                <img :src="item.picUrl" alt=""  width="100%" height="100%">
                                <div class="list fr">
                                    <dl>
                                        <dt>{{item.title}}</dt>
                                        <dd v-for="(item,index) in item.list" :key="index">{{item}}</dd>
                                    </dl>  
                                </div>
                            </a>
                        </div>
                    </div>
				</div>
			</div>
            <!-- Ad Column -->
            <div class="adColumn"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banner: [],
            songList: [],
            hotList: []
		}
	},
	components: {},
	created() {
		this.axios.get('banner').then(res => {
			this.banner = res.data
		})
		this.axios.get('songList').then(res => {
			this.songList = res.data
        })
        this.axios.get('hotList').then((res)=>{
            this.hotList = res.data
        })
	}
}
</script>

<style scoped lang="scss">
.wrap {
	width: 100%;
	.hd {
		width: 100%;
		padding-top: 35px;
		background: linear-gradient(#f3f3f3, #fdfdfd);
		.banner {
			width: 1200px;
			margin: 0 auto;
			.el-carousel {
				width: 100%;
			}
			div.is-active {
				width: 751px;
				height: 300px;
				margin-left: -75.5px;
			}
		}
	}
	.content {
		width: 1200px;
		margin: 0 auto;
		.secoundContent {
			margin-top: 40px;
			.selectSongList {
                float: left;
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
				.itemContent {
					width: 825px;
					height: 330px;
					.itemList {
						position: relative;
						float: left;
						width: 160px;
						height: 160px;
						margin: 0 5px 5px 0;
						.PlayNum {
							position: absolute;
							top: 0;
							right: 0;
							width: 152px;
							height: 30px;
							padding-right: 8px;
							line-height: 30px;
							font-size: 13px;
							background: linear-gradient(
								to right,
								transparent,
								rgba(0, 0, 0, 0.4)
							);
							color: #fff;
							text-align: right;
							z-index: 2;
						}
						.des {
							position: absolute;
							left: 0;
							right: 0;
							bottom: 0;
							width: 130px;
							height: 21px;
							padding: 3px 25px 3px 5px;
							line-height: 21px;
							color: #fff;
							font-size: 14px;
							background-color: rgba(0, 0, 0, 0.5);
							text-align: start;
							text-overflow: ellipsis;
							white-space: nowrap;
							overflow: hidden;
						}
					}
					.itemList:nth-child(1) {
						width: 325px;
						height: 325px;
						margin-right: 5px;
						.des {
							width: 309px;
							height: 20px;
						}
					}
				}
			}
			.hotList {
				float: right;
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
                    height: 325px;
                    .itemList{
                        width: 320px;
                        height: 98px;
                        margin-bottom: 15px;
                        background-color: #f6f6f6;
                        a{
                            display: block;
                            img{
                                width: 98px;
                                height: 98px;
                            }
                            .list{
                                width: 200px;
                                height: 68px;
                                padding: 15px 10px;
                                overflow: hidden;
                                font-size: 14px;
                                text-align: start;
                                dl{
                                     dt{
                                        line-height: 24px;
                                        color: #333;
                                        font-weight: 700;
                                    }
                                    dd{
                                        width: 180px;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        overflow: hidden;
                                        line-height: 24px;
                                        color: #555;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .adColumn{
            width: 100%;
            height: 80px;
            margin-top: 10px;
        }
	}
}
</style>
