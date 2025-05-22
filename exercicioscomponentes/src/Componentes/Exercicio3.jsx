export default function Exercicio3({valor,taxa,tempo}) {

let valorparcela= Number(valor+(valor*(taxa**2 /100)*tempo));

return(
 <div>
    Valor: R${valor}
    <br></br>
    Taxa: {taxa}%
    <br></br>
    Tempo: {tempo} dias
    <br></br>
    Valor da Parcela em atraso é {valorparcela}
 </div>   
);



}