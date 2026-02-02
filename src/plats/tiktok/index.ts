import { PlatBase } from "../base";
import type {
  TrendingTab,
  TopicsData,
  PostsData,
  CreatorsData,
  PlatsName,
  searchData,
} from "../type";

export class Tiktok extends PlatBase {
  name: PlatsName = "Tiktok";
  tabs: TrendingTab[] = ["Topics", "Posts", "Creators"];
  override topics(): Promise<TopicsData> {
    throw new Error("Method not implemented.");
  }
  override posts(): Promise<PostsData> {
    throw new Error("Method not implemented.");
  }
  override creators(): Promise<CreatorsData> {
    throw new Error("Method not implemented.");
  }
  override search(): Promise<searchData> {
    throw new Error("Method not implemented.");
  }
}
