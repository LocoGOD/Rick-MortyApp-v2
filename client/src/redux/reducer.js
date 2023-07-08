import { ADD_FAV, REMOVE_FAV, FILTER_CARDS, ORDER_CARDS } from "./action-names";

const initialState = {
     myFavorites:[],
     filteredCharacters:[]}
   
const reducer = (state=initialState,action)=>{
   switch(action.type){
    
    case ADD_FAV: return{...state, 
        myFavorites: [...state.filteredCharacters,action.payload], //copiamos obj, y combinamos array con payload
        filteredCharacters: [...state.filteredCharacters,action.payload]}   //hacemos un array clon para filtrar y ordenar

    case REMOVE_FAV: return{...state, myFavorites: state.myFavorites.filter(fav => fav.id !== parseInt(action.payload))} 
   //filtramos personajes sacando a la ID del payload --- Se pueden aplicar metodos de array/objeto si no modifican al original!!

    case FILTER_CARDS: return{...state, myFavorites: state.filteredCharacters.filter(
        character => character.gender === action.payload)}      //filtramos por género 

    case ORDER_CARDS:
        const filteredCharactersCopy = [...state.filteredCharacters]   //hacemos copia ya que sort modifica el array en si mismo
        return{...state,myFavorites:                              //combinamos myFavorites con el array copia que se necesite
            action.payload === "D"                             //si se necesita ordenar alfabeticamente ( o sea, el payload es A...)
                ? filteredCharactersCopy.sort((a,b)=> b.id - a.id)      //se ordena el array copia con el metodo sort solicitado 
                : filteredCharactersCopy.sort((a,b)=> a.id - b.id)}  //de otro modo, se hara sort en el array copia de manera invertida

    default: return{...state}
   }
}

export default reducer;



