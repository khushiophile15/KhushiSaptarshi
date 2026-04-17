import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

import blue from "./assets/blue.jpeg";
import purple from "./assets/purple.jpeg";
import yellow from "./assets/yellow.jpeg";
import white from "./assets/white.jpeg";
import brown from "./assets/brown.jpeg";
import pink from "./assets/pink.jpeg";
import darkblue from "./assets/darkblue.jpeg";
import green from "./assets/green.jpeg";
import red from "./assets/red.jpeg";
import grey from "./assets/grey.jpeg";
import glowing from "./assets/glowing.jpeg";
import orange from "./assets/orange.jpeg";

function Journey() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const heartData = [
    { id: 1, emoji: "🩵", color: "#7ED6E8", image: blue },
    { id: 2, emoji: "💜", color: "#C084FC", image: purple },
    { id: 3, emoji: "💛", color: "#FDE047", image: yellow },
    { id: 4, emoji: "🤍", color: "#FF9F4C", image: white },
    { id: 5, emoji: "🤎", color: "#C4A484", image: brown },
    { id: 6, emoji: "💗", color: "#FF69B4", image: glowing },
    { id: 7, emoji: "💙", color: "#60A5FA", image: darkblue },
    { id: 8, emoji: "💚", color: "#4ADE80", image: green },
    { id: 9, emoji: "❤️", color: "#FACC15", image: red },
    { id: 10, emoji: "🩶", color: "#806b76", image: grey },
    { id: 11, emoji: "🩷", color: "#A78BFA", image: pink },
    { id: 12, emoji: "🧡", color: "#FB923C", image: orange },
  ];

  return (
    <div className="journey-page">
      <div className="top-buttons">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back
      </button>

      <button className="next-button" onClick={() => navigate("/loveletter")}>
        Love Letter 💌
      </button>
    </div>

      <h1 className="journey-title">Tap any heart Sashu 💕</h1>

      <div className="hearts-grid">
        {heartData.map((heart) => (
          <div
            key={heart.id}
            className="color-heart"
            onClick={() => setSelectedImage(heart.image)}
            style={{ color: heart.color }}
          >
            {heart.emoji}
        
          </div>
          
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content">
            <img src={selectedImage} alt="Memory" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Journey;