import { Youtube } from "../../src/plats/youtube";

const ins = new Youtube();

await ins.search({
  keyword: "bánh tráng",
  hl: "vi",
  gl: "VN",
  filter: null,
});
