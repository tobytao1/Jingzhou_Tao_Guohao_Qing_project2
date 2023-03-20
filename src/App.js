import logo from './logo.svg';
import './App.css';
import React from "react";
import Rule from "./components/rule";
import Choose from "./components/home";
import RulePage from './views/rulePage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Normal from "./views/normalGamePage.js";
import Hard from "./views/hardGamePage.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="/" element = {<Choose/>}/>
      <Route exact path="/normal" element = {<Normal/>}/>     
      <Route exact path="/rule" element = {<RulePage/>}/>     
      <Route exact path="/hard" element = {<Hard/>}/>  
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
