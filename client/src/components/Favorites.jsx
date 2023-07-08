import { connect, useDispatch} from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import { useState } from "react";
import Card from "./Card";

const Favorites = ({myFavorites}) =>{
    const [aux,setAux] = useState(false) 
    const dispatch = useDispatch()

    const handleOrder = (event) => {setAux(!aux)
        dispatch(orderCards(event.target.value))}
    
    const handleFilter = (event) => {dispatch(filterCards(event.target.value))}

    
    return(
        <>
        
        <h1>Favoritos</h1>
        
        <h6>Ordenar por ID</h6>
        
        <select onChange={handleOrder}>
            <option>---</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <h6>Ordenar por género</h6>
        <select onChange={handleFilter}>
            <option>---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>

        <hr/>
        {myFavorites.map(favorite =>{return(
        <Card
        key={favorite.id}   // la propiedad key es interna de react y debe ir siempre que trabajemos con plantillas!
        id={favorite.id}    // aca vemos la propiedad ID, lo usamos nosotros para identificar, y no pisa al key!
        name={favorite.name} 
        gender={favorite.gender} 
        image={favorite.image}
        onClose={favorite.onClose}/>
        )})}
        
        </>
    )
}

const mapStateToProps = (state) =>{
    return{ myFavorites: state.myFavorites}
}

export default connect(mapStateToProps,null)(Favorites);