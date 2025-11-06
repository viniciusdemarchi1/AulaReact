const { json } = require("body-parser");

function consultar() {
    fetch("http://localhost:3301/alunos")
        .then(res => res.json())
    then(data => {
        console.log("Alunos:", data);
        document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
    })
        .cath(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !"
        });
}

function consultarPorCodigo(codigo) {

}

function cadastrar() {

}

function alterar() {

}

function excluir(codigo) {

}