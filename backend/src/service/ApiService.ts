/*
 * @Description: 逻辑层
 * @Usage: 
 * @Author: xxx
 * @Date: 2020-12-22 15:24:25
 * @LastEditTime: 2022-03-08 10:58:29
 */

import { Service, BaseService, Config } from "koatty";
import { App } from '../App';
import {
    banner, BannerType, personalized_newsong,
    personalized_mv, personalized_djprogram, personalized,
    playlist_catlist, lyric, song_detail, song_url, top_mv, MvArea,
    top_playlist_highquality,
    playlist_detail,
} from "NeteaseCloudMusicApi";
import { CacheAble } from "koatty_cacheable";

@Service()
export class ApiService extends BaseService {
    app: App;

    /**
     *
     *
     * @param {number} limit
     * @returns {*}  
     * @memberof ApiService
     */
    async newSong(limit: number) {
        const res = await personalized_newsong({
            limit
        });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    async personalized(limit: number) {
        const res = await personalized({
            limit
        });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    /**
     *
     *
     * @param {BannerType} [type=0]
     * @returns {*}  
     * @memberof ApiService
     */
    async banner(type: BannerType = 0) {
        const res = await banner({ type });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    /**
     *
     *
     * @returns {*}  
     * @memberof ApiService
     */
    @CacheAble("mv")
    async mv() {
        const res = await personalized_mv({});
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
    @CacheAble("djprogram")
    async djprogram() {
        const res = await personalized_djprogram({});
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
    @CacheAble("catlist")
    async catlist() {
        const res = await playlist_catlist({});
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    async lyric(id: number) {
        const res = await lyric({ id });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
    async songDetail(ids: string) {
        const res = await song_detail({ ids });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
    async songUrl(id: string, br = 999000) {
        const res = await song_url({ id, br });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    async topMv(limit: number, area: MvArea, offset: number) {
        const res = await top_mv({ limit, area, offset });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
    async topPlaylistHighquality(limit: number, cat: string, before: number) {
        const res = await top_playlist_highquality({ limit, cat, before });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }

    async playlistDetail(id: number, s: number) {
        const res = await playlist_detail({ id, s });
        if (res.status === 200) {
            return res.body;
        }
        return {};
    }
}