import React, { useState } from 'react';

function ResearchWriting() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Research Writing & Publication Process</h1>

        <div className="info-box">
          <p><strong>Research Writing</strong> is the process of communicating research findings through structured documents. It follows specific conventions to ensure clarity, reproducibility, and credibility.</p>
        </div>

        <h2>1. IMRaD Structure</h2>

        <div className="card">
          <p><strong>IMRaD</strong> stands for Introduction, Methods, Results, and Discussion. This is the standard structure for scientific papers.</p>
        </div>

        <div className="card">
          <h4>Introduction</h4>
          <p><strong>Purpose:</strong> Establish context and rationale for research</p>
          <ul className="emoji-list">
            <li><strong>Background:</strong> Current state of knowledge</li>
            <li><strong>Problem Statement:</strong> What gap or issue exists</li>
            <li><strong>Literature Gap:</strong> What's missing in current research</li>
            <li><strong>Research Objectives:</strong> What you aim to accomplish</li>
            <li><strong>Research Questions/Hypotheses:</strong> Specific testable statements</li>
            <li><strong>Significance:</strong> Why this research matters</li>
          </ul>
          
          <div className="example-box">
            <div className="example-title">Introduction Example (CS)</div>
            <p>"Code review is essential for software quality, but traditional manual reviews are time-consuming (Smith, 2022). While automated tools exist for syntax checking, they fail to detect semantic errors and design flaws (Jones et al., 2023). This study investigates whether machine learning models can augment code review by identifying potential bugs and suggesting improvements. We aim to reduce review time by 30% while maintaining code quality standards."</p>
          </div>
        </div>

        <div className="card">
          <h4>Methods (Methodology)</h4>
          <p><strong>Purpose:</strong> Describe how research was conducted to enable replication</p>
          <ul className="emoji-list">
            <li><strong>Research Design:</strong> Experimental, survey, case study, etc.</li>
            <li><strong>Participants/Sample:</strong> Who, how many, how selected</li>
            <li><strong>Materials/Apparatus:</strong> Tools, software, hardware used</li>
            <li><strong>Procedures:</strong> Step-by-step process</li>
            <li><strong>Data Collection:</strong> How data was gathered</li>
            <li><strong>Data Analysis:</strong> Statistical tests, software used</li>
            <li><strong>Ethical Considerations:</strong> IRB approval, informed consent</li>
          </ul>

          <div className="example-box">
            <div className="example-title">Methods Example</div>
            <p><strong>Study Design:</strong> Controlled experiment comparing ML-assisted review vs. manual review</p>
            <p><strong>Dataset:</strong> 500 open-source Python projects from GitHub (10K-50K LOC each)</p>
            <p><strong>Model:</strong> BERT-based transformer fine-tuned on 10,000 labeled code review comments</p>
            <p><strong>Metrics:</strong> Review time (minutes), defect detection rate (%), false positive rate (%)</p>
            <p><strong>Statistical Analysis:</strong> Paired t-test (α=0.05) for time comparison, chi-square for detection rates</p>
          </div>
        </div>

        <div className="card">
          <h4>Results</h4>
          <p><strong>Purpose:</strong> Present findings without interpretation</p>
          <ul className="emoji-list">
            <li><strong>Objective Presentation:</strong> State what was found, not what it means</li>
            <li><strong>Tables and Figures:</strong> Visual representation of data</li>
            <li><strong>Statistical Results:</strong> Report test statistics, p-values, effect sizes</li>
            <li><strong>Negative Results:</strong> Include non-significant findings</li>
            <li><strong>Organization:</strong> Present in logical order matching research questions</li>
          </ul>

          <div className="example-box">
            <div className="example-title">Results Reporting Example</div>
            <p>"ML-assisted code review reduced average review time from 45.3 minutes (SD=12.1) to 31.7 minutes (SD=9.8), a statistically significant decrease (t(98)=6.82, p&lt;0.001, Cohen's d=1.24). Defect detection rates were comparable: manual review detected 78.2% of seeded bugs, while ML-assisted review detected 76.5% (χ²(1)=0.42, p=0.52). However, ML-assisted review generated more false positives (12.3% vs. 8.1%)."</p>
            
            <p style={{marginTop: '10px'}}><strong>Table Format:</strong></p>
            <table style={{marginTop: '10px', fontSize: '0.9rem'}}>
              <thead>
                <tr>
                  <th>Condition</th>
                  <th>Review Time (min)</th>
                  <th>Defect Detection (%)</th>
                  <th>False Positives (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manual</td>
                  <td>45.3 ± 12.1</td>
                  <td>78.2</td>
                  <td>8.1</td>
                </tr>
                <tr>
                  <td>ML-Assisted</td>
                  <td>31.7 ± 9.8</td>
                  <td>76.5</td>
                  <td>12.3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h4>Discussion</h4>
          <p><strong>Purpose:</strong> Interpret results, relate to literature, acknowledge limitations</p>
          <ul className="emoji-list">
            <li><strong>Interpretation:</strong> What do results mean?</li>
            <li><strong>Relation to Literature:</strong> How do findings compare to previous research?</li>
            <li><strong>Implications:</strong> Practical and theoretical significance</li>
            <li><strong>Limitations:</strong> Acknowledge weaknesses and constraints</li>
            <li><strong>Future Research:</strong> What questions remain?</li>
            <li><strong>Conclusion:</strong> Summary of main findings and contributions</li>
          </ul>

          <div className="example-box">
            <div className="example-title">Discussion Elements</div>
            <p><strong>Interpretation:</strong> "The 30% time reduction supports our hypothesis that ML can expedite code review..."</p>
            <p><strong>Comparison:</strong> "This aligns with Johnson et al.'s (2023) finding that AI tools reduce review time by 25-35%..."</p>
            <p><strong>Limitations:</strong> "Our study was limited to Python projects; results may differ for statically-typed languages..."</p>
            <p><strong>Future Work:</strong> "Future studies should investigate optimal thresholds for ML confidence scores to minimize false positives..."</p>
          </div>
        </div>

        <h2>2. Abstract Writing</h2>

        <div className="card">
          <p>The <strong>abstract</strong> is a concise summary (150-250 words) that allows readers to quickly understand your research.</p>

          <h4>Structured Abstract</h4>
          <p>Includes labeled sections:</p>
          <ul className="emoji-list">
            <li><strong>Background/Context:</strong> 1-2 sentences</li>
            <li><strong>Objective/Purpose:</strong> 1 sentence</li>
            <li><strong>Methods:</strong> 2-3 sentences</li>
            <li><strong>Results:</strong> 2-3 sentences with key findings</li>
            <li><strong>Conclusion:</strong> 1-2 sentences on implications</li>
          </ul>

          <h4>Unstructured Abstract</h4>
          <p>Narrative paragraph covering the same elements without labels.</p>

          <div className="example-box">
            <div className="example-title">Abstract Example (Structured)</div>
            <p><strong>Background:</strong> Code review improves software quality but is time-intensive. <strong>Objective:</strong> We evaluated machine learning models for automating code review feedback. <strong>Methods:</strong> We fine-tuned a BERT model on 10,000 code review comments and tested it on 500 Python projects. Participants (N=50 developers) performed reviews with and without ML assistance. <strong>Results:</strong> ML-assisted review reduced time by 30% (p&lt;0.001) while maintaining comparable defect detection (76.5% vs. 78.2%, p=0.52). <strong>Conclusion:</strong> ML models can significantly expedite code review without sacrificing quality, though false positive rates require further optimization.</p>
          </div>
        </div>

        <h2>3. Research Proposal</h2>

        <div className="card">
          <p>A <strong>research proposal</strong> outlines planned research before execution. Required for thesis/dissertation approval, grant funding, and IRB ethics review.</p>

          <h4>Components:</h4>
          <ul className="emoji-list">
            <li><strong>Title:</strong> Descriptive and specific (10-15 words)</li>
            <li><strong>Abstract:</strong> Summary of proposed research</li>
            <li><strong>Introduction:</strong> Background, problem statement, objectives</li>
            <li><strong>Literature Review:</strong> Current state of knowledge</li>
            <li><strong>Research Questions/Hypotheses:</strong> Specific testable statements</li>
            <li><strong>Methodology:</strong> Detailed research plan</li>
            <li><strong>Timeline:</strong> Gantt chart showing milestones</li>
            <li><strong>Budget:</strong> Estimated costs (if applicable)</li>
            <li><strong>Expected Outcomes:</strong> Anticipated contributions</li>
            <li><strong>References:</strong> Complete bibliography</li>
          </ul>

          <div className="example-box">
            <div className="example-title">Timeline Example (Gantt Chart)</div>
            <table style={{fontSize: '0.85rem'}}>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Month 1-2</th>
                  <th>Month 3-4</th>
                  <th>Month 5-6</th>
                  <th>Month 7-8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Literature Review</td>
                  <td style={{background: '#3b82f6'}}>████</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Data Collection</td>
                  <td></td>
                  <td style={{background: '#3b82f6'}}>████</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Data Analysis</td>
                  <td></td>
                  <td></td>
                  <td style={{background: '#3b82f6'}}>████</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Writing & Revision</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style={{background: '#3b82f6'}}>████</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>4. Academic Writing Style</h2>

        <div className="card">
          <h4>Principles of Good Academic Writing</h4>
          <ul className="emoji-list">
            <li><strong>Clarity:</strong> Use simple, direct language</li>
            <li><strong>Precision:</strong> Be specific, avoid vague terms</li>
            <li><strong>Conciseness:</strong> Eliminate unnecessary words</li>
            <li><strong>Objectivity:</strong> Avoid personal opinions without evidence</li>
            <li><strong>Formality:</strong> Use academic tone, avoid colloquialisms</li>
            <li><strong>Coherence:</strong> Logical flow between sentences and paragraphs</li>
          </ul>
        </div>

        <div className="card">
          <h4>Active vs. Passive Voice</h4>
          <p><strong>Active Voice:</strong> Subject performs action (clearer, more direct)</p>
          <p style={{marginLeft: '20px'}}>Example: "We collected data from 100 participants."</p>
          
          <p style={{marginTop: '10px'}}><strong>Passive Voice:</strong> Action performed on subject</p>
          <p style={{marginLeft: '20px'}}>Example: "Data were collected from 100 participants."</p>
          
          <div className="fun-fact">
            Modern academic writing prefers active voice for clarity, but passive voice is acceptable for methods sections to emphasize procedures over researchers.
          </div>
        </div>

        <div className="card">
          <h4>Verb Tense Consistency</h4>
          <ul className="emoji-list">
            <li><strong>Introduction:</strong> Present tense for established facts, past for previous research
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>"Machine learning is widely used..." vs. "Smith (2023) found..."</p>
            </li>
            <li><strong>Methods:</strong> Past tense
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>"We recruited 50 participants and conducted experiments..."</p>
            </li>
            <li><strong>Results:</strong> Past tense
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>"The model achieved 85% accuracy..."</p>
            </li>
            <li><strong>Discussion:</strong> Present for interpretations, past for your results
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>"These findings suggest..." vs. "We found that..."</p>
            </li>
          </ul>
        </div>

        <h2>5. Publication Process</h2>

        <h3>5.1 Choosing a Journal or Conference</h3>

        <div className="card">
          <h4>Selection Criteria</h4>
          <ul className="emoji-list">
            <li><strong>Scope Alignment:</strong> Does your work fit the journal's focus?</li>
            <li><strong>Impact Factor (IF):</strong> Citation-based metric (higher = more prestigious)
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>IF = (Citations in year N to articles from years N-1 and N-2) / (Articles published in N-1 and N-2)</p>
            </li>
            <li><strong>h-index:</strong> Measures both productivity and citation impact</li>
            <li><strong>Quartile Ranking:</strong> Q1 (top 25%) to Q4 (bottom 25%)</li>
            <li><strong>Acceptance Rate:</strong> Lower = more selective</li>
            <li><strong>Publication Speed:</strong> Time from submission to publication</li>
            <li><strong>Open Access vs. Subscription:</strong> Accessibility and fees</li>
          </ul>

          <table style={{marginTop: '15px'}}>
            <thead>
              <tr>
                <th>Venue Type</th>
                <th>Pros</th>
                <th>Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Top-Tier Conferences</strong><br/>(e.g., NeurIPS, ICSE)</td>
                <td>Fast publication, networking, high visibility</td>
                <td>Low acceptance (~20%), short papers, rigorous deadlines</td>
              </tr>
              <tr>
                <td><strong>Journals</strong><br/>(e.g., IEEE Trans., ACM TIST)</td>
                <td>Thorough review, longer papers, archival</td>
                <td>Slow process (6-12 months), revision cycles</td>
              </tr>
              <tr>
                <td><strong>Workshops</strong></td>
                <td>Quick feedback, emerging topics, accessible</td>
                <td>Lower prestige, limited reach</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>5.2 Submission to Publication</h3>

        <div className="flowchart">
          <div className="flow-step">1. Manuscript Preparation: Format per guidelines, prepare cover letter</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">2. Submission: Upload to journal system, suggest reviewers</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">3. Editor Review: Initial screening for scope and quality (1-2 weeks)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">4. Peer Review: 2-4 reviewers evaluate (4-12 weeks)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">5. Decision: Accept / Minor Revisions / Major Revisions / Reject</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">6. Revision: Address reviewer comments, submit revised manuscript</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">7. Re-review: Reviewers check revisions (2-6 weeks)</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">8. Final Decision: Accept or further revision</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">9. Production: Proofs, copyright, final formatting</div>
          <div className="flow-arrow">↓</div>
          <div className="flow-step">10. Publication: Online/print publication</div>
        </div>

        <div className="card">
          <h4>Peer Review Types</h4>
          <ul className="emoji-list">
            <li><strong>Single-Blind:</strong> Reviewers know authors, authors don't know reviewers (most common)</li>
            <li><strong>Double-Blind:</strong> Both authors and reviewers are anonymous</li>
            <li><strong>Open Review:</strong> Identities of both parties disclosed</li>
            <li><strong>Post-Publication Review:</strong> Review after publication (e.g., F1000Research)</li>
          </ul>
        </div>

        <h3>5.3 Predatory Journals</h3>

        <div className="card">
          <p><strong>Predatory Journals</strong> exploit open-access publishing by charging fees without providing proper peer review or editorial services.</p>

          <h4>Warning Signs:</h4>
          <ul className="emoji-list">
            <li>Spam email invitations to submit</li>
            <li>Promises of rapid publication (e.g., "published in 7 days")</li>
            <li>Low or no peer review</li>
            <li>Vague or broad scope ("Journal of Science")</li>
            <li>Fake or inflated impact factors</li>
            <li>Poor website quality with grammatical errors</li>
            <li>Lack of transparency about fees</li>
            <li>No retraction policy</li>
            <li>Fake editorial board members</li>
          </ul>

          <h4>How to Verify Legitimacy:</h4>
          <ul className="emoji-list">
            <li>Check if indexed in PubMed, Web of Science, Scopus</li>
            <li>Verify on Directory of Open Access Journals (DOAJ)</li>
            <li>Look for membership in Committee on Publication Ethics (COPE)</li>
            <li>Research editor credentials and editorial board</li>
            <li>Check institutional library recommendations</li>
          </ul>
        </div>

        <h2>6. Writing Tools</h2>

        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Purpose</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Microsoft Word</strong></td>
              <td>General word processing</td>
              <td>Track changes, comments, templates, Zotero/Mendeley integration</td>
            </tr>
            <tr>
              <td><strong>LaTeX</strong></td>
              <td>Professional typesetting</td>
              <td>Superior equation rendering, bibliography management, version control friendly</td>
            </tr>
            <tr>
              <td><strong>Overleaf</strong></td>
              <td>Online LaTeX editor</td>
              <td>Real-time collaboration, templates, no local installation</td>
            </tr>
            <tr>
              <td><strong>Grammarly</strong></td>
              <td>Grammar and style checking</td>
              <td>Real-time suggestions, plagiarism detection (premium), tone analysis</td>
            </tr>
            <tr>
              <td><strong>Hemingway Editor</strong></td>
              <td>Readability improvement</td>
              <td>Highlights complex sentences, passive voice, adverbs</td>
            </tr>
            <tr>
              <td><strong>Google Docs</strong></td>
              <td>Collaborative writing</td>
              <td>Real-time collaboration, version history, comments, free</td>
            </tr>
          </tbody>
        </table>

        <div className="fun-fact">
          Many top CS conferences (e.g., ACM, IEEE) provide LaTeX templates. Learning LaTeX early in your academic career pays dividends in professional document preparation.
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            In the IMRaD structure, where should you interpret your results and discuss their implications?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) Results section
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) Discussion section
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) Methods section
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) Abstract
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'B' ? (
                <span style={{color: '#10b981'}}>✓ Correct! The Discussion section interprets results, relates findings to literature, and discusses implications and limitations.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. Results section presents findings objectively without interpretation. Discussion analyzes meaning and implications.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>IMRaD structure (Introduction, Methods, Results, Discussion) is standard for scientific papers</li>
            <li>Abstracts should be concise (150-250 words) and cover all key elements</li>
            <li>Research proposals require detailed methodology and realistic timelines</li>
            <li>Use clear, precise, and formal academic writing style</li>
            <li>Choose journals/conferences based on scope, impact factor, and acceptance rates</li>
            <li>Peer review process involves multiple revision cycles (typically 3-12 months)</li>
            <li>Avoid predatory journals by checking DOAJ, indexing databases, and editorial boards</li>
            <li>LaTeX is preferred for technical papers with equations and precise formatting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResearchWriting;
