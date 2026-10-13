const APP_NAME = "SemVer Hello World";

function greet(name = "World") {
  return `Hello, ${name}! Welcome to ${APP_NAME}.`;
}

console.log(greet());
