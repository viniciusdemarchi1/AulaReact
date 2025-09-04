import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio1()
{
const [num, setNum] = useState(0);
const [resultado, setResultado ] = useState(''); 

function limpar(){
  setNum("");
  setResultado("");
}

function calcular(){

setResultado(
  <div>
     O quadrado do {num} e {Number(num**2)} <br />
     O cubo do {num} e {Number(num**3)}     <br />
  </div>
);

}



  return (
    <div>
      <h1>Exercicio1</h1>
      <div className="container">
        <form>

          <p>
            Digite um numero: <br />
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
          </p>

    
          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>

        </form>

    
          <p>
            <input type="button" value="Limpar" onClick={limpar} />
          </p>

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

      
 