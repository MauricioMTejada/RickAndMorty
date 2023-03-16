import style from "./SearchBar.module.css";
import { useState } from 'react';

export default function SearchBar({onSearch}) {

   const [id,setId] = useState("")

   const handleChange = (event) => {
      setId(event.target.value ); 
   }

   return (
      <div 
         className={style.espacioSearchBar}
      >
         <input 
            type='search' 
            onChange={handleChange}
         />

         <button 
            className={style.estiloBotonSB} 
            onClick={() => onSearch(id)}
         >
            Agregar
         </button>

      </div>
   );
}
