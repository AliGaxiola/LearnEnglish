import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-300 to-pink-400 text-center p-4">
      <h1 className="text-5xl font-extrabold text-purple-800 mb-6">
        Learn English
      </h1>
      <p className="text-lg text-white mb-8">
        Fun and interactive quizzes to improve your English skills!
      </p>

      <Link to="/levels">
        <button className="w-64 py-4 mb-4 bg-blue-500 text-white text-2xl rounded-lg shadow-lg hover:bg-blue-600">
          Start
        </button>
      </Link>

      <Link to="/results">
        <button className="w-64 py-4 bg-green-500 text-white text-2xl rounded-lg shadow-lg hover:bg-green-600">
          Results
        </button>
      </Link>
    </div>
  );
};

export default Home;
