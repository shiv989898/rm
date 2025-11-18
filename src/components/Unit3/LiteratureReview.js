import React, { useState } from 'react';

function LiteratureReview() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Literature Review & Reference Management</h1>

        <div className="info-box">
          <p><strong>Literature Review</strong> is a comprehensive survey of scholarly sources on a specific topic. It provides an overview of current knowledge, identifies gaps, and establishes a theoretical framework for research.</p>
        </div>

        <h2>1. Purpose of Literature Review</h2>

        <div className="card">
          <ul className="emoji-list">
            <li><strong>Establish Context:</strong> Position your research within existing scholarship</li>
            <li><strong>Identify Gaps:</strong> Find areas where research is lacking or contradictory</li>
            <li><strong>Avoid Duplication:</strong> Ensure your research hasn't already been done</li>
            <li><strong>Build Methodology:</strong> Learn from previous research approaches</li>
            <li><strong>Demonstrate Knowledge:</strong> Show understanding of the field</li>
            <li><strong>Support Arguments:</strong> Provide evidence for your research questions</li>
            <li><strong>Identify Theories:</strong> Find theoretical frameworks to apply</li>
          </ul>
        </div>

        <h2>2. Types of Literature Reviews</h2>

        <div className="card">
          <h4>A. Narrative Review</h4>
          <p>Traditional, comprehensive overview of a topic providing background and context.</p>
          <p><strong>Best For:</strong> Introducing readers to a field, thesis/dissertation chapters</p>
        </div>

        <div className="card">
          <h4>B. Systematic Review</h4>
          <p>Rigorous, structured method following predefined protocol to minimize bias.</p>
          <p><strong>Process:</strong></p>
          <ul className="emoji-list">
            <li>Define clear research question</li>
            <li>Establish inclusion/exclusion criteria</li>
            <li>Systematic search of databases</li>
            <li>Screen and select studies</li>
            <li>Extract and synthesize data</li>
            <li>Assess quality and risk of bias</li>
          </ul>
          <p><strong>Best For:</strong> Evidence-based research, meta-analyses</p>
        </div>

        <div className="card">
          <h4>C. Scoping Review</h4>
          <p>Maps key concepts, identifies research gaps, clarifies definitions.</p>
          <p><strong>Best For:</strong> Emerging topics, broad research areas</p>
        </div>

        <h2>3. Literature Search Strategies</h2>

        <h3>3.1 Academic Databases for Computer Science</h3>

        <table>
          <thead>
            <tr>
              <th>Database</th>
              <th>Focus</th>
              <th>Access</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>IEEE Xplore</strong></td>
              <td>Electrical engineering, computer science, electronics</td>
              <td>Subscription (often via university)</td>
            </tr>
            <tr>
              <td><strong>ACM Digital Library</strong></td>
              <td>Computing and information technology</td>
              <td>Subscription</td>
            </tr>
            <tr>
              <td><strong>Springer Link</strong></td>
              <td>Science, technology, medicine</td>
              <td>Subscription</td>
            </tr>
            <tr>
              <td><strong>ScienceDirect</strong></td>
              <td>Scientific and technical research</td>
              <td>Subscription</td>
            </tr>
            <tr>
              <td><strong>Scopus</strong></td>
              <td>Abstract and citation database across disciplines</td>
              <td>Subscription</td>
            </tr>
            <tr>
              <td><strong>Web of Science</strong></td>
              <td>Citation database, impact metrics</td>
              <td>Subscription</td>
            </tr>
            <tr>
              <td><strong>Google Scholar</strong></td>
              <td>Broad scholarly literature search</td>
              <td>Free</td>
            </tr>
            <tr>
              <td><strong>arXiv.org</strong></td>
              <td>Preprints in CS, physics, mathematics</td>
              <td>Free</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Search Techniques</h3>

        <div className="card">
          <h4>Boolean Operators</h4>
          <ul className="emoji-list">
            <li><strong>AND:</strong> Narrows search (must contain both terms)
              <p style={{marginLeft: '20px', marginTop: '5px', fontSize: '0.9rem'}}>Example: "machine learning" AND "healthcare"</p>
            </li>
            <li><strong>OR:</strong> Broadens search (contains either term)
              <p style={{marginLeft: '20px', marginTop: '5px', fontSize: '0.9rem'}}>Example: "artificial intelligence" OR "AI"</p>
            </li>
            <li><strong>NOT:</strong> Excludes terms
              <p style={{marginLeft: '20px', marginTop: '5px', fontSize: '0.9rem'}}>Example: "neural networks" NOT "biological"</p>
            </li>
          </ul>
        </div>

        <div className="card">
          <h4>Advanced Search Techniques</h4>
          <ul className="emoji-list">
            <li><strong>Quotation Marks:</strong> Exact phrase matching
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>"deep learning architecture"</p>
            </li>
            <li><strong>Wildcard (*):</strong> Replaces multiple characters
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>comput* finds computer, computing, computational</p>
            </li>
            <li><strong>Truncation (?):</strong> Replaces single character
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>wom?n finds woman, women</p>
            </li>
            <li><strong>Parentheses:</strong> Group terms
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>(Python OR Java) AND "web development"</p>
            </li>
            <li><strong>Field Searching:</strong> Search specific fields
              <p style={{marginLeft: '20px', fontSize: '0.9rem'}}>title:"blockchain" author:"Nakamoto"</p>
            </li>
          </ul>
        </div>

        <div className="example-box">
          <div className="example-title">Example Search Strategy</div>
          <p><strong>Research Topic:</strong> Security vulnerabilities in IoT devices</p>
          <p><strong>Search Query:</strong></p>
          <p>("Internet of Things" OR IoT) AND (security OR vulnerability OR threat) AND (device* OR sensor*)</p>
          <p><strong>Filters:</strong> Last 5 years, peer-reviewed, English language</p>
        </div>

        <h3>3.3 PRISMA Framework</h3>

        <div className="card">
          <p><strong>PRISMA (Preferred Reporting Items for Systematic Reviews and Meta-Analyses)</strong> provides guidelines for systematic reviews.</p>
          
          <div className="flowchart" style={{marginTop: '20px'}}>
            <div className="flow-step">Identification: Search databases with defined keywords</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Screening: Remove duplicates, screen titles/abstracts</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Eligibility: Full-text assessment against criteria</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">Included: Final set of studies for analysis</div>
          </div>

          <div className="fun-fact">
            Document your search process thoroughly. Record databases searched, keywords used, filters applied, and number of results at each stage. This ensures reproducibility.
          </div>
        </div>

        <h2>4. Reference Management Tools</h2>

        <div className="card">
          <h4>A. Zotero</h4>
          <p><strong>Type:</strong> Free, open-source</p>
          <p><strong>Features:</strong></p>
          <ul className="emoji-list">
            <li>Browser extension for one-click saving</li>
            <li>Organize with collections and tags</li>
            <li>Sync across devices</li>
            <li>MS Word and Google Docs integration</li>
            <li>PDF annotation and note-taking</li>
            <li>Collaborative group libraries</li>
          </ul>
          <p><strong>Best For:</strong> Students, researchers preferring open-source, budget-conscious users</p>
        </div>

        <div className="card">
          <h4>B. Mendeley</h4>
          <p><strong>Type:</strong> Free (with premium options)</p>
          <p><strong>Features:</strong></p>
          <ul className="emoji-list">
            <li>PDF reader with annotation</li>
            <li>Academic social network</li>
            <li>Discover related research</li>
            <li>Citation plugin for Word and LibreOffice</li>
            <li>Mobile apps</li>
          </ul>
          <p><strong>Best For:</strong> Researchers wanting social networking features</p>
        </div>

        <div className="card">
          <h4>C. EndNote</h4>
          <p><strong>Type:</strong> Paid (often provided by institutions)</p>
          <p><strong>Features:</strong></p>
          <ul className="emoji-list">
            <li>Advanced organization capabilities</li>
            <li>Comprehensive citation styles (7000+)</li>
            <li>Collaboration features</li>
            <li>Direct export from databases</li>
            <li>Full-text search across PDFs</li>
          </ul>
          <p><strong>Best For:</strong> Large research projects, institutional users</p>
        </div>

        <h2>5. Citation Styles</h2>

        <h3>5.1 APA Style (7th Edition)</h3>
        <div className="card">
          <p><strong>Used In:</strong> Psychology, education, social sciences</p>
          <p><strong>Format:</strong> Author-date system</p>
          
          <div className="example-box">
            <div className="example-title">APA Examples</div>
            <p><strong>Journal Article:</strong></p>
            <p style={{marginLeft: '20px'}}>Smith, J. A., & Jones, M. B. (2023). Deep learning for image recognition. <em>Journal of Computer Science</em>, 45(2), 123-145. https://doi.org/10.1234/jcs.2023.45.2.123</p>
            
            <p style={{marginTop: '15px'}}><strong>Book:</strong></p>
            <p style={{marginLeft: '20px'}}>Brown, A. (2022). <em>Introduction to algorithms</em> (4th ed.). MIT Press.</p>
            
            <p style={{marginTop: '15px'}}><strong>In-text Citation:</strong></p>
            <p style={{marginLeft: '20px'}}>Recent research (Smith & Jones, 2023) demonstrates...</p>
            <p style={{marginLeft: '20px'}}>Smith and Jones (2023) found that...</p>
          </div>
        </div>

        <h3>5.2 IEEE Style</h3>
        <div className="card">
          <p><strong>Used In:</strong> Engineering, computer science, electronics</p>
          <p><strong>Format:</strong> Numbered system</p>
          
          <div className="example-box">
            <div className="example-title">IEEE Examples</div>
            <p><strong>Journal Article:</strong></p>
            <p style={{marginLeft: '20px'}}>[1] J. A. Smith and M. B. Jones, "Deep learning for image recognition," <em>J. Comput. Sci.</em>, vol. 45, no. 2, pp. 123-145, Feb. 2023, doi: 10.1234/jcs.2023.45.2.123.</p>
            
            <p style={{marginTop: '15px'}}><strong>Conference Paper:</strong></p>
            <p style={{marginLeft: '20px'}}>[2] A. Brown, "Quantum computing applications," in <em>Proc. Int. Conf. Quantum Comput.</em>, Boston, MA, USA, 2023, pp. 45-52.</p>
            
            <p style={{marginTop: '15px'}}><strong>In-text Citation:</strong></p>
            <p style={{marginLeft: '20px'}}>Recent research [1] demonstrates...</p>
            <p style={{marginLeft: '20px'}}>As shown in [1] and [2]...</p>
          </div>
        </div>

        <h3>5.3 MLA Style (9th Edition)</h3>
        <div className="card">
          <p><strong>Used In:</strong> Humanities, literature, languages</p>
          <p><strong>Format:</strong> Author-page system</p>
          
          <div className="example-box">
            <div className="example-title">MLA Example</div>
            <p><strong>Book:</strong></p>
            <p style={{marginLeft: '20px'}}>Brown, Alice. <em>Introduction to Algorithms</em>. 4th ed., MIT Press, 2022.</p>
            
            <p style={{marginTop: '15px'}}><strong>In-text Citation:</strong></p>
            <p style={{marginLeft: '20px'}}>Recent research demonstrates this trend (Smith and Jones 145).</p>
          </div>
        </div>

        <h2>6. Avoiding Plagiarism</h2>

        <div className="card">
          <h4>What is Plagiarism?</h4>
          <p>Using someone else's work, ideas, or words without proper attribution.</p>
          
          <p style={{marginTop: '15px'}}><strong>Types:</strong></p>
          <ul className="emoji-list">
            <li><strong>Direct Plagiarism:</strong> Copy-paste without citation</li>
            <li><strong>Mosaic Plagiarism:</strong> Mix of copied and original text without citation</li>
            <li><strong>Paraphrasing Plagiarism:</strong> Restate ideas without citation</li>
            <li><strong>Self-Plagiarism:</strong> Reuse your own work without disclosure</li>
            <li><strong>Accidental Plagiarism:</strong> Unintentional failure to cite</li>
          </ul>
        </div>

        <div className="card">
          <h4>How to Avoid Plagiarism</h4>
          <ul className="emoji-list">
            <li><strong>Always Cite:</strong> When using others' ideas, words, data, or images</li>
            <li><strong>Use Quotation Marks:</strong> For exact words from sources</li>
            <li><strong>Paraphrase Properly:</strong> Rewrite in your own words AND cite</li>
            <li><strong>Keep Track:</strong> Note sources while researching</li>
            <li><strong>Use Tools:</strong> Turnitin, iThenticate, Copyscape</li>
            <li><strong>Common Knowledge Exception:</strong> Widely known facts don't need citation (but when in doubt, cite)</li>
          </ul>

          <div className="example-box">
            <div className="example-title">Paraphrasing Example</div>
            <p><strong>Original:</strong> "Machine learning algorithms can process vast amounts of data to identify patterns that humans might miss."</p>
            
            <p style={{marginTop: '10px'}}><strong>Bad Paraphrase (Plagiarism):</strong></p>
            <p style={{marginLeft: '20px'}}>Machine learning algorithms process large data amounts to find patterns humans could miss.</p>
            
            <p style={{marginTop: '10px'}}><strong>Good Paraphrase:</strong></p>
            <p style={{marginLeft: '20px'}}>According to Smith (2023), automated learning systems excel at detecting data patterns that may elude human analysts.</p>
          </div>
        </div>

        <h2>7. Literature Review Structure</h2>

        <div className="card">
          <h4>Introduction</h4>
          <ul className="emoji-list">
            <li>Define the topic and scope</li>
            <li>Establish importance of the review</li>
            <li>State objectives and research questions</li>
            <li>Outline organization of the review</li>
          </ul>
        </div>

        <div className="card">
          <h4>Body</h4>
          <p><strong>Organization Approaches:</strong></p>
          <ul className="emoji-list">
            <li><strong>Thematic:</strong> Group by themes or concepts</li>
            <li><strong>Chronological:</strong> Historical development over time</li>
            <li><strong>Methodological:</strong> Group by research methods used</li>
            <li><strong>Theoretical:</strong> Organized by theoretical frameworks</li>
          </ul>
        </div>

        <div className="card">
          <h4>Conclusion</h4>
          <ul className="emoji-list">
            <li>Summarize main findings</li>
            <li>Identify gaps in current research</li>
            <li>Suggest future research directions</li>
            <li>State implications for your research</li>
          </ul>
        </div>

        <div className="fun-fact">
          A good literature review is not just a summary of sources. It synthesizes information, identifies patterns, evaluates methodologies, and critically analyzes the state of knowledge in the field.
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            Which Boolean operator would you use to narrow your search results by requiring both terms to appear?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) AND
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) OR
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) NOT
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) NEAR
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'A' ? (
                <span style={{color: '#10b981'}}>✓ Correct! The AND operator narrows searches by requiring all terms to be present in results.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. AND narrows searches (both terms required), OR broadens (either term), NOT excludes terms.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>Literature reviews establish context and identify research gaps</li>
            <li>Use multiple academic databases for comprehensive coverage</li>
            <li>Boolean operators and advanced search techniques improve efficiency</li>
            <li>Reference management tools save time and ensure accuracy</li>
            <li>Choose citation style appropriate for your discipline</li>
            <li>Always cite sources to avoid plagiarism</li>
            <li>Synthesize and analyze literature, don't just summarize</li>
            <li>Document your search process for reproducibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LiteratureReview;
