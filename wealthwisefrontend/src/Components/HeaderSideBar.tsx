import React from 'react';
import './HeaderSideBar.tsx.css';
import SideNavBar from './SideNavBar/SideNavBar';
interface HeaderSideBarProps {
    children: React.ReactNode;
}

/**
 * Component that allows for the header and sidebar to be displayed on the page.
 */
const HeaderSideBar: React.FC<HeaderSideBarProps> = ({ children }) => {
    return (
        <>
            <header className="header">
                <h1>WealthWise Financial Advisors</h1>
            </header>

            <div className="sidebar">
                <SideNavBar />
            </div>
            
            <div className="content">
                {children}
            </div>
        </>
        
    );
}

HeaderSideBar.displayName = 'HeaderSideBar';

export default React.memo(HeaderSideBar);