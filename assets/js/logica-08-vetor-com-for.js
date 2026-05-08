function exemploVetorComFor() {
    //Solicitar o nome de 3 pessoas

    let nomes = [];

    //i = i + 1;
    //i += 1;
    //i++;

    for (let i = 0; i < 3; i += 1) {
        nomes.push(prompt("Digite o nome"));
    }

    for (let i = 0; i < 3; i += 1) {
        alert(nomes[i]);
    }
}

function exemplo02Media() {
    let alunos = [];
    let notas1 = [];
    let notas2 = [];

    for (let i = 0; i < 3; i += 1) {
        let nomeAluno = prompt("Digite o nome do aluno");
        let nota1 = parseFloat(prompt("Digite a nota 1"));
        let nota2 = parseFloat(prompt("Digite a nota 2"));

        alunos.push(nomeAluno);
        notas1.push(nota1);
        notas2.push(nota2);
    }

    //Apresentar a média de cada aluno
    for (let i = 0; i < 3; i += 1) {
        let nota1 = notas1[i];
        let nota2 = notas2[i];
        let media = (nota1 + nota2) / 2

        let status = "";
        if (media < 7) {
            status = "Reprovado";
        } else {
            status = "Aprovado";
        }

        alert(alunos[i] + " tem a média: " + media + " status é: " + status);
    }
}

function exemplo03Solicitar() {
    //solicitar colaborador, quantidade de horas, valor horas
    //Qual o maior valor hora pago
    //colaborador menor nome
    //colaborador com maior salario

    let colaboradores = [];
    let horas = [];
    let valores = [];
    let salarios = [];

    let quantidade = parseInt(prompt("Digite a quantidade de colaboradores"));

    // Solicitando os dados dos colaboradores
    for (let i = 0; i < quantidade; i += 1) {
        let colaborador = prompt("Digite o nome do colaborador");
        let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas"));
        let valorHora = parseFloat(prompt("Digite o valor hora"));

        colaboradores.push(colaborador);
        horas.push(quantidadeHoras);
        valores.push(valorHora);
    }

    //Calcular os sálarios armazenando no vetor de sálarios
    // for: percorrendo cada um dos colaboradores

    for (let i = 0; i < quantidade; i += 1) {
        //Pegando do vetor de horas o valor armazenado  naquela posição percorrida
        let quantidadeHoras = horas[i];
        let valorHoras = valores[i];

        // Calcular o salários
        let salario = quantidadeHoras * valorHoras;
        //Armazenar o sálario que foi calculado
        salarios.push(salario);
    }

    //Descobrir o maior valor hora entre os colaboradores
    let maiorValorHora = 0;
    for (let i = 0; i < quantidade; i += 1) {
        //Pegando do vetor de horas o elemento que está na posição do indice percorrido
        let valorHora = valores[i];

        if (valorHora > maiorValorHora) {
            maiorValorHora = valorHora;
        }
    }

    //Descobrir colaborador com maior salário
    let maiorSalario = 0;
    let nomeMaiorSalario = "";
    //Percorrer o vetor de salarios para descobre o maior salário
    //Armazenar na variavel o maior salário e nome de quem possui o maior salário
    for (let i = 0; i < quantidade; i += 1) {
        let salario = salarios[i];
        let colaborador = colaboradores[i];

        if (salario > maiorSalario) {
            maiorSalario = salario
            nomeMaiorSalario = colaborador;
        }
        //Forma alternativa
        // if (salarios[i] > maiorSalario){
        //      maiorSalario = salarios[i];
        //      nomeMaiorSalario = colaboradores[i];
        // }
    }
    //Descobrir quem tem o menor nome
    let colaboradorMenorNome = "sakoasdoandksandklnaskldnklmnkasnfakls32232msaklmsalkfnlk320";
    for (let i = 0; i < quantidade; i += 1) {
        let colaborador = colaboradores[i];

        if (colaborador.length < colaboradorMenorNome.length) {
            colaboradorMenorNome = colaborador;
        }
    }

    alert("O maior valor hora pago: " + maiorValorHora +
        "\nColaborador com o maior salário: " + nomeMaiorSalario +
        "\nColaborador menor nome: " + colaboradorMenorNome
    );

}

