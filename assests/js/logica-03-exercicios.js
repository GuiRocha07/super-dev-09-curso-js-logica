function exercicio01() {
     let nome = prompt("Digite o seu nome");
     let idade = parseInt(prompt("Informe a sua idade"))

    if (idade < 18) { 
        alert("Menor de idade");
    } else if (idade < 60) { 
        alert("Maior de idade");
    } else { 
        alert("Idoso");
    }
}
function exercicio02() {
    let numero = parseInt(prompt("Informe um número"));

    if (numero <10){
        alert("Número Menor que 10");
    } else if (numero > 10){
        alert("Número Maior que 10")
    } else {
        alert("Número Igual a 10");
    }
}
function exercicio03() {
    let numero = parseInt(prompt("Informe um número"));
    if (numero === 0){
        alert("Certo");
    } else if (numero >= 1 && numero <= 1000000){
        alert("Não é zero");
  
    }
    
}
function exercicio04() {
    let numero = parseInt(prompt("Informe um número"));
    if (numero === 8001){
        alert("Certo");
    } else if (numero >= 8002 && numero <= 9999){
        alert("Não é 8001");
    } else {
        alert("Número inválido");
    }
}
function exercicio05() {
    let numero = parseInt(prompt("informe um número que deseja somar"));
    let numero2 = parseInt(prompt("Informe outro número que deseja somar"));

    let soma = numero + numero2;
    alert("Resultado: " + soma);
    if (soma > 0){
        alert("Soma positiva");
    } else if (soma < 0){
        alert("Soma negativa");
    }
}
function exercicio06() {
    let numero = parseInt(prompt("Digite valor da compra 1 "));
    let numero2 = parseInt(prompt("Digite valor da compra 2 "));
    let numero3 = parseInt(prompt("Digite valor da compra 3 "));

    let total = numero + numero2 + numero3;
    alert("Valor total: " + total);
    if (total > 100){
        alert("Não pode realizar a compra");
    } else if (total < 100){
        alert("Compra aprovada");
    } else {
        alert("Compra aprovada");
    }
}
function exercicio07() {
    let numero = parseInt(prompt("Digite sua idade"));
    if (numero < 16) {
        alert("Não pode votar");
    } else if (numero >= 16 && numero <= 17) {
        alert("Voto opcional");
    } else if (numero >= 18) {
        alert("Voto obrigatório");
    }
}
function exercicio08() {
    let numero = parseInt(prompt("Digite um número"));
    if (numero > 0){
        alert("Numero positivo");
    } else if (numero < 0){
        alert("numero negativo");
    } else {
        alert("Número zero");
    }
    }
    function exercicio09() {
        let numero = parseInt(prompt("Digite um numero"));
        let numero2 = parseInt(prompt("Digite outro numero"));

        if (numero > numero2){
            alert("O número " + numero + " é maior que " + numero2);
        } else if (numero < numero2){
            alert("O número " + numero2 + " é maior que " + numero);
        } else {
            alert("Os números são iguais");
        }
    }
    function exercicio10() {
        let numero = parseInt(prompt("Digite um número"));
        if (numero >= 10 && numero <= 20){
            alert("Número entre 10 e 20");
        } else {
            alert("Numero Não está entre 10 e 20");
        }

    }
    function exercicio11() {
        let numero = parseInt(prompt("Digite um número"));
        let numero2 = parseInt(prompt("Digite outro número"));
        let numero3 = parseInt(prompt("Digite outro número"));
         if (numero > 0 && numero2 > 0 && numero3 > 0){
            alert("Todos os números são positivos");
        } else {
            alert("Não são todos os números são positivos");
        }

    }
    
function exercicio12() {
    let login = prompt("Digite o login");
    let senha = prompt("Digite a senha");
    if (login === "admin" && senha === "1234"){
        alert("Login bem-sucedido");
    } else {
        alert("Login invalido");
    }
}
function exercicio13() {
    let numero = parseInt(prompt("Digite um número"));
    if (numero % 2 === 0){
        alert("Número par");
    } else {
        alert("Número impar");
    }

}
function exercicio14() {
    let numero = parseInt(prompt("digite a renda mensal"));
    if (numero <= 2000){
        alert("Renda mensal Baixa");
    } if (numero > 2000 && numero < 5000){
        alert("Renda mensal Média");
    } else {
        alert("Renda mensal Alta");
    }

}
function exercicio15() {
    let temperatura = parseFloat(prompt("Digite a temperatura em celsius"));
    if (temperatura < 15) {
        alert("Temperatura Fria");
    } else if (temperatura >= 15 && temperatura <= 25){
        alert("Temperatura Agradável");
    } else { (temperatura > 25)
        alert("Temperatura Quente");
    }
}
function exercicio16() {
    let numero = parseInt(prompt("Digite um numero"));
    let numero2 = parseInt(prompt("Digite outro numero"));
    if (numero % numero2 === 0 || numero2 % numero === 0){
        alert("Os números são múltiplos um do outro");
    } else {
        alert("Os números não são múltiplos um do outro");
    }
}
function exercicio17() {
    let numero = parseFloat(prompt("Digite sua nota 1"));
    let numero2 = parseFloat(prompt("digite sua nota 2"));
    let numero3 = parseFloat(prompt("digite sua nota 3"));
    let media = (numero + numero2 + numero3) / 3;
    alert("Média: " + media.toFixed(2));
    if (media >= 7){
        alert("Aprovado");
    } else if (media >= 5 && media < 7){
        alert("Recuperação");
    } else {
        alert("Reprovado");
    }
}
