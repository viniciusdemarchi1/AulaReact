export default function Exercicio6({ n1, n2 }) {

const aprovado = {
color:"white",
backgroundColor:"blue"
};



const reprovado = {
color:"white",
backgroundColor:"red"
};

    let media = Number(n1 + n2) / 2;

    if (media >= 6) {
        return (
            <div>
<p style={{textAlign:"justify"}}> O componente<span style={{fontWeight:"700"}}>Exercicio6 </span> recebe dois parametros referentes a Nota1 e Nota2,calcula a média aritimetica, e verifica se o aluno está <span style={aprovado}>Aprovado</span>

                Nota1{n1}
                <br/>
                Nota2:{n2}
                <br/>
                Media:{media}
                <br/>

                <span style={aprovado}>Aluno Aprovado</span>
                </p>
            </div>

        );
    } else if (media <= 5) {

        return (
            <div>
        <p style={{textAlign:"justify"}}> O componente<span style={{fontWeight:"700"}}>Exercicio6 </span> recebe dois parametros referentes a Nota1 e Nota2,calcula a média aritimetica, e verifica se o aluno está <span style={reprovado}>reprovado</span>

      
 
                Nota1:{n1}
                <br/>
                Nota2:{n2}
                <br/>
                Media:{media}
                <br/>

               <span style={reprovado} >Aluno reprovado</span>

                </p>
            </div>
        );

    }



}