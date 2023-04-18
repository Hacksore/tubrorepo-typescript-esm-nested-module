import { getCoreVersion } from "@acme/api/core";
import { getGithubVersion } from "@acme/api/github";
import { TIME_STAMP } from "./utils";

setInterval(() => {
  console.log("core", getCoreVersion());
  console.log("github", getGithubVersion());
  console.log(TIME_STAMP)

}, 1000);
