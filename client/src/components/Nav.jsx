import React from "react";
import SearchBar from "./SearchBar";
import {Link} from "react-router-dom"

export default function Nav({onSearch}){
    return(
        <>
            <SearchBar onSearch={onSearch}/>
            <button><Link to="/about">Léeme!</Link></button>
            <button><Link to="/home">Home</Link></button>
            <button><Link to="/favorites">Favoritos</Link></button>
        </>
    )
}