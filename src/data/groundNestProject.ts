export interface GroundNestDownload {
  platform: string
  architecture: string
  href: string | null
}

export const groundNestProject = {
  name: 'GroundNest',
  category: 'Local AI · Desktop application',
  status: 'Preview',
  summary:
    'A desktop AI workspace for chatting with locally installed models and exploring your own documents.',
  overview:
    'Built around Ollama, GroundNest brings conversational AI, document retrieval, and organized chat history into one application.',
  knowledge:
    'Create Knowledge Bases from PDF, DOCX, TXT, and Markdown files, then ask questions grounded in those documents. Relevant passages are retrieved locally, with source citations to help trace answers back to the original content.',
  features: [
    'Chat with local Ollama models using streamed responses.',
    'Organize, search, and revisit conversations.',
    'Create document Knowledge Bases with local embeddings and vector search.',
    'Get document-grounded answers with source citations.',
    'Enable optional web search when external information is needed.',
    'Use a guided setup wizard for Ollama and the embedding model, with an option to finish setup later.',
  ],
  technologies: ['React', 'TypeScript', 'Vite', 'NestJS', 'Electron', 'SQLite', 'LanceDB', 'Ollama'],
  buildDescription:
    'Automated tests and manual GitHub Actions workflows support platform-specific desktop builds.',
  contribution:
    'I developed the frontend and backend, integrated local model inference and document retrieval, and created the desktop packaging, setup experience, tests, and build workflows.',
  statusDescription:
    'GroundNest is in preview. Internal builds are available for Apple Silicon macOS, Windows x64, and Ubuntu x64. Cross-platform installation testing and public-release preparation are ongoing.',
  privacy:
    'Local AI processing uses the user’s computer. Optional web search connects to external providers.',
  downloads: [
    { platform: 'macOS', architecture: 'Apple Silicon', href: null },
    { platform: 'Windows', architecture: 'x64', href: null },
    { platform: 'Ubuntu', architecture: 'x64', href: null },
  ] as GroundNestDownload[],
}
