import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LevelItem = ({ levelNumber }) => {
  return (
    <Link to={`/quiz?level=${levelNumber}`}>
      <div className="flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-blue-500 text-white text-2xl font-bold rounded-full shadow-lg hover:bg-blue-600">
        {levelNumber}
      </div>
    </Link>
  );
};

LevelItem.propTypes = {
  levelNumber: PropTypes.number.isRequired,
};

export default LevelItem;
