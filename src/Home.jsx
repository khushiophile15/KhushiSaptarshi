import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

import taj from "./assets/tajmahal.jpg";
import myPhoto from "./assets/glowing.jpeg";
import journeyAudio from "./assets/journey.mp3";
import ours from "./assets/orange.jpeg";
import glowing from "./assets/glowing.jpeg";

function Home() {
  const [reveal, setReveal] = useState(false);
  const [isVanishing, setIsVanishing] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const createParticles = () => {
    const newParticles = Array.from({ length: 60 }, () => {
      const dx = Math.random() * 400 - 200;
      const dy = Math.random() * -400 - 80;
      const size = Math.random() * 7 + 4;
      return {
        id: Date.now() + Math.random(),
        left: `${35 + Math.random() * 30}%`,
        top: `${25 + Math.random() * 40}%`,
        size: `${size}px`,
        dx: `${dx}px`,
        dy: `${dy}px`,
        delay: `${Math.random() * 0.8 - 0.8}s`,
        duration: `${1.5 + Math.random() * 1.5}s`,
      };
    });
    setParticles(newParticles);
  };

  const handleTap = () => {
    if (!isVanishing && !reveal) {
      setIsVanishing(true);
      createParticles();
    }
  };

  useEffect(() => {
    if (isVanishing) {
      const timer = setTimeout(() => {
        setReveal(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVanishing]);

  useEffect(() => {
    if (particles.length > 0) {
      const timer = setTimeout(() => {
        setParticles([]);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [particles.length]);

  const handleJourneyClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(journeyAudio);
    }
    audioRef.current.play().catch(() => {});
    navigate("/journey");
  };

  return (
    <div className="page">
      {/* Background heart */}
      <div className="heart-bg"></div>

      {/* Black glass crystals */}
      <div className="crystals">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span>
      </div>
      
      {/* Sand-crystal particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="crystal-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--dx": p.dx,
            "--dy": p.dy,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="container">

        <img src={ours} alt="left" className="left-side-image" />

        {!reveal ? (
          <img
            src={taj}
            alt="Taj Mahal"
            className={`taj ${isVanishing ? "crystal-vanish" : ""}`}
            onClick={handleTap}
          />
        ) : (
          /* HEART-SHAPED GLASS FRAME - FULL IMAGE VISIBLE */
          <svg
            className="heart-frame-svg"
            width="440"
            height="400"
            viewBox="0 0 440 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="heart-clip">
                <path d="M220 75 
C 165 25 85 35 85 120 
C 85 185 140 240 220 295 
C 300 240 355 185 355 120 
C 355 35 275 25 220 75 z" />
              </clipPath>
              <linearGradient id="mirror-gradient" x1="20%" y1="10%" x2="85%" y2="90%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.45)" />
              </linearGradient>
            </defs>

            {/* Glass heart frame border */}
            <path
              d="M220 75 
C 165 25 85 35 85 120 
C 85 185 140 240 220 295 
C 300 240 355 185 355 120 
C 355 35 275 25 220 75 z"
              fill="rgba(179, 58, 206, 0.09)"
              stroke="#e61681"
              strokeWidth="24"
            />

            {/* FULL IMAGE - adjusted position & size to show entire photo inside heart */}
            <image
              href={myPhoto}
              x="25"
              y="15"
              width="390"
              height="370"
              preserveAspectRatio="xMidYMid meet"
              clipPath="url(#heart-clip)"
            />

            {/* Mirror / glass shine overlay */}
            <rect
              width="440"
              height="400"
              fill="url(#mirror-gradient)"
              opacity="0.45"
              clipPath="url(#heart-clip)"
            />
          </svg>
        )}

        <img src={ours} alt="right" className="right-side-image" />
      </div>

      {!reveal && <p className="text">Tap the Taj Mahal ❤️</p>}

      {reveal && (
        <button className="journey-button" onClick={handleJourneyClick}>
          Our Journey 💖
        </button>
      )}
    </div>
  );
}

export default Home;