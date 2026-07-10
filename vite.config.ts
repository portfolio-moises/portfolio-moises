import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

declare const process: {
  env: Record<string, string | undefined>;
};

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase =
  process.env.GITHUB_PAGES === "true" && repoName && !repoName.endsWith(".github.io") ? `/${repoName}/` : "/";

export default defineConfig({
  base: process.env.VITE_BASE_PATH || githubPagesBase,
  plugins: [react()],
});
