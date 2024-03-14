import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home';
import { useState } from 'react';

function App() {

  const [lan,setLang] = useState("");
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
           <Route path='/' element={<Home lan={lan} setLang={setLang}  />}  />
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
