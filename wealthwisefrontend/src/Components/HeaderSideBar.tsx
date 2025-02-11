import React from 'react';
import SideNavBar from './SideNavBar/SideNavBar.tsx';
import './HeaderSideBar.tsx.css';
interface HeaderSideBarProps {
    children: React.ReactNode;
}

const HeaderSideBar: React.FC<HeaderSideBarProps> = ({ children }) => {
    return (
        <>
            <header className="header">
                <h1>WealthWise Financial Advisors</h1>
            </header>
            <SideNavBar />
            <div>
                {children}
            </div>
        </>
        
    );
}

HeaderSideBar.displayName = 'HeaderSideBar';

export default React.memo(HeaderSideBar);