/*
 * @Description: 业务层
 * @Usage: 接收处理路由参数
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2022-03-08 14:46:38
 */

import { KoattyContext, Controller, HttpController, Autowired, GetMapping } from 'koatty';
import { App } from '../App';
// import { TestService } from '../service/TestService';

@Controller('/v1')
export class PersonController extends HttpController {
  app: App;
  ctx: KoattyContext;

  // @Autowired()
  // protected TestService: TestService;

  /**
   * Custom constructor
   *
   */
  init() {
    //todo
  }

  /**
   * 前置登录检查
   * AOP前置切面方法，功能类似于@BeforeEach()
   * @returns {*}  {Promise<any>}
   * @memberof TestController
   */
  // async __before(): Promise<any> {
  //   // 登录检查
  //   const token = this.header("x-access-token");
  //   const isLogin = await this.TestService.checkLogin(token);
  //   if (isLogin) {
  //     this.ctx.userId = `${Date.now()}_${String(Math.random()).substring(2)}`;
  //   } else {
  //     return this.fail('no login', { needLogin: 1 });
  //   }
  // }

  /**
   * index 接口
   *
   * @returns
   * @memberof PersonController
   */
  @GetMapping('/mine')
  user() {
    return {};
  }
  @GetMapping('/likelist')
  likelist() {
    return {};
  }



}