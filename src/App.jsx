import './App.css'
import Introduction from "./components/Introduction.jsx";
import Presenting from "./components/Presenting.jsx";
import Transition from "./components/Transition.jsx";
import LifeSection from "./components/LifeSection.jsx";
import SkillsTools from "./components/SkillsTools.jsx"
import { useState } from 'react';

function App() {
  const [idiom,setIdiom] = useState("EN");

  return (
    <div className="app">
        <Introduction idiom={idiom} setIdiom={setIdiom} />
        <SkillsTools/>
    </div>
  )
}

export default App
