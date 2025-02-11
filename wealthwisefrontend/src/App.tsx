// @ts-expect-error suppressing TS1259
import React from 'react';
import './App.css';
import HeaderSideBar from './Components/HeaderSideBar';

function App() {
    return (
        <>
            <HeaderSideBar>
                <div className="inner-content">
                    <h1>Compound interest calculator</h1>
                    <div className="calculator-content">
                        <p>See if we can help you with your personal finance</p>
                        <button className="calculator">Check Now</button>
                        <div style={{ marginBottom: '5em' }}></div>
                        <p>lots of text</p>
                        <div style={{ marginBottom: '10em' }}></div>
                        <p>more texts</p>
                        <div style={{ marginBottom: '10em' }}></div>
                        <p>more!!!!</p>
                        <div style={{ marginBottom: '50em' }}></div>
                        <p>even more!!</p>
                    </div>
                </div>
            </HeaderSideBar>
        </>
    );
}

export default App;
