import React, { useState, useEffect } from 'react';
import phrases from '../assets/data/famousPhrases.json';

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
    <div
      className="flex items-center justify-center min-h-screen transition-colors"
      style={{ backgroundColor }}
    >
      <div className="text-center">
        <p className='text-black'>{author}</p>
        <p>- {phrase}</p>
        <button
          onClick={changePhrase}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Cambiar frase
        </button>
      </div>
    </div>
  );
}
