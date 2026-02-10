
import React, { useState } from 'react';
import { Exercise as ExerciseType } from '../types';

interface ExerciseProps {
  exercise: ExerciseType;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    if (showResult) return;
    setSelected(option);
  };

  const isCorrect = selected === exercise.correctAnswer;

  return (
    <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100 shadow-sm">
      <h4 className="text-indigo-900 font-bold mb-5 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Quick Quiz:
      </h4>
      <p className="text-gray-800 text-xl font-medium mb-8 leading-relaxed italic">"{exercise.question}"</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {exercise.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`
              py-4 px-6 rounded-2xl border-2 transition-all font-bold text-lg
              ${selected === opt ? 'border-indigo-600 bg-indigo-600 text-white scale-105' : 'border-white bg-white hover:border-indigo-200 text-gray-700 shadow-sm'}
              ${showResult && opt === exercise.correctAnswer ? 'bg-green-100 border-green-500 !text-green-700' : ''}
              ${showResult && selected === opt && !isCorrect ? 'bg-red-100 border-red-500 !text-red-700' : ''}
            `}
          >
            {opt}
          </button>
        ))}
      </div>

      {!showResult ? (
        <button
          disabled={!selected}
          onClick={() => setShowResult(true)}
          className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${selected ? 'bg-indigo-600 text-white shadow-xl hover:bg-indigo-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          Check Answer
        </button>
      ) : (
        <div className={`p-6 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-500 ${isCorrect ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
          <div className="font-black text-lg mb-2 flex items-center gap-2">
            {isCorrect ? (
              <><span className="text-2xl">🎉</span> Correct!</>
            ) : (
              <><span className="text-2xl">❌</span> Oops! The correct answer is: {exercise.correctAnswer}</>
            )}
          </div>
          <p className="text-sm font-medium opacity-90 leading-relaxed">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise;
