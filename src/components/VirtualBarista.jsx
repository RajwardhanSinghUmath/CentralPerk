import React, { useState, useEffect, useRef } from "react";
import "./VirtualBarista.css";
import Navbar from "./Navbar";

const coffeeList = [
  { name: "Espresso", price: "$3" },
  { name: "Cappuccino", price: "$4" },
  { name: "Latte", price: "$4.5" },
  { name: "Mocha", price: "$5" },
  { name: "Americano", price: "$3.5" }
];

const VirtualBarista = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hi! Want a coffee suggestion? Press 'Next' to continue! ☕", sender: "bot" }
  ]);
  const [suggested, setSuggested] = useState([]);
  const [currentSuggestion, setCurrentSuggestion] = useState(null);
  const [noMoreLeft, setNoMoreLeft] = useState(false);
  const [stage, setStage] = useState("suggest");

  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const suggestCoffee = () => {
    if (suggested.length === coffeeList.length) {
      setNoMoreLeft(true);
      addMessage("No more suggestions left. 😢", "bot");
      addMessage("Would you like to reset and see suggestions again? Press 'Reset' to continue.", "bot");
      return;
    }

    let availableOptions = coffeeList.filter(c => !suggested.includes(c.name));
    let randomChoice = availableOptions[Math.floor(Math.random() * availableOptions.length)];

    setSuggested([...suggested, randomChoice.name]);
    setCurrentSuggestion(randomChoice);
    addMessage(`How about a ${randomChoice.name}? ☕ It's just ${randomChoice.price}.`, "bot");
    addMessage("Would you like to order this coffee? Press 'Yes' to confirm or 'Next' for another option.", "bot");
    setStage("confirm");
  };

  const handleUserResponse = (response) => {
    addMessage(response, "user");

    if (stage === "suggest" && response === "Next") {
      suggestCoffee();
    } else if (stage === "confirm" && response === "Next") {
      suggestCoffee();
    } else if (stage === "confirm" && response === "Yes") {
      addMessage(`Great choice! Your ${currentSuggestion.name} is being prepared. ☕`, "bot");
      setTimeout(() => addMessage("Please select a payment method: Cash, Card, or Online", "bot"), 1000);
      setStage("payment");
    } else if (stage === "payment" && ["Cash", "Card", "Online"].includes(response)) {
      addMessage(`Payment confirmed via ${response}. Your ${currentSuggestion.name} will be ready soon! ✅`, "bot");
      setTimeout(() => {
        addMessage("Would you like to order more? Press 'Order More' to continue or 'Exit' to end.", "bot");
        setStage("orderMore");
      }, 1000);
      setCurrentSuggestion(null);
    } else if (response === "Reset") {
      setSuggested([]);
      setNoMoreLeft(false);
      setStage("suggest");
      suggestCoffee();
    } else if (response === "Order More") {
      setStage("suggest");
      suggestCoffee();
    } else if (response === "Exit") {
      addMessage("Thank you for visiting! Have a great day! 😊", "bot");
      setStage("end");
    }
  };

  return (
    <div className="virtual-barista-page">
      <Navbar />
      <p className="outerquote" >“They don’t know that we know they know we know.”</p>
      <div className="chat-container">
        <div className="chat-box" ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}-message`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          {stage === "suggest" || stage === "confirm" ? (
            <>
              <button onClick={() => handleUserResponse("Next")}>Next</button>
              <button onClick={() => handleUserResponse("Yes")} disabled={stage !== "confirm"}>Yes</button>
            </>
          ) : stage === "payment" ? (
            <>
              <button onClick={() => handleUserResponse("Cash")}>Cash</button>
              <button onClick={() => handleUserResponse("Card")}>Card</button>
              <button onClick={() => handleUserResponse("Online")}>Online</button>
            </>
          ) : stage === "orderMore" ? (
            <>
              <button onClick={() => handleUserResponse("Order More")}>Order More</button>
              <button onClick={() => handleUserResponse("Exit")}>Exit</button>
            </>
          ) : noMoreLeft ? (
            <button onClick={() => handleUserResponse("Reset")}>Reset</button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default VirtualBarista;
