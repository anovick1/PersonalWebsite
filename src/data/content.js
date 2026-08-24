// ============================================================
// All site content lives here. Edit this file to update copy.
// ============================================================

export const siteConfig = {
  name: 'Avery Novick',
  title: 'Avery Novick | AI/ML & Full-Stack Engineer',
  description:
    'Software engineer focused on AI/ML systems, including LLM workflow automation, hallucination-resistant validation, RAG, deep-learning computer vision, and production full-stack applications.',
  url: 'https://averynovick.dev',
  ogImage: '/images/og-image.png', // placeholder, add a 1200x630 image
};

export const hero = {
  name: 'Avery Novick',
  headline: 'AI/ML & Full-Stack Engineer',
  subheadline:
    'Software engineer focused on AI/ML systems, including LLM workflow automation, hallucination-resistant validation, RAG, deep-learning computer vision, and production full-stack applications.',
  location: 'Los Angeles, CA',
  profileImage: '/images/linkedinPFP.png',
  cta: {
    resume: 'https://drive.google.com/file/d/1lSQnLVRjOdRf3mmUxHoPMnJ8LTYEagoS/view?usp=sharing',
    github: 'https://github.com/anovick1',
    linkedin: 'https://www.linkedin.com/in/avery-novick/',
    email: 'averynov@yahoo.com',
  },
};

export const about = {
  paragraphs: [
    "I build AI and ML systems that move from research ideas or messy operational workflows into usable software. Recent work spans LLM workflow automation at BlackRock, medical image segmentation research, hallucination-resistant RAG, and full-stack mobile applications.",
    'My toolkit spans Python, PyTorch, MONAI, RAG and LLM evaluation, React, React Native, FastAPI, Node, and cloud/data infrastructure across AWS, Firebase, Azure, Snowflake, and SQL.',
    "I studied Computer Science and Business Administration at American University and am currently pursuing a Master's of Science in Computer Science at University of Southern California. When I'm not coding, I'm either in the gym or deep in an NBA debate (Go Warriors!).",
  ],
};

export const education = [
  {
    school: 'University of Southern California',
    degree: "Master's of Science in Computer Science",
    dates: 'Aug 2025 – Present',
    details: 'Graduate Research Assistant, Machine Learning',
  },
  {
    school: 'American University',
    degree: 'B.S. in Computer Science and Business Administration (Double Major)',
    dates: 'Aug 2017 – May 2021',
    details: 'Concentration in Entrepreneurship',
  },
  {
    school: 'General Assembly',
    degree: 'Software Engineering Immersive',
    dates: 'Jun 2022 – Sep 2022',
    details: '500+ hours of expert-led instruction in full-stack web and mobile development',
  },
];

export const skills = {
  strong: [
    'Python',
    'JavaScript/TypeScript',
    'SQL',
    'React / React Native',
    'Node.js / Express',
    'FastAPI / Flask',
    'RAG / Retrieval Systems',
    'LLM Agents & Evaluation',
    'LLM Output Validation',
    'AI Workflow Automation',
    'Agentic Workflow Development',
    'AWS (Lambda, S3, CloudFront)',
    'Firebase Auth',
    'Qdrant',
    'Docker',
    'Azure Data Factory',
    'Google ADK',
    'PyTorch',
    'Machine Learning',
    'Deep Learning',
    'Medical Image Segmentation',
    'FAISS / BM25',
    'PostgreSQL',
    'MySQL',
    'Railway',
    'Next.js',
  ],
  proficient: [
    'BigQuery',
    'Pandas / NumPy',
    'Celery',
    'Redis',
    'Django',
    'Vue',
    'Spark',
    'Snowflake',
    'Streamlit',
    'Microsoft Graph API',
    'MONAI',
    'U-Net / DynUNet',
    'SE Attention',
    '3D MRI Analysis',
    'Ollama / Local LLMs',
    'Pydantic',
    'Cross-Encoder Reranking',
    'BERTScore / NLP Evaluation',
    'MongoDB',
  ],
  familiar: ['Java', 'C', 'Qwen / Gemma', 'Android Native Modules'],
  tools: ['Codex', 'Cursor', 'Claude', 'GitHub Copilot', 'Git', 'Ollama'],
};

