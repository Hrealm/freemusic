<template>
	<div id="app">
		<header>
			<div class="hd">
				<h1 class="logo">
                    <router-link :to="{name:'index'}"></router-link>
					<!-- <a href><img src="./assets/logo.png" alt/></a> -->
				</h1>
				<div class="nav">
					<ul class="clearFix">
						<li>
							<router-link :to="{name:'index'}">
								<span>首页</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name:'singer'}">
								<span>歌手</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name:'radio'}">
								<span>电台</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name:'mv'}">
								<span>MV</span>
							</router-link>
						</li>
						<li>
							<router-link :to="{name:'leaderboard'}">
								<span>排行榜</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<router-view />
        <footer>
            <div class="ft">
                <p>Copyright&nbsp;&nbsp;© 2019 FreeMusic-Inc.All Rights Reserved </p>
            </div>
        </footer>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style scoped lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
header {
	width: 100%;
	height: 90px;
	.hd {
		position: relative;
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		line-height: 90px;
		// border-bottom: 1px solid #ddd;
		.logo {
			position: absolute;
			left: 0;
			top: 50%;
			display: inline-block;
			width: 230px;
			height: 57px;
			margin-top: -28.5px;
			background: url('./assets/logo.png') no-repeat;
			background-size: 100%;
			a {
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		.nav {
			margin-left: 230px;
			ul {
				li {
					float: left;
					margin: 0 20px;
					a {
						color: inherit;
						span {
							font-size: 18px;
                        }
                        span:hover{
                            color: #31C27C;
                        }
					}
				}
			}
		}
	}
}
footer{
    width: 100%;
    height: 70px;
    background-color: #f2f2f2;
    .ft{
        width: 1200px;
        margin: 0 auto;
        line-height: 70px;
        font-size: 14px;
        
        p{
            text-align: start;
        }
    }
}
</style>
