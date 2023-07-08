import {Link,useLocation} from "react-router-dom"
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

function Card({id,name,status,species,gender,origin,image,onClose, //props recibidas de Cards
   addFav,removeFav,myFavorites}) { //props recibidas de parte de redux, informacion del obj global y acciones a despachar
   
   const [isFav,setIsFav] = useState(false)  //estado para verificar favoritos
   
   const location = useLocation()

   const handleFavorite = () =>{          //esta funcion valida si la card es un fav o no, pensada para ejecutarse en un boton
     
      if(isFav===true){ setIsFav(false)      //en caso que si, setea fav a false (desactiva el boton) y ejecuta la funcion
         removeFav(id)}  //removeFav, que despachará una accion al reducer para filtrar esa id, y sacarla del estado global favoritos

      if(isFav===false){ setIsFav(true)   // en caso contrario, setea fav a true (activa el boton), y ejecuta la funcion
         addFav({id,name,status,species,gender,origin,image,onClose})}} // addFav, que recibe a todo el personaje
      //(esta puesto asi ya que le hicimos destructuring, sino seria props unicameante). Esta funcion despacha una accion al reducer
      //con estas props, agregandolas al estado global de favoritos
   

   useEffect(() => {myFavorites.forEach(fav => { //este useEffect permite que los favoritos no se borren al cambiar de componente--
      if(fav.id === id) setIsFav(true) } ); //Lo hace recorriendo el array de myFavorites y por cada uno evalua si su ID de Card
   }, [myFavorites]);                           //coindide con el del array. En ese caso, lo setea en true(se vuelve favorito)


   return ( //renderizado
      <div>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}
{/*Boton de favorito, que depende del estado isFav, dependiendo del estado isFav, cambia el color y ejecuta la funcion handleFavorite*/}
{/*Se aplica un ternario sin condicion especifica (?), por lo que se evalua por defecto si es ToF,adecuandose a nuestras necesidades*/}

         {location.pathname==="/home" ? <button onClick = {() => onClose(id)}>X</button> :null}
         <Link to={"/detail/"+id}><h2>{name}</h2></Link>
         <img src={image} alt='personaje' />
      </div>
   );
}

const mapStateToProps = (state) =>{       
   return{myFavorites : state.myFavorites}         //nos traemos del estado global, el array de favoritos, nombrado myFavourites
}

const mapDispatchToProps = (dispatch) =>{return{      
   addFav: (character) => { dispatch(addFav(character)) },  //creamos una funcion addFav que sirva para despachar la accion al reducer
   removeFav: (id) => { dispatch(removeFav(id)) }   //se ejecutaran al hacer click en el boton de favorito dependiendo el valor del 
   //estado isFav, ya sea añadiendo o filtrando y borrando. Los parametros son los mismos que declaramos en su respectiva action
}} 

export default connect(mapStateToProps,mapDispatchToProps)(Card); //connect para traer las funciones de redux