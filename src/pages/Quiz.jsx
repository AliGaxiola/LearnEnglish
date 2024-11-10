import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import questions from "../data/questions";
import TextQuestion from "../components/TextQuestion";
import ImageQuestion from "../components/ImageQuestion";
import FillInTheBlankQuestion from "../components/FillInTheBlankQuestion";
import QuizResultModal from "../components/QuizResultModal";

const Quiz = () => {
  const level = new URLSearchParams(useLocation().search).get("level");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const levelQuestions = questions[level];

  const handleAnswer = (selectedOption) => {
    const currentQuestion = levelQuestions[currentIndex];
    let newScore = score;

    // Verificamos si la respuesta es correcta antes de actualizar el puntaje
    if (selectedOption === currentQuestion.answer) {
      newScore += 1;
      setScore(newScore);
    }

    // Si es la última pregunta, mostramos el modal y guardamos el resultado
    if (currentIndex === levelQuestions.length - 1) {
      saveResult(level, newScore, levelQuestions.length);
      setIsCompleted(true);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const saveResult = (level, finalScore, totalQuestions) => {
    const results = JSON.parse(localStorage.getItem("quizResults")) || {};
    results[level] = `${finalScore} / ${totalQuestions}`;
    localStorage.setItem("quizResults", JSON.stringify(results));
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const currentQuestion = levelQuestions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-blue-400 text-white p-6">
      <h2 className="text-3xl font-extrabold mb-6">Level {level}</h2>

      <div className="w-full max-w-md p-4 bg-yellow-200 text-black rounded-lg shadow-lg mb-8">
        {currentQuestion.type === "text" && (
          <TextQuestion {...currentQuestion} onAnswer={handleAnswer} />
        )}
        {currentQuestion.type === "image" && (
          <ImageQuestion {...currentQuestion} onAnswer={handleAnswer} />
        )}
        {currentQuestion.type === "fill-in-the-blank" && (
          <FillInTheBlankQuestion
            {...currentQuestion}
            onAnswer={handleAnswer}
          />
        )}
      </div>

      {/* Botón "Give Up" */}
      <Link to="/levels">
        <button className="w-64 py-3 mb-6 bg-red-500 text-white text-xl rounded-lg shadow-lg hover:bg-red-600">
          Give Up
        </button>
      </Link>

      {isCompleted && (
        <QuizResultModal
          score={score}
          totalQuestions={levelQuestions.length}
          onRetry={handleRetry}
        />
      )}
    </div>
  );
};

export default Quiz;
