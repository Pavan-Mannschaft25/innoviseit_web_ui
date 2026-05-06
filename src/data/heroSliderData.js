import { FaArrowRight, FaComments } from "react-icons/fa";
import img1 from "../assets/heroImages/sl11.png";
import img2 from "../assets/heroImages/sl2.png";
import img3 from "../assets/heroImages/sl3.png";
import img4 from "../assets/heroImages/sl4.png";
import img5 from "../assets/heroImages/sl5.png";
import img6 from "../assets/heroImages/sl6.png";

export const HERO_SLIDES = [
  // 🔹 SLIDE 1 - MAIN EVENT HERO
  {
    image: img1,

    badge: "SAP Sapphire Virtual 2026",

    title: "The Beginning of",
    highlight: "Better",

    subtitle: "May 12–13 • Live Worldwide",

    description:
      "Join SAP leaders, innovators, and global enterprises as we unveil Joule’s reimagined AI workspace and the future of intelligent business operations.",

    buttons: [
      {
        label: "Register Now",
        link: "/register",
        icon: FaArrowRight,
        type: "primary",
      },
      {
        label: "Browse Sessions",
        link: "/sessions",
        icon: FaComments,
        type: "secondary",
      },
    ],

    stats: [
      { value: "2 Days", label: "Global Event" },
      { value: "100+", label: "Live Sessions" },
      { value: "4 Channels", label: "Streaming Tracks" },
    ],
  },

  // 🔹 SLIDE 2 - JOULE AI
  {
    image: img2,

    badge: "Introducing Joule AI",

    title: "Turn Intent Into",
    highlight: "Execution",

    subtitle: "AI That Works Across Your Enterprise",

    description:
      "Experience Joule’s central workspace where AI proactively improves operations, automates decisions, and delivers real-time business outcomes.",

    buttons: [
      {
        label: "Watch Live Demos",
        link: "/ai-demos",
        icon: FaArrowRight,
        type: "primary",
      },
    ],

    stats: [
      { value: "AI-Driven", label: "Workflows" },
      { value: "Real-Time", label: "Insights" },
      { value: "End-to-End", label: "Automation" },
    ],
  },

  // 🔹 SLIDE 3 - LEARNING & SESSIONS
  {
    image: img3,

    badge: "Learning & Innovation",

    title: "Explore",
    highlight: "Solution Tracks",

    subtitle: "Tailored Content for Every Role",

    description:
      "Dive into curated sessions across AI, Cloud ERP, Data & Analytics, and Supply Chain. Find the insights that matter to your business.",

    buttons: [
      {
        label: "Explore Tracks",
        link: "/tracks",
        icon: FaArrowRight,
        type: "primary",
      },
    ],

    stats: [
      { value: "AI", label: "Innovation Tracks" },
      { value: "Deep Dive", label: "Sessions" },
      { value: "Expert", label: "Insights" },
    ],
  },

  // 🔹 SLIDE 4 - SPEAKERS
  {
    image: img4,

    badge: "World-Class Speakers",

    title: "Learn From",
    highlight: "Industry Leaders",

    subtitle: "SAP Executives & Global Icons",

    description:
      "Hear from SAP CEO Christian Klein and global leaders sharing strategies, innovation stories, and real-world success cases.",

    buttons: [
      {
        label: "View Speakers",
        link: "/speakers",
        icon: FaArrowRight,
        type: "secondary",
      },
    ],

    stats: [
      { value: "SAP", label: "Executives" },
      { value: "Global", label: "Leaders" },
      { value: "Real-World", label: "Stories" },
    ],
  },

  // 🔹 SLIDE 5 - NETWORKING
  {
    image: img5,

    badge: "Connect & Collaborate",

    title: "Engage With",
    highlight: "Experts",

    subtitle: "Ask Questions. Get Answers. Build Strategy.",

    description:
      "Participate in live Q&A sessions, connect with SAP partners, and collaborate with peers to accelerate your digital transformation journey.",

    buttons: [
      {
        label: "Join Discussions",
        link: "/connect",
        icon: FaComments,
        type: "secondary",
      },
    ],

    stats: [
      { value: "Live", label: "Q&A Sessions" },
      { value: "Global", label: "Community" },
      { value: "Direct", label: "Access" },
    ],
  },

  // 🔹 SLIDE 6 - FINAL CTA
  {
    image: img6,

    badge: "Don’t Miss Out",

    title: "Shape the Future",
    highlight: "With SAP",

    subtitle: "Your AI Journey Starts Here",

    description:
      "Be part of the most important SAP event of the year. Discover innovation, gain insights, and transform your business with confidence.",

    buttons: [
      {
        label: "Secure Your Spot",
        link: "/register",
        icon: FaArrowRight,
        type: "primary",
      },
    ],

    stats: [
      { value: "Free", label: "Virtual Access" },
      { value: "Global", label: "Participation" },
      { value: "Future", label: "Ready" },
    ],
  },
];
