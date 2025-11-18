import React, { useState } from 'react';

function DataCollection() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Data Collection & Sampling Techniques</h1>

        <div className="info-box">
          <p><strong>Data Collection</strong> is the systematic process of gathering and measuring information from various sources to obtain complete and accurate data for research analysis. The quality of research findings directly depends on the quality of data collection methods.</p>
        </div>

        <h2>1. Types of Data</h2>

        <h3>1.1 Primary vs Secondary Data</h3>
        
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Primary Data</th>
              <th>Secondary Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Definition</strong></td>
              <td>Data collected firsthand by researcher for specific study</td>
              <td>Data already collected by someone else for different purpose</td>
            </tr>
            <tr>
              <td><strong>Examples</strong></td>
              <td>Surveys, interviews, experiments, observations</td>
              <td>Published research, datasets, government records, APIs</td>
            </tr>
            <tr>
              <td><strong>Advantages</strong></td>
              <td>Specific to research needs, accurate, controlled quality</td>
              <td>Cost-effective, time-saving, historical analysis possible</td>
            </tr>
            <tr>
              <td><strong>Disadvantages</strong></td>
              <td>Time-consuming, expensive, requires expertise</td>
              <td>May not fit perfectly, quality uncertain, outdated</td>
            </tr>
            <tr>
              <td><strong>CS Examples</strong></td>
              <td>User testing sessions, performance benchmarks, code reviews</td>
              <td>GitHub repositories, Stack Overflow data, Kaggle datasets</td>
            </tr>
          </tbody>
        </table>

        <h3>1.2 Quantitative vs Qualitative Data</h3>

        <div className="card">
          <h4>Quantitative Data</h4>
          <p>Numerical data that can be measured and expressed statistically.</p>
          <ul className="emoji-list">
            <li><strong>Discrete:</strong> Countable values (number of bugs, users, commits)</li>
            <li><strong>Continuous:</strong> Measurable values (execution time, memory usage, response time)</li>
          </ul>
          
          <div className="example-box">
            <div className="example-title">CS Examples</div>
            <ul>
              <li>Algorithm execution time: 125.7 milliseconds</li>
              <li>Memory consumption: 2.4 GB</li>
              <li>Code coverage: 87.5%</li>
              <li>API response time: 45ms</li>
              <li>User session duration: 8 minutes 32 seconds</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>Qualitative Data</h4>
          <p>Non-numerical data describing qualities, characteristics, or experiences.</p>
          <ul className="emoji-list">
            <li>User feedback and reviews</li>
            <li>Interview transcripts</li>
            <li>Code comments and documentation</li>
            <li>Bug descriptions</li>
            <li>Usability observations</li>
          </ul>
        </div>

        <h2>2. Sampling Techniques</h2>

        <div className="info-box">
          <p><strong>Sampling</strong> is selecting a subset of a population to estimate characteristics of the entire population. Proper sampling ensures results are generalizable and statistically valid.</p>
        </div>

        <h3>2.1 Probability Sampling</h3>

        <div className="card">
          <h4>A. Simple Random Sampling</h4>
          <p>Every member has equal chance of selection.</p>
          <p><strong>Example:</strong> Use random number generator to select 500 GitHub repositories from 10,000.</p>
        </div>

        <div className="card">
          <h4>B. Stratified Sampling</h4>
          <p>Divide population into strata, then randomly sample from each.</p>
          <div className="example-box">
            <div className="example-title">Example: Developer Study</div>
            <ul>
              <li>Junior developers (0-2 years): 100 selected</li>
              <li>Mid-level (3-7 years): 150 selected</li>
              <li>Senior (8+ years): 50 selected</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>C. Cluster Sampling</h4>
          <p>Divide population into clusters, randomly select entire clusters.</p>
          <p><strong>Example:</strong> Select 20 companies from 200, survey all developers in selected companies.</p>
        </div>

        <div className="card">
          <h4>D. Systematic Sampling</h4>
          <p>Select every kth element after random start.</p>
          <div className="formula-box">
            <p>k = N / n</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
              N = Population size<br/>
              n = Sample size<br/>
              k = Sampling interval
            </p>
          </div>
          <p><strong>Example:</strong> 5,000 commits, need 500. k=10. Start at #7, select 7, 17, 27, 37...</p>
        </div>

        <h3>2.2 Non-Probability Sampling</h3>

        <div className="card">
          <h4>A. Convenience Sampling</h4>
          <p>Select easily accessible participants.</p>
          <p><strong>Example:</strong> Survey students in your university CS department.</p>
        </div>

        <div className="card">
          <h4>B. Purposive Sampling</h4>
          <p>Deliberately select participants based on criteria.</p>
          <p><strong>Example:</strong> Interview lead engineers from top tech companies for DevOps best practices.</p>
        </div>

        <div className="card">
          <h4>C. Snowball Sampling</h4>
          <p>Participants recruit others from their network.</p>
          <p><strong>Example:</strong> Study hard-to-reach populations like security researchers.</p>
        </div>

        <h2>3. Sample Size Determination</h2>

        <div className="formula-box">
          <h4>Cochran's Formula:</h4>
          <p>n = (Z² × p × (1-p)) / e²</p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Z = 1.96 for 95% confidence<br/>
            p = 0.5 (maximum variability)<br/>
            e = margin of error (0.05 for ±5%)
          </p>
        </div>

        <div className="example-box">
          <div className="example-title">Sample Calculation</div>
          <p><strong>Goal:</strong> Survey developers with 95% confidence, ±5% error</p>
          <p>n = (1.96² × 0.5 × 0.5) / 0.05²</p>
          <p>n = 0.9604 / 0.0025</p>
          <p><strong>n = 385 participants needed</strong></p>
        </div>

        <h2>4. Data Collection Methods</h2>

        <div className="card">
          <h4>Surveys/Questionnaires</h4>
          <p>Structured questions for large-scale data collection.</p>
          <ul className="emoji-list">
            <li><strong>Online:</strong> Google Forms, SurveyMonkey, Qualtrics</li>
            <li><strong>Question Types:</strong> Multiple choice, Likert scale, open-ended</li>
            <li><strong>Advantages:</strong> Efficient, quantifiable, large reach</li>
            <li><strong>Disadvantages:</strong> Limited depth, low response rates</li>
          </ul>
        </div>

        <div className="card">
          <h4>Interviews</h4>
          <p>One-on-one conversations for in-depth insights.</p>
          <ul className="emoji-list">
            <li><strong>Structured:</strong> Fixed questions, consistent across participants</li>
            <li><strong>Semi-structured:</strong> Core questions with flexibility</li>
            <li><strong>Unstructured:</strong> Open conversation guided by themes</li>
          </ul>
        </div>

        <div className="card">
          <h4>Observations</h4>
          <p>Systematic watching and recording of behavior.</p>
          <ul className="emoji-list">
            <li><strong>Participant:</strong> Researcher is part of the group</li>
            <li><strong>Non-participant:</strong> External observer</li>
            <li><strong>CS Example:</strong> Usability testing with screen recording</li>
          </ul>
        </div>

        <div className="card">
          <h4>Experiments</h4>
          <p>Controlled manipulation of variables to test hypotheses.</p>
          <ul className="emoji-list">
            <li>A/B testing of UI designs</li>
            <li>Algorithm performance comparisons</li>
            <li>System load testing</li>
          </ul>
        </div>

        <h2>5. Data Quality</h2>

        <div className="card">
          <h4>Validity</h4>
          <p>Does the measurement accurately capture what it intends to measure?</p>
          <ul className="emoji-list">
            <li><strong>Content Validity:</strong> Covers all aspects of concept</li>
            <li><strong>Criterion Validity:</strong> Correlates with established measures</li>
            <li><strong>Construct Validity:</strong> Reflects theoretical construct</li>
          </ul>
        </div>

        <div className="card">
          <h4>Reliability</h4>
          <p>Consistency and stability of measurements.</p>
          <ul className="emoji-list">
            <li><strong>Test-Retest:</strong> Consistency over time</li>
            <li><strong>Inter-Rater:</strong> Agreement between observers</li>
            <li><strong>Internal Consistency:</strong> Cronbach's α ≥ 0.70</li>
          </ul>
        </div>

        <div className="fun-fact">
          Always pilot test your data collection instruments before full deployment. This helps identify ambiguous questions, technical issues, and estimate completion time.
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            A researcher divides a population of developers into experience levels (junior, mid, senior) and randomly selects participants from each group. Which sampling method is this?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) Simple Random Sampling
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) Stratified Sampling
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) Cluster Sampling
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) Convenience Sampling
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'B' ? (
                <span style={{color: '#10b981'}}>✓ Correct! Stratified sampling divides the population into homogeneous groups (strata) and randomly samples from each to ensure representation.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. This is stratified sampling because the population is divided into experience level strata and random samples are taken from each.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>Choose data collection methods that align with research objectives</li>
            <li>Primary data is specific but resource-intensive; secondary data is efficient but may not fit perfectly</li>
            <li>Probability sampling enables statistical generalization to populations</li>
            <li>Sample size depends on confidence level, margin of error, and population variability</li>
            <li>Ensure both validity (accuracy) and reliability (consistency) in measurements</li>
            <li>Always pilot test instruments before full-scale data collection</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataCollection;
