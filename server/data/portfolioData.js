const portfolioData = {
    intro: {
        name: "PRATIK JAIN",
        email: "pratikj8690@gmail.com",
        phone: "+91 9785840543",
        links: {
            github: "GitHub", // Placeholder
            linkedin: "LinkedIn" // Placeholder
        },
        summary: "Full Stack Engineer with a passion for Agentic AI and modern web development."
    },
    education: [
        {
            institution: "Vellore Institute of Technology",
            location: "Vellore, India",
            degree: "B. Tech. Computer Science and Engineering",
            cgpa: "8.81",
            period: "2022-2026"
        },
        {
            institution: "Shiv Jyoti International School",
            location: "India",
            degree: "RBSE (Class XII)",
            percentage: "99.40%",
            period: "2020-2021"
        }
    ],
    experience: [
        {
            company: "IndiGo (InterGlobe Aviation Ltd)",
            role: "Full Stack Engineer Intern",
            period: "June 25 – Aug 25",
            description: [
                "Designed, developed, and deployed an Agentic AI-powered “Ancillary Engine” using Microsoft AutoGen.",
                "Architected and implemented a high-performance backend using FastAPI with Pydantic and Redis.",
                "Integrated Generative AI models with customer segmentation logic using Streamlit.",
                "Employed Databricks to process and analyse large volumes of historical booking data.",
                "Implemented dynamic bundling and pricing algorithms.",
                "Achieved a 110% increase in ancillary revenue over 2 months.",
                "Implemented an Agentic AI system for proactive Application Performance Monitoring (APM)."
            ]
        },
        {
            company: "Kuppismart Solutions Pvt. Ltd",
            role: "Web Developer Intern",
            period: "June 24 – July 24",
            description: [
                "Developed the testimonials section, login page and responsive pages using React.js and Tailwind CSS.",
                "Actively participated in team discussions to finalize design elements.",
                "Created a profile section page utilizing Firebase authentication.",
                "Performed comprehensive testing and optimized code for performance."
            ]
        }
    ],
    skills: {
        languages: ["C", "C++ (Competitive)", "Java", "Python", "R", "JavaScript"],
        frameworks: ["React", "Node.js", "Express.js", "Next.js", "Microsoft Autogen", "MongoDB", "MySQL", "PostgreSQL", "NoSQL"],
        knowledge: ["Data Structures and Algorithms", "MERN stack", "Backend development", "OOPS", "DBMS", "Networking", "Linux", "Web Application Security", "Operating System", "Ethical Hacking", "Risk assessment", "Risk management", "Agentic AI", "OSINT", "REST Api", "FastAPI", "Version Control", "Git"]
    },
    projects: [
        {
            title: "Flight Disruption Management System using Agentic AI",
            description: "Designed and implemented a multi-agent orchestration system for disrupted flight re-accommodation using Microsoft Autogen.",
            techStack: ["Microsoft Autogen", "FastAPI", "ReactJS", "Tailwind CSS", "Docker", "Kubernetes", "Azure", "PostgreSQL"]
        },
        {
            title: "Real-Time Chat App",
            description: "Built a Full Stack Realtime Chat Messaging App with Authentication and Twilio SMS notifications.",
            techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "React.js", "Socket.io"]
        }
    ],
    achievements: [
        {
            title: "LeetCode",
            metric: "Rating: 1569",
            subMetric: "Top 27.97%",
            description: "Solved over 400 programming questions.",
            image: "/assets/leetcode.png",
            link: "https://leetcode.com/"
        },
        {
            title: "CodeChef",
            metric: "Rating: 1784",
            subMetric: "3 Star (Div 2)",
            description: "Global Rank: 5896 | Country Rank: 4971",
            image: "/assets/codechef.png",
            link: "https://www.codechef.com/"
        },
        {
            title: "Adobe GenSolve",
            metric: "7th Place",
            description: "Achieved 7th place in the Adobe GenSolve competition, showcasing skills and dedication.",
            image: null
        },
        {
            title: "Innovators Quest",
            metric: "Technical Head",
            description: "Leading technical initiatives and fostering innovation within the club.",
            image: null
        }
    ]
};

module.exports = portfolioData;
