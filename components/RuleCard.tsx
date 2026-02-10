
import React from 'react';
import { Rule } from '../types';

interface RuleCardProps {
  rule: Rule;
  onOpen: (rule: Rule) => void;
}

const RuleCard: React.FC<RuleCardProps> = ({ rule, onOpen }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col group h-full">
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
          {rule.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {rule.title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-2">
        {rule.shortDescription}
      </p>
      
      <div className="space-y-2 mb-6">
        {rule.examples.slice(0, 1).map((ex, i) => (
          <div key={i} className="text-xs bg-gray-50 p-3 rounded-lg border border-gray-100 italic">
            <p className="font-bold text-gray-800">"{ex.english}"</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => onOpen(rule)}
        className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 group/btn"
      >
        <span>Open Lesson</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default RuleCard;
