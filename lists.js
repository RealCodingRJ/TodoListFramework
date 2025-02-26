export function getMessage(message) {
  console.log(message);
}

export function command(command) {
  getMessage(command);
}

export function getFrameworkTodo(framework) {
  command("You Have Picked: " + framework);
}

export function isEmpty(a) {
  return a === "";
}

export function cssFrameworkPicked(cssFrame) {
  command("CSS Library is: " + cssFrame);
}

export function listProgrammingLanguages(list) {
  return new Array(list);
}

export function programmingLanguages(lang) {
  command("You Have Picked: " + lang + " In Your Project");
}

export function frontendMobileFramework(frame) {
  command("You Have Picked: " + frame + " Frontend For App");
}

export function backendMobileFramework(frame) {
  command("You Have Picked " + frame + "Backend Framework for App");
}
