
import React, { useState, useMemo } from 'react';
import Layout from './components/Layout';
import RuleCard from './components/RuleCard';
import RuleDetail from './components/RuleDetail';
import { rules } from './data/rules';
import { Rule, Category } from './types';

const App: React.FC = () => {
  const [selectedRule, setSelectedRule] = useState<Rule | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filteredRules = useMemo(() => {
    return rules.filter((rule) => {
      const matchesSearch = 
        rule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || rule.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <Layout>
      {selectedRule ? (
        <RuleDetail rule={selectedRule} onBack={() => setSelectedRule(null)} />
      ) : (
        <div className="space-y-16">
          {/* Hero / Search Section */}
          <section className="text-center space-y-10 animate-in fade-in slide-in-from-top-4 duration-1000">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                Master English <br />
                <span className="text-indigo-600">Simplified & Fun.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
                Clear explanations, real-world examples, and interactive quizzes designed for intermediate students.
              </p>
            </div>

            <div className="max-w-2xl mx-auto relative group">
              <input
                type="text"
                placeholder="Search for a rule (e.g., 'Present Simple' or 'Can')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 text-lg transition-all shadow-xl font-medium"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2 group-focus-within:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${activeCategory === 'All' ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'}`}
              >
                All
              </button>
              {Object.values(Category).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-indigo-600 text-white shadow-xl scale-105' : 'bg-white text-gray-500 border border-gray-100 hover:bg-gray-50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* Cards Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in duration-1000 delay-200">
            {filteredRules.length > 0 ? (
              filteredRules.map((rule) => (
                <RuleCard key={rule.id} rule={rule} onOpen={setSelectedRule} />
              ))
            ) : (
              <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                <div className="text-gray-200 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-2xl text-gray-500 font-black">No rules found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="mt-6 text-indigo-600 font-black hover:underline text-lg"
                >
                  View All Lessons
                </button>
              </div>
            )}
          </section>
        </div>
      )}
    </Layout>
  );
};

export default App;
