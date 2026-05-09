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
    
for(let i = 0; i < 5; i += 1){
    
    let numero = parseInt(prompt("Digite um numero"));
    
    numeros.push(numero);
        
}
    let soma = 0;

for(let i = 0; i < numeros.length; i += 1){
    
    soma = soma + numeros[i];

}
   alert("Soma total : " + soma);
}
/*5. Criar uma função exercicio05
   Criar um vetor de notas
   Solicitar para o usuário 4 notas
   Adicionar as 4 notas no vetor
   Utilizar um for para somar todas as notas
   Ao final, calcular e mostrar a média*/

function exercicio05(){
 let notas = [];
 let soma = [];
    for()
    }
}

