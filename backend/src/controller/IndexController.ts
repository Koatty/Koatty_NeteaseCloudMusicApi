/*
 * @Description: 业务层
 * @Usage: 接收处理路由参数
 * @Author: xxx
 * @Date: 2020-12-22 15:31:17
 * @LastEditTime: 2022-03-15 18:35:50
 */

import {
  Controller, Autowired, GetMapping, Post, PostMapping, KoattyContext,
  Before, HttpController, Get, Config, RequestParam
} from 'koatty';
import { Valid, Validated } from 'koatty_validation';
import { BannerType, MvArea } from 'NeteaseCloudMusicApi';
import { App } from '../App';
import { ApiService } from "../service/ApiService";

@Controller('/v1')
export class IndexController extends HttpController {
  app: App;
  ctx: KoattyContext;

  @Autowired()
  apiService: ApiService;

  /**
   * @api {get} / index接口
   * @apiGroup Test
   * 
   * 
   * @apiSuccessExample {json} Success
   * {"code":1,"message":"","data":{}}
   * 
   * @apiErrorExample {json} Error
   * {"code":0,"message":"错误信息","data":null}
   */
  @GetMapping("/personalized/newsong")
  newSong(@Get("limit") limit = 10): Promise<any> {
    return this.apiService.newSong(limit);
  }

  @GetMapping("/personalized")
  personalized(@Get("limit") limit = 10): Promise<any> {
    return this.apiService.personalized(limit);
  }

  @GetMapping("/banner")
  banner(@Get("type") type: BannerType = 0) {
    return this.apiService.banner(type);
  }

  @GetMapping("/personalized/mv")
  mv() {
    return this.apiService.mv();
  }

  @GetMapping("/personalized/djprogram")
  djprogram() {
    return this.apiService.djprogram();
  }
  @GetMapping("/playlist/catlist")
  catlist() {
    return this.apiService.catlist();
  }
  @GetMapping("/lyric")
  lyric(@Get("id") @Valid(["IsNotEmpty", "IsNotIn"], { message: "id is not empty", value: [111] }) id: number) {
    return this.apiService.lyric(id);
  }
  @GetMapping("/song/detail")
  detail(@Get("ids") @Valid("IsNotEmpty", "ids is not empty") ids: string) {
    return this.apiService.songDetail(ids);
  }
  @GetMapping("/song/url")
  url(@Get("id") @Valid("IsNotEmpty", "id is not empty") id: string, @Get("br") br = 999000) {
    return this.apiService.songUrl(id, br);
  }

  @GetMapping("/top/mv")
  topMv(@Get("limit") limit = 10, @Get("area") area: MvArea = MvArea.all, @Get("offset") offset = 0) {
    return this.apiService.topMv(limit, area, offset);
  }

  @GetMapping("/top/playlist/highquality")
  topPlaylistHighquality(@Get("limit") limit = 10, @Get("cat") cat: string, @Get("before") before = 0) {
    return this.apiService.topPlaylistHighquality(limit, cat, before);
  }

  @GetMapping("/playlist/detail")
  playlistDetail(@Get("id") id: number, @Get("s") s = 8) {
    return this.apiService.playlistDetail(id, s);
  }
}
