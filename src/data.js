export const GH = "https://github.com/Arslan-SoftwareEngineer";
export const LI = "https://linkedin.com/in/muhammad-arslan-jaffer";
export const EMAIL = "ars3lan.se@gmail.com";
export const roles = ["Deep Learning Engineer", "LLM & RAG Developer", "Agentic AI Builder", "Full-Stack & Mobile Developer"];
export const bio = "I'm a BSc Software Engineering student at Air University, Islamabad, focused on applied Deep Learning, LLM integration and agentic workflows. I like taking an idea all the way from a trained model to something people can use: the data pipeline, the API and the app on top.";
export const passion = "I love coding and building inventive products. AI is the field I want to go deepest in, and I'm happiest when a model, a pipeline and an interface come together into something that works for real people.";
export const goals = [
  ["Become a successful programmer", "Keep building, shipping and learning until the work speaks for itself."],
  ["Found an innovative tech company", "Turn inventive product ideas into real companies, starting with AI."],
  ["Go deep in AI", "Complete Parwarish.ai and build real expertise across the AI world."]
];
export const pillars = [
  ["Deep Learning", "PyTorch and TensorFlow models, from data preprocessing and evaluation to optimization for production readiness."],
  ["LLMs & RAG", "Retrieval pipelines on vector databases such as Pinecone, Groq inference and prompt engineering."],
  ["Agentic workflows", "Python agents orchestrated through n8n pipelines and connected to real applications."],
  ["Full-stack & mobile", "Flutter, React, Next.js, Node.js and MongoDB for the product built around the model."]
];
export const stats = [[3, "Internships"], [1, "Publication"], [6, "Projects"], [2, "Leadership roles"]];
export const services = [
  ["AI & deep learning", "Model development, evaluation and optimization with PyTorch and TensorFlow."],
  ["LLM & RAG apps", "Assistants and chatbots grounded in your data, using vector databases and Groq."],
  ["Agentic workflows", "Python agents and n8n automations that connect your tools and apps."],
  ["Mobile & full-stack apps", "Flutter, React and Node.js products with databases and role-based access."]
];
/* Add problem, approach and results (strings) to any project and a section appears on its case-study page. */
export const projects = [
  { slug: "parwarish-ai", name: "Parwarish.ai", tag: "Final Year Project", cat: ["AI & ML", "Mobile"],
    title: "AI-powered, multilingual autism support platform",
    short: "Three connected portals for children, parents and clinical professionals, with Urdu localization and offline functionality.",
    overview: "Built for families in Pakistan. Three connected portals bring children, parents and clinical professionals into one system, with Urdu localization and offline functionality so it stays usable when connectivity is limited.",
    stack: ["Flutter", "Dart", "React", "Firebase", "TensorFlow Lite", "XLM-RoBERTa", "Python", "PyTorch", "Whisper STT", "FastAPI"],
    facts: [["Portals", "Children, parents, clinical professionals"], ["Language", "Multilingual, with Urdu localization"], ["Access", "Offline functionality"], ["AI", "Custom agents, speech and language models"], ["Team", "Three-person team"]],
    repo: GH + "/Parwarish-ai" },
  { slug: "ezitech-rag-churn-hub", name: "Ezitech RAG & Churn Hub", tag: "Deployed on Streamlit", cat: ["AI & ML"],
    title: "Enterprise RAG pipeline with churn prediction",
    short: "RAG pipeline on a Pinecone vector database, plus XGBoost churn prediction with interactive dashboards.",
    overview: "An enterprise retrieval-augmented generation pipeline on a Pinecone vector database, combined with XGBoost customer churn prediction and interactive Streamlit dashboards.",
    stack: ["Streamlit", "Pinecone", "LangChain", "XGBoost", "Python", "Pandas"], repo: GH, demo: "https://share.streamlit.io/ars3lan-se/ezitech-rag-hub" },
  { slug: "buddie-ai", name: "Buddie AI Voice Assistant", tag: "Deployed on Vercel", cat: ["AI & ML", "Full-stack"],
    title: "Voice-driven AI assistant",
    short: "Voice assistant using Groq inference, Whisper speech-to-text and Edge-TTS for fast spoken replies.",
    overview: "A full-stack voice-driven AI assistant powered by Groq inference, Whisper speech-to-text and Edge-TTS for fast speech interactions.",
    stack: ["Flask", "Python", "Groq API", "Whisper STT", "Edge-TTS", "Vercel"], repo: GH, demo: "https://buddie-ai.vercel.app" },
  { slug: "agentic-ai-workflow", name: "Agentic AI Workflow", tag: "Flutter + Python + n8n", cat: ["AI & ML", "Mobile"],
    title: "Agent pipelines behind a mobile app",
    short: "Flutter front end connected to Python agents orchestrated through n8n pipelines.",
    overview: "A full-stack solution connecting a Flutter front end to Python agents orchestrated through n8n automated pipelines.",
    stack: ["Flutter", "Dart", "Python", "n8n", "Groq", "REST API"], repo: GH },
  { slug: "safec", name: "Safec Emergency Guidance", tag: "Sensors + mobile", cat: ["Mobile"],
    title: "Emergency guidance mobile tool",
    short: "Mobile emergency guidance using real-time sensors, camera and voice input.",
    overview: "An emergency guidance mobile tool using real-time sensor integration, camera and voice input.",
    stack: ["Python", "OpenCV", "Socket.io", "GPS API"], repo: GH },
  { slug: "medportal", name: "MedPortal Health App", tag: "MERN stack", cat: ["Full-stack"],
    title: "Role-based health application",
    short: "MERN-stack platform with distinct access for patients, doctors and admins.",
    overview: "A MERN-stack health platform with distinct role-based access for patients, doctors and admins.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"], repo: GH }
];
export const experience = [
  { role: "Deep Learning Intern", org: "Ezitech Institute", when: "Aug 2026 to present", place: "Rawalpindi", now: true, text: "Developing and evaluating applied deep learning architectures and NLP pipelines, optimizing data preprocessing and model performance for production readiness." },
  { role: "Machine Learning Intern", org: "Ezitech Institute", when: "Aug 2025 to Sep 2025", place: "Rawalpindi", text: "Ran data pre-processing, model evaluation and optimization pipelines in Python and TensorFlow." },
  { role: "Technical Intern", org: "Acro Weaving and Spinning Mills", when: "Dec 2024 to Jan 2025", place: "Lahore", text: "Managed corporate database systems in the IT department for accurate, efficient record-keeping." },
  { role: "President", org: "Air University Animal Welfare Society", when: "Leadership", text: "Organized large community events such as Pet Fest '26, coordinated rescue operations and managed core society initiatives." },
  { role: "Graphics Team Lead", org: "Google Developer Groups on Campus", when: "Leadership", text: "Directed visual branding and designed marketing for AI-themed campaigns including Beyond Prompting, Build with AI, AI Seekho, Code Air 3.0 and Code Air 4.0." }
];
export const skills = {
  "Languages & frameworks": ["Python", "C++", "C#", "Dart (Flutter)", "JavaScript", "React", "Next.js", "Node.js", "Express.js"],
  "AI & deep learning": ["PyTorch", "TensorFlow", "LLMs", "RAG pipelines", "Pinecone", "Groq", "Prompt engineering"],
  "Tools & automation": ["Git/GitHub", "Docker", "Linux", "n8n", "Streamlit"],
  "Databases": ["MongoDB", "MySQL", "Oracle"],
  "Engineering practice": ["Requirements engineering", "Architecture & design", "Quality engineering", "Project management", "HCI"]
};
export const soft = ["Creative problem solving", "Team collaboration", "Adaptability & self-learning", "Systems thinking & workflow optimization"];
export const edu = [
  ["BSc Software Engineering", "Air University, Islamabad", "2023 to present"],
  ["FSc Pre-Engineering", "Army Public School & College System, Rawalpindi", "2021 to 2023"],
  ["Matric (ICS)", "Army Public School & College System, Rawalpindi", "2019 to 2021"]
];
export const pub = { event: "IBCAST 2026", title: "A Comparative Evaluation of Large Language Models for Accessibility Barrier Detection in Video Game Reviews", authors: "K. Batool, F. Gillani and M. A. Jaffer", where: "International Bhurban Conference on Applied Sciences and Technologies" };
