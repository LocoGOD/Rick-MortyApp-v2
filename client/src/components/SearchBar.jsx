import { useState } from "react";

export default function SearchBar({onSearch}) {
   let [id,setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   //const handleInputChange = (event) => {
     // const { value } = event.target;
      
      //setZoo((prevZoo) => ({...prevZoo,zooName: value}));
    //};
  

   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>  
         <button onClick={ () =>{onSearch(id); setId("")}}>Agregar</button>
      </div>
   );
}
      //EN IMPUTS USAMOS ONCHANGE Y EN BOTONES ONCLICK//
//ATENCION A COMO USAR EL CALLBACK EN ONSEARCH, LO PASAMOS COMO OTRA FUNCION YA QUE SI NO SE EJECUTA SOLO, AL HACER CLICK PASARA ESO//
      //PARA BORRAR INPUT, USAMOS EL SETID Y FIJAMOS COMO STRING VACIO, CUIDADO CON EL ORDEN, PRIMERO LLAMA A FUNCION, Y LUEGO BORRA//