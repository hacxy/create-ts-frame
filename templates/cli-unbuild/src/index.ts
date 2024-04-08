#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json";
import { registerPrograneOption } from "./option";

const bootstrap = async () => {
  program.name(pkg.name).version(pkg.version).description(pkg.description);

  registerPrograneOption();
  program.parse(process.argv);
};

bootstrap();
