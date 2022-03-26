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
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <div className="card bg-dark p-2 " style={{minWidth:"200px"}}>
                        <img class="rounded" src={item.image} alt="Personaje"/>
                        <div className="card-body ">
                            <h5 className="card-title text-light text-decoration-underline">{item.name}</h5>                
                            <p className="card-text text-light ">Origen: {item.origin.name}<br></br>
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