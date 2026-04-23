function exercicioexplicacaoFOR(){
    /*
    //Declaração de variável
    let indice = 0;
    //Condição
    while (indice < 4){
    alert(indice);
    //incrementar
    indice = indice + 1;

    }
    */
// for (declaração de cariável; condição; incrementar){}
for (let indice = 0; indice < 4; indice = indice + 1){
    alert(indice)
}
    //todo while pode virar um for? sim e não Depende, é possivel converter, quando tem repetições definidas repetirá 10 vezes por exemplo.
    //todo for pode virar um while? sim pode virar
    //for => 0..3 => while 
}

function exemploForJogos(){
    let total = 0;
    
    for (let indice = 0; indice < 3; indice = indice +1){
        let nome = prompt("Digite o nome do jogo");

        let preco = parseFloat(prompt("Digite o preço"));

        //variavel recebe ela mesma, mais oque deseja somar.
        total = total + preco;
    }

    alert("Total: " + total);
}

function exemploForProdutos(){
    // Padaria, utensilios, carnes

    let quantidadePadaria = 0, quantidadeUtensilios = 0, quantidadeCarnes = 0;

    for(let indice = 0; indice < 4; indice = indice +1){
        let produto = prompt("Digite o nome do produto");
        let categoria = prompt("Digite a categoria do produto: [Carnes, Padaria, Utensilios]:").trim();
        
        //Validar que o usuário digitou uma categoria válida
        while (categoria.toLowerCase() !== "carnes" &&
               categoria.toLowerCase() !== "padaria" &&
               categoria.toLowerCase() !== "utensilios"){
                    categoria = prompt(
                        "categoria inválida.\nDigite a categoria do produto [Carnes, Padaria, Utensilios]:").trim();
               }

        let preco = parseFloat(prompt("Digite o preço do produto"));
        
        if(categoria.toLowerCase() === "padaria"){
            quantidadePadaria = quantidadePadaria + 1;
        }
        if(categoria.toLowerCase() === "utensilios"){
            quantidadeUtensilios = quantidadeUtensilios + 1;
        }
        if(categoria.toLowerCase() === "carnes"){
            quantidadeCarnes = quantidadeCarnes +1 ;
        }
    }

    alert("Quantidade Padaria: " + quantidadePadaria +
          "\nQuantidade Utensilios: " + quantidadeUtensilios +
          "\nQuantidade Carnes: " + quantidadeCarnes
    );
}

function exemploContagemRegressiva(){
    // for (Variável; condição; incremento/decremento)
    for(let indice = 10; indice > 0; indice = indice -1){
        alert(indice);
    }
}

function exemploDescobrirQuantidadePar(){
    let quantidadePares = 0;

    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar"));

    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseInt(prompt("Digite um número"));
    }
    if (numero % 2 === 0){
        quantidadePares = quantidadePares + 1;
    }
    //descobrir impar (numero % 2 !== 0)

    alert("Quantidade de números pares: " + quantidadePares);
}

/*Ex. 1
Criar uma função exercicio01MostrarNumeros.
Criar um for para mostrar os números de 1 até 5 no console.*/

function exercicio01MostrarNumeros(){
    for(let indice = 1; indice <= 5; indice = indice + 1){
        alert(indice);
    }
}

/*Ex. 2
Criar uma função exercicio02MostrarNomeVariasVezes.
Solicitar um nome ao usuário.
Criar um for para mostrar esse nome 3 vezes no console.*/
function exercicio02MostrarNomeVariasVezes(){
    let nome = prompt("Digite um nome");
    for(let indice = 0; indice < 3; indice = indice + 1){
        alert(nome);
    }
}

/*Ex. 3
Criar uma função exercicio03ContarAteDez.
Criar um for para mostrar os números de 1 até 10 no console.*/
function exercicio03ContarAteDez(){
    for(let indice = 1; indice <= 10; indice = indice + 1){
        alert(indice);
    }
}

