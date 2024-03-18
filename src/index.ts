import prompts from "prompts";
import fs from "node:fs";
import { isString } from "tianjie";
import { cyan, red, reset } from "kolorist";
import {
  cleanTargetDir,
  copy,
  getArgTargetDir,
  getArgTemplate,
  getProjectName,
  getRootDir,
  getTemplateDir,
  isEmpty,
  isValidPackageName,
  printActionsInfo,
  rename,
  toValidPackageName,
} from "./utils";

const defaultTargetDir = "ts-project";
let targetDir: string = getArgTargetDir() || defaultTargetDir;
let template = getArgTemplate();

const bootstrap = async () => {
  const result = await prompts([
    {
      type: () => {
        return targetDir ? null : "text";
      },
      name: "projectName",
      message: "Project name:",
      initial: defaultTargetDir,
      onState(stage) {
        targetDir = stage.value || defaultTargetDir;
      },
    },
    {
      type: () => {
        return !fs.existsSync(targetDir) || isEmpty(targetDir)
          ? null
          : "select";
      },
      name: "overwrite",
      message: () => {
        return (
          (targetDir === "."
            ? "Current directory"
            : `Target directory "${targetDir}"`) +
          ` is not empty. Please choose how to proceed:`
        );
      },
      initial: 0,
      choices: [
        {
          title: "Remove existing files and continue",
          value: "yes",
        },
        {
          title: "Cancel operation",
          value: "no",
        },
        {
          title: "Ignore files and continue",
          value: "ignore",
        },
      ],
    },
    {
      type: (_, { overwrite }: { overwrite?: string }) => {
        if (overwrite === "no") {
          console.error(red("✖  Operation cancelled"));
          process.exit(1);
        }
        return null;
      },
      name: "overwriteChecker",
    },
    {
      type: () => {
        return isValidPackageName(getProjectName(targetDir)) ? null : "text";
      },
      name: "packageName",
      message: reset("Package name:"),
      initial: () => toValidPackageName(getProjectName(targetDir)),
      validate: (dir) => isValidPackageName(dir) || "Invalid package.json name",
    },
    {
      type: () => {
        return template && isString(template) ? null : "select";
      },
      name: "tsApp",
      message: "Typescript project template:",
      choices: [
        {
          title: cyan("cli"),
          value: "cli",
        },
      ],
      onState(state) {
        template = state.value;
      },
    },
  ]);

  if (result.overwrite === "yes") cleanTargetDir(targetDir);

  copy(getTemplateDir(template!), getRootDir(targetDir));

  rename(targetDir, result.packageName || getProjectName(targetDir));

  printActionsInfo(targetDir);
};
bootstrap();
