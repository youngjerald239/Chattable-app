import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    //BEM Namming convention
    <div className="App">

       {/* Sidebar */}
      <Sidebar/>
       {/* Feed */}
      <Feed/>
       {/* Widgets */}
    </div>
  );
}

export default App;
