import { PlatBase } from "../base";
import type {
  TrendingTab,
  PlatsName,
  SearchParams,
  PlatData,
  Id,
  ChannelAnalyzeParams,
} from "../type";


export type TiktokConfig={
  cookie:"",
}

export class Tiktok extends PlatBase {
  name: PlatsName = "Tiktok";
  tabs: TrendingTab[] = ["Topics", "Posts", "Creators"];
  protected config!: TiktokConfig;

  private genPostUrl(id: Id): string {
    return "";
  }

  override topics(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override posts(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override creators(): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override search(params: SearchParams): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
  override channelAnalyze(params: ChannelAnalyzeParams): Promise<PlatData> {
    throw new Error("Method not implemented.");
  }
}
