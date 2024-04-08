import { program } from "commander";
import { welcomeAction } from "../action/index";

export const registerPrograneOption = () => {
  program.option("-n, --name [name]", "Your name").action(welcomeAction);
};
