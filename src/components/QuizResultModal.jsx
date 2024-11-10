import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuizResultModal = ({ score, totalQuestions }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-xs sm:max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-2xl font-bold mb-4 text-black">Quiz Completed!</h3>
        <p className="text-lg mb-6 text-black">
          You scored {score} out of {totalQuestions}.
        </p>
        {/* Botones responsivos */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/levels">
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Go to Levels
            </button>
          </Link>
          <Link to="/results">
            <button className="w-full sm:w-auto px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Results
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

QuizResultModal.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default QuizResultModal;
