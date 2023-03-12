
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";



function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
      <TextForm heading='Enter the text to analyze below' />
      <About />


    </>
  );
}

export default App;
