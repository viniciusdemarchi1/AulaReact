import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exemplo2() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);




  return (
    <div>
      <h1>Exemplo 2</h1>
      <div className="container">

        <form>

          <p>
            Digite o numero 1:
            <input type="number"  onChange={(e => setNumero1(e.target.value))}/>

          </p>


          <p>
            Digite o numero 2:
            <input type="number" onChange={(e => setNumero2(e.target.value))}/>

          </p>


          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>






        </form>













      </div>
    </div>
  )
}