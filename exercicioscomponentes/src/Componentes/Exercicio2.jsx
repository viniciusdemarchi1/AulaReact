export default function Exercicio2({peso,altura})
{

   let imc= Number(peso)/(Number(altura)*(altura));

  return(
    <div>
       o seu IMC é {imc} 
    </div>
  );

}