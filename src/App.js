import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{useRef, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
const [mode,setmode]=useState('light');
const [alert, setalert] = useState(null)
const [visible, setVisible] = useState(true);
let timeoutid =useRef(null);

const showalert=(message,type)=>{
  if (timeoutid.current) {
    clearTimeout(timeoutid.current);
  }
  setVisible(true); 
  setalert({
    msg: message,
    type: type
  })
  timeoutid.current=setTimeout(() => {
    setVisible(false); 
  }, 3000); 

 timeoutid.current= setTimeout(() => {
    setalert(null)
  }, 5000);
}
const toggleMode=()=>{
  if (mode === 'light') {
    setmode('dark')
    document.body.style.backgroundColor = '#042743';
    document.body.style.color = 'white';
    showalert('Dark mode Enabled','success')
  }else {
    setmode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showalert('Light mode Enabled','success')

  }
};
  return (
      <Router>
  <Alert alert={alert} visible={visible}/>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3 ">
  <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<Textform heading="Enter Your Text For Analyze" mode={mode} showalert={showalert} />} />
        </Routes>
  </div>
      </Router>
  );
}

export default App;
