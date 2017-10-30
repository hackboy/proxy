/**
 * 使用express作为代理服务器
 * 提供请求转发以及静态页面服务器功能
 */

const express = require('express');
const path = require('path');
const request = require('request');

function createProxy(api) {
    const app = express();
    // 配置静态文件服务中间件
    app.use(express.static(__dirname)); //默认静态资源index.html和node代码在一个目录下
    app.use('/', function(req, res) {
        let url = api + req.url;
        req.pipe(request(url)).pipe(res);
    });
    return app;
}

function start(config) {
    var app = createProxy(config.api)
        //前端ajax地址写 http://127.0.0.1:port/
    app.listen(config.port, '127.0.0.1', function() {
        console.log(`server is running at port ${config.port}`);
    });
}

exports.start = start;