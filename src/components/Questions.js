import { useState } from "react";
import {questions} from "./QuestionsData"; // we will create this file next
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


export default function Questions({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const currentQuestion = questions[currentIndex];

  const handleNext = async () => {
    if (selected === null) return;

    const newScore = totalScore + currentQuestion.options[selected].score;
    setTotalScore(newScore);
    setSelected(null);

   if (currentIndex === questions.length - 1) {
  const user = auth.currentUser;

  if (user) {
    await addDoc(collection(db, "results"), {
      uid: user.uid,
      email: user.email,
      score: newScore,
      stressLevel:
        newScore >= 13 ? "High" : newScore >= 7 ? "Moderate" : "Low",
      createdAt: serverTimestamp(),
    });
  }

  onComplete(newScore);
} else {
  setCurrentIndex(currentIndex + 1);
} 
  };

  return (
    <div className="card">
      <h2>
        Question {currentIndex + 1} of {questions.length}
      </h2>

      <p className="question-text">{currentQuestion.text}</p>

      <div className="options">
        {currentQuestion.options.map((option, index) => (
          <div
             key={index}
             className={'option-card ${selected === index ? "selected" : ""}'}
              onClick={() => setSelected(index)}
            >
           <span className="option-text">{option.label}</span>
           {selected === index && <span className="check">✓</span>} 
        </div>
     ))}
    
       </div>
     <button
  className={'primary-btn ${selected === null ? "disabled" : ""}'}
  onClick={handleNext}
  disabled={selected === null}
>
  {currentIndex === questions.length - 1 ? "Finish" : "Next"}
</button>
    </div>
  );
}