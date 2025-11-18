import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="content-container">
      <h1>🎓 Research Methodology Learning Portal</h1>
      
      <div className="info-box">
        <p style={{fontSize: '1.4rem', textAlign: 'center'}}>
          Welcome to the comprehensive Research Methodology learning platform. This portal provides in-depth coverage of 
          research methodologies, techniques, and best practices essential for conducting rigorous academic and applied research 
          in Computer Science and Engineering.
        </p>
      </div>

      <h2>📚 Course Curriculum</h2>
      
      <div className="card">
        <h3>📚 Unit 1: Introduction to Research Methodology</h3>
        <p>Comprehensive foundation in research principles, scientific method, and research design fundamentals.</p>
        <ul className="emoji-list">
          <li>Definition, Objectives, and Types of Research (Basic, Applied, Exploratory, Descriptive, Experimental)</li>
          <li>Research Paradigms: Quantitative, Qualitative, and Mixed Methods</li>
          <li>Problem Identification, Problem Statements, and Research Questions</li>
          <li>Hypothesis Formulation, Testing, and Statistical Significance</li>
        </ul>
        <button 
          className="interactive-btn"
          onClick={() => navigate('/unit1/introduction')}
        >
          Start Unit 1 →
        </button>
      </div>

      <div className="card">
        <h3>🎨 Unit 2: Research Design and Data Analysis</h3>
        <p>Advanced concepts in experimental design, data collection methodologies, and statistical analysis techniques.</p>
        <ul className="emoji-list">
          <li>Research Design Components: Variables, Control Groups, and Experimental Setup</li>
          <li>Ethical Considerations: AI Bias, Data Privacy, Plagiarism, and Intellectual Property</li>
          <li>Data Collection Methods and Sampling Techniques (Probability and Non-Probability)</li>
          <li>Measurement Scales and Statistical Analysis (Descriptive and Inferential Statistics)</li>
        </ul>
        <button 
          className="interactive-btn"
          onClick={() => navigate('/unit2/design')}
        >
          Start Unit 2 →
        </button>
      </div>

      <div className="card">
        <h3>✍️ Unit 3: Academic Writing and Publication</h3>
        <p>Professional standards for literature review, research writing, and scholarly publication in academic venues.</p>
        <ul className="emoji-list">
          <li>Literature Review Techniques and Database Utilization (IEEE, ACM, Scopus, Springer)</li>
          <li>Research Paper Structure and Academic Writing Standards</li>
          <li>Citation Management Tools (Zotero, Mendeley, EndNote) and Citation Styles (APA, IEEE, MLA)</li>
          <li>Peer Review Process and Publication in Conferences and Journals</li>
        </ul>
        <button 
          className="interactive-btn"
          onClick={() => navigate('/unit3/literature')}
        >
          Start Unit 3 →
        </button>
      </div>

      <div className="fun-fact">
        Research methodology is the systematic, theoretical analysis of the methods applied to a field of study. 
        It comprises the theoretical framework and the collection of data, analysis, and interpretation that are used 
        to solve problems and advance knowledge in a discipline.
      </div>

      <div className="highlight-box">
        <h3 style={{textAlign: 'center', color: '#f57c00'}}>🚀 Begin Your Learning Journey</h3>
        <p style={{textAlign: 'center', fontSize: '1.3rem'}}>
          Navigate through the units using the menu above. Each module provides comprehensive coverage of theoretical concepts, 
          practical applications, formulas, and assessment questions to reinforce your understanding of research methodology.
        </p>
      </div>
    </div>
  );
}

export default Home;