/*Ex. 4
Criar uma função exercicio04ContarRegressivo.
Criar um for para mostrar os números de 5 até 1 no console.*/
function exercicio04ContarRegressivo(){
    for(let indice = 5; indice > 0; indice = indice - 1){
        alert(indice);
    }
}

/*Ex. 5
Criar uma função exercicio05SomarNumeros.
Criar um for para somar os números de 1 até 5.
Ao final, mostrar o resultado da soma.*/
function exercicio05SomarNumeros(){
    let total = 0;
    for(let indice = 1; indice <= 5; indice = indice + 1){
        total = total + indice;
    }
    alert("Resultado da soma: " + total);
}

/*Ex. 6
Criar uma função exercicio06MostrarNumerosPares.
Criar um for para mostrar os números pares de 0 até 10 no console.
*/
function exercicio06MostrarNumerosPares(){
    for(let indice = 0; indice <= 10; indice = indice + 1){
        if (indice % 2 === 0){
            alert(indice);
        }
    }
}

/*Ex. 7
Criar uma função exercicio07MostrarNumerosImpares.
Criar um for para mostrar os números ímpares de 1 até 9 no console.*/
function exercicio07MostrarNumerosImpares(){
    for(let indice = 1; indice < 10; indice = indice + 1){  
        if (indice % 2 !== 0){
            alert(indice);
        }   
    }
}

/*Ex. 8
Criar uma função exercicio08SolicitarTresNomes.
Criar um for para solicitar o nome de 3 pessoas.
Mostrar cada nome digitado no console.
*/
function exercicio08SolicitarTresNomes(){
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome da pessoa " + (indice + 1));
        alert(nome);
    }
}

/*Ex. 9
Criar uma função exercicio09SomarTresIdades.
Criar um for para solicitar a idade de 3 pessoas.
Somar as idades informadas.
Ao final, mostrar a soma total.*/
function exercicio09SomarTresIdades(){
    let totalIdades = 0;
    for(let indice = 0; indice < 3; indice = indice + 1){
        let idade = parseInt(prompt("Digite a idade da pessoa " + (indice + 1)));
        totalIdades = totalIdades + idade;
    }
    alert("Soma total das idades: " + totalIdades);
}

/*Ex. 10
Criar uma função exercicio10CalcularMediaSimples.
Criar um for para solicitar 4 notas.
Somar as notas.
Ao final, calcular e mostrar a média.*/
function exercicio10CalcularMediaSimples(){
    let totalNotas = 0;
    for(let indice = 0; indice < 4; indice = indice + 1){
        let nota = parseFloat(prompt("Digite a nota " + (indice + 1)));
        totalNotas = totalNotas + nota;
    }
    let media = totalNotas / 4;
    alert("Média das notas: " + media);
}

/*Ex. 11
Criar uma função exercicio11ContarMaioresDeIdade.
Criar um for para solicitar a idade de 5 pessoas.
Verificar quantas possuem 18 anos ou mais.
Ao final, mostrar a quantidade encontrada.*/
function exercicio11ContarMaioresDeIdade(){
    let quantidadeMaiores = 0;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let idade = parseInt(prompt("Digite a idade da pessoa " + (indice + 1)));
        if(idade >= 18){
            quantidadeMaiores = quantidadeMaiores + 1;
        }
    }
    alert("Quantidade de pessoas maiores de idade: " + quantidadeMaiores);
}

/*Ex. 12
Criar uma função exercicio12MostrarTabuada.
Solicitar um número ao usuário.
Criar um for para mostrar a tabuada desse número de 1 até 10*/
function exercicio12MostrarTabuada(){
    let numero = parseInt(prompt("Digite um número para mostrar a tabuada"));
    for(let indice = 1; indice <= 10; indice = indice + 1){
        alert(numero + " x " + indice + " = " + (numero * indice));
    }
}

/*Ex. 13
Criar uma função exercicio13ContarLetrasNomes.
Criar um for para solicitar o nome de 4 pessoas.
Mostrar quantas letras cada nome possui.
*/
function exercicio13ContarLetrasNomes(){
    for(let indice = 0; indice < 4; indice = indice + 1){
        let nome = prompt("Digite o nome da pessoa " + (indice + 1));
        alert("O nome " + nome + " possui " + nome.length + " letras.");
    }
}

