import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Import components
import Home from './components/Home';
import Introduction from './components/Unit1/Introduction';
import ResearchProblem from './components/Unit1/ResearchProblem';
import ResearchPlanning from './components/Unit1/ResearchPlanning';
import ResearchDesign from './components/Unit2/ResearchDesign';
import DataCollection from './components/Unit2/DataCollection';
import Measurement from './components/Unit2/Measurement';
import LiteratureReview from './components/Unit3/LiteratureReview';
import ResearchWriting from './components/Unit3/ResearchWriting';
import ResearchPresentation from './components/Unit3/ResearchPresentation';

function Navigation() {
  const [openUnit, setOpenUnit] = useState(null);
  const navigate = useNavigate();

  const toggleUnit = (unit) => {
    setOpenUnit(openUnit === unit ? null : unit);
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <Link to="/" className="logo">🔬 Research Learning Hub</Link>
      </div>
      <div className="nav-menu">
        <div className="unit-section">
          <button 
            className={`unit-btn unit-1 ${openUnit === 1 ? 'active' : ''}`}
            onClick={() => toggleUnit(1)}
          >
            📚 Unit 1: Introduction to Research
          </button>
          {openUnit === 1 && (
            <div className="topic-list">
              <button onClick={() => handleNavigation('/unit1/introduction')} className="topic-link">
                🌟 Introduction to Research
              </button>
              <button onClick={() => handleNavigation('/unit1/problem')} className="topic-link">
                ❓ Research Problem & Hypothesis
              </button>
              <button onClick={() => handleNavigation('/unit1/planning')} className="topic-link">
                📋 Research Planning
              </button>
            </div>
          )}
        </div>

        <div className="unit-section">
          <button 
            className={`unit-btn unit-2 ${openUnit === 2 ? 'active' : ''}`}
            onClick={() => toggleUnit(2)}
          >
            🎨 Unit 2: Research Design
          </button>
          {openUnit === 2 && (
            <div className="topic-list">
              <button onClick={() => handleNavigation('/unit2/design')} className="topic-link">
                🎯 Research Design & Ethics
              </button>
              <button onClick={() => handleNavigation('/unit2/data')} className="topic-link">
                📊 Data Collection & Sampling
              </button>
              <button onClick={() => handleNavigation('/unit2/measurement')} className="topic-link">
                📏 Measurement & Analysis
              </button>
            </div>
          )}
        </div>

        <div className="unit-section">
          <button 
            className={`unit-btn unit-3 ${openUnit === 3 ? 'active' : ''}`}
            onClick={() => toggleUnit(3)}
          >
            ✍️ Unit 3: Writing & Publication
          </button>
          {openUnit === 3 && (
            <div className="topic-list">
              <button onClick={() => handleNavigation('/unit3/literature')} className="topic-link">
                📖 Literature Review
              </button>
              <button onClick={() => handleNavigation('/unit3/writing')} className="topic-link">
                ✏️ Research Writing
              </button>
              <button onClick={() => handleNavigation('/unit3/presentation')} className="topic-link">
                🎤 Research Presentation
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit1/introduction" element={<Introduction />} />
            <Route path="/unit1/problem" element={<ResearchProblem />} />
            <Route path="/unit1/planning" element={<ResearchPlanning />} />
            <Route path="/unit2/design" element={<ResearchDesign />} />
            <Route path="/unit2/data" element={<DataCollection />} />
            <Route path="/unit2/measurement" element={<Measurement />} />
            <Route path="/unit3/literature" element={<LiteratureReview />} />
            <Route path="/unit3/writing" element={<ResearchWriting />} />
            <Route path="/unit3/presentation" element={<ResearchPresentation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
