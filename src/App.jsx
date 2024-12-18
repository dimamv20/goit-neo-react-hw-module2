import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Notification from "./components/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Функція для оновлення фідбеку
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // Функція для скидання відгуків
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // Загальна кількість відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </div>
      <Options 
        updateFeedback={updateFeedback} 
        resetFeedback={resetFeedback} 
        totalFeedback={totalFeedback} 
      />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification message="No feedback given yet!" />
      )}
    </>
  );
}

export default App;
