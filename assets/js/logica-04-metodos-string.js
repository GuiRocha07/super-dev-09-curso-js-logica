    function exemploToLowerCase() {
        let nome = "John Doe";
        let nomeMinusculo = nome.toLowerCase();
        console.log("Nome minúsculo:", nomeMinusculo);
    }

    function exemploToUpperCase() {
        let nome = "John Doe";
        let nomeMaiusculo = nome.toUpperCase();

        console.log("Nome maiúsculo:", nomeMaiusculo);
    }

    function exemploTamanho() {
        let nome = "John Doe";
        let quantidadeCaracteres = nome.length;

        console.log("Texto; '" + nome + "'");
        console.log("Quantidade de caracteres:", quantidadeCaracteres);
    }

    function exemploSubstituicao() {
        let texto = "Abacate, Uva, Maca, Pera";
        let textoCorrigido = texto.replace("Maca", "Maçã");

        console.log("Texto:", texto);
        console.log("Texto corrigido:", textoCorrigido);
    }

    function exemploSubstituicaoNapropriaVariavel() {
        let texto = prompt("Digite um preço"); // => "450.39"
        // "R$ 450,39" => "R$ 450.39"
        texto = texto.replace(",", ".");
        texto = texto.replace("R$", ""); 
        texto = texto.replaceAll(" ", "");

        console.log("Texto sanitizado:" + texto);
    }

    function removerEspacosDoFim() {
        let texto = "   O batman vive anoite, de dia ele dorme   ";

        console.log("Texto original: '" + texto + "'");

        texto = texto.trimEnd();
        console.log("Texto sem espaços no fim: '" + texto + "'");
    }

    function removerEspacosDoComeco() {
        let texto = "  O batman vive anoite, de dia ele dorme   ";

        console.log("O texto original: '" + texto + "'");

        texto = texto.trimStart();
        console.log("Texto sem espaços no começo: '" + texto + "'");
    }

    function removerEspacosDoComecoFinal() {
        let texto = " O batman vive anoite, de dia ele dorme ";

        console.log("O texto original: '" + texto + "'");
        texto = texto.trim();
        console.log("Texto sem espaços no começo e no fim: '" + texto + "'");
    }

    function agregarCaracteresFim() {
        let nome = "Paulo C";
        console.log("Nome do cartão: " + nome.padEnd(20, "*"));
    }

    function agregarCaracteresComeco() {
        let finalCartaoCredito = "7292"
        console.log("Cartão de crédito: " + finalCartaoCredito.padStart(12, "*"));
    }

    function verificarSeComecaCom() {
        let texto = prompt("Digite um nome");

        // Verificar se o nome começa com a letra "P"]
        if (texto.toUpperCase().startsWith("P") === true) {
            alert("Começa com a letra 'P' , pois tem a senha secreta");
        } else {
            alert("Não pode entrar na festa");
        }
    }

    function verificarSeContem(){
        let nomeEpisodio = prompt("Digite o nome do episodio");

        // Verificar se é a primeira temporada "S01", exemplo "Lost S01E04"
        if (nomeEpisodio.includes("S01") === true) {
            alert("Primeira temporada");
        } else if (nomeEpisodio.includes("S02") === true) {
            alert("Segunda temporada");
        } else {
            alert("Ao infinito e além");
        }
    }

        function verificarSeTerminaCom(){
            //Verificar se termina com 'chocolate'

            let bolo = prompt("Digite o nome do bolo");
            if (bolo.endsWith("chocolate") === true) {
                alert("Boa escolha");
            } else {
                alert("Não como outro bolo");
            }   
        }

        function pegarPosicao() {
            let fruta = "Abacate";
            let primeiroCaracter = fruta[0];

            console.log("Fruta: " + fruta + "\nPrimeira posição: " + primeiroCaracter);
        }

        function quebrarString() {
            // String         01234
            let horaMinuto = "20:30";

            let partes = horaMinuto.split(":");
            //
            // split => ["20", "30"]

            console.log(partes);
            let hora = partes[0];
            let minuto = partes[1];

            console.log("Hora: " + hora);
            console.log("Minuto: " + minuto);
        }
        
        function exemploPegarPartesDaString() {
            let nomeCompleto = "Ruan Costa";
            // Ruan Costa
            // R => 0(Começa nesta posição)
            // u => 1
            // a => 2
            // n => 3
            //   => 4 (Para nesta posição)
            // C => 5
            // o => 6
            // s => 7
            // t => 8
            // a => 9
                let nome = nomeCompleto.slice(0, 4); // "Ruan"
        let sobrenome = nomeCompleto.slice(5, 10);
    }

    function pegarIndiceDoCaracter(){
        let texto = "Abacate Uva Pera";
        let ultimoIndiceDoEspaco = texto.lastIndexOf(" ");

        let ultimaPalavra = texto.slice(ultimoIndiceDoEspaco + 1, texto.length);
        console.log(texto);
        console.log(ultimaPalavra);
    }

    function descobrirIndiceDoCaracter(){
        //                  0123456789....
        let numeroCartao = "3010 2039 2019 2030";
        let indicePrimeiroEspaco = numeroCartao.indexOf(" ");
        let primeiraParteCartao = numeroCartao.slice(0, indicePrimeiroEspaco);

        console.log("Cartão: " + numeroCartao);
        console.log("Primeira parte do cartão: " + primeiraParteCartao);
    }
