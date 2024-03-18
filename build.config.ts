import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: [
    "src/index",
    // rollup builder transpiles file-to-file keeping original sources structure
    {
      builder: "rollup",
      input: "./src/utils/index",
      outDir: "./dist/utils",
    },
  ],
  clean: true,

  // Generates .d.ts declaration file
  declaration: false,

  // Change outDir, default is 'dist'
  outDir: "dist",

  rollup: {
    inlineDependencies: true,
    esbuild: {
      target: "node18",
      minify: true,
    },
  },
  alias: {
    // we can always use non-transpiled code since we support node 18+
    prompts: "prompts/lib/index.js",
  },
});
