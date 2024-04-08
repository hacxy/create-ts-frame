import { green } from "kolorist";
import ora from "ora";
export const sayHello = (name: string) => {
  const spinner = ora("loading...").start();

  setTimeout(() => {
    spinner.succeed(
      `🥳 ${green(
        `Hello ${name}, welcome to use the CLI application template !!`
      )}`
    );
  }, 1000);
};
