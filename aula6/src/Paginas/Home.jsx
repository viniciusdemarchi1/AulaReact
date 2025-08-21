import {Link} from "react-router-dom";


export default function Home()

{
  return(
    <div>
      <h1>Estudo de Estados</h1>
      <li><Link to={"/exe1"}>Exemplo1</Link></li>
      <li><Link to={"/exe2"}>Exemplo2</Link></li>

      <h2>Exercicios</h2>
      <li><Link to={"/exe1"}>Exercicio1</Link></li>
      <li><Link to={"/exe2"}>Exercicio2</Link></li>
      <li><Link to={"/exe3"}>Exercicio3</Link></li>
      <li><Link to={"/exe4"}>Exercicio4</Link></li>
      <li><Link to={"/exe5"}>Exercicio5</Link></li>
    </div>
  )
}