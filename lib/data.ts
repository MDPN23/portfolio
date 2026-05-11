export const personalInfo = {
  name: "Muhammad Dzikri Pandu Nareswara",
  nickname: "Nareswara",
  role: "Adversarial Engineer & Security Researcher",
  headline: "I build secure systems and break insecure ones.",
  subHeadline: "Bridging the gap between IEEE-standard cryptographic research and high-performance, real-world application security.",
  bio: "I am a solution-oriented engineer dedicated to helping businesses build secure and high-performance digital foundations. By integrating adversarial insights with a deep understanding of business needs, I provide technical solutions that safeguard growth and ensure long-term resilience in an evolving digital landscape.",
  email: "mdpnnareswara@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-dzikri-pandu-nareswara/",
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
    description: "Designing Security-First architectures that safeguard not only technical systems but also critical business processes and financial integrity.",
    tag: "Integrity",
  },
  {
    title: "Adversarial Analysis",
    description: "Analyzing evolving cyber threats in the digital era to provide strategic countermeasures that protect long-term business continuity.",
    tag: "Defense",
  },
  {
    title: "Full-Stack Execution",
    description: "Developing high-performance, resilient systems engineered to fulfill complex business needs through robust and secure technology.",
    tag: "Performance",
  },
];

export const projects = [

  {
    title: "Accellabs ERP",
    category: "Enterprise System",
    description: "Modern ERP solution for managing finance, inventory, HR, and POS in one integrated dashboard. Built for operational speed and ease of daily use.",
    tags: ["NextJs", "PostgreSQL", "AES-256"],
    link: "https://erp-dummy.vercel.app/",
    metric: "ISO/IEC 27001 Ready",
  },
  {
    title: "Company Profile Website",
    category: "Company Profile",
    description: "Company profile website for Caritaalam — showcasing brand identity, services, and company content with optimized SEO performance.",
    tags: ["React", "TypeScript", "SEO"],
    link: "https://www.caritaalam.com/",
    metric: "Web Development",
  },
  {
    title: "Tirta Siaga Bantul",
    category: "GIS Website",
    description: "Advanced GIS platform for mapping and monitoring water springs across Bantul Regency. Features spatial data visualization and environmental distribution analysis to support sustainable water resource management.",
    tags: ["React", "TypeScript", "Leaflet", "GIS"],
    link: "https://tirtasiagabantul.vercel.app/",
    metric: "GIS Web Application",
  },
  {
    title: "Kilo Land Vault",
    category: "DeFi Protocol",
    description: "Security hardening for KiloVault: proportional withdrawal accounting, ERC-20 liquidity enforcement, bot cooldown rate-limiting, NAV synchronization, and fee claim path — ensuring correctness and MEV resistance on an AI-powered DeFi vault.",
    tags: ["Solidity", "DeFi", "Security", "Smart Contract Audit"],
    link: "https://github.com/tamago-labs/kilolend-xyz/pull/8",
    metric: "MEV Resistant",
  },
  {
    title: "NVM Run",
    category: "Event Ticketing",
    description: "Ticketing platform for the NVM RUN half-marathon event. Streamlines participant registration, race category selection, and online ticket management.",
    tags: ["Next", "TypeScript", "Ticketing"],
    link: "https://nvm-ticketing.vercel.app/",
    metric: "Event Platform",
  },
  {
    title: "Secure Vault",
    category: "Security Tool",
    description: "Zero-knowledge password manager — all encryption happens client-side before data is stored locally. The server never touches plaintext user credentials.",
    tags: ["Zero-Knowledge", "AES-256", "Local Storage"],
    link: "https://securevault-mdpn.vercel.app/",
    metric: "Zero-Knowledge Architecture",
  },
];

export const research = [
  {
    title: "Mitigating Double Spending & Replay Attacks in DeFi Bridges",
    status: "In Progress",
    type: "MSc Thesis",
    description: "Novel cryptographic approach to cross-chain liquidity protection for next-gen DeFi protocols.",
    year: "On Going",
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
