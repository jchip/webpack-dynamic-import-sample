import _ from "lodash";
import { lib1 } from "./shared/lib1";
import { bar } from "./bar";
export function foo() {
  console.log("hello from foo");
  console.log("lodash map type", typeof _.map);
  lib1();
  bar();
}
