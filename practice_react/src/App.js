import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [Alert,setAlert]=useState(null)

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      document.querySelector('#my-box').style.background='grey';
      document.querySelector('#h1').style.color = 'white';
      document.querySelectorAll('#summary').forEach(element => {
        element.style.color = 'white';
      });
      
    } else {
      setMode('light');
      document.body.style.background = 'white';
      document.querySelector('#h1').style.color = 'black';
      document.querySelectorAll('#summary').forEach(element => {
        element.style.color = 'black';
      });

    }
    document.querySelector('#my-box').style.background='white';
  };

  return (
    <>
      <Navbar title="VyroVerse" mode={mode} toggleMode={toggleMode} />
      <Alert alert={"I am Alert"}/>
      <div>
        <TextForm heading="Enter Text Here" />
      </div>
      <div>
        <About />
      </div>
    </>
  );
}

export default App;
