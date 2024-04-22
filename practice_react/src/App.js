import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode Enabled", 'Success');
      document.querySelector('#my-box').style.backgroundColor = 'grey';
      document.querySelector('#h1').style.color = 'white';
      document.querySelectorAll('#summary').forEach(element => {
        element.style.color = 'white';
      });
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Adjust background color for light mode
      showAlert("Light mode Enabled", 'Success');
      document.querySelector('#h1').style.color = 'black';
      document.querySelectorAll('#summary').forEach(element => {
        element.style.color = 'black';
      });
    }
    document.querySelector('#my-box').style.background = 'white';
  };

  return (
    <>
      <Router>
        <Navbar title="VyroVerse" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter Text Here" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
