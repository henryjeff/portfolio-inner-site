// Verified against the owner's published portfolio/source, 2026-10-21.
// https://github.com/Ommishra1221/om-kumar-portfolio/blob/master/client/src/data/portfolio.ts
export interface Project { title: string; repo: string; live?: string; description: string; details: string[]; technologies: string[]; }
export interface PortfolioContent {
 name: string; title: string; repository: string; theme: string; website: string; intro: string; location: string; email: string; github: string; linkedin: string; resume: string;
 skills: {name: string; items: string[]}[]; projects: Project[];
 experience: {date: string; role: string; company: string; location: string; points: string[]}[];
 education: {dates: string; qualification: string; institution: string; result: string}[];
}
const portfolioContent: PortfolioContent = {
    "name": "Om Kumar Mishra",
    "title": "Software Engineer",
    "repository": "https://github.com/Ommishra1221/om-kumar-portfolio",
    "theme": "Realistic Cyberpunk Developer Room",
    "website": "https://om-kumar-portfolio.vercel.app/",
    "intro": "I design Java and Spring Boot backends with clear API boundaries, secure access control, and dependable data models for products that need to keep moving.",
    "location": "Bhubaneswar · India",
    "email": "ommishra1449@gmail.com",
    "github": "https://github.com/Ommishra1221",
    "linkedin": "https://www.linkedin.com/in/om-mishra-b6677625b",
    "resume": "/om-kumar-mishra-resume.pdf",
    "skills": [
        {
            "name": "Languages",
            "items": [
                "Java",
                "SQL",
                "JavaScript",
                "C++"
            ]
        },
        {
            "name": "Backend",
            "items": [
                "Spring Boot",
                "Spring MVC",
                "Spring Security",
                "REST APIs",
                "JWT",
                "JPA/Hibernate"
            ]
        },
        {
            "name": "Databases",
            "items": [
                "PostgreSQL",
                "MySQL",
                "MongoDB"
            ]
        },
        {
            "name": "Tools",
            "items": [
                "Git",
                "GitHub",
                "Postman",
                "IntelliJ IDEA",
                "VS Code",
                "Maven"
            ]
        },
        {
            "name": "Concepts",
            "items": [
                "OOP",
                "Data Structures",
                "Algorithms",
                "MVC",
                "RBAC",
                "Exception Handling",
                "Microservices"
            ]
        },
        {
            "name": "Testing",
            "items": [
                "Mockito",
                "JUnit"
            ]
        }
    ],
    "projects": [
        {
            "title": "HRMS — Human Resource Management System",
            "repo": "https://github.com/Ommishra1221/HRMS",
            "description": "A human resource management application with a React frontend and Spring Boot microservices for employee records, leave, attendance, and payroll.",
            "details": [
                "Employee records, leave requests, attendance tracking, and payroll management",
                "JWT authentication with ADMIN, HR, and EMPLOYEE roles and employee-level ownership checks",
                "API Gateway and Eureka discovery with OpenFeign service calls and PostgreSQL persistence"
            ],
            "technologies": [
                "Java",
                "Spring Boot",
                "Spring Security",
                "Spring Cloud",
                "Spring Data JPA",
                "PostgreSQL",
                "React",
                "Maven"
            ]
        },
        {
            "title": "E-Commerce Backend System",
            "repo": "https://github.com/Ommishra1221/ecommerce-springboot-react",
            "live": "https://frontend-wine-seven-27.vercel.app/",
            "description": "A secure commerce backend designed around clear product, user, and order workflows.",
            "details": [
                "JWT authentication with role-based access control",
                "JPA/Hibernate data layer with MySQL persistence"
            ],
            "technologies": [
                "Java",
                "Spring Boot",
                "Spring Security",
                "MySQL"
            ]
        },
        {
            "title": "Leave Management System",
            "repo": "https://github.com/Ommishra1221/Leave-Management-System",
            "description": "A structured employee leave workflow from application through administrator approval.",
            "details": [
                "Authentication and administrator approval workflow",
                "JPA-backed leave, user, and status data model"
            ],
            "technologies": [
                "Java",
                "Spring MVC",
                "MySQL",
                "JPA"
            ]
        }
    ],
    "experience": [
        {
            "date": "JUL 2026 — PRESENT",
            "role": "Associate Software Engineer (Trainee)",
            "company": "AASHDIT Technologies",
            "location": "Bhubaneswar, Odisha · In person",
            "points": [
                "Developing and maintaining backend applications with Java, Spring Boot, and REST APIs.",
                "Designing scalable modules with MVC, OOP, MySQL, and JPA/Hibernate conventions.",
                "Collaborating with Git, GitHub, Postman, and IntelliJ IDEA across feature delivery and API testing."
            ]
        },
        {
            "date": "APR 2026 — JUN 2026",
            "role": "Java Developer Intern",
            "company": "Bariflo Cybernetics Private Limited",
            "location": "Bhubaneswar, Odisha · In person",
            "points": [
                "Developed backend services with Java, Spring Boot, REST APIs, and MVC architecture.",
                "Contributed to a CMMS application through database schemas, REST APIs, and role-based access control.",
                "Applied Git/GitHub version control and industry-standard development practices."
            ]
        }
    ],
    "education": [
        {
            "dates": "AUG 2022 — MAY 2026",
            "qualification": "B.Tech in Computer Science & Engineering",
            "institution": "GITA Autonomous College, Bhubaneswar",
            "result": "8.01 / 10"
        },
        {
            "dates": "2020 — 2022",
            "qualification": "Class XII — CBSE",
            "institution": "DAV Public School, Bokaro Steel City, Jharkhand",
            "result": "73%"
        }
    ]
};

export const portfolioSections = [
    {id: 'about', label: 'About Me', path: '/about'},
    {id: 'projects', label: 'Projects', path: '/projects'},
    {id: 'skills', label: 'Skills', path: '/skills'},
    {id: 'experience', label: 'Experience', path: '/experience'},
    {id: 'education', label: 'Education', path: '/education'},
    {id: 'resume', label: 'Resume', path: '/resume'},
    {id: 'contact', label: 'Contact', path: '/contact'},
] as const;
export type PortfolioSectionId = typeof portfolioSections[number]["id"];
export default portfolioContent;
