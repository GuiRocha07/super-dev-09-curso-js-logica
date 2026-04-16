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
function exercicio18() {
    let idade = parseInt(prompt("Digite sua idade"));
    let renda = parseFloat(prompt("Digite sua renda"));

    if (idade >= 18 && renda >= 2000) {
        alert("Aprovado para crédito");
    } else {
        alert("Não aprovado");
    }
}
function exercicio19() {
    let hora = parseInt(prompt("Digite a hora (0 a 23)"));

    if (hora >= 0 && hora <= 11) {
        alert("Bom dia");
    } else if (hora <= 17) {
        alert("Boa tarde");
    } else if (hora <= 23) {
        alert("Boa noite");
    } else {
        alert("Hora inválida");
    }
}
function exercicio20() {
    let n1 = parseFloat(prompt("Digite o primeiro número"));
    let n2 = parseFloat(prompt("Digite o segundo número"));
    let op = parseInt(prompt("1-Soma 2-Subtração 3-Multiplicação 4-Divisão"));

    if (op === 1) {
        alert("Resultado: " + (n1 + n2));
    } else if (op === 2) {
        alert("Resultado: " + (n1 - n2));
    } else if (op === 3) {
        alert("Resultado: " + (n1 * n2));
    } else if (op === 4) {
        if (n2 === 0) {
            alert("Erro: divisão por zero");
        } else {
            alert("Resultado: " + (n1 / n2));
        }
    } else {
        alert("Opção inválida");
    }
}
function exercicio21() {
    let a = parseFloat(prompt("Número 1"));
    let b = parseFloat(prompt("Número 2"));
    let c = parseFloat(prompt("Número 3"));

    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);

    alert("Ordem crescente: " + numeros.join(", "));
}
function exercicio22() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    let maior = Math.max(a, b, c);

    alert("Maior valor: " + maior);
}
function exercicio23() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    let menor = Math.min(a, b, c);

    alert("Menor valor: " + menor);
}
function exercicio24() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a < b && b < c) {
        alert("Ordem crescente");
    } else if (a > b && b > c) {
        alert("Ordem decrescente");
    } else {
        alert("Sem ordem definida");
    }
}
function exercicio25() {
    let idade = parseInt(prompt("Digite a idade"));

    if (idade < 12) {
        alert("Criança");
    } else if (idade < 18) {
        alert("Adolescente");
    } else if (idade < 60) {
        alert("Adulto");
    } else {
        alert("Idoso");
    }
}
function exercicio26() {
    let valor = parseFloat(prompt("Valor da compra"));
    let forma = prompt("Forma de pagamento (pix/cartao)");

    if (forma === "pix") {
        alert("Valor final: " + (valor * 0.9).toFixed(2));
    } else {
        alert("Valor final: " + (valor * 1.05).toFixed(2));
    }
}
function exercicio27() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());

    if (a > 0 && b > 0) {
        alert("Ambos positivos");
    } else if (a < 0 && b < 0) {
        alert("Ambos negativos");
    } else {
        alert("Um positivo e um negativo");
    }
}
function exercicio28() {
    let n1 = parseFloat(prompt());
    let n2 = parseFloat(prompt());
    let n3 = parseFloat(prompt());
    let faltas = parseInt(prompt("Faltas"));

    let media = (n1 + n2 + n3) / 3;

    if (media >= 7 && faltas < 20) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}
