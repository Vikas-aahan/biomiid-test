import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import { useEffect, useState } from 'react';
import TermCondition from './page/term-condition';
import PrivacyPolicy from './page/privacy-policy';

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
    
    <div className="App" >
      
       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home  />}  /> 
           <Route path='/term-of-service' element={<TermCondition  />}  /> 
           <Route path='/privacy-policy' element={<PrivacyPolicy  />}  /> 
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