/*Ex. 14
Criar uma função exercicio14MaiorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o maior número digitado.
Ao final, mostrar o maior valor.*/
function exercicio14MaiorNumero(){
    let maiorNumero = parseInt(prompt("Digite o número 1"));
    for(let indice = 1; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número " + (indice + 1)));
        if(numero > maiorNumero){
            maiorNumero = numero;
        }
    }
    alert("O maior número digitado foi: " + maiorNumero);
}

/*Ex. 15
Criar uma função exercicio15MenorNumero.
Criar um for para solicitar 5 números.
Verificar qual foi o menor número digitado.
Ao final, mostrar o menor valor.*/
function exercicio15MenorNumero(){
    let menorNumero = parseInt(prompt("Digite o número 1"));
    for(let indice = 1; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número " + (indice + 1)));
        if(numero < menorNumero){
            menorNumero = numero;
        }
    }
    alert("O menor número digitado foi: " + menorNumero);
}

/*Ex. 16
Criar uma função exercicio16ContarPositivos.
Criar um for para solicitar 6 números.
Contar quantos números são maiores que zero.
Ao final, mostrar a quantidade de números positivos.*/
function exercicio16ContarPositivos(){
    let quantidadePositivos = 0;
    for(let indice = 0; indice < 6; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número " + (indice + 1)));
        if(numero > 0){
            quantidadePositivos = quantidadePositivos + 1;
        }
    }
    alert("Quantidade de números positivos: " + quantidadePositivos);
}

/*Ex. 17
Criar uma função exercicio17SomarPares.
Criar um for para solicitar 5 números.
Somar apenas os números pares.
Ao final, mostrar a soma dos pares.*/
function exercicio17SomarPares(){
    let somaPares = 0;
    for(let indice = 0; indice < 5; indice = indice + 1){
        let numero = parseInt(prompt("Digite o número " + (indice + 1)));
        if(numero % 2 === 0){
            somaPares = somaPares + numero;
        }
    }
    alert("Soma dos números pares: " + somaPares);
}

/*Ex. 18
Criar uma função exercicio18MostrarMultiplosDeTres.
Criar um for para mostrar os múltiplos de 3 entre 1 e 30.*/
function exercicio18MostrarMultiplosDeTres(){
    for(let indice = 1; indice <= 30; indice = indice + 1){
        if(indice % 3 === 0){
            alert(indice);
        }
    }
}

/*Ex. 19
Criar uma função exercicio19CadastrarProdutos.
Criar um for para solicitar o nome de 3 produtos.
Ao final, mostrar a mensagem "Produtos cadastrados com sucesso".*/
function exercicio19CadastrarProdutos(){
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nomeProduto = prompt("Digite o nome do produto " + (indice + 1));
    }
    alert("Produtos cadastrados com sucesso");
}

/*Ex. 20
Criar uma função exercicio20RelatorioSimples.
Criar um for para solicitar o nome e a idade de 3 pessoas.
Ao final, mostrar:
a) quantidade de pessoas cadastradas
b) soma das idades
c) média das idades*/
function exercicio20RelatorioSimples(){
    let quantidadePessoas = 0;
    let somaIdades = 0;
    for(let indice = 0; indice < 3; indice = indice + 1){
        let nome = prompt("Digite o nome da pessoa " + (indice + 1));
        let idade = parseInt(prompt("Digite a idade da pessoa " + (indice + 1)));
        quantidadePessoas = quantidadePessoas + 1;
        somaIdades = somaIdades + idade;
    }
    let mediaIdades = somaIdades / quantidadePessoas;
    alert("Quantidade de pessoas cadastradas: " + quantidadePessoas +
          "\nSoma das idades: " + somaIdades +
          "\nMédia das idades: " + mediaIdades);
    }


// Conteúdo da prova 1 :
// variáveis
// if && || > >= < <= !== ===
// prompt , parseInt, parseFloat
// string, minusculo, maisculo, replace, length, slice, trim

