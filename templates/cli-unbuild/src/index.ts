#!/usr/bin/env node
import chalk from "chalk";
import prompts from "prompts";
import ora from "ora";

let name = "";
process.argv.find((arg, index, args) => {
  if (arg === "--name") name = args[index + 1];
});

const bootstrap = async () => {
  await prompts({
    type: name ? null : "text",
    name: "name",
    message: "Your name: ",
    onState(stage) {
      name = stage.value;
    },
  });

  const spinner = ora("Loading ...").start();

  setTimeout(() => {
    spinner.succeed(
      chalk.green(`🥳 Hello ${name}! Welcome to use the CLI Unbuild Template.`)
    );
  }, 1000);
};

bootstrap();
