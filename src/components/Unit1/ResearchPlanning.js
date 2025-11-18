import React, { useState } from 'react';

function ResearchPlanning() {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="content-container">
      <h1>📋 Research Planning and Flowcharting</h1>
      
      <div className="info-box">
        <p style={{fontSize: '1.3rem'}}>
          Effective research planning is critical for successful project execution. This module covers the systematic 
          process of planning research studies, including scope definition, timeline management, and visual representation 
          of research workflows through flowcharts and diagrams.
        </p>
      </div>

      <h2>📊 Planning a Research Study</h2>
      
      <div className="card">
        <h3>Research Plan Components</h3>
        <p>
          A comprehensive research plan serves as a roadmap for the entire investigation, ensuring systematic 
          execution and resource optimization. It includes:
        </p>
        
        <h4>1. Research Title and Problem Statement</h4>
        <ul>
          <li>Concise, descriptive title reflecting the study's essence</li>
          <li>Clear articulation of the research problem</li>
          <li>Justification for the study's importance</li>
        </ul>

        <h4>2. Literature Review Synopsis</h4>
        <ul>
          <li>Summary of relevant existing research</li>
          <li>Identification of research gaps</li>
          <li>Theoretical framework guiding the study</li>
        </ul>

        <h4>3. Research Objectives and Questions</h4>
        <ul>
          <li>Specific, measurable objectives</li>
          <li>Clear research questions or hypotheses</li>
          <li>Expected outcomes and contributions</li>
        </ul>

        <h4>4. Methodology</h4>
        <ul>
          <li>Research design and paradigm</li>
          <li>Sampling strategy and sample size</li>
          <li>Data collection methods and instruments</li>
          <li>Data analysis techniques</li>
          <li>Validity and reliability measures</li>
        </ul>

        <h4>5. Timeline and Milestones</h4>
        <ul>
          <li>Gantt chart or timeline diagram</li>
          <li>Key milestones and deliverables</li>
          <li>Dependencies between tasks</li>
          <li>Buffer time for contingencies</li>
        </ul>

        <h4>6. Resource Requirements</h4>
        <ul>
          <li>Budget and funding sources</li>
          <li>Personnel and expertise needed</li>
          <li>Equipment, software, and infrastructure</li>
          <li>Access to data or participants</li>
        </ul>

        <h4>7. Ethical Considerations</h4>
        <ul>
          <li>IRB approval requirements</li>
          <li>Informed consent procedures</li>
          <li>Data privacy and security measures</li>
          <li>Potential risks and mitigation strategies</li>
        </ul>

        <h4>8. Expected Outcomes and Impact</h4>
        <ul>
          <li>Anticipated findings and contributions</li>
          <li>Theoretical and practical implications</li>
          <li>Publication and dissemination plan</li>
        </ul>
      </div>

      <h2>🎯 Defining Research Scope</h2>
      <div className="card">
        <h3>What is Research Scope?</h3>
        <p>
          <strong>Research scope</strong> defines the boundaries of the investigation, specifying what will and 
          will not be included in the study. It establishes the breadth and depth of the research, helping to 
          manage expectations and resources effectively.
        </p>

        <h3>Elements of Research Scope</h3>
        <ul>
          <li><strong>Subject Scope:</strong> Specific topics, variables, or phenomena to be investigated</li>
          <li><strong>Geographical Scope:</strong> Physical or virtual locations where research will be conducted</li>
          <li><strong>Temporal Scope:</strong> Time period covered by the study (historical, current, longitudinal)</li>
          <li><strong>Population Scope:</strong> Target population and sampling frame</li>
          <li><strong>Methodological Scope:</strong> Methods and techniques to be employed</li>
          <li><strong>Conceptual Scope:</strong> Theoretical boundaries and conceptual framework</li>
        </ul>

        <div className="example-box">
          <div className="example-title">Example Scope Statement:</div>
          <p>
            <strong>Study:</strong> "Evaluating the Effectiveness of Automated Code Review Tools in Agile Development"
          </p>
          <p><strong>Scope:</strong></p>
          <ul>
            <li><strong>In-Scope:</strong> Analysis of three leading automated code review tools (SonarQube, CodeClimate, 
            Codacy) used by software development teams practicing Scrum methodology in the financial services sector. 
            Evaluation metrics include defect detection rate, false positive rate, integration time, and developer 
            satisfaction. Data collection over 6-month period from teams with 5-10 members using Java and Python.</li>
            
            <li><strong>Out-of-Scope:</strong> Manual code review processes, teams using Kanban or Waterfall methodologies, 
            organizations outside financial services, languages other than Java and Python, teams smaller than 5 or 
            larger than 10 members, implementation costs analysis.</li>
          </ul>
        </div>
      </div>

      <h2>⚠️ Identifying Research Limitations</h2>
      <div className="info-box">
        <h3>Definition</h3>
        <p>
          <strong>Research limitations</strong> are constraints or weaknesses in the study that are beyond the 
          researcher's control but may affect the interpretation or generalizability of findings. Acknowledging 
          limitations demonstrates intellectual honesty and helps readers understand the study's boundaries.
        </p>
      </div>

      <div className="card">
        <h3>Common Types of Limitations</h3>
        
        <h4>1. Methodological Limitations</h4>
        <ul>
          <li>Sample size constraints</li>
          <li>Sampling method limitations (e.g., convenience sampling)</li>
          <li>Measurement instrument reliability</li>
          <li>Cross-sectional vs. longitudinal design trade-offs</li>
        </ul>

        <h4>2. Data Limitations</h4>
        <ul>
          <li>Data availability or accessibility constraints</li>
          <li>Data quality issues (missing values, measurement errors)</li>
          <li>Reliance on self-reported data</li>
          <li>Historical data limitations</li>
        </ul>

        <h4>3. Theoretical Limitations</h4>
        <ul>
          <li>Scope of theoretical framework</li>
          <li>Availability of relevant theories</li>
          <li>Conflicts between theories</li>
        </ul>

        <h4>4. Resource Limitations</h4>
        <ul>
          <li>Time constraints</li>
          <li>Budget restrictions</li>
          <li>Access to specialized equipment or software</li>
          <li>Geographic limitations</li>
        </ul>

        <h4>5. Generalizability Limitations</h4>
        <ul>
          <li>Findings limited to specific population</li>
          <li>Context-specific results</li>
          <li>Cultural or temporal constraints</li>
        </ul>

        <div className="example-box">
          <div className="example-title">Example Limitations Statement:</div>
          <p>
            "This study has several limitations. First, the sample was limited to undergraduate computer science 
            students at a single university, which may limit generalizability to other populations or educational 
            contexts. Second, the 8-week intervention period may not capture long-term effects. Third, learning 
            outcomes were assessed through self-reported measures, which may introduce response bias. Finally, 
            the study did not control for participants' prior programming experience, which could confound results."
          </p>
        </div>
      </div>

      <h2>⏱️ Timeline Development</h2>
      <div className="card">
        <h3>Creating Research Timelines</h3>
        <p>
          A well-constructed timeline ensures efficient project management and timely completion. Timelines 
          should be realistic, account for dependencies, and include buffer periods for unexpected delays.
        </p>

        <h3>Timeline Development Steps</h3>
        <ol>
          <li><strong>Break Down Activities:</strong> Decompose research into discrete tasks and subtasks</li>
          <li><strong>Estimate Duration:</strong> Determine time required for each activity</li>
          <li><strong>Identify Dependencies:</strong> Determine which tasks must be completed before others begin</li>
          <li><strong>Allocate Resources:</strong> Assign personnel and resources to activities</li>
          <li><strong>Add Buffer Time:</strong> Include contingency periods (typically 10-20% additional time)</li>
          <li><strong>Set Milestones:</strong> Define key checkpoints and deliverables</li>
          <li><strong>Create Visual Representation:</strong> Develop Gantt chart or timeline diagram</li>
        </ol>

        <div className="example-box">
          <div className="example-title">Sample Research Timeline (12-Month Study)</div>
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Activities</th>
                <th>Duration</th>
                <th>Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Phase 1: Preparation</td>
                <td>Literature review, research design, IRB approval</td>
                <td>8 weeks</td>
                <td>Months 1-2</td>
              </tr>
              <tr>
                <td>Phase 2: Instrument Development</td>
                <td>Develop surveys/tools, pilot testing, refinement</td>
                <td>6 weeks</td>
                <td>Months 2-3</td>
              </tr>
              <tr>
                <td>Phase 3: Data Collection</td>
                <td>Recruit participants, conduct surveys/experiments</td>
                <td>12 weeks</td>
                <td>Months 4-6</td>
              </tr>
              <tr>
                <td>Phase 4: Data Analysis</td>
                <td>Data cleaning, statistical/qualitative analysis</td>
                <td>8 weeks</td>
                <td>Months 7-8</td>
              </tr>
              <tr>
                <td>Phase 5: Writing & Review</td>
                <td>Draft paper, revisions, peer feedback</td>
                <td>10 weeks</td>
                <td>Months 9-11</td>
              </tr>
              <tr>
                <td>Phase 6: Finalization</td>
                <td>Final edits, submission, presentations</td>
                <td>4 weeks</td>
                <td>Month 12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>📈 Flowcharts for Research Planning</h2>
      <div className="info-box">
        <h3>Purpose of Flowcharts in Research</h3>
        <p>
          Flowcharts provide visual representations of research processes, making complex workflows easier to 
          understand and communicate. They help identify logical flow, decision points, and potential bottlenecks 
          in the research process.
        </p>
      </div>

      <div className="card">
        <h3>Types of Research Flowcharts</h3>
        
        <h4>1. Process Flowchart</h4>
        <p>Shows sequential steps in the research process from start to finish.</p>
        
        <h4>2. Decision Flowchart</h4>
        <p>Illustrates decision points and alternative paths based on conditions.</p>
        
        <h4>3. Algorithm Flowchart</h4>
        <p>Represents computational or analytical procedures step-by-step.</p>
        
        <h4>4. Data Flow Diagram</h4>
        <p>Depicts how data moves through the research system.</p>

        <h3>Standard Flowchart Symbols</h3>
        <table>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>⬭ (Oval)</td>
              <td>Terminator</td>
              <td>Start or end of process</td>
            </tr>
            <tr>
              <td>▭ (Rectangle)</td>
              <td>Process</td>
              <td>Action or operation</td>
            </tr>
            <tr>
              <td>◇ (Diamond)</td>
              <td>Decision</td>
              <td>Conditional branch (yes/no)</td>
            </tr>
            <tr>
              <td>▱ (Parallelogram)</td>
              <td>Input/Output</td>
              <td>Data input or output</td>
            </tr>
            <tr>
              <td>→ (Arrow)</td>
              <td>Flow Line</td>
              <td>Direction of flow</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Example: Data Analysis Algorithm Flowchart</h3>
        <div className="flowchart">
          <div className="flow-step">START: Raw Data Collected</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">Data Cleaning & Preprocessing<br/>(Handle missing values, outliers)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">✓ Data Quality Check<br/>Is data valid and complete?</div>
          <div className="flow-arrow">⬇️ YES | NO →</div>
          
          <div className="flow-step">Descriptive Statistics<br/>(Mean, SD, Frequency distributions)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">✓ Normality Test<br/>Is data normally distributed?</div>
          <div className="flow-arrow">⬇️ YES | NO →</div>
          
          <div className="flow-step">YES: Parametric Tests<br/>(t-test, ANOVA, Pearson correlation)</div>
          <div className="flow-step">NO: Non-Parametric Tests<br/>(Mann-Whitney, Kruskal-Wallis, Spearman)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">Interpret Results<br/>(p-values, effect sizes, confidence intervals)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">✓ Results Significant?<br/>(p &lt; 0.05)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">Generate Visualizations<br/>(Charts, graphs, tables)</div>
          <div className="flow-arrow">⬇️</div>
          
          <div className="flow-step">END: Report Findings</div>
        </div>
      </div>

      <h2>🛠️ Tools for Research Planning and Visualization</h2>
      <div className="card">
        <h3>1. Lucidchart</h3>
        <p>
          <strong>Description:</strong> Web-based diagramming application for creating flowcharts, process maps, 
          UML diagrams, and organizational charts.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Drag-and-drop interface</li>
          <li>Real-time collaboration</li>
          <li>Templates for various diagram types</li>
          <li>Integration with Google Workspace, Microsoft Office</li>
          <li>Export to PDF, PNG, JPEG</li>
        </ul>
        <p><strong>Use Cases:</strong> Process flowcharts, system architecture diagrams, research workflows</p>

        <h3>2. Draw.io (diagrams.net)</h3>
        <p>
          <strong>Description:</strong> Free, open-source diagramming tool with no registration required.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Completely free and open-source</li>
          <li>Works offline or online</li>
          <li>Extensive shape libraries</li>
          <li>Save to Google Drive, OneDrive, GitHub</li>
          <li>Export to multiple formats</li>
        </ul>
        <p><strong>Use Cases:</strong> Flowcharts, network diagrams, algorithm visualizations</p>

        <h3>3. Canva</h3>
        <p>
          <strong>Description:</strong> Graphic design platform with templates for visual content creation.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>User-friendly interface</li>
          <li>Professional templates</li>
          <li>Stock photos and graphics</li>
          <li>Presentation and infographic creation</li>
          <li>Team collaboration features</li>
        </ul>
        <p><strong>Use Cases:</strong> Research posters, infographics, presentation slides, timelines</p>

        <h3>4. Microsoft Project / GanttProject</h3>
        <p>
          <strong>Description:</strong> Project management software for timeline and resource planning.
        </p>
        <p><strong>Features:</strong></p>
        <ul>
          <li>Gantt chart creation</li>
          <li>Task dependencies</li>
          <li>Resource allocation</li>
          <li>Progress tracking</li>
          <li>Critical path analysis</li>
        </ul>
        <p><strong>Use Cases:</strong> Research timelines, milestone tracking, resource management</p>

        <h3>5. Visio / yEd</h3>
        <p>
          <strong>Description:</strong> Professional diagramming applications for technical drawings.
        </p>
        <p><strong>Use Cases:</strong> Complex flowcharts, network topology, data flow diagrams</p>
      </div>

      <h2>✅ Best Practices for Visual Representations</h2>
      <div className="card">
        <h3>Design Principles</h3>
        <ul>
          <li><strong>Clarity:</strong> Use clear, concise labels and avoid cluttering</li>
          <li><strong>Consistency:</strong> Apply uniform symbols, colors, and formatting throughout</li>
          <li><strong>Simplicity:</strong> Include only necessary elements; avoid over-complication</li>
          <li><strong>Flow:</strong> Ensure logical progression from top to bottom or left to right</li>
          <li><strong>Completeness:</strong> Cover all decision points and processes</li>
          <li><strong>Accessibility:</strong> Use high-contrast colors and readable fonts</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <ul>
          <li>Inconsistent symbol usage</li>
          <li>Missing decision outcomes or paths</li>
          <li>Crossing flow lines (minimize crossovers)</li>
          <li>Unclear or ambiguous labels</li>
          <li>Too much detail or too little detail</li>
          <li>No clear start or end point</li>
        </ul>
      </div>

      <div className="fun-fact">
        <strong>Historical Note:</strong> The flowchart was invented by Frank and Lillian Gilbreth in 1921 for 
        documenting process flows. They were industrial engineers who pioneered time and motion studies. Today, 
        flowcharts are ubiquitous in computer science for algorithm design, software documentation, and process optimization.
      </div>

      <h2>🎮 Assessment Question</h2>
      <div className="quiz-container">
        <div className="quiz-question">
          You are planning a study to evaluate a new machine learning algorithm's performance. The study will take 
          6 months, require specialized GPU hardware, involve recruiting 100 participants, and be limited to English 
          speakers in North America. Which research planning element are you defining when you state "The study 
          will be limited to English speakers in North America"?
        </div>
        <div className="quiz-options">
          <div 
            className={`quiz-option ${quizAnswer === 'A' ? 'correct' : ''}`}
            onClick={() => { setQuizAnswer('A'); setShowAnswer(true); }}
          >
            A) Research Scope ✓
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'B' ? 'incorrect' : ''}`}
            onClick={() => { setQuizAnswer('B'); setShowAnswer(true); }}
          >
            B) Research Limitation
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'C' ? 'incorrect' : ''}`}
            onClick={() => { setQuizAnswer('C'); setShowAnswer(true); }}
          >
            C) Research Timeline
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'D' ? 'incorrect' : ''}`}
            onClick={() => { setQuizAnswer('D'); setShowAnswer(true); }}
          >
            D) Research Methodology
          </div>
        </div>
        {showAnswer && (
          <div className="quiz-feedback" style={{color: quizAnswer === 'A' ? '#28a745' : '#dc3545'}}>
            {quizAnswer === 'A' 
              ? '✅ Correct! This defines the geographical and population SCOPE of your study - what you are including. Scope defines boundaries and what will be covered. While this could also introduce a limitation (not generalizable beyond this population), in the planning phase, explicitly stating "limited to" is defining your research scope - the deliberate boundaries you are setting for your investigation.' 
              : `❌ Incorrect. The correct answer is A) Research Scope. When you state "limited to English speakers in North America," you are defining the geographical and population boundaries of your study - this is scope definition. Scope specifies what will and will not be included in the research. A limitation would be discussing how this scope restricts generalizability, but the act of defining these boundaries is scope planning.`}
          </div>
        )}
      </div>

      <div className="highlight-box">
        <h3 style={{textAlign: 'center'}}>📚 Key Takeaways</h3>
        <ul>
          <li><strong>Research planning</strong> involves systematic preparation including objectives, methodology, timeline, resources, and ethical considerations</li>
          <li><strong>Research scope</strong> defines boundaries of the investigation (subject, geographical, temporal, population, methodological)</li>
          <li><strong>Research limitations</strong> are constraints beyond researcher control that may affect findings (methodological, data, resource, generalizability)</li>
          <li><strong>Timelines</strong> should include task breakdown, duration estimates, dependencies, milestones, and buffer periods</li>
          <li><strong>Flowcharts</strong> visualize research processes using standard symbols (terminator, process, decision, input/output, flow lines)</li>
          <li><strong>Tools</strong> for planning and visualization include Lucidchart, Draw.io, Canva, Microsoft Project, and Visio</li>
          <li><strong>Best practices:</strong> Ensure clarity, consistency, simplicity, logical flow, completeness, and accessibility in visual representations</li>
        </ul>
      </div>
    </div>
  );
}

export default ResearchPlanning;
