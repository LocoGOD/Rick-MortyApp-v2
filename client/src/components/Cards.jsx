import Card from './Card';

export default function Cards({characters,onClose}) {
   return <>
         <h1>Home</h1>
      {
         characters.map(character => {
            return(
                  <Card 
                  key={character.id}   // la propiedad key es interna de react y debe ir siempre que trabajemos con plantillas!
                  id={character.id}    // aca vemos la propiedad ID, lo usamos nosotros para identificar, y no pisa al key!
                  name={character.name} 
                  status={character.status} 
                  species={character.species} 
                  gender={character.gender} 
                  origin={character.origin.name} 
                  image={character.image}
                  onClose={onClose}/>
            )
         })
      }
   </>
}
