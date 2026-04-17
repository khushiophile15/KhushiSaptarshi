import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./css/animation.css";
import "./css/css3.css";
import "./css/LoveLetter.css";
import letterAudio from "./assets/letter.mp3";

function LoveLetter() {
  const navigate = useNavigate();
  useEffect(() => {
    const audio = new Audio(letterAudio);
    audio.play().catch(() => {});
  }, []);

  const timelineEvents = [
    {
      date: "April 18th, 2024",
      title: "Our First Conversation",
      desc: "Universe made the Stars Meet for the first time",
      emoji: "🌟"
    },
    {
      date: "February 17th, 2025",
      title: "Acceptance of Feelings",
      desc: "The day You + Me Became We",
      emoji: "❤️"
    }
  ];

  return (
    <div className="love-page">
      <button className="back-buttonn" onClick={() => navigate("/journey")}>
        ← Back
      </button>

      <div className="letter-wrapper">
        <div className="letter-card">
          <h1 className="letter-title">To My Love 💌</h1>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-date">{event.date}</div>
                  <div className="timeline-emoji">{event.emoji}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-desc">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="letter-text love-declaration">
            <strong>I LOVE YOU to the moon 🌙 and back</strong>
          </p>

          <p className="signature">
            Forever yours ❤️ Sashu<br />
          </p>
        </div>

        {/* Animated Background */}
      <div className="animation-wrapper">
        {/* Flowers */}
        <div className="flower flower_1"></div>
        <div className="flower flower_2"></div>
        <div className="flower flower_3"></div>
        <div className="flower flower_4"></div>
        <div className="flower flower_5"></div>
        <div className="flower flower_6"></div>

        {/* Butterflies */}
        <div className="butterfly1">
          <div className="butterfly1_left"></div>
          <div className="butterfly1_body"></div>
          <div className="butterfly1_right"></div>
        </div>
        <div className="butterfly2">
          <div className="butterfly2_left"></div>
          <div className="butterfly2_body"></div>
          <div className="butterfly2_right"></div>
        </div>
        <div className="butterfly3">
          <div className="butterfly3_left"></div>
          <div className="butterfly3_body"></div>
          <div className="butterfly3_right"></div>
        </div>
        <div className="butterfly4">
          <div className="butterfly4_left"></div>
          <div className="butterfly4_body"></div>
          <div className="butterfly4_right"></div>
        </div>
        
      </div>

      </div>
      
      <div class="right-list">
        <ul>
        <li>Tumi amar hridoy aar amar peace</li>
        <li>Tumi amar khub bhalo aar mishti chele</li>
        <li>Tomar awaz amake khub mishti lage</li>
        <li>You are very special to me</li>
        <li>My safe Place looks like you</li>
        <li>My childishness belongs to you</li>
        <li>I want this love to grow <strong>exponentially</strong></li>
        <li>you remember khushi when she forgets who she is</li>
        <li>Your Understanding, Maturity, wins my heart</li>
        <li>Sweet and Nicest to me and <strong>Beautiful At Heart</strong></li>
        <li>You are definition of Gentleman.</li>
        <li>A Pure Soul Just for me</li>
        <li>in silence in crowd I choose You</li>
        <li>in happiness ,in sadness I want you</li>
        <li>in success ,in failure I want you</li>
        <li>I Choose To be With You each time.</li>
        </ul>

        <div>
          <h2 className="Bengali">সপ্তর্ষি ❤️ খুশি</h2>
        </div>
        
      </div>
      
      
    </div>
  );
}

export default LoveLetter;