# CLI Tsup Template

这是一个 Nodejs CLI 应用程序开发模板, 它使用了 typescript 作为开发语言, tsup 作为构建工具

[English](https://github.com/hacxy/cli-tsup-template?tab=readme-ov-file#cli-tsup-template) | 简体中文

## 先决条件

需要 Node.js 版本 18+、20+

## 使用模板

### 将模板创建至本地

- 您可以使用 [create-ts-frame](https://github.com/hacxy/create-ts-frame) 快速的将项目创建至您的本地

执行创建命令时可以通过选项指定项目名称和模板名称

```sh
# npm 7+, 需要额外的双破折号:
npm create ts-frame@latest my-cli-app -- --template cli-tsup

# yarn
yarn create ts-frame my-cli-app --template cli-tsup

# pnpm
pnpm create ts-frame my-cli-app --template cli-tsup

# Bun
bun create ts-frame my-cli-app --template cli-tsup
```

### 安装依赖

```sh
cd my-cli-project
npm install
```

### 开发

- 开发模式

这将启用 `watch` 模式对代码重新构建, 并输出用于 debug 的 `sourcemap` 文件

```sh
npm run dev
```

- 构建生产环境代码

```sh
npm run build
```

- 类型检查。

```sh
npm run typecheck
```

## 调试程序运行

由于我使用 `vscode` 来开发 CLI 应用程序, 所以提供了其对应的 debug 配置文件: `.vscode/launch.json`, 当您需要调试这个项目时, 首先添加断点, 之后可以按 `F5` 键来启动 Debugger 模式, 当您的 CLI 应用程序执行结束时, Debugger 模式会自动退出.

### 全局链接包

您还可以为这个包建立一个全局链接, 方便您使用真实环境来测试或者调试代码:

```sh
npm link
```

之后您就可以在您的操作系统的所有终端下任意路径下去执行命令: `hello-cli`, 这个命令对应的是该项目下的 `package.json` 文件中 `bin` 选项的值.

当您不再需要这个全局链接时, 您可以手动移除它, 在项目根目录中执行:

```sh
npm unlink -g
```

### 依赖性说明

当您的第三方库以开发时依赖 (DevDependencies) 进行安装时, 执行`npm run build` 会将这些依赖打包进生产环境代码中, 如果您使用此方式安装并构建完成后, 发现程序工作异常, 则应该尝试将其作为生产环境依赖 (Dependencies) 进行安装, 当作为生产环境依赖进行安装时, 它们不会被打包进生产环境代码中.
