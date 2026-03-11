import { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Jocata",
  description: "Innovative technology for end-to-end digital transformation of your financial services.",
  navItems: [
    { title: "Home", href: "/" },
    { title: "Our Platform", href: "/platform" },
    { title: "About Us", href: "/about" },
    { title: "Success Stories", href: "/success-stories" },
    { title: "Careers", href: "/careers" },
    { title: "AI Scoring", href: "/ai-scoring" },
    { title: "One Case Manager", href: "/one-case-manager" },
    { title: "Contact", href: "/contact" },
  ],
  hero: {
    headline: "Fintech Ecosystem of the ",
    accentWord: "FUTURE.",
    subheadline: "Innovative technology for end-to-end digital transformation of your financial services. Built for scale, designed for innovation.",
    ctaText: "Request Demo",
  },
  pillars: {
    title: "What We Do",
    items: [
      {
        icon: "Briefcase",
        title: "Business",
        description: "We boost your Retail and MSME / SME book expansion through real-time data acquisition and smart underwriting.",
      },
      {
        icon: "ShieldAlert",
        title: "Risk",
        description: "We deliver real-time actionable insights, running relevant customer information through configured credit policies.",
      },
      {
        icon: "Settings",
        title: "Operations",
        description: "Our configurable workflow engine brings all key stakeholders onto one virtual platform for efficient management.",
      },
      {
        icon: "Search",
        title: "Compliance",
        description: "Our AI-based analytics engine helps you monitor for potentially suspicious financial activity and fraud.",
      },
    ],
  },
  architecture: {
    title: "Jocata GRID™ Capability Layers",
    layers: [
      {
        id: "aggregation",
        title: "Aggregation",
        description: "Source your data digitally with a stack of Digital APIs for Identity, Address, Financial, and more.",
        features: ["Identity Verification", "Address Ingest", "Financial Data", "Custom APIs"],
      },
      {
        id: "processing",
        title: "Processing",
        description: "A collection of data processing engines including OCR, Underwriting, and Workflow Robotics.",
        features: ["OCR Engine", "Smart Underwrite", "Workflow Automation", "Robotics NLP"],
      },
      {
        id: "analytics",
        title: "Analytics",
        description: "AI-based capabilities for rule engines, profiling, and advanced data visualization.",
        features: ["Rule Engine", "AI Profiling", "Anomalous Behavior Detection", "Data Viz"],
      },
      {
        id: "presentation",
        title: "Presentation",
        description: "Delivered seamlessly across multiple channels including IVR, Websites, Microsites, and Apps.",
        features: ["Multi-channel Delivery", "Responsive Apps", "Embedded UI", "Real-time Dashboards"],
      },
    ],
  },
  stats: [
    { value: "5", suffix: "B+", label: "Transactions Annually" },
    { value: "14", suffix: "+", label: "Years of Innovation" },
    { value: "75", suffix: "%", label: "False Positive Reduction" },
  ],
  clients: [
    { name: "Axis Bank", url: "/logos/axis.svg" },
    { name: "Airtel Payments Bank", url: "/logos/airtel.svg" },
    { name: "American Express", url: "/logos/amex.svg" },
    { name: "IndusInd Bank", url: "/logos/indusind.svg" },
    { name: "RBL Bank", url: "/logos/rbl.svg" },
    { name: "YES Bank", url: "/logos/yesbank.svg" },
    { name: "Wio", url: "/logos/wio.svg" },
    { name: "Wave Money", url: "/logos/wavemoney.svg" },
    { name: "Unity", url: "/logos/unity.svg" },
    { name: "Yoma Bank", url: "/logos/yoma.svg" },
  ],
  testimonials: [
    {
      quote: "Since 2010, we have successfully partnered with some of the largest financial institutions in their digital transformation journeys.",
      author: "Mani Mulki",
      role: "CIO",
      company: "Tata Capital",
      avatar: "https://i.pravatar.cc/150?u=mani",
    },
  ],
  stories: [
    {
      id: "story-1",
      title: "Digital Lending Platform for Retail and SME",
      category: "Lending",
      stat: "Instant Disbursement",
      description: "End to end digital customer experience and middleware platform to digitize the Personal & SME lending space for the bank enabling almost half of Personal Loans acquisition through this digital platform.",
      details: [
        "Single platform caters to multiple products powering significant loan book growth for the bank.",
        "Instant eligibility and disbursement of funds to customers via the platform.",
        "Multi-channel omnideployment across phone banking, website, internet banking and mobile banking.",
        "Integrated workflow, underwriting and record management platform."
      ]
    },
    {
      id: "story-2",
      title: "AML Compliance",
      category: "Compliance",
      stat: "5B+ Transactions",
      description: "Artificial Intelligence and Machine Learning powered analytics platform to revamp and digitally transform AML Transaction Monitoring.",
      details: [
        "Multi system integration to allow for a 360 degree view of the customer and their transactions.",
        "On-demand data visualisations for efficient alert review significantly reducing operational TATs.",
        "Platform delivery at scale to handle over 5 Billion transactions in a year.",
        "Comprehensive configuration capability inherent to the platform empowering higher flexibility and stabilisation."
      ]
    },
    {
      id: "story-3",
      title: "Digital Corporate and SME On-Boarding",
      category: "On-Boarding",
      stat: "85% Time Reduction",
      description: "Transformation from a manual to a complete digital experience for corporate card customers.",
      details: [
        "Ecosystem platform for on-boarding, screening, under-writing corporates.",
        "85% reduction in time taken for acquiring corporate card customers.",
        "Seamless integration with alternate trusted data sources for real time data aggregation and verification.",
        "Single Ecosystem platform for bank’s Partners, Corporates and internal to bank teams."
      ]
    },
  ],
  jobs: [
    {
      id: "job-1",
      title: "Java Tech Lead",
      department: "Development",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "8-12 Years",
      requirements: [
        "Exceptional knowledge in Core Java: OOPS, Collection Framework, Threads, and Exception Handling.",
        "Must have knowledge of J2EE: Servlets, JSPs, and MVC frameworks.",
        "Hands-on experience with web frameworks: Struts 2.x, JSF, Spring MVC.",
        "Hands-on experience in Spring framework: Dependency Injection, IoC, MVC, AOP, and Bean Life Cycle.",
        "Experience in Hibernate: ORM, mappings, annotations, and transactions.",
        "Web technologies: jQuery, HTML, JavaScript, CSS, JSON.",
        "Database: Hands-on experience with MySQL, MSSQL, PostgreSQL, and Oracle; proficient in SQL and data analysis.",
        "Knowledge of reporting tools: Jasper, iText, and POI.",
        "Linux: Basic commands for application deployment.",
        "Testing: Unit testing with JUnit.",
        "Basic configurations on Apache Tomcat server.",
        "Essential knowledge of Web Services and XML parsing."
      ]
    },
    {
      id: "job-2",
      title: "Senior Java Developer",
      department: "Development",
      location: "Hyderabad, India",
      type: "Full-time",
      experience: "3-7 Years",
      requirements: [
        "Strong knowledge of Core Java and OOPS principles.",
        "Experience with Spring Boot and Microservices architecture.",
        "Proficiency in Hibernate and JPA for data persistence.",
        "Ability to write optimized SQL queries for relational databases.",
        "Experience with front-end technologies like React or Angular (Optional).",
        "Familiarity with CI/CD pipelines and version control (Git).",
        "Commitment to following coding standards and best practices."
      ]
    },
  ],
  values: [
    {
      title: "BUILD FAST, BUILD RIGHT",
      description: "We balance risk taking and speed to market with thoughtful design and sound development practices. Our aim is to offer transformational tech that not only is responsive to market trends and other technologies but also has been evaluated for its impact on stakeholders.",
    },
    {
      title: "PARTNERSHIP",
      description: "We embrace our client’s challenges as our own and we work collaboratively to deliver value through the right solution, because their success is our success. Building a lasting partnership means that at all times we listen, are responsive and act with integrity and respect.",
    },
    {
      title: "THOUGHTFUL BY DESIGN",
      description: "We aim for thoughtfulness in everything we do. This should be felt by everyone we interact with – both internal and external.",
    },
    {
      title: "OWN IT",
      description: "Employees are empowered and encouraged to take initiative, get to work and make well-thought-out decisions that lead to the right results for the right reasons. We discourage stagnation and waiting to be told what to do. Employees are accountable for their work product quality and timeliness of commitments made.",
    },
    {
      title: "ONE JOCATA",
      description: "We are stronger when our team operates as one. Our wins (and losses) are a “we” thing. We are transparent and speak the truth without fear of offense or disagreement. We motivate and align our people with ongoing opportunities for success, development, and growth.",
    },
  ],
  perks: [
    {
      title: "Competitive Salaries",
      description: "We take pride in rewarding great work with great compensation, and know what it takes to attract and keep the best talent.",
    },
    {
      title: "Professional Development",
      description: "You get to work with the latest technologies for some of the biggest financial institutions in India, and have the chance to make a real difference.",
    },
    {
      title: "Rewards and Recognition",
      description: "Anyone going above and beyond the normal expectations of their role is recognized and rewarded for their outstanding contribution.",
    },
    {
      title: "Vacation and Leaves",
      description: "Generous vacation and maternity/ paternity/ adoption leave. We believe you’re at your professional best when you have a healthy work-life balance.",
    },
    {
      title: "Team Events",
      description: "Festival celebrations, team outings, sports days, contests, snacks in the cafeteria - you'll always feel like part of the Jocata family.",
    },
    {
      title: "Medical Insurance",
      description: "Comprehensive medical coverage for you and your dependents. Your health and that of your family is as much a priority for us as it is for you.",
    },
  ],
  team: [
    { 
      name: "Prashant Muddu", 
      role: "MD & CEO", 
      linkedin: "https://www.linkedin.com/in/prashantmuddu/",
      image: "https://www.jocata.com/wp-content/uploads/2024/10/Prashant.png"
    },
    { 
      name: "Narasimhan V", 
      role: "Principal Advisor", 
      linkedin: "https://www.linkedin.com/in/narsi-narasimhan-venkatesan-6254a252/",
      image: "https://www.jocata.com/wp-content/uploads/2024/10/NarsiSir.png"
    },
    { 
      name: "Akshay Chopra", 
      role: "Business Head", 
      linkedin: "https://www.linkedin.com/in/akshay-chopra-2b93b626/",
      image: "https://www.jocata.com/wp-content/uploads/2019/06/team_akshaychopra.svg"
    },
    { 
      name: "Sundari Vedula", 
      role: "Chief Technology Officer", 
      linkedin: "https://www.linkedin.com/in/sundari-vedula-21823454/",
      image: "https://www.jocata.com/wp-content/uploads/2024/10/Sundari.png"
    },
    { 
      name: "Karthigeyan S", 
      role: "Senior Director - Products", 
      linkedin: "https://www.linkedin.com/in/karty/",
      image: "https://www.jocata.com/wp-content/uploads/2024/10/KGN.png"
    },
    { 
      name: "Anjali Jhajj", 
      role: "Director - Delivery", 
      linkedin: "https://in.linkedin.com/in/anjali-jhajj-3b6212b",
      image: "https://www.jocata.com/wp-content/uploads/2024/10/Anjali.png"
    },
  ],
  locationInfo: {
    title: "Great Location",
    description: "With its unique mix of Telugu, Urdu, Hindi and English, traditional and cosmopolitan cultures, Mughal and South-Indian cuisines, Hyderabad truly is a melting pot. Lakes, green parks, bustling malls, amazing food options (including our world-famous biryani), cafés, bars, clubs, live music and art scenes - the city has something to offer everyone. It's no wonder Hyderabad is now one of the top choices in India for young professionals. So as we say here, 'Aap kab arrain?'",
  },
  aiInsight: {
    title: "How Jocata's AI Can Help You",
    description: "We understand the importance of speed, accuracy, and cost efficiency in various aspects of banking. We harness the power of AI to help financial institutions improve customer experience, increase process efficiency and fight financial crime. Our platform includes an AI Ensemble that iteratively learns to identify complex patterns of anomalous behaviour by analysing huge amounts of data in real time.",
    metrics: [
      "75%+ reduction in false positives",
      "Real-time fraud prevention",
      "AI/ML powered insights",
      "Minimal changes to existing systems"
    ],
  },
  whoWeAre: {
    title: "Who We Are",
    description: "Our name Jocata and our logo of birds flying in a V are inspired by the scientific name of a bird. Just as this formation helps birds save energy and reduce fatigue over long distances and through ever-changing environments, we aspire to help financial institutions run more smoothly by reducing overhead, automating processes and ensuring compliance with increasingly demanding consumer needs and complicated regulatory requirements.",
  },
  contact: {
    email: "info@jocata.com",
    address: "Jocata, Hyderabad, India",
  },
  journey: [
    {
      year: "Year 1",
      date: "2011",
      title: "Funding & Startup",
      description: "Initial funding secured. Seed capital raised to kickstart the vision.",
      details: ["Seed capital raised", "Initial funding secured"],
      icon: "Coins"
    },
    {
      year: "Year 3",
      date: "2013",
      title: "Expansion",
      description: "Market expansion and regional launch across multiple territories.",
      details: ["Market expansion", "Regional launch"],
      icon: "Globe"
    },
    {
      year: "Year 6",
      date: "2016",
      title: "Team Growth",
      description: "Scaling the excellence with over 50+ dedicated employees.",
      details: ["Growing to 50+ employees", "Team expansion"],
      icon: "Users"
    },
    {
      year: "Year 10",
      date: "2019",
      title: "New Office",
      description: "Moved to a state-of-the-art facility serving as our new headquarters.",
      details: ["State-of-the-art facility", "New headquarters"],
      icon: "Building2"
    },
    {
      year: "Year 14",
      date: "2024",
      title: "Acquisition",
      description: "Strategic merger complete, marking a major milestone in our history.",
      details: ["Company acquisition", "Strategic merger complete"],
      icon: "Handshake"
    }
  ]
};
