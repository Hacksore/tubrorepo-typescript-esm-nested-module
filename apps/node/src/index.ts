import { getCoreVersion } from "@acme/api/core";
import { getGithubVersion } from "@acme/api/github";

setInterval(() => {
  console.log("core", getCoreVersion());
  console.log("github", getGithubVersion());
}, 1000);
