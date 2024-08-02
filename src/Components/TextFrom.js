import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function TextFrom(props) {
  const [text, setText] = useState("Enter text here");
  const [highlightedText, setHighlightedText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to uppercase!');
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted to lowercase!');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared!');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    if (props.searchQuery) {
      const regex = new RegExp(`(${props.searchQuery})`, 'gi');
      const newText = text.replace(regex, '<mark style="background-color: yellow; color: black;">$1</mark>');
      setHighlightedText(newText);
    } else {
      setHighlightedText(text);
    }
  }, [props.searchQuery, text]);

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words & {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Search Result</h4>
        <div dangerouslySetInnerHTML={{ __html: highlightedText }}></div>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

TextFrom.propTypes = {
  heading: PropTypes.string.isRequired,
  searchQuery: PropTypes.string,
  showAlert: PropTypes.func.isRequired,
};







