import "./History.css";
export default function History({ chatHistory, onBack }) {
  return (
    <div className="history-page">
      <div className="history-card">
        <button className="back-btn" onClick={onBack}>← Back</button>

        <h2 className="history-title">Chat History</h2>

        <div className="history-messages">
          {chatHistory.length === 0 && (
            <p className="empty-text">No chat history yet.</p>
          )}

          {chatHistory.map((msg, i) => (
            <div key={i} className={'history-msg ${msg.sender}'}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}