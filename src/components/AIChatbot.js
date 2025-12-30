// import { useState } from "react";
// import "./AIChatbot.css";

// export default function AIChatbot({ onBack, chatHistory, setChatHistory }) {
//   const messages = chatHistory.length
//   ? chatHistory
//   : [{ sender: "bot", text: "Hello 👋 I'm your MindCare AI assistant. How can I help you today?" }];

//   const [input, setInput] = useState("");

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     // show user message immediately
//     setChatHistory(prev => [...prev,{ sender: "user", text: input }
// ]);

//     try {
//       const res = await fetch("http://localhost:5000/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ message: input })
//       });

//       const data = await res.json();

//       setChatHistory(prev => [...prev,{ sender: "bot", text: reply }
// ]);
//     } catch (error) {
//       setChatHistory(prev => [...prev,{ sender: "bot", text: "⚠ Network issue.Please try again" }
//       ]);
//     }

//     setInput("");
//   };


//   return (
//     <div className="chat-page">
//       <div className="chat-card glass">
//         <button className="back-btn" onClick={onBack}>
//           ← Back
//         </button>

//         <h2 className="chat-title">🤖 AI Chatbot</h2>

//         <div className="chat-messages">
//           {messages.map((msg, i) => (
//             <div key={i} className={'chat-msg ${msg.sender}'}>
//               {msg.text}
//             </div>
//           ))}
//         </div>

//         <div className="chat-input">
//           <input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             placeholder="Type your message..."
//           />
//           <button onClick={handleSend}>Send</button>
//         </div>
//         <p className="disclaimer">
//           *AI responses are supportive guidance only and not a medical diagnosis.
//          </p>
//       </div>
//     </div>
// )};
import { useState, useEffect } from "react";
import "./AIChatbot.css";

export default function AIChatbot({ onBack, chatHistory, setChatHistory }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (chatHistory.length === 0) {
      setChatHistory([
        {
          sender: "bot",
          text: "Hello 👋 I'm your MindCare AI assistant. How can I help you today?"
        }
      ]);
    }
  }, []);

  const handleSend = async () => {
  if (!input.trim()) return;

  const msg = input.toLowerCase();
  let reply = "";

  // =========================
  // GREETINGS & SMALL TALK
  // =========================
  if (
    msg.match(/\b(hi|hello|hey|yo|hii|hola)\b/)
  ) {
    reply = "Hi 👋 I'm here with you. How are you feeling right now?";
  }

  else if (
    msg.includes("how are you")
  ) {
    reply = "Thanks for asking 😊 I'm here to support you. What's been on your mind lately?";
  }

  // =========================
  // POSITIVE EMOTIONS
  // =========================
  else if (
    msg.includes("happy") ||
    msg.includes("good") ||
    msg.includes("great") ||
    msg.includes("fine") ||
    msg.includes("excited")
  ) {
    reply = "That's really nice to hear 😊 What's been going well for you?";
  }

  // =========================
  // SADNESS / DEPRESSION
  // =========================
  else if (
    msg.match(/\b(sad|depressed|down|low|hopeless|cry|empty)\b/)
  ) {
    reply =
      "I'm really sorry you're feeling this way 💙 It sounds heavy. Do you want to talk about what’s making you feel like this?";
  }

  // =========================
  // STRESS / ANXIETY / OVERTHINKING
  // =========================
  else if (
    msg.match(/\b(stress|stressed|anxiety|anxious|panic|overthink|worried)\b/)
  ) {
    reply =
      "That sounds overwhelming 😔. When things pile up, it can feel exhausting. What's causing most of the stress right now?";
  }

  // =========================
  // ANGER / FRUSTRATION
  // =========================
  else if (
    msg.match(/\b(angry|mad|frustrated|irritated|annoyed)\b/)
  ) {
    reply =
      "It sounds like something really upset you 😤. Want to tell me what happened?";
  }

  // =========================
  // LONELINESS
  // =========================
  else if (
    msg.match(/\b(lonely|alone|no one|nobody)\b/)
  ) {
    reply =
      "Feeling alone can be really painful 💔. I'm here with you. What's been making you feel this way?";
  }

  // =========================
  // TIRED / BURNOUT
  // =========================
  else if (
    msg.match(/\b(tired|exhausted|burnt out|drained)\b/)
  ) {
    reply =
      "That sounds exhausting 😞. You've been carrying a lot. Are you getting enough rest lately?";
  }

  // =========================
  // SLEEP ISSUES
  // =========================
  else if (
    msg.match(/\b(sleep|insomnia|can't sleep|awake all night)\b/)
  ) {
    reply =
      "Sleep issues can really affect how we feel 😴. Do you usually have trouble falling asleep or staying asleep?";
  }

  // =========================
  // STUDY / CAREER
  // =========================
  else if (
    msg.match(/\b(study|exam|college|career|job|work|future)\b/)
  ) {
    reply =
      "Pressure around studies or work can be stressful 📚💼. What part is worrying you the most right now?";
  }

  // =========================
  // RELATIONSHIPS
  // =========================
  else if (
    msg.match(/\b(relationship|breakup|friend|family|parents|love)\b/)
  ) {
    reply =
      "Relationships can deeply affect our emotions 💔. Do you want to talk about what’s been happening?";
  }

  // =========================
  // SELF-DOUBT / CONFUSION
  // =========================
  else if (
    msg.match(/\b(confused|lost|don't know|unsure|meaning)\b/)
  ) {
    reply =
      "Feeling unsure or lost is more common than you think 🌱. What's been confusing you lately?";
  }

  // =========================
  // HELP / ADVICE
  // =========================
  else if (
    msg.match(/\b(help|advice|suggest|guide)\b/)
  ) {
    reply =
      "I'll do my best to support you 🤝. Can you tell me a bit more about what you need help with?";
  }

  // =========================
  // GRATITUDE
  // =========================
  else if (
    msg.match(/\b(thank|thanks|appreciate)\b/)
  ) {
    reply =
      "You're very welcome 😊 I'm glad you reached out.";
  }

  // =========================
  // CRISIS KEYWORDS (SAFE RESPONSE)
  // =========================
  else if (
    msg.match(/\b(suicide|kill myself|end my life|die)\b/)
  ) {
    reply =
      "I'm really glad you told me 💙. You deserve support. Please consider reaching out to a trusted person or a mental health professional right now.";
  }

  // =========================
  // SMART FALLBACK (VERY IMPORTANT)
  // =========================
  else {
    reply =
      'I hear you. When you say "${input}", what does that mean for you emotionally?';
  }
// ==========================
// FALLBACK → BACKEND API
// ==========================
else {
  try {
    const response = await fetch(
      "https://mindcare-backend-nbij.onrender.com/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: input
        })
      }
    );

    const data = await response.json();
    reply = data.reply || "I'm here with you. Tell me more 🤍";

  } catch (error) {
    reply = "Sorry, I'm having trouble connecting right now 💙";
  }
}

  // =========================
  // UPDATE CHAT
  // =========================
  setChatHistory((prev) => [
    ...prev,
    { role: "user", text: input },
    { role: "bot", text: reply },
  ]);

  setInput("");
};
  return (
    <div className="chat-page">
      <div className="chat-card">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <h2 className="chat-title">🤖 AI Chatbot</h2>

      <div className="chat-messages">
        {chatHistory.map((msg, i) => (
          <div key={i} className={'chat-msg ${msg.sender}'}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <p className="disclaimer">
        *AI responses are supportive guidance only and not a medical diagnosis.
      </p>
    </div>
    </div>
  );
}