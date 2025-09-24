import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio5() {
  const [lado, setLado] = useState(0);
  const [resultado, setResultado] = useState('');

  function calcular() {
let area = Number(lado**2);


    setResultado(
      <div>
      A area do triangulo eh {area}
      </div>
    );
  }


  return (
    <div>
      <h1>Exercicio 5</h1>


      <div className="container">
        <form>
          <p>
            Digite o valor do lado do quadrado:
            <input type="text" value={lado} onChange={(e) => setLado(e.target.value)}></input>
          </p>

          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>
        </form>

        <p>
          Resultado:{resultado}
        </p>




        <p>
          <Link to="/">Voltar</Link>
        </p>


      </div>
    </div>
  )
}