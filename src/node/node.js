const http = require('http');
const url = require('url');
let server = http.createServer();
server.on('request',(req,res)=>{
    const pathName = url.parse(req.url,true).pathname;
    res.writeHeader(200,{
        'Content-Type': 'text/html;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    let data = {
        banner: [
            {
                id: 1,
                picUrl: '../static/img/banner/1.jpg'
            },
            {
                id: 2,
                picUrl: '../static/img/banner/2.jpg'
            },
            {
                id: 3,
                picUrl: '../static/img/banner/3.jpg'
            },
            {
                id: 4,
                picUrl: '../static/img/banner/4.jpg'
            },
            {
                id: 5,
                picUrl: '../static/img/banner/5.jpg'
            }
        ],
        songList: [
            {
                id: 1,
                PlayNum: 482,
                des: 'Emerging artists you should get to know.',
                picUrl: '../static/img/songList/1.jpg'
            },
            {
                id: 2,
                PlayNum: 928,
                des: '特色女嗓 · 爆破型鬼才声线集',
                picUrl: '../static/img/songList/2.jpg'
            },
            {
                id: 3,
                PlayNum: 83,
                des: '精选欧美电子☄| 感受深邃内心的旋律',
                picUrl: '../static/img/songList/3.jpg'
            },
            {
                id: 4,
                PlayNum: 841,
                des: '【旋律控】超级好听的欧美良曲',
                picUrl: '../static/img/songList/4.jpg'
            },
            {
                id: 5,
                PlayNum: 103,
                des: 'Urban · 历届格莱美精选集',
                picUrl: '../static/img/songList/5.jpg'
            },
            {
                id: 6,
                PlayNum: 258,
                des: '薄荷苏打水 | 夏日清凉必备曲目 纯音',
                picUrl: '../static/img/songList/6.jpg'
            },
            {
                id: 7,
                PlayNum: 261,
                des: 'Bass House | 惊艳Drop 低频Bass',
                picUrl: '../static/img/songList/7.jpg'
            },
        ],
        hotList: [
            {
                id: 1,
                title: '飙升榜',
                list: [
                    '1 . 崔伟立、孙艺琪 - 情火',
                    '2 . 小恩 - 我的名字'
                ],
                picUrl: '../static/img/hotList/1.jpg'
            },
            {
                id: 2,
                title: 'TOP500',
                list: [
                    '1 . 音阙诗听、赵方婧 - 芒种',
                    '2 . G.E.M.邓紫棋 - 画 (Live Piano Session II)'
                ],
                picUrl: '../static/img/hotList/2.jpg'
            },
            {
                id: 3,
                title: '网络红歌榜',
                list: [
                    '1 . 虎二 - 你一定要幸福',
                    '2 . 杭娇 - 听心'
                ],
                picUrl: '../static/img/hotList/3.jpg'
            }
        ]
    }

    switch (pathName){
        case '/banner':
            reJson('banner');
            break;
        case '/songList':
            reJson('songList');
            break;
        case '/hotList':
            reJson('hotList');
            break;
        default:
            break;

    }

    function reJson(route) {
        res.end(JSON.stringify(data[route]));
    }
});

server.listen(8899,()=>{
    console.log('服务器启动成功');
})