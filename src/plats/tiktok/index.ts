import { PlatBase } from "../base";
import type {
  TrendingTab,
  PlatsName,
  searchParams,
  platData,
  Id,
} from "../type";

export class Tiktok extends PlatBase {
  name: PlatsName = "Tiktok";
  tabs: TrendingTab[] = ["Topics", "Posts", "Creators"];
  
  private genPostUrl(id:Id):string {
    return ""
  }

  override topics(): Promise<platData> {
    throw new Error("Method not implemented.");
  }
  override posts(): Promise<platData> {
    throw new Error("Method not implemented.");
  }
  override creators(): Promise<platData> {
    throw new Error("Method not implemented.");
  }
  override search(params: searchParams): Promise<platData> {
    throw new Error("Method not implemented.");
  }
}
