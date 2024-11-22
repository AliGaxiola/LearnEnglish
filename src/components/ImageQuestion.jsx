import PropTypes from "prop-types";

const ImageQuestion = ({ question, image, options, onAnswer }) => {
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
ImageQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default ImageQuestion;
