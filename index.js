const APP_NAME = "SemVer Hello World";

function greet(name = "World") {
  return `Hello, ${name}! Welcome to ${APP_NAME}.`;
}

function greetInLanguage(name = "World", language = "en") {
  if (language === "ru") {
    return `Привет, ${name}! Добро пожаловать в ${APP_NAME}.`;
  }

  return greet(name);
}

console.log(greet());
console.log(greetInLanguage("Alex", "ru"));
