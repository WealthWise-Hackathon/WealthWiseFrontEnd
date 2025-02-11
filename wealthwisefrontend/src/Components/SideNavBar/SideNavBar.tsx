import { useState, useEffect } from 'react';
import "./SideNavBar.tsx.css";
import './../../Helpers.ts';
import { SideNavBarController } from './SideNavBarController.ts';

function SideNavBar() {
    const [sideNavBarController, setSideNavBarController] = useState<SideNavBarController | null>(null);

    useEffect(() => {
        if (sideNavBarController === null) {
            setSideNavBarController(new SideNavBarController());
        }
    }, [sideNavBarController]);

    return (
        <>
            <div className="sideNavBar">
                <ul>
                    <li><a href="home.html">Home</a><hr /></li>
                    <li><a href="calculator.html">Calculator</a><hr /></li>
                    <li><a href="learning.html">Learning Center</a><hr /></li>
                    <li><a href="faq.html">FAQ's</a><hr /></li>
                    <li><a href="about.html">About Us</a></li>
                </ul>
                <button className="toggle-menu-btn" onClick={() => {
                    if (sideNavBarController !== null) {
                        sideNavBarController.toggleSidebar();
                    }
                }}>
                    <div id="sidebarToggle">{"<"}</div>
                </button>
            </div>
        </>
    );
}

export default SideNavBar;