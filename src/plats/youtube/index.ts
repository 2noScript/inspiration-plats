import { PlatBase } from "../base";
import type {
  TrendingTab,
  PlatsName,
  SearchParams,
  PlatData,
  Id,
  ChannelAnalyzeParams,
} from "../type";

import type { YoutubeLanguageCode, YoutubeRegionCode } from "./code";

export type YoutubeSearchParams = SearchParams & {
  hl: YoutubeLanguageCode;
  gl: YoutubeRegionCode;
};

export class Youtube extends PlatBase {
  name: PlatsName = "Youtube";
  tabs: TrendingTab[] = [];

  override topics(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override posts(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override creators(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }

  override search(params: YoutubeSearchParams): Promise<PlatData> {
    const { hl, gl, keyword } = params;
    const payload = {
      context: {
        client: {
          clientName: "WEB",
          clientVersion: "2.20241217.01.00",
          hl,
          gl,
        },
      },
      query: keyword,
    };

    throw new Error("Method not implemented.");
  }

  override channelAnalyze(params: ChannelAnalyzeParams): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
}
