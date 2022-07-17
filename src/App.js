// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {  useState } from 'react';
import Alert from './components/Alert';
import { useSyncExternalStore } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, state) => {
    setAlert({

      msg  : message,
      state : state
      
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const [mode, setmode] = useState('light');   //wheter dark mode enable or not

  const toggleMode = (msg) => {                  //changes mode
      console.log(msg)  
      document.body.className=''
      document.body.classList.add('bg-'+msg) 
  //   if (mode === 'dark'){
  //       setmode('light');
  //       document.body.style.backgroundColor = 'white';
  //       showAlert("light mode is enabled ",'success ');
  //     }

  //     else{
  //       setmode('dark')
  //       document.body.style.backgroundColor = '#042743';
  //       showAlert("dark mode is enabled ",'success ');
  //     }
  }



  return (
    <>
    <Router>
      <Navbar  title="MyWorld" mode ={mode} toggleMode={ toggleMode }/>
      <Alert alert={alert}/>
      <div className="container">
      
        <Routes>
            {/* rezct does partial matching hence we have to use exact  */}
            <Route exact path="/about" element={<About/>}>     
              
            </Route>

            <Route exact path="/" element={<TextForm tittle="Entery for text" text="limit 100 words" mode = {mode}/>}>
              
            </Route>
                       
          </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;

