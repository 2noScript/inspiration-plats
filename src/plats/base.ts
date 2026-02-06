import type {
  PlatData,
  PlatsName,
  SearchParams,
  TrendingTab,
} from "./type";



export abstract class PlatBase {
  abstract name: PlatsName;
  abstract tabs: TrendingTab[];

  abstract topics(): Promise<PlatData>;
  abstract posts(): Promise<PlatData>;
  abstract creators(): Promise<PlatData>;
  abstract search(params: SearchParams): Promise<PlatData>;
}
