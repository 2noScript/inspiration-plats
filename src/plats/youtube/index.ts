import { PlatBase } from "../base";
import type {
  TrendingTab,
  PlatsName,
  SearchParams,
  PlatData,
  Id,
  ChannelAnalyzeParams,
  PlatsConfig,
} from "../type";

import type {
  YoutubeFilterCode,
  YoutubeLanguageCode,
  YoutubeRegionCode,
} from "./code";
import { client } from "../../helpers/request";
import { YOUTUBE_SEARCH } from "./endpoints";

export type YoutubeSearchParams = SearchParams & {
  hl: YoutubeLanguageCode;
  gl: YoutubeRegionCode;
  filter: YoutubeFilterCode;
};

export type YoutubeConfig = {
  apiKey: string ;
  version: string;
};

export class Youtube extends PlatBase {
  name: PlatsName = "Youtube";
  tabs: TrendingTab[] = [];
  protected config!: YoutubeConfig;

  override topics(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override posts(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override creators(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }

  override async search(params: YoutubeSearchParams): Promise<PlatData> {
    const { hl, gl, keyword, filter } = params;
    const payload = {
      context: {
        client: {
          clientName: "WEB",
          clientVersion: this.config.version,
          hl,
          gl,
        },
      },
      query: keyword,
      params: filter,
    };
    const req = await client.post(`${YOUTUBE_SEARCH}?key=${this.config.apiKey}`, payload);
    console.log(req?.data!);

    // const req
    return {
      cursor: 1,
      hasMore: true,
      total: 1,
      data: [],
    };
  }

  override channelAnalyze(params: ChannelAnalyzeParams): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
}
