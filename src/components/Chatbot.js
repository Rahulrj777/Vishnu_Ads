import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const botMessage = { text: "I'm just a basic chatbot. Ask me anything!", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4 fixed bottom-5 right-5">
      <div className="h-64 overflow-y-auto border-b pb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
            <div className={`px-3 py-2 rounded-lg ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-lg outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg" onClick={handleSend}>
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
