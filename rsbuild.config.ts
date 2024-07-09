import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  source: {
    define: {
      'typeof window': JSON.stringify('undefined'),
    }
  }
});
