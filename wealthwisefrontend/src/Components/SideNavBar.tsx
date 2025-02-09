import "./SideNavBar.tsx.css"

function SideNavBar() {
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
                <button className="toggle-menu-btn" onClick={() => SidebarController.toggleSidebar()}>
                    <div id="sidebarToggle">{"<"}</div>
                </button>
            </div>
            
        </>
    );
}

class SidebarController {
    static sidebar: HTMLElement;
    static content: HTMLElement;
    static stretchtext: HTMLElement;
    static startPos: string;

    static toggleSidebar() {
        this.sidebar = document.querySelector(".sideNavBar") as HTMLElement;
        this.content = document.querySelector(".content") as HTMLElement;
        this.stretchtext = document.querySelector(".toggle-menu-btn div") as HTMLElement;
        //this.startPos = this.sidebar.style.left;
        if (this.sidebar.style.left === "-135px") {
            this.smoothOpenSidebar();
        } else {
            this.smoothCloseSidebar();
        }
    }

    static async smoothCloseSidebar() {
        const time = 0.5;
        const steps = 100;
        let eased;
        let x_scale;
        for (let i = 0; i <= steps; i++) {
            eased = this.easeOutQuad(i / steps);
            this.sidebar.style.left = this.lerp(-15, -135, eased) + "px";
            this.content.style.marginLeft = this.lerp(160, 40, eased) + "px";
            x_scale = 1 - 2 * eased;
            this.stretchtext.style.transform = "scale(" + x_scale + ",2.5)";
            await this.wait(time / steps);
        }
        this.stretchtext.style.transform = "scale(-1,2.5)";
    }

    static async smoothOpenSidebar() {
        const time = 0.5;
        const steps = 100;
        let eased;
        let x_scale;
        for (let i = 0; i <= steps; i++) {
            eased = this.easeOutQuad(i / steps);
            this.sidebar.style.left = this.lerp(-130, -15, eased) + "px";
            this.content.style.marginLeft = this.lerp(50, 160, eased) + "px";
            x_scale = 2 * eased - 1;
            this.stretchtext.style.transform = "scale(" + x_scale + ",2.5)";
            await this.wait(time / steps);
        }
    }

    static async wait(seconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    }

    static lerp(start: number, end: number, t: number) {
        return start * (1 - t) + end * t;
    }

    static easeOutQuad(t: number) {
        return t * (2 - t);
    }
}

export default SideNavBar;