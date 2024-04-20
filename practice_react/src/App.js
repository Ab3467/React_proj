
import './App.css';
import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
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
