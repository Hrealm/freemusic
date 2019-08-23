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
            <!-- secoundContent -->
			<div class="secoundContent clearFix">
				<!-- 精选歌单 -->
				<div class="selectSongList">
					<div class="itemTitle clearFix">
						<h3>精选<b>歌单</b></h3>
						<a href="javascript:;">更多</a>
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
						<a href="javascript:;">更多</a>
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
            <!-- thirdContent -->
            <div class="thirdContent clearFix">
                <!-- 新歌首发 -->
                <div class="newSongList fl">
                    <div class="itemTitle clearFix">
                        <h3>新歌<b>首发</b></h3>
                        <a href="javascript:;">更多</a>
                        <div class="songtabMenu fl">
                            <span class="menuItem" v-for="(item,index) in tabMenu" :key="index" 
                            v-text="item.title" @mouseenter="enter(item,item.tip)"
                            :class="item.id === 1 ? 'active' : {'active':item.active}"></span>
                        </div>
                    </div>
                    <div class="itemContent">
                        <div class="SongtabContent">
                            <ul v-for="(item,index) in SongtabContent" :key="index"
                            :style="index === songListShow ? 'display:block;' : 'display:none;'">
                                <li v-for="(item,index) in item" :key="index">
                                    <a href="javascript:;"  class="clearFix">
                                        <span class="songName fl">{{item.name}}</span>
                                        <span class="songTime fr">{{item.time}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- 推荐MV -->
                <div class="hotMV fr">
                    <div class="itemTitle clearFix">
                        <h3>热门<b>MV</b></h3>
                        <a href="javascript:;">更多</a>
                    </div>
                    <div class="itemContent clearFix">
                        <div class="mvList fl" v-for="(item,index) in hotMV" :key="index">
                            <a :href="item.url">
                                <div class="cover" style="visibility: hidden;"></div>
                                <img :src="item.picUrl" alt="" width="100%" height="100%">
                                <p class="mvName">{{item.mvName}}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Ad Column -->
            <div class="adColumn"></div>
            <!-- lastContent -->
            <div class="lastContent clearFix">
                <!-- 热门电台 -->
                <div class="hotRadio fl">
                    <div class="itemTitle clearFix">
                        <h3>热门<b>电台</b></h3>
                        <a href="javascript:;">更多</a>
                    </div>
                    <div class="itemContent clearFix">
                        <ul>
                            <li class="fl" v-for="(item,index) in hotRadio" :key="index">
                                <a href="javascript:;">
                                    <div class="cover" style="visibility: hidden;"></div>
                                    <img :src="item.picUrl" alt="" width="100%" height="100%">
                                    <p class="radioName">{{item.name}}</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 热门歌手 -->
                <div class="hotSinger fr">
                    <div class="itemTitle clearFix">
                        <h3>热门<b>歌手</b></h3>
                        <a href="javascript:;">更多</a>
                    </div>
                    <div class="itemContent">
                        <div class="singerList" v-for="(item,index) in hotSinger" :key="index">
                            <a href="javascript:;">
                                <div class="cover" style="visibility: hidden;"></div>
                                <img :src="item.picUrl" alt="" width="100%" height="100%">
                                <p class="singerName">{{item.name}}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Ad Column -->
            <!-- <div class="adColumn"></div> -->
            <!-- backtop  -->
            <el-backtop :right="80" :bottom="80">
                <div class="backtop"></div>
            </el-backtop>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			banner: [],
            songList: [],
            hotList: [],
            tabMenu: [],
            songListShow: 'Chinese',
            SongtabContent: {},
            hotMV: [],
            hotRadio: [],
            hotSinger: []
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
        this.axios.get('tabMenu').then((res)=>{
            this.tabMenu = res.data
        })
        this.axios.get('SongtabContent').then((res)=>{
            this.SongtabContent = res.data
        })
        this.axios.get('hotMV').then((res)=>{
            this.hotMV = res.data
        })
        this.axios.get('hotRadio').then((res)=>{
            this.hotRadio = res.data
        })
        this.axios.get('hotSinger').then((res)=>{
            this.hotSinger = res.data
        })
    },
    methods: {
        enter(item,area){
            this.$nextTick(()=>{
                this.tabMenu.forEach((i)=>{
                    i.id = 0;
                    this.$set(i,'active',false);
                })
                item.active = true;
                this.songListShow = area;
            })
        }
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
							width: 295px;
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
        .thirdContent{
            margin-top: 40px;
            .newSongList{
                width: 820px;
                .itemTitle {
					width: 100%;
					height: 30px;
					line-height: 30px;
                    padding-bottom: 20px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #f0f0f0;
					h3 {
						float: left;
						display: block;
						width: 120px;
                        height: 30px;
                        margin-right: 25px;
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
					.songtabMenu{
                        line-height: 30px;
                        .menuItem{
                            margin-right: 20px;
                            font-size: 15px;
                            cursor: pointer;
                        }
                    }
                }
                .itemContent{
                    position: relative;
                    height: 280px;
                    overflow: hidden;
                    .SongtabContent{
                        margin-top: 0px;
                        ul{
                            li{
                                height: 35px;
                                line-height: 35px;
                                font-size: 14px;
                                a{
                                    display: block;
                                    padding: 0 10px;
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
            .hotMV{
                width: 320px;
				.itemTitle {
					width: 100%;
					height: 30px;
					line-height: 30px;
					padding-bottom: 20px;
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
                    width: 332px;
                    .mvList{
                        width: 154px;
                        margin-right: 12px;
                        a{
                            display: block;
                            font-size: 0;
                            img{
                                width: 154px;
                                height: 84px;
                            }
                            .mvName{
                                width: 154px;
                                padding-top: 5px;
                                font-size: 14px;
                                text-align: start;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                color: #444;
                            }
                        }
                    }
                    .mvList:nth-child(1){
                        position: relative;
                        width: 320px;
                        height: 175px;
                        margin-bottom: 8px;
                        a{
                            img{
                                width: 320px;
                                height: 175px;
                            }
                            .mvName{
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                width: 310px;
                                height: 21px;
                                line-height: 21px;
                                padding: 3px 5px;
                                background-color: rgba(0, 0, 0, 0.5);
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
        .lastContent{
            margin-top: 40px;
            .hotRadio{
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
                .itemContent{
                    ul {
                        width: 864px;
                        li{
                            width: 100px;
                            margin-right: 44px;
                            margin-bottom: 23px;
                            a{
                                display: block;
                                font-size: 0;
                                img{
                                    width: 100px;
                                    height: 100px;
                                    border-radius: 50%;
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
                    }
                }
            }
            .hotSinger{
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
                    width: 330px;
                    .singerList{
                        position: relative;
                        float: left;
                        width: 105px;
                        height: 105px;
                        padding: 0;
                        margin-right: 5px;
                        a{
                            display: block;
                            font-size: 0;
                            img{
                                width: 105px;
                                height: 105px;
                            }
                            .singerName{
                                position: absolute;
                                left: 0;
                                right: 0;
                                bottom: 0;
                                width: 95px;
                                height: 21px;
                                padding: 3px 5px;
                                color: #fff;
                                font-size: 14px;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                overflow: hidden;
                                background: linear-gradient(transparent,rgba(0,0,0,0.6));
                            }
                        }
                    }
                    .singerList:nth-child(1), .singerList:nth-child(2){
                        width: 160px;
                        height: 160px;
                        margin-bottom: 5px;
                        a{
                            img{
                                width: 160px;
                                height: 160px;
                            }
                            .singerName{
                                width: 150px;
                            }
                        }
                    }
                }
            }
        }
        .backtop{
            height: 100%;
            width: 100%;
            background: url('../../assets/scrollTop1.png') no-repeat center;
            background-size: 100%;
            border-radius: 50%;
            
            // box-shadow: 0 0 6px rgba(0,0,0, .12);
            // text-align: center;
            // line-height: 40px;
            // color: #1989fa;
        }
        .backtop:hover{
            background: url('../../assets/scrollTop2.png') no-repeat center;
            background-size: 100%;
        }
	}
}
</style>
