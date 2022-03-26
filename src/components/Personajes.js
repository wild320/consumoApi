import React from 'react'

const Personajes = ({personajes=[]}) => {
  return (
    <div className="row">
        {
            /**para crear una columna para cada personaje
             * creamos una expresion de js para iterar atravez de la funcion map
             * recibe dos parametros: el item que va llegando y el index
             */
            personajes.map((item, index) =>(
                <div key={index} className="col mb-4">
                    <div className="card bg-dark p-2">
                        <img class="rounded" src={item.image} alt="" style={{minWidth:"200px"}}/>
                        <div className="card-body">
                            <h4 className="card-title text-light">{item.name}</h4>                
                            <p className="text-light">Origen: {item.origin.name}<br></br>
                            Especie: {item.species}<br></br>
                            Genero: {item.gender}<br></br>
                            Localizacion: {item.location.name}
                            </p>                 
                        </div>
                    </div>
                </div>
            ))}
        
    </div>
  );
};

export default Personajes