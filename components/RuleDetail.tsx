
import React, { useEffect } from 'react';
import { Rule } from '../types';
import Exercise from './Exercise';

interface RuleDetailProps {
  rule: Rule;
  onBack: () => void;
}

const RuleDetail: React.FC<RuleDetailProps> = ({ rule, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [rule]);

  const handleYoutubeSearch = () => {
    const query = encodeURIComponent(`English grammar ${rule.title} explanation best lesson`);
    window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <button
        onClick={onBack}
        className="group flex items-center text-gray-600 hover:text-indigo-600 font-bold mb-8 transition-colors text-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to all rules
      </button>

      <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-700 to-blue-600 p-10 md:p-16 text-white text-center">
          <span className="inline-block px-5 py-1.5 bg-white/20 backdrop-blur-xl rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            {rule.category}
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">{rule.title}</h2>
          <p className="text-xl text-indigo-100 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            {rule.longDefinition}
          </p>
        </div>

        <div className="p-8 md:p-16 space-y-20">
          {/* Usage Section */}
          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">When to use?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rule.usage.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-indigo-50/30 p-5 rounded-2xl text-gray-800 border border-indigo-100/50">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-black shadow-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Structure Section */}
          <section className="bg-gray-900 text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
             </div>
            <h3 className="text-2xl font-black mb-12 text-center text-indigo-400 uppercase tracking-widest">Grammar Structure</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="text-indigo-300 font-bold mb-4 text-xs uppercase tracking-tighter">Affirmative (+)</div>
                <div className="text-lg bg-white/5 p-6 rounded-2xl font-mono border border-white/10">{rule.structure.affirmative}</div>
              </div>
              <div className="text-center">
                <div className="text-red-300 font-bold mb-4 text-xs uppercase tracking-tighter">Negative (-)</div>
                <div className="text-lg bg-white/5 p-6 rounded-2xl font-mono border border-white/10">{rule.structure.negative}</div>
              </div>
              <div className="text-center">
                <div className="text-blue-300 font-bold mb-4 text-xs uppercase tracking-tighter">Question (?)</div>
                <div className="text-lg bg-white/5 p-6 rounded-2xl font-mono border border-white/10">{rule.structure.question}</div>
              </div>
            </div>
          </section>

          {/* New Smart Video Discovery Section */}
          <section className="bg-red-50 rounded-[2.5rem] p-8 md:p-12 border border-red-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
               <svg className="w-64 h-64 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-red-600 shadow-xl mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-gray-900 leading-tight">Master {rule.title} with Videos</h3>
              <p className="text-gray-600 max-w-lg font-medium">
                We've prepared a custom search to help you find the absolute best video explanations for this rule on YouTube.
              </p>
              
              <button
                onClick={handleYoutubeSearch}
                className="w-full md:w-auto px-10 py-5 bg-red-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-red-200 hover:bg-red-700 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <span>Search YouTube for me</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-red-100">Top Rated Only</span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-red-100">Native Speakers</span>
                <span className="text-xs font-bold text-red-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-red-100">Visual Aids</span>
              </div>
            </div>
          </section>

          {/* Additional Tables Section */}
          {rule.additionalTables && rule.additionalTables.length > 0 && (
            <section className="space-y-12">
              {rule.additionalTables.map((table, tIndex) => (
                <div key={tIndex} className="overflow-hidden">
                   <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">{table.title}</h3>
                   <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-sm">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-100">
                            {table.headers.map((header, hIndex) => (
                              <th key={hIndex} className="px-6 py-4 text-sm font-black text-indigo-600 uppercase tracking-wider">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {table.rows.map((row, rIndex) => (
                            <tr key={rIndex} className="hover:bg-indigo-50/20 transition-colors">
                              {row.map((cell, cIndex) => (
                                <td key={cIndex} className="px-6 py-4 text-gray-700 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                   </div>
                </div>
              ))}
            </section>
          )}

          {/* Examples Section */}
          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">Examples</h3>
            <div className="space-y-4">
              {rule.examples.map((ex, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-white border-2 border-gray-50 rounded-3xl hover:border-indigo-100 transition-all shadow-sm group">
                  <span className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">"{ex.english}"</span>
                  <span className="text-gray-400 font-medium italic mt-2 md:mt-0">{ex.explanation}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section className="bg-red-50/50 rounded-[2.5rem] p-10 border border-red-100 shadow-sm">
            <h3 className="text-2xl font-black text-red-900 mb-10 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Common Pitfalls
            </h3>
            <div className="space-y-6">
              {rule.commonMistakes.map((mistake, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl border-2 border-red-100 relative">
                    <span className="text-red-600 font-black block text-[10px] mb-3 uppercase tracking-widest">Don't Say:</span>
                    <span className="line-through text-gray-400 text-lg font-medium">{mistake.wrong}</span>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border-2 border-green-100 relative">
                    <span className="text-green-600 font-black block text-[10px] mb-3 uppercase tracking-widest">Say Instead:</span>
                    <span className="text-gray-800 font-bold text-lg">{mistake.right}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Exercises Section */}
          <section>
            <h3 className="text-2xl font-black text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">Challenge Yourself</h3>
            <div className="space-y-8">
              {rule.exercises.map((exercise) => (
                <Exercise key={exercise.id} exercise={exercise} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RuleDetail;
