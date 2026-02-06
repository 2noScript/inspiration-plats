import { PlatBase } from "../base";
import type {
  TrendingTab,
  PlatsName,
  SearchParams,
  PlatData,
  Id,
} from "../type";

export class Tiktok extends PlatBase {
  name: PlatsName = "Tiktok";
  tabs: TrendingTab[] = ["Topics", "Posts", "Creators"];
  
  private genPostUrl(id:Id):string {
    return ""
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
}
