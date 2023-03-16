import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={style.containerTarjeta}>

         <div className={style.containerNB}>
            <div></div>
            <Link to={`/detail/${id}`}>
               <div className={style.fondoNombre}> 
                  <h2 className={style.nombre}>{name}</h2> 
               </div>
            </Link>
            <div> 
               <button className={style.Boton} 
                  onClick={() => onClose(id)}>
               </button> 
            </div>
         </div> 

         <div className={style.imagen}>
            <img src={image} alt="" />
         </div>   

         <div className={style.containerEG}>
            <div className={style.especieGenero}><h2 className={style.fuenteEspecieGenero}>{species}</h2></div>
            <div className={style.especieGenero}><h2 className={style.fuenteEspecieGenero}>{gender}</h2></div>
         </div>
         
         
      </div>
   );
}


