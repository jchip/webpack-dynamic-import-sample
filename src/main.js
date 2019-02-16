import _ from "lodash";

export function main() {
  console.log("hello from main");
  console.log("lodash get:", _.get({ blah: 90 }, "blah"));

  import("./foo").then(({ foo }) => {
    foo();
  });
}
