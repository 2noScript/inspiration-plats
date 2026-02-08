import { Youtube } from "../../src/plats/youtube";
import config from "../../config.dev.json"

const ins = new Youtube();
ins.setConfig(config["youtube"])

await ins.search({
  keyword: "bánh tráng",
  hl: "vi",
  gl: "VN",
  filter: null,
});
