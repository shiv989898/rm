import React, { useState } from 'react';

function Introduction() {
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuizAnswer = (answer) => {
    setQuizAnswer(answer);
    setShowAnswer(true);
  };

  return (
    <div className="content-container">
      <h1>📚 Introduction to Research Methodology</h1>
      
      <div className="info-box">
        <h2>Definition of Research</h2>
        <p>
          <strong>Research</strong> is a systematic and methodical investigation conducted to establish facts, 
          validate theories, or develop new knowledge through the application of scientific methods. According to 
          Creswell (2014), research is "a process of steps used to collect and analyze information to increase 
          our understanding of a topic or issue." It involves a structured approach to inquiry that follows 
          established protocols and procedures to ensure validity and reliability of findings.
        </p>
        <p>
          Redman and Mory define research as "a systematized effort to gain new knowledge," emphasizing the 
          organized and deliberate nature of the investigative process. Research transcends mere information 
          gathering; it requires critical analysis, interpretation, and synthesis of data to generate meaningful insights.
        </p>
      </div>

      <h2>📖 Objectives of Research</h2>
      <div className="card">
        <p>Research serves multiple critical objectives in advancing knowledge and solving problems:</p>
        <ul>
          <li><strong>1. Exploration:</strong> To investigate new areas of inquiry and identify patterns, trends, or 
          relationships that have not been previously studied. Exploratory research helps in gaining insights and 
          familiarity with phenomena.</li>
          
          <li><strong>2. Description:</strong> To accurately portray characteristics of individuals, situations, 
          groups, or phenomena. Descriptive research aims to provide a detailed account of what exists or what is happening.</li>
          
          <li><strong>3. Explanation:</strong> To identify causal relationships and explain why phenomena occur. 
          Explanatory research seeks to understand the underlying mechanisms and reasons behind observed patterns.</li>
          
          <li><strong>4. Prediction:</strong> To forecast future outcomes based on current knowledge and patterns. 
          Predictive research uses existing data to make informed projections about future events or behaviors.</li>
          
          <li><strong>5. Problem-Solving:</strong> To develop solutions for practical problems faced by organizations, 
          communities, or society. Applied research focuses on immediate applicability and problem resolution.</li>
          
          <li><strong>6. Theory Development:</strong> To construct, refine, or test theoretical frameworks that 
          explain phenomena. Theoretical research contributes to the body of knowledge by developing conceptual models.</li>
          
          <li><strong>7. Knowledge Generation:</strong> To expand the boundaries of understanding in a particular 
          domain through systematic investigation and discovery.</li>
        </ul>
      </div>

      <h2>🎨 Types of Research</h2>
      
      <div className="card">
        <h3>1. Basic Research (Fundamental/Pure Research)</h3>
        <p>
          <strong>Definition:</strong> Basic research is conducted to enhance understanding of fundamental principles 
          and theories without immediate practical application. It is driven by intellectual curiosity and the desire 
          to expand knowledge.
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Theory-oriented and conceptual in nature</li>
          <li>Focuses on understanding underlying mechanisms and principles</li>
          <li>No immediate commercial or practical application</li>
          <li>Contributes to the theoretical foundation of a discipline</li>
          <li>Often conducted in academic and research institutions</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Investigating the mathematical properties of quantum algorithms, studying computational complexity theory, 
          or researching neural network architectures without specific application constraints. For instance, research 
          on P vs NP problem or exploring new sorting algorithms' theoretical efficiency.</p>
        </div>
      </div>

      <div className="card">
        <h3>2. Applied Research</h3>
        <p>
          <strong>Definition:</strong> Applied research is conducted to solve specific, practical problems or answer 
          questions with direct applications. It utilizes existing knowledge and theories to address real-world issues.
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Problem-focused and solution-oriented</li>
          <li>Has immediate practical utility</li>
          <li>Often commissioned by organizations or industries</li>
          <li>Results in actionable recommendations or products</li>
          <li>Shorter time horizon compared to basic research</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Developing a machine learning model to detect credit card fraud, creating an algorithm to optimize 
          traffic flow in smart cities, or building a recommendation system for e-commerce platforms. For instance, 
          Netflix's research on improving video streaming quality or Google's work on natural language processing 
          for search optimization.</p>
        </div>
      </div>

      <div className="card">
        <h3>3. Exploratory Research</h3>
        <p>
          <strong>Definition:</strong> Exploratory research is conducted when a problem is not clearly defined or 
          when little is known about the phenomenon. It aims to gain insights, discover patterns, and formulate 
          hypotheses for future research.
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Flexible and unstructured approach</li>
          <li>Uses qualitative methods predominantly</li>
          <li>Generates hypotheses rather than testing them</li>
          <li>Preliminary phase of research</li>
          <li>Small sample sizes often acceptable</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Investigating emerging trends in blockchain technology applications, exploring user perceptions of 
          virtual reality interfaces, or examining potential use cases for edge computing in IoT devices. Initial 
          studies on ChatGPT's impact on software development workflows would be considered exploratory.</p>
        </div>
      </div>

      <div className="card">
        <h3>4. Descriptive Research</h3>
        <p>
          <strong>Definition:</strong> Descriptive research systematically describes characteristics of a population, 
          situation, or phenomenon. It answers "what," "where," "when," and "how" questions but not "why."
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Observational and non-experimental</li>
          <li>Uses structured methodology</li>
          <li>Employs surveys, case studies, and observational methods</li>
          <li>Can be quantitative or qualitative</li>
          <li>Does not manipulate variables</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Surveying software developers to determine the most commonly used programming languages in industry, 
          documenting the features and capabilities of different database management systems, or profiling the 
          demographic characteristics of social media users. A study documenting the adoption rates of cloud 
          computing services across different industries would be descriptive.</p>
        </div>
      </div>

      <div className="card">
        <h3>5. Experimental Research (Causal Research)</h3>
        <p>
          <strong>Definition:</strong> Experimental research involves manipulation of one or more independent variables 
          to determine their effect on dependent variables, establishing cause-and-effect relationships through controlled conditions.
        </p>
        <p>
          <strong>Characteristics:</strong>
        </p>
        <ul>
          <li>Manipulates independent variables</li>
          <li>Uses control groups for comparison</li>
          <li>Random assignment of subjects</li>
          <li>Controlled environment to minimize extraneous variables</li>
          <li>Establishes causality</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Conducting A/B testing to compare two user interface designs' impact on user engagement, testing 
          different machine learning algorithms to determine which provides better accuracy for a specific task, 
          or experimenting with various caching strategies to measure their effect on application performance. 
          For instance, testing whether changing button colors (independent variable) increases click-through 
          rates (dependent variable) while controlling for other factors.</p>
        </div>
      </div>

      <h2>💻 Relevance of Research in Computer Science</h2>
      <div className="info-box">
        <p>
          Research in Computer Science and Engineering is critical for technological advancement and innovation. 
          The field's rapid evolution necessitates continuous investigation into new paradigms, methodologies, and applications.
        </p>
        <p><strong>Key Areas of Research Impact:</strong></p>
        <ul>
          <li><strong>Algorithm Development:</strong> Creating more efficient algorithms for data processing, 
          optimization, and problem-solving (e.g., advances in sorting, searching, and graph algorithms)</li>
          
          <li><strong>Artificial Intelligence and Machine Learning:</strong> Developing intelligent systems capable 
          of learning, reasoning, and decision-making (e.g., deep learning, natural language processing, computer vision)</li>
          
          <li><strong>Cybersecurity:</strong> Advancing techniques for protecting systems, networks, and data from 
          unauthorized access and attacks (e.g., cryptography, intrusion detection, blockchain security)</li>
          
          <li><strong>Software Engineering:</strong> Improving methodologies for software development, testing, and 
          maintenance (e.g., agile methodologies, DevOps, software architecture patterns)</li>
          
          <li><strong>Distributed Systems:</strong> Enhancing scalability, reliability, and performance of networked 
          systems (e.g., cloud computing, edge computing, distributed databases)</li>
          
          <li><strong>Human-Computer Interaction:</strong> Designing intuitive and accessible interfaces (e.g., 
          user experience design, accessibility, augmented/virtual reality)</li>
          
          <li><strong>Data Science and Big Data:</strong> Developing methods for extracting insights from massive 
          datasets (e.g., data mining, predictive analytics, visualization techniques)</li>
          
          <li><strong>Theoretical Computer Science:</strong> Exploring fundamental questions about computation 
          (e.g., computational complexity, automata theory, formal methods)</li>
        </ul>
      </div>

      <h2>🎯 Research Paradigms</h2>
      <p>
        Research paradigms represent philosophical frameworks that guide the research process, including assumptions 
        about the nature of reality (ontology), knowledge (epistemology), and appropriate methods of inquiry (methodology).
      </p>
      
      <div className="card">
        <h3>1. Quantitative Research Paradigm</h3>
        <p>
          <strong>Definition:</strong> Quantitative research is a systematic investigation that uses numerical data 
          and statistical methods to test hypotheses and examine relationships between variables. It is rooted in 
          the positivist philosophical tradition.
        </p>
        <p><strong>Philosophical Foundation:</strong></p>
        <ul>
          <li><strong>Ontology:</strong> Assumes an objective reality that exists independent of human perception</li>
          <li><strong>Epistemology:</strong> Knowledge is derived from empirical observation and measurement</li>
          <li><strong>Methodology:</strong> Deductive approach, testing theories through controlled experiments</li>
        </ul>
        <p><strong>Characteristics:</strong></p>
        <ul>
          <li>Emphasis on objectivity and replicability</li>
          <li>Uses structured data collection instruments (surveys, experiments)</li>
          <li>Large sample sizes for statistical generalization</li>
          <li>Statistical analysis (descriptive and inferential statistics)</li>
          <li>Results presented numerically with statistical significance testing</li>
          <li>Deductive reasoning from general to specific</li>
        </ul>
        <p><strong>Common Methods:</strong></p>
        <ul>
          <li>Experiments and quasi-experiments</li>
          <li>Surveys and questionnaires</li>
          <li>Structured observations</li>
          <li>Secondary data analysis</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>A quantitative study measuring the performance improvement (in milliseconds) of different caching 
          algorithms across 1000 test cases, using statistical tests (t-test, ANOVA) to determine significant 
          differences. Another example: surveying 500 developers to quantify the correlation between years of 
          experience and code quality metrics (defect density, cyclomatic complexity).</p>
        </div>
      </div>

      <div className="card">
        <h3>2. Qualitative Research Paradigm</h3>
        <p>
          <strong>Definition:</strong> Qualitative research is an interpretive approach that seeks to understand 
          phenomena through in-depth exploration of meanings, experiences, and contexts. It is rooted in 
          interpretivist and constructivist philosophical traditions.
        </p>
        <p><strong>Philosophical Foundation:</strong></p>
        <ul>
          <li><strong>Ontology:</strong> Reality is subjective and socially constructed</li>
          <li><strong>Epistemology:</strong> Knowledge is co-created through researcher-participant interaction</li>
          <li><strong>Methodology:</strong> Inductive approach, building theories from observations</li>
        </ul>
        <p><strong>Characteristics:</strong></p>
        <ul>
          <li>Emphasis on depth and context</li>
          <li>Uses flexible, emergent research designs</li>
          <li>Small, purposively selected samples</li>
          <li>Rich, detailed descriptions (thick description)</li>
          <li>Thematic or content analysis</li>
          <li>Inductive reasoning from specific to general</li>
          <li>Researcher as key instrument</li>
        </ul>
        <p><strong>Common Methods:</strong></p>
        <ul>
          <li>In-depth interviews</li>
          <li>Focus groups</li>
          <li>Ethnography and participant observation</li>
          <li>Case studies</li>
          <li>Document analysis</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Conducting semi-structured interviews with 15 software developers to understand their experiences 
          with agile methodologies, exploring challenges, benefits, and adoption factors through thematic analysis. 
          Another example: ethnographic study observing how cybersecurity teams respond to incidents, documenting 
          decision-making processes, communication patterns, and cultural factors.</p>
        </div>
      </div>

      <div className="card">
        <h3>3. Mixed Methods Research Paradigm</h3>
        <p>
          <strong>Definition:</strong> Mixed methods research integrates quantitative and qualitative approaches 
          within a single study or program of inquiry. It is grounded in pragmatism, which values practical 
          problem-solving and "what works."
        </p>
        <p><strong>Philosophical Foundation:</strong></p>
        <ul>
          <li><strong>Ontology:</strong> Multiple realities exist; both objective and subjective</li>
          <li><strong>Epistemology:</strong> Knowledge derived from multiple sources and methods</li>
          <li><strong>Methodology:</strong> Both deductive and inductive approaches</li>
        </ul>
        <p><strong>Design Types:</strong></p>
        <ul>
          <li><strong>Convergent Design:</strong> Collect and analyze quantitative and qualitative data simultaneously, 
          then merge results for comprehensive understanding</li>
          <li><strong>Explanatory Sequential Design:</strong> Start with quantitative data, followed by qualitative 
          data to explain quantitative findings</li>
          <li><strong>Exploratory Sequential Design:</strong> Begin with qualitative exploration, followed by 
          quantitative testing</li>
          <li><strong>Embedded Design:</strong> One method plays a supportive role within a larger study of the other type</li>
        </ul>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>Provides more comprehensive evidence</li>
          <li>Addresses both breadth and depth</li>
          <li>Enables triangulation for validation</li>
          <li>Compensates for weaknesses of single methods</li>
        </ul>
        <div className="example-box">
          <div className="example-title">Example in Computer Science:</div>
          <p>Evaluating a new programming language: First, conduct a survey of 200 developers measuring adoption 
          rates, productivity metrics, and satisfaction scores (quantitative). Then, perform in-depth interviews 
          with 20 developers to understand WHY they adopted or rejected the language, exploring barriers and 
          facilitators (qualitative). Integrate findings to provide both statistical patterns and contextual explanations.</p>
        </div>
      </div>

      <h2>🔬 The Scientific Method and Research Process</h2>
      <div className="info-box">
        <p>
          The <strong>scientific method</strong> is a systematic, empirical approach to acquiring knowledge through 
          observation, hypothesis formulation, experimentation, and analysis. It represents the foundational 
          methodology for conducting rigorous research across disciplines.
        </p>
      </div>
      
      <div className="flowchart">
        <div className="flow-step">
          <strong>1. Identify Research Problem</strong><br/>
          Recognize a gap in knowledge or a problem requiring investigation
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>2. Review Existing Literature</strong><br/>
          Examine previous research, theories, and findings related to the topic
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>3. Formulate Research Questions/Hypotheses</strong><br/>
          Develop specific, testable statements or questions
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>4. Design Research Methodology</strong><br/>
          Select appropriate methods, sampling techniques, and instruments
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>5. Collect Data</strong><br/>
          Systematically gather information through selected methods
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>6. Analyze and Interpret Data</strong><br/>
          Apply statistical/qualitative analysis techniques to identify patterns
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>7. Draw Conclusions</strong><br/>
          Determine whether hypotheses are supported; answer research questions
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>8. Communicate Findings</strong><br/>
          Disseminate results through publications, presentations, or reports
        </div>
        <div className="flow-arrow">⬇️</div>
        
        <div className="flow-step">
          <strong>9. Refine and Iterate</strong><br/>
          Use findings to generate new questions and further research
        </div>
      </div>

      <div className="card">
        <h3>Detailed Research Process Steps</h3>
        
        <h4><strong>Step 1: Problem Identification</strong></h4>
        <ul>
          <li>Identify area of interest and specific research problem</li>
          <li>Ensure problem is researchable, significant, and feasible</li>
          <li>Consider scope, resources, and ethical implications</li>
        </ul>

        <h4><strong>Step 2: Literature Review</strong></h4>
        <ul>
          <li>Search databases (IEEE Xplore, ACM Digital Library, Google Scholar)</li>
          <li>Analyze existing theories, methodologies, and findings</li>
          <li>Identify research gaps and build theoretical foundation</li>
          <li>Synthesize knowledge to inform research design</li>
        </ul>

        <h4><strong>Step 3: Hypothesis/Research Question Formulation</strong></h4>
        <ul>
          <li>Develop clear, specific, and testable statements</li>
          <li>Ensure alignment with research objectives</li>
          <li>Specify variables and expected relationships</li>
        </ul>

        <h4><strong>Step 4: Research Design</strong></h4>
        <ul>
          <li>Select research paradigm and methodology</li>
          <li>Determine sampling strategy and sample size</li>
          <li>Choose data collection instruments and procedures</li>
          <li>Plan for validity, reliability, and ethical considerations</li>
        </ul>

        <h4><strong>Step 5: Data Collection</strong></h4>
        <ul>
          <li>Implement data collection procedures systematically</li>
          <li>Maintain consistency and minimize bias</li>
          <li>Document process for transparency and replicability</li>
          <li>Ensure data quality and completeness</li>
        </ul>

        <h4><strong>Step 6: Data Analysis</strong></h4>
        <ul>
          <li>Prepare and clean data</li>
          <li>Apply appropriate analytical techniques (statistical or qualitative)</li>
          <li>Test hypotheses or answer research questions</li>
          <li>Identify patterns, relationships, and anomalies</li>
        </ul>

        <h4><strong>Step 7: Interpretation and Conclusion</strong></h4>
        <ul>
          <li>Relate findings to research questions and hypotheses</li>
          <li>Compare results with existing literature</li>
          <li>Discuss implications, limitations, and contributions</li>
          <li>Propose recommendations for practice and future research</li>
        </ul>

        <h4><strong>Step 8: Dissemination</strong></h4>
        <ul>
          <li>Write research paper following academic conventions</li>
          <li>Submit to peer-reviewed journals or conferences</li>
          <li>Present findings at academic forums</li>
          <li>Share through open access repositories when possible</li>
        </ul>
      </div>

      <div className="fun-fact">
        <strong>Historical Note:</strong> The formalization of the scientific method is attributed to Francis Bacon 
        (1561-1626), who advocated for empirical, inductive reasoning. Karl Popper later refined this with the 
        concept of falsifiability, arguing that scientific theories must be testable and potentially disprovable. 
        The research process continues to evolve with technological advances, particularly in data science and 
        computational research methods.
      </div>

      <h2>🎮 Assessment Question</h2>
      <div className="quiz-container">
        <div className="quiz-question">
          A researcher wants to test whether a new algorithm reduces processing time compared to existing algorithms. 
          They manipulate the algorithm type (independent variable) and measure execution time (dependent variable) 
          across 1000 test cases, using random assignment and controlled conditions. What type of research is this?
        </div>
        <div className="quiz-options">
          <div 
            className={`quiz-option ${quizAnswer === 'A' ? 'incorrect' : ''}`}
            onClick={() => handleQuizAnswer('A')}
          >
            A) Basic Research
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'B' ? 'incorrect' : ''}`}
            onClick={() => handleQuizAnswer('B')}
          >
            B) Descriptive Research
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'C' ? 'correct' : ''}`}
            onClick={() => handleQuizAnswer('C')}
          >
            C) Experimental Research ✓
          </div>
          <div 
            className={`quiz-option ${quizAnswer === 'D' ? 'incorrect' : ''}`}
            onClick={() => handleQuizAnswer('D')}
          >
            D) Exploratory Research
          </div>
        </div>
        {showAnswer && (
          <div className="quiz-feedback" style={{color: quizAnswer === 'C' ? '#28a745' : '#dc3545'}}>
            {quizAnswer === 'C' 
              ? '✅ Correct! This is experimental research because it involves manipulation of the independent variable (algorithm type), measurement of dependent variable (execution time), use of control conditions, and establishment of causality through systematic testing.' 
              : `❌ Incorrect. The correct answer is C) Experimental Research. Key indicators: (1) Manipulation of independent variable, (2) Measurement of dependent variable, (3) Controlled conditions, (4) Random assignment, (5) Establishing cause-effect relationship. This fits the definition of experimental research designed to test causal hypotheses.`}
          </div>
        )}
      </div>

      <div className="highlight-box">
        <h3 style={{textAlign: 'center'}}>📚 Key Takeaways</h3>
        <ul>
          <li><strong>Research</strong> is a systematic, methodical investigation to establish facts and develop new knowledge</li>
          <li><strong>Research objectives</strong> include exploration, description, explanation, prediction, problem-solving, and theory development</li>
          <li><strong>Types of research:</strong> Basic (fundamental understanding), Applied (practical solutions), Exploratory (initial investigation), Descriptive (systematic description), Experimental (causality testing)</li>
          <li><strong>Quantitative paradigm:</strong> Numerical data, statistical analysis, objective measurement, deductive approach</li>
          <li><strong>Qualitative paradigm:</strong> Textual data, thematic analysis, subjective interpretation, inductive approach</li>
          <li><strong>Mixed methods:</strong> Integration of quantitative and qualitative approaches for comprehensive understanding</li>
          <li><strong>Scientific method:</strong> Systematic process from problem identification through dissemination</li>
          <li><strong>Research relevance in CS:</strong> Drives innovation in AI, cybersecurity, software engineering, algorithms, and emerging technologies</li>
        </ul>
      </div>
    </div>
  );
}

export default Introduction;
