import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]=useState("light")

  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');    
    }
  
  else{
    setMode('light')
  }
}
  return (
    <>
    <Navbar title="VyroVerse" mode={mode} toggleMode={toggleMode}/>
    <div>
      <TextForm heading="Enter Text Here"/>
    </div>
    <div>
     <About/>
    </div>
    </>
  );
}

export default App;
