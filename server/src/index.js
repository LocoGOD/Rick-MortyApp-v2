const http = require("http");
//const data = require("./utils/data") -- //traemos el archivo data.js
const { getCharById } = require("./controllers/getCharById");

http.createServer((request,response)=>{
   response.setHeader('Access-Control-Allow-Origin', '*'); //esta linea PERMITE que el front-end pueda hacer peticiones al server!
   
   if(request.url.includes("/rickandmorty/character")){ // Si la URL incluye esta sintaxis...
      const id = request.url.split("/").at(-1)  //NOs quedamos con la id, osea, caracteres despues de la ultima barra (-1)
      getCharById(response, +id)}  //Ejecutamos la funcion controladora que hace solicitudes al servidor, la cual si nuestra URL es  
         // correcta, hara una peticion a esa misma buscando al personaje cuya ID coincida con la que nos guardamos aqui.

  }).listen(3001) // Linea de escucha al puerto 3001

  //const id = request.url.split("/").at(-1) //metodo at para quedarnos con la id, osea, caracteres despues de la ultima barra (-1)
     //const characterFound = data.find( (character)=> character.id === +id ) //metodo find para encontrar en el array, respecto a la id
     //que recortamos con split. Similar al metodo filter. Al ser este id un string, lo parseamos a numero agregandole un +
     //response.writeHead(200, {"Content-type":"application/json"}).end(JSON.stringify(characterFound))} //parseamos el personaje que
     //encontramos para enviarlo como respuesta, con su respectivo codigo y tipo. 
    
    //else{
    //    response.writeHead(404,{ "Content-type": "text/plain"})
    //    return response.end("Error, no encontrado!")}}

