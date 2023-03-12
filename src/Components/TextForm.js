import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        setText(" ");
    }

    const handleOnChange = (event) => {
        // console.log('onChange') 
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter text here');
    // text = 'New text';
    // setText('Fucking text');

    return (
        <div className='container'>
            <div className='container my-3'>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleUpClick}> Covert to Uppercase </button>
                <button type="button" className="btn btn-info mx-2" onClick={handleLoClick}> Covert to Lowercase </button>
                <button type="button" className="btn btn-warning mx-2" onClick={handleClearClick} >Clear Text</button>
                <button type="button" className="btn btn-success mx-2" onClick={handleCopy} >Copy Text</button>
                <button type="button" className="btn btn-danger mx-2" onClick={removeExtraSpaces} >Remove Extra Spaces</button>


            </div>

            <div className='container my-4'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <span>{0.008 * text.split(" ").length} Minutes read </span>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </div>
    );
};
