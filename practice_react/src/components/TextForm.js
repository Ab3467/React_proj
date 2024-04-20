    import React, { useState } from 'react';

    export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");

    const toUpperCase = () => {
        setText(text.toUpperCase());
    }

    const toLowerCase = () => {
        setText(text.toLowerCase());
    }

    const ClearWords = () => {
        let clear =  " ";
        setText(clear)
    }

    const handleinverseclick = () => {
        console.log("inverse click is triggered");
        let newtext = "";
        for (let i = text.length - 1; i >= 0; i--) {
        newtext += text[i];
        }
        setText(newtext);
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div style={{ textAlign: 'center', margin: 'auto', width: '80%' }}>
        <h1 className='mt-5'>{props.heading}</h1>
        <div className="ml-5 mt-5">
            <textarea className="mt-1 ml-1 form-control" name="form-control" value={text} onChange={handleChange} id="my-box" rows="20" cols="100"></textarea>
        </div>
        <div className="mt-3">
            <button className='btn btn-primary mr-2' style={{ marginRight: '0.5rem', padding: '0.5rem 1rem' }} onClick={toUpperCase}>Convert to UpperCase</button>
            <button className='btn btn-primary' style={{ padding: '0.5rem 1rem' }} onClick={toLowerCase}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' style={{ padding: '0.5rem 1rem' }} onClick={ClearWords}>Clear TextForm</button>
            <button className='btn btn-primary mx-1' style={{ padding: '0.5rem 1rem' }} onClick={handleinverseclick}>Inverse</button>
        </div>
        <div className="container mt-5">
            <h1>Text Summary</h1>
            <p>Characters: {text.length} Words: {text.split(" ").length}</p>
        </div>
        </div>
    )
    }
