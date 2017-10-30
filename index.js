/**
 * 该工具支持的命令
 * port：本地开发端口
 * api:  接口地址，需要指定端口号，默认80
 */

var prompt = require('prompt')
var proxy = require('./server');

var schema = {
    properties: {
        port: {
            description: '本地开发端口，默认80',
            type: 'integer',
            default: 80
        },
        api: {
            description: '远程接口地址',
            type: 'string',
            required: true
        }
    }
}

prompt.start();

prompt.get(schema, function(err, result) {
    //根据用户参数开启代理
    console.log(`port is ${result.port} api is ${result.api}`)
    proxy.start(result)
})