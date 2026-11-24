/**
 * =============================================================================
 * OM PRAKASH SETHY — CENTRALIZED PORTFOLIO CONFIGURATION
 * =============================================================================
 * Clean, single-source-of-truth data store for all portfolio content.
 * Edit this file to update projects, skills, education, or contact details.
 */

window.PORTFOLIO_CONFIG = {
  personal: {
    fullName: "Om Prakash Sethy",
    monogram: "OPS",
    headline: "PORTFOLIO",
    roles: [
      "Software Developer",
      "Full-Stack Developer",
      "AI/ML Enthusiast",
      "Entrepreneur"
    ],
    subline: "Software Developer | Full-Stack Developer | AI/ML Enthusiast",
    tagline: "Building meaningful digital solutions through code, creativity, and innovation.",
    location: "Jajpur, Odisha, India",
    yearLabel: "2026 / Software Developer Portfolio",
    avatar: "images/hero-portrait.jpg",
    avatarFallback: "images/profile-dark.png",
    resumeUrl: "Resume/Om_Prakash_Sethy_Resume-v1.pdf",
    services: [
      "Full-Stack Development",
      ".NET Engineering",
      "AI & Computer Vision",
      "Mobile Applications"
    ],
    intro: "I craft timeless digital solutions and resilient software architectures that bridge engineering rigor with practical entrepreneurial impact.",
    socials: {
      github: "https://github.com/thecodergen",
      linkedin: "https://linkedin.com/in/omprakashsethy",
      email: "dev.somprakash@gmail.com",
      phone: "+91 8338072738"
    }
  },

  about: {
    headline: "Building Meaningful Software",
    subheadline: "Driven by curiosity, engineered with purpose.",
    location: "Jajpur, Odisha, India",
    educationSummary: "B.Tech in Computer Science and Engineering at BPUT CUPGS, Rourkela (Expected 2028)",
    paragraphs: [
      "I am a Computer Science Engineering student, software developer, and aspiring entrepreneur from Odisha, India.",
      "I enjoy building real-world software solutions, exploring emerging technologies, and solving practical problems through programming.",
      "My interests include full-stack development, .NET technologies, artificial intelligence, machine learning, mobile application development, database management, and cloud technologies.",
      "I am also interested in entrepreneurship and building technology-based products. I believe in learning by building real projects rather than limiting myself to theoretical knowledge.",
      "My long-term goal is to become a skilled software engineer and build successful technology products."
    ]
  },

  visionPillars: [
    {
      title: "Full-Stack Development",
      desc: "Architecting responsive, high-throughput digital platforms across mobile and web interfaces.",
      icon: "layers"
    },
    {
      title: ".NET & Backend",
      desc: "Designing resilient ASP.NET Core Web APIs, real-time SignalR sockets, and relational data schemas.",
      icon: "cpu"
    },
    {
      title: "AI/ML & Vision",
      desc: "Transforming raw video feeds with MediaPipe Face Mesh, OpenCV, and CNN edge analytics.",
      icon: "eye"
    },
    {
      title: "Mobile Apps",
      desc: "Engineering fluid cross-platform experiences using React Native, Expo, and offline-first workflows.",
      icon: "smartphone"
    }
  ],

  skills: {
    note: "Technologies I have learned, explored, or worked with",
    categories: [
      {
        name: "Programming Languages",
        items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"]
      },
      {
        name: "Frontend Development",
        items: ["HTML5", "CSS3", "JavaScript", "React Native", "Expo", "Next.js"]
      },
      {
        name: "Backend Development",
        items: ["ASP.NET Core", "ASP.NET Core Web API", "Node.js", "Express.js", "REST APIs", "SignalR"]
      },
      {
        name: "Database Systems",
        items: ["PostgreSQL", "SQL Server", "DBMS"]
      },
      {
        name: "AI/ML & Computer Vision",
        items: ["Python", "MediaPipe", "OpenCV", "CNN", "Computer Vision Applications"]
      },
      {
        name: "Tools & Technologies",
        items: ["Git", "GitHub", "VS Code", "Visual Studio", "Postman", "Docker", "Figma"]
      }
    ]
  },

  featuredProjects: [
    {
      id: "quickhelper",
      title: "QuickHelper",
      symbol: "QH",
      category: "Startup Project • Marketplace",
      role: "Founder, Product Developer, and Full-Stack Developer",
      shortDesc: "Technician–customer marketplace connecting clients with nearby verified professionals via GPS discovery and real-time chat.",
      technologies: ["React Native", "Expo", "TypeScript", "ASP.NET Core 9 Web API", "PostgreSQL", "Next.js", "SignalR"],
      githubUrl: "https://github.com/thecodergen",
      liveUrl: null,
      fullOverview: "QuickHelper is an on-demand technician-customer marketplace engineered to bridge the gap between skilled tradespeople and local clients. Built with a scalable micro-service mindset, it combines live geolocation tracking, instant WebSocket communication, and rigorous credential verification.",
      features: [
        "Customer and professional dedicated accounts and verification workflows",
        "Professional registration, identity validation & trade document upload",
        "Location-based professional discovery with GPS + manual map pinning",
        "Real-time bidirectional chat powered by ASP.NET Core SignalR",
        "Professional recurring subscription model and billing architecture",
        "Comprehensive administrative dashboard for monitoring service quality"
      ]
    },
    {
      id: "csjc-mining-aviator",
      title: "CSJC Mining Aviator",
      symbol: "CSJC",
      category: "Enterprise Platform • Logistics",
      role: "Software Developer",
      shortDesc: "High-throughput mining transport platform featuring truck owner apps, gate tokens, and Azure AI Vision OCR verification.",
      technologies: ["React Native", "Next.js", "ASP.NET Core Web API", "PostgreSQL", "Azure Blob Storage", "Azure AI Vision OCR"],
      githubUrl: "https://github.com/thecodergen",
      liveUrl: null,
      fullOverview: "A mission-critical transportation platform engineered specifically for the mining and mineral supply chain. Eliminates gate bottlenecks and paper falsification using automated OCR ticket verification, cloud document archives, and seamless offline synchronization for remote mining pits.",
      features: [
        "Dedicated truck owner mobile application for fleet operations",
        "Web-based administrative command centre with real-time vehicle dispatch",
        "Mining transport token generation, gate passes & weighbridge queue management",
        "Document upload & automated OCR processing via Azure AI Vision",
        "Secure cloud document archive powered by Azure Blob Storage",
        "Offline-first synchronization for remote, low-connectivity mining zones"
      ]
    },
    {
      id: "eams",
      title: "EAMS",
      subtitle: "Employee Attendance Management System",
      symbol: "EAMS",
      category: "Enterprise Software • Workforce",
      role: "Full-Stack Software Developer",
      shortDesc: "Workforce attendance and shift suite with tiered managerial approvals, WFO/WFH tracking, and compliance reports.",
      technologies: ["ASP.NET Core Web API", "PostgreSQL", "Next.js", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/thecodergen",
      liveUrl: null,
      fullOverview: "An enterprise-grade workforce management suite that automates check-ins, remote work tracking, shift assignment, and tiered managerial approvals. Designed to scale seamlessly for small to mid-market enterprises seeking transparency.",
      features: [
        "Dual role hierarchy: Employee self-service & Managerial control panels",
        "Real-time attendance logging with geofenced clock-in validation",
        "Flexible Work-From-Office (WFO) and Work-From-Home (WFH) categorization",
        "Multi-stage leave application and approval workflow",
        "Shift scheduling, overtime computations & holiday calendars",
        "Automated attendance analytics and downloadable compliance reports"
      ]
    },
    {
      id: "drowsiness-detection",
      title: "AI Driver Drowsiness Detection",
      symbol: "VISION",
      category: "Applied AI • Computer Vision",
      role: "AI/ML Developer (Internship @ CTTC)",
      shortDesc: "Real-time edge facial landmark analysis tracking Eye & Mouth Aspect Ratios to trigger instant auditory micro-sleep alerts.",
      technologies: ["Python", "MediaPipe Face Mesh", "OpenCV", "Computer Vision", "CNN"],
      githubUrl: "https://github.com/thecodergen",
      liveUrl: "certificate/Machine Learning Project.pdf",
      fullOverview: "A computer vision safety system developed during an intensive AI/ML internship at CTTC Bhubaneswar. It monitors live webcam streams to detect early indicators of driver fatigue and micro-sleeps using mathematical aspect ratios and deep neural classification.",
      features: [
        "Eye Aspect Ratio (EAR) metric computation to catch micro-sleep patterns",
        "Mouth Aspect Ratio (MAR) tracking for automated yawn frequency scoring",
        "High-precision 468-point 3D facial landmark detection via MediaPipe Face Mesh",
        "Head pose estimation to detect sudden distracted gaze or head nodding",
        "Instant low-latency acoustic audio alarm triggering upon threshold breach",
        "Optimized frame processing pipeline for lightweight edge hardware"
      ]
    }
  ],

  internship: {
    institution: "CTTC (Central Tool Room & Training Centre) Bhubaneswar",
    role: "AI / Machine Learning Intern",
    location: "Bhubaneswar, Odisha",
    projectTitle: "AI-Based Driver Drowsiness Detection System",
    dates: "Completed [Official Dates on Certificate]",
    description: "Conducted hands-on research and applied engineering in Computer Vision and Deep Learning. Focused on processing video feeds in real-time, extracting biometric facial markers, and training convolutional neural models to assess operator alertness under variable cabin illumination.",
    learnings: [
      "Mastered 468 3D facial landmark mesh extraction using Google MediaPipe in Python",
      "Calculated geometric facial ratios (EAR & MAR) using Euclidean distance formulas",
      "Engineered real-time OpenCV image transformation pipelines (grayscale, histogram equalization, thresholding)",
      "Implemented Convolutional Neural Network (CNN) architectures for facial feature classification",
      "Gained practical experience translating academic machine learning theory into responsive safety software"
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "CNN", "NumPy", "SciPy"],
    certificates: [
      { name: "Machine Learning Project Certificate", file: "certificate/Machine Learning Project.pdf" },
      { name: "Introduction to Machine Learning", file: "certificate/Intorduction To Machine Learning.pdf" }
    ]
  },

  certifications: [
    {
      id: "duke-ml-projects",
      title: "Managing Machine Learning Projects",
      issuer: "Duke University (Coursera)",
      instructor: "Jon Reifschneider (Director, MEng in AI for Product Innovation, Pratt School of Engineering)",
      date: "March 14, 2026",
      category: "AI & Machine Learning",
      categoryCode: "ai-ml",
      file: "certificate/Machine Learning Project.pdf",
      verifyUrl: "https://coursera.org/verify",
      badge: "Duke University",
      description: "Comprehensive executive-level engineering curriculum on planning, executing, and deploying end-to-end Machine Learning systems. Covers problem framing, data pipeline governance, model evaluation against business KPIs, and managing production drift."
    },
    {
      id: "duke-intro-ml",
      title: "Introduction to Machine Learning",
      issuer: "Duke University (Coursera)",
      instructor: "Genevieve M. Lipp, David Carlson & Lawrence Carin",
      date: "March 13, 2026",
      category: "AI & Machine Learning",
      categoryCode: "ai-ml",
      file: "certificate/Intorduction To Machine Learning.pdf",
      verifyUrl: "https://coursera.org/verify/7N49UUUYBLG8",
      badge: "Duke University",
      description: "Rigorous exploration of core machine learning paradigms: supervised and unsupervised algorithms, gradient descent optimization, cost function formulations, loss metrics, and cross-validation techniques."
    },
    {
      id: "hp-ai-beginners",
      title: "AI for Beginners",
      issuer: "HP LIFE (HP Foundation)",
      instructor: "HP LIFE Global Faculty",
      date: "Certified",
      category: "AI & Machine Learning",
      categoryCode: "ai-ml",
      file: "certificate/certificate (2).pdf",
      verifyUrl: null,
      badge: "HP LIFE",
      description: "Explores foundational concepts of artificial intelligence, real-world application verticals, ethical considerations, neural automation, and the impact of modern AI on modern business workflows."
    },
    {
      id: "hp-data-science",
      title: "Data Science & Analytics",
      issuer: "HP LIFE (HP Foundation)",
      instructor: "HP LIFE Global Faculty",
      date: "Certified",
      category: "AI & Machine Learning",
      categoryCode: "ai-ml",
      file: "certificate/certificate (3).pdf",
      verifyUrl: null,
      badge: "HP LIFE",
      description: "Hands-on instruction in leading data science and analytics practices, exploratory data analysis methodologies, quantitative metrics, and leveraging data-driven decision frameworks."
    },
    {
      id: "umich-python-get-started",
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan (Coursera)",
      instructor: "Charles Severance (Clinical Professor, School of Information)",
      date: "December 18, 2025",
      category: "Python & Development",
      categoryCode: "python",
      file: "certificate/Programming For Every Body.pdf",
      verifyUrl: "https://coursera.org/verify",
      badge: "Univ. of Michigan",
      description: "Foundational software engineering with Python: syntax mechanics, conditional execution, iterative loops, modular functional design, and algorithmic problem decomposition."
    },
    {
      id: "umich-python-ds",
      title: "Python Data Structures",
      issuer: "University of Michigan (Coursera)",
      instructor: "Charles Severance (Clinical Professor, School of Information)",
      date: "December 15, 2025",
      category: "Python & Development",
      categoryCode: "python",
      file: "certificate/Python DS.pdf",
      verifyUrl: "https://coursera.org/verify/0KD",
      badge: "Univ. of Michigan",
      description: "Deep dive into core procedural and computational data structures in Python: nested dictionaries, lists, tuple unpacking, text parsing, and memory-efficient data representation."
    },
    {
      id: "umich-python-web-data",
      title: "Using Python to Access Web Data",
      issuer: "University of Michigan (Coursera)",
      instructor: "Charles Severance (Clinical Professor, School of Information)",
      date: "January 3, 2026",
      category: "Python & Development",
      categoryCode: "python",
      file: "certificate/Python Acess Web Data.pdf",
      verifyUrl: "https://coursera.org/verify",
      badge: "Univ. of Michigan",
      description: "Scraping, parsing, and consuming web data using Python. Covers sockets, HTTP protocol mechanics, Beautiful Soup HTML extraction, XML data hierarchies, and JSON REST API consumption."
    },
    {
      id: "udemy-c-php",
      title: "C & PHP Programming Masterclass",
      issuer: "Udemy",
      instructor: "Udemy Certified Academy",
      date: "January 2026",
      category: "Programming & Web",
      categoryCode: "python",
      file: "certificate/c php udemy.pdf",
      verifyUrl: null,
      badge: "Udemy",
      description: "Low-level algorithmic problem solving in C (pointers, memory management, arrays) coupled with dynamic server-side web scripting and form processing using PHP."
    },
    {
      id: "cttc-core-java",
      title: "Core Java & OOP Programming",
      issuer: "CTTC (Central Tool Room & Training Centre)",
      instructor: "CTTC Bhubaneswar Faculty",
      date: "MSME Certified",
      category: "Java & Enterprise",
      categoryCode: "java",
      file: "certificate/CORE JAVA_compressed.pdf",
      verifyUrl: null,
      badge: "CTTC Govt. of India",
      description: "Government-accredited comprehensive Java programming certification. Covers OOP architecture (Inheritance, Polymorphism, Encapsulation, Abstraction), JVM internals, Exception Handling, File I/O, Multithreading, and the Java Collections Framework."
    },
    {
      id: "udemy-java",
      title: "Java Programming Specialist",
      issuer: "Udemy",
      instructor: "Udemy Professional Faculty",
      date: "January 2026",
      category: "Java & Enterprise",
      categoryCode: "java",
      file: "certificate/JAVA UDEMY.pdf",
      verifyUrl: null,
      badge: "Udemy",
      description: "Modern Java development covering object-oriented architecture, generic programming, stream APIs, lambda expressions, and scalable software application practices."
    },
    {
      id: "akamai-os",
      title: "Operating Systems Fundamentals",
      issuer: "Akamai Technologies, Inc. (Coursera)",
      instructor: "Shadow P. Farrell (Akamai Technical Academy)",
      date: "January 19, 2026",
      category: "Systems & Security",
      categoryCode: "systems",
      file: "certificate/OS COURSERA.pdf",
      verifyUrl: "https://coursera.org/verify/RGK0JIF5YW3S",
      badge: "Akamai Academy",
      description: "In-depth study of computer operating systems: kernel vs user space, process scheduling, multithreading synchronization, virtual memory paging, file system structures, and concurrency control."
    },
    {
      id: "microsoft-computers",
      title: "Introduction to Computers & Hardware Architecture",
      issuer: "Microsoft (Coursera)",
      instructor: "Marni Baker-Stein (Chief Content Officer)",
      date: "January 5, 2026",
      category: "Systems & Security",
      categoryCode: "systems",
      file: "certificate/Intorduction To Computer.pdf",
      verifyUrl: "https://coursera.org/verify/2AAZ3JJRKVU0",
      badge: "Microsoft",
      description: "Hardware architecture fundamentals: CPU arithmetic logic units, RAM caching hierarchies, secondary storage, bus interfaces, and system diagnostics authorized by Microsoft."
    },
    {
      id: "tata-cybersecurity",
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "TATA (Forage)",
      instructor: "TATA Consulting Services Cybersecurity Team",
      date: "January 22, 2025",
      category: "Systems & Security",
      categoryCode: "systems",
      file: "certificate/Cyber Securtity TATA.pdf",
      verifyUrl: "https://forage.com/verify",
      badge: "TATA Group",
      description: "Practical enterprise cybersecurity simulations: Identity and Access Management (IAM) fundamentals, IAM strategy assessment, risk mitigation matrices, and crafting custom enterprise IAM security architectures."
    },
    {
      id: "hp-cybersecurity",
      title: "Introduction to Cybersecurity Awareness",
      issuer: "HP LIFE (HP Foundation)",
      instructor: "HP LIFE Global Faculty",
      date: "Certified",
      category: "Systems & Security",
      categoryCode: "systems",
      file: "certificate/certificate (1).pdf",
      verifyUrl: null,
      badge: "HP LIFE",
      description: "Corporate cybersecurity awareness: threat detection, phishing countermeasures, credential hardening, network perimeter defense, and data protection policies."
    },
    {
      id: "coursera-html-proj",
      title: "HTML Web Development Project",
      issuer: "Coursera Project Network",
      instructor: "Judy Richardson (Subject Matter Expert)",
      date: "June 27, 2025",
      category: "Web & Design",
      categoryCode: "web",
      file: "certificate/Coursera HTML.pdf",
      verifyUrl: null,
      badge: "Coursera Project",
      description: "Hands-on guided project building responsive, accessible semantic web structures adhering to modern HTML5 and W3C accessibility compliance standards."
    },
    {
      id: "html-fundamentals",
      title: "Introduction to HTML5 Fundamentals",
      issuer: "Coursera Project Network",
      instructor: "Judy Richardson (Subject Matter Expert)",
      date: "June 27, 2025",
      category: "Web & Design",
      categoryCode: "web",
      file: "certificate/HTML.pdf",
      verifyUrl: null,
      badge: "Coursera Project",
      description: "Semantic document design, DOM tree hierarchy, web forms, metadata optimization, and responsive viewport configurations for modern cross-device web development."
    },
    {
      id: "coursera-canva",
      title: "Graphic Design & Brand Assets with Canva",
      issuer: "Coursera Project Network",
      instructor: "Abhishek Jha (Data Science & Visual Arts)",
      date: "June 27, 2025",
      category: "Web & Design",
      categoryCode: "web",
      file: "certificate/Coursera CANVA.pdf",
      verifyUrl: null,
      badge: "Coursera Project",
      description: "Visual identity design, layout composition, color harmony theories, and digital marketing collateral creation for modern brand presentation."
    },
    {
      id: "coursera-excel",
      title: "Microsoft Excel for Data Analysis",
      issuer: "Coursera Project Network",
      instructor: "Kim Webb (Subject Matter Expert)",
      date: "June 27, 2025",
      category: "Productivity & Markets",
      categoryCode: "business",
      file: "certificate/Coursera MS EXCEL.pdf",
      verifyUrl: null,
      badge: "Coursera Project",
      description: "Advanced spreadsheet data processing, formulas and conditional functions, pivot tables, statistical summaries, and business intelligence reporting models."
    },
    {
      id: "white-case-capital",
      title: "US Capital Markets Job Simulation",
      issuer: "White & Case (Forage)",
      instructor: "Tom Brunskill (CEO, Co-Founder of Forage)",
      date: "March 21, 2025",
      category: "Productivity & Markets",
      categoryCode: "business",
      file: "certificate/White&Case.pdf",
      verifyUrl: "https://forage.com/verify",
      badge: "White & Case LLP",
      description: "Practical simulation of global capital markets operations: managing transactional closing checklists, drafting closing certificates, regulatory due diligence, and capital compliance workflows."
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "BPUT CUPGS (Centre for UG & PG Studies)",
      location: "Rourkela, Odisha, India",
      period: "2025 – 2028 (Expected)",
      badge: "Undergraduate Degree",
      desc: "Advanced coursework in distributed architectures, operating systems, compiler design, and software engineering methodologies."
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      institution: "Government Polytechnic Berhampur",
      location: "Berhampur, Odisha, India",
      period: "2022 – 2025",
      badge: "Diploma Completed",
      desc: "Rigorous foundations in object-oriented programming, data structures, relational database normalization, and networking protocols."
    },
    {
      degree: "Higher Secondary (Arts)",
      institution: "NC Auto College (CHSE Odisha)",
      location: "Jajpur, Odisha, India",
      period: "2020 – 2022",
      badge: "CHSE Board",
      desc: "Built analytical foundations and creative communications."
    },
    {
      degree: "Matriculation / Schooling (Class X)",
      institution: "Kaliapani High School, Kaliapani",
      location: "Kaliapani, Odisha, India",
      period: "2020",
      badge: "BSE Odisha / HSC",
      desc: "Secondary school education laying the groundwork for engineering problem-solving."
    }
  ],

  leadership: {
    title: "Beyond Coding",
    subtitle: "Leadership, Creative Direction, and Community Engagement",
    items: [
      {
        role: "Dramatic Secretary",
        organization: "BPUT CUPGS, Rourkela",
        desc: "Elected to lead cultural and theatrical initiatives across the university. Directing campus stage plays, scripting creative narratives, and mentoring student actors in voice modulation, stage presence, and storytelling.",
        highlights: [
          "Organized university-wide dramatic performances and annual cultural fests",
          "Managed production budgets, rehearsal schedules, acoustic sound, and stage lighting logistics",
          "Promoted creative expression and team synergy among engineering students"
        ]
      },
      {
        role: "Event Coordinator & Student Organizer",
        organization: "College Technical & Cultural Committees",
        desc: "Spearheaded planning and on-ground logistics for technical hackathons, symposiums, and cultural festivals with high student participation.",
        highlights: [
          "Coordinated cross-functional student teams across media, sound, scheduling, and hospitality",
          "Managed live timelines, guest speaker hosting, and auditorium operations",
          "Demonstrated crisis resolution, rapid communication, and empathetic team leadership"
        ]
      }
    ]
  },

  startupJourney: {
    title: "My Startup Journey: QuickHelper",
    founderRole: "Founder & Full-Stack Developer",
    quote: "I observed firsthand the immense friction families in tier-2 and tier-3 towns face when trying to find reliable technicians. At the same time, skilled tradespeople struggle for steady work without paying unfair commissions. QuickHelper was founded to solve this divide with clean technology and transparent real-time connections.",
    pillars: [
      { label: "The Problem", text: "Fragmented service directories, unpredictable pricing, zero verification, and painful waiting times." },
      { label: "The Solution", text: "A verified hyperlocal marketplace connecting customers with nearby technicians within minutes via GPS and real-time chat." },
      { label: "The Engineering", text: "React Native cross-platform client backed by high-throughput ASP.NET Core 9 Web APIs and PostgreSQL." },
      { label: "The Vision", text: "Empowering local service technicians with digital reputation, consistent client discovery, and predictable livelihood." }
    ]
  },

  techStackLogos: [
    { name: "React Native", tag: "MOBILE" },
    { name: "Next.js", tag: "SSR / WEB" },
    { name: "ASP.NET Core", tag: "BACKEND" },
    { name: "PostgreSQL", tag: "DATABASE" },
    { name: "Python", tag: "AI / ML" },
    { name: "Docker", tag: "DEVOPS" }
  ],

  careerInterests: {
    headline: "Career Interests & Ambitions",
    domains: [
      "Full-Stack Development",
      ".NET Enterprise Engineering",
      "Software Engineering",
      "Artificial Intelligence & Machine Learning",
      "Mobile Application Development",
      "Cloud & Backend Systems"
    ],
    opportunityStatement: "I am actively seeking Software Developer / Full-Stack Developer internships, entry-level engineering roles, and collaborative technology product ventures. If you are building high-impact software, let's connect.",
    cta: "Let's Connect"
  }
};
