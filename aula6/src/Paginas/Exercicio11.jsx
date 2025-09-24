import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio11() {
    const [a1, seta1] = useState(0);
    const [razao, setRazao] = useState(0);
    const [n, setN] = useState(0);
    const [resultado, setResultado] = useState('');



    function calcular() {
        //Progressão Aritimetica
        setRazao(Number(razao));
        setN(Number(n));
        seta1(Number(a1));
        let an = a1 + (n - 1) * razao;
        let sn = (n / 2) * (a1 + an);

        // Progressão Geométrica
        let anGeometrica = a1 * r ** (n - 1);
        let snGeometrica = a1 * (r ** n - 1) / (r - 1);
        let SIGeometrica = a1 / (1 - r);


        setResultado(
            <div>
                <div style={{ color: "red" }}>
                    <p>
                        Progressao Aritimetica:  <br />
                        Razao: {razao} <br />
                        Termo Geral {an}  <br />
                        soma finita {sn} <br />
                        soma infinita +-∞

                    </p>
                </div>
                <div style={{ color: "blue" }}>
                    <p>
                        Progressao Geometrica:      <br />
                        Termo Geral {anGeometrica}  <br />
                        soma finita {snGeometrica} <br />
                        soma infinita {SIGeometrica} <br />
                    </p>


                </div>



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