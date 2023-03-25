import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  /*     useEffect (() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "b49466414a22.081d55c7aa0b92969e89";  

        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => 
            setCharacter(response.data)); 
    }, 
    []); */

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "b49466414a22.081d55c7aa0b92969e89";

    fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        }
      });

    return setCharacter;
  }, [detailId]);

  //    console.log(character);
  //    console.log(detailId);

  return (
    <div>
      <h2>Nombre: {character.name}</h2>
      <p>Estatus: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Genero: {character.gender}</p>
      <p>Origen: {character.origin?.name}</p>
      <img src={character.image} alt="img" />
      <div>
        <Link to="/home">
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
