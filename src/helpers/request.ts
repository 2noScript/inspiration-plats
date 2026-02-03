import request, { type HttpVerb, type Options } from "sync-request-curl";



export function curlJson(method: HttpVerb, endpoint: string, options: Options) {
  const res = request(method, endpoint, options);
  try {
    return {
      code: res.statusCode,
      data: JSON.parse(res.body.toString()),
      status: 0,
    };
  } catch (err) {
    return {
      code: res.statusCode,
      data: res.body.toString(),
      message: err,
      status: 1,
    };
  }
}
