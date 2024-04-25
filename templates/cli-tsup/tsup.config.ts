import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  bundle: true,
  clean: true,
  minify: true
  // dts: true,
  // watch: true,
  // treeshake: true,
});
