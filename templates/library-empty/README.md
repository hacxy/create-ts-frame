# Library Empty Template

This is a javascript library project development template that uses vite as the build tool and typescript as the main development language. The template has no other dependencies except for vite and typescript related tools.

English | [简体中文](https://github.com/hacxy/library-empty-template/blob/main/README_zh.md#library-empty-template)

## Using the Template

### Create the Template Locally

- You can quickly create the project locally using [create-ts-frame](https://github.com/hacxy/create-ts-frame)

When executing the creation command, you can specify the project name and template name through options.

```sh
# npm 7+, requires additional double dashes:
npm create ts-frame@latest my-library -- --template library-empty

# yarn
yarn create ts-frame my-library --template library-empty

# pnpm
pnpm create ts-frame my-library --template library-empty

# bun
bun create ts-frame my-library --template library-empty
```

### Install Dependencies

```sh
cd my-library
npm install
```

### Development

- Development mode

```sh
npm run dev
```

- Build production environment code

```sh
npm run build
```
