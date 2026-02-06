


export function genTiktokReqParams(reqParams: Record<string, any>) {
  return {
    locale: "en",
    aid: 1988,
    priority_region:"US",
    region:"US",
    tz_name:"America/Los_Angeles",
    app_name:"tiktok_creator_center",
    app_language:"en",
    device_platform:"web_pc",
    device_id:"7602374749935879711",
    os:"mac",
    screen_width:1024,
    screen_height:768,
    browser_language:"en-US",
    browser_platform:"MacIntel",
    browser_name:"Mozilla",
    browser_version:"5.0+(Macintosh%3B+Intel+Mac+OS+X+10_14_6)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F138.0.0.0+Safari%2F537.36",
    Region:"US",
    Vertical:"All",
    Cursor:0,
    Count:15,
    ...reqParams,
  };
}

export function genTiktokReqHeader(reqHeader: Record<string, any>){
    return {
        accept:"application/json, text/plain, */*",
        "accept-language":"en-US,en;q=0.9",
        "agw-js-conv":"str",
        priority:"u=1, i",
        referer:"https://www.tiktok.com/tiktokstudio/inspiration",
        "sec-ch-ua":`"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"`,
        "sec-ch-ua-mobile":"?0",
        "sec-ch-ua-platform":"macOS",
        "sec-fetch-dest":"empty",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-origin",
        "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    }
}
