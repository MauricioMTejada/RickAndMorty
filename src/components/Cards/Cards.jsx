import Card from "../Card/Card";
import style from "./Cards.module.css";

const characters2 = [{ id: 8 }, { id: 22 }];

export default function Cards({ characters, onClose }) {
  /*   return (
    <div className={style.containerCards}>
      <h1>hola</h1>
      {console.log(characters2)}
      {console.log(characters.id)}
      {characters2.map(({ id }) => {
        console.log(characters2.id);
      })}
      <h2>prueba</h2>
    </div>
  ); */

  return (
    <div className={style.containerCards}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
