export default function MedicineStore({ onBack }) {
  return (
    <div className="card medicine-card">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <h2>Nearby Medical Stores</h2>

      <p className="subtitle">
        Find trusted pharmacies for mental health medications.
      </p>

      <div className="medicine-list">
        <div className="medicine-item">
          <h4>💊 CarePlus Pharmacy</h4>
          <p>Open: 8 AM – 10 PM</p>
          <p>📞 +91 98765 11122</p>
        </div>

        <div className="medicine-item">
          <h4>💊 HealthFirst Medical Store</h4>
          <p>Open: 24 Hours</p>
          <p>📞 +91 91234 99887</p>
        </div>

        <div className="medicine-item">
          <h4>💊 Wellness Pharmacy</h4>
          <p>Open: 9 AM – 9 PM</p>
          <p>📞 +91 90909 45454</p>
        </div>
      </div>

      <p className="disclaimer">
        *Medicine availability may vary. Please consult a doctor before use.
      </p>
    </div>
  );
}