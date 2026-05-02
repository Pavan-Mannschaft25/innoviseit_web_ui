// ============================================
// THINK DATA - Philosophy & Blog Content
// ============================================

export const thinkPhilosophy = [
  {
    id: 1,
    title: "Business First, Technology Next",
    subtitle: "Strategic Alignment",
    description:
      "We believe technology exists to serve business objectives. Every solution we architect begins with understanding your strategic goals, KPIs, and desired outcomes—then we design the technology roadmap to get you there.",
    icon: "FaLightbulb",
    principles: [
      "Outcome-focused approach",
      "ROI-driven decisions",
      "Stakeholder alignment",
      "Measurable success criteria",
    ],
  },
  {
    id: 2,
    title: "SAP as Transformation Engine",
    subtitle: "Enterprise Excellence",
    description:
      "SAP isn't just ERP software—it's a catalyst for fundamental business transformation when implemented with vision and expertise. We help organizations unlock SAP's full potential as a digital core.",
    icon: "FaCogs",
    principles: [
      "Digital core strategy",
      "Process harmonization",
      "Intelligent automation",
      "Continuous innovation",
    ],
  },
  {
    id: 3,
    title: "AI-Driven Automation",
    subtitle: "Intelligent Operations",
    description:
      "Artificial intelligence is no longer optional—it's imperative for competitive advantage. We embed AI and machine learning into every layer of the technology stack, from infrastructure to user experience.",
    icon: "FaRobot",
    principles: [
      "Predictive capabilities",
      "Intelligent process automation",
      "Natural language interfaces",
      "Continuous learning systems",
    ],
  },
  {
    id: 4,
    title: "Cloud is Foundation",
    subtitle: "Modern Infrastructure",
    description:
      "Cloud-native architecture is the foundation for agility, scalability, and innovation. We design resilient multi-cloud strategies that optimize cost, performance, and compliance requirements.",
    icon: "FaCloud",
    principles: [
      "Cloud-native design patterns",
      "Multi-cloud optimization",
      "Infrastructure as Code",
      "DevSecOps integration",
    ],
  },
  {
    id: 5,
    title: "Data as Competitive Advantage",
    subtitle: "Analytics Leadership",
    description:
      "Your organization's most valuable asset is its data. We engineer comprehensive data platforms that transform raw information into actionable intelligence driving better decisions faster.",
    icon: "FaChartLine",
    principles: [
      "Data governance frameworks",
      "Real-time analytics",
      "Self-service BI",
      "ML/AI integration",
    ],
  },
  {
    id: 6,
    title: "Continuous Transformation",
    subtitle: "Evolutionary Approach",
    description:
      "Digital transformation is not a project—it's a perpetual journey. We establish sustainable innovation programs that keep your organization ahead of market evolution and disruption.",
    icon: "FaSyncAlt",
    principles: [
      "Agile delivery methods",
      "Innovation labs",
      "Change management",
      "Continuous improvement culture",
    ],
  },
];

// ============================================
// BLOG POSTS DATA
// ============================================

export const blogPosts = [
  {
    id: 1,
    title: "The Future of SAP S/4HANA: What Enterprises Need to Know in 2024",
    excerpt:
      "Exploring the latest developments in SAP's flagship platform and preparation strategies for the 2027 ECC end-of-maintenance deadline. Learn how to plan your migration timeline effectively...",
    category: "SAP Insights",
    author: "Sarah Chen",
    authorRole: "SAP Practice Lead",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/images/blog/sap-future.jpg",
    featured: true,
    tags: ["SAP", "S/4HANA", "Digital Transformation", "Migration"],
  },
  {
    id: 2,
    title: "AI in Enterprise Applications: Beyond the Hype to Real Value",
    excerpt:
      "How leading organizations are successfully integrating artificial intelligence into core business processes for measurable ROI. Discover practical use cases and implementation strategies...",
    category: "Digital Transformation",
    author: "Michael Rodriguez",
    authorRole: "CTO & Innovation Lead",
    date: "2024-01-10",
    readTime: "6 min read",
    image: "/images/blog/ai-enterprise.jpg",
    featured: false,
    tags: ["AI", "Machine Learning", "Automation", "Enterprise"],
  },
  {
    id: 3,
    title:
      "Cloud Migration Best Practices: Lessons from 200+ Enterprise Projects",
    excerpt:
      "Key learnings and proven methodologies for successful large-scale cloud transformations without business disruption. Avoid common pitfalls and accelerate your cloud journey...",
    category: "Cloud Strategy",
    author: "Priya Sharma",
    authorRole: "Cloud Architecture Director",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/images/blog/cloud-migration.jpg",
    featured: false,
    tags: ["Cloud", "AWS", "Azure", "Migration", "Best Practices"],
  },
  {
    id: 4,
    title: "Building Resilient Supply Chains with Digital Technology",
    excerpt:
      "How manufacturers are leveraging IoT, analytics, and SAP solutions to create agile, transparent supply chains that can withstand global disruptions...",
    category: "Manufacturing",
    author: "James Wilson",
    authorRole: "Industry Practice Director",
    date: "2024-01-02",
    readTime: "7 min read",
    image: "/images/blog/supply-chain.jpg",
    featured: false,
    tags: ["Supply Chain", "IoT", "Manufacturing", "SAP"],
  },
  {
    id: 5,
    title: "The ROI of Digital Transformation: Measuring What Matters",
    excerpt:
      "A comprehensive framework for calculating and demonstrating the real business value of digital transformation initiatives to stakeholders and board members...",
    category: "Strategy",
    author: "Emily Thompson",
    authorRole: "VP of Consulting",
    date: "2023-12-28",
    readTime: "9 min read",
    image: "/images/blog/roi-digital.jpg",
    featured: false,
    tags: ["ROI", "KPIs", "Business Value", "Transformation"],
  },
];

