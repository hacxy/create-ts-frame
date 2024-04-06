# CLI Template

This is a template for a typescript CLI application project that does not require watching and rebuilding during development.

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
bun x create-ts-frame my-cli-app --template cli
```

## Install dependencies.

```sh
cd my-cli-project
npm install
```

## Development

- dev

```sh
npm run dev
```

Use [unbuild](https://github.com/unjs/unbuild) to stub the dist folder, without needing to watch and rebuild during development and output the .d.ts type declaration file. You can configure it through `build.config.ts`.

To link the package globally, use `npm link`, then run `hello-cli` to preview the default content.

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

---

# CLI Template

这是一个 TypeScript CLI 应用程序项目的模板，开发过程中不需要监听和重新打包。

> 需要 Node.js 版本 18+、20+

## 创建

- 使用 `create-ts-frame` 创建项目至本地

执行创建命令时可以通过选项指定项目名称和模板名称

```sh
# npm 7+, 需要额外的双破折号:
npm create ts-frame@latest my-cli-app -- --template cli

# yarn
yarn create ts-frame my-cli-app --template cli

# pnpm
pnpm create ts-frame my-cli-app --template cli

# Bun
bun x create-ts-frame my-cli-app --template cli
```

## 安装依赖.

```sh
cd my-cli-project
npm install
```

## 开发

- dev

```sh
npm run dev
```

使用 [unbuild](https://github.com/unjs/unbuild) 来存根 dist 文件夹，在开发过程中无需观察和重建，并输出 .d.ts 类型声明文件。您可以通过 `build.config.ts` 进行配置。

要全局链接包，请使用 `npm link`，然后运行 `hello-cli` 预览默认内容。

- build

```sh
npm run build
```

为生产环境构建代码

- typecheck

```sh
npm run typecheck
```

对此项目执行类型检查。
