import _ from "lodash";
import { lib1 } from "./shared/lib1";
export function woo() {
  console.log("hello from woo");
  console.log("lodash map type", typeof _.map);
  lib1();
}
