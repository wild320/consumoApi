import React from 'react'

const Paginacion = ({prev, next, onAnterior, onSiguiente}) => {

    const handleAnterior = () =>{
        onAnterior();

    }
    const handleSiguiente= () =>{
        onSiguiente();
    }

  return (
    <nav className="my-5">
        <ul className="pagination justify-content-center t">
            { prev ? (
                <li className="page-item">
                 <button className="page-link" onClick={handleAnterior} >Anterior</button>
                </li>
                ): null
            }
            { next ? (
                <li className="page-item">
                    <button className="page-link" onClick={handleSiguiente} >Siguiente</button>
                </li>
            ) : null}
        </ul>
    </nav>
  );
};

export default Paginacion