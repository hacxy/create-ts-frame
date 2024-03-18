# CLI Template

This is a template for a typescript CLI application project that does not require watching and rebuilding during development.

> requires Node.js version 18+, 20+

## Usage

### Create templates locally through degit

- Install degit

```sh
npm install -g degit
```

- Create project

```sh
degit hacxy/cli-template my-cli-project
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

## 使用方法

### 通过 degit 在本地创建模板

- 安装 degit

```sh
npm install -g degit
```

- 创建项目

```sh
degit hacxy/cli-template my-cli-project
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
