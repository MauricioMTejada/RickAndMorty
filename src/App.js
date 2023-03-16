import './App.css'
import style from "./components/App/App.module.css";
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav"
import About from './components/About/About';
import Detail from "./components/Detail/Detail";
import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';



function App () {

  const [characters, setCharacters] = useState([]); 

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b49466414a22.081d55c7aa0b92969e89";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !characters.find((char) => char.id === data.id)) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID o Ya fue ingresado');
          }
       });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return ( 
     <div className='App' style={{ padding: '5px' }}>
      <div className={style.fondoApp}>

        <div className={style.navegacion}> 
          <Nav onSearch={onSearch}/>
        </div>

        <hr />

        <Routes>
          <Route 
            path = "/home" 
            element = {<Cards characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About />} />
          <Route path="/detail/:detailId" element={<Detail/>} />

        </Routes>



      </div>
    </div>      
  )
}

export default App
