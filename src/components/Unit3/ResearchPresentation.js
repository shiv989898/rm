import React, { useState } from 'react';

function ResearchPresentation() {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
  };

  return (
    <div className="main-content">
      <div className="content-container">
        <h1>Research Presentation & Communication Tools</h1>

        <div className="info-box">
          <p><strong>Research Presentation</strong> is the art of communicating your findings effectively through oral presentations, posters, and demonstrations. It combines visual design, public speaking, and technical documentation skills.</p>
        </div>

        <h2>1. Presentation Preparation</h2>

        <div className="card">
          <h4>The 10-20-30 Rule (Guy Kawasaki)</h4>
          <ul className="emoji-list">
            <li><strong>10 slides:</strong> Keep presentations concise</li>
            <li><strong>20 minutes:</strong> Maximum presentation time</li>
            <li><strong>30-point font:</strong> Minimum font size for readability</li>
          </ul>
          <p style={{marginTop: '10px', fontSize: '0.9rem'}}>This rule ensures presentations are focused, engaging, and accessible. Adjust based on your specific requirements, but the principle of brevity remains.</p>
        </div>

        <div className="card">
          <h4>Presentation Structure</h4>
          <div className="flowchart">
            <div className="flow-step">1. Title Slide: Title, authors, affiliations, date</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">2. Introduction: Problem statement, motivation, objectives (2-3 slides)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">3. Background: Literature review, related work (1-2 slides)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">4. Methodology: Approach, architecture, algorithms (2-3 slides)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">5. Results: Experiments, data, visualizations (2-3 slides)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">6. Discussion: Interpretation, implications, limitations (1-2 slides)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">7. Conclusion: Summary, contributions, future work (1 slide)</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-step">8. Questions: Thank you slide with contact info</div>
          </div>
        </div>

        <div className="card">
          <h4>Know Your Audience</h4>
          <ul className="emoji-list">
            <li><strong>Experts:</strong> Technical depth, assume background knowledge, focus on novelty</li>
            <li><strong>Mixed Audience:</strong> Balance technical detail with accessible explanations</li>
            <li><strong>General Public:</strong> Minimize jargon, use analogies, emphasize impact</li>
            <li><strong>Industry:</strong> Focus on practical applications, ROI, scalability</li>
          </ul>
        </div>

        <h2>2. Slide Design Principles</h2>

        <div className="card">
          <h4>Visual Hierarchy</h4>
          <ul className="emoji-list">
            <li><strong>One Idea Per Slide:</strong> Avoid information overload</li>
            <li><strong>Minimize Text:</strong> Use bullet points, not paragraphs (max 6 lines, 6 words per line)</li>
            <li><strong>High Contrast:</strong> Dark background with light text or vice versa</li>
            <li><strong>Consistent Layout:</strong> Use templates with uniform fonts and colors</li>
            <li><strong>Visual Elements:</strong> Prefer diagrams, charts, and images over text</li>
            <li><strong>White Space:</strong> Don't clutter; leave breathing room</li>
          </ul>
        </div>

        <div className="example-box">
          <div className="example-title">Bad vs. Good Slide</div>
          <p><strong>❌ Bad Slide:</strong></p>
          <ul style={{fontSize: '0.85rem', marginLeft: '20px'}}>
            <li>Dense paragraphs of text (8+ lines)</li>
            <li>Multiple unrelated topics</li>
            <li>Low contrast (gray text on white)</li>
            <li>Small font (12pt or less)</li>
            <li>Clip art or distracting animations</li>
          </ul>
          
          <p style={{marginTop: '15px'}}><strong>✅ Good Slide:</strong></p>
          <ul style={{fontSize: '0.85rem', marginLeft: '20px'}}>
            <li>Clear heading: "Key Results"</li>
            <li>3-4 bullet points with key findings</li>
            <li>One supporting chart or graph</li>
            <li>Large, readable font (24pt+)</li>
            <li>Consistent color scheme</li>
          </ul>
        </div>

        <div className="card">
          <h4>Color Guidelines</h4>
          <table>
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Background</strong></td>
                <td>Dark blue, dark gray, or white</td>
              </tr>
              <tr>
                <td><strong>Text</strong></td>
                <td>High contrast with background (white on dark, black on light)</td>
              </tr>
              <tr>
                <td><strong>Highlights</strong></td>
                <td>Use sparingly for emphasis (red for warnings, green for success)</td>
              </tr>
              <tr>
                <td><strong>Accessibility</strong></td>
                <td>Avoid red-green combinations (colorblind-friendly)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. Oral Presentation Techniques</h2>

        <div className="card">
          <h4>Delivery Skills</h4>
          <ul className="emoji-list">
            <li><strong>Practice:</strong> Rehearse multiple times (minimum 3-5 full run-throughs)</li>
            <li><strong>Timing:</strong> Allocate ~1-2 minutes per slide</li>
            <li><strong>Eye Contact:</strong> Engage audience, don't read slides</li>
            <li><strong>Voice Modulation:</strong> Vary pace, tone, and volume for emphasis</li>
            <li><strong>Body Language:</strong> Stand confidently, use gestures naturally, face audience</li>
            <li><strong>Pause Strategically:</strong> Allow time for comprehension after key points</li>
            <li><strong>Handle Nervousness:</strong> Deep breathing, positive self-talk, focus on content</li>
          </ul>
        </div>

        <div className="card">
          <h4>Handling Questions</h4>
          <ul className="emoji-list">
            <li><strong>Listen Carefully:</strong> Let the questioner finish before responding</li>
            <li><strong>Clarify if Needed:</strong> "Just to make sure I understand, you're asking about..."</li>
            <li><strong>Acknowledge:</strong> "That's a great question" or "Thank you for pointing that out"</li>
            <li><strong>Be Honest:</strong> If you don't know, say "I don't have that data, but I can follow up"</li>
            <li><strong>Keep it Brief:</strong> Avoid lengthy tangents</li>
            <li><strong>Redirect:</strong> If off-topic, offer to discuss after the session</li>
          </ul>

          <div className="fun-fact">
            The Q&A session is an opportunity to demonstrate expertise and engage in scholarly dialogue. Prepare for common questions about limitations, alternative approaches, and future work.
          </div>
        </div>

        <h2>4. LaTeX for Academic Documents</h2>

        <div className="card">
          <p><strong>LaTeX</strong> is a typesetting system widely used in academia for producing high-quality technical documents with complex equations, references, and formatting.</p>

          <h4>Advantages over Word:</h4>
          <ul className="emoji-list">
            <li>Superior equation rendering</li>
            <li>Automatic bibliography management</li>
            <li>Consistent formatting across documents</li>
            <li>Version control friendly (plain text)</li>
            <li>Handles large documents efficiently</li>
            <li>Free and open-source</li>
          </ul>
        </div>

        <h3>4.1 Basic LaTeX Structure</h3>

        <div className="card">
          <div className="example-box">
            <div className="example-title">Minimal LaTeX Document</div>
            <pre style={{background: '#1e293b', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '0.85rem'}}>
{`\\documentclass[12pt]{article}

% Preamble: packages and settings
\\usepackage{graphicx}  % For images
\\usepackage{amsmath}   % For equations
\\usepackage{cite}      % For citations

\\title{My Research Paper}
\\author{Jane Smith}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
This paper presents...
\\end{abstract}

\\section{Introduction}
Research motivation and objectives...

\\section{Related Work}
Previous studies by \\cite{smith2023}...

\\section{Methodology}
Our approach involves...

\\section{Results}
We found that...

\\section{Conclusion}
In summary...

\\bibliographystyle{plain}
\\bibliography{references}

\\end{document}`}
            </pre>
          </div>
        </div>

        <h3>4.2 Mathematical Equations</h3>

        <div className="card">
          <p><strong>Inline Math:</strong> Use single dollar signs</p>
          <pre style={{background: '#1e293b', padding: '10px', borderRadius: '5px', fontSize: '0.85rem'}}>
            The formula $E = mc^2$ is famous.
          </pre>

          <p style={{marginTop: '15px'}}><strong>Display Math:</strong> Use double dollar signs or equation environment</p>
          <pre style={{background: '#1e293b', padding: '10px', borderRadius: '5px', fontSize: '0.85rem'}}>
{`$$
f(x) = \\int_{-\\infty}^{\\infty} e^{-x^2} dx
$$

\\begin{equation}
\\label{eq:sample}
\\sum_{i=1}^{n} x_i = \\frac{n(n+1)}{2}
\\end{equation}`}
          </pre>

          <p style={{marginTop: '10px', fontSize: '0.9rem'}}>Reference equation with <code>\ref{'{'}eq:sample{'}'}</code></p>
        </div>

        <h3>4.3 Tables and Figures</h3>

        <div className="card">
          <div className="example-box">
            <div className="example-title">Table Example</div>
            <pre style={{background: '#1e293b', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '0.85rem'}}>
{`\\begin{table}[h]
\\centering
\\caption{Experiment Results}
\\label{tab:results}
\\begin{tabular}{|l|c|c|}
\\hline
Method & Accuracy & Time (s) \\\\
\\hline
Algorithm A & 85.3\\% & 12.5 \\\\
Algorithm B & 87.1\\% & 15.2 \\\\
\\hline
\\end{tabular}
\\end{table}`}
            </pre>
          </div>

          <div className="example-box" style={{marginTop: '15px'}}>
            <div className="example-title">Figure Example</div>
            <pre style={{background: '#1e293b', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '0.85rem'}}>
{`\\begin{figure}[h]
\\centering
\\includegraphics[width=0.8\\textwidth]{architecture.png}
\\caption{System Architecture}
\\label{fig:architecture}
\\end{figure}`}
            </pre>
          </div>
        </div>

        <h3>4.4 BibTeX for References</h3>

        <div className="card">
          <p>BibTeX is a reference management system for LaTeX. Create a <code>.bib</code> file with entries:</p>

          <div className="example-box">
            <div className="example-title">references.bib</div>
            <pre style={{background: '#1e293b', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '0.85rem'}}>
{`@article{smith2023,
  author = {Smith, John and Doe, Jane},
  title = {Deep Learning for NLP},
  journal = {Journal of AI Research},
  year = {2023},
  volume = {45},
  number = {2},
  pages = {123--145},
  doi = {10.1234/jair.2023.45.2.123}
}

@inproceedings{jones2022,
  author = {Jones, Alice},
  title = {Transformer Models},
  booktitle = {Proc. Int. Conf. Machine Learning},
  year = {2022},
  pages = {456--467}
}`}
            </pre>
          </div>

          <p style={{marginTop: '10px'}}>Cite in text with <code>\cite{'{'}smith2023{'}'}</code></p>
        </div>

        <h3>4.5 Conference Templates</h3>

        <div className="card">
          <p>Major conferences and journals provide LaTeX templates:</p>
          <ul className="emoji-list">
            <li><strong>IEEE:</strong> <code>\documentclass[conference]{'{'}IEEEtran{'}'}</code></li>
            <li><strong>ACM:</strong> <code>\documentclass[sigconf]{'{'}acmart{'}'}</code></li>
            <li><strong>Springer LNCS:</strong> <code>\documentclass{'{'}llncs{'}'}</code></li>
            <li><strong>Elsevier:</strong> <code>\documentclass{'{'}elsarticle{'}'}</code></li>
          </ul>

          <p style={{marginTop: '10px', fontSize: '0.9rem'}}>Download templates from conference websites or use Overleaf's template gallery.</p>
        </div>

        <h2>5. Overleaf: Online LaTeX Editor</h2>

        <div className="card">
          <p><strong>Overleaf</strong> is a cloud-based LaTeX editor that eliminates local installation requirements.</p>

          <h4>Features:</h4>
          <ul className="emoji-list">
            <li><strong>Real-time Preview:</strong> See output as you type</li>
            <li><strong>Collaboration:</strong> Share projects, track changes, add comments</li>
            <li><strong>Version History:</strong> Restore previous versions</li>
            <li><strong>Git Integration:</strong> Sync with GitHub for version control</li>
            <li><strong>Template Gallery:</strong> 1000+ journal and conference templates</li>
            <li><strong>Error Checking:</strong> Syntax highlighting and error messages</li>
            <li><strong>Rich Text Mode:</strong> Visual editor for beginners</li>
          </ul>

          <p style={{marginTop: '15px'}}><strong>Plans:</strong></p>
          <ul className="emoji-list">
            <li><strong>Free:</strong> 1 collaborator, 60 compile timeout, limited features</li>
            <li><strong>Premium ($12-15/month):</strong> Multiple collaborators, track changes, priority support</li>
            <li><strong>Institutional:</strong> Often provided by universities</li>
          </ul>
        </div>

        <h2>6. Presentation Software Comparison</h2>

        <table>
          <thead>
            <tr>
              <th>Tool</th>
              <th>Best For</th>
              <th>Pros</th>
              <th>Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PowerPoint</strong></td>
              <td>Traditional academic/corporate presentations</td>
              <td>Widely compatible, rich features, offline</td>
              <td>Can be overused, temptation to overload slides</td>
            </tr>
            <tr>
              <td><strong>LaTeX Beamer</strong></td>
              <td>Technical presentations with equations</td>
              <td>Professional appearance, consistent formatting, equations</td>
              <td>Steeper learning curve, less visual flexibility</td>
            </tr>
            <tr>
              <td><strong>Google Slides</strong></td>
              <td>Collaborative presentations</td>
              <td>Real-time collaboration, cloud storage, free</td>
              <td>Requires internet, fewer advanced features</td>
            </tr>
            <tr>
              <td><strong>Canva</strong></td>
              <td>Visually appealing presentations for general audiences</td>
              <td>Beautiful templates, easy design, free tier</td>
              <td>Less suitable for technical content</td>
            </tr>
            <tr>
              <td><strong>Prezi</strong></td>
              <td>Non-linear storytelling</td>
              <td>Engaging zoom-based navigation</td>
              <td>Can be distracting, not suitable for all contexts</td>
            </tr>
          </tbody>
        </table>

        <h2>7. Version Control with Git</h2>

        <div className="card">
          <p><strong>Git</strong> is essential for managing research projects, especially when collaborating or working with LaTeX.</p>

          <h4>Basic Git Workflow:</h4>
          <pre style={{background: '#1e293b', padding: '15px', borderRadius: '5px', fontSize: '0.85rem'}}>
{`# Initialize repository
git init

# Check status
git status

# Add files to staging
git add manuscript.tex
git add --all  # Add all changes

# Commit changes
git commit -m "Add methodology section"

# Create and switch to a branch
git branch revision-2
git checkout revision-2

# Merge branch into main
git checkout main
git merge revision-2

# Push to remote (GitHub)
git remote add origin https://github.com/user/repo.git
git push -u origin main

# Pull latest changes
git pull origin main`}
          </pre>
        </div>

        <div className="card">
          <h4>GitHub for Research Collaboration</h4>
          <ul className="emoji-list">
            <li><strong>Version History:</strong> Track all changes with timestamps and authors</li>
            <li><strong>Branching:</strong> Work on revisions without affecting main document</li>
            <li><strong>Issues:</strong> Track TODOs and reviewer comments</li>
            <li><strong>Pull Requests:</strong> Review and discuss changes before merging</li>
            <li><strong>README:</strong> Document project structure and setup instructions</li>
            <li><strong>Releases:</strong> Tag specific versions (e.g., "submitted-version", "camera-ready")</li>
          </ul>

          <div className="fun-fact">
            Many researchers maintain public GitHub repositories for their papers, including code, data, and LaTeX source. This enhances reproducibility and transparency.
          </div>
        </div>

        <h2>8. Poster Presentations</h2>

        <div className="card">
          <p><strong>Poster presentations</strong> provide a visual summary of research for conferences and academic events.</p>

          <h4>Poster Layout:</h4>
          <ul className="emoji-list">
            <li><strong>Size:</strong> Typically A0 (33×47 inches) or 36×48 inches</li>
            <li><strong>Orientation:</strong> Portrait preferred, landscape acceptable</li>
            <li><strong>Title Banner:</strong> Large, readable from 6 feet away (72-96pt font)</li>
            <li><strong>Columns:</strong> 2-3 columns for readability</li>
            <li><strong>Flow:</strong> Left-to-right, top-to-bottom reading order</li>
            <li><strong>Visuals:</strong> 40-50% images, charts, diagrams</li>
            <li><strong>Text:</strong> Minimal (200-300 words total), bullet points</li>
          </ul>

          <h4>Poster Sections:</h4>
          <ol style={{marginLeft: '20px'}}>
            <li>Title, authors, affiliations</li>
            <li>Abstract or introduction</li>
            <li>Methodology with flowchart or diagram</li>
            <li>Results with graphs and tables</li>
            <li>Conclusion and key findings</li>
            <li>References and contact information (QR code for paper)</li>
          </ol>
        </div>

        <h2>Assessment Questions</h2>
        <div className="quiz-container">
          <div className="quiz-question">
            Which LaTeX environment is used to create numbered equations that can be referenced later in the document?
          </div>
          <div className="quiz-options">
            <div 
              className={`quiz-option ${selectedAnswer === 'A' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('A')}
            >
              A) $$ ... $$
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'B' ? 'correct' : ''}`}
              onClick={() => handleAnswerSelect('B')}
            >
              B) \begin{'{'}equation{'}'} ... \end{'{'}equation{'}'}
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'C' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('C')}
            >
              C) $ ... $
            </div>
            <div 
              className={`quiz-option ${selectedAnswer === 'D' ? 'incorrect' : ''}`}
              onClick={() => handleAnswerSelect('D')}
            >
              D) \begin{'{'}math{'}'} ... \end{'{'}math{'}'}
            </div>
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              {selectedAnswer === 'B' ? (
                <span style={{color: '#10b981'}}>✓ Correct! The equation environment creates numbered equations with labels for cross-referencing.</span>
              ) : (
                <span style={{color: '#ef4444'}}>✗ Incorrect. $$ creates unnumbered display equations. \begin{'{'}equation{'}'} creates numbered, referenceable equations.</span>
              )}
            </div>
          )}
        </div>

        <div className="info-box" style={{marginTop: '40px'}}>
          <h4>Key Takeaways:</h4>
          <ul className="emoji-list">
            <li>Follow the 10-20-30 rule for concise, engaging presentations</li>
            <li>Design slides with one idea per slide, high contrast, and minimal text</li>
            <li>Practice delivery multiple times; focus on eye contact and voice modulation</li>
            <li>LaTeX provides superior typesetting for technical documents with equations</li>
            <li>Overleaf simplifies LaTeX with real-time preview and collaboration features</li>
            <li>Use BibTeX for automatic bibliography management</li>
            <li>Git version control enables collaboration and tracks document history</li>
            <li>Choose presentation tools based on audience and content type</li>
            <li>Poster presentations emphasize visual communication with minimal text</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResearchPresentation;
