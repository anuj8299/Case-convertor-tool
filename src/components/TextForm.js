import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase! ", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase! ", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    console.log("I am COPY");
    var text = document.getElementById("my input");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="my input"
          rows="8"
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          ClearText
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleCopy}
        >
          CopyText
        </button>
        <button
          type="button"
          className="btn btn-primary my-3 mx-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here "}
        </p>
      </div>
    </>
  );
}
