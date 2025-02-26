import {
  backendMobileFramework,
  command,
  cssFrameworkPicked,
  frontendMobileFramework,
  getFrameworkTodo,
  isEmpty,
  listProgrammingLanguages,
  programmingLanguages,
} from "../lists.js";

import { question } from "readline-sync";

export const languages = [];
export const Type = [];

Type.push("Web");
Type.push("Mobile");
Type.push("System");
Type.push("AI");
Type.push("ML");

const includes = question("Enter Type of Coding: ");

if (includes.includes("Web")) {
  const frameworkTodo = question("Enter Framework: ");
  const pickCSSLibrary = question("Enter Name of CSS Library: ");
  const language = question("Enter Programming Language for Project: ");

  languages.push("JavaScript");
  languages.push("Python");
  languages.push("C++");
  languages.push("C#");
  languages.push("C");
  languages.push("Java");

  if (language.startsWith("list")) {
    for (const a of languages) {
      console.log(listProgrammingLanguages(a));
    }
  }

  if (isEmpty(language)) {
    command("Empty...");
  }
  if (isEmpty(pickCSSLibrary)) {
    command("Empty...");
  }
  if (isEmpty(frameworkTodo)) {
    command("Empty...");
  } else {
    programmingLanguages(language);
    cssFrameworkPicked(pickCSSLibrary);
    getFrameworkTodo(frameworkTodo);
  }
}

if (includes.includes("Mobile")) {
  const mobileFrontend = question("Enter Mobile Frontend Framework: ");
  frontendMobileFramework(mobileFrontend);

  const backendLibrary = question("Enter Backend Library: ");
  backendMobileFramework(backendLibrary);
}
