/*
 * @Description: 业务层
 * @Usage: 接收处理路由参数
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2022-03-08 10:52:24
 */

import { KoattyContext, Controller, HttpController, Autowired, GetMapping } from 'koatty';
import { App } from '../App';
// import { TestService } from '../service/TestService';

@Controller('/')
export class IndexController extends HttpController {
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
   * index 接口
   *
   * @returns
   * @memberof IndexController
   */
  @GetMapping('/')
  index(): Promise<any> {
    return this.ctx.render('index.html');
  }

}