//  export default function Dashboard({ onSelect }) {
//    return (
//      <>
//        <h2>How would you like to check your mental state?</h2>

//      <button onClick={() => onSelect("questions")}>
//        🧠 Answer Questions
//       </button>
//        <button onClick={() => onSelect("image")}>
//         📷 Upload Image
//     </button>
// </>
//   );
//  }

function Dashboard({ onSelect }) {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        {/* <h2 className="card-title">MindCare</h2>
        <p className="card-subtitle">
          AI-Assisted Mental Load Awareness
        </p> */}

        <h3 className="card-question">
          How would you like to check your mental state?
        </h3>

        <button
          className="primary-btn"
          onClick={() => onSelect("questions")}
        >
          🧠 Answer Questions
        </button>

        <button
          className="secondary-btn"
          onClick={() => onSelect("image")}
        >
          📷 Upload Image
        </button>
      </div>
    </div>
  );
}

export default Dashboard;