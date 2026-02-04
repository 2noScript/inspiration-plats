import type {
  platData,
  PlatsName,
  searchData,
  searchParams,
  TrendingTab,
} from "./type";

export abstract class PlatBase {
  abstract name: PlatsName;
  abstract tabs: TrendingTab[];

  abstract topics(): Promise<platData>;
  abstract posts(): Promise<platData>;
  abstract creators(): Promise<platData>;
  abstract search(params: searchParams): Promise<platData>;
}
