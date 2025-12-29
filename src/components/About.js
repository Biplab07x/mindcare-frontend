export default function About({ onBack }) {
  return (
    <div className="card about-card">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h2>About MindCare</h2>

      <p>
        <strong>MindCare</strong> is an AI-assisted mental load awareness platform
        designed to support users in understanding their emotional well-being.
      </p>

      <p>
        The application combines self-check tools, AI-powered conversations,
        and mood awareness features to help users reflect on their mental state.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li>🧠 Mental load self-assessment</li>
        <li>🤖 AI-powered supportive chatbot</li>
        <li>📊 Mood and response history</li>
        <li>🔐 Secure authentication</li>
      </ul>

      <p className="disclaimer">
        ⚠️ MindCare provides supportive guidance only and is not a substitute
        for professional medical advice.
      </p>
    </div>
  );
}