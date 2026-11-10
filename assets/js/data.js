/**
 * Portfolio Data Configuration
 * Update this file to customize your personal details, projects, skills, and experience.
 */

const portfolioData = {
  profile: {
    name: "Burhan",
    shortName: "Burhan",
    role: "Senior Full-Stack Engineer & Product Architect",
    badge: "Available for new opportunities",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    location: "Jakarta, Indonesia & Remote Worldwide",
    email: "burhan.dev@example.com",
    bio: "Passionate about building resilient distributed systems, intuitive user interfaces, and generative AI tools that empower developers and end-users alike.",
    resumeUrl: "#resume",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:burhan.dev@example.com"
    },
    stats: [
      { label: "Years of Experience", value: "6+" },
      { label: "Production Apps Built", value: "24+" },
      { label: "Open Source Stars", value: "14K+" },
      { label: "Users Impacted", value: "1.5M+" }
    ]
  },

  skills: {
    frontend: [
      { name: "TypeScript", level: "Expert", icon: "code-2" },
      { name: "React / Next.js 15", level: "Expert", icon: "layers" },
      { name: "Tailwind CSS", level: "Expert", icon: "palette" },
      { name: "Vue.js / Nuxt", level: "Proficient", icon: "component" },
      { name: "Three.js / WebGL", level: "Intermediate", icon: "box" },
      { name: "State (Zustand/Redux)", level: "Expert", icon: "cpu" }
    ],
    backend: [
      { name: "Node.js / Express", level: "Expert", icon: "server" },
      { name: "Python / FastAPI", level: "Expert", icon: "terminal" },
      { name: "Go (Golang)", level: "Proficient", icon: "zap" },
      { name: "PostgreSQL / Prisma", level: "Expert", icon: "database" },
      { name: "Redis / Kafka", level: "Proficient", icon: "activity" },
      { name: "GraphQL & REST", level: "Expert", icon: "share-2" }
    ],
    cloudAi: [
      { name: "Docker & Kubernetes", level: "Proficient", icon: "container" },
      { name: "AWS (Lambda, S3, ECS)", level: "Proficient", icon: "cloud" },
      { name: "LLM APIs & LangChain", level: "Expert", icon: "sparkles" },
      { name: "Vector DBs (Pinecone, Qdrant)", level: "Proficient", icon: "search" },
      { name: "CI/CD (GitHub Actions)", level: "Expert", icon: "git-merge" },
      { name: "Terraform / IaC", level: "Intermediate", icon: "shield" }
    ]
  },

  projects: [
    {
      id: "aether-flow",
      title: "AetherFlow - AI Workflow Orchestrator",
      category: "ai",
      featured: true,
      description: "Autonomous node-based visual workflow builder connecting LLMs, REST webhooks, and third-party SaaS integrations with real-time telemetry.",
      extendedDescription: "AetherFlow empowers teams to build complex multi-agent LLM reasoning pipelines via an intuitive drag-and-drop canvas. It features live step-by-step execution graphs, distributed queue workers, and automatic fallback retries for high reliability.",
      metrics: "50k+ daily executions • 99.98% uptime",
      tags: ["TypeScript", "Next.js 14", "FastAPI", "OpenAI", "PostgreSQL", "Redis"],
      demoUrl: "https://example.com/demo/aetherflow",
      githubUrl: "https://github.com/example/aether-flow",
      image: "assets/images/project-aetherflow.svg",
      highlights: [
        "Interactive node graph canvas with sub-16ms render times using HTML5 Canvas & WebGL",
        "Asynchronous task queue powered by BullMQ & Redis handling spike traffic",
        "Zero-latency streaming responses with WebSockets and Server-Sent Events",
        "Granular team access control (RBAC) and enterprise audit logging"
      ]
    },
    {
      id: "hyperion-ui",
      title: "Hyperion Design System & Components",
      category: "frontend",
      featured: true,
      description: "An accessible, themeable React component system built with Radix primitives, Tailwind CSS, and Storybook documentation.",
      extendedDescription: "A complete design library designed for enterprise SaaS products. Includes 50+ fully accessible primitives compliant with WCAG 2.1 AA standards, keyboard navigation, fluid typography tokens, and automatic dark mode synchronization.",
      metrics: "12.4k GitHub Stars • 85k monthly npm downloads",
      tags: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Framer Motion"],
      demoUrl: "https://example.com/demo/hyperion",
      githubUrl: "https://github.com/example/hyperion-ui",
      image: "assets/images/project-hyperion.svg",
      highlights: [
        "Fully keyboard navigable & ARIA compliant component collection",
        "Zero CSS bundle bloat using automated Tailwind JIT token purging",
        "Interactive playground with live property controls and code export",
        "Adopted across 18 production applications with unified tokens"
      ]
    },
    {
      id: "nebula-metrics",
      title: "Nebula - Real-Time Telemetry Dashboard",
      category: "fullstack",
      featured: true,
      description: "High-throughput cloud monitoring platform visualizing distributed microservice logs, traces, and metrics with sub-second queries.",
      extendedDescription: "Nebula ingests high-volume OpenTelemetry logs and system metrics. Engineered to query billions of rows in milliseconds using ClickHouse and Go streaming services, rendering responsive charts through custom WebGL visualizations.",
      metrics: "Sub-10ms query latency • 100M+ ingested records/day",
      tags: ["Go", "ClickHouse", "WebSockets", "React", "ECharts", "Docker"],
      demoUrl: "https://example.com/demo/nebula",
      githubUrl: "https://github.com/example/nebula-metrics",
      image: "assets/images/project-nebula.svg",
      highlights: [
        "Go ingestion pipeline handling 35,000 requests/sec with minimal memory footprint",
        "ClickHouse column-oriented database architecture for instant aggregation",
        "Interactive canvas timeline with smooth zoom, pan, and real-time live tailing",
        "Configurable alerting policies via Slack, PagerDuty, and webhooks"
      ]
    },
    {
      id: "devcanvas-studio",
      title: "DevCanvas - Collaborative Graphics Studio",
      category: "frontend",
      featured: false,
      description: "In-browser vector graphic and diagramming suite with multiplayer editing, infinite canvas, and automated code-to-diagram generation.",
      extendedDescription: "DevCanvas combines vector precision with real-time collaborative editing. Powered by WebAssembly and Rust for mathematical geometric computations, and WebRTC peer-to-peer data channels for lag-free cursor sharing.",
      metrics: "60 FPS rendering • 15k+ active monthly designers",
      tags: ["Rust / Wasm", "TypeScript", "WebRTC", "Canvas API", "IndexedDB"],
      demoUrl: "https://example.com/demo/devcanvas",
      githubUrl: "https://github.com/example/devcanvas",
      image: "assets/images/project-devcanvas.svg",
      highlights: [
        "Rust core compiled to WebAssembly for compute-heavy path boolean operations",
        "Peer-to-peer CRDT sync algorithm ensuring conflict-free multiplayer canvases",
        "Export capabilities to SVG, PNG, PDF, and React JSX vector components",
        "Full offline support with local IndexedDB state caching"
      ]
    },
    {
      id: "kroma-mind",
      title: "KromaMind - Private Local AI Assistant",
      category: "ai",
      featured: false,
      description: "Desktop and web interface for on-device LLM inference, document RAG, and smart file search without sending data to third parties.",
      extendedDescription: "KromaMind runs local quantized models (Llama 3, Mistral, Gemma) with vector search over personal PDF and markdown notes. Designed with privacy, battery optimization, and fast semantic retrieval at its core.",
      metrics: "100% On-device privacy • 4.8★ user rating",
      tags: ["Python", "FastAPI", "SvelteKit", "Ollama", "ChromaDB", "Tauri"],
      demoUrl: "https://example.com/demo/kromamind",
      githubUrl: "https://github.com/example/kroma-mind",
      image: "assets/images/project-kromamind.svg",
      highlights: [
        "Zero cloud dependencies: runs completely air-gapped on consumer laptops",
        "Hybrid BM25 + dense vector semantic document chunking engine",
        "Modern fluid chat interface with markdown math rendering and syntax highlighting",
        "Instant system hotkey integration for global desktop search"
      ]
    },
    {
      id: "echo-stream",
      title: "EchoStream - Distributed Event Gateway",
      category: "fullstack",
      featured: false,
      description: "Lightweight, ultra-fast pub/sub messaging gateway bridging MQTT, WebSockets, and Apache Kafka for IoT and streaming devices.",
      extendedDescription: "Designed for microservice architectures requiring reliable bi-directional message dispatching. Built in Node.js and C++ native bindings with extensive benchmarks under high concurrency.",
      metrics: "250K concurrent connections • <5ms jitter",
      tags: ["Node.js", "C++ Addons", "Kafka", "MQTT", "Redis", "Prometheus"],
      demoUrl: "https://example.com/demo/echostream",
      githubUrl: "https://github.com/example/echo-stream",
      image: "assets/images/project-echostream.svg",
      highlights: [
        "Custom connection pooling and memory recycling to prevent GC pauses",
        "Bi-directional protocol transcoding between WebSockets and Kafka topics",
        "Comprehensive Prometheus metric exporter and Grafana dashboard templates"
      ]
    }
  ],

  experience: [
    {
      role: "Lead Full-Stack Engineer",
      company: "Veloce Technologies",
      period: "2023 - Present",
      location: "San Francisco, CA (Hybrid)",
      description: "Spearheaded the engineering transition from a legacy monolithic app to a modern event-driven architecture. Mentored 8 junior and mid-level engineers, and boosted system reliability to 99.99%.",
      skills: ["Next.js", "Node.js", "AWS", "FastAPI", "PostgreSQL", "Docker"]
    },
    {
      role: "Senior Frontend Engineer",
      company: "CloudMatrix Systems",
      period: "2021 - 2023",
      location: "San Francisco, CA",
      description: "Engineered high-performance real-time analytics interfaces. Reduced average dashboard load times by 54% and built the foundational design system adopted by 5 product divisions.",
      skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL", "WebSockets", "Jest"]
    },
    {
      role: "Software Engineer",
      company: "PixelForge Labs",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Built customer-facing web applications and REST APIs. Implemented payment processing pipelines, OAuth authentication flows, and automated CI/CD deployment testing.",
      skills: ["Vue.js", "JavaScript", "Python", "Flask", "MySQL", "Git"]
    }
  ],

  education: [
    {
      degree: "B.S. in Computer Science & Engineering",
      institution: "University of California, Berkeley",
      period: "2015 - 2019",
      details: "Focus in Distributed Systems & Human-Computer Interaction. Dean's Honors List."
    }
  ],

  testimonials: [
    {
      quote: "Burhan is the rare engineer who bridges rigorous backend architecture with pixel-perfect UI precision. He elevated our product's performance and design standards across the board.",
      author: "Sarah Lin",
      role: "VP of Engineering at Veloce Tech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Working with Burhan was a breeze. He consistently turns complex requirements into intuitive, blazing-fast interfaces. His dedication to clean code and documentation is unmatched.",
      author: "Marcus Vance",
      role: "Co-Founder & CEO at CloudMatrix",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Beyond exceptional technical skills, Burhan brings contagious positive energy and deep product thinking to every sprint. Any engineering team would be lucky to have him.",
      author: "Elena Rostova",
      role: "Product Lead at DesignCraft",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  ],

  articles: [
    {
      id: "scaling-websockets",
      title: "Scaling Real-Time WebSockets to 250k Concurrent Connections",
      date: "Oct 2026",
      readTime: "6 min read",
      category: "Architecture",
      snippet: "How we tuned Linux kernel epoll settings, reduced memory allocations in Node.js, and implemented distributed topic sharding with Redis clusters.",
      link: "#scaling-websockets"
    },
    {
      id: "hybrid-graphql-sse",
      title: "Why We Swapped Heavy Polling for Server-Sent Events & Next.js 15",
      date: "Aug 2026",
      readTime: "5 min read",
      category: "Frontend",
      snippet: "A deep dive into reactive UI patterns, streaming HTTP responses, and edge caching strategies that reduced our cloud bill by 42%.",
      link: "#hybrid-graphql-sse"
    },
    {
      id: "local-llm-rag",
      title: "Demystifying Local LLMs: Quantization, Vector Search, and RAG",
      date: "Jun 2026",
      readTime: "8 min read",
      category: "AI / ML",
      snippet: "A practical guide to running 4-bit quantized open-source models directly in browser and desktop apps using WebGPU and Wasm.",
      link: "#local-llm-rag"
    }
  ]
};
