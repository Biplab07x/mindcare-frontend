export default function Result({ result, onBack }) {
  let level = "";
  let color = "";
  let emoji ="";
  let message = "";
  let showHelpline = false;

  if (result >= 13) {
    level = "HIGH STRESS";
    color = "red";
    message = "You may be experiencing high stress.please consider seeking support.";
    emoji="😟";
    showHelpline = true;
  } else if (result >= 7) {
    level = "MODERATE STRESS";
    color = "orange";
    message = "Your stress level is moderate.Take breaks and care for yourself.";
    emoji="😐"
  } else {
    level = "LOW STRESS";
    color = "green";
    message = "You're doing well!Keep maintaining healthy habits.";
    emoji= "😊";
  }

  return (
  <div className="result-container">
    <div className="result-card fade-in">

      <div className="emoji bounce">{emoji}</div>

      <h3 style={{ color }}>{level}</h3>

      <p>{message}</p>

      <p>
        <strong>Total Score:</strong> {result}
      </p>

      <p>
        <strong>Stress Level:</strong> {level}
      </p>

      {/* 🚨 HELPLINE SECTION */}
      {showHelpline && (
        <div className="helpline-box">
          <h3>⚠️ You may need support</h3>

          <p>
            Your stress level appears high. Please consider reaching out for
            professional help.
          </p>

          <p>
            📞 <strong>National Mental Health Helpline (India)</strong>
          </p>

          <p>
            <strong>14416</strong> or <strong>1-800-891-4416</strong>
          </p>
        </div>
      )}

      <button className="primary-btn" onClick={onBack}>
        Back to Dashboard
      </button>

    </div>
  </div>
);
}
