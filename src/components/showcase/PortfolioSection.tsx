import React from 'react';
import content, { PortfolioSectionId, portfolioSections } from '../../constants/portfolioContent';

const External = ({href, children}: {href: string; children: React.ReactNode}) =>
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

export default function PortfolioSection({section}: {section: PortfolioSectionId}) {
    return <main className="site-page-content professional-content" aria-label={portfolioSections.find(item => item.id === section)?.label}>
        <h1>{portfolioSections.find(item => item.id === section)?.label}</h1>
        {section === 'about' && <>
            <h2>{content.name}</h2><p className="professional-subtitle">{content.title} · {content.location}</p>
            <p>{content.intro}</p>
            <p>My work focuses on Java and Spring Boot backends, REST APIs, secure access control, and relational data models.</p>
            <External href={content.website}>Visit my portfolio</External>
        </>}
        {section === 'projects' && content.projects.map(project => <article className="professional-card" key={project.title}>
            <h2>{project.title}</h2><p>{project.description}</p>
            <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            <p><strong>Technologies:</strong> {project.technologies.join(' · ')}</p>
            <div className="professional-links"><External href={project.repo}>GitHub repository</External>
                {project.live && <External href={project.live}>Live demo</External>}</div>
        </article>)}
        {section === 'skills' && content.skills.map(group => <section className="professional-card" key={group.name}>
            <h2>{group.name}</h2><ul className="skill-list">{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </section>)}
        {section === 'experience' && content.experience.map(job => <article className="professional-card" key={job.company}>
            <h2>{job.role}</h2><h3>{job.company}</h3><p>{job.date} · {job.location}</p>
            <ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul>
        </article>)}
        {section === 'education' && content.education.map(item => <article className="professional-card" key={item.qualification}>
            <h2>{item.qualification}</h2><h3>{item.institution}</h3><p>{item.dates}</p><p>Result: {item.result}</p>
        </article>)}
        {section === 'resume' && <>
            <p>Om Kumar Mishra — Resume (PDF)</p>
            <div className="professional-links"><External href={content.resume}>View resume</External>
                <a href={content.resume} download="Om-Kumar-Mishra-Resume.pdf">Download resume</a></div>
        </>}
        {section === 'contact' && <>
            <p>Contact me directly or connect through my professional profiles.</p>
            <ul className="contact-list"><li><a href={`mailto:${content.email}`}>{content.email}</a></li>
                <li><External href={content.github}>GitHub — Ommishra1221</External></li>
                <li><External href={content.linkedin}>LinkedIn — Om Kumar Mishra</External></li></ul>
        </>}
    </main>;
}
