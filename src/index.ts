#!/usr/bin/env node
import {
  cleanTargetDir,
  copy,
  getArgTargetDirName,
  getArgTemplateName,
  printActionsInfo,
  rename,
} from "./utils";
import { startPrompts } from "./prompts";

const bootstrap = async () => {
  const targetDirName = getArgTargetDirName();
  const templateName = getArgTemplateName();
  const result = await startPrompts(targetDirName, templateName);

  if (result.overwrite === "yes") cleanTargetDir(result.projectTargetInfo.path);
  copy(result.templateInfo.path, result.projectTargetInfo.path);
  rename(result.projectTargetInfo.path, result.projectTargetInfo.projectName);
  printActionsInfo(result.projectTargetInfo.path);
};

bootstrap();
