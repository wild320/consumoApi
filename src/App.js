import React, {useEffect,useState} from 'react';

function App() {

  /**
   * con el useState nos permite colocarle un estado a nuestra aplicacion
   * le pasamos un array vacio que luego se va llenar con los datos que obtenemos del API
   */

  const [personajes,setPersonajes]=useState([]);

  const url_base="https://rickandmortyapi.com/api/character";

  /**
   * Con el fetch (hace peticiones al Api) obtenemos los datos, recibimos una respuesta de tipo json,
   * la cual convertimos a datos y catcheamos los errores si ocurre alguno  
  */

  const fetchPersonajes =(url)=>{
    fetch(url)
        .then(response=>response.json())
        .then(data => setPersonajes(data.results))//setPersonajes es la funcion que modifica el estado, y le paso el array con los resultados
        .catch(error => console.log(error))

  };

  /**
   * controlamos los datos con useEffect con una depencia vacia una unica vez
   * cuando el componente se renderiza por primera vez   * 
   */

  useEffect(()=>{
    fetchPersonajes(url_base);

  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
