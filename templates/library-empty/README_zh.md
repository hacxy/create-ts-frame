# Library Empty Template

这是一个由 vite 作为构建工具并且使用 typescript 作为主要开发语言的 javascript 库项目开发模板, 该模板除 vite 以及 typescript 相关工具之外没有任何其他依赖.

[English](https://github.com/hacxy/library-empty-template?tab=readme-ov-file#library-empty-template) | 简体中文

## 使用模板

### 将模板创建至本地

- 您可以使用 [create-ts-frame](https://github.com/hacxy/create-ts-frame) 快速的将项目创建至您的本地

执行创建命令时可以通过选项指定项目名称和模板名称

```sh
# npm 7+, 需要额外的双破折号:
npm create ts-frame@latest my-library -- --template library-empty

# yarn
yarn create ts-frame my-library --template library-empty

# pnpm
pnpm create ts-frame my-library --template library-empty

# bun
bun create ts-frame my-library --template library-empty
```

### 安装依赖

```sh
cd my-library
npm install
```

### 开发

- 开发模式

```sh
npm run dev
```

- 构建生产环境代码

```sh
npm run build
```
