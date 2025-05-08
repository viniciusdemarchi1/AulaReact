export default function Exercicio1({fah})
{
    let celsius= Number((fah-32)*5/9);



    return(
        <div>
           A coversão de graus {fah} °F para celsius é igual {celsius.toFixed(4)}
        </div>
    );
}