export const experience = [
  {
    company: 'BlackRock',
    title: 'Software Engineer Intern',
    dates: 'May 2026 – Aug 2026',
    bullets: [
      'Owned development of two new AI workflow automation implementations projected to save 16,800+ hours annually',
      'Built validation and monitoring layers to reduce LLM hallucinations and keep generated classifications grounded in source data',
      'Enhanced an existing production AI workflow system and created reusable implementation templates (Python, Snowflake, Streamlit)',
    ],
  },
  {
    company: 'University of Southern California',
    title: 'Machine Learning Graduate Research Assistant',
    dates: 'Sep 2025 – Present',
    bullets: [
      'Researching 3D MRI brain tumor segmentation, with current work focused on improving tiny lesion detection while controlling false positives (PyTorch, MONAI, DynUNet)',
    ],
  },
  {
    company: 'Pixel Health',
    title: 'Business Intelligence Developer',
    dates: 'Jan 2023 – Jul 2025',
    bullets: [
      'Led AI prompting, agent architecture, and data integrations for a patient-facing conversational AI system (Google ADK, Conversational Agent, NestJS)',
      'Designed, built, and managed nightly and hourly automated ETL pipelines for reporting',
      'Improved operational efficiency by utilizing AI to categorize IT ticket data (Azure, OpenAI)',
      'Streamlined key business processes by automating workflows with Python and SQL scripts',
    ],
  },
  {
    company: 'Cortado',
    title: 'Software Engineer, Part-Time',
    dates: 'Aug 2023 – Sep 2023',
    bullets: [
      "Built the initial full-stack prototype that became the foundation for Cortado's product and investor demos",
      'Developed an AI-driven web app to streamline tasks and workflows (Next.js, Node.js, OpenAI)',
    ],
  },
  {
    company: 'Roadpost',
    title: 'Software Developer Intern',
    dates: 'Oct 2022 – Jan 2023',
    bullets: [
      'Created, updated, and wrote API calls and tests for AWS Lambda Functions (TypeScript, Node.js)',
    ],
  },
  {
    company: 'Varjo',
    title: 'Sales Development Representative',
    dates: 'Jul 2021 – May 2022',
    bullets: [
      'Communicated complex VR/XR hardware and software specifications to clients',
    ],
  },
];

export const featuredProjects = [
  {
    title: '3D Brain Tumor Segmentation',
    oneLiner:
      'A deep learning research pipeline that segments meningioma tumors from 3D brain MRI scans.',
    tech: [
      'PyTorch',
      'MONAI',
      'DynUNet',
      '3D U-Net',
      'SE Attention',
      'CUDA',
      'Medical Imaging',
      'NumPy',
      'SciPy',
      'Matplotlib',
      'NiBabel',
    ],
    bullets: [
      'Built and evaluated attention-enhanced 3D DynUNet models for automated meningioma segmentation across four MRI sequences',
      'Built a lesion-aware training pipeline with biased patch sampling, deep supervision, EMA-smoothed checkpoints, and component-weighted loss experiments',
      'Continuing research on tiny lesion detection using targeted sampling, custom loss weighting, and multi-scale inference to balance sensitivity with false positives',
    ],
    features: [
      '4-channel MRI input (T1, T1c, T2, FLAIR)',
      'Decoder SE attention',
      'Tiny lesion optimization',
    ],
    metrics: null,
    images: [],
  },
  {
    title: 'Heads Up Medics',
    oneLiner:
      'A defense-focused field care system for TBI triage, AI-assisted medic decision support, and autonomous medical resupply in austere environments.',
    tech: [
      'React Native',
      'TypeScript',
      'Python',
      'FastAPI',
      'Qwen3',
      'Android',
      'Clinical Decision Support',
      'Drone Resupply',
    ],
    bullets: [
      'Built an offline-first Android triage app for combat medics assessing TBI risk without imaging or specialist support',
      'Ran a local Qwen3 model directly on the phone for on-device AI guidance in low-connectivity field environments',
      'Connected structured medic assessments to a FastAPI resupply engine that maps clinical rules into drone-ready medical payloads',
    ],
    features: [
      'Offline TBI triage workflow',
      'On-device Qwen3 guidance',
      'Drone resupply payload planning',
    ],
    metrics: null,
    images: [],
  },
  {
    title: 'Hallucination-Resistant Multi-Hop QA',
    oneLiner:
      'An evidence-grounded RAG pipeline for multi-hop question answering that reduces hallucinations through hybrid retrieval, reranking, citation selection, and answer verification.',
    tech: [
      'Python',
      'RAG',
      'BM25',
      'FAISS',
      'Ollama',
      'Gemma',
      'Qwen',
      'Cross-Encoder Reranking',
      'BERTScore',
      'NLI Verification',
      'HotpotQA',
    ],
    bullets: [
      'Built a zero-shot, evidence-based RAG pipeline for HotpotQA using hybrid retrieval, fuzzy title matching, reranking, citation selection, and verification',
      'Ran local inference with pretrained models through Ollama, including Gemma/Qwen generators and qwen3 embeddings, without task-specific fine-tuning',
      'Evaluated on 7,405 HotpotQA examples: 46.8% EM, 59.5% Token F1, 43.2% Joint F1, and 94.3% BERTScore F1',
    ],
    features: [
      'Hybrid BM25 + FAISS retrieval',
      'Cross-encoder reranking',
      'NLI-style verification',
    ],
    metrics: [
      {
        label: 'Exact Match',
        baseline: 'Official',
        final: '46.8%',
        delta: 'strict',
      },
      {
        label: 'Token F1',
        baseline: 'Official',
        final: '59.5%',
        delta: 'partial',
      },
      {
        label: 'Joint F1',
        baseline: 'Official',
        final: '43.2%',
        delta: 'zero-shot',
      },
      {
        label: 'BERTScore F1',
        baseline: 'Semantic',
        final: '94.3%',
        delta: '+47.5 vs EM',
      },
    ],
    images: [],
  },
  {
    title: 'Wardrobe App',
    oneLiner:
      'A mobile app that lets users digitize their wardrobe and generate user-specific AI outfit recommendations.',
    tech: [
      'React Native',
      'Flask',
      'FastAPI',
      'Qdrant',
      'OpenAI',
      'Gemini',
      'FashionCLIP',
      'PyTorch',
      'Celery',
      'Redis',
    ],
    bullets: [
      'Architected a distributed microservices system with JWT-based service auth and 55K+ Python / 380K+ JS LOC',
      'Built a multi-modal AI fashion recommendation engine: FashionCLIP embeddings + Qdrant vector search, achieving sub-second similarity searches for intelligent outfit composition',
    ],
    features: [
      'Outfit Planner (calendar-based)',
      'AI outfit generation prompt modal',
      'Wardrobe inventory browsing',
      'Outfit boards & capsules',
      'Daily outfit card',
    ],
    metrics: null,
    images: [
      // Add screenshots in /public/projects/wardrobe/
      // e.g. '/projects/wardrobe/home.png'
    ],
  },
];

