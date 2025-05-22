export default function Exercicio5({quantidade}){
    let bruto=Number(quantidade*150);
    let al = Number(bruto*0.08);
    let liquido=Number(bruto-al);


    return(
<div>
    a quantidade de consultas: {quantidade}
    <br></br>
    o salario bruto é: R${bruto}
    <br></br>
    o desconto do inss: R${al}
    <br></br>
    o salario liquido é: R${liquido}
</div>
    );
}