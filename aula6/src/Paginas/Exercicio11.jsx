import {Link} from "react-router-dom";
import {useState} from "react";

export default function Exercicio11() {
    const [a1, seta1] = useState(0);
    const [razao, setRazao] = useState(0);
    const [n, setN] = useState(0);
    const [resultado, setResultado] = useState('');



    function calcular() {
        setRazao(Number(razao));
        setN(Number(n));
        seta1(Number(a1));
        let an = a1 + (n - 1) * razao;
        let sn = (n / 2) * (a1 + an);



        setResultado(
            <div>
                <p>
                    Progressao Aritimetica:  <br />
                    Razao: {razao} <br />
                    Termo Geral {an}  <br />
                    soma finita {sn} <br />
                    soma infinita +-∞
                </p>
            </div>

        );



    }



    return (
        <div>
            <h1>Exercicio11</h1>

            <div className="container">
                <form>

                    <p>
                        Digite o termo inicial:  <br />
                        <input type="text" value={a1} onChange={(e) => seta1(e.target.value)} />
                    </p>

                    <p>
                        Digite o valor da razao:  <br />
                        <input type="text" value={razao} onChange={(e) => setRazao(e.target.value)} />
                    </p>

                    <p>
                        Digite o numero de termos:  <br />
                        <input type="text" value={n} onChange={(e) => setN(e.target.value)} />
                    </p>


                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>

                </form>

                <p>
                    Resultado:{resultado}
                </p>

                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>




        </div>

    );



}