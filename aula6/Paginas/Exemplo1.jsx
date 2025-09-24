import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exemplo1() {
  const [nome, setNome] = useState("Vinicius");
  const [idade, setIdade] = useState(18);
  const [resultado, setResultado] = useState(null);

  function calcular() {
    let dias = Number(idade) * 365;

    setResultado("Olá " + nome + ", você ja viveu " + dias + " dias.");
  }

  function limpar() {
    setIdade("");
    setNome("");
    setResultado("");
  }

  return (

    <div>
      <h1>Exemplo 1</h1>
      <div className="container">


        <form>
          <p>
            Digite o nome do aluno
            <input type="text" value={nome} onChange={(e => setNome(e.target.value))} />

          </p>


          <p>
            Digite a idade do aluno
            <input type="number" value={idade} onChange={(e => setIdade(e.target.value))} />

          </p>

          <p>
            <input type="button" value="Exemplo1" onClick={calcular} />
            <input type="button" value="Limpar" onClick={limpar} />
            </p>

            <p>

              <b> Resultado</b> <br />
              Nome: {nome} <br />
              Idade: {idade} <br />
            </p>

            <p>
              {resultado}
            </p>

          



        </form>
          <p>
          <Link to="/">Voltar</Link>
          </p>

      </div>
    </div>
  )
}