const http = require('http');
const url = require('url');
let songList = require('./songList.js');
let server = http.createServer();
server.on('request',(req,res)=>{
    const parseObj = url.parse(req.url,true);
    const pathName = parseObj.pathname;
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
        songList: songList,
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
                    time: '04:31',
                    musicInfo: {
                        title: '特色女嗓 · 爆破型鬼才声线集',
                        artist: 'Hrealm',
                        src: 'https://music.163.com/song/media/outer/url?id=1298111231.mp3',
                        pic: '../static/img/songList/1.jpg',
                        lrc: "[00:00.00]lrc here\n[00:01.00]aplayer"
                    }
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
                    name: 'Ava Max - Torn',
                    time: '03:18'
                },
                {
                    id: 5,
                    name: 'XXXTENTACION、Rico Nasty - #PROUDCATOWNERREMIX',
                    time: '02:37'
                },
                {
                    id: 6,
                    name: 'Mura Masa、Clairo - I Don t Think I Can Do This Again',
                    time: '03:42'
                },
                {
                    id: 7,
                    name: 'BROCKHAMPTON - NO HALO',
                    time: '04:19'
                },
                {
                    id: 8,
                    name: 'Mena Massoud、Naomi Scott - Desert Moon (From  Aladdin )',
                    time: '02:52'
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
                    name: '金请夏 - 그 끝에 그대 (at the end)【德鲁纳酒店 OST】',
                    time: '03:44'
                },
                {
                    id: 3,
                    name: 'Red Velvet - 어떤 별보다 (See the star)【德鲁纳酒店 OST】',
                    time: '03:42'
                },
                {
                    id: 4,
                    name: 'Gummy - 기억하나요 내 모든 날과 그때를 (Remember me)【德鲁纳酒店 OST】',
                    time: '03:48'
                },
                {
                    id: 5,
                    name: '라비(RAVI)、颂乐 - LEOPARD (Prod. Cosmic Boy)',
                    time: '02:53'
                },
                {
                    id: 6,
                    name: 'JINU(金秦禹)、MINO(宋旻浩) - CALL ANYTIME',
                    time: '03:14'
                },
                {
                    id: 7,
                    name: '尹美莱 - My Dream【新入史官具海玲 OST】',
                    time: '03:54'
                },
                {
                    id: 8,
                    name: 'SHAUN - 36.5',
                    time: '03:36'
                }
            ],
            Japan: [
                {
                    id: 1,
                    name: 'GENERATIONS from EXILE TRIBE - DREAMERS',
                    time: '04:35'
                },
                {
                    id: 2,
                    name: '米津玄師 - Ghosts of the Sea【海兽之子主题曲】',
                    time: '03:54'
                },
                {
                    id: 3,
                    name: 'BTS（防弹少年团） - Lights',
                    time: '04:52'
                },
                {
                    id: 4,
                    name: '須田景凪 - Veil【炎炎消防队片尾曲】',
                    time: '03:29'
                },
                {
                    id: 5,
                    name: 'Aimer - Torches【海盗战记片尾曲】',
                    time: '04:54'
                },
                {
                    id: 6,
                    name: 'TWICE - Happy Happy',
                    time: '03:27'
                },
                {
                    id: 7,
                    name: 'Monsta X - Carry on',
                    time: '03:39'
                },
                {
                    id: 8,
                    name: 'GOT7 - 備忘録',
                    time: '03:08'
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
        ],
        hotRadio: [
            {
                id: 1,
                name: '向北',
                picUrl: '../static/img/hotRadio/1.jpg'
            },
            {
                id: 2,
                name: 'IEMC国际电子音乐大赛',
                picUrl: '../static/img/hotRadio/2.jpg'
            },
            {
                id: 3,
                name: 'XDeep Music',
                picUrl: '../static/img/hotRadio/3.jpg'
            },
            {
                id: 4,
                name: 'Monstercat: Call of the Wild',
                picUrl: '../static/img/hotRadio/4.jpg'
            },
            {
                id: 5,
                name: 'PurpleDeep Radio',
                picUrl: '../static/img/hotRadio/5.jpg'
            },
            {
                id: 6,
                name: 'FEVER Electronic Music Series',
                picUrl: '../static/img/hotRadio/6.jpg'
            },
            {
                id: 7,
                name: '晚安城市',
                picUrl: '../static/img/hotRadio/7.jpg'
            },
            {
                id: 8,
                name: '小小世界',
                picUrl: '../static/img/hotRadio/8.jpg'
            },
            {
                id: 9,
                name: '潇洒办事处',
                picUrl: '../static/img/hotRadio/9.jpg'
            },
            {
                id: 10,
                name: 'Tt-GT音乐电台',
                picUrl: '../static/img/hotRadio/10.jpg'
            },
            {
                id: 11,
                name: '米莉.听见花开',
                picUrl: '../static/img/hotRadio/11.jpg'
            },
            {
                id: 12,
                name: '就在不远方',
                picUrl: '../static/img/hotRadio/12.jpg'
            }
        ],
        hotSinger: [
            {
                id: 1,
                name: 'Alan Walker',
                picUrl: '../static/img/hotSinger/1.jpg'
            },
            {
                id: 2,
                name: 'Taylor Swift',
                picUrl: '../static/img/hotSinger/2.jpg'
            },
            {
                id: 3,
                name: 'Imagine Dragons',
                picUrl: '../static/img/hotSinger/3.jpg'
            },
            {
                id: 4,
                name: 'LINKIN PARK',
                picUrl: '../static/img/hotSinger/4.jpg'
            },
            {
                id: 5,
                name: 'Michael Jackson',
                picUrl: '../static/img/hotSinger/5.jpg'
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
        case '/hotRadio':
            reJson('hotRadio');
            break;
        case '/hotSinger':
            reJson('hotSinger');
            break;
        default:
            break;

    }

    function reJson(route) {
        if(parseObj.query.id){
            let id = parseObj.query.id;
            //根据Id取出数组中指定的对象
            let result = data[route].find((item)=>{
                return item.id == id;
            })
            res.end(JSON.stringify(result));
        }else{
            res.end(JSON.stringify(data[route]));
        }
    }
});

server.listen(8899,()=>{
    console.log('服务器启动成功');
})