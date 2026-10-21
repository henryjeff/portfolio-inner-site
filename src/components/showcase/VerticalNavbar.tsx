import React from 'react';
import { NavLink } from 'react-router-dom';
import content, { portfolioSections } from '../../constants/portfolioContent';

export default function VerticalNavbar() {
    return <nav className="professional-nav" aria-label="Portfolio sections">
        <div className="professional-nav-heading"><h2>{content.name}</h2><p>{content.title}</p></div>
        {portfolioSections.map(section => <NavLink key={section.id} to={section.path}
            className={({isActive}) => isActive ? 'professional-nav-link active' : 'professional-nav-link'}>{section.label}</NavLink>)}
    </nav>;
}
