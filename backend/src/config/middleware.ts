/*
 * @Description: 中间件配置
 * @usage: 配置待加载的中间件及加载顺序, 中间件在middleware目录下引入
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2022-03-08 10:56:32
 */

export default {
    list: ["CorsMiddleware"], //加载的中间件列表
    config: { //中间件配置
        "CorsMiddleware": {
            //默认配置项
            'Access-Control-Allow-Credentials': "true",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
            'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
            'Content-Type': 'application/json; charset=utf-8',
        }
    }
};