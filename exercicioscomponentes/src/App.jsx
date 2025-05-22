import Exemplo1 from "./Componentes/Exemplo1"
import Exercicio1 from "./Componentes/Exercicio1"
import Exercicio2 from "./Componentes/Exercicio2"
import Exercicio3 from "./Componentes/Exercicio3"
import Exercicio4 from "./Componentes/Exercicio4"
import Exercicio5 from "./Componentes/Exercicio5"

export default function App()
{
  return(
    <div>

      <h1>Exercícios de Componentes</h1>

      <hr />

     <h3>Chamada da função do Exemplo1</h3>
     <Exemplo1 numero1={8} numero2={2} />
     <Exemplo1 numero1={10} numero2={22} />
     <Exemplo1 numero1={7.5} numero2={5.8} />
     <Exemplo1 numero1={-58} numero2={65} />

     <hr />
     <h3>Chamada da função do exercicio 1</h3>
    <Exercicio1 fah={25} />
    <Exercicio1 fah={100} />
  
    <hr />

<h3>Chamada da função do exercicio 2</h3>
   <Exercicio2 altura={1.80} peso={75} />


<hr />

<h3>Chamada da função do exercicio 3</h3>
<Exercicio3 valor={100} taxa={10} tempo={2} />
<br></br>
<Exercicio3 valor={100} taxa={10} tempo={10} />
<hr />


<h3>Chamada da função do exercicio 4</h3>
<Exercicio4 tipo="retangulo" base="10" altura="5" />
<br></br>
<Exercicio4 tipo="triangulo" base="10" altura="5" />

<hr />


<h3>Chamada da função do exercicio 5</h3>
<Exercicio5 quantidade={10} />
<br></br>
<Exercicio5 quantidade={20} />

<hr />


    </div>
  )
}


