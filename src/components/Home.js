import React, { useState, useEffect, useCallback } from "react";
import "../App.css";
import Chatbot from "./Chatbot";

const Home = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (isChatbotOpen && !event.target.closest(".chatbot_container")) {
        setIsChatbotOpen(false);
      }
    },
    [isChatbotOpen]
  );

  useEffect(() => {
    // Add event listener to handle clicks outside the Chatbot component
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="container">
      <button onClick={toggleChatbot} className="open_chatbot">
        Chat with Our Chatbot
      </button>
      {isChatbotOpen && <Chatbot />}
    </div>
  );
};

export default Home;
