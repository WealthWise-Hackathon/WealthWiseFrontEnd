// @ts-expect-error suppressing TS1259
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './calculator.tsx.css'
import HeaderSideBar from '../Components/HeaderSideBar';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HeaderSideBar>
            <div className="inner-content">
                <h1>Compound interest calculator</h1>
                <div className="calculator-content">
                    <p>See if we can help you with your personal finance</p>
                    <button className="calculator">Check Now</button>
                    <div style={{ marginBottom: '5em' }}></div>
                    <p>text to demonstrate the fixed HeaderSideBar</p>
                    <div style={{ marginBottom: '10em' }}></div>
                    <p>more text</p>
                    <div style={{ marginBottom: '10em' }}></div>
                    <p>even more text</p>
                    <div style={{ marginBottom: '50em' }}></div>
                    <p>Implemented with the React framework in TypeScript.</p>
                </div>
            </div>
        </HeaderSideBar>
    </StrictMode>
)