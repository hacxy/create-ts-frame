import prompts from "prompts";

const bootstrap = async () => {
  const result = await prompts([
    {
      type: "text",
      message: "Your name?",
      name: "name",
    },
    {
      type: "select",
      message: "Your gender?",
      name: "gender",
      choices: [
        {
          title: "male",
          value: "male",
        },
        {
          title: "female",
          value: "female",
        },
      ],
    },
  ]);

  console.log(result);
};
bootstrap();
