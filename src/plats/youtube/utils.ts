export function genYoutubeReqParams(reqParams: Record<string, any>) {
  return {};
}

export function genYoutubeHeader(reqHeader?: Record<string, any>) {
  return {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    "Accept-Language": "ko-KR,ko;q=0.9,en;q=0.8",
    Origin: "https://www.youtube.com",
    Referer: "https://www.youtube.com/",
    ...reqHeader,
  };
}
