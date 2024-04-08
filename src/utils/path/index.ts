import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

export function getAppRootPath() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  let rootPath = __dirname;
  while (!fs.existsSync(path.join(rootPath, "package.json"))) {
    rootPath = path.join(rootPath, "..");
  }
  return rootPath;
}

export function getTemplatePath(templateName: string) {
  return path.join(getAppRootPath(), "templates", templateName);
}

export function getTargetPath(projectName: string) {
  return path.join(process.cwd(), projectName);
}
