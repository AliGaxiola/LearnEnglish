import PropTypes from "prop-types";

const FillInTheBlankQuestion = ({ question, options, onAnswer }) => {
  return (
    <div className="w-full max-w-sm p-6 bg-yellow-200 rounded-2xl shadow-lg mb-8 text-black">
      <h3 className="text-xl font-bold mb-4">{question}</h3>
      <ul className="space-y-3">
        {options.map((option) => (
          <li
            key={option}
            className="p-3 bg-white rounded-xl hover:bg-blue-200 cursor-pointer"
            onClick={() => onAnswer(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Validación de props
FillInTheBlankQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default FillInTheBlankQuestion;
