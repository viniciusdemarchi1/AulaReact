import {Link} from "react-router-dom";


export default function Home()

{
  return(
    <div>
      <h1>Estudo de Estados</h1>
      <ul>

      <li><Link to={"/Exemplo1"}>Exemplo1</Link></li>
      <li><Link to={"/Exemplo2"}>Exemplo2</Link></li>

      </ul>


      <h2>Exercicios</h2>
      <ul>
      <li><Link to={"/Exercicio1"}>Exercicio1</Link></li>
      <li><Link to={"/Exercicio2"}>Exercicio2</Link></li>
      <li><Link to={"/Exercicio3"}>Exercicio3</Link></li>
      <li><Link to={"/Exercicio4"}>Exercicio4</Link></li>
      <li><Link to={"/Exercicio5"}>Exercicio5</Link></li>
      <li><Link to={"/Exercicio11"}>Exercicio11</Link></li>
      </ul>
    </div>
  )
}