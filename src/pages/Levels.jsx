import { Link } from "react-router-dom";
import LevelItem from "../components/LevelItem";

const levels = [1, 2, 3, 4, 5, 6]; // Niveles disponibles

const Levels = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-300 to-blue-400 text-white p-6">
      <h2 className="text-4xl font-extrabold mb-8">Select Your Level</h2>

      {/* Contenedor de niveles centrado */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10">
        {levels.map((level) => (
          <LevelItem key={level} levelNumber={level} />
        ))}
      </div>

      {/* Botón para regresar a Home */}
      <Link to="/">
        <button className="w-64 py-4 bg-pink-500 text-white text-2xl rounded-lg shadow-lg hover:bg-pink-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Levels;
