import degit from "degit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoList = ["hacxy/cli-template"];

const cloner = (repo) => {
  return new Promise((resolve) => {
    const name = repo.split("/")[1].split("-")[0];
    const emitter = degit(repo, {
      cache: false,
      force: true,
      verbose: false,
    });

    emitter.on("info", (info) => {
      console.log(info.message);
    });

    emitter.clone(`./templates/${name}`).then(() => {
      const exisIgnoreFile = fs.existsSync(
        path.resolve(__dirname, `../templates/${name}/.gitignore`)
      );
      if (exisIgnoreFile)
        fs.renameSync(
          path.resolve(__dirname, `../templates/${name}/.gitignore`),
          path.resolve(__dirname, `../templates/${name}/_gitignore`)
        );
      resolve();
    });
  });
};

const main = () => {
  Promise.all(repoList.map((repo) => cloner(repo)));
};
main();
