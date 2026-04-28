function exemplo01(){
    let perfumes = [];

    perfumes.push("Dior Sauvage");
    perfumes.push("Bleu de Chanel");
    perfumes.push("Paco Rabanne");
    perfumes.push("212 Men");
    
    alert("Perfumes "  + 
        "\nPrimeiro " + perfumes[0] +
        "\nSegundo " + perfumes[1] +
        "\nTerceiro " + perfumes[2] +
        "\nQuarto " + perfumes[3]
    )
    
    perfumes[1] = "Bleu de Chanels";
    perfumes.push("Ferrari black");
    perfumes.splice(0,1);

    alert("Perfumes "  + 
        "\nPrimeiro " + perfumes[0] +
        "\nSegundo " + perfumes[1] +
        "\nTerceiro " + perfumes[2] +
        "\nQuarto " + perfumes[3]
    )   

}
/*2. Criar uma função exercicio02 (n pedir para usuário)
    Criar um vetor de materias (string)
    Criar um vetor de cargaHoraria (int)
    Criar um vetor de valoresHora (float)

    Adicionar 3 matérias preenchendo para cada matéria os dados de cada vetor
    Ex.: "Geografia", 100, R$ 20.20
    materias.push("Geografia");
    // ..... 

    Apresentar todas os dados dos vetores
    Alterar o nome da segunda Matéria
    Alterar a carga horária da primeira matéria
    Apresentar todas os dados dos vetores*/


function exercicios02(){
    let materias = [];
    let cargaHoraria = [];
    let valoresHoras = [];

    materias.push("Geografia")[0];
    materias.push("Matemática")[1];
    materias.push("fisíca")[2];

    cargaHoraria.push(parseInt("100")[0]);
    cargaHoraria.push(parseInt("200")[1]);
    cargaHoraria.push(parseInt("250")[2]);

    valoresHoras.push(parseFloat("25.3")[0]);
    valoresHoras.push(parseFloat("35.3")[1]);
    valoresHoras.push(parseFloat("65.3")[2]);

    alert("Materias" +
        "\nPrimeiro " + materias[0] + " " + cargaHoraria[0]+ " " + valoresHoras[0]+
        "\nSegundo " + materias[1]+ " "+ cargaHoraria[1]+ " "+ valoresHoras[1]+
        "\nTerceiro " + materias[2]+ " " + cargaHoraria[2]+" "+ valoresHoras[2]

    );
    materias[1] = "História"; 
    cargaHoraria[0] = 150; 

    alert("Depois Das ALTERAÇÕES" +
        "\nPrimeiro: " + materias[0] + " - " + cargaHoraria[0] + " - " + valoresHoras[0] +
        "\nSegundo: " + materias[1] + " - " + cargaHoraria[1] + " - " + valoresHoras[1] +
        "\nTerceiro: " + materias[2] + " - " + cargaHoraria[2] + " - " + valoresHoras[2]
    );
}

   










