const APP_NAME = "SemVer Hello World";

function greet(name = "World") {
  return `Hello, ${name}! Welcome to ${APP_NAME}.`;
}

function greetInLanguage(name = "World", language = "en") {
  if (language === "ru") {
    return `Привет, ${name}! Добро пожаловать в ${APP_NAME}.`;
  }

  if (language === "en") {
    return greet(name);
  }

  throw new Error(`Unsupported language: ${language}`);
}

function greetWithStyle(name = "World", style = "standard") {
  const message = greet(name);

  if (style === "uppercase") {
    return message.toUpperCase();
  }

  if (style === "lowercase") {
    return message.toLowerCase();
  }

  if (style === "standard") {
    return message;
  }

  throw new Error(`Unsupported style: ${style}`);
}

console.log(greet());
console.log(greetInLanguage("Alex", "ru"));
console.log(greetWithStyle("Alex", "uppercase"));
