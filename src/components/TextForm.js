import React, { useState } from 'react'

export default function TextForm() {
    
    const changeToUppercase = ()=> {
        let newText= text.toUpperCase();
        console.log(newText)
        changeTextValue(newText);
    }
    
    const changeToLowercase = () => {
        console.log(text)
        let newText = text.toLowerCase();
        changeTextValue(newText);
    }
    
    const handleOnChange = (event)=> {
        changeTextValue(event.target.value);
    }

    const findWordCount= ()=> {
        const splittedArray = text.split(' ')
        if(splittedArray.length === 1) {
            return splittedArray[0] === '' ? 0 : 1;
        }
        console.log(splittedArray[splittedArray.length -1])
        return splittedArray[splittedArray.length -1] === '' ? (splittedArray.length -1) :  splittedArray.length;
    }
    let [text, changeTextValue] = useState("");

  return (
    <>
        <div className="container">
            <div className="my-3">
            <textarea rows="8" className="form-control py-2" onChange={handleOnChange} value={text} id="floatingTextarea"></textarea>
            </div>
            <button type="button" onClick={changeToUppercase} className="btn btn-primary mx-1 my-2">Convert To UpperCase</button>
            <button type="button" onClick={changeToLowercase} className="btn btn-primary mx-1 my-2">Convert To LowerCase</button>
        </div>

        <div className="container my-3">
            <h3>Below is the text summery:</h3>
            <p>{findWordCount()} words and {text.length} characters.</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
