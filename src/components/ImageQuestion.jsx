import PropTypes from "prop-types";
import { useState } from "react";

const ImageQuestion = ({ question, image, options, answer, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleClick = (option) => {
    setSelectedAnswer(option);
    onAnswer(option);
  };

  return (
    <div className="w-full max-w-sm p-6 bg-yellow-200 rounded-2xl shadow-lg mb-8 text-black">
      <h3 className="text-xl font-bold mb-4">{question}</h3>
      <div className="flex justify-center items-center mb-4">
        <img
          src={`/images/${image}`}
          alt={question}
          className="w-40 h-40 object-contain rounded-lg"
        />
      </div>
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

ImageQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ImageQuestion;
