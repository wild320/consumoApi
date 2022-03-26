import React, {useEffect,useState} from 'react';
import Personajes from './components/Personajes';
import Navegacion from './components/Navegacion'
import Paginacion from './components/Paginacion';

function App() {

  /**
   * con el useState nos permite colocarle un estado a nuestra aplicacion
   * le pasamos un array vacio que luego se va llenar con los datos que obtenemos del API
   */

  const [personajes,setPersonajes]=useState([]);
  const [info, setInfo]=useState([]);

  const url_base="https://rickandmortyapi.com/api/character";

  /**
   * Con el fetch (hace peticiones al Api) obtenemos los datos, recibimos una respuesta de tipo json,
   * la cual convertimos a datos y catcheamos los errores si ocurre alguno  
  */

  const fetchPersonajes =(url)=>{
    fetch(url)
        .then(response=>response.json())
        .then(data => {
          setPersonajes(data.results);
          setInfo(data.info);
        })//setPersonajes es la funcion que modifica el estado, y le paso el array con los resultados
        .catch(error => console.log(error))

  };
  const onAnterior = ()=>{
    fetchPersonajes(info.prev);

  }
  const onSiguiente = ()=>{
    fetchPersonajes(info.next)
    
  }

  /**
   * controlamos los datos con useEffect con una depencia vacia una unica vez
   * cuando el componente se renderiza por primera vez   * 
   */

  useEffect(()=>{
    fetchPersonajes(url_base);

  },[])
  return (
    /**
     * En el div container 
     * agregamos el componente personajes y tendra una propiedad llamada personajes
     * que recibe el array del useState atravez de las props
     */
    <>
    
    <Navegacion brand="Rick and Morty Api"/>
    <div className="container mt-3 ">
      <Personajes personajes={personajes}/>     
      <Paginacion prev={info.prev} next={info.next} onAnterior={onAnterior} onSiguiente={onSiguiente}/>       
    </div>
    </>
    
  );
}

export default App;
