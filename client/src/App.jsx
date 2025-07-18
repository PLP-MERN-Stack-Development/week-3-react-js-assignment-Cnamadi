// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/posts';
import About from './pages/About';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
        <header className="flex justify-between items-center p-4 shadow-md dark:shadow-gray-700">
          <h1 className="text-xl font-bold">Cool App</h1>
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/posts" className="hover:underline">Posts</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 rounded transition duration-300 hover:scale-105"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <footer className="text-center p-4 text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
          &copy; 2025 Cool App
        </footer>
      </div>
    </Router>
  );
}
