import minimist from "minimist";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName
  );
}

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

export const getRootDir = (targetDir: string) => {
  return path.join(getCwd(), targetDir);
};

export const getArgv = () => {
  return minimist<{
    t?: string;
    template?: string;
  }>(process.argv.slice(2), { string: ["_"] });
};

export const getArgTargetDir = () => {
  return formatTargetDir(getArgv()._[0]);
};

export const getArgTemplate = () => {
  const argv = getArgv();
  return argv.template || argv.t;
};

export const getTemplateRootDir = () => {
  return path.resolve(__dirname, "../../templates/");
};

export const getTemplateDir = (templateName: string) => {
  return path.resolve(getTemplateRootDir(), templateName);
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

export const rename = (targetDir: string, packageName: string) => {
  const targetPath = path.join(getRootDir(targetDir));
  fs.renameSync(
    path.resolve(targetPath, "_gitignore"),
    path.resolve(targetPath, ".gitignore")
  );

  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(targetDir, "package.json"), "utf-8")
  );

  pkg.name = packageName;

  fs.writeFileSync(
    path.resolve(targetDir, "package.json"),
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

export const cleanTargetDir = (targetDir: string) => {
  fs.rmSync(getRootDir(targetDir), { force: true, recursive: true });
};