function exemplo04Menu() {
    let numeros = [];

    let opcaoMenu = parseInt(prompt(`
        1 - Cadastrar
        2 - Listar Todos
        3 - Apresentar maior
        10 - Sair`));
    while (opcaoMenu !== 10) {
        if (opcaoMenu === 1) {
            let numero = parseInt(prompt("Digite um número"));
            numeros.push(numero);
            alert("Número cadastrado com sucesso");
        } else if (opcaoMenu === 2) {
            let texto = "Números cadastrados:\n";
            for (let i = 0; i < numeros.length; i += 1) {
                let numero = numeros[i];
                texto = texto + numero + "\n"
            }
            alert(texto);
        } else if (opcaoMenu === 3) {
            let maiorNumero = 0;
            for (let i = 0; i < numeros.length; i += 1) {
                if (numeros[i] > maiorNumero) {
                    maiorNumero = numeros[i];
                }
            }

            alert("Maior número: " + maiorNumero);
        }

        opcaoMenu = parseInt(prompt(`
            1 - Cadastrar
            2 -Listar Todos
            3- Apresentar maior
            10 - Sair`));
    }
    alert("Obrigado por utilizar nosso sistema");
}

/*
1. Criar uma função exercicio01
   Criar um vetor de nomes
   Solicitar para o usuário 3 nomes
   Adicionar os 3 nomes no vetor
   Utilizar um for para apresentar todos os nomes */

function exercicio01() {

    let nomes = [];

    // Solicitar os nomes
    for (let i = 0; i < 3; i += 1) {

        let nome = prompt("Digite o nome");

        nomes.push(nome);
    }

    // Variável para guardar todos os nomes
    let texto = "";

    // Adicionar os nomes no texto
    for (let i = 0; i < nomes.length; i += 1) {

        texto = texto + nomes[i] + "\n";
    }

    alert(texto);
}

/*2. Criar uma função exercicio02
   Criar um vetor de idades
   Solicitar para o usuário 4 idades
   Adicionar as 4 idades no vetor
   Utilizar um for para apresentar todas as idades*/

function exercicio02() {


    let idades = [];

    for (let i = 0; i < 4; i += 1) {

        let idade = parseInt(prompt("Digite a idade"));
        idades.push(idade);
    }

    let texto = "";

    for (let i = 0; i < idades.length; i += 1) {

        texto = texto + idades[i] + "\n";
    }

    alert(texto);
}
/*Criar uma função exercicio03
   Criar um vetor de cidades
   Solicitar para o usuário 5 cidades
   Adicionar as 5 cidades no vetor
   Utilizar um for para apresentar todas as cidades*/
function exercicio03(){

    // Criar vetor
    let cidades = [];

    // Solicitar 5 cidades
    for(let i = 0; i < 5; i += 1){

        let cidade = prompt("Digite uma cidade");

        cidades.push(cidade);
    }

    // Variável para juntar o texto
    let texto = "";

    // Percorrer vetor
    for(let i = 0; i < cidades.length; i += 1){

        texto = texto + cidades[i] + "\n";
    }

    // Mostrar tudo junto
    alert(texto);
}

/*Criar uma função exercicio04
   Criar um vetor de números
   Solicitar para o usuário 5 números
   Adicionar os 5 números no vetor
   Utilizar um for para somar todos os números do vetor
   Ao final, mostrar a soma total*/

function exercicio04(){
    let numeros = [];
    
for(let i = 0; i < 5; i =+ 1);{
    let numero = parseInt(prompt("Digite um numero"));
    numeros.push(numero);
        
}
    let soma = 0;

for(let i = 0; i < numeros.length; i += 1){

    soma = soma + numeros[i];

}
   alert("Soma total : " + soma);
}

