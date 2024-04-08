import degit from "degit";
import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templateConfigPath = path.resolve(__dirname, "../template.config.json");
const templateConfig = fs.readJSONSync(templateConfigPath);

let repoList = [];

templateConfig.map((templateItem) => {
  if (templateItem?.items) {
    repoList = [...repoList, ...templateItem.items];
  } else {
    repoList = [...repoList, templateItem];
  }
});

const cloneTasks = (repoInfo) => {
  return new Promise((resolve) => {
    const emitter = degit(repoInfo.repo, {
      cache: false,
      force: true,
      verbose: false,
    });

    emitter.on("info", (info) => {
      console.log(info.message);
    });

    emitter.clone(`./templates/${repoInfo.name}`).then(() => {
      const exisIgnoreFile = fs.existsSync(
        path.resolve(__dirname, `../templates/${repoInfo.name}/.gitignore`)
      );

      if (exisIgnoreFile) {
        fs.rmSync(
          path.resolve(
            __dirname,
            `../templates/${repoInfo.name}/pnpm-lock.yaml`
          )
        );
        fs.renameSync(
          path.resolve(__dirname, `../templates/${repoInfo.name}/.gitignore`),
          path.resolve(__dirname, `../templates/${repoInfo.name}/_gitignore`)
        );
      }
      resolve();
    });
  });
};

const main = () => {
  Promise.all(repoList.map((item) => cloneTasks(item)));
};
main();
