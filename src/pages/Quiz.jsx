import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import questions from "../data/questions";
import TextQuestion from "../components/TextQuestion";
import ImageQuestion from "../components/ImageQuestion";
import FillInTheBlankQuestion from "../components/FillInTheBlankQuestion";
import QuizResultModal from "../components/QuizResultModal";
import TextToSpeech from "../components/TextToSpeech";

const Quiz = () => {
  const level = new URLSearchParams(useLocation().search).get("level");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const levelQuestions = questions[level];

  const currentQuestion = levelQuestions[currentIndex];

  const handleAnswer = (selectedOption) => {
    let newScore = score;

    setSelectedAnswer(selectedOption);

    if (selectedOption === currentQuestion.answer) {
      newScore += 1;
      setFeedback("Correcto");
    } else {
      setFeedback("Incorrecto");
    }

    setScore(newScore);

    if (currentIndex === levelQuestions.length - 1) {
      setTimeout(() => {
        saveResult(level, newScore, levelQuestions.length);
        setIsCompleted(true);
      }, 2500);
    } else {
      setTimeout(() => {
        setFeedback("");
        setSelectedAnswer("");
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000);
    }
  };

  const saveResult = (level, finalScore, totalQuestions) => {
    const results = JSON.parse(localStorage.getItem("quizResults")) || {};
    results[level] = `${finalScore} / ${totalQuestions}`;
    localStorage.setItem("quizResults", JSON.stringify(results));
  };

  useEffect(() => {
    if (currentQuestion) {
      const questionTextForSpeech =
        currentQuestion.type === "fill-in-the-blank"
          ? currentQuestion.question.replace(/_____/g, "blank")
          : currentQuestion.question;

      speechSynthesis.cancel();

      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(questionTextForSpeech);
        utterance.lang = "es-ES";
        speechSynthesis.speak(utterance);
      }, 300);
    }
  }, [currentQuestion]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-blue-400 text-white p-6">
      <h2 className="text-3xl font-extrabold mb-6">Level {level}</h2>

      {selectedAnswer && (
        <>
          <TextToSpeech text={selectedAnswer} lang="en-US" />
          <TextToSpeech text={feedback} lang="es-ES" />
        </>
      )}

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

      <Link to="/levels">
        <button className="w-64 py-3 mb-6 bg-red-500 text-white text-xl rounded-lg shadow-lg hover:bg-red-600">
          Give Up
        </button>
      </Link>

      {isCompleted && (
        <QuizResultModal
          score={score}
          totalQuestions={levelQuestions.length}
          onRetry={() => window.location.reload()}
        />
      )}
    </div>
  );
};

export default Quiz;
