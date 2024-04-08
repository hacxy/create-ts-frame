import { red } from "kolorist";
import prompts from "prompts";
import fs from "node:fs";
import {
  isEmpty,
  getProjectName,
  toValidPackageName,
  handleTemplatePromptsSelectChoices,
  findTemplateByName,
} from "../utils";
import CONFIG from "../config";
import { getTargetPath, getTemplatePath } from "../utils/path";
import { isValidPackageName, isValidTemplate } from "../utils/verify";

export const startPrompts = async (
  targetDirName: string | undefined,
  templateName: string | undefined
) => {
  const { defaultTargetDirName } = CONFIG;
  const promptsResult = {
    overwrite: "no",
    projectTargetInfo: {
      dirName: targetDirName || "",
      projectName: getProjectName(targetDirName || ""),
      path: getTargetPath(targetDirName || ""),
    },
    templateInfo: {
      path: getTemplatePath(templateName || ""),
      name: templateName,
      variant: findTemplateByName(templateName || "")?.items,
    },
  };

  await prompts(
    [
      {
        type: targetDirName ? null : "text",
        name: "projectTargetInfo",
        message: "Project name:",
        initial: defaultTargetDirName,
        onState: (stage) => {
          promptsResult.projectTargetInfo.dirName = stage.value;
          promptsResult.projectTargetInfo.path = getTargetPath(stage.value);
          promptsResult.projectTargetInfo.projectName = getProjectName(
            stage.value
          );
        },
      },
      {
        type:
          !fs.existsSync(targetDirName!) || isEmpty(targetDirName!)
            ? null
            : "select",
        name: "overwrite",
        message: () => {
          return (
            (targetDirName === "."
              ? "Current directory"
              : `Target directory "${targetDirName}"`) +
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
        onState(stage) {
          promptsResult.overwrite = stage.value;
        },
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
          return isValidPackageName(promptsResult.projectTargetInfo.projectName)
            ? null
            : "text";
        },
        name: "projectTargetInfo",
        message: "Package name:",
        initial: () =>
          toValidPackageName(promptsResult.projectTargetInfo.projectName),
        validate: (dir) => {
          return isValidPackageName(dir) || "Invalid package.json name";
        },
        onState(stage) {
          promptsResult.projectTargetInfo.projectName = stage.value;
          promptsResult.projectTargetInfo.path = getTargetPath(stage.value);
        },
      },
      {
        type: () => {
          const isValid = isValidTemplate(templateName);
          return isValid ? null : "select";
        },
        name: "templateInfo",
        message: "Typescript project template:",
        choices: handleTemplatePromptsSelectChoices(),
        onState(stage) {
          promptsResult.templateInfo.name = stage.value.name;
          promptsResult.templateInfo.path = stage.value.path;
          promptsResult.templateInfo.variant = findTemplateByName(
            stage.value.name
          )?.items;
        },
      },
      {
        type: () => {
          return promptsResult.templateInfo?.variant ? "select" : null;
        },
        name: "templateInfo",
        message: "Select a variant:",
        choices: () => {
          return handleTemplatePromptsSelectChoices(
            promptsResult.templateInfo?.variant
          );
        },
        onState(stage) {
          promptsResult.templateInfo.name = stage.value.name;
          promptsResult.templateInfo.path = stage.value.path;
          promptsResult.templateInfo.variant = findTemplateByName(
            stage.variant
          )?.items;
        },
      },
    ],
    {
      onCancel: () => {
        console.log(red("✖") + " Operation cancelled");
        process.exit(1);
      },
    }
  );

  return promptsResult;
};