function exercicio29() {
    let n = parseInt(prompt());

    if (n % 2 === 0 && n % 3 === 0) {
        alert("Divisível por 2 e 3");
    } else if (n % 2 === 0) {
        alert("Divisível por 2");
    } else if (n % 3 === 0) {
        alert("Divisível por 3");
    } else {
        alert("Não é divisível por nenhum");
    }
}
function exercicio30() {
    let ano = parseInt(prompt());

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        alert("Ano bissexto");
    } else {
        alert("Não é bissexto");
    }
}
function exercicio31() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            alert("Equilátero");
        } else if (a === b || a === c || b === c) {
            alert("Isósceles");
        } else {
            alert("Escaleno");
        }
    } else {
        alert("Não forma triângulo");
    }
}
function exercicio32() {
    let n = parseFloat(prompt());

    if (n >= 50 && n <= 100) {
        alert("Dentro do intervalo");
    } else {
        alert("Fora do intervalo");
    }
}
function exercicio33() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());

    let diff = a - b;

    alert("Diferença: " + diff);

    if (diff > 0) {
        alert("Positivo");
    } else if (diff < 0) {
        alert("Negativo");
    } else {
        alert("Zero");
    }
}
function exercicio34() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    let media = (a + b + c) / 3;

    alert("Média: " + media.toFixed(2));

    if (media >= 7) {
        alert("Acima da média");
    } else {
        alert("Abaixo da média");
    }
}
function exercicio35() {
    let n = prompt();

    if (n.length > 1) {
        alert("Mais de um dígito");
    } else {
        alert("Um dígito");
    }
}
function exercicio36() {
    let n = parseInt(prompt());

    if (n === 5 || n === 10 || n === 15 || n === 20) {
        alert("Pertence ao conjunto");
    } else {
        alert("Não pertence");
    }
}
function exercicio37() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());

    if (a === b) {
        alert("São iguais");
    } else if (a > b) {
        alert("Maior: " + a);
    } else {
        alert("Maior: " + b);
    }
}
function exercicio38() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a < 0 || b < 0 || c < 0) {
        alert("Existe número negativo");
    } else {
        alert("Nenhum negativo");
    }
}
function exercicio39() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    let positivos = 0;

    if (a > 0) positivos++;
    if (b > 0) positivos++;
    if (c > 0) positivos++;

    if (positivos === 1) {
        alert("Apenas um positivo");
    } else {
        alert("Não atende");
    }
}
function exercicio40() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());

    if (a % b === 0) {
        alert("É múltiplo");
    } else {
        alert("Não é múltiplo");
    }
}
function exercicio41() {
    let n = parseFloat(prompt());

    if ((n >= 10 && n <= 20) || (n >= 30 && n <= 40)) {
        alert("Dentro dos intervalos");
    } else {
        alert("Fora");
    }
}
function exercicio42() {
    let n = parseFloat(prompt());

    if (!(n >= 10 && n <= 20)) {
        alert("Fora do intervalo");
    } else {
        alert("Dentro");
    }
}
function exercicio43() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a !== b && a !== c && b !== c) {
        alert("Todos diferentes");
    } else {
        alert("Existem iguais");
    }
}
function exercicio44() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a === b || a === c || b === c) {
        alert("Há valores repetidos");
    } else {
        alert("Todos diferentes");
    }
}
function exercicio45() {
    let valor = parseFloat(prompt());

    if (valor >= 100) {
        alert("Valor com desconto: " + (valor * 0.9).toFixed(2));
    } else {
        alert("Valor normal: " + valor.toFixed(2));
    }
}
function exercicio46() {
    let idade = parseInt(prompt());

    if (idade >= 18) {
        alert("Acesso permitido");
    } else {
        alert("Acesso negado");
    }
}
function exercicio47() {
    let n = parseInt(prompt());

    if (n % 5 === 0 || n % 10 === 0) {
        alert("Divisível por 5 ou 10");
    } else {
        alert("Não é divisível");
    }
}
function exercicio48() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());

    if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
        alert("Ambos dentro do intervalo");
    } else {
        alert("Não estão ambos dentro");
    }
}
function exercicio49() {
    let a = parseFloat(prompt());
    let b = parseFloat(prompt());
    let c = parseFloat(prompt());

    if (a + b > c || a + c > b || b + c > a) {
        alert("A soma de dois é maior que o terceiro");
    } else {
        alert("Não atende");
    }
}
function exercicio50() {
    let n = parseInt(prompt());

    if (n > 0 && n % 2 === 0) {
        alert("Positivo e par");
    } else {
        alert("Não atende");
    }
}

