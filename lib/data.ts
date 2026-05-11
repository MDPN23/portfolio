export const personalInfo = {
  name: "Muhammad Dzikri Pandu Nareswara",
  nickname: "Nareswara",
  role: "Adversarial Engineer & Security Researcher",
  headline: "I build secure systems and break insecure ones.",
  subHeadline: "Bridging the gap between IEEE-standard cryptographic research and high-performance, real-world application security.",
  bio: "Full-Stack Engineer specialized in Cybersecurity & Digital Forensics. I combine business acumen with adversarial thinking to protect DeFi protocols and enterprise architectures from sophisticated threat vectors.",
  email: "mdpnnareswara@gmail.com",
  linkedin: "https://linkedin.com/in/muhammad-dzikri-pandu-nareswara",
  github: "https://github.com/MDPN23",
  resume: "/docs/resume.pdf",
};

export const navigationLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export const coreCapabilities = [
  {
    title: "Security Architecture",
    description: "Designing zero-trust infrastructures with robust input validation and cryptographic integrity (AES-256).",
    tag: "Integrity",
  },
  {
    title: "Adversarial Analysis",
    description: "Systematic threat modeling and mitigation of Replay Attacks, MEV exploits, and Prompt Injections.",
    tag: "Defense",
  },
  {
    title: "Full-Stack Execution",
    description: "Developing high-performance applications using Next.js and Node.js with a security-first mindset.",
    tag: "Performance",
  },
];

export const projects = [
  {
    title: "Swiffly Wallet",
    category: "Digital Wallet",
    description: "High-security digital wallet frontend with encrypted transaction flows and modular API architecture.",
    tags: ["Next.js", "TypeScript", "Security"],
    link: "#",
    metric: "Zero-Vulnerability Audit",
  },
  {
    title: "Kilo Land Vault",
    category: "DeFi Protocol",
    description: "DeFi yield optimizer with integrated MEV protection and sophisticated rate-limiting mechanisms.",
    tags: ["Solidity", "DeFi", "Security"],
    link: "#",
    metric: "MEV Resistant",
  },
  {
    title: "Secure ERP Solution",
    category: "Enterprise System",
    description: "Enterprise Resource Planning system for MSMEs featuring industry-standard data encryption and RBAC.",
    tags: ["Node.js", "PostgreSQL", "AES-256"],
    link: "#",
    metric: "ISO/IEC 27001 Ready",
  },
];

export const research = [
  {
    title: "Mitigating Double Spending & Replay Attacks in DeFi Bridges",
    status: "In Progress",
    type: "MSc Thesis",
    description: "Novel cryptographic approach to cross-chain liquidity protection for next-gen DeFi protocols.",
    year: "2024",
    institution: "Telkom University",
  },
  {
    title: "Secure Implementation of Population Data Encryption Using AES-256",
    status: "Published",
    type: "Academic Paper",
    description: "Award-winning research on optimizing high-volume data encryption without compromising performance.",
    year: "2024",
    link: "#",
    institution: "IEEE SCOReD",
  },
];

export const skills = {
  technical: ["TypeScript", "Next.js", "Python", "Solidity", "Node.js", "PostgreSQL"],
  security: ["OWASP Top 10", "Cryptographic Design", "Threat Modeling", "Adversarial Testing"],
};
