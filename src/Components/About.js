import React from 'react'
import { Link } from 'react-router-dom'


export default function About(props) {
    document.title='TesxtUtils - About'; 
  return (
    <>
    <h1>About TextUtils</h1>
    <h5 className='mt-3'>Welcome to TextUtils!</h5>
    <div className='container  my-3 p-2'>
    <p className='container'>TextUtils is a powerful, yet simple tool designed to make text manipulation easy and efficient. Whether you need to format your text, analyze it, or transform it in various ways, TextUtils is here to help.</p>
    </div>
       <div className={`card text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}` } >

  <div className="card-header" >
  Key Features:
  </div>
  <div className="card-body">
    <h5 className="card-title">Text Transformation:</h5>
    <p className="card-text"> Convert text to uppercase, lowercase, or clear the text entirely with just a click.</p>
  </div> <div className="card-body">
    <h5 className="card-title">Text Analysis:</h5>
    <p className="card-text">Get real-time feedback on word count, character count, and an estimate of reading time.</p>
  </div> <div className="card-body">
    <h5 className="card-title">Preview: </h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  </div> <div className="card-body">
    <h5 className="card-title">Dark and Light Mode:</h5>
    <p className="card-text">Switch between dark and light modes for a comfortable viewing experience, day or night.</p>
  </div>
</div>

    <h5 className='mt-5'>Our Mission</h5>
    <div className='container  my-3 p-2'>
    <p className='container'>Our mission is to provide a user-friendly, reliable, and free tool that helps people of all backgrounds manage their text efficiently. We believe that by simplifying text manipulation, we can help our users save time and focus on what truly matters—communicating their ideas effectively.</p>
    </div>
    </>
  )
}
