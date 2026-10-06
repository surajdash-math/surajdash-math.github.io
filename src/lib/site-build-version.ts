import { execFileSync } from "node:child_process";

let revision = process.env.GITHUB_SHA;

if (!revision) {
  try {
    revision = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  } catch {
    revision = `local-${Date.now().toString(36)}`;
  }
}

export const siteBuildVersion = revision.slice(0, 12);
