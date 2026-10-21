import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

const Contact: React.FC<ContactProps> = () => (
    <div className="site-page-content">
        <h1>Contact</h1>
        <div className="text-block">
            <p>Email: [Add contact email]</p>
            <p>LinkedIn: [Add LinkedIn profile]</p>
            <p>Other social profile: [Add a profile URL]</p>
            <p>Contact form is disabled until a new endpoint is approved.</p>
            <button className="site-button" type="button" disabled>
                Contact form unavailable
            </button>
        </div>
        <ResumeDownload altText="Resume unavailable" />
    </div>
);

export default Contact;
