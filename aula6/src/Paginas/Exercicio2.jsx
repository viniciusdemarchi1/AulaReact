import { Link } from "react-router-dom";
import { useState } from "react";



export default function Exercicio2() {

    const [num, setNum] = useState(0);
    const [resultado, setResultado] = useState('');

    function limpar() {
        setNum("");
        setResultado("");
    }

    function calcular() {
        setResultado(
            <div>
                A temperatura convertida para graus celsius e {Number((num - 32) * 5) / 5}
            </div>
        );
    }



    return (
        <div>


            <h1>Exercicio2</h1>

            <div className="container">
                <form>
                    <p>
                        Digite a temperatura em graus Fahrenheit
                        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
                    </p>


                    <p>
                        <input type="button" value="Calcular" onClick={calcular} />
                    </p>
                </form>



                <p>
                    <input type="button" value="Limpar" onClick={limpar} />
                </p>

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