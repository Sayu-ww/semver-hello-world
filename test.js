
const assert = require("node:assert/strict");

const APP_NAME = "SemVer Hello World";

function greet(name = "World") {
  return `Hello, ${name}! Welcome to ${APP_NAME}.`;
}

function greetWithStyle(name = "World", style = "standard") {
  const message = greet(name);

  if (style === "uppercase") return message.toUpperCase();
  if (style === "lowercase") return message.toLowerCase();
  if (style === "standard") return message;

  throw new Error(`Unsupported style: ${style}`);
}

assert.equal(greetWithStyle("Alex", "standard"), greet("Alex"));
assert.equal(greetWithStyle("Alex", "uppercase"), greet("Alex").toUpperCase());
assert.equal(greetWithStyle("Alex", "lowercase"), greet("Alex").toLowerCase());

assert.throws(
  () => greetWithStyle("Alex", "unknown"),
  /Unsupported style/
);

console.log("All tests passed!");
