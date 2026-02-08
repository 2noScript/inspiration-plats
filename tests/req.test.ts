import { client } from "../src/helpers/request";

await client.get("https://httpbin.org/cookies/set/session_id/abc123");

const response = await client.get("https://example.com", {
  proxy: "socks5://127.0.0.1:1080",
});

console.log(response?.data!);
