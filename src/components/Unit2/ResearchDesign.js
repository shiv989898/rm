import React, { useState } from 'react';

function ResearchDesign() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Unit 2: Research Design & Ethics</h1>

        <div className="info-box">
          <p><strong>Research Design</strong> is the comprehensive blueprint for conducting a research study. It outlines the framework for data collection, measurement, and analysis methods, ensuring systematic investigation while addressing research questions or hypotheses with scientific rigor.</p>
        </div>

        <h2>1. Components of Research Design</h2>
        
        <h3>1.1 Research Purpose</h3>
        <p>The research purpose defines the fundamental objective of your study. It establishes what you aim to achieve through your investigation:</p>
        
        <div className="card">
          <h4>Types of Research Purposes:</h4>
          <ul className="emoji-list">
            <li><strong>Exploratory Research:</strong> Investigates new phenomena or areas with limited prior knowledge. Useful when exploring emerging technologies like quantum computing applications or blockchain implementations.</li>
            <li><strong>Descriptive Research:</strong> Systematically describes characteristics of a population, situation, or phenomenon. Examples include user behavior analysis on social media platforms or software usage patterns.</li>
            <li><strong>Explanatory Research:</strong> Examines cause-and-effect relationships between variables. Common in algorithm performance studies or system optimization research.</li>
            <li><strong>Evaluative Research:</strong> Assesses the effectiveness or efficiency of programs, policies, or interventions. Used in software testing methodologies or security protocol assessments.</li>
          </ul>
        </div>

        <h3>1.2 Research Variables</h3>
        <p>Variables are measurable characteristics that can take different values. Understanding variable types is crucial for proper experimental design:</p>

        <table>
          <thead>
            <tr>
              <th>Variable Type</th>
              <th>Definition</th>
              <th>Computer Science Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Independent Variable (IV)</strong></td>
              <td>The variable manipulated by the researcher; the presumed cause</td>
              <td>Algorithm type (quicksort vs mergesort)</td>
            </tr>
            <tr>
              <td><strong>Dependent Variable (DV)</strong></td>
              <td>The variable measured or observed; the presumed effect</td>
              <td>Execution time, memory usage</td>
            </tr>
            <tr>
              <td><strong>Control Variable</strong></td>
              <td>Variables held constant to isolate the effect of IV on DV</td>
              <td>Hardware specifications, dataset size</td>
            </tr>
            <tr>
              <td><strong>Confounding Variable</strong></td>
              <td>Uncontrolled variables that may affect the DV</td>
              <td>Background processes, network latency</td>
            </tr>
            <tr>
              <td><strong>Moderating Variable</strong></td>
              <td>Variable that affects the strength/direction of IV-DV relationship</td>
              <td>Programmer experience level</td>
            </tr>
            <tr>
              <td><strong>Mediating Variable</strong></td>
              <td>Variable that explains the mechanism between IV and DV</td>
              <td>Code complexity mediating algorithm choice and execution time</td>
            </tr>
          </tbody>
        </table>

        <h3>1.3 Experimental Design Types</h3>
        
        <div className="card">
          <h4>A. True Experimental Design</h4>
          <p>Characterized by random assignment of subjects to groups and manipulation of independent variables. Provides strongest evidence for causality.</p>
          
          <div className="example-box">
            <div className="example-title">Example: Algorithm Performance Study</div>
            <p><strong>Research Question:</strong> Does using parallel processing improve sorting algorithm performance?</p>
            <p><strong>Design:</strong></p>
            <ul>
              <li><strong>Experimental Group:</strong> Runs sorting algorithm with parallel processing enabled</li>
              <li><strong>Control Group:</strong> Runs same algorithm with serial processing</li>
              <li><strong>Random Assignment:</strong> Test datasets randomly assigned to each condition</li>
              <li><strong>Measurement:</strong> Execution time, CPU usage, memory consumption</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h4>B. Quasi-Experimental Design</h4>
          <p>Lacks random assignment but still manipulates independent variables. Common when randomization is impractical or unethical.</p>
          
          <div className="example-box">
            <div className="example-title">Example: Programming Language Learning Study</div>
            <p>Compare existing classes: one learning Python-first vs. Java-first curriculum. Cannot randomly assign students to classes due to administrative constraints.</p>
          </div>
        </div>

        <div className="card">
          <h4>C. Non-Experimental Design</h4>
          <p>Observes variables without manipulation. Includes correlational studies, surveys, and case studies.</p>
          
          <div className="example-box">
            <div className="example-title">Example: Software Developer Survey</div>
            <p>Survey developers about their preferred IDEs and productivity levels. No manipulation of variables; purely observational data collection.</p>
          </div>
        </div>

        <h2>2. Common Experimental Designs in CS Research</h2>

        <h3>2.1 Between-Subjects Design</h3>
        <div className="card">
          <p>Each participant experiences only one condition of the independent variable. Different groups are compared.</p>
          <p><strong>Advantages:</strong> No carryover effects, simpler analysis</p>
          <p><strong>Disadvantages:</strong> Requires more participants, individual differences between groups</p>
          <div className="example-box">
            <div className="example-title">CS Example</div>
            <p>Testing three different UI designs where each user group sees only one design version.</p>
          </div>
        </div>

        <h3>2.2 Within-Subjects Design</h3>
        <div className="card">
          <p>Each participant experiences all conditions of the independent variable. Same subjects compared across conditions.</p>
          <p><strong>Advantages:</strong> Fewer participants needed, controls for individual differences</p>
          <p><strong>Disadvantages:</strong> Carryover effects, practice effects, fatigue</p>
          <div className="example-box">
            <div className="example-title">CS Example</div>
            <p>Testing algorithm efficiency where the same datasets are processed by all three algorithms being compared.</p>
          </div>
        </div>

        <h3>2.3 Mixed Design</h3>
        <div className="card">
          <p>Combines both between-subjects and within-subjects factors in a single study.</p>
          <div className="example-box">
            <div className="example-title">CS Example</div>
            <p><strong>Between-Subjects Factor:</strong> Programming experience (novice vs. expert)</p>
            <p><strong>Within-Subjects Factor:</strong> Three different code review tools (all participants use all three tools)</p>
          </div>
        </div>

        <h2>3. Validity in Research Design</h2>
        <p>Validity refers to the degree to which a study accurately reflects or assesses the specific concept the researcher is attempting to measure.</p>

        <h3>3.1 Internal Validity</h3>
        <div className="card">
          <p><strong>Definition:</strong> The extent to which changes in the dependent variable can be attributed to the independent variable rather than confounding variables.</p>
          
          <h4>Threats to Internal Validity:</h4>
          <ul className="emoji-list">
            <li><strong>History:</strong> External events occurring during the study that affect outcomes (e.g., software updates during a performance study)</li>
            <li><strong>Maturation:</strong> Changes in participants over time (e.g., programmers gaining experience during a longitudinal study)</li>
            <li><strong>Testing:</strong> The effect of taking a test on subsequent test performance (e.g., participants becoming familiar with benchmark tasks)</li>
            <li><strong>Instrumentation:</strong> Changes in measurement tools or procedures (e.g., system upgrades affecting performance metrics)</li>
            <li><strong>Selection Bias:</strong> Systematic differences between groups (e.g., comparing volunteer beta testers to average users)</li>
            <li><strong>Attrition:</strong> Differential dropout rates (e.g., frustrated users abandoning a usability study)</li>
          </ul>

          <h4>Improving Internal Validity:</h4>
          <ul className="emoji-list">
            <li>Random assignment to groups</li>
            <li>Use of control groups</li>
            <li>Blinding participants and researchers</li>
            <li>Standardized procedures and instruments</li>
            <li>Statistical control of confounding variables</li>
          </ul>
        </div>

        <h3>3.2 External Validity</h3>
        <div className="card">
          <p><strong>Definition:</strong> The extent to which research findings can be generalized to other settings, populations, and times.</p>
          
          <h4>Threats to External Validity:</h4>
          <ul className="emoji-list">
            <li><strong>Population Validity:</strong> Sample not representative of target population (e.g., studying only university students for general user behavior)</li>
            <li><strong>Ecological Validity:</strong> Artificial research settings don't reflect real-world conditions (e.g., lab-based usability studies vs. actual workplace usage)</li>
            <li><strong>Temporal Validity:</strong> Results specific to particular time period (e.g., social media behavior changing over time)</li>
          </ul>

          <h4>Improving External Validity:</h4>
          <ul className="emoji-list">
            <li>Representative sampling techniques</li>
            <li>Field studies in natural settings</li>
            <li>Replication across different contexts</li>
            <li>Multiple samples from diverse populations</li>
          </ul>
        </div>

        <h3>3.3 Construct Validity</h3>
        <div className="card">
          <p><strong>Definition:</strong> The degree to which a test measures what it claims to measure; whether the operational definition accurately reflects the theoretical construct.</p>
          
          <div className="example-box">
            <div className="example-title">CS Example</div>
            <p><strong>Construct:</strong> "Code Quality"</p>
            <p><strong>Operational Definitions:</strong></p>
            <ul>
              <li>Number of bugs per 1000 lines of code (defect density)</li>
              <li>Cyclomatic complexity score</li>
              <li>Code coverage percentage</li>
              <li>Maintainability index</li>
            </ul>
            <p><strong>Question:</strong> Do these metrics truly capture all aspects of code quality? This is a construct validity concern.</p>
          </div>
        </div>

        <h3>3.4 Statistical Conclusion Validity</h3>
        <div className="card">
          <p><strong>Definition:</strong> The degree to which conclusions about relationships between variables based on statistical evidence are correct.</p>
          
          <h4>Common Threats:</h4>
          <ul className="emoji-list">
            <li><strong>Low Statistical Power:</strong> Insufficient sample size to detect true effects</li>
            <li><strong>Violation of Assumptions:</strong> Applying statistical tests when data doesn't meet requirements</li>
            <li><strong>Fishing and Error Rate:</strong> Multiple comparisons increasing Type I error probability</li>
            <li><strong>Unreliable Measures:</strong> Measurement inconsistency reducing power to detect relationships</li>
          </ul>
        </div>

        <h2>4. Reliability in Research</h2>
        <p>Reliability refers to the consistency and stability of measurement. A reliable measure produces similar results under consistent conditions.</p>

        <h3>4.1 Types of Reliability</h3>
        <table>
          <thead>
            <tr>
              <th>Reliability Type</th>
              <th>Description</th>
              <th>Assessment Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Test-Retest Reliability</strong></td>
              <td>Consistency of scores over time</td>
              <td>Administer same test twice; calculate correlation</td>
            </tr>
            <tr>
              <td><strong>Inter-Rater Reliability</strong></td>
              <td>Agreement between different observers/raters</td>
              <td>Cohen's Kappa, Krippendorff's Alpha</td>
            </tr>
            <tr>
              <td><strong>Internal Consistency</strong></td>
              <td>Consistency across items within a test</td>
              <td>Cronbach's Alpha (α ≥ 0.70 acceptable)</td>
            </tr>
            <tr>
              <td><strong>Parallel Forms Reliability</strong></td>
              <td>Consistency between equivalent versions</td>
              <td>Correlation between two equivalent test forms</td>
            </tr>
          </tbody>
        </table>

        <div className="formula-box">
          <h4>Cronbach's Alpha Formula:</h4>
          <p>α = (K / (K-1)) × (1 - (Σσ²ᵢ / σ²ₜ))</p>
          <p style={{fontSize: '0.9rem', marginTop: '10px'}}>
            Where:<br/>
            K = number of items<br/>
            σ²ᵢ = variance of individual item scores<br/>
            σ²ₜ = variance of total test scores
          </p>
        </div>

        <div className="fun-fact">
          Values: α ≥ 0.90 (Excellent), 0.80-0.89 (Good), 0.70-0.79 (Acceptable), 0.60-0.69 (Questionable), &lt; 0.60 (Poor)
        </div>

        <h2>5. Research Ethics</h2>
        <p>Ethical considerations are paramount in research to protect participants, maintain scientific integrity, and ensure responsible conduct.</p>

        <h3>5.1 Core Ethical Principles</h3>
        
        <div className="card">
          <h4>Belmont Report Principles (1979):</h4>
          <ul className="emoji-list">
            <li><strong>Respect for Persons:</strong> Recognize autonomy and protect those with diminished autonomy through informed consent</li>
            <li><strong>Beneficence:</strong> Maximize benefits and minimize harms to participants</li>
            <li><strong>Justice:</strong> Fair distribution of research benefits and burdens across populations</li>
          </ul>
        </div>

        <h3>5.2 Informed Consent</h3>
        <div className="card">
          <p><strong>Definition:</strong> Process whereby participants voluntarily agree to participate in research after being fully informed about:</p>
          <ul className="emoji-list">
            <li>Purpose and procedures of the research</li>
            <li>Potential risks and benefits</li>
            <li>Confidentiality measures</li>
            <li>Right to withdraw without penalty</li>
            <li>Contact information for questions</li>
            <li>Data usage and storage policies</li>
          </ul>

          <div className="example-box">
            <div className="example-title">CS Research Example: User Study</div>
            <p><strong>Scenario:</strong> Testing a new authentication system</p>
            <p><strong>Informed Consent Must Include:</strong></p>
            <ul>
              <li>What data will be collected (login attempts, time stamps, biometric data)</li>
              <li>How data will be stored (encrypted database, retention period)</li>
              <li>Who has access to data (research team only)</li>
              <li>Potential risks (possible security vulnerabilities during testing)</li>
              <li>Right to withdraw and have data deleted</li>
            </ul>
          </div>
        </div>

        <h3>5.3 Privacy and Confidentiality</h3>
        <div className="card">
          <p><strong>Privacy:</strong> Individual's right to control information about themselves</p>
          <p><strong>Confidentiality:</strong> Researcher's obligation to protect participant information</p>
          
          <h4>Data Protection Measures:</h4>
          <ul className="emoji-list">
            <li><strong>Anonymization:</strong> Removing all identifying information permanently</li>
            <li><strong>Pseudonymization:</strong> Replacing identifiers with codes (reversible with key)</li>
            <li><strong>Data Encryption:</strong> AES-256 for data at rest, TLS for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based permissions, multi-factor authentication</li>
            <li><strong>Secure Storage:</strong> Encrypted servers, physical security measures</li>
            <li><strong>Data Retention Policies:</strong> Clear timelines for data deletion</li>
          </ul>
        </div>

        <h3>5.4 Data Privacy Regulations</h3>
        
        <div className="card">
          <h4>A. General Data Protection Regulation (GDPR) - European Union</h4>
          <p><strong>Key Requirements for Research:</strong></p>
          <ul className="emoji-list">
            <li><strong>Lawful Basis:</strong> Must have legal ground for processing (consent, legitimate interest, public interest)</li>
            <li><strong>Data Minimization:</strong> Collect only necessary data for specified purposes</li>
            <li><strong>Right to Access:</strong> Participants can request their data</li>
            <li><strong>Right to Erasure:</strong> "Right to be forgotten" - participants can request deletion</li>
            <li><strong>Data Portability:</strong> Participants can obtain and transfer their data</li>
            <li><strong>Privacy by Design:</strong> Build privacy into system architecture</li>
            <li><strong>Data Protection Impact Assessment (DPIA):</strong> Required for high-risk processing</li>
          </ul>
          <p><strong>Penalties:</strong> Up to €20 million or 4% of annual global turnover</p>
        </div>

        <div className="card">
          <h4>B. California Consumer Privacy Act (CCPA) - United States</h4>
          <p><strong>Consumer Rights:</strong></p>
          <ul className="emoji-list">
            <li>Know what personal information is collected</li>
            <li>Know whether personal information is sold or disclosed</li>
            <li>Opt-out of sale of personal information</li>
            <li>Access personal information</li>
            <li>Request deletion of personal information</li>
            <li>Non-discrimination for exercising privacy rights</li>
          </ul>
        </div>

        <div className="card">
          <h4>C. Health Insurance Portability and Accountability Act (HIPAA) - US Healthcare</h4>
          <p>Applies when research involves protected health information (PHI). Requires:</p>
          <ul className="emoji-list">
            <li>Authorization from participants or waiver from IRB</li>
            <li>Limited data sets with data use agreements</li>
            <li>De-identification following safe harbor or expert determination methods</li>
          </ul>
        </div>

        <h3>5.5 Ethical Issues Specific to Computer Science</h3>

        <div className="card">
          <h4>A. Artificial Intelligence and Machine Learning Ethics</h4>
          <ul className="emoji-list">
            <li><strong>Algorithmic Bias:</strong> ML models perpetuating discrimination based on race, gender, socioeconomic status
              <div className="example-box" style={{marginTop: '10px'}}>
                <div className="example-title">Example: Facial Recognition Bias</div>
                <p>Studies show higher error rates for darker-skinned individuals and women. Researchers must ensure diverse training datasets and test for bias across demographic groups.</p>
              </div>
            </li>
            <li><strong>Transparency and Explainability:</strong> "Black box" models making decisions affecting human lives require interpretability</li>
            <li><strong>Autonomous Systems:</strong> Ethical decision-making in self-driving cars, drones, automated weapons</li>
            <li><strong>Data Scraping:</strong> Collecting public data without consent raises ethical concerns</li>
          </ul>
        </div>

        <div className="card">
          <h4>B. Cybersecurity Research Ethics</h4>
          <ul className="emoji-list">
            <li><strong>Vulnerability Disclosure:</strong> Responsible disclosure to vendors before public release</li>
            <li><strong>Penetration Testing:</strong> Must have explicit authorization; never test systems without permission</li>
            <li><strong>Honeypots and Deception:</strong> Ethical implications of luring attackers</li>
            <li><strong>Dual-Use Research:</strong> Security research that could be weaponized</li>
          </ul>
        </div>

        <div className="card">
          <h4>C. Social Media and Online Research</h4>
          <ul className="emoji-list">
            <li><strong>Public vs. Private Data:</strong> Just because data is accessible doesn't mean it's ethical to use
              <div className="example-box" style={{marginTop: '10px'}}>
                <div className="example-title">Example: Facebook Emotional Contagion Study (2014)</div>
                <p>Manipulated news feeds to study emotional responses without explicit consent, causing controversy about research ethics on platforms.</p>
              </div>
            </li>
            <li><strong>Terms of Service:</strong> Scraping data may violate platform policies</li>
            <li><strong>Contextual Integrity:</strong> Respecting original context and expectations of data sharing</li>
          </ul>
        </div>

        <h3>5.6 Academic Integrity</h3>

        <div className="card">
          <h4>A. Plagiarism</h4>
          <p><strong>Definition:</strong> Using someone else's work, ideas, or words without proper attribution.</p>
          
          <p><strong>Types of Plagiarism:</strong></p>
          <ul className="emoji-list">
            <li><strong>Direct Plagiarism:</strong> Word-for-word copying without quotation marks or citation</li>
            <li><strong>Mosaic Plagiarism:</strong> Mixing copied phrases with original work without citation</li>
            <li><strong>Paraphrasing Plagiarism:</strong> Restating ideas without citation</li>
            <li><strong>Self-Plagiarism:</strong> Reusing your own previous work without disclosure</li>
            <li><strong>Accidental Plagiarism:</strong> Unintentional failure to cite or misquoting sources</li>
          </ul>

          <p><strong>Prevention:</strong></p>
          <ul className="emoji-list">
            <li>Proper citation in all instances</li>
            <li>Use plagiarism detection tools (Turnitin, iThenticate, Copyscape)</li>
            <li>Maintain detailed research notes with sources</li>
            <li>Understand citation style requirements (APA, IEEE, MLA)</li>
          </ul>
        </div>

        <div className="card">
          <h4>B. Research Misconduct</h4>
          <ul className="emoji-list">
            <li><strong>Fabrication:</strong> Making up data or results</li>
            <li><strong>Falsification:</strong> Manipulating research materials, equipment, or processes; changing or omitting data</li>
            <li><strong>Misrepresentation:</strong> Inaccurate reporting of findings</li>
            <li><strong>Authorship Issues:</strong> Not giving credit to contributors or including authors who didn't contribute</li>
          </ul>
        </div>

        <h3>5.7 Institutional Review Board (IRB)</h3>
        <div className="card">
          <p><strong>Purpose:</strong> Independent committee that reviews research proposals to ensure ethical treatment of human subjects.</p>
          
          <h4>Review Categories:</h4>
          <ul className="emoji-list">
            <li><strong>Exempt:</strong> Minimal risk research (e.g., anonymous surveys on non-sensitive topics)</li>
            <li><strong>Expedited:</strong> Low risk research with vulnerable populations or sensitive data</li>
            <li><strong>Full Board Review:</strong> Research with more than minimal risk or vulnerable populations</li>
          </ul>

          <h4>IRB Submission Typically Includes:</h4>
          <ul className="emoji-list">
            <li>Research protocol describing methodology</li>
            <li>Informed consent forms</li>
            <li>Data collection instruments (surveys, interview questions)</li>
            <li>Data management and security plan</li>
            <li>Risk assessment and mitigation strategies</li>
            <li>Researcher qualifications and training certificates</li>
          </ul>
        </div>

        <div className="fun-fact">
          Most universities require IRB approval before beginning any research involving human participants. The process can take 2-8 weeks, so plan accordingly when designing your research timeline.
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            Which type of validity concerns whether research findings can be generalized to other settings, populations, and time periods?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? (selectedAnswer === 'B' ? 'incorrect' : 'incorrect') : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) Internal Validity
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) External Validity
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) Construct Validity
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) Statistical Conclusion Validity
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'B' ? (
                <span style={{color: '#10b981'}}>✓ Correct! External validity refers to the generalizability of research findings to other contexts, populations, and time periods beyond the specific study conditions.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. External validity concerns generalizability. Internal validity relates to causal inference within the study, construct validity to measurement accuracy, and statistical conclusion validity to statistical inference correctness.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>Research design provides the structural framework for conducting systematic investigations</li>
            <li>Understanding variables and their relationships is essential for proper experimental design</li>
            <li>Validity (internal, external, construct, statistical) ensures research quality and trustworthiness</li>
            <li>Reliability measures consistency and stability of measurements over time and across raters</li>
            <li>Ethical considerations including informed consent, privacy, and data protection are mandatory</li>
            <li>Computer science research faces unique ethical challenges in AI, cybersecurity, and online research</li>
            <li>Academic integrity requires proper attribution, avoiding plagiarism, and honest reporting</li>
            <li>IRB approval is required for research involving human participants</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResearchDesign;
