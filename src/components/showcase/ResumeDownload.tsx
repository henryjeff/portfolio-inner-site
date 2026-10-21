import React from 'react';

export interface ResumeDownloadProps {
    altText?: string;
}

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => (
    <div className="resume-placeholder" role="status">
        <h3>{altText || 'Resume'}</h3>
        <p>[Resume unavailable. Add an owner-provided resume PDF.]</p>
    </div>
);

export default ResumeDownload;
