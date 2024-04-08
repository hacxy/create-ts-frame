# Create Ts Frame

A scaffolding tool for quickly creating **Typescript** project templates.

English | [简体中文](https://github.com/hacxy/create-ts-frame/blob/main/README_zh.md)

## Use

Use NPM:

```sh

npm create ts-frame@latest

```

Use Yarn:

```sh

yarn create ts-frame

```

Use PNPM:

```sh

pnpm create ts-frame

```

Use Bun:

```sh

bun create ts-frame

```

Please follow the prompts after execution.

You can also directly specify the project name and the required project template through additional command-line options. For example, to build a CLI project, please run:

```sh

# npm 7+, additional double dash is required:

npm create ts-frame@latest my-cli-app -- --template cli-tsup

# yarn:

yarn create ts-frame my-cli-app --template cli-tsup

# pnpm:

pnpm create ts-frame my-cli-app --template cli-tsup

# bun:

bun create ts-frame my-cli-app --template cli-tsup

```

## Plan & Support

| Framework & Project Type            | Support |
| ----------------------------------- | ------- |
| [CLI Application](#cli-application) | ✅      |
| [Library](#library)                 | ✅      |
| Vue                                 | 🚧      |
| React                               | 🚧      |
| Tarojs                              | 🚧      |
| Uniapp                              | 🚧      |
| Nestjs                              | 🚧      |
| React Native                        | 🚧      |
| Electron                            | 🚧      |

### CLI Application

The following is a variant of the CLI application project template.

| Variat Name | Description                                                    | Template Warehouse                              |
| ----------- | -------------------------------------------------------------- | ----------------------------------------------- |
| tsup        | CLI application project template using tsup as a build tool    | <https://github.com/hacxy/cli-unbuild-template> |
| unbuild     | CLI application project template using unbuild as a build tool | <https://github.com/hacxy/cli-unbuild-template> |

### Library

The following is a variant of the Library application project template.

| Variat Name | Description                        | Template Warehouse                                |
| ----------- | ---------------------------------- | ------------------------------------------------- |
| empty       | Empty library development template | <https://github.com/hacxy/library-empty-template> |

## License

[MIT](https://github.com/hacxy/create-ts-frame/blob/main/LICENSE)
