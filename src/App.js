import React, { useState } from 'react';
import './App.css';

function App() {
  const [valor, agregarValor] = useState("")
  const [resultados, agregarResultado] = useState([])

  //creando funcion para obtener las imagenes
  const obtenerImagen = () => {
    //console.log('obteniendo imagen')
    fetch(`https://api.unsplash.com/search/photos/?client_id=dC5lebP7aw5TymzH6Nm15S2xGnIbLs492PZKELAgURY&query=${valor}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      agregarResultado(data.results)
    })
  }

  return (
    <div className="App">
      <div className="title">busca una imagen aqui</div>
      <div className="search-box">
        <input 
          className="input-search"
          onChange={e => agregarValor(e.target.value)}
          type="text" 
          value={valor}
        />
        <button 
          className="submit-search"
          onClick={() => obtenerImagen()}
        >
          Buscar
        </button>
      </div>
      <div className="gallery">
        {
          resultados.map(item => {
            return <img className="gallery-item" key={item.id} src={item.urls.regular} alt=""/>
          })
        }
      </div>
    </div>
  );
}

export default App;
