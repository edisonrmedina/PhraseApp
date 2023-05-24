import React, { useState, useEffect } from 'react';
import phrases from '../assets/data/famousPhrases.json';
import '../Components/PhraseComponente.css'

export default function PhraseComponent() {

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(
    Math.floor(Math.random() * phrases.length)
  );

  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    setBackgroundColor(generateRandomColor());
  }, []);

  const changePhrase = () => {
    const newIndex = Math.floor(Math.random() * phrases.length);
    setCurrentPhraseIndex(newIndex);
    setBackgroundColor(generateRandomColor());
  };

  const { author, phrase } = phrases[currentPhraseIndex];

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen background-image">
      <div className="text-center">
      <div className="absolute w-443.26 h-88 left-422 top-95"></div>
        <p className="font-fredoka-one font-normal text-3xl leading-11 text-white text-center">Galletas de la fortunas</p>
        <p className="text-black">{author}</p>
        <p class="p-8">{phrase}</p>
        <button
          onClick={changePhrase}
          className="mt-4 px-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 p-"
        >
          Cambiar frase
        </button>
      </div>
      <div className="image-container-semillas"></div>
    </div>
  );
  
}
