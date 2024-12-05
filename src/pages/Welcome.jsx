import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-300 to-yellow-400 text-center p-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-800 mb-6">
        Learn English
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
        Enter your name to begin your journey!
      </p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="w-64 p-3 text-lg rounded-lg shadow-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={handleStart}
        className="w-64 py-3 bg-blue-500 text-white text-lg md:text-2xl rounded-lg shadow-lg hover:bg-blue-600"
      >
        Start
      </button>
    </div>
  );
};

export default Welcome;
