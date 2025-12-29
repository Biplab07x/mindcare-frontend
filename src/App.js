import { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Questions from "./components/Questions";
import ImageMood from "./components/ImageMood";
import Result from "./components/Result";
import Profile from "./components/Profile";
import AIChatbot from "./components/AIChatbot";
import History from "./components/History";
import About from "./components/About";
import Doctors from "./components/Doctors";
import MedicineStore from "./components/MedicineStore";

import { signOut } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  // const [page, setPage] = useState("dashboard");
  const [showMore, setShowMore] = useState(false);
  const [finalResult, setFinalResult] = useState(null);

  const [chatHistory, setChatHistory] = useState([]);
  const [page,setPage]=useState("home");
  const handleLogout = async () => {
    await signOut(auth);
    setLoggedIn(false);
    setShowLogin(true);
    setPage("dashboard");
  };

  return (
    <div className="app-container">

      {/* TOP BAR */}
      {loggedIn && (
        <div className="top-actions">
          <div className="more-container">
            <button
              className="top-left-btn"
              onClick={() => setShowMore(!showMore)}
            >
              More ▾
            </button>

            {showMore && (
              <div className="more-dropdown">
                <div
                  onClick={() => {
                    setPage("profile");
                    setShowMore(false);
                  }}
                >
                  👤 Profile
                </div>
                <div
  onClick={() => {
    setPage("history");
    setShowMore(false);
  }}
>
  📜 History
</div>
                <div
  onClick={() => {
    setPage("medicine");
    setShowMore(false);
  }}
>
  💊 Medicine Store
</div>
                <div
  onClick={() => {
    setPage("doctors");
    setShowMore(false);
  }}
>
  👨‍⚕️ Doctors
</div>
                <div onClick={() => {
                    setPage("aichat");setShowMore(false);}} 
                    >
                       🤖 AIChatbot
                  </div>
                <div
  onClick={() => {
    setPage("about");
    setShowMore(false);
  }}
>
  ℹ️ About
</div>
              </div>
            )}
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      {/* AUTH SCREENS */}
      {!loggedIn && (
        <>
          {showLogin ? (
            <>
              <Login
  onSuccess={() => {
    setLoggedIn(true);
    setPage("dashboard");   // 🔥 REQUIRED
  }}
/>
              <p
                className="toggle-text"
                onClick={() => setShowLogin(false)}
              >
                No account? <b>Sign up</b>
              </p>
            </>
          ) : (
            <>
             <Signup
  onSuccess={() => {
    setLoggedIn(true);
    setPage("dashboard");
  }}
/>
              <p
                className="toggle-text"
                onClick={() => setShowLogin(true)}
              >
                Already have an account? <b>Login</b>
              </p>
            </>
          )}
        </>
      )}

      {/* LOGGED IN CONTENT */}
      {loggedIn && (
        <>
          <h1>MindCare</h1>
          <p className="subtitle">AI-Assisted Mental Load Awareness</p>

          {page === "dashboard" && (
            <Dashboard onSelect={setPage} />
          )}

          {page === "questions" && (
            <Questions
              onComplete={(result) => {
                setFinalResult(result);
                setPage("result");
              }}
            />
          )}

          {page === "image" && (
            <ImageMood onBack={() => setPage("dashboard")} />
          )}

          {page === "result" && (
            <Result
              result={finalResult}
              onBack={() => setPage("dashboard")}
            />
          )}

          {page === "profile" && (
            <Profile
              user={auth.currentUser}
              onBack={() => setPage("dashboard")}
            />
          )}
          {/* MAIN PAGE SWITCH */}
{page === "home" && (
  <>
    {/* Your existing dashboard / landing UI */}
  </>
)}
         {page === "aichat" && (
  <AIChatbot
    onBack={() => setPage("dashboard")}
    chatHistory={chatHistory}
    setChatHistory={setChatHistory}
  />
)}
{page === "doctors" && (
  <Doctors onBack={() => setPage("dashboard")} />
)}

{page === "medicine" && (
  <MedicineStore onBack={() => setPage("dashboard")} />
)}

{page === "history" && (
  <History
    chatHistory={chatHistory}
    onBack={() => setPage("dashboard")}
  />
)}
{page === "about" && (
  <About onBack={() => setPage("dashboard")} />
)}
        </>
      )}
    </div>
  );
}

export default App;