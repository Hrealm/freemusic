<template>
	<div class="section_inner">
		<div class="videoPlayer">
            <iframe ref="iframe" src="../static/playmv.html" frameborder="no" border="0" 
            marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes"></iframe>
        </div>
        
        <!-- mv 信息 -->
        <div class="mv_info">
            <h1><span>{{mvInfo.songname}} · {{mvInfo.singer}} · MV</span></h1>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
            mvInfo: {},
            iframeWin: {}
		}
	},
    components: {},
    created(){
        let mvhash = this.$route.query.mvhash;
        let url = '/kugouApi/app/i/mv.php?cmd=100&hash=' + mvhash + '&ismp3=1&ext=mp4';
        this.axios.get(url).then(res=>{
            this.mvInfo = res.data;
            // console.log(this.mvInfo.mvdata.le.downurl);
        })
    },
    mounted(){
        // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
        // window.addEventListener('message', this.handleMessage)
        this.iframeWin = this.$refs.iframe.contentWindow;
        this.sendMessage();
    },
    methods: {
        sendMessage(){
            this.iframeWin.postMessage({
                // cmd: 'getFormJson',
                params: this.mvInfo.mvdata.le.downurl
            },'*')
        }
    }
}
</script>

<style scoped lang="scss">
 .section_inner{
     width: 100%;
     background-color: #333;
     .videoPlayer{
         width: 1200px;
         height: 674px;
         margin: 0 auto;
         iframe{
             width: 100%;
             height: 100%;
             overflow: hidden;
         }
         iframe:focus{
              outline: 0;
         }
     }
     .mv_info{
         width: 1200px;
         height: 70px;
         margin: 0 auto;
         line-height: 70px;
         span{
            color: rgb(255, 255, 255);
            font-weight: 400;
            font-size: 22px;
         }
     }
 }
</style>
