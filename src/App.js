
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import Alert from './Components/Alert';
import Home from './Components/Home';
import About from './Components/About';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    showAlert(`Search performed with query: "${query}"`);
  };

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(''), 3000); // Hide alert after 3 seconds
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`bg-${darkMode ? 'dark' : 'light'} text-${darkMode ? 'light' : 'dark'}`}>
        <Navbar title="TextUtils" about="About" onSearch={handleSearch} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Alert message={alertMessage} />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/text" element={<TextFrom heading="Enter your text to analyze below" searchQuery={searchQuery} showAlert={showAlert} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}











