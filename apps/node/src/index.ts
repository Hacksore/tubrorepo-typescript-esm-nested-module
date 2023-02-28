import { getCoreVersion } from "@acme/api/core";
import { getGithubVersion } from "@acme/api/github";

setInterval(() => {
  console.log(getCoreVersion());
  console.log(getGithubVersion());
}, 1000);
