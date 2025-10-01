"use client"; // necessário para usar eventos (onClick)

import { useState } from "react";

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0072CE",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {/* Janela do chat */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "350px",
            height: "500px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            zIndex: 1000,
          }}
        >
          {/* Aqui vamos injetar o widget do AgentForce */}
          <div id="athena-chat"></div>
        </div>
      )}
    </>
  );
}
