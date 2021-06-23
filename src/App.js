import React from "react"
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Namming convention
    <div className="App">
      <h1>Jerald here, ready to build my own twitter app clone</h1>

       {/* Sidebar */}
      <Sidebar/>
       {/* Feed */}

       {/* Widgets */}
    </div>
  );
}

export default App;
