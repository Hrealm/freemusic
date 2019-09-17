let songList = require('./songList.js');
let songtabContent = require('./songtabContent.js')
let indexlist = {
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
    SongtabContent: songtabContent,
    hotMV: [
        {
            id: 1,
            mvName: 'Burn',
            picUrl: '../static/img/hotMV/1.jpg',
            url: '/#/playmv.html?mvhash=6eaf04985f9e2a62b2a7eef6e8c8a36d'
        },
        {
            id: 2,
            mvName: '爱完不完',
            picUrl: '../static/img/hotMV/2.jpg',
            url: '/#/playmv.html?mvhash=bbbb3b2aed47b46be40152d70c03bf2f'
        },
        {
            id: 3,
            mvName: '小欢喜',
            picUrl: '../static/img/hotMV/3.jpg',
            url: '/#/playmv.html?mvhash=bfd7db0af03dc6f6ebc979672dba7bb9'
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
    ],
}
module.exports = indexlist;