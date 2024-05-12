import React from "react";

import { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("Enter Text Here");
  const upperCaseConverter = (e) => {
    e.preventDefault();
    settext(text.toUpperCase());
    console.log(text);
  };
  const setTextData = function (e) {
    e.preventDefault();
    settext(e.target.value);
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpaces = (e) => {
    e.preventDefault();
    settext(text.split(/[  ]+/).join(" "));
  };

  const countWords = (text)=>{
    let newText = text.split(/[  ]+/).join(" ");
    let newTextArray = newText.split(/[ ]+/);
    console.log(newTextArray);
    let wordCount = 0;
    for(let i=0;i<newTextArray.length;i++){
      if(newTextArray[i]!=''){
        wordCount = wordCount + 1;
      }
    }
    return wordCount;
  }
  return (
    <>
    <div className="container" style={props.myStyle}>
        <form>
          <div className="mb-3">
            <label for="myBox" className="form-label">
              {props.heading}
            </label>
            <textarea
              type="email"
              className="form-control"
              id="myBox"
              aria-describedby="emailHelp"
              rows={8}
              value={text}
              onChange={setTextData}
            />
            <button
              className="btn btn-primary mx -3"
              onClick={upperCaseConverter}
            >
              Convert to Upper Case
            </button>
            <button
              className="btn btn-danger mx-3"
              onClick={(e) => {
                e.preventDefault();
                settext("");
              }}
            >
              Clear Text
            </button>
            <button className="btn btn-success mx-3" onClick={handleCopy}>
              Copy Text
            </button>
            <button
              className="btn btn-success mx-3"
              onClick={removeExtraSpaces}
            >
              Remove Extra Space
            </button>
          </div>
        </form>
      </div>
      <div className="container my-2">
        <h1> Your Text Summary </h1>
        <p>
          {" "}
          No of Letters in "{text}" is {text.length}
        </p>
        <p>
          {" "}
          No of words in "{text}" is {countWords(text)}
        </p>
        <p>
          {" "}
          TIme to Read "{text}" is {0.008 * countWords(text)} Minutes Read
        </p>
      </div>
    </>
  );
}
