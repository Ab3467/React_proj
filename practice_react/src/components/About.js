import React, { useState } from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const DarkMode = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <>
            <div className='container' style={myStyle}>
                <h2 className='my-3'>About Us</h2>
                <div className="accordion" id="accordionExample">
                    {/* Accordion items */}
                </div>
                <div className="container my-3">
                    <button onClick={DarkMode} className='btn btn-primary' type='button'>{btnText}</button>
                </div>
            </div>
        </>
    )
}
