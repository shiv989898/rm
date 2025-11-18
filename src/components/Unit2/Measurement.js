import React, { useState } from 'react';

function Measurement() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Measurement & Data Analysis</h1>

        <div className="info-box">
          <p><strong>Measurement</strong> is the process of assigning numbers or labels to objects, events, or variables according to specific rules. Understanding measurement scales and statistical analysis techniques is fundamental to conducting rigorous quantitative research.</p>
        </div>

        <h2>1. Scales of Measurement</h2>

        <p>The scale of measurement determines which statistical operations are appropriate for analyzing data. There are four primary scales, each with increasing levels of mathematical properties.</p>

        <div className="card">
          <h4>A. Nominal Scale</h4>
          <p><strong>Definition:</strong> Categories with no inherent order or numerical meaning. Used for classification only.</p>
          
          <p><strong>Properties:</strong></p>
          <ul className="emoji-list">
            <li>Categories are mutually exclusive</li>
            <li>No ordering or ranking</li>
            <li>Cannot perform mathematical operations</li>
          </ul>

          <p><strong>Statistical Measures:</strong> Mode, frequency, chi-square test</p>

          <div className="example-box">
            <div className="example-title">CS Examples</div>
            <ul>
              <li>Programming languages: Python, Java, C++, JavaScript</li>
              <li>Operating systems: Windows, macOS, Linux</li>
              <li>Database types: SQL, NoSQL, Graph, Time-series</li>
              <li>Error types: Syntax, Runtime, Logic</li>
              <li>User roles: Admin, Developer, Viewer</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>B. Ordinal Scale</h4>
          <p><strong>Definition:</strong> Categories with meaningful order, but intervals between values are not equal or meaningful.</p>
          
          <p><strong>Properties:</strong></p>
          <ul className="emoji-list">
            <li>Categories have rank order</li>
            <li>Differences between ranks not necessarily equal</li>
            <li>Can determine greater/less than</li>
          </ul>

          <p><strong>Statistical Measures:</strong> Median, mode, percentiles, Spearman correlation</p>

          <div className="example-box">
            <div className="example-title">CS Examples</div>
            <ul>
              <li>Priority levels: Low, Medium, High, Critical</li>
              <li>Experience: Beginner, Intermediate, Advanced, Expert</li>
              <li>Satisfaction rating: Very Dissatisfied, Dissatisfied, Neutral, Satisfied, Very Satisfied</li>
              <li>Bug severity: Minor, Moderate, Major, Blocker</li>
              <li>Performance rating: Poor, Fair, Good, Excellent</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>C. Interval Scale</h4>
          <p><strong>Definition:</strong> Ordered categories with equal intervals between values, but no true zero point.</p>
          
          <p><strong>Properties:</strong></p>
          <ul className="emoji-list">
            <li>Equal intervals between consecutive values</li>
            <li>Can add and subtract</li>
            <li>Cannot multiply or divide meaningfully</li>
            <li>Zero is arbitrary, not absence of quantity</li>
          </ul>

          <p><strong>Statistical Measures:</strong> Mean, median, mode, standard deviation, Pearson correlation, t-test, ANOVA</p>

          <div className="example-box">
            <div className="example-title">CS Examples</div>
            <ul>
              <li>Temperature in Celsius/Fahrenheit (0° doesn't mean "no temperature")</li>
              <li>Likert scales (1-5 or 1-7 rating scales)</li>
              <li>IQ scores</li>
              <li>System Usability Scale (SUS) scores</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>D. Ratio Scale</h4>
          <p><strong>Definition:</strong> Ordered categories with equal intervals AND a true zero point representing absence of the attribute.</p>
          
          <p><strong>Properties:</strong></p>
          <ul className="emoji-list">
            <li>All properties of interval scale</li>
            <li>True zero point (meaningful absence)</li>
            <li>Can perform all mathematical operations</li>
            <li>Can calculate ratios (twice as much, half as many)</li>
          </ul>

          <p><strong>Statistical Measures:</strong> All statistical measures (mean, median, mode, geometric mean, coefficient of variation)</p>

          <div className="example-box">
            <div className="example-title">CS Examples</div>
            <ul>
              <li>Execution time: 0 seconds means no time elapsed</li>
              <li>Memory usage: 0 MB means no memory used</li>
              <li>Number of errors: 0 means no errors</li>
              <li>Lines of code: 0 means no code</li>
              <li>Response time in milliseconds</li>
              <li>Bandwidth in Mbps</li>
              <li>File size in bytes</li>
            </ul>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Scale</th>
              <th>Order</th>
              <th>Equal Intervals</th>
              <th>True Zero</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nominal</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>=, ≠</td>
            </tr>
            <tr>
              <td>Ordinal</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>=, ≠, &lt;, &gt;</td>
            </tr>
            <tr>
              <td>Interval</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>=, ≠, &lt;, &gt;, +, -</td>
            </tr>
            <tr>
              <td>Ratio</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>=, ≠, &lt;, &gt;, +, -, ×, ÷</td>
            </tr>
          </tbody>
        </table>

        <h2>2. Statistical Tools for Data Analysis</h2>

        <div className="card">
          <h4>A. Microsoft Excel</h4>
          <p><strong>Capabilities:</strong></p>
          <ul className="emoji-list">
            <li>Basic statistical functions: AVERAGE, MEDIAN, STDEV, COUNT</li>
            <li>Data visualization: Charts, graphs, pivot tables</li>
            <li>Analysis ToolPak: Regression, ANOVA, t-tests</li>
            <li>Descriptive statistics and histograms</li>
          </ul>
          <p><strong>Best For:</strong> Small to medium datasets, quick exploratory analysis, business reporting</p>
        </div>

        <div className="card">
          <h4>B. R Programming</h4>
          <p><strong>Capabilities:</strong></p>
          <ul className="emoji-list">
            <li>Comprehensive statistical analysis</li>
            <li>Advanced visualization (ggplot2)</li>
            <li>Data manipulation (dplyr, tidyr)</li>
            <li>Machine learning (caret, randomForest)</li>
            <li>Reproducible research (R Markdown)</li>
          </ul>
          <p><strong>Popular Packages:</strong> dplyr, ggplot2, tidyr, caret, shiny</p>
          <p><strong>Best For:</strong> Statistical modeling, academic research, data science</p>
        </div>

        <div className="card">
          <h4>C. Python</h4>
          <p><strong>Capabilities:</strong></p>
          <ul className="emoji-list">
            <li>Data analysis: pandas, numpy</li>
            <li>Statistics: scipy.stats, statsmodels</li>
            <li>Visualization: matplotlib, seaborn, plotly</li>
            <li>Machine learning: scikit-learn, TensorFlow, PyTorch</li>
            <li>Jupyter notebooks for interactive analysis</li>
          </ul>
          <p><strong>Best For:</strong> Data science, machine learning, automation, integration with applications</p>
        </div>

        <div className="card">
          <h4>D. SPSS (Statistical Package for Social Sciences)</h4>
          <p><strong>Capabilities:</strong></p>
          <ul className="emoji-list">
            <li>User-friendly GUI interface</li>
            <li>Comprehensive statistical tests</li>
            <li>Survey data analysis</li>
            <li>Advanced statistical procedures</li>
          </ul>
          <p><strong>Best For:</strong> Social science research, survey analysis, researchers preferring GUI</p>
        </div>

        <h2>3. Descriptive Statistics</h2>

        <div className="info-box">
          <p><strong>Descriptive Statistics</strong> summarize and describe the main features of a dataset without making inferences about the population.</p>
        </div>

        <h3>3.1 Measures of Central Tendency</h3>

        <div className="card">
          <h4>Mean (Average)</h4>
          <div className="formula-box">
            <p>μ = (Σx) / n</p>
            <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
              Sum of all values divided by number of values
            </p>
          </div>
          <p><strong>Use When:</strong> Data is normally distributed without outliers</p>
          <p><strong>Affected By:</strong> Extreme values (outliers)</p>
          
          <div className="example-box">
            <div className="example-title">Example: Algorithm Execution Times</div>
            <p>Execution times (ms): 45, 48, 50, 52, 47</p>
            <p>Mean = (45+48+50+52+47)/5 = 242/5 = <strong>48.4 ms</strong></p>
          </div>
        </div>

        <div className="card">
          <h4>Median</h4>
          <p>Middle value when data is ordered. For even number of values, average of two middle values.</p>
          <p><strong>Use When:</strong> Data has outliers or is skewed</p>
          <p><strong>Resistant To:</strong> Extreme values</p>
          
          <div className="example-box">
            <div className="example-title">Example with Outlier</div>
            <p>Response times (ms): 10, 12, 14, 15, 200</p>
            <p>Mean = 50.2 ms (affected by outlier)</p>
            <p>Median = <strong>14 ms</strong> (better representation)</p>
          </div>
        </div>

        <div className="card">
          <h4>Mode</h4>
          <p>Most frequently occurring value in dataset.</p>
          <p><strong>Use When:</strong> Finding most common category or value</p>
          <p><strong>Can Have:</strong> No mode, one mode (unimodal), or multiple modes (bimodal, multimodal)</p>
        </div>

        <h3>3.2 Measures of Dispersion</h3>

        <div className="card">
          <h4>Range</h4>
          <p>Difference between maximum and minimum values.</p>
          <div className="formula-box">
            <p>Range = Max - Min</p>
          </div>
          <p><strong>Limitation:</strong> Only uses two values, ignores distribution</p>
        </div>

        <div className="card">
          <h4>Variance</h4>
          <p>Average of squared deviations from the mean.</p>
          <div className="formula-box">
            <p>σ² = Σ(x - μ)² / n  (population)</p>
            <p>s² = Σ(x - x̄)² / (n-1)  (sample)</p>
          </div>
          <p><strong>Issue:</strong> Units are squared, hard to interpret</p>
        </div>

        <div className="card">
          <h4>Standard Deviation</h4>
          <p>Square root of variance; shows average distance from mean.</p>
          <div className="formula-box">
            <p>σ = √(Σ(x - μ)² / n)</p>
          </div>
          <p><strong>Interpretation:</strong> Larger SD = more spread out data</p>
          
          <div className="example-box">
            <div className="example-title">Example: Code Quality Scores</div>
            <p>Team A scores: 85, 87, 86, 88, 84 (Mean=86, SD=1.4)</p>
            <p>Team B scores: 70, 95, 80, 90, 75 (Mean=82, SD=9.7)</p>
            <p>Team A is more consistent despite similar means.</p>
          </div>
        </div>

        <h3>3.3 Measures of Position</h3>

        <div className="card">
          <h4>Percentiles and Quartiles</h4>
          <ul className="emoji-list">
            <li><strong>Percentile:</strong> Value below which given percentage of observations fall</li>
            <li><strong>Q1 (25th percentile):</strong> First quartile</li>
            <li><strong>Q2 (50th percentile):</strong> Median</li>
            <li><strong>Q3 (75th percentile):</strong> Third quartile</li>
            <li><strong>IQR (Interquartile Range):</strong> Q3 - Q1 (middle 50% of data)</li>
          </ul>

          <div className="fun-fact">
            IQR is useful for identifying outliers: values below Q1-1.5×IQR or above Q3+1.5×IQR are potential outliers.
          </div>
        </div>

        <h2>4. Inferential Statistics Basics</h2>

        <div className="card">
          <h4>Correlation Analysis</h4>
          <p>Measures strength and direction of relationship between two variables.</p>
          
          <div className="formula-box">
            <h4>Pearson Correlation Coefficient (r):</h4>
            <p>r ranges from -1 to +1</p>
            <ul style={{fontSize: '0.9rem', marginTop: '10px', listStyle: 'none'}}>
              <li>r = +1: Perfect positive correlation</li>
              <li>r = 0: No correlation</li>
              <li>r = -1: Perfect negative correlation</li>
            </ul>
          </div>

          <p><strong>Interpretation:</strong></p>
          <ul className="emoji-list">
            <li>0.00 - 0.30: Weak correlation</li>
            <li>0.30 - 0.70: Moderate correlation</li>
            <li>0.70 - 1.00: Strong correlation</li>
          </ul>

          <div className="example-box">
            <div className="example-title">CS Example</div>
            <p><strong>Question:</strong> Is there correlation between code complexity and bug count?</p>
            <p><strong>Result:</strong> r = 0.78 (strong positive correlation)</p>
            <p><strong>Interpretation:</strong> Higher complexity associated with more bugs</p>
            <p><strong>Important:</strong> Correlation ≠ Causation!</p>
          </div>
        </div>

        <div className="card">
          <h4>Hypothesis Testing</h4>
          <p>Statistical method to make decisions about population parameters based on sample data.</p>
          
          <ul className="emoji-list">
            <li><strong>Null Hypothesis (H₀):</strong> No effect or difference exists</li>
            <li><strong>Alternative Hypothesis (H₁):</strong> Effect or difference exists</li>
            <li><strong>p-value:</strong> Probability of observing data if H₀ is true</li>
            <li><strong>Significance level (α):</strong> Typically 0.05 (5%)</li>
          </ul>

          <p><strong>Decision Rule:</strong> If p &lt; α, reject H₀</p>
        </div>

        <div className="card">
          <h4>Common Statistical Tests</h4>
          <table style={{marginTop: '15px'}}>
            <thead>
              <tr>
                <th>Test</th>
                <th>Purpose</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>t-test</strong></td>
                <td>Compare means of two groups</td>
                <td>Compare response time of two algorithms</td>
              </tr>
              <tr>
                <td><strong>ANOVA</strong></td>
                <td>Compare means of 3+ groups</td>
                <td>Compare performance across multiple systems</td>
              </tr>
              <tr>
                <td><strong>Chi-square</strong></td>
                <td>Test association between categorical variables</td>
                <td>Relationship between OS type and bug frequency</td>
              </tr>
              <tr>
                <td><strong>Regression</strong></td>
                <td>Predict dependent variable from independent variable(s)</td>
                <td>Predict project completion time from team size</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>5. Data Visualization</h2>

        <div className="card">
          <h4>Choosing the Right Chart</h4>
          <ul className="emoji-list">
            <li><strong>Bar Chart:</strong> Compare categories (e.g., bugs by module)</li>
            <li><strong>Line Chart:</strong> Show trends over time (e.g., daily active users)</li>
            <li><strong>Scatter Plot:</strong> Show relationship between two variables</li>
            <li><strong>Box Plot:</strong> Show distribution and identify outliers</li>
            <li><strong>Histogram:</strong> Show frequency distribution of continuous data</li>
            <li><strong>Heatmap:</strong> Show patterns in matrix data (e.g., correlation matrix)</li>
          </ul>

          <div className="fun-fact">
            Good visualization follows principles: clear labels, appropriate scale, minimal clutter, color accessibility, and truthful representation of data.
          </div>
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            Execution time measured in milliseconds is an example of which measurement scale?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) Nominal
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) Ordinal
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) Interval
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) Ratio
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'D' ? (
                <span style={{color: '#10b981'}}>✓ Correct! Execution time is a ratio scale because it has a true zero (0ms means no time elapsed), equal intervals, and supports all mathematical operations including ratios.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. Execution time is ratio scale because 0ms is a true zero point (absence of time) and you can meaningfully say one execution is twice as fast as another.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>Measurement scale determines appropriate statistical analyses</li>
            <li>Ratio and interval scales allow for more sophisticated statistical tests</li>
            <li>Choose tools based on data size, analysis complexity, and your expertise</li>
            <li>Descriptive statistics summarize data; inferential statistics make population predictions</li>
            <li>Mean is sensitive to outliers; median is more robust</li>
            <li>Standard deviation measures data spread around the mean</li>
            <li>Correlation shows association but doesn't prove causation</li>
            <li>Visualizations should be clear, accurate, and appropriate for data type</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Measurement;
