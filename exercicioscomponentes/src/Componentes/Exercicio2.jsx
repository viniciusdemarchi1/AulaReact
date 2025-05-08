export default function Exercicio2({peso,altura})
{

   let imc= peso/ altura*altura;

  return(
    <div>
       o seu IMC é {imc} 
    </div>
  );

}