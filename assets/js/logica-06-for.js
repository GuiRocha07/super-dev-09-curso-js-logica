function exemploForProdutos(){
    // Padaria , Utensilios, Carnes
    for(let indice = 0; indice < 4; indice = indice + 1){
            let produto = prompt("Digite o nome do produto:");
            let categoria = prompt("Digite a categoria do produto [Carne, Padaria, Utensilios]:").trim();

            //Validar que o usuario digitou uma categoria valida
            while(categoria.toLowerCase() !== "carne" && categoria.toLowerCase() !== "padaria" && categoria.toLowerCase() !== "utensilios"){
                alert("Categoria inválida! Digite novamente.");
                categoria = prompt("Digite a categoria do produto [Carne, Padaria, Utensilios]:").trim();
            }
            let preco = parseFloat(prompt("Digite o preço do produto:"));

            if(categoria.toLowerCase() === "padaria"){
                quantidade = quantidadePadaria + 1;
            }

        }
        
alert("Quantidade Padaria: " + quantidadePadaria);
}

function exemploForContagemRegressiva(){
    // for (variável; condição; incremento/decremento)
    for(let numero = 10; numero >= 0; indice = indice - 1){
        alert(inidice);  
    }
}
function exemploDescobrirQuantidadePar(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a validar:"));
    for(let indice = 0; indice < quantidadedeNumeros; indice = indice +1){
        let numero = parseInt(prompt("Digite um número:"));
        if(numero % 2 === 0){
            quantidadePares = quantidadePares + 1;
        }
        // descobrir ímpar (numero % 2 !== 0 )
    }
    alert("Quantidade de números pares: " + quantidadePares);
}

// 
function exercicio01MostrarNumeros(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a mostrar:"));
    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        alert(indice);
    }
}
function exercicio02MostrarNomeVariasVezes(){
    let nome = prompt("Digite o seu Nome:");
    let quantidadeVezes = parseInt(prompt("Digite a quantidade de vezes que deseja mostrar o nome:"));
    for(let indice = 0; indice < quantidadeVezes; indice = indice + 1){
        alert(nome);
    }
}
function exercicio03ContarAteDez(){
    for(let indice = 0; indice <= 10; indice = indice + 1){
        alert(indice);
    }
}
function exercicio04ContarRegressivo.(){
    for(let indice = 10; indice >= 0; indice = indice - 1){
        alert(indice);
    }
}
function exercicio05SomarNumeros(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de números a somar:"));
    let soma = 0;
    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        let numero = parseFloat(prompt("Digite um número:"));
        soma = soma + numero;
    } 
    alert("A soma dos números é: " + soma);
}

function exercicio06MostrarNumerosPares(){
    let quantidadeNumeros = parseInt(prompt("Digite a quantidade de numeros Pares a mostrar:"));
    for(let indice = 0; indice < quantidadeNumeros; indice = indice + 1){
        alert(indice * 2);
    }   
}
function exercicio07MostrarNumerosImpares(){
      for (let i = 1; i <= 9; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
