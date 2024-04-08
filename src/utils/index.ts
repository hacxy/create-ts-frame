import minimist from "minimist";
import fs from "node:fs";
import path from "node:path";
import { getTemplatePath } from "./path";
import CONFIG from "../config";

export function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file);
    const destFile = path.resolve(destDir, file);
    copy(srcFile, destFile);
  }
}

export function copy(src: string, dest: string) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

export function isEmpty(path: string) {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === ".git");
}

export const getProjectName = (targetDir: string) => {
  return targetDir === "." ? path.basename(path.resolve()) : targetDir;
};

export function toValidPackageName(projectName: string) {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^[._]/, "")
    .replace(/[^a-z\d\-~]+/g, "-");
}

export function formatTargetDir(targetDir: string | undefined) {
  return targetDir?.trim().replace(/\/+$/g, "");
}

export const getCwd = () => {
  return process.cwd();
};

// 处理选项和参数
export const getArgv = () => {
  return minimist<{
    t?: string;
    template?: string;
  }>(process.argv.slice(2), { string: ["_"] });
};

// 获取命令选项参数中的模板名称
export const getArgTemplateName = () => {
  const argv = getArgv();
  return argv.template || argv.t;
};

// 获取命令传入的目标文件夹名称
export const getArgTargetDirName = (): string | undefined => {
  return formatTargetDir(getArgv()._[0]);
};

export function getPkgFromUserAgent(userAgent: string | undefined) {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1],
  };
}

export const getPkgInfo = () => {
  const pkgInfo = getPkgFromUserAgent(process.env.npm_config_user_agent);
  return pkgInfo;
};

export const getPkgManager = () => {
  const pkgInfo = getPkgInfo();
  return pkgInfo ? pkgInfo.name : "npm";
};

export const rename = (targetDirPath: string, packageName: string) => {
  fs.renameSync(
    path.resolve(targetDirPath, "_gitignore"),
    path.resolve(targetDirPath, ".gitignore")
  );

  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(targetDirPath, "package.json"), "utf-8")
  );

  pkg.name = packageName;

  fs.writeFileSync(
    path.resolve(targetDirPath, "package.json"),
    JSON.stringify(pkg, null, 2) + "\n"
  );
};

export const printActionsInfo = (targetDir: string) => {
  const pkgManager = getPkgManager();
  console.log();
  console.log(`  cd ${targetDir}`);
  switch (pkgManager) {
    case "yarn":
      console.log("  yarn");
      console.log("  yarn dev");
      break;
    default:
      console.log(`  ${pkgManager} install`);
      console.log(`  ${pkgManager} run dev`);
      break;
  }
  console.log();
};

export const cleanTargetDir = (path: string) => {
  fs.rmSync(path, { force: true, recursive: true });
};

export const handleTemplatePromptsSelectChoices = (variantItems?: any[]) => {
  const tempConfig = variantItems || CONFIG.templateConfig;
  return tempConfig.map((templateItem) => {
    return {
      title: templateItem.title,
      description: templateItem.description,
      value: {
        path: getTemplatePath(templateItem.name),
        name: templateItem.name,
        variant: templateItem.items,
      },
    };
  });
};

export const flatTemplateConfig = () => {
  let finalTemplateConfig: any = [];
  CONFIG.templateConfig.forEach((item) => {
    if (item.items) {
      finalTemplateConfig = [...finalTemplateConfig, item, ...item.items];
    } else {
      finalTemplateConfig.push(item);
    }
  });

  return finalTemplateConfig;
};

export const findTemplateByName = (name: string) => {
  const config = flatTemplateConfig();
  return config.find((item: any) => item.name === name);
};
