import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState, useEffect } from 'react';
import axios from "axios";
import {Routes,Route, useLocation, useNavigate} from "react-router-dom"
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import Favorites from "./components/Favorites";
//import characters, {Rick} from './data.js'; (si no especificamos lo que queremos, como en el caso de characters, nos dara el default)

function App() {

   const [access,setAcess] = useState(false)
   const email = "darioperez201864@gmail.com"
   const password = "dario123"
   const navigate = useNavigate()

   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAcess(true)
         if(access===true) navigate("/home")
      }
   }

   useEffect(() => {!access && navigate('/')}, 
   [access])

   let [characters,setCharacters] = useState([])   //estado local de personajes

   const onSearch = (id) =>{      // llamada a la api con axios desde nuestro servidor LOCAL HOST 3001, SE COMUNICA CON EL BACK END                                  
      axios(`http://localhost:3001/rickandmorty/character/`+id).then( //hacemos la llamada a la api, luego, metodo THEN
         ({ data }) =>{  //.then, que se hace con los datos?, se hace destructuring ya que es un objeto y solo precisamos eso
         if (data.id) setCharacters((characters) => [...characters, data]) //hacemos una copia del estado local para mantener datos y
         else alert('¡No hay personajes con este ID!')                           //le agregamos el personaje nuevo!!
            }
         )
      }
   
   const onClose = (id) =>{
      const charactersFiltered = characters.filter(character => character.id !== parseInt(id))
      setCharacters(charactersFiltered)      //cierra el personaje, filtrando su id y dejando de renderizarlo
   }

   //const onSearch = () => {
    //setCharacters([...characters,example])} //usamos spread operator para "UNIFICAR" ambos arreglos, ya que al usar el metodo SET,
      //se pisa todo el arreglo y eso no es lo ideal. En este caso unimos el estado con la constante de ejemplo!
         //IMPORTANTE!!! = EN ARREGLOS NO PODEMOS USAR METODOS DE ARRAYS (PUSH,POP,SHIFT,UNSHIFT) Conviene usar spread(...)

   const location = useLocation()

   return (
      <div className='App'>
         {location.pathname!=="/" ? <Nav onSearch={onSearch}/> : null}
            <Routes>
               <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/detail/:id' element={<Detail/>}/>
               <Route path='/:error' element={<Error/>}/>
               <Route path='/' element={<Form login={login}/>}/>
               <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
            </Routes>
      </div>
   );
}

export default App;
