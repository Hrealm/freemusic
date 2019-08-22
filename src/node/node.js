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
        ],
        tabMenu: [
            {
                id: 1,
                title: '华语',
                tip: 'Chinese'
            },
            {
                id: 2,
                title: '欧美',
                tip: 'USEuro'
            },
            {
                id: 3,
                title: '韩国',
                tip: 'Korea'
            },
            {
                id: 4,
                title: '日本',
                tip: 'Japan'
            }
        ],
        SongtabContent: {
            Chinese: [
                {
                    id: 1,
                    name: '陈雪凝 - 十八',
                    time: '04:31'
                },
                {
                    id: 2,
                    name: '摩登兄弟 - 人造卫星情人',
                    time: '05:15'
                },
                {
                    id: 3,
                    name: '麦小兜 - 假如我很快乐',
                    time: '04:22'
                },
                {
                    id: 4,
                    name: '王蓉 - 数羊',
                    time: '03:27'
                },
                {
                    id: 5,
                    name: '郑秀文 - 好好说【花椒之味电影主题曲】',
                    time: '04:51'
                },
                {
                    id: 6,
                    name: '蒋雪儿 - 莫问归期',
                    time: '03:39'
                },
                {
                    id: 7,
                    name: '小倩 - 言不由衷',
                    time: '04:06'
                },
                {
                    id: 8,
                    name: '熊梓淇、赖雨濛 - 只想跟你在一起【国民老公2》影视剧片尾曲】',
                    time: '03:21'
                }
            ],
            USEuro: [
                {
                    id: 1,
                    name: 'Taylor Swift - Lover',
                    time: '03:41'
                },
                {
                    id: 2,
                    name: 'Martin Garrix、Bonn - Home',
                    time: '03:59'
                },
                {
                    id: 3,
                    name: 'Swae Lee、Drake - Won t Be Late',
                    time: '03:38'
                },
                {
                    id: 4,
                    name: '王蓉 - 数羊',
                    time: '03:27'
                },
                {
                    id: 5,
                    name: '郑秀文 - 好好说【花椒之味电影主题曲】',
                    time: '04:51'
                },
                {
                    id: 6,
                    name: '蒋雪儿 - 莫问归期',
                    time: '03:39'
                },
                {
                    id: 7,
                    name: '小倩 - 言不由衷',
                    time: '04:06'
                },
                {
                    id: 8,
                    name: '熊梓淇、赖雨濛 - 只想跟你在一起【国民老公2》影视剧片尾曲】',
                    time: '03:21'
                }
            ],
            Korea: [
                {
                    id: 1,
                    name: 'Red Velvet - 음파음파 (Umpah Umpah)',
                    time: '03:40'
                },
                {
                    id: 2,
                    name: 'Simon Dominic、Loopy、Crush - make her dance',
                    time: '02:50'
                },
                {
                    id: 3,
                    name: '麦小兜 - 假如我很快乐',
                    time: '04:22'
                },
                {
                    id: 4,
                    name: '王蓉 - 数羊',
                    time: '03:27'
                },
                {
                    id: 5,
                    name: '郑秀文 - 好好说【花椒之味电影主题曲】',
                    time: '04:51'
                },
                {
                    id: 6,
                    name: '蒋雪儿 - 莫问归期',
                    time: '03:39'
                },
                {
                    id: 7,
                    name: '小倩 - 言不由衷',
                    time: '04:06'
                },
                {
                    id: 8,
                    name: '熊梓淇、赖雨濛 - 只想跟你在一起【国民老公2》影视剧片尾曲】',
                    time: '03:21'
                }
            ],
            Japan: [
                {
                    id: 1,
                    name: '高垣彩陽 - Lasting Song【战姬绝唱SYMPHOGEAR XV片尾曲】',
                    time: '04:29'
                },
                {
                    id: 2,
                    name: '米津玄師 - Ghosts of the Sea【海兽之子主题曲】',
                    time: '03:54'
                },
                {
                    id: 3,
                    name: '麦小兜 - 假如我很快乐',
                    time: '04:22'
                },
                {
                    id: 4,
                    name: '王蓉 - 数羊',
                    time: '03:27'
                },
                {
                    id: 5,
                    name: '郑秀文 - 好好说【花椒之味电影主题曲】',
                    time: '04:51'
                },
                {
                    id: 6,
                    name: '蒋雪儿 - 莫问归期',
                    time: '03:39'
                },
                {
                    id: 7,
                    name: '小倩 - 言不由衷',
                    time: '04:06'
                },
                {
                    id: 8,
                    name: '熊梓淇、赖雨濛 - 只想跟你在一起【国民老公2》影视剧片尾曲】',
                    time: '03:21'
                }
            ]
        },
        hotMV: [
            {
                id: 1,
                mvName: 'Burn',
                picUrl: '../static/img/hotMV/1.jpg',
                url: 'https://music.163.com/#/mv?id=148005'
            },
            {
                id: 2,
                mvName: '爱完不完',
                picUrl: '../static/img/hotMV/2.jpg',
                url: 'https://www.kugou.com/mvweb/html/mv_1457468.html'
            },
            {
                id: 3,
                mvName: '小欢喜',
                picUrl: '../static/img/hotMV/3.jpg',
                url: 'https://www.kugou.com/mvweb/html/mv_1460605.html'
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
        case '/tabMenu':
            reJson('tabMenu');
            break;
        case '/SongtabContent':
            reJson('SongtabContent');
            break;
        case '/hotMV':
            reJson('hotMV');
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