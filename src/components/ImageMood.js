import { useState } from "react";

export default function ImageMood({ onBack }) {
  const [image, setImage] = useState(null);
  const [mood, setMood] = useState("");

  // ✅ 1. Handle file selection
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    setMood("");
  };

  // ✅ 2. Simulate mood detection
  const handleDetectMood = () => {
    const moods = ["Happy 😊", "Sad 😔", "Neutral 😐", "Stressed 😣"];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  };

  return (
    <div className="image-page">
      <div className="image-card">
        <h2 className="card-title">Upload Image</h2>

        <input
          type="file"
          className="file-input"
          onChange={handleFileChange}
        />

        <button
          className="primary-btn"
          onClick={handleDetectMood}
          disabled={!image}
        >
          Detect Mood
        </button>

        {mood && (
          <h3 style={{ marginTop: "20px" }}>
            Detected Mood: <span>{mood}</span>
          </h3>
        )}

        <p className="disclaimer">
          *Image mood detection is AI-assisted simulation for demonstration purposes
        </p>

        <button className="secondary-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}