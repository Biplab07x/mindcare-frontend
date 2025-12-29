export default function Doctors({ onBack }) {
  return (
    <div className="card doctors-card">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h2>Available Doctors</h2>

      <p className="subtitle">
        Connect with mental health professionals for expert guidance.
      </p>

      <div className="doctor-list">
        <div className="doctor-item">
          <h4>🧑‍⚕️ Dr. Ananya Sharma</h4>
          <p>Clinical Psychologist</p>
          <p>📞 +91 98765 43210</p>
        </div>

        <div className="doctor-item">
          <h4>🧑‍⚕️ Dr. Rahul Mehta</h4>
          <p>Psychiatrist</p>
          <p>📞 +91 91234 56789</p>
        </div>

        <div className="doctor-item">
          <h4>🧑‍⚕️ Dr. Neha Verma</h4>
          <p>Counseling Therapist</p>
          <p>📞 +91 99887 66554</p>
        </div>
      </div>

      <p className="disclaimer">
        *Contact details are for demonstration purposes only.
      </p>
    </div>
  );
}