// ============================================
// INSIGHT CATEGORIES
// ============================================

export const insightCategories = [
  {
    name: "All Insights",
    slug: "all",
    count: blogPosts.length,
    color: "from-primary-600 to-primary-800",
  },
  {
    name: "SAP Insights",
    slug: "sap",
    count: blogPosts.filter((p) => p.category === "SAP Insights").length,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Digital Transformation",
    slug: "digital-transformation",
    count: blogPosts.filter((p) => p.category === "Digital Transformation")
      .length,
    color: "from-purple-600 to-purple-800",
  },
  {
    name: "Cloud Strategy",
    slug: "cloud",
    count: blogPosts.filter((p) => p.category === "Cloud Strategy").length,
    color: "from-cyan-600 to-cyan-800",
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    count: blogPosts.filter((p) => p.category === "Manufacturing").length,
    color: "from-orange-600 to-orange-800",
  },
  {
    name: "Strategy",
    slug: "strategy",
    count: blogPosts.filter((p) => p.category === "Strategy").length,
    color: "from-green-600 to-green-800",
  },
];

// ============================================
// FEATURED RESOURCES (Whitepapers, Webinars, etc.)
// ============================================

export const featuredResources = [
  {
    id: 1,
    type: "Whitepaper",
    title: "Enterprise Cloud Migration Playbook 2024",
    description:
      "A comprehensive guide covering assessment, planning, execution, and optimization strategies for enterprise cloud migrations.",
    downloadCount: 2547,
    pages: 45,
    format: "PDF",
    thumbnail: "/images/resources/cloud-playbook.png",
    topics: ["Cloud", "Migration", "Strategy"],
    publishedDate: "2024-01-08",
  },
  {
    id: 2,
    type: "Webinar",
    title: "Live Demo: AI-Powered Testing Automation",
    description:
      "Watch our experts demonstrate how AI can reduce testing time by 60% while improving quality metrics across enterprise applications.",
    duration: "45 min",
    format: "Video",
    thumbnail: "/images/resources/webinar-ai-testing.png",
    topics: ["AI", "Testing", "Automation"],
    publishedDate: "2024-01-12",
    registrationRequired: true,
  },
  {
    id: 3,
    type: "Case Study",
    title: "Global Bank's S/4HANA Transformation Journey",
    description:
      "Deep dive into how a top-20 global bank successfully migrated 50+ subsidiaries to S/4HANA in 18 months with zero downtime.",
    pages: 22,
    format: "PDF",
    thumbnail: "/images/resources/case-study-bank.png",
    topics: ["SAP", "Banking", "Case Study"],
    publishedDate: "2024-01-05",
  },
  {
    id: 4,
    type: "Infographic",
    title: "State of Enterprise Digital Transformation 2024",
    description:
      "Visual insights from our survey of 500+ IT leaders on digital transformation trends, challenges, and success factors.",
    format: "PDF",
    thumbnail: "/images/resources/infographic-2024.png",
    topics: ["Digital Transformation", "Research", "Trends"],
    publishedDate: "2024-01-15",
  },
];
