

function consultar() {
    fetch("http://localhost:3001/alunos")
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !"
        });
}

function consultarPorCodigo(codigo) {
 fetch(`http://localhost:3001/alunos/${codigo}`)
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API !"
        });
}

function cadastrar() {

}

function alterar() {

}

function excluir(codigo) {

}