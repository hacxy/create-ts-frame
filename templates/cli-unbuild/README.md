# CLI Unbuild Template

This is a CLI application project template with TypeScript as the main development language and [unbuild](https://github.com/unjs/unbuild) as the packaging and building tool. It allows you to quickly set up a CLI application project without the need for `watch` and `build`. You do not need to use any other build tools to monitor the `ts` code construction.

English | [简体中文](https://github.com/hacxy/cli-template/blob/main/README_zh.md)

> requires Node.js version 18+, 20+

## Craete

- Use `create-ts-frame` to create a project locally

When executing the creation command, you can specify the project name and template name through options.

```sh
# npm 7+, extra double-dash is needed:
npm create ts-frame@latest my-cli-app -- --template cli

# yarn
yarn create ts-frame my-cli-app --template cli

# pnpm
pnpm create ts-frame my-cli-app --template cli

# Bun
bun create ts-frame my-cli-app --template cli
```

## Install dependencies.

```sh
cd my-cli-project
npm install
```

## Development

- dev

Use [unbuild](https://github.com/unjs/unbuild) to stub the dist folder, without needing to watch and rebuild during development and output the .d.ts type declaration file. You can configure it through `build.config.ts`.

To link the package globally, use `npm link`, then run `hello-cli` to preview the default content.

```sh
npm run dev
```

- build

```sh
npm run build
```

Build code for production environment

- typecheck

```sh
npm run typecheck
```

Perform type checking for this project.
