import './../../Definitions/Helpers.ts';
import "./SideNavBar.tsx.css";
import { SideNavBarController } from './SideNavBarController';

/**
 * SideNavBar component that displays the side navigation bar.
 * @returns the side navigation bar.
 * @usage <SideNavBar />
 */
function SideNavBar() {
    return (
        <>
            <div className="sideNavBar">
                <button type="button" className="toggle-menu-btn" onClick={() => {
                    SideNavBarController.getInstance().toggleSidebar();
                }}>
                    <div id="sidebarToggle">{"<"}</div>
                </button>

                <ul>
                    <li><a href="home.html">Home</a><hr /></li>
                    <li><a href="calculator.html">Calculator</a><hr /></li>
                    <li><a href="learning.html">Learning Center</a><hr /></li>
                    <li><a href="faq.html">FAQ's</a><hr /></li>
                    <li><a href="about.html">About Us</a></li>
                </ul>
            </div>
        </>
    );
}

export default SideNavBar;