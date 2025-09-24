
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Exercicio3() {
  const [valor, setValor] = useState(0);
  const [taxa, setTaxa] = useState(0);
  const [dias, setDias] = useState(0);
  const [resultado, setResultado] = useState('');


  function calcular() {
let parc = Number(valor) + (Number(valor)*(Number(taxa)**2/100)*Number(dias));





    setResultado(
      <div>
      o valor da percela eh {parc}
      </div>
    );
  }



  return (
    <div>
      <h1>Exercicio 3</h1>



      <div className="container">
        <form>

          <p>
            Digite o valor da prestação em atraso:
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)}></input>
          </p>

          <p>
            Digite a taxa de juros:
            <input type="text" value={taxa} onChange={(e) => setTaxa(e.target.value)}></input>
          </p>


          <p>
            Digite o tempo em dias de atraso:
            <input type="text" value={dias} onChange={(e) => setDias(e.target.value)}></input>
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