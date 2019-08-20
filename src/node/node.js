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
        ]
    }

    switch (pathName){
        case '/banner':
            reJson('banner');
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