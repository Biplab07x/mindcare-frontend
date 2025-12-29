export default function Profile({ user, onBack }) {
  return (
    <div className="page-container">
      <div className="card">
        <h2>👤 Profile</h2>

        <p><strong>Email:</strong> {user?.email || "Not available"}</p>
        <p><strong>User ID:</strong> {user?.uid || "Not available"}</p>

        <button className="primary-btn" onClick={onBack}>
          ← Back
        </button>
      </div>
    </div>
  );
}