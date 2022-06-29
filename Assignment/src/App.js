import "./App.css";

import { useState,useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Content from "./Components/Content";
import Result from "./Components/Result";



function App() {
  
  useEffect(()=>{
    
     localStorage.clear();
  },[])
  
  
  return (
    <div className="container"> 
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/Result" element={<Result />} />
      </Routes>
     </BrowserRouter>
      
     
    </div>
  );
}

export default App;
