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


function exercicios02() {
    let materias = [];
    let cargaHoraria = [];
    let valoresHoras = [];

    // Adicionando dados corretamente
    materias.push("Geografia");
    materias.push("Matemática");
    materias.push("Física");

    cargaHoraria.push(100);
    cargaHoraria.push(200);
    cargaHoraria.push(250);

    valoresHoras.push(25.3);
    valoresHoras.push(35.3);
    valoresHoras.push(65.3);

    // Mostrar dados
    alert("Matérias" +
        "\nPrimeiro: " + materias[0] + " " + cargaHoraria[0] + " " + valoresHoras[0] +
        "\nSegundo: " + materias[1] + " " + cargaHoraria[1] + " " + valoresHoras[1] +
        "\nTerceiro: " + materias[2] + " " + cargaHoraria[2] + " " + valoresHoras[2]
    );

    // Alterações
    materias[1] = "História";
    cargaHoraria[0] = 150;

    // Mostrar depois
    alert("Depois das alterações" +
        "\nPrimeiro: " + materias[0] + " - " + cargaHoraria[0] + " - " + valoresHoras[0] +
        "\nSegundo: " + materias[1] + " - " + cargaHoraria[1] + " - " + valoresHoras[1] +
        "\nTerceiro: " + materias[2] + " - " + cargaHoraria[2] + " - " + valoresHoras[2]
    );
}

/*3. Criar uma função exercicio03
    Criar um vetor de destinosTuristicos
    Solicitar para o usuário o nome de 4 destinos turísticos
    Adicionar os 4 destinos no vetor
    Apresentar todos os destinos turísticos
    Solicitar para o usuário um novo nome para o segundo destino
    Alterar o segundo destino turístico
    Solicitar para o usuário mais 1 destino turístico
    Adicionar o novo destino no vetor
    Apagar o primeiro destino turístico
    Apresentar todos os destinos turísticos*/

    function exercicio03(){
        let destinosTuristicos = [];
       
        destinosTuristicos.push(prompt("Digite o primeiro destino Turistico"));
        destinosTuristicos.push(prompt("Digite o segundo destino Turistico"));
        destinosTuristicos.push(prompt("Digite o terceiro destino Turistico"));
        destinosTuristicos.push(prompt("Digite o quarto destino Turistico"));

        alert("Destino Turisticos:" +
            "\nPrimeiro: " + destinosTuristicos[0] +
            "\nSegundo: " + destinosTuristicos[1] +
            "\nTerceiro: " + destinosTuristicos[2] +
            "\nQuarto: " + destinosTuristicos[3] 
        );

        destinosTuristicos[1] = prompt("Digite um novo Nome ");
        destinosTuristicos.push(prompt("Digite mais um ponto turistico"));
        destinosTuristicos.splice(0 , 1);
        alert("Destino Atualizado " +
            "\nPrimeiro: " + destinosTuristicos[0] +
            "\nSegundo: " + destinosTuristicos[1] +
            "\nTerceiro: " + destinosTuristicos[2] +
            "\nQuarto: " + destinosTuristicos[3] 
        );
        

    }

   /*4. Criar uma função exercicio04
    Criar um vetor de restaurantes
    Criar um vetor de cidades
    Criar um vetor de valoresMedios

    Solicitar para o usuário os dados de 3 restaurantes
    Para cada restaurante solicitar:
        Nome do restaurante
        Cidade onde fica localizado
        Valor médio gasto por pessoa

    Adicionar os dados nos vetores
    Apresentar todos os dados dos restaurantes
    Solicitar para o usuário um novo nome para o primeiro restaurante
    Alterar o nome do primeiro restaurante
    Solicitar para o usuário um novo valor médio para o terceiro restaurante
    Alterar o valor médio do terceiro restaurante
    Apresentar todos os dados dos restaurantes*/

function exercicio04(){
    let restaurante = [];
    let cidades = [];
    let valoresMedios = [];

    restaurante.push(prompt("Digite o primeiro Restaurante"));
    restaurante.push(prompt("Digite o segundo Restaurante"));
    restaurante.push(prompt("Digite o terceiro Restaurante"));

    cidades.push(prompt("Digite a primeira cidade"));
    cidades.push(prompt("Digite a segunda cidade"));
    cidades.push(prompt("Digite a terceira cidade"));

    valoresMedios.push(parseFloat(prompt("Digite o primeiro Valor")));
    valoresMedios.push(parseFloat(prompt("Digite o segundo Valor")));
    valoresMedios.push(parseFloat(prompt("Digite o terceiro Valor")));

    alert("Restaurantes: " +
        "\nPrimeiro: " + restaurante[0] + " - " + cidades[0] + " - " + valoresMedios[0] +
        "\nSegundo: " + restaurante[1] + " - " + cidades[1] + " - " + valoresMedios[1] +
        "\nTerceiro: " + restaurante[2] + " - " + cidades[2] + " - " + valoresMedios[2] 
    );

    
}
