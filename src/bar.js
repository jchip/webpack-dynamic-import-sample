import _ from "lodash";
import { lib1 } from "./shared/lib1";
export function bar() {
  console.log("hello from bar");
  console.log("lodash map type", typeof _.map);
  lib1();
}
