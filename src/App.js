import "./App.css";
import style from "./components/App/App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import MiFuncion from "./components/MiComponente/MiComponente";
import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function App() {
  //! Hooks
  const [characters, setCharacters] = useState([]); //debe inicializar con un array vacío; "[]".
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  //! Credenciales
  const username = "mauricio@yahoo.com";
  const password = "mipass123";

  //! Event Handlers
  const personajes = [
    {
      id: "8",
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Citadel of Ricks",
        url: "https://be-a-rym.up.railway.app/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      episode: ["https://be-a-rym.up.railway.app/api/episode/28"],
      url: "https://be-a-rym.up.railway.app/api/character/8",
      created: "Wed Jan 18 2023 18:38:03 GMT+0000 (Coordinated Universal Time)",
    },
    {
      id: "23",
      name: "Arcade Alien",
      status: "unknown",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: { name: "unknown", url: "" },
      location: {
        name: "Immortality Field Resort",
        url: "https://be-a-rym.up.railway.app/api/location/7",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/23.jpeg",
      episode: [
        "https://be-a-rym.up.railway.app/api/episode/13",
        "https://be-a-rym.up.railway.app/api/episode/19",
        "https://be-a-rym.up.railway.app/api/episode/21",
        "https://be-a-rym.up.railway.app/api/episode/25",
        "https://be-a-rym.up.railway.app/api/episode/26",
      ],
      url: "https://be-a-rym.up.railway.app/api/character/23",
      created: "Wed Jan 18 2023 18:38:03 GMT+0000 (Coordinated Universal Time)",
    },
  ];

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b49466414a22.081d55c7aa0b92969e89";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID o Ya fue ingresado");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  //! Render
  return (
    <div className="App" style={{ padding: "5px" }}>
      <div className={style.fondoApp}>
        <div className={style.navegacion}>
          {
            /*Muestro la barra de navegación si phatname != "/" */
            pathname !== "/" && <Nav onSearch={onSearch} />
          }
        </div>
        <hr />

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          {/* se cambia "characters" por "personajes" */}
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/miruta" element={<MiFuncion />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
