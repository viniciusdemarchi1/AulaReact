import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"



export default function App()
{
  return(
    <div>

      <h1>Exercícios de Componentes</h1>


     <h3>Chamada da função do Exemplo1</h3>
     <Exemplo1 numero1={8} numero2={2} />
     <Exemplo1 numero1={10} numero2={22} />
     <Exemplo1 numero1={7.5} numero2={5.8} />
     <Exemplo1 numero1={-58} numero2={65} />


     <h3>Chamada da função do exercicio 1</h3>
    <Exercicio1 fah={25} />
    <Exercicio1 fah={100} />
  
    
<h3>Chamada da função do exercicio 2</h3>
   <Exercicio2 altura={1.80} peso={75} />


    </div>
  )
}


