import {Link} from "react-router-dom";


export default function Home()

{
  return(
    <div>
      <h1>Estudo de Estados</h1>
      <li><Link to={"/Exemplo1"}>Exemplo1</Link></li>
      <li><Link to={"/Exemplo2"}>Exemplo2</Link></li>

      <h2>Exercicios</h2>
      <li><Link to={"/Exercicio1"}>Exercicio1</Link></li>
      <li><Link to={"/Exercicio2"}>Exercicio2</Link></li>
      <li><Link to={"/Exercicio3"}>Exercicio3</Link></li>
      <li><Link to={"/Exercicio4"}>Exercicio4</Link></li>
      <li><Link to={"/Exercicio5"}>Exercicio5</Link></li>
    </div>
  )
}