import { findTemplateByName } from "..";

export function isValidPackageName(projectName: string) {
  return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
    projectName
  );
}

export function isValidTemplate(name?: string) {
  if (typeof name === "string") {
    if (findTemplateByName(name)) {
      return true;
    }
  } else {
    return false;
  }
}
