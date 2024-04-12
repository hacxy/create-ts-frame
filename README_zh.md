# 📦 Create Typescript Frame

用于快速创建 **Typescript** 项目模板的脚手架工具。

[English](https://github.com/hacxy/create-ts-frame?tab=readme-ov-file#-create-typescript-frame) | 简体中文

## 使用

使用 npm：

```sh
npm create ts-frame@latest
```

使用 yarn：

```sh
yarn create ts-frame
```

使用 pnpm：

```sh
pnpm create ts-frame
```

使用 bun：

```sh
bun create ts-frame
```

国内用户可以使用 cnpm:

```sh
cnpm create ts-frame
```

执行后请按提示操作.

你还可以通过额外的命令行选项直接指定项目名称和需要的项目模板。例如，要搭建一个 CLI 项目，请运行：

```sh
# npm 7+, 需要额外的双破折号:
npm create ts-frame@latest my-cli-app -- --template cli-tsup

# yarn：
yarn create ts-frame my-cli-app --template cli-tsup

# pnpm：
pnpm create ts-frame my-cli-app --template cli-tsup

# Bun：
bun create ts-frame my-cli-app --template cli-tsup
```

## 计划&支持

| 框架&项目类型                       | 支持 |
| ----------------------------------- | ---- |
| [CLI Application](#cli-application) | ✅   |
| [Library](#library)                 | ✅   |
| Vue                                 | 🚧   |
| React                               | 🚧   |
| Tarojs                              | 🚧   |
| Uniapp                              | 🚧   |
| Nestjs                              | 🚧   |
| React Native                        | 🚧   |
| Electron                            | 🚧   |

### CLI Application

以下是 CLI 应用程序项目模板的变种

| 变种名称 | 描述                                             | 模板仓库                                        |
| -------- | ------------------------------------------------ | ----------------------------------------------- |
| tsup     | 使用 tsup 作为构建工具的 CLI 应用程序项目模板    | <https://github.com/hacxy/cli-unbuild-template> |
| unbuild  | 使用 unbuild 作为构建工具的 CLI 应用程序项目模板 | <https://github.com/hacxy/cli-unbuild-template> |

### Library

以下是 Library 项目模板的变种

| 变种名称 | 描述                     | 模板仓库                                             |
| -------- | ------------------------ | ---------------------------------------------------- |
| empty    | 空的库开发模板           | <https://github.com/hacxy/library-empty-template>    |
| complete | 具有完整设施的库开发模板 | <https://github.com/hacxy/library-complete-template> |

## 许可证

[MIT](https://github.com/hacxy/create-ts-frame/blob/main/LICENSE)
