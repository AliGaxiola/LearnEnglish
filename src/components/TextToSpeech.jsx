import { useEffect } from "react";
import PropTypes from "prop-types";

const TextToSpeech = ({ text, lang = "es-ES" }) => {
  useEffect(() => {
    if ("speechSynthesis" in window && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    }
  }, [text, lang]);

  return null; // No renderiza nada
};

// Validación de props con PropTypes
TextToSpeech.propTypes = {
  text: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

export default TextToSpeech;
