// chatbot.js
class DomainChatbot {
  constructor() {
    this.knowledge = {
      "book flight": "Sure! I can help you book a flight. Where would you like to go?",
      "cancel flight": "I can help you cancel your flight. Please provide your booking ID.",
      "flight status": "Please provide your flight number and date to check the status.",
      "hello": "Hello! Welcome to TravelBuddy. How can I assist you today?",
      "help": "You can ask me to book a flight, cancel a flight, or check flight status."
    };
  }

  getResponse(input) {
    const userInput = input.toLowerCase();
    for (const key in this.knowledge) {
      if (userInput.includes(key)) {
        return this.knowledge[key];
      }
    }
    return "Sorry, I didn't understand that. Can you please rephrase?";
  }
}

module.exports = DomainChatbot;
