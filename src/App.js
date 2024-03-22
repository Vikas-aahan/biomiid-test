import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import { useEffect, useState } from 'react';

function App() {

  useEffect(()=>{
    const lan = localStorage.getItem("language");
    console.log("lan==>",lan);
    if(lan === null){
      localStorage.setItem("language", "en");    
      window.location.reload();
    }
  })
  return (
    
    <div className="App">
       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home  />}  /> 
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
