import {
    command,
    cssFrameworkPicked,
    getFrameworkTodo,
    isEmpty,
    listProgrammingLanguages,
    programmingLanguages
} from "../lists.js";

import {question} from 'readline-sync';

export const languages = [];


const frameworkTodo = question("Enter Framework: ");
const pickCSSLibrary = question("Enter Name of CSS Library: ")
const language = question("Enter Programming Language for Project: ");



languages.push("JavaScript");
languages.push("Python");
languages.push("C++");
languages.push("C#");
languages.push("C");
languages.push("Java");

if (language.startsWith("list") ) {
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
}
else {
    programmingLanguages(language);
    cssFrameworkPicked(pickCSSLibrary);
    getFrameworkTodo(frameworkTodo);

}
