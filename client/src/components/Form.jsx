import { useState } from "react";
import validations from "./Validations";

const Form = ({login}) =>{

    const [userData,setUserData] = useState({
        email:"",
        password:""})

    const [errors,setErrors] = useState({})

    const handleUserData = (event) =>{
        setUserData({...userData, [event.target.name]:event.target.value})
        
    setErrors(validations({...userData,[event.target.name]:event.target.value})) //Aqui seteamos el estado errors usando la funcion Val.
        //Como lo hacemos? Recordemos que una funcion es igual a su valor de retorno, por tanto, si validations retorna un objeto (lo
        //cual sucede, retorna un objeto errors). Este objeto tendra una propiedad email, o password, dependiendo cual llegase a existir.
        //Le pasamos como argumento el estado userdata, haciendo una copia de este y dando sus mismos valores al input que estamos
        //modificando, y, similar  a la funcion setUserData, tendremos un estado errors con sus mismas propiedades, y el valor de estas
        //se sobrescribira de lo recibido en el return de validations, siendo estos, los "errores"
    }
    
    const handleOnSubmit = (event) =>{
        event.preventDefault()  //prevenimos el envio de informacion al limbo
        login(userData)         //traemos la funcion login y verificamos la coincidencia de datos de las variables, con el input
    }

    return(
        <form onSubmit={handleOnSubmit}>
        <h1>Bienvenido de vuelta</h1>
        
        <label>Correo: </label>
        <input name="email" onChange={handleUserData} value={userData.email} type="email" placeholder="Tu correo aquí"/>
        {errors.email ? <p>{errors.email}</p> : null}   {/*ternarios, si hay algo en el estado errors, key email, se desplegará*/}

        <hr/>

        <label>Contraseña: </label>
        <input name="password" onChange={handleUserData} value={userData.password} type= "password" placeholder="Tu contraseña aquí"/>
        {errors.password ? <p>{errors.password}</p> : null}  {/*ternarios, si hay algo en el estado errors, key password, se desplegará*/}

        <button>Ingresar</button>
        </form>
    )
}

export default Form;