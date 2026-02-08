import { PlatBase } from "../base";
import type {
  PlatsName,
  TrendingTab,
  PlatData,
  SearchParams,
  ChannelAnalyzeParams,
} from "../type";


export type FacebookConfig={
    apiKey:string

}

export class Facebook extends PlatBase {
  override name!: PlatsName;
  override tabs!: TrendingTab[];
  protected config!: FacebookConfig;
  

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
