export default function Exercicio5({cor}){


    const borda={
        color:cor,
        border:"2px solid " + cor,
        textalign : "center",
        padding : "10px"



    };



  return(
<div>


<h2 style={borda}> Exercicio 5</h2>



</div>

  );















}