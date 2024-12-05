import PropTypes from "prop-types";
import { useState } from "react";

const TextQuestion = ({ question, options, answer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option);
  };

  return (
    <div className="w-full max-w-sm p-6 bg-yellow-200 rounded-2xl shadow-lg mb-8 text-black">
      <h3 className="text-xl font-bold mb-4">{question}</h3>
      <ul className="space-y-3">
        {options.map((option) => {
          let bgColor = "bg-white";
          if (selectedAnswer) {
            bgColor =
              option === answer
                ? "bg-green-500"
                : option === selectedAnswer
                ? "bg-red-500"
                : "bg-white";
          }

          return (
            <li
              key={option}
              className={`p-3 rounded-xl cursor-pointer hover:bg-blue-200 ${bgColor} focus:outline-none select-none`}
              style={{
                WebkitTapHighlightColor: "transparent",
                userSelect: "none",
              }}
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

TextQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default TextQuestion;
