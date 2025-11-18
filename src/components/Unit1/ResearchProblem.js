import React, { useState } from 'react';

function ResearchProblem() {
  const [quiz1Answer, setQuiz1Answer] = useState(null);
  const [quiz2Answer, setQuiz2Answer] = useState(null);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  return (
    <div className="content-container">
      <h1>❓ Research Problem and Hypothesis Formulation</h1>
      
      <div className="info-box">
        <p style={{fontSize: '1.3rem'}}>
          The foundation of any research study lies in the clear identification of a research problem and the 
          formulation of testable hypotheses. This module covers the systematic process of defining research 
          problems, constructing research questions, and developing hypotheses that guide empirical investigation.
        </p>
      </div>

      <h2>🔍 Problem Identification</h2>
      <div className="card">
        <h3>Definition</h3>
        <p>
          <strong>Problem identification</strong> is the process of recognizing and defining a specific issue, gap, 
          or question that warrants systematic investigation. It involves identifying discrepancies between the current 
          state of knowledge and the desired state, or between existing conditions and ideal outcomes.
        </p>
        
        <h3>Sources of Research Problems</h3>
        <ul>
          <li><strong>Literature Gaps:</strong> Identifying areas where knowledge is limited, contradictory, or absent</li>
          <li><strong>Practical Problems:</strong> Observing real-world issues in organizations, systems, or processes</li>
          <li><strong>Theoretical Inconsistencies:</strong> Recognizing conflicts or limitations in existing theories</li>
          <li><strong>Methodological Limitations:</strong> Identifying weaknesses in previous research approaches</li>
          <li><strong>Technological Advances:</strong> Exploring opportunities created by new technologies</li>
          <li><strong>Societal Needs:</strong> Addressing pressing challenges faced by communities or industries</li>
          <li><strong>Personal Observation:</strong> Noticing patterns or anomalies in professional or academic contexts</li>
        </ul>

        <h3>Criteria for a Researchable Problem</h3>
        <ul>
          <li><strong>Feasibility:</strong> Can be investigated with available resources, time, and expertise</li>
          <li><strong>Significance:</strong> Contributes meaningful knowledge or practical value</li>
          <li><strong>Specificity:</strong> Clearly defined and focused, not overly broad</li>
          <li><strong>Researchability:</strong> Amenable to empirical investigation and data collection</li>
          <li><strong>Ethical Soundness:</strong> Can be studied without violating ethical principles</li>
          <li><strong>Originality:</strong> Offers new insights or perspectives</li>
          <li><strong>Interest:</strong> Genuinely interesting to the researcher and relevant to the field</li>
        </ul>
      </div>

      <div className="example-box">
        <div className="example-title">Examples of Research Problems in Computer Science</div>
        <ul>
          <li><strong>Security:</strong> Existing intrusion detection systems have high false-positive rates, leading to 
          alert fatigue among security analysts</li>
          <li><strong>Machine Learning:</strong> Current deep learning models require massive labeled datasets, creating 
          barriers for domains with limited annotated data</li>
          <li><strong>Software Engineering:</strong> Agile methodologies face challenges when applied to distributed teams 
          across multiple time zones</li>
          <li><strong>HCI:</strong> Voice-based interfaces demonstrate inconsistent performance for users with non-standard 
          accents or speech patterns</li>
          <li><strong>Cloud Computing:</strong> Multi-cloud environments lack standardized approaches for workload optimization 
          and cost management</li>
        </ul>
      </div>

      <h2>📝 Problem Statement</h2>
      <div className="highlight-box">
        <h3>Definition</h3>
        <p>
          A <strong>problem statement</strong> is a concise description of the issue to be investigated. It articulates 
          the gap between the current state and desired state, providing clear direction for the research. An effective 
          problem statement establishes the context, identifies the specific problem, explains its significance, and 
          indicates the proposed approach to address it.
        </p>
      </div>

      <div className="card">
        <h3>Components of an Effective Problem Statement</h3>
        <ul>
          <li><strong>Context:</strong> Background information establishing the setting and scope</li>
          <li><strong>Problem Description:</strong> Clear articulation of the specific issue</li>
          <li><strong>Significance:</strong> Explanation of why the problem matters</li>
          <li><strong>Gap Identification:</strong> What is missing or inadequate in current knowledge/practice</li>
          <li><strong>Affected Stakeholders:</strong> Who is impacted by this problem</li>
          <li><strong>Consequences:</strong> Implications of not addressing the problem</li>
        </ul>

        <h3>Characteristics of Strong Problem Statements</h3>
        <ul>
          <li>Precise and specific (avoids vague language)</li>
          <li>Focused on a single problem</li>
          <li>Evidence-based (supported by data or literature)</li>
          <li>Significant and relevant</li>
          <li>Researchable with empirical methods</li>
          <li>Clear and unambiguous</li>
          <li>Concise (typically 150-300 words)</li>
        </ul>
      </div>

      <div className="card">
        <h3>Problem Statement Template</h3>
        <div className="formula-box">
          The problem of [PROBLEM] affects [STAKEHOLDERS] resulting in [CONSEQUENCES]. <br/>
          The impact of this problem includes [NEGATIVE EFFECTS]. <br/>
          A successful solution would [BENEFITS].
        </div>

        <div className="example-box">
          <div className="example-title">Example Problem Statement:</div>
          <p>
            <strong>Context:</strong> Cloud computing has become ubiquitous in enterprise IT infrastructure, with organizations 
            increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs.<br/><br/>
            
            <strong>Problem:</strong> However, managing resource allocation and workload distribution across multiple cloud 
            providers presents significant challenges. Current solutions lack unified frameworks for real-time optimization 
            considering both performance requirements and cost constraints.<br/><br/>
            
            <strong>Significance:</strong> This gap results in suboptimal resource utilization, with organizations experiencing 
            30-40% higher operational costs and degraded application performance (Smith et al., 2023). The absence of automated, 
            intelligent orchestration mechanisms forces IT teams to manually manage cloud resources, leading to inefficiencies 
            and increased human error.<br/><br/>
            
            <strong>Proposed Approach:</strong> This research investigates machine learning-based optimization algorithms for 
            dynamic workload allocation in multi-cloud environments, aiming to reduce costs while maintaining SLA compliance.
          </p>
        </div>
      </div>

      <h2>🎯 Research Objectives</h2>
      <div className="info-box">
        <p>
          <strong>Research objectives</strong> are your specific goals - what exactly you want to 
          achieve with your research. Think of them as your mission checklist!
        </p>
      </div>

      <div className="card">
        <h3>How to Write Research Objectives:</h3>
        <p>Start with action words like:</p>
        <ul className="emoji-list">
          <li>To identify... 🔍</li>
          <li>To determine... 📊</li>
          <li>To compare... ⚖️</li>
          <li>To analyze... 🔬</li>
          <li>To evaluate... ✅</li>
          <li>To investigate... 🕵️</li>
        </ul>
        
        <div className="example-box">
          <div className="example-title">🌟 Example Objectives for Gaming & Learning Study:</div>
          <ol>
            <li>To determine how many hours per week students spend playing educational games</li>
            <li>To identify which types of educational games students prefer most</li>
            <li>To analyze the relationship between gaming time and test scores</li>
            <li>To compare learning outcomes between game-based and traditional learning methods</li>
          </ol>
        </div>
      </div>

      <h2>❓ Research Questions</h2>
      <div className="card">
        <p>
          Research questions are the specific questions you want to answer. They guide your 
          entire research project!
        </p>
        
        <h3>Characteristics of Good Research Questions:</h3>
        <ul className="emoji-list">
          <li><strong>Clear:</strong> Easy to understand</li>
          <li><strong>Focused:</strong> Not too broad</li>
          <li><strong>Answerable:</strong> You can actually find the answer</li>
          <li><strong>Interesting:</strong> People care about the answer</li>
        </ul>

        <div className="example-box">
          <div className="example-title">🌟 Examples of Research Questions:</div>
          <ul>
            <li>Does using a tablet for homework help students finish faster than using paper?</li>
            <li>What percentage of students prefer online learning to in-person classes?</li>
            <li>How does sleep time affect memory and learning ability?</li>
            <li>Which programming language is easier for beginners to learn: Python or JavaScript?</li>
          </ul>
        </div>
      </div>

      <h2>Research Hypothesis</h2>
      <div className="info-box">
        <p>
          A <strong>research hypothesis</strong> is a testable statement proposing a relationship between two or more variables. 
          It serves as the foundation for empirical investigation and guides the research design and statistical analysis.
        </p>
      </div>

      <div className="card">
        <h3>Characteristics of a Good Hypothesis</h3>
        <ul className="emoji-list">
          <li><strong>Testable:</strong> Can be empirically verified through observation or experimentation</li>
          <li><strong>Specific:</strong> Clearly defines variables and relationships</li>
          <li><strong>Grounded in Theory:</strong> Based on existing literature and theoretical frameworks</li>
          <li><strong>Falsifiable:</strong> Capable of being proven false (Popper's criterion)</li>
          <li><strong>Measurable:</strong> Variables can be operationally defined and quantified</li>
          <li><strong>Parsimonious:</strong> Simple and straightforward without unnecessary complexity</li>
        </ul>
      </div>

      <h3>Hypothesis Formulation Process</h3>
      <div className="flowchart">
        <div className="flow-step">1. Identify Variables: Independent (IV) and Dependent (DV)</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">2. Specify Relationship: Directional or non-directional</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">3. Ensure Measurability: Operational definitions</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">4. Ground in Theory: Literature support</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">5. Formulate Null and Alternative Hypotheses</div>
      </div>

      <h2>Types of Hypotheses</h2>
      
      <div className="card">
        <h3>1. Null Hypothesis (H₀)</h3>
        <p>
          The <strong>null hypothesis</strong> states that there is no relationship between variables or no difference 
          between groups. It represents the status quo or default assumption that any observed effect is due to chance.
        </p>
        <div className="formula-box">
          <strong>General Form:</strong><br/>
          H₀: There is no significant relationship between [Variable X] and [Variable Y]<br/>
          H₀: μ₁ = μ₂ (population means are equal)
        </div>
        
        <div className="example-box">
          <div className="example-title">Computer Science Example:</div>
          <p><strong>Research Context:</strong> Investigating whether code review affects software defect rates</p>
          <p><strong>H₀:</strong> There is no significant difference in defect rates between projects with formal code review 
          and projects without formal code review.</p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}><em>Formally:</em> H₀: μ<sub>review</sub> = μ<sub>no-review</sub></p>
        </div>
      </div>

      <div className="card">
        <h3>2. Alternative Hypothesis (H₁ or Hₐ)</h3>
        <p>
          The <strong>alternative hypothesis</strong> states that there is a relationship between variables or a difference 
          between groups. It represents the research prediction and is what researchers aim to support.
        </p>
        <div className="formula-box">
          <strong>General Forms:</strong><br/>
          <strong>Non-directional (Two-tailed):</strong> H₁: μ₁ ≠ μ₂ (means are different)<br/>
          <strong>Directional (One-tailed):</strong> H₁: μ₁ &gt; μ₂ or H₁: μ₁ &lt; μ₂
        </div>
        
        <div className="example-box">
          <div className="example-title">Example (Non-directional):</div>
          <p><strong>H₁:</strong> There is a significant difference in defect rates between projects with formal code review 
          and projects without formal code review.</p>
          <p style={{fontSize: '0.9rem', marginTop: '5px'}}><em>Formally:</em> H₁: μ<sub>review</sub> ≠ μ<sub>no-review</sub></p>
        </div>

        <div className="example-box" style={{marginTop: '15px'}}>
          <div className="example-title">Example (Directional):</div>
          <p><strong>H₁:</strong> Projects with formal code review have significantly lower defect rates than projects 
          without formal code review.</p>
          <p style={{fontSize: '0.9rem', marginTop: '5px'}}><em>Formally:</em> H₁: μ<sub>review</sub> &lt; μ<sub>no-review</sub></p>
        </div>
      </div>

      <div className="info-box">
        <h3>Directional vs. Non-directional Hypotheses</h3>
        <p><strong>Non-directional (Two-tailed):</strong> Predicts a difference but not the direction. Used when prior research 
        is inconclusive or when exploring new relationships.</p>
        <p style={{marginTop: '10px'}}><strong>Directional (One-tailed):</strong> Predicts the specific direction of the effect. 
        Used when theory strongly suggests a particular direction. Provides more statistical power but only tests one direction.</p>
      </div>

      <h2>Hypothesis Testing Process</h2>
      <div className="flowchart">
        <div className="flow-step">1. State Hypotheses: H₀ and H₁</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">2. Choose Significance Level: α (typically 0.05 or 0.01)</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">3. Select Appropriate Test: t-test, ANOVA, chi-square, etc.</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">4. Calculate Test Statistic: From sample data</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">5. Determine p-value: Probability under H₀</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">6. Decision Rule: If p &lt; α, reject H₀; otherwise, fail to reject H₀</div>
        <div className="flow-arrow">↓</div>
        <div className="flow-step">7. Interpret Results: Draw conclusions with effect sizes</div>
      </div>

      <h2>Statistical Errors in Hypothesis Testing</h2>
      
      <table>
        <thead>
          <tr>
            <th></th>
            <th>H₀ is True</th>
            <th>H₀ is False</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Reject H₀</strong></td>
            <td style={{background: '#ef4444', color: '#fff'}}>Type I Error (α)<br/>False Positive</td>
            <td style={{background: '#10b981', color: '#fff'}}>Correct Decision<br/>Power (1-β)</td>
          </tr>
          <tr>
            <td><strong>Fail to Reject H₀</strong></td>
            <td style={{background: '#10b981', color: '#fff'}}>Correct Decision<br/>Confidence (1-α)</td>
            <td style={{background: '#ef4444', color: '#fff'}}>Type II Error (β)<br/>False Negative</td>
          </tr>
        </tbody>
      </table>

      <div className="card" style={{marginTop: '20px'}}>
        <h3>Type I Error (α) - False Positive</h3>
        <p>
          <strong>Definition:</strong> Rejecting the null hypothesis when it is actually true. Concluding there is an effect 
          when there is none.
        </p>
        <p><strong>Probability:</strong> Denoted by α (significance level), typically set at 0.05 or 0.01</p>
        
        <div className="example-box">
          <div className="example-title">Example:</div>
          <p><strong>Reality:</strong> A new caching algorithm does NOT improve database query performance (H₀ is true)</p>
          <p><strong>Your Conclusion:</strong> Based on your experiment, you conclude the algorithm DOES improve performance (reject H₀)</p>
          <p><strong>Error:</strong> You've made a Type I error - claiming an improvement that doesn't actually exist</p>
        </div>

        <p style={{marginTop: '15px'}}><strong>Consequences:</strong></p>
        <ul className="emoji-list">
          <li>Publishing false findings</li>
          <li>Implementing ineffective solutions</li>
          <li>Wasting resources on non-existent effects</li>
          <li>Damaging research credibility</li>
        </ul>
      </div>

      <div className="card">
        <h3>Type II Error (β) - False Negative</h3>
        <p>
          <strong>Definition:</strong> Failing to reject the null hypothesis when it is actually false. Missing a real effect 
          that exists.
        </p>
        <p><strong>Probability:</strong> Denoted by β, varies based on sample size, effect size, and α level</p>
        
        <div className="example-box">
          <div className="example-title">Example:</div>
          <p><strong>Reality:</strong> A new machine learning model DOES improve prediction accuracy (H₀ is false)</p>
          <p><strong>Your Conclusion:</strong> Based on your experiment, you conclude there is NO significant improvement (fail to reject H₀)</p>
          <p><strong>Error:</strong> You've made a Type II error - missing a real improvement</p>
        </div>

        <p style={{marginTop: '15px'}}><strong>Consequences:</strong></p>
        <ul className="emoji-list">
          <li>Missing important discoveries</li>
          <li>Discarding effective solutions</li>
          <li>Concluding research prematurely</li>
          <li>Failing to detect harmful effects</li>
        </ul>
      </div>

      <div className="info-box">
        <h3>Relationship Between α and β</h3>
        <p>
          There is an inverse relationship between Type I and Type II errors. Reducing α (being more conservative) increases β 
          (more likely to miss effects). The balance depends on the context:
        </p>
        <ul className="emoji-list">
          <li><strong>Medical Research:</strong> Lower α (e.g., 0.01) to avoid false positives about drug effectiveness</li>
          <li><strong>Exploratory Research:</strong> Higher α (e.g., 0.10) acceptable to avoid missing potential effects</li>
        </ul>
      </div>

      <h2>Statistical Power</h2>
      
      <div className="card">
        <p>
          <strong>Statistical Power</strong> is the probability of correctly rejecting a false null hypothesis (detecting 
          a true effect when it exists).
        </p>
        <div className="formula-box">
          Power = 1 - β<br/>
          <span style={{fontSize: '0.9rem'}}>Where β is the probability of Type II error</span>
        </div>

        <p style={{marginTop: '15px'}}><strong>Conventional Standards:</strong></p>
        <ul className="emoji-list">
          <li>Minimum acceptable power: 0.80 (80%)</li>
          <li>Preferred power: 0.90 (90%) for critical research</li>
        </ul>

        <h4 style={{marginTop: '20px'}}>Factors Affecting Power:</h4>
        <ul className="emoji-list">
          <li><strong>Sample Size (n):</strong> Larger samples increase power</li>
          <li><strong>Effect Size:</strong> Larger effects easier to detect</li>
          <li><strong>Significance Level (α):</strong> Higher α increases power (but also Type I error risk)</li>
          <li><strong>Variability:</strong> Less noise in data increases power</li>
        </ul>
      </div>

      <h2>p-value Interpretation</h2>
      
      <div className="card">
        <p>
          The <strong>p-value</strong> is the probability of obtaining results as extreme as observed, assuming the null 
          hypothesis is true.
        </p>

        <h4>Decision Rule:</h4>
        <ul className="emoji-list">
          <li><strong>If p &lt; α:</strong> Reject H₀ (statistically significant result)</li>
          <li><strong>If p ≥ α:</strong> Fail to reject H₀ (not statistically significant)</li>
        </ul>

        <h4>Common Misconceptions:</h4>
        <table style={{marginTop: '15px'}}>
          <thead>
            <tr>
              <th>Incorrect Interpretation</th>
              <th>Correct Interpretation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>p = probability that H₀ is true</td>
              <td>p = probability of data given H₀ is true</td>
            </tr>
            <tr>
              <td>p &lt; 0.05 means effect is important</td>
              <td>p &lt; 0.05 means effect is unlikely due to chance</td>
            </tr>
            <tr>
              <td>p = 0.049 is meaningful, p = 0.051 is not</td>
              <td>p-values near threshold are ambiguous; consider effect size</td>
            </tr>
            <tr>
              <td>Failing to reject H₀ proves H₀ is true</td>
              <td>Insufficient evidence to reject H₀; absence of evidence ≠ evidence of absence</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        <h3>Reporting Statistical Results</h3>
        <p>Always report:</p>
        <ul className="emoji-list">
          <li><strong>Test statistic:</strong> t-value, F-value, χ², etc.</li>
          <li><strong>Degrees of freedom:</strong> (df)</li>
          <li><strong>p-value:</strong> Exact value when p &gt; 0.001; otherwise report p &lt; 0.001</li>
          <li><strong>Effect size:</strong> Cohen's d, r², η², etc.</li>
        </ul>
        <p style={{marginTop: '10px'}}><strong>Example:</strong> t(98) = 3.45, p = 0.001, Cohen's d = 0.68</p>
      </div>

      <h2>Effect Size</h2>

      <div className="card">
        <p>
          <strong>Effect size</strong> measures the magnitude of a phenomenon, independent of sample size. Unlike p-values, 
          effect sizes indicate practical significance.
        </p>

        <h4>Common Effect Size Measures:</h4>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              <th>Used For</th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cohen's d</strong></td>
              <td>t-tests (mean differences)</td>
              <td>0.2</td>
              <td>0.5</td>
              <td>0.8</td>
            </tr>
            <tr>
              <td><strong>Pearson r</strong></td>
              <td>Correlations</td>
              <td>0.1</td>
              <td>0.3</td>
              <td>0.5</td>
            </tr>
            <tr>
              <td><strong>η² (Eta-squared)</strong></td>
              <td>ANOVA (variance explained)</td>
              <td>0.01</td>
              <td>0.06</td>
              <td>0.14</td>
            </tr>
            <tr>
              <td><strong>R²</strong></td>
              <td>Regression (variance explained)</td>
              <td>0.02</td>
              <td>0.13</td>
              <td>0.26</td>
            </tr>
          </tbody>
        </table>

        <div className="formula-box" style={{marginTop: '20px'}}>
          <strong>Cohen's d Formula:</strong><br/>
          d = (M₁ - M₂) / SD<sub>pooled</sub><br/>
          <span style={{fontSize: '0.9rem'}}>Where M₁ and M₂ are group means, and SD<sub>pooled</sub> is pooled standard deviation</span>
        </div>

        <div className="example-box">
          <div className="example-title">Example Calculation:</div>
          <p><strong>Context:</strong> Comparing execution times of two sorting algorithms</p>
          <p>Algorithm A: M = 45.3 ms, SD = 8.2 ms</p>
          <p>Algorithm B: M = 52.1 ms, SD = 9.1 ms</p>
          <p style={{marginTop: '10px'}}>d = (45.3 - 52.1) / 8.65 = -0.79</p>
          <p style={{marginTop: '5px'}}><strong>Interpretation:</strong> Medium-to-large effect; Algorithm A is noticeably faster</p>
        </div>
      </div>

      <h2>Comprehensive Hypothesis Example (CS)</h2>

      <div className="card">
        <div className="example-box">
          <div className="example-title">Research Scenario: Pair Programming Effectiveness</div>
          
          <p><strong>Background:</strong> Software engineering literature suggests pair programming improves code quality but 
          may reduce productivity due to coordination overhead.</p>

          <p style={{marginTop: '15px'}}><strong>Variables:</strong></p>
          <ul style={{marginLeft: '20px', fontSize: '0.9rem'}}>
            <li><strong>Independent Variable:</strong> Programming method (pair vs. solo)</li>
            <li><strong>Dependent Variables:</strong> (1) Code defect rate per 1000 LOC, (2) Development time in hours</li>
          </ul>

          <p style={{marginTop: '15px'}}><strong>Hypotheses for Code Defect Rate:</strong></p>
          <p style={{marginLeft: '20px'}}>H₀: μ<sub>pair</sub> = μ<sub>solo</sub> (No difference in defect rates)</p>
          <p style={{marginLeft: '20px'}}>H₁: μ<sub>pair</sub> &lt; μ<sub>solo</sub> (Pair programming has lower defect rate)</p>

          <p style={{marginTop: '15px'}}><strong>Hypotheses for Development Time:</strong></p>
          <p style={{marginLeft: '20px'}}>H₀: μ<sub>pair</sub> = μ<sub>solo</sub> (No difference in development time)</p>
          <p style={{marginLeft: '20px'}}>H₁: μ<sub>pair</sub> ≠ μ<sub>solo</sub> (Development times differ)</p>

          <p style={{marginTop: '15px'}}><strong>Study Design:</strong> Randomized controlled experiment with 100 developers (50 pairs vs. 50 solo)</p>
          <p><strong>Significance Level:</strong> α = 0.05</p>
          <p><strong>Statistical Test:</strong> Independent samples t-test (two-tailed for time, one-tailed for defects)</p>

          <p style={{marginTop: '15px'}}><strong>Expected Results Reporting:</strong></p>
          <p style={{fontSize: '0.9rem', marginLeft: '20px'}}>
            "Pair programming resulted in significantly lower defect rates (M = 3.2, SD = 1.1) compared to solo programming 
            (M = 5.8, SD = 1.6), t(98) = -9.12, p &lt; 0.001, Cohen's d = 1.84. Development time was not significantly 
            different between pair (M = 18.5 hours, SD = 3.2) and solo programming (M = 17.9 hours, SD = 3.5), 
            t(98) = 0.87, p = 0.39, Cohen's d = 0.18."
          </p>
        </div>
      </div>

      <div className="fun-fact">
        <strong>Historical Note:</strong> The concept of null hypothesis testing was developed by Ronald Fisher in the 1920s. 
        The conventional α = 0.05 threshold was somewhat arbitrary - Fisher suggested it as a convenient standard, not a 
        universal rule. Modern statistics emphasizes effect sizes and confidence intervals alongside p-values.
      </div>

      <h2>Assessment Questions</h2>
      <div className="quiz-container">
        <div className="quiz-question">
          A researcher finds p = 0.03 and rejects the null hypothesis. However, in reality, the null hypothesis 
          was true. What type of error has occurred?
        </div>
        <div className="quiz-options">
          <div 
            className={`quiz-option ${quiz1Answer === 'A' ? 'correct' : ''}`}
            onClick={() => { setQuiz1Answer('A'); setShowAnswer1(true); }}
          >
            A) Type I Error (False Positive)
          </div>
          <div 
            className={`quiz-option ${quiz1Answer === 'B' ? 'incorrect' : ''}`}
            onClick={() => { setQuiz1Answer('B'); setShowAnswer1(true); }}
          >
            B) Type II Error (False Negative)
          </div>
        </div>
        {showAnswer1 && (
          <div className="quiz-feedback" style={{color: quiz1Answer === 'A' ? '#10b981' : '#ef4444'}}>
            {quiz1Answer === 'A' 
              ? '✓ Correct! Type I error occurs when we reject a true null hypothesis (false positive).' 
              : '✗ Incorrect. This is a Type I error - rejecting H₀ when it\'s actually true.'}
          </div>
        )}
      </div>

      <div className="quiz-container">
        <div className="quiz-question">
          In hypothesis testing, what does statistical power (1 - β) represent?
        </div>
        <div className="quiz-options">
          <div 
            className={`quiz-option ${quiz2Answer === 'A' ? 'incorrect' : ''}`}
            onClick={() => { setQuiz2Answer('A'); setShowAnswer2(true); }}
          >
            A) The probability of making a Type I error
          </div>
          <div 
            className={`quiz-option ${quiz2Answer === 'B' ? 'correct' : ''}`}
            onClick={() => { setQuiz2Answer('B'); setShowAnswer2(true); }}
          >
            B) The probability of correctly rejecting a false null hypothesis
          </div>
        </div>
        {showAnswer2 && (
          <div className="quiz-feedback" style={{color: quiz2Answer === 'B' ? '#10b981' : '#ef4444'}}>
            {quiz2Answer === 'B' 
              ? '✓ Correct! Statistical power is the probability of detecting a true effect when it exists.' 
              : '✗ Incorrect. Power (1-β) is the probability of correctly rejecting a false H₀.'}
          </div>
        )}
      </div>

      <div className="info-box" style={{marginTop: '40px'}}>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Research problems must be clearly defined, specific, and researchable</li>
          <li>Problem statements establish context, significance, and proposed approaches</li>
          <li>Research objectives specify measurable goals with action verbs</li>
          <li>Hypotheses are testable statements about relationships between variables</li>
          <li>Null hypothesis (H₀) assumes no effect; alternative hypothesis (H₁) predicts an effect</li>
          <li>Type I error (α): False positive - rejecting true H₀</li>
          <li>Type II error (β): False negative - failing to reject false H₀</li>
          <li>Statistical power (1-β) is the probability of detecting true effects</li>
          <li>Effect sizes (Cohen's d, r², η²) measure practical significance beyond p-values</li>
          <li>p-values indicate probability of data under H₀, not probability that H₀ is true</li>
        </ul>
      </div>
    </div>
  );
}

export default ResearchProblem;