export const otherProjects = [
  {
    title: 'Financial Portfolio Assistant',
    date: 'December 2025',
    description:
      'An NLP-powered system for querying personal finance data and financial documents using natural language. Combines Text-to-SQL, retrieval-augmented generation (RAG), and earnings-call sentiment analysis.',
    tech: ['Python', 'FastAPI', 'React', 'LangChain', 'OpenAI API', 'FAISS', 'NLP', 'Text-to-SQL'],
    github: 'https://github.com/ghrodri/USC-CSCI544-FINAL_PROJECT',
    deployed: null,
  },
  {
    title: 'Baseline',
    date: 'September 2022',
    description:
      "A full-stack app that lets users create and share graphs about NBA players' season statistics. Built with data from 5,024 NBA players since 1947.",
    tech: ['Vue.js', 'Django', 'PostgreSQL', 'Python', 'Pandas', 'NumPy'],
    github: 'https://github.com/anovick1/Baseline',
    deployed: 'https://baselinenovick.web.app/',
  },
  {
    title: 'Tech Tinder',
    date: 'August 2022',
    description:
      'A fully functional mock dating app designed for people in the tech industry. Mobile and desktop responsive with full CRUD functionality.',
    tech: ['React', 'PostgreSQL', 'Sequelize', 'Express.js', 'Node.js'],
    github: 'https://github.com/anovick1/Tech-Tinder-Front',
    deployed: 'https://tech-tinder-novick.web.app/',
  },
  {
    title: 'NBA Hot Takes',
    date: 'July 2022',
    description:
      'A social media application for NBA fans. Users can create posts, comment, and like, with live tweets pulled via the Twitter API.',
    tech: ['React', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js', 'Twitter API'],
    github: 'https://github.com/anovick1/NBA-HotTakes',
    deployed: null,
  },
  {
    title: 'Theme Park Review',
    date: 'July 2022',
    description:
      'A Yelp-style review site for theme parks. Built during a day-and-a-half hackathon as a full-stack MERN application.',
    tech: ['React', 'MongoDB', 'Mongoose', 'Express.js', 'Node.js'],
    github: 'https://github.com/anovick1/Theme_Park',
    deployed: null,
  },
  {
    title: 'Blackjack',
    date: 'July 2022',
    description:
      'A browser-based blackjack game built with vanilla JavaScript, HTML, and CSS.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/anovick1/Blackjack_Novick',
    deployed: 'https://averynovickblackjack.surge.sh/',
  },
  {
    title: 'Stock Price Prediction',
    date: 'May 2021',
    description:
      'A Python script that automates financial models (WACC, DCF) to predict stock prices using real-time data. Reduces 3-4 hours of analyst work to ~3 minutes.',
    tech: ['Python', 'NumPy', 'Pandas', 'Alpha Vantage API'],
    github: 'https://github.com/anovick1/Stock_AI',
    deployed: null,
  },
  {
    title: 'Covid Map',
    date: 'May 2021',
    description:
      'An interactive map of the US showing Covid testing and case statistics by state.',
    tech: ['JavaScript', 'Leaflet.js', 'Turf.js', 'P5.js', 'Disease.sh API'],
    github: 'https://github.com/anovick1/Covid-Map',
    deployed: null,
  },
];

export const contact = {
  heading: "Let's Connect",
  subheading:
    "Have a project in mind, want to collaborate, or just want to say hi? I'd love to hear from you.",
  email: 'averynov@yahoo.com',
  github: 'https://github.com/anovick1',
  linkedin: 'https://www.linkedin.com/in/avery-novick/',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
