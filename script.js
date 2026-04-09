const toolsDataset = [

  // ===========================
  // STUDENT TOOLS (Class 3–12)
  // ===========================
  { name: "Scratch", category: "student", domain: "Creativity", purpose: "Create games, stories, and animations using colorful drag-and-drop blocks.", link: "https://scratch.mit.edu", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Khan Academy Kids", category: "student", domain: "Learning & Education", purpose: "Learn math, reading, and science through fun games and stories.", link: "https://khanacademy.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Teachable Machine", category: "student", domain: "Coding / Development", purpose: "Teach a computer to recognize your drawings or sounds — no code needed.", link: "https://teachablemachine.withgoogle.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Quick, Draw!", category: "student", domain: "Fun / Experimental", purpose: "Doodle something and let an AI guess what you drew in 20 seconds!", link: "https://quickdraw.withgoogle.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "AutoDraw", category: "student", domain: "Creativity", purpose: "Draw rough shapes and AI turns them into beautiful clean drawings.", link: "https://autodraw.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Duolingo", category: "student", domain: "Learning & Education", purpose: "Learn a new language with a friendly owl! AI personalizes each lesson.", link: "https://duolingo.com", freeTier: "Free", freePeriod: "Limited daily" },
  { name: "Code.org", category: "student", domain: "Coding / Development", purpose: "Learn coding through fun puzzles with Minecraft and Frozen characters.", link: "https://code.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Canva for Education", category: "student", domain: "Design", purpose: "Design posters, cards, and school projects with AI-powered templates.", link: "https://canva.com/education", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Google Read Along", category: "student", domain: "Voice & Speech", purpose: "Practice reading aloud with Diya, your AI reading buddy who listens.", link: "https://readalong.google.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "AI Experiments (Google)", category: "student", domain: "Fun / Experimental", purpose: "Explore creative AI experiments — make music, draw animals that come alive.", link: "https://experiments.withgoogle.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Storybird", category: "student", domain: "Creativity", purpose: "Write and illustrate your own picture books and poems with AI help.", link: "https://storybird.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Prodigy Math", category: "student", domain: "Learning & Education", purpose: "Battle monsters by solving math problems! AI adjusts difficulty to your level.", link: "https://prodigygame.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Suno AI", category: "student", domain: "Creativity", purpose: "Create full songs from text prompts — make birthday songs for friends!", link: "https://suno.com", freeTier: "Free", freePeriod: "10 songs/day" },
  { name: "Machine Learning for Kids", category: "student", domain: "Coding / Development", purpose: "Train AI models to recognize words, pictures, or sounds, then build in Scratch.", link: "https://machinelearningforkids.co.uk", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Semantris", category: "student", domain: "Fun / Experimental", purpose: "Word association game where you outsmart the AI by describing words cleverly.", link: "https://research.google.com/semantris", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Quizlet", category: "student", domain: "Learning & Education", purpose: "Create flashcards and AI turns them into quizzes, games, and adaptive tests.", link: "https://quizlet.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Adobe Firefly", category: "student", domain: "Design", purpose: "Describe what you want and AI draws it! Perfect for school project visuals.", link: "https://firefly.adobe.com", freeTier: "Free", freePeriod: "25 credits/month" },
  { name: "Scribble Diffusion", category: "student", domain: "Fun / Experimental", purpose: "Draw a simple scribble and watch AI transform it into amazing detailed artwork.", link: "https://scribblediffusion.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Typing.com", category: "student", domain: "Learning & Education", purpose: "Learn to type faster with fun lessons and games. AI tracks speed and accuracy.", link: "https://typing.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Thing Translator", category: "student", domain: "Fun / Experimental", purpose: "Point camera at any object and hear its name in another language instantly.", link: "https://thing-translator.appspot.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "CommonLit", category: "student", domain: "Learning & Education", purpose: "Read stories and answer AI-generated questions to check comprehension.", link: "https://commonlit.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Microsoft Designer", category: "student", domain: "Design", purpose: "Tell AI what poster you want and it creates beautiful designs instantly.", link: "https://designer.microsoft.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Emoji Scavenger Hunt", category: "student", domain: "Fun / Experimental", purpose: "AI gives an emoji and you race to find the matching real object with your camera.", link: "https://emojiscavengerhunt.withgoogle.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Pixton", category: "student", domain: "Creativity", purpose: "Create your own comic strips with AI-powered characters and dialogue.", link: "https://pixton.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Starfall", category: "student", domain: "Learning & Education", purpose: "Learn phonics and reading with AI-guided songs and interactive stories.", link: "https://starfall.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Blockly Games", category: "student", domain: "Coding / Development", purpose: "Solve puzzles using visual block coding from Google. No typing required.", link: "https://blockly.games", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Bing Image Creator", category: "student", domain: "Design", purpose: "Describe any image in simple words and get beautiful AI-generated pictures.", link: "https://bing.com/create", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "StoryWeaver", category: "student", domain: "Creativity", purpose: "Read and create illustrated stories in many Indian and world languages.", link: "https://storyweaver.org.in", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Toontastic 3D", category: "student", domain: "Creativity", purpose: "Create and animate 3D cartoon stories by moving characters. Add your voice!", link: "https://toontastic.withgoogle.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Akinator", category: "student", domain: "Fun / Experimental", purpose: "Think of any character and AI asks smart questions to guess who you mean!", link: "https://akinator.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Padlet", category: "student", domain: "Productivity", purpose: "Create digital bulletin boards to organize ideas, pictures, and notes.", link: "https://padlet.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Craiyon", category: "student", domain: "Design", purpose: "Type anything and watch AI create nine different images instantly!", link: "https://craiyon.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "National Geographic Kids", category: "student", domain: "Learning & Education", purpose: "Explore animals, science, history through AI-curated quizzes and videos.", link: "https://kids.nationalgeographic.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Tynker", category: "student", domain: "Coding / Development", purpose: "Learn coding by building your own games and apps with visual blocks.", link: "https://tynker.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Notion (Student Plan)", category: "student", domain: "Productivity", purpose: "Organize school notes, projects, and to-do lists in one place with AI assist.", link: "https://notion.so/students", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "AI Dungeon", category: "student", domain: "Fun / Experimental", purpose: "Go on an AI-powered text adventure where you decide what happens next.", link: "https://aidungeon.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Krita", category: "student", domain: "Design", purpose: "Free professional digital art app for painting, drawing, and animating.", link: "https://krita.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Google Slides + AI", category: "student", domain: "Productivity", purpose: "Create school presentations with AI image suggestions and smart layouts.", link: "https://slides.google.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Brainly", category: "student", domain: "Learning & Education", purpose: "Ask any homework question and get answers from AI and community of students.", link: "https://brainly.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Flip (Flipgrid)", category: "student", domain: "Communication", purpose: "Record short video responses to share with classmates. Made by Microsoft.", link: "https://flip.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Kiddle", category: "student", domain: "Research & Writing", purpose: "Safe search engine for kids powered by Google, filters adult content.", link: "https://kiddle.co", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Perplexity AI", category: "student", domain: "Research & Writing", purpose: "Get detailed research answers with real-time web citations and sources.", link: "https://perplexity.ai", freeTier: "Free", freePeriod: "Daily Pro limits" },
  { name: "ChatGPT", category: "student", domain: "Research & Writing", purpose: "Brainstorm ideas, write essays, and explain complex topics in simple terms.", link: "https://chat.openai.com", freeTier: "Free", freePeriod: "Daily GPT-4o cap" },
  { name: "Grammarly", category: "student", domain: "Research & Writing", purpose: "AI grammar and spelling checker for essays, reports, and school assignments.", link: "https://grammarly.com", freeTier: "Free", freePeriod: "Basic unlimited" },
  { name: "QuillBot", category: "student", domain: "Research & Writing", purpose: "Paraphrase sentences and summarize long articles to improve writing clarity.", link: "https://quillbot.com", freeTier: "Free", freePeriod: "125 words limit" },
  { name: "Socratic by Google", category: "student", domain: "Learning & Education", purpose: "Take a photo of any homework problem and get step-by-step explanations.", link: "https://socratic.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Wolfram Alpha", category: "student", domain: "Learning & Education", purpose: "Solve complex math, science, and statistics with detailed explanations.", link: "https://wolframalpha.com", freeTier: "Free", freePeriod: "Limited step-by-step" },
  { name: "Photomath", category: "student", domain: "Learning & Education", purpose: "Point camera at math equations and get step-by-step solutions instantly.", link: "https://photomath.com", freeTier: "Free", freePeriod: "Limited" },
  { name: "Character.AI", category: "student", domain: "Fun / Experimental", purpose: "Chat with AI versions of historical figures or fictional characters for projects.", link: "https://character.ai", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Khanmigo (Khan Academy)", category: "student", domain: "Learning & Education", purpose: "AI tutor that guides you through subjects with Socratic questioning, never just giving answers.", link: "https://khanacademy.org/khan-labs", freeTier: "Free", freePeriod: "Limited" },
  { name: "Google Colab (Student)", category: "student", domain: "Coding / Development", purpose: "Write and run Python code in your browser for free. Build AI and data projects!", link: "https://colab.research.google.com", freeTier: "Free", freePeriod: "12 hrs continuous" },
  { name: "Replit (Student)", category: "student", domain: "Coding / Development", purpose: "Write, run, and share code in 50+ languages in your browser. AI suggests code!", link: "https://replit.com", freeTier: "Free", freePeriod: "Limited compute" },
  { name: "MIT App Inventor", category: "student", domain: "Coding / Development", purpose: "Build real Android apps in your browser using visual blocks from MIT. Fully free!", link: "https://appinventor.mit.edu", freeTier: "Free", freePeriod: "Unlimited" },

  // ===========================
  // TECH PROFESSIONALS
  // Full IT lifecycle: Requirements → Design → Code → DB → Test → Deploy → Monitor
  // ===========================

  // — Requirements & Architecture —
  { name: "ChatGPT (Pro API)", category: "tech", domain: "Requirements & Analysis", purpose: "Generate user stories, acceptance criteria, and BRD drafts from high-level feature descriptions.", link: "https://chat.openai.com", freeTier: "Free", freePeriod: "Daily GPT-4o cap" },
  { name: "Claude AI", category: "tech", domain: "Requirements & Analysis", purpose: "Analyze long requirement documents, spot ambiguities, and produce structured SRS outlines.", link: "https://claude.ai", freeTier: "Free", freePeriod: "Daily message limit" },
  { name: "Whimsical AI", category: "tech", domain: "Requirements & Analysis", purpose: "Auto-generate flowcharts, mind maps, and wireframes from plain-text descriptions of business logic.", link: "https://whimsical.com", freeTier: "Free", freePeriod: "3 AI generations" },
  { name: "Miro AI", category: "tech", domain: "Requirements & Analysis", purpose: "AI-assisted digital whiteboard for system architecture diagramming and sprint planning.", link: "https://miro.com", freeTier: "Free", freePeriod: "3 boards" },
  { name: "Eraser.io", category: "tech", domain: "Requirements & Analysis", purpose: "Generate system architecture diagrams and sequence diagrams from natural language descriptions.", link: "https://eraser.io", freeTier: "Free", freePeriod: "5 diagrams/month" },

  // — UI/UX & Frontend Design —
  { name: "Figma AI", category: "tech", domain: "UI/UX Design", purpose: "Auto-generate UI components, layouts, and design variants from text prompts inside Figma.", link: "https://www.figma.com", freeTier: "Free", freePeriod: "3 projects" },
  { name: "v0 by Vercel", category: "tech", domain: "UI/UX Design", purpose: "Describe a UI in natural language and get production-ready React + Tailwind code instantly.", link: "https://v0.dev", freeTier: "Free", freePeriod: "Limited monthly credits" },
  { name: "Uizard", category: "tech", domain: "UI/UX Design", purpose: "Sketch wireframes on paper, scan them, and AI converts to interactive digital prototypes.", link: "https://uizard.io", freeTier: "Free", freePeriod: "2 projects" },
  { name: "Galileo AI", category: "tech", domain: "UI/UX Design", purpose: "Generate complete, complex UI designs from a single text prompt. Export directly to Figma.", link: "https://www.usegalileo.ai", freeTier: "Free", freePeriod: "10 generations" },
  { name: "Framer AI", category: "tech", domain: "UI/UX Design", purpose: "Generate and publish responsive websites with AI. Prompt-to-live-site in minutes.", link: "https://framer.com", freeTier: "Free", freePeriod: "1 site staging" },

  // — Coding & Development —
  { name: "GitHub Copilot", category: "tech", domain: "Coding / Development", purpose: "AI pair programmer in VS Code that auto-completes functions, writes tests, and explains code.", link: "https://github.com/features/copilot", freeTier: "Free", freePeriod: "Free for students" },
  { name: "Cursor", category: "tech", domain: "Coding / Development", purpose: "VS Code fork with built-in GPT-4 for pair programming, refactoring, and codebase Q&A.", link: "https://www.cursor.com", freeTier: "Free", freePeriod: "2000 completions/month" },
  { name: "Lovable", category: "tech", domain: "Coding / Development", purpose: "Build full-stack web apps by chatting with AI. Generates React + Supabase apps from prompts.", link: "https://lovable.dev", freeTier: "Free", freePeriod: "5 projects" },
  { name: "Replit AI", category: "tech", domain: "Coding / Development", purpose: "Code, run, and deploy apps directly from your browser with AI Ghostwriter assistance.", link: "https://replit.com", freeTier: "Free", freePeriod: "Limited compute" },
  { name: "Tabnine", category: "tech", domain: "Coding / Development", purpose: "Privacy-first AI code completion for all major IDEs. Trained on your codebase patterns.", link: "https://www.tabnine.com", freeTier: "Free", freePeriod: "Basic completions" },
  { name: "Amazon Q Developer", category: "tech", domain: "Coding / Development", purpose: "AWS's AI assistant for coding, debugging, infrastructure, and security scanning in IDEs.", link: "https://aws.amazon.com/q/developer", freeTier: "Free", freePeriod: "Free tier available" },
  { name: "Codeium", category: "tech", domain: "Coding / Development", purpose: "Free AI code completion and chat for 70+ languages. Works in VS Code, JetBrains, and more.", link: "https://codeium.com", freeTier: "Free", freePeriod: "Unlimited free" },
  { name: "SourceGraph Cody", category: "tech", domain: "Coding / Development", purpose: "AI coding assistant that understands your entire codebase context for precise answers.", link: "https://sourcegraph.com/cody", freeTier: "Free", freePeriod: "Free tier available" },

  // — Database Design & Data Engineering —
  { name: "Chat2DB", category: "tech", domain: "Database & SQL", purpose: "Write, explain, and optimize complex SQL queries using natural language. Supports MySQL, PostgreSQL, and more.", link: "https://chat2db.ai", freeTier: "Free", freePeriod: "Limited queries" },
  { name: "DBDiagram.io", category: "tech", domain: "Database & SQL", purpose: "Generate ER diagrams from plain SQL or text descriptions. Export as PNG or SQL scripts.", link: "https://dbdiagram.io", freeTier: "Free", freePeriod: "3 diagrams" },
  { name: "AI2SQL", category: "tech", domain: "Database & SQL", purpose: "Convert plain English questions into optimized SQL queries for any database engine instantly.", link: "https://www.ai2sql.io", freeTier: "Free", freePeriod: "10 queries/day" },
  { name: "SQLAI.ai", category: "tech", domain: "Database & SQL", purpose: "Generate, debug, and explain SQL queries in plain English. Supports complex joins and CTEs.", link: "https://www.sqlai.ai", freeTier: "Free", freePeriod: "Limited/day" },
  { name: "DBeaver (AI Plugin)", category: "tech", domain: "Database & SQL", purpose: "Free universal database tool with AI-powered query autocomplete and schema explorer.", link: "https://dbeaver.io", freeTier: "Free", freePeriod: "Unlimited free" },

  // — Testing & QA —
  { name: "Testim", category: "tech", domain: "Testing & QA", purpose: "AI-powered end-to-end test automation that self-heals when your UI changes.", link: "https://www.testim.io", freeTier: "Free", freePeriod: "Trial available" },
  { name: "Mabl", category: "tech", domain: "Testing & QA", purpose: "Intelligent test automation platform that uses ML to generate and maintain UI tests.", link: "https://www.mabl.com", freeTier: "Free", freePeriod: "14-day trial" },
  { name: "CodiumAI (Qodo)", category: "tech", domain: "Testing & QA", purpose: "Automatically generate meaningful unit tests for your code directly inside your IDE.", link: "https://www.qodo.ai", freeTier: "Free", freePeriod: "Free for individuals" },
  { name: "Postman AI (Flows)", category: "tech", domain: "Testing & QA", purpose: "Use AI to generate API test cases, write assertions, and auto-document REST APIs.", link: "https://www.postman.com", freeTier: "Free", freePeriod: "Free tier" },

  // — DevOps, CI/CD & Deployment —
  { name: "Vercel", category: "tech", domain: "Deployment & DevOps", purpose: "Deploy front-end and full-stack apps with zero config. AI-assisted build optimization.", link: "https://vercel.com", freeTier: "Free", freePeriod: "100GB bandwidth" },
  { name: "Netlify", category: "tech", domain: "Deployment & DevOps", purpose: "Deploy static sites and serverless functions with AI-powered form and analytics features.", link: "https://www.netlify.com", freeTier: "Free", freePeriod: "100GB bandwidth" },
  { name: "Railway", category: "tech", domain: "Deployment & DevOps", purpose: "Deploy any app or database in seconds with AI-assisted configuration and environment setup.", link: "https://railway.app", freeTier: "Free", freePeriod: "$5 credit/month" },
  { name: "GitHub Actions + Copilot", category: "tech", domain: "Deployment & DevOps", purpose: "AI-assisted CI/CD pipeline creation. Copilot writes YAML workflow files from natural language.", link: "https://github.com/features/actions", freeTier: "Free", freePeriod: "2000 min/month" },
  { name: "Pulumi AI", category: "tech", domain: "Deployment & DevOps", purpose: "Generate infrastructure-as-code for AWS, Azure, and GCP from plain English descriptions.", link: "https://www.pulumi.com/ai", freeTier: "Free", freePeriod: "Free open source" },

  // — Monitoring & Security —
  { name: "Datadog AI", category: "tech", domain: "Monitoring & Observability", purpose: "AI-powered log analysis, anomaly detection, and root-cause analysis for production systems.", link: "https://www.datadoghq.com", freeTier: "Free", freePeriod: "14-day trial" },
  { name: "Snyk", category: "tech", domain: "Security & Code Review", purpose: "Scan code, containers, and dependencies for security vulnerabilities using AI-prioritized fixes.", link: "https://snyk.io", freeTier: "Free", freePeriod: "200 tests/month" },
  { name: "CodeRabbit", category: "tech", domain: "Security & Code Review", purpose: "AI code review bot that automatically reviews every pull request with line-by-line suggestions.", link: "https://coderabbit.ai", freeTier: "Free", freePeriod: "Free for public repos" },
  { name: "SonarQube (Community)", category: "tech", domain: "Security & Code Review", purpose: "Static analysis tool that detects bugs, vulnerabilities, and code smells in 30+ languages.", link: "https://www.sonarsource.com/products/sonarqube", freeTier: "Free", freePeriod: "Community edition free" },

  // — Data Science & ML —
  { name: "Google Colab", category: "tech", domain: "Data Science & ML", purpose: "Cloud Jupyter notebooks with free GPU/TPU for ML training and data exploration.", link: "https://colab.research.google.com", freeTier: "Free", freePeriod: "12 hrs/session" },
  { name: "Hugging Face", category: "tech", domain: "Data Science & ML", purpose: "Host, discover, and use 200k+ open-source AI models, datasets, and demos.", link: "https://huggingface.co", freeTier: "Free", freePeriod: "Limited inference" },
  { name: "Kaggle", category: "tech", domain: "Data Science & ML", purpose: "Data science competitions, free GPU notebooks, and curated datasets for ML projects.", link: "https://kaggle.com", freeTier: "Free", freePeriod: "30 hrs/week GPU" },
  { name: "Julius AI", category: "tech", domain: "Data Science & ML", purpose: "Upload any dataset and chat with it — get charts, summaries, and insights in seconds.", link: "https://julius.ai", freeTier: "Free", freePeriod: "10 messages/day" },
  { name: "Akkio", category: "tech", domain: "Data Science & ML", purpose: "No-code AI platform to build predictive models from CSV data without writing a single line of ML code.", link: "https://www.akkio.com", freeTier: "Free", freePeriod: "14-day trial" },

  // — AI Agents & Automation —
  { name: "n8n", category: "tech", domain: "AI Agents & Automation", purpose: "Self-hostable workflow automation with AI nodes. Build complex multi-step AI pipelines.", link: "https://n8n.io", freeTier: "Free", freePeriod: "Fully free self-hosted" },
  { name: "LangChain", category: "tech", domain: "AI Agents & Automation", purpose: "Framework for building LLM-powered applications, agents, and RAG pipelines in Python/JS.", link: "https://python.langchain.com", freeTier: "Free", freePeriod: "Open source" },
  { name: "LangFlow", category: "tech", domain: "AI Agents & Automation", purpose: "Visual drag-and-drop builder for LangChain AI pipelines. Build agents without writing boilerplate.", link: "https://www.langflow.org", freeTier: "Free", freePeriod: "Open source" },
  { name: "AutoGen (Microsoft)", category: "tech", domain: "AI Agents & Automation", purpose: "Build multi-agent AI systems where agents collaborate to solve complex programming tasks.", link: "https://microsoft.github.io/autogen", freeTier: "Free", freePeriod: "Open source" },

  // — Technical Documentation —
  { name: "Mintlify", category: "tech", domain: "Technical Documentation", purpose: "Auto-generate API documentation from code comments and create beautiful developer docs sites.", link: "https://mintlify.com", freeTier: "Free", freePeriod: "Free for open source" },
  { name: "Swimm", category: "tech", domain: "Technical Documentation", purpose: "AI generates and keeps code documentation up to date automatically as your codebase changes.", link: "https://swimm.io", freeTier: "Free", freePeriod: "Free for individuals" },


  // ===========================
  // NON-TECH PROFESSIONALS
  // Researchers, Business Administrators, HR, Marketing, Finance, Legal
  // ===========================

  // — Research & Knowledge Work —
  { name: "Perplexity AI", category: "nontech", domain: "Research & Writing", purpose: "Ask any question and get detailed answers with real-time, cited web sources. Like a research assistant.", link: "https://perplexity.ai", freeTier: "Free", freePeriod: "Daily Pro limits" },
  { name: "NotebookLM", category: "nontech", domain: "Research & Writing", purpose: "Upload documents and Google's AI summarizes, answers questions, and generates audio podcasts from them.", link: "https://notebooklm.google.com", freeTier: "Free", freePeriod: "Beta unlimited" },
  { name: "Consensus", category: "nontech", domain: "Research & Writing", purpose: "AI search engine for scientific papers. Find evidence-based answers with academic citations.", link: "https://consensus.app", freeTier: "Free", freePeriod: "20 searches/day" },
  { name: "Elicit", category: "nontech", domain: "Research & Writing", purpose: "AI research assistant that finds and summarizes relevant academic studies for your questions.", link: "https://elicit.com", freeTier: "Free", freePeriod: "Limited queries" },
  { name: "Semantic Scholar", category: "nontech", domain: "Research & Writing", purpose: "Free AI-powered academic search engine covering 200M+ papers across all research domains.", link: "https://semanticscholar.org", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "ChatPDF", category: "nontech", domain: "Research & Writing", purpose: "Upload any PDF report or paper and ask questions about it. AI cites the exact page for every answer.", link: "https://chatpdf.com", freeTier: "Free", freePeriod: "2 PDFs/day" },
  { name: "Scholarcy", category: "nontech", domain: "Research & Writing", purpose: "AI reads research papers and auto-generates structured summary cards with key findings and references.", link: "https://www.scholarcy.com", freeTier: "Free", freePeriod: "Limited summaries" },

  // — Business Administration & Strategy —
  { name: "Google Gemini", category: "nontech", domain: "Business Administration", purpose: "AI assistant integrated with Google Workspace for drafting reports, emails, and strategic documents.", link: "https://gemini.google.com", freeTier: "Free", freePeriod: "Usage limits" },
  { name: "Microsoft Copilot", category: "nontech", domain: "Business Administration", purpose: "GPT-4 powered assistant for summarizing meetings, drafting proposals, and business analysis.", link: "https://copilot.microsoft.com", freeTier: "Free", freePeriod: "Unlimited messages" },
  { name: "Gamma AI", category: "nontech", domain: "Business Administration", purpose: "Generate polished business presentations, one-pagers, and reports from a short prompt.", link: "https://gamma.app", freeTier: "Free", freePeriod: "400 credits on signup" },
  { name: "Beautiful.ai", category: "nontech", domain: "Business Administration", purpose: "AI auto-formats presentation slides for maximum visual impact. Great for boardroom decks.", link: "https://www.beautiful.ai", freeTier: "Free", freePeriod: "Limited slides" },
  { name: "Tome AI", category: "nontech", domain: "Business Administration", purpose: "AI generates complete story-driven pitch decks with narrative flow and visuals automatically.", link: "https://tome.app", freeTier: "Free", freePeriod: "Limited credits" },

  // — Project Management —
  { name: "Asana AI", category: "nontech", domain: "Project Management", purpose: "AI generates project plans, auto-assigns tasks, summarizes project status, and surfaces blockers.", link: "https://asana.com", freeTier: "Free", freePeriod: "Free for 15 members" },
  { name: "ClickUp AI", category: "nontech", domain: "Project Management", purpose: "Write project briefs, summarize threads, create tasks from meetings, and auto-fill status reports.", link: "https://clickup.com", freeTier: "Free", freePeriod: "Unlimited tasks" },
  { name: "Notion AI (Projects)", category: "nontech", domain: "Project Management", purpose: "Use AI to build project wikis, generate meeting agendas, and keep team knowledge organized.", link: "https://notion.so", freeTier: "Free", freePeriod: "20 AI uses/month" },
  { name: "Linear (AI Assist)", category: "nontech", domain: "Project Management", purpose: "AI-assisted issue tracking with automatic sprint planning, priority sorting, and release notes.", link: "https://linear.app", freeTier: "Free", freePeriod: "Free for individuals" },
  { name: "Monday.com AI", category: "nontech", domain: "Project Management", purpose: "AI generates project boards, predicts deadlines, and creates status summaries for stakeholders.", link: "https://monday.com", freeTier: "Free", freePeriod: "2 seats free" },
  { name: "Trello (AI Butler)", category: "nontech", domain: "Project Management", purpose: "Automate repetitive board tasks with AI Butler. Great for simple visual project tracking.", link: "https://trello.com", freeTier: "Free", freePeriod: "Unlimited boards" },

  // — Marketing & Content —
  { name: "Copy.ai", category: "nontech", domain: "Marketing & Content", purpose: "Generate marketing copy, ad headlines, product descriptions, and social media posts at scale.", link: "https://www.copy.ai", freeTier: "Free", freePeriod: "2000 words/month" },
  { name: "Jasper AI", category: "nontech", domain: "Marketing & Content", purpose: "AI content platform for blog posts, campaign copy, and brand voice-consistent writing.", link: "https://www.jasper.ai", freeTier: "Free", freePeriod: "7-day trial" },
  { name: "Canva Magic Suite", category: "nontech", domain: "Marketing & Content", purpose: "AI text-to-image, background remover, Magic Write, and brand kit for marketing creatives.", link: "https://canva.com", freeTier: "Free", freePeriod: "Limited AI features" },
  { name: "AdCreative.ai", category: "nontech", domain: "Marketing & Content", purpose: "Generate high-converting ad creatives and banner designs powered by AI in seconds.", link: "https://www.adcreative.ai", freeTier: "Free", freePeriod: "7-day trial" },
  { name: "Surfer SEO", category: "nontech", domain: "Marketing & Content", purpose: "AI-driven SEO tool that analyzes top-ranking content and guides you to write better web pages.", link: "https://surferseo.com", freeTier: "Free", freePeriod: "Trial available" },

  // — HR & Talent —
  { name: "Teal (Resume AI)", category: "nontech", domain: "HR & Talent", purpose: "AI-powered resume builder that tailors your resume to each job description automatically.", link: "https://www.tealhq.com", freeTier: "Free", freePeriod: "Free tier" },
  { name: "Kickresume AI", category: "nontech", domain: "HR & Talent", purpose: "Generate ATS-optimized resumes and cover letters using AI with professional templates.", link: "https://www.kickresume.com", freeTier: "Free", freePeriod: "1 resume free" },
  { name: "Manatal", category: "nontech", domain: "HR & Talent", purpose: "AI recruitment software that scores candidates, recommends job matches, and automates pipelines.", link: "https://www.manatal.com", freeTier: "Free", freePeriod: "14-day trial" },
  { name: "Leena AI", category: "nontech", domain: "HR & Talent", purpose: "Conversational HR bot that answers employee FAQs, processes leaves, and handles onboarding queries.", link: "https://leena.ai", freeTier: "Free", freePeriod: "Demo available" },

  // — Finance & Financial Planning —
  { name: "Finchat.io", category: "nontech", domain: "Financial Planning", purpose: "Chat with financial data from 750+ public companies. Get charts, ratios, and earnings summaries.", link: "https://finchat.io", freeTier: "Free", freePeriod: "Limited queries" },
  { name: "Wisesheets", category: "nontech", domain: "Financial Planning", purpose: "AI-powered financial data plugin for Google Sheets. Pull live stock, crypto, and macro data.", link: "https://wisesheets.io", freeTier: "Free", freePeriod: "7-day trial" },
  { name: "Planful", category: "nontech", domain: "Financial Planning", purpose: "AI financial planning and analysis platform for budgeting, forecasting, and reporting.", link: "https://planful.com", freeTier: "Free", freePeriod: "Demo available" },
  { name: "Docyt AI", category: "nontech", domain: "Financial Planning", purpose: "AI bookkeeping that automatically categorizes expenses, reconciles accounts, and generates P&Ls.", link: "https://docyt.com", freeTier: "Free", freePeriod: "Trial available" },
  { name: "Zeni", category: "nontech", domain: "Financial Planning", purpose: "AI-powered finance operations platform for startups: bookkeeping, CFO insights, and tax prep.", link: "https://www.zeni.ai", freeTier: "Free", freePeriod: "Demo available" },

  // — Legal & Compliance —
  { name: "Harvey AI", category: "nontech", domain: "Legal & Compliance", purpose: "AI legal assistant for drafting contracts, reviewing documents, and legal research.", link: "https://www.harvey.ai", freeTier: "Free", freePeriod: "By request" },
  { name: "Spellbook (AI Legal)", category: "nontech", domain: "Legal & Compliance", purpose: "GPT-4 powered contract drafting and review tool that works inside Microsoft Word.", link: "https://www.spellbook.legal", freeTier: "Free", freePeriod: "Free trial" },
  { name: "Casetext (CoCounsel)", category: "nontech", domain: "Legal & Compliance", purpose: "AI legal research assistant that finds relevant cases, statutes, and regulations in seconds.", link: "https://casetext.com", freeTier: "Free", freePeriod: "Trial available" },

  // — Communication & Writing —
  { name: "Otter.ai", category: "nontech", domain: "Communication", purpose: "Real-time AI transcription and summarization of meetings, interviews, and lectures.", link: "https://otter.ai", freeTier: "Free", freePeriod: "300 min/month" },
  { name: "ElevenLabs", category: "nontech", domain: "Voice & Speech", purpose: "Generate ultra-realistic AI voiceovers in any voice style for presentations and videos.", link: "https://elevenlabs.io", freeTier: "Free", freePeriod: "10K chars/month" },
  { name: "DeepL", category: "nontech", domain: "Communication", purpose: "World's most accurate AI translator for business documents and professional communications.", link: "https://www.deepl.com", freeTier: "Free", freePeriod: "500K chars/month" },
  { name: "Fireflies.ai", category: "nontech", domain: "Communication", purpose: "Auto-join meetings, record, transcribe, and generate action items with AI meeting intelligence.", link: "https://fireflies.ai", freeTier: "Free", freePeriod: "800 min storage" },
  { name: "Loom AI", category: "nontech", domain: "Communication", purpose: "Record short async video messages with AI-generated titles, summaries, and follow-up tasks.", link: "https://www.loom.com", freeTier: "Free", freePeriod: "25 videos" },


  // ===========================
  // CROSS-FUNCTIONAL (ALL ROLES)
  // Daily Activities, Productivity, Mindfulness, File Management
  // ===========================

  // — General AI Assistants —
  { name: "Google Gemini", category: "cross", domain: "AI Assistant", purpose: "Google's multimodal AI assistant for text, images, and code. Integrates with Google Workspace.", link: "https://gemini.google.com", freeTier: "Free", freePeriod: "Usage limits" },
  { name: "Claude AI", category: "cross", domain: "AI Assistant", purpose: "Anthropic's AI for thoughtful writing, analysis, research, and coding. Known for long context.", link: "https://claude.ai", freeTier: "Free", freePeriod: "Daily message limit" },
  { name: "Microsoft Copilot", category: "cross", domain: "AI Assistant", purpose: "GPT-4 + DALL-E 3 powered assistant. Free for all. Works in Edge browser and Bing.", link: "https://copilot.microsoft.com", freeTier: "Free", freePeriod: "Unlimited messages" },
  { name: "ChatGPT", category: "cross", domain: "AI Assistant", purpose: "World's most popular AI assistant for writing, learning, coding, and creative brainstorming.", link: "https://chat.openai.com", freeTier: "Free", freePeriod: "Daily GPT-4o cap" },
  { name: "Meta AI", category: "cross", domain: "AI Assistant", purpose: "Free AI assistant embedded in WhatsApp, Instagram, and Messenger. No separate app needed.", link: "https://ai.meta.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Grok (xAI)", category: "cross", domain: "AI Assistant", purpose: "Real-time AI assistant from xAI with access to live X/Twitter data and web search.", link: "https://grok.com", freeTier: "Free", freePeriod: "Limited free tier" },

  // — Productivity & Notes —
  { name: "Notion AI", category: "cross", domain: "Productivity", purpose: "AI inside your notes that summarizes docs, rewrites content, creates action items, and translates.", link: "https://www.notion.so", freeTier: "Free", freePeriod: "20 AI uses/month" },
  { name: "Obsidian (AI plugins)", category: "cross", domain: "Productivity", purpose: "Local-first knowledge base with AI plugins for linking ideas, summarizing notes, and Q&A.", link: "https://obsidian.md", freeTier: "Free", freePeriod: "Fully free personal" },
  { name: "Mem AI", category: "cross", domain: "Productivity", purpose: "AI note-taking app that auto-organizes your notes, surfaces related memories, and answers questions.", link: "https://mem.ai", freeTier: "Free", freePeriod: "Free tier" },
  { name: "Reflect AI", category: "cross", domain: "Productivity", purpose: "Daily notes app with GPT-4 built in. AI links your ideas, helps you think, and backtracks notes.", link: "https://reflect.app", freeTier: "Free", freePeriod: "Trial available" },

  // — Project & Task Management —
  { name: "Todoist AI Assistant", category: "cross", domain: "Project Management", purpose: "AI assistant in Todoist that breaks big goals into tasks, sets priorities, and suggests schedules.", link: "https://todoist.com", freeTier: "Free", freePeriod: "Free plan" },
  { name: "Reclaim AI", category: "cross", domain: "Project Management", purpose: "AI calendar tool that auto-schedules tasks, habits, and meetings around your priorities.", link: "https://reclaim.ai", freeTier: "Free", freePeriod: "Free plan" },
  { name: "Motion AI", category: "cross", domain: "Project Management", purpose: "Automatically plans your day by fitting all tasks and meetings into your calendar using AI.", link: "https://usemotion.com", freeTier: "Free", freePeriod: "7-day trial" },
  { name: "Height AI", category: "cross", domain: "Project Management", purpose: "Project management tool with AI that auto-fills task details, assigns owners, and writes subtasks.", link: "https://height.app", freeTier: "Free", freePeriod: "Free forever" },

  // — File Management & Organization —
  { name: "Dropbox AI (Dash)", category: "cross", domain: "File Management", purpose: "AI search across all your files, emails, and apps. Find any document by asking in plain language.", link: "https://dash.dropbox.com", freeTier: "Free", freePeriod: "Trial available" },
  { name: "Coda AI", category: "cross", domain: "File Management", purpose: "AI-powered doc and spreadsheet that summarizes content, generates tables, and answers doc questions.", link: "https://coda.io", freeTier: "Free", freePeriod: "Free for individuals" },
  { name: "DocuSign AI", category: "cross", domain: "File Management", purpose: "AI-powered document management that extracts key clauses, flags risks, and routes for signatures.", link: "https://www.docusign.com", freeTier: "Free", freePeriod: "30-day trial" },
  { name: "PDF.ai", category: "cross", domain: "File Management", purpose: "Chat with any PDF document. Ask questions, get summaries, and extract data from files.", link: "https://pdf.ai", freeTier: "Free", freePeriod: "1 PDF/day" },
  { name: "Filerev", category: "cross", domain: "File Management", purpose: "AI scans your Google Drive to find duplicate files, large files, and organize storage intelligently.", link: "https://filerev.com", freeTier: "Free", freePeriod: "Free tier" },

  // — Daily Life & Personal AI —
  { name: "Notion Calendar AI", category: "cross", domain: "Daily Activities", purpose: "AI-powered calendar that links your notes to events and suggests agenda items before each meeting.", link: "https://calendar.notion.so", freeTier: "Free", freePeriod: "Free" },
  { name: "Bing Copilot (Search)", category: "cross", domain: "Daily Activities", purpose: "AI-enhanced web search with summarized results, comparison tables, and follow-up questions.", link: "https://bing.com", freeTier: "Free", freePeriod: "Unlimited" },
  { name: "Arc Browser AI", category: "cross", domain: "Daily Activities", purpose: "AI browser that auto-summarizes web pages, answers questions about any site, and tidies your tabs.", link: "https://arc.net", freeTier: "Free", freePeriod: "Fully free" },
  { name: "Superhuman AI", category: "cross", domain: "Daily Activities", purpose: "AI email client that auto-drafts replies, summarizes email threads, and trims inbox time by 50%.", link: "https://superhuman.com", freeTier: "Free", freePeriod: "Trial available" },
  { name: "Taskade AI", category: "cross", domain: "Daily Activities", purpose: "All-in-one AI workspace for tasks, mind maps, docs, and agents. Great for personal and team use.", link: "https://taskade.com", freeTier: "Free", freePeriod: "Free forever plan" },

  // — Mindfulness & Wellness —
  { name: "Calm (AI features)", category: "cross", domain: "Mindfulness & Wellness", purpose: "Guided meditations, sleep stories, and breathing exercises. AI personalizes based on your mood.", link: "https://calm.com", freeTier: "Free", freePeriod: "Limited free content" },
  { name: "Headspace AI", category: "cross", domain: "Mindfulness & Wellness", purpose: "AI-guided mindfulness, focus music, and stress management exercises personalized to your goals.", link: "https://www.headspace.com", freeTier: "Free", freePeriod: "Basic exercises free" },
  { name: "Wysa", category: "cross", domain: "Mindfulness & Wellness", purpose: "AI mental wellness chatbot offering CBT exercises, mood tracking, and anonymous emotional support.", link: "https://www.wysa.io", freeTier: "Free", freePeriod: "Core free forever" },
  { name: "Woebot", category: "cross", domain: "Mindfulness & Wellness", purpose: "Clinically validated AI mental health chatbot using CBT and DBT techniques for daily emotional check-ins.", link: "https://woebothealth.com", freeTier: "Free", freePeriod: "Free to use" },
  { name: "Finch (Self-care AI)", category: "cross", domain: "Mindfulness & Wellness", purpose: "Grow a virtual bird by completing self-care goals. AI tracks mood, habits, and daily intentions.", link: "https://finchcare.com", freeTier: "Free", freePeriod: "Free core features" },
  { name: "Fabulous AI", category: "cross", domain: "Mindfulness & Wellness", purpose: "Science-backed habit building app with AI coaching to build morning routines and work focus habits.", link: "https://www.thefabulous.co", freeTier: "Free", freePeriod: "Trial available" },

  // — AI Agents & Automation (Cross) —
  { name: "Make (Integromat)", category: "cross", domain: "AI Agents & Automation", purpose: "Visual AI workflow automation builder. Connect 1000+ apps with drag-and-drop logic flows.", link: "https://www.make.com", freeTier: "Free", freePeriod: "1000 ops/month" },
  { name: "Zapier AI", category: "cross", domain: "AI Agents & Automation", purpose: "Automate tasks across 6000+ apps. AI Zaps write automations from plain English descriptions.", link: "https://zapier.com", freeTier: "Free", freePeriod: "100 tasks/month" },
  { name: "Pipedream", category: "cross", domain: "AI Agents & Automation", purpose: "Low-code integration and automation platform with AI-powered workflow generation.", link: "https://pipedream.com", freeTier: "Free", freePeriod: "100 invocations/day" },
  { name: "Bardeen AI", category: "cross", domain: "AI Agents & Automation", purpose: "Browser automation agent that scrapes data, fills forms, and automates repetitive web workflows.", link: "https://www.bardeen.ai", freeTier: "Free", freePeriod: "Free core automations" },
  { name: "Relevance AI", category: "cross", domain: "AI Agents & Automation", purpose: "Build and deploy custom AI agents for sales, research, and operations without coding.", link: "https://relevanceai.com", freeTier: "Free", freePeriod: "Free tier" },

  // — Design & Visual (Cross) —
  { name: "Runway ML", category: "cross", domain: "Video & Animation", purpose: "AI video generation, background removal, and cinematic effects. Used by professional filmmakers.", link: "https://runwayml.com", freeTier: "Free", freePeriod: "125 credits" },
  { name: "Leonardo AI", category: "cross", domain: "Design", purpose: "Generate high-quality AI images for marketing, games, and creative projects. 150 free images/day.", link: "https://leonardo.ai", freeTier: "Free", freePeriod: "150 tokens/day" },
  { name: "CapCut AI", category: "cross", domain: "Video & Animation", purpose: "Edit videos with AI auto-captions, background removal, smart transitions, and voice effects.", link: "https://capcut.com", freeTier: "Free", freePeriod: "Core features free" },
  { name: "Adobe Firefly", category: "cross", domain: "Design", purpose: "Generate AI images, text effects, and vector graphics inside Adobe Creative Cloud or browser.", link: "https://firefly.adobe.com", freeTier: "Free", freePeriod: "25 credits/month" },
  { name: "Midjourney (Free Tier)", category: "cross", domain: "Design", purpose: "World-class AI image generation via Discord. Creates stunning photorealistic and artistic images.", link: "https://midjourney.com", freeTier: "Free", freePeriod: "25 image generations" },

  // — Communication & Language —
  { name: "Grammarly Business", category: "cross", domain: "Communication", purpose: "Real-time AI writing assistant for grammar, tone, clarity, and brand voice consistency.", link: "https://grammarly.com", freeTier: "Free", freePeriod: "Basic unlimited" },
  { name: "Murf AI", category: "cross", domain: "Voice & Speech", purpose: "Convert text to studio-quality voiceovers in 120+ voices and 20 languages for any presentation.", link: "https://murf.ai", freeTier: "Free", freePeriod: "10 mins/month" },
  { name: "Speak AI", category: "cross", domain: "Voice & Speech", purpose: "Record, transcribe, translate, and analyze audio and video with AI sentiment and theme extraction.", link: "https://speakai.co", freeTier: "Free", freePeriod: "Trial available" },

  // — Learning & Upskilling (Cross) —
  { name: "Coursera AI Courses", category: "cross", domain: "Learning & Education", purpose: "Audit thousands of AI, data, and tech courses from Google, IBM, Stanford for free.", link: "https://coursera.org", freeTier: "Free", freePeriod: "Audit mode free" },
  { name: "Google AI Essentials", category: "cross", domain: "Learning & Education", purpose: "Free Google-certified AI fundamentals course covering prompting, ethics, and workplace AI use.", link: "https://grow.google", freeTier: "Free", freePeriod: "Fully free" },
  { name: "LinkedIn Learning AI", category: "cross", domain: "Learning & Education", purpose: "AI-curated learning paths for upskilling. Recommends courses based on your career goals.", link: "https://linkedin.com/learning", freeTier: "Free", freePeriod: "1 month free" },

  // — Extra Tech: Monitoring, Infra, API —
  { name: "Grafana Cloud (Free)", category: "tech", domain: "Monitoring & Observability", purpose: "Monitor app metrics, logs, and traces with AI anomaly detection and alerting dashboards.", link: "https://grafana.com/products/cloud", freeTier: "Free", freePeriod: "Free forever tier" },
  { name: "Weights & Biases", category: "tech", domain: "Data Science & ML", purpose: "Track ML experiments, visualize training runs, and collaborate on model development.", link: "https://wandb.ai", freeTier: "Free", freePeriod: "Unlimited personal" },
  { name: "Supabase AI", category: "tech", domain: "Database & SQL", purpose: "Open-source Firebase alternative with built-in vector search, AI SQL editor, and real-time DB.", link: "https://supabase.com", freeTier: "Free", freePeriod: "2 free projects" },
  { name: "Windsurf (Codeium)", category: "tech", domain: "Coding / Development", purpose: "Agentic AI IDE that understands your full project context and executes multi-file code changes.", link: "https://codeium.com/windsurf", freeTier: "Free", freePeriod: "Free tier" },

  // — Extra Non-Tech: Sales, Data Analytics —
  { name: "HubSpot AI (CRM)", category: "nontech", domain: "Business Administration", purpose: "AI-powered CRM for sales pipelines, email sequences, meeting scheduling, and contact scoring.", link: "https://hubspot.com", freeTier: "Free", freePeriod: "Free forever CRM" },
  { name: "Tableau Public (AI)", category: "nontech", domain: "Financial Planning", purpose: "Create free interactive data visualizations and dashboards from spreadsheets. AI-suggested charts.", link: "https://public.tableau.com", freeTier: "Free", freePeriod: "Fully free public" },
  { name: "Riverside FM (AI)", category: "nontech", domain: "Communication", purpose: "Record studio-quality podcasts and interviews with AI transcription, clips, and editing tools.", link: "https://riverside.fm", freeTier: "Free", freePeriod: "2 hrs recording" },
  { name: "Descript", category: "nontech", domain: "Video & Animation", purpose: "Edit videos by editing the transcript text. AI removes filler words, adds captions, and overdubs voice.", link: "https://descript.com", freeTier: "Free", freePeriod: "1 hr transcription" },

  // — Extra Cross: Email, Health, Finance —
  { name: "Spark Mail AI", category: "cross", domain: "Daily Activities", purpose: "AI email app that prioritizes inbox, drafts smart replies, and summarizes long email threads.", link: "https://sparkmailapp.com", freeTier: "Free", freePeriod: "Free personal plan" },
  { name: "Clockify AI", category: "cross", domain: "Productivity", purpose: "Free time tracking tool with AI-powered project time insights and productivity reports.", link: "https://clockify.me", freeTier: "Free", freePeriod: "Unlimited free" },
  { name: "Poe (Quora AI)", category: "cross", domain: "AI Assistant", purpose: "Access ChatGPT, Claude, Gemini, Llama, and 100+ AI models in one app. Compare outputs side by side.", link: "https://poe.com", freeTier: "Free", freePeriod: "Daily limits per model" },
  { name: "MyFitnessPal AI", category: "cross", domain: "Mindfulness & Wellness", purpose: "AI-powered nutrition and fitness tracker with meal logging, macro analysis, and health insights.", link: "https://myfitnesspal.com", freeTier: "Free", freePeriod: "Core features free" },
  { name: "Hemingway Editor AI", category: "cross", domain: "Research & Writing", purpose: "AI highlights hard sentences, passive voice, and weak words to make your writing bold and clear.", link: "https://hemingwayapp.com", freeTier: "Free", freePeriod: "Web version free" },
  { name: "Luma AI", category: "cross", domain: "Design", purpose: "Capture 3D scenes with your phone camera and generate NeRF-based 3D models or videos.", link: "https://lumalabs.ai", freeTier: "Free", freePeriod: "Limited captures" }

];

// ========== GLOBAL STATE ==========
let currentCategory = "all";
let searchTerm = "";
let currentPage = 1;
let pageSize = 25;
// cost filter replaces freeTier filter; domain filter removed from column
let activeFilters = { name: new Set(), category: new Set(), cost: new Set() };
let currentFilterColumn = null;
let currentFilterOptions = [];

// ========== COST LABEL LOGIC ==========
// "Free"       → completely free, no cap
// "Restricted" → trial / limited / capped
function getCostLabel(freeTier, freePeriod) {
  const t = (freeTier || '').toLowerCase().trim();
  const p = (freePeriod || '').toLowerCase().trim();
  // Fully free signals
  if (t === 'free' && (
    p === 'unlimited' ||
    p === 'open source' ||
    p === 'fully free personal' ||
    p === 'fully free self-hosted' ||
    p === 'fully free' ||
    p === 'free forever' ||
    p === 'free forever plan' ||
    p === 'free core features' ||
    p === 'core free forever' ||
    p === 'free to use' ||
    p === 'basic exercises free' ||
    p === 'core features free' ||
    p === 'audit mode free' ||
    p === 'beta unlimited' ||
    p === 'free personal plan' ||
    p === 'free plan' ||
    p === 'free forever tier' ||
    p === 'unlimited free' ||
    p === 'free for individuals' ||
    p === 'free for open source' ||
    p === 'free for public repos' ||
    p === 'community edition free' ||
    p === 'free tier available' ||
    p === 'free for students' ||
    p === 'unlimited personal'
  )) {
    return 'Free';
  }
  // Default: anything else is Restricted
  return 'Restricted';
}

function getCostBadgeHtml(freeTier, freePeriod) {
  const label = getCostLabel(freeTier, freePeriod);
  const cls = label === 'Free' ? 'cost-free' : 'cost-restricted';
  return `<span class="cost-badge ${cls}">${label}</span>`;
}

// ========== HELPER FUNCTIONS ==========
function getCategoryBadge(category) {
  if (category === 'student') return '<span class="cat-badge cat-student">🎓 Student</span>';
  if (category === 'tech')    return '<span class="cat-badge cat-tech">⚙️ Tech Pro</span>';
  if (category === 'nontech') return '<span class="cat-badge cat-nontech">🎨 Non-Tech Pro</span>';
  return '<span class="cat-badge cat-cross">🔄 Cross-Functional</span>';
}

function getDomainClass(domain) {
  const d = domain.toLowerCase();
  if (d.includes('coding') || d.includes('development')) return 'domain-coding';
  if (d.includes('ui/ux') || d.includes('ui /'))         return 'domain-uiux';
  if (d.includes('agent') || d.includes('automation'))   return 'domain-agents';
  if (d.includes('deployment') || d.includes('devops'))  return 'domain-deployment';
  if (d.includes('communication'))                        return 'domain-translation';
  if (d.includes('productivity') || d.includes('project management') ||
      d.includes('file management') || d.includes('daily activities')) return 'domain-productivity';
  if (d.includes('research') || d.includes('writing'))   return 'domain-research';
  if (d.includes('creativity') || d.includes('marketing') || d.includes('content')) return 'domain-creativity';
  if (d.includes('voice') || d.includes('speech'))       return 'domain-voice';
  if (d.includes('video') || d.includes('animation'))    return 'domain-video';
  if (d.includes('learning') || d.includes('education')) return 'domain-learning';
  if (d.includes('design'))                               return 'domain-design';
  if (d.includes('fun') || d.includes('experimental'))   return 'domain-fun';
  if (d.includes('database') || d.includes('sql'))       return 'domain-coding';
  if (d.includes('testing') || d.includes('security') || d.includes('monitoring')) return 'domain-uiux';
  if (d.includes('data science') || d.includes('ml'))    return 'domain-research';
  if (d.includes('financial') || d.includes('finance'))  return 'domain-productivity';
  if (d.includes('hr') || d.includes('talent'))          return 'domain-communication';
  if (d.includes('legal'))                                return 'domain-research';
  if (d.includes('business'))                             return 'domain-productivity';
  if (d.includes('mindfulness') || d.includes('wellness')) return 'domain-fun';
  if (d.includes('assistant'))                            return 'domain-productivity';
  if (d.includes('technical doc') || d.includes('requirements')) return 'domain-research';
  return 'domain-productivity';
}

// ========== FILTERING ==========
function getFilteredTools() {
  return toolsDataset.filter(tool => {
    if (currentCategory !== 'all' && tool.category !== currentCategory) return false;
    if (searchTerm &&
        !tool.name.toLowerCase().includes(searchTerm) &&
        !tool.domain.toLowerCase().includes(searchTerm) &&
        !tool.purpose.toLowerCase().includes(searchTerm)) return false;
    if (activeFilters.name.size > 0     && !activeFilters.name.has(tool.name)) return false;
    if (activeFilters.category.size > 0 && !activeFilters.category.has(tool.category)) return false;
    if (activeFilters.cost.size > 0) {
      const label = getCostLabel(tool.freeTier, tool.freePeriod);
      if (!activeFilters.cost.has(label)) return false;
    }
    return true;
  });
}

// ========== RENDER TABLE ==========
function renderTable() {
  const filtered = getFilteredTools();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  if (currentPage > totalPages) currentPage = totalPages;
  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const tbody = document.getElementById("tableBody");
  if (pageItems.length === 0) {
    tbody.innerHTML = "";
    document.getElementById("noResults").style.display = "block";
    document.getElementById("resultCount").textContent = "Showing 0 tools";
    document.getElementById("pageInfo").textContent = "Page 0 of 0";
    return;
  }
  document.getElementById("noResults").style.display = "none";

  let html = "";
  pageItems.forEach((tool, idx) => {
    html += `<tr>
      <td>${start + idx + 1}</td>
      <td><div class="tool-name">${tool.name}</div></td>
      <td>${getCategoryBadge(tool.category)}</td>
      <td><span class="domain-tag ${getDomainClass(tool.domain)}">${tool.domain}</span></td>
      <td><div class="purpose-text">${tool.purpose}</div></td>
      <td><a href="${tool.link}" target="_blank" class="tool-link">${tool.link.replace(/^https?:\/\//, '')} ↗</a></td>
      <td>${getCostBadgeHtml(tool.freeTier, tool.freePeriod)}</td>
      <td><span class="period-text">${tool.freePeriod}</span></td>
    </tr>`;
  });
  tbody.innerHTML = html;
  document.getElementById("resultCount").textContent =
    `Showing ${start + 1}–${start + pageItems.length} of ${totalItems} tools`;
  document.getElementById("pageInfo").textContent = `Page ${currentPage} of ${totalPages}`;
  window.totalPages = totalPages;
}

// ========== PAGINATION ==========
function goToPage(page)   { currentPage = Math.max(1, Math.min(page, window.totalPages || 1)); renderTable(); }
function previousPage()   { if (currentPage > 1) { currentPage--; renderTable(); } }
function nextPage()       { if (currentPage < (window.totalPages || 1)) { currentPage++; renderTable(); } }
function changePageSize() { pageSize = parseInt(document.getElementById("pageSizeSelect").value); currentPage = 1; renderTable(); }

// ========== INLINE FILTER DROPDOWN ==========
/*
  The dropdown (#filterDropdown) lives inside .table-container (position:relative).
  We position it using the <th> element's offset relative to the table container,
  so it opens directly below the column header — just like an Excel filter.
*/
function showFilterDropdown(event, column) {
  event.stopPropagation();

  // If clicking the same column again → toggle close
  if (currentFilterColumn === column && document.getElementById("filterDropdown").style.display !== "none") {
    closeFilterDropdown();
    return;
  }

  currentFilterColumn = column;

  // Build unique options for this column
  const allTools = getFilteredTools();
  const uniqueValues = new Set();
  allTools.forEach(t => {
    if (column === 'name')     uniqueValues.add(t.name);
    if (column === 'category') {
      const labels = { student: '🎓 Student', tech: '⚙️ Tech Pro', nontech: '🎨 Non-Tech Pro', cross: '🔄 Cross-Functional' };
      uniqueValues.add(labels[t.category] || t.category);
    }
    if (column === 'cost') uniqueValues.add(getCostLabel(t.freeTier, t.freePeriod));
  });
  currentFilterOptions = Array.from(uniqueValues).sort();

  // Update title and render options
  const colLabels = { name: 'Tool Name', category: 'Category', cost: 'Cost' };
  document.getElementById("filterTitle").textContent = `Filter by ${colLabels[column] || column}`;
  document.getElementById("filterSearch").value = "";
  renderFilterOptions();

  // --- Anchor dropdown below the clicked <th> ---
  const thEl = event.target.closest('th');       // the <th> containing the ▼ icon
  const container = document.querySelector('.table-container');
  const dropdown  = document.getElementById("filterDropdown");

  const thRect        = thEl.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // top = bottom edge of the thead row (thRect.bottom) relative to container top
  const topOffset  = thRect.bottom - containerRect.top + container.scrollTop;
  // left = left edge of <th> relative to container, clamped so it doesn't go off right edge
  const rawLeft    = thRect.left - containerRect.left + container.scrollLeft;
  const maxLeft    = container.offsetWidth - 245;   // 245 ≈ dropdown width + margin
  const leftOffset = Math.max(0, Math.min(rawLeft, maxLeft));

  dropdown.style.top     = `${topOffset}px`;
  dropdown.style.left    = `${leftOffset}px`;
  dropdown.style.display = "block";

  // Mark the icon as active
  document.querySelectorAll('.filter-icon').forEach(el => el.classList.remove('active-filter'));
  event.target.classList.add('active-filter');

  // Close when clicking outside
  setTimeout(() => document.addEventListener("click", closeOnClickOutside), 80);
}

function renderFilterOptions() {
  const container   = document.getElementById("filterOptionsList");
  const searchVal   = document.getElementById("filterSearch").value.toLowerCase();
  const filtered    = currentFilterOptions.filter(o => o.toLowerCase().includes(searchVal));
  const selected    = activeFilters[currentFilterColumn] || new Set();

  container.innerHTML = filtered.map(opt => {
    const safeOpt = opt.replace(/'/g, "\\'");
    return `<div class="filter-option" onclick="toggleFilterOption('${safeOpt}')">
      <input type="checkbox" ${selected.has(opt) ? 'checked' : ''} onclick="event.stopPropagation()">
      <label>${opt}</label>
    </div>`;
  }).join('');
}

function toggleFilterOption(value) {
  if (!activeFilters[currentFilterColumn]) activeFilters[currentFilterColumn] = new Set();
  if (activeFilters[currentFilterColumn].has(value)) activeFilters[currentFilterColumn].delete(value);
  else activeFilters[currentFilterColumn].add(value);
  renderFilterOptions();
}

function selectAllFilters()        { activeFilters[currentFilterColumn] = new Set(currentFilterOptions); renderFilterOptions(); }
function clearAllFiltersDropdown() { activeFilters[currentFilterColumn] = new Set(); renderFilterOptions(); }

function applyFilter() {
  // For category column: map display labels back to internal keys
  if (currentFilterColumn === 'category') {
    const labelToKey = { '🎓 Student': 'student', '⚙️ Tech Pro': 'tech', '🎨 Non-Tech Pro': 'nontech', '🔄 Cross-Functional': 'cross' };
    const mapped = new Set();
    (activeFilters.category || new Set()).forEach(label => {
      if (labelToKey[label]) mapped.add(labelToKey[label]);
    });
    activeFilters.category = mapped;
  }
  closeFilterDropdown();
  currentPage = 1;
  renderTable();
}

function closeFilterDropdown() {
  const dd = document.getElementById("filterDropdown");
  if (dd) dd.style.display = "none";
  document.querySelectorAll('.filter-icon').forEach(el => el.classList.remove('active-filter'));
  currentFilterColumn = null;
  document.removeEventListener("click", closeOnClickOutside);
}

function closeOnClickOutside(e) {
  const dd = document.getElementById("filterDropdown");
  if (dd && !dd.contains(e.target) && !e.target.classList.contains("filter-icon")) {
    closeFilterDropdown();
  }
}

function filterDropdownList() { renderFilterOptions(); }

// ========== CATEGORY BUTTONS ==========
function setCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  currentPage = 1;
  renderTable();
}

function onSearchInput() {
  searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();
  currentPage = 1;
  renderTable();
}

function clearAllFilters() {
  currentCategory = "all";
  searchTerm = "";
  activeFilters = { name: new Set(), category: new Set(), cost: new Set() };
  document.getElementById("searchInput").value = "";
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('.filter-btn[data-cat="all"]');
  if (allBtn) allBtn.classList.add('active');
  currentPage = 1;
  closeFilterDropdown();
  renderTable();
}

// ========== SCROLL LOGO FUNCTIONALITY ==========
// Show/hide logo in toolbar when scrolling past hero section
(function initScrollLogo() {
  const toolbar = document.getElementById('toolbar');
  const toolbarLogo = document.getElementById('toolbarLogo');
  const heroSection = document.getElementById('heroSection');
  
  if (!toolbar || !toolbarLogo || !heroSection) return;
  
  function checkScroll() {
    const heroBottom = heroSection.offsetHeight;
    const scrollY = window.scrollY;
    
    if (scrollY > heroBottom - 80) {
      toolbarLogo.style.display = 'flex';
      toolbar.classList.add('scrolled');
    } else {
      toolbarLogo.style.display = 'none';
      toolbar.classList.remove('scrolled');
    }
  }
  
  // Initial check
  checkScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);
})();


// ========== INIT ==========
document.addEventListener('DOMContentLoaded', renderTable);
