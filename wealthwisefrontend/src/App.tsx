import './App.css';
import SideNavBar from './Components/SideNavBar.tsx';

function App() {
    return (
        <>
            <header className="header">
                <h1>WealthWise Financial Advisors</h1>
            </header>

            <div className="main-content">
                <div className="sidebar">
                    <SideNavBar />
                </div>

                <div className="content">
                    <h1>Compound interest calculator</h1>
                    <div className="mortgage-content">
                        <p>See if we can help you with your personal finance</p>
                        <button className="mortgage_button">Check Now</button>
                        <div style={{ marginBottom: '5em' }}></div>
                        <p>
                            lots of text
                            <div style={{ marginBottom: '10em' }}></div>
                            more texts
                            <div style={{ marginBottom: '10em' }}></div>
                            more!!!!
                            <div style={{ marginBottom: '50em' }}></div>
                            even more!!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
