export default function Exercicio6({ n1, n2 }) {

    let media = Number(n1 + n2) / 2;

    if (media >= 6) {
        return (
            <div>


                Nota1{n1}
                <br></br>
                Nota2:{n2}
                <br></br>
                Media:{media}
                <br></br>

                <p>Aluno Aprovado</p>
            </div>

        );
    } else if (media <= 5) {

        return (
            <div>


                Nota1:{n1}
                <br></br>
                Nota2:{n2}
                <br></br>
                Media:{media}
                <br></br>

                <p>Aluno reprovado</p>
            </div>
        );

    }




    return (
        <div>



        </div>

    );
}