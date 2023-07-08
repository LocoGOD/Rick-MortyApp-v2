import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () =>{
    
    const [character,setCharacter] = useState({})

    const {id} = useParams()    // TOMAMOS LA RUTA DINAMICA CON USEPARAMS

    useEffect(() => {
        axios("http://localhost:3001/rickandmorty/character/"+id).then(({ data }) => {
            if (data.name) {setCharacter(data)} 
            else alert('No hay personajes con ese ID')}  )
            
        return setCharacter({})}, 
            [id]);  // CADA VEZ QUE CAMBIE ESTE ID, SE RE EJECUTARA LA LLAMADA A AXIOS, DE ESO DEPENDE EL USE EFEECT!
   
    return(
        <div>
            <h1>Informacion del personaje:</h1>
              {character? /*esto es renderizado condicional, si la informacion llego al estado character, se mostrara, sino no*/  <>                    
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>                   
                    <img src={character.image} alt={character.name}/>
               </> :null}   
        </div>           /*tambien podemos hacer condicional con un signo de pregunta en el elemento, como en origin?*/ 
    )
}

export default Detail;