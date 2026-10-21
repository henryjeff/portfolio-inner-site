import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import portfolioContent from '../../constants/portfolioContent';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm {portfolioContent.name}</h3>
            <br />
            <div className="text-block">
                <p>
                    {portfolioContent.title}. [Add a short professional
                    biography.]
                </p>
                <br />
                <p>
                    Thanks for visiting. [Add a personal introduction and
                    contact details when available.] See the{' '}
                    <a href={portfolioContent.repository} target="_blank" rel="noreferrer">
                        portfolio repository
                    </a>.
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Profile</h3>
                <br />
                <p>
                    Biography: [Add personal background.]
                </p>
                <br />
                <p>Education: [Add education, or remove this section.]</p>
                <br />
                <p>Skills: [Add skills and technical focus areas.]</p>
                <p>Interests: [Add interests, or remove this section.]</p>
                <p>Contact details: [Add email or another contact method.]</p>
                <Link to="/contact">Contact page</Link>
            </div>
        </div>
    );
};

export default About;
