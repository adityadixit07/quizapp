import { Provider, useSelector } from "react-redux";
import React from "react";
import Question from "./components/Question";
import Setting from "./components/Setting";
import FinalScreen from "./components/FinalScreen";
import "./App.css";

function App() {
  
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);
  let component;
  
  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Setting />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className="App">
      <div className="app-container">{component}</div>
      
    </div>
    
  );
}

export default App;
