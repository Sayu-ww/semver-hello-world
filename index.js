function greetInLanguage(name = "World", language = "en") {
  if (language === "ru") {
    return `Привет, ${name}! Добро пожаловать в ${APP_NAME}.`;
  }

  if (language === "en") {
    return greet(name);
  }

  throw new Error(`Unsupported language: ${language}`);
}
