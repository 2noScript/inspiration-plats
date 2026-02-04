export type PlatsName = "Tiktok" | "Youtube" | "Facebook";

export type TrendingTab = "Topics" | "Posts" | "Creators" | "Viral";
export type Id = string | number;

export type ScoreSeries = {
  timestamp: string;
  value: string;
};

export type TopicExtraData = {
  id: Id;
  name: string;
  cover: string;
  hashtags: string[];
  likeCount?: number;
  playCount?: number;
};

export type TopicData = {
  id: Id;
  title: string;
  desc?: string;
  rank: number;
  scoreSeries?: ScoreSeries[];
  playCount: number;
  cover: string;
};

export type PostData = {};

export type CreatorData = {};

export type searchData = {};

export type TopicReqParams = {};

export type platData = {
  cursor?: number;
  hasMore: boolean;
  total: number;
  data: PostData[] | CreatorData[] | searchData[];
  updateAt?: string | number;
};

export type searchParams = {
  keyword: string;
  count: number;
  [key: string]: any;
};
