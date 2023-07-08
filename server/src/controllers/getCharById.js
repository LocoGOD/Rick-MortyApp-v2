const axios = require("axios")

const getCharById = (response,id) =>{
    axios("https://rickandmortyapi.com/api/character/"+id)  //usamos axios para traer los datos de la api, usando la id como parámetro
     .then(response=> response.data)    //DE LA RESPUESTA NOS QUEDAMOS CON LOS DATOS
     .then(({name,gender,species,origin,image,status}) =>{  // Y HACIENDO DESTRUCTURING DE LAS PROPIEDADES DEL PERSONAJE CON ID 
        const character = {id: id,                          //CORRESPONDIENTE, CREAMOS UN OBJETO NUEVO CON ESOS VALORES
                           name:name,
                           gender:gender,
                           species:species,
                           origin:origin.name,
                           image:image,
                           status:status} 
                        
    return response.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(character))  // EN CASO DE EXITO, 
                           })       // CODIGO 200, CONFIGURAMOS RESPUESTA Y PARSEAMOS EL OBJETO A JSON
        .catch(error => {
            return response.writeHead(500, {"Content-type": "text-plain"}).end(error.message)   //EN CASO DE ENCONTRAR ERROR,
                           })      // CODIGO 500, Y CONFIGURAMOS EL ERROR DE ENVIO POR DEFECTO DE LA API
    }
module.exports = {getCharById}  // EXPORTAMOS FUNCION PARA NUESTRO SERVIDOR INDEX.JS