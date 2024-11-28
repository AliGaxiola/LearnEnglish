import PropTypes from "prop-types";
import { useState } from "react";

const FillInTheBlankQuestion = ({ question, options, answer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option);
  };

  // Reemplazar marcadores como "Blank" o "_____" para mostrar una pregunta limpia
  const filteredQuestion = question.replace(/Blank|_____/g, "");

  return (
    <div className="w-full max-w-sm p-6 bg-yellow-200 rounded-2xl shadow-lg mb-8 text-black">
      <h3 className="text-xl font-bold mb-4">{filteredQuestion}</h3>
      <ul className="space-y-3">
        {options.map((option) => {
          let bgColor = "bg-white";
          if (selectedAnswer) {
            if (option === selectedAnswer) {
              bgColor = option === answer ? "bg-green-500" : "bg-red-500";
            }
          }

          return (
            <li
              key={option}
              className={`p-3 rounded-xl cursor-pointer hover:bg-blue-200 ${bgColor}`}
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FillInTheBlankQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default FillInTheBlankQuestion;
