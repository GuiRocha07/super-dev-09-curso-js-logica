function exemplo01(){
    let carros = [];
    carros.push("BMW m3"); // indice 0, posição primeira
    carros.push("Byd seal"); // indice 1 , posição segunda
    carros.push("Mobi"); // indice 2 , posição terceira
    carros.push("chevet"); // indice 3, posição quarta
    carros[3] = "Chevette";

    carros.splice(2, 1); // Apagar o Mobi   *Splice serve para apagar 

    alert("Quantidade de elementos: "  + carros.length +
        "\nPrimeiro: " + carros[0] +
        "\nSegundo: " + carros [1] +
        "\nTerceiro: " + carros[2] // Chevette
    );

}
function exemplo02(){
    let alunos = [];
    let frequencias = [];
    let status = [];

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    alunos.push(prompt("Digite o nome do aluno"));
    frequencias.push(parseInt(prompt("Digite o percentual de frequencia")));

    if (frequencias[0] >= 70 ) {
        status.push("Aprovado");
    
    }else {
        status.push("Reprovado");
    }

     if (frequencias[1] >= 70 ) {
        status.push("Aprovado");
    
    }else {
        status.push("Reprovado");
    }

    alert("Alunos:" +
        "\nNome: " + alunos[0] +
        "\nFrequencias: " + frequencias[0] +
        "\nStatus: " + status[0] +
        "\nNome: " + alunos[1] +
        "\nFrequencias: " + frequencias[1] +
        "\nStatus: " + status[1] 
    );
}

















 