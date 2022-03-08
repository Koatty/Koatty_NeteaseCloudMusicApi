/*
 * @Description: 中间件
 * @Usage: 
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2022-03-07 15:48:46
 */

import { KoattyContext, Middleware, IMiddleware, KoattyNext } from 'koatty';
import { App } from '../App';

const defaultOpt = {
    //默认配置项
    'Access-Control-Allow-Credentials': "true",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json; charset=utf-8',
};


@Middleware()
export class CorsMiddleware implements IMiddleware {
    run(options: any, app: App) {
        options = { ...defaultOpt, ...options };
        //应用启动执行一次
        // todo
        return function (ctx: KoattyContext, next: KoattyNext) {
            options['Access-Control-Allow-Origin'] = ctx.request.header['origin'] || options['Access-Control-Allow-Origin'];
            ctx.set(options);

            return next();
        };
    }
}