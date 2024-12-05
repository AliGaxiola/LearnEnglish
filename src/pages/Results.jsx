import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Results = () => {
  const [results, setResults] = useState({});

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("quizResults")) || {};
    setResults(savedResults);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-400 to-blue-300 text-white p-4">
      <h2 className="text-4xl font-extrabold mb-6">Your Results</h2>
      <div className="grid grid-cols-1 gap-4 w-full max-w-md">
        {Object.keys(results).length === 0 ? (
          <p className="text-lg text-center">No levels completed yet.</p>
        ) : (
          Object.keys(results).map((level) => (
            <div
              key={level}
              className="p-4 bg-white text-black rounded-lg shadow-lg flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold mb-2">Level {level}</h3>
              <p className="text-lg mb-4">{results[level]}</p>
              <Link to={`/quiz?level=${level}`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Try Again
                </button>
              </Link>
            </div>
          ))
        )}
      </div>

      <Link to="/home">
        <button className="w-64 py-4 mt-6 bg-pink-500 text-white text-2xl rounded-lg shadow-lg hover:bg-pink-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Results;
