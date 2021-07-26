import React from 'react';
import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cadenaEntrante, setcadenaEntrante] = useState("");
  const [estadoFinal, setestadoFinal] = useState([]);
  const [estado, setestado] = useState([]);
  const [mostra, setmostra] = useState(false);
  const [mensaje, setmensaje] = useState("POR FAVOR INGRESE UNA CADENA")

  const cambios = (e) => {
    console.log("TEXT: ", cadenaEntrante)
    setcadenaEntrante(e.target.value.toUpperCase())
  }

  function verEstados() {
    let letraP = cadenaEntrante.indexOf("P")
    let letraU = cadenaEntrante.indexOf("U")
    let letraS = cadenaEntrante.indexOf("S")
    let letraH = cadenaEntrante.indexOf("H")
    if (letraP >= 0 && letraU >= 0 && letraS >= 0 && letraH >= 0) {
      setmostra(true)
      for (let i in cadenaEntrante) {
        estado.push(cadenaEntrante[i])
      }
      setestadoFinal(estado)
      console.log("estadoFinal: ", estadoFinal)
    } else {
      setmostra(false)
      setmensaje("LA CADENA NO ES CORRECTA")
    }
  }

  function limpiarInput() {
    setmensaje("POR FAVOR INGRESE UNA CADENA")
    setmostra(false)
    setestado([])
    setestadoFinal([])
    setcadenaEntrante("")
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <input type="text" className="form-control" placeholder="Cadena entrante" value={cadenaEntrante} onChange={(e) => cambios(e)} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="col-md-3">
          <button type="submit" className="col-md-6 btn btn-primary" onClick={verEstados}>VER ESTADOS</button>
          <button type="submit" onClick={limpiarInput} className="col-md-5 offset-1 btn btn-success">LIMPIAR</button>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {mostra === true ?
            <table className="table table-striped table-hover col-md-3">
              <thead>
                <tr className="text-center">
                  <th scope="col">ESTADO ACTUAL</th>
                </tr>
              </thead>
              <tbody>
                {estado.map((est, index) => <tr key={index}>
                  <td className="text-center col-md-6">Q{index} {est} = Q{index + 1}</td>
                </tr>)}
              </tbody>
            </table>
            :
            <h5 className="mt-3">{mensaje}</h5>}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
export default App;
