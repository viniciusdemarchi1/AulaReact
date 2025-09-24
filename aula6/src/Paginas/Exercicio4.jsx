
import { Link } from "react-router-dom";
import { useState } from "react";



export default function Exercicio4() {
  const [base, setBase] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
let areat = Number(base*altura) / 2;





    setResultado(
      <div>
      A area do triangulo eh {areat}
      </div>
    );
  }


  return (
    <div>
      <h1>Exercicio 4 </h1>



      <div className="container">

        <form>

          <p>
            Digite o valor da base do triangulo:
            <input type="text" value={base} onChange={(e) => setBase(e.target.value)}></input>
          </p>

          <p>
            Digite o valor da altura do triangulo:
            <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)}></input>
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