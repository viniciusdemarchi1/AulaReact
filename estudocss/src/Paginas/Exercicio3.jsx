export default function Exercicio3()
{

    const titulo =  {
        color:"red",
        backgroundColor : "yellow",
        textalign : "center",
        padding : "10px"
    };


    return(
        <div>
          <h2 style={titulo}>Exemplo de Estilos em Objetos</h2>
<p>
    Este foi um exemplo de estilos em linha, <span style={titulo}>mas utilizando uma variável</span> objeto para armazenar os estilos. 
</p>
        </div>
    );
} 