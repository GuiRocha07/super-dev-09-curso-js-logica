function exemploMensagem() {
    alert("Hello world minha primeira mensagem Guilherme")  
}

function exemploString() {
    // Criando a variável
    let nome = "Elias";
    let sobrenome = "Otto com Dois T";

    // Alterar o valor da variável Sobrenome
    sobrenome = "Otto";

    // Apresentando a variável
    alert(nome)
    alert(sobrenome);
}

function exemploStringConcatenacao() {
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    // Concatenação: juntar um string(texto) com alguma outra coisa

    // "Sabão em po" + " "=> "Sabão em pó "
    // "Sabão em pó " + "Omo" => "Sabão em pó Omo"
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro() {
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    //"\n" => quebra de linha
    alert(
    "Produto: " + produto +
    "\nQuantidade de PCs: " + quantidadePcs +
    "\nQuantidade de memória por PC: " + quantidadeMemoriaPorPc +
    "\nTotal de GB dos PCs: " + totalGb + "GB");
    
}

    //Tipos de variáveis 
    // String => texto, pode armazenar número dentro porém não serve para calcular
    // int => numeros inteiros => 2
    // float => números reais => 2.30
    // boolean => lógico => true ou false => verdadeiro ou falso

function exemploFloat(){
    let endereco = "Rua XV de novembro"; // string
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("m² do terreno:" + metroQuadrado);

}
function exemploBoolean(){
    // Quando entro na empresa
    let tenhoFeriasVencidas = false;

    // completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas?" + tenhoFeriasVencidas);
}

function calcularSalario() {
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; // por hora de streaming
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    // Calcular o salário bruto
    let salarioBruto = valorHora * horasPorMes;

    // Calcular o salárioLiquido
    let salarioLiquido = salarioBruto + beneficioDonate;

    alert(
        "Colaborador: " + colaborador + "\n" +
        "Email: " + "\n" +
        "Valor por hora R$ " + valorHora.toFixed(2) + "\n" +
        "Horas por mes: " + horasPorMes + "\n" +
        "Sálario bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
        "Benefício Donate: R$ " + beneficioDonate.toFixed(2) + "\n" +
        "Salario líquido: R$ " + salarioLiquido.toFixed(2)
    );
}

function calcularTempoMes() {
    let segundosPorMinuto = 60;
    let minutosPorHora = 60;
    let horasPorDia = 24;

    let segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;

    alert(
        "Segundos por minuto: " + segundosPorMinuto +
        "\nMinutos por hora: " + minutosPorHora +
        "\nHoras por dia: " + horasPorDia +
        "\nSegundos por dia: " + segundosPorDia
    );
}