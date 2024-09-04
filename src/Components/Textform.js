import React, { useState } from 'react';

export default function Textform(props) {
  document.title='TesxtUtils - Home'; 

  const intouppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert('Text convert to upper Case','success')

  };

  const intolowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert('Text convert to lower Case','success')

  };
  const clear = () => {
    setText('');
    props.showalert('All Text Clear','success')

  };

  const handletext = (event) => {
    setText(event.target.value);
  };

const copytext=()=>{
  let text = document.getElementById('myBox')
  text.select();
  text.setSelectionRange(0,9);
  // navigator.clipboard.writeText(text.value).then(()=>{
  //   alert('Copied Text')
  // }).catch(err=>{
  //   console.error('Error! Text not copied',err)
  // })
 document.execCommand('copy');
 props.showalert('Text copied','success')
};
  const [text, setText] = useState('');

  return (
    <div>
      <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
      
      <div className="mb-3">
        <div className="container bttn  position-absolute d-flex justify-content-end ">
      <button className={`btn position-absolue text-${props.mode === 'light' ? 'dark' : 'light'} btn-outline-secondary border border-1 rounded mx-3 my-1 `} onClick={copytext}>
        Copy Text !
      </button>
        </div>
        <textarea
          className="form-control "
          id="myBox"
          value={text}
          onChange={handletext}
          rows="6"
          style={{
            backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
        ></textarea>
        
      </div>
      <div className="container d-flex justify-content-center">

      <button className="btn btn-primary mx-2 my-3" onClick={intouppercase}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2 my-3" onClick={intolowercase}>
        Convert to Lowercase
      </button>
      
      
      </div >
      <div className=" container d-flex  justify-content-center">

      <button className="btn btn-danger mx-2 my-3 " onClick={clear}>
        Clear
      </button>
      </div>

      <div className={`container my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter(word => word.length > 0).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
      </div>
    </div>
  );
}
