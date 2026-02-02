import type {
  CreatorsData,
  PlatsName,
  PostsData,
  searchData,
  searchParams,
  TopicsData,
  TrendingTab,
} from "./type";

export abstract class PlatBase {
  abstract name: PlatsName;
  abstract tabs: TrendingTab[];

  abstract topics(): Promise<TopicsData>;
  abstract posts(): Promise<PostsData>;
  abstract creators(): Promise<CreatorsData>;
  abstract search(params: searchParams): Promise<searchData>;
}
