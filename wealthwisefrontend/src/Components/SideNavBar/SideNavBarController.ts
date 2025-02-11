import * as Helpers from './../../Helpers.ts';
import { Singleton } from './../../Singleton.ts';
export class SideNavBarController extends Singleton<SideNavBarController> {

    readonly origSidePos: number;
    readonly sidebar: HTMLElement;
    readonly content: HTMLElement;
    readonly stretchtext: HTMLElement;
    readonly computedSidebarStyle: CSSStyleDeclaration;
    readonly computedContentStyle: CSSStyleDeclaration;
    readonly origContentPos: number;

    constructor() {
        super();
        this.sidebar = document.querySelector(".sideNavBar") as HTMLElement;
        this.content = document.querySelector(".content") as HTMLElement;
        this.stretchtext = document.querySelector(".toggle-menu-btn div") as HTMLElement;
        this.computedSidebarStyle = window.getComputedStyle(document.querySelector(".sideNavBar") as Element);
        this.computedContentStyle = window.getComputedStyle(this.sidebar as Element);

        this.origSidePos = Helpers.Style.parse(this.computedSidebarStyle.left)[0] as number;
        this.origContentPos = Helpers.Style.parse(this.computedContentStyle.left)[0] as number;
    }

    toggleSidebar() {
        const smoothSidebar: SmoothSidebar = new SmoothSidebar(0.5, 100);
        const origSidePos = window.getComputedStyle(this.sidebar).left;
        console.log("sidebar pos = " + origSidePos);
        if (this.sidebar.style.left === "-135px") {
            smoothSidebar.open();
        } else {
            smoothSidebar.close();
        }
    }
}
class SmoothSidebar {
    
    time: number;
    steps: number;
    openSidebarPos: number = -15;
    offset: number = -120;
    constructor(time: number, steps: number) {
        this.time = time;
        this.steps = steps;
    }

    private async openClose(time: number, steps: number, action: SidebarAction) {
        let eased;
        let x_scale;
        const sidebarPos: { start: number, end: number } = {
            start: this.openSidebarPos,
            end: this.openSidebarPos
        };
        switch (action) {
            case SidebarAction.open:
                sidebarPos.start += this.offset;
                break;
            case SidebarAction.close:
                sidebarPos.end += this.offset;
                break;
        }
        for (let i = 0; i <= steps; i++) {
            eased = Helpers.Easing.easeOutQuad(i / steps);
            SideNavBarController.getInstance().sidebar.style.left = Helpers.Easing.lerp(sidebarPos.start, sidebarPos.end, eased) + "px";
            SideNavBarController.getInstance().content.style.marginLeft = Helpers.Easing.lerp(160, 40, eased) + "px";
            x_scale = 2 * eased - 1;
            x_scale *= action == SidebarAction.open ? 1 : -1;
            SideNavBarController.getInstance().stretchtext.style.transform = "scale(" + x_scale + ",2.5)";
            await Helpers.Time.wait(time / steps);
        }
    }

    async close() {
        await this.openClose(this.time, this.steps, SidebarAction.close);
    }

    async open() {
        await this.openClose(this.time, this.steps, SidebarAction.open);
    }

}
enum SidebarAction {
    open,
    close
}


export default SideNavBarController;