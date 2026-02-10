
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
              EN
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">GrammarHub</h1>
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-600 font-semibold">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Lessons</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>

      <footer className="bg-white border-t py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} English Grammar Hub - Free Learning Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
