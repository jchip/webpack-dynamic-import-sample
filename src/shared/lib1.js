import _ from "lodash";

export function lib1() {
  const funct = typeof _.map;
  console.log("+-----------------------------------------+");
  console.log("| hello from lib1                         |");
  console.log("| hello from lib1                         |");
  console.log("| hello from lib1                         |");
  console.log("| hello from lib1                         |");
  console.log("| hello from lib1                         |");
  console.log(`| typeof lodash.map   ${funct}            |`);
  console.log("+-----------------------------------------+");
}
