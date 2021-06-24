import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    //BEM Namming convention
    <div className="App">
      <Sidebar/>
      <Feed/>
       <Widgets/>
    </div>
  );
}

export default App;
