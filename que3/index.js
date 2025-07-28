// app.js
const readline = require("readline");
const DomainChatbot = require("./chatbot");

const bot = new DomainChatbot();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "You: "
});

console.log("Guidence Chatbot (type 'exit' to quit)");
rl.prompt();

rl.on("line", (line) => {
  const input = line.trim();
  if (input.toLowerCase() === "exit") {
    console.log("Guidence: Goodbye! Have a great trip!");
    rl.close();
    return;
  }
  const response = bot.getResponse(input);
  console.log("Guidence:", response);
  rl.prompt();
}).on("close", () => {
  process.exit(0);
});
