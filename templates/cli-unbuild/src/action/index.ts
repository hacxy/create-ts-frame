import { sayHello } from "../utils/index";
import prompts from "prompts";

export const welcomeAction = async (options: { name?: string | true }) => {
  let username = "";
  if (typeof options.name === "string") {
    username = options.name;
  }

  await prompts([
    {
      type: username ? null : "text",
      message: "Your name?",
      onState(state) {
        username = state.value;
      },
      name: "name",
    },
  ]);

  sayHello(username);
};
