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
    let letraP = cadenaEntrante.indexOf("P");
    let letraU = cadenaEntrante.indexOf("U");
    let letraS = cadenaEntrante.indexOf("S");
    let letraH = cadenaEntrante.indexOf("H");
    let inicial = 0;
    let final = 1;
    if (letraP >= 0 && letraU >= 0 && letraS >= 0 && letraH >= 0) {
      setmostra(true)
      for (let i in cadenaEntrante) {
        if (estado.indexOf(cadenaEntrante[i]) === -1) {
          console.log("LA LETRA NO EXISTE: ", cadenaEntrante[i])
          estado.push(cadenaEntrante[i])
          estadoFinal.push("Q" + inicial + " " + cadenaEntrante[i] + " = " + "Q" + final)
        }
        else {
          final -= 1
          estadoFinal.push("Q" + inicial + " " + cadenaEntrante[i] + " = " + "Q" + final)
          inicial -= 1
          console.log("LA LETRA YA EXISTE: ", cadenaEntrante[i])
        }
        inicial += 1
        final += 1
      }
    } else {
      setmostra(false)
      setmensaje("LA CADENA NO ES VALIDA")
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
            <div>
              <h5 className="alert alert-primary text-center mt-2" role="alert">LA CADENA ES VALIDA</h5>
              <table className="table table-striped table-hover col-md-3">
                <thead>
                  <tr className="text-center">
                    <th scope="col">ESTADO ACTUAL</th>
                  </tr>
                </thead>
                <tbody>
                  {estadoFinal.map((est, index) => <tr key={index}>
                    <td className="text-center col-md-6">{est}</td>

                  </tr>)}
                </tbody>
              </table>
            </div>
            :
            <h5 className="alert alert-danger text-center mt-3" role="alert">{mensaje}</h5>}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
export default App;
