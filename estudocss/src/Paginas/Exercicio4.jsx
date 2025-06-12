export default function Exercicio4({cor}){


    const borda={
        color:cor,
        border:"2px solid " + cor,
        textalign : "center",
        padding : "10px"



    };



  return(
<div>


<h2 style={borda}> Exercicio 4</h2>



</div>

  );















}