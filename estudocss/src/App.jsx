import Exercicio1 from "./Paginas/Exercicio1";
import Exercicio2 from "./Paginas/Exercicio2";
import Exercicio3 from "./Paginas/Exercicio3";
import Exercicio4 from "./Paginas/Exercicio4";
import Exercicio5 from "./Paginas/Exercicio5";
import Exercicio6 from "./Paginas/Exercicio6";
function App(){

return (
 <div>
 <h1>Estudo do CSS no React</h1>

 <Exercicio1/> 
<hr></hr>
<Exercicio2/>
<hr></hr>
<Exercicio3/>
<hr></hr>
<Exercicio4 cor="red"/>
<hr></hr>
<Exercicio5 cor="blue"/>

<Exercicio6 n1={8} n2={2}  />
<Exercicio6 n1={7} n2={7}  />
 </div>
  )

}


export default App