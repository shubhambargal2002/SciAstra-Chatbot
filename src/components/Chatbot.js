import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { ChatSendSvg } from "../images";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, type: "user" },
    ]);
    setInput("");
    // Call a function to handle bot response
    handleBotResponse(input);
  };

  const handleBotResponse = async (userInput) => {
    // Simulate bot responses for the given user input
    // In a real scenario, this would involve making a backend API call to a chatbot service
    const botResponse = await getBotResponse(userInput);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, type: "bot" },
    ]);
  };

  const getBotResponse = (userInput) => {
    // Implement logic to generate bot responses based on user input
    // This can be as simple or complex as needed

    // Placeholder responses based on the provided questions
    switch (userInput.toLowerCase()) {
      case "what is sciastra?":
        return "SciAstra is a research organization specializing in [brief description].";

      case "what services does sciastra provide?":
        return "SciAstra provides [list of services].";

      case "how can i contact sciastra?":
        return "You can reach out to us through [contact information].";

      case "what industries does sciastra cater to?":
        return "SciAstra serves [industries].";

      case "are there any upcoming events or conferences organized by sciastra?":
        return "Yes, SciAstra frequently hosts events. You can check our [events page] for updates.";
      // Add more cases for other questions

      default:
        return `I received : ${userInput}`;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chatbot_container">
      <div className="message_container">
        {messages.map((message, index) => {
          if (message.type === "user") {
            return (
              <div
                style={{ width: "100%" }}
                key={index + message.type + index}
                ref={scrollRef}
              >
                <div className="single_message_container">
                  <div className="message">{message.text}</div>
                  <div className="message_icon"></div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                style={{ width: "100%" }}
                key={index + message.type + index}
                ref={scrollRef}
              >
                <div className="system_single_message_container">
                  <div className="system_message_icon" />
                  <div className="system_message">{message.text}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="input_container">
        <input
          type="text"
          placeholder="Start Typing..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <ChatSendSvg onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
