
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const popAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      popAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      popAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' popAlert={popAlert} />} />

          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
