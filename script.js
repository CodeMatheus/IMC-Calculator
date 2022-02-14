var nome = document.getElementById('nome')
var altura = document.getElementById('altura')
var peso = document.getElementById('peso')

function calcular() {
    var nomeUser = nome.value;
    var alturaUser = parseFloat(altura.value);
    var pesoUser = parseInt(peso.value);
    var calc = pesoUser / (alturaUser * alturaUser);

    if (nomeUser == '' || peso.value == '' || altura.value == '' || isNaN(altura.value) == true || isNaN(peso.value) == true) {
        alert('Erro, preencha todos os campos!');
    } else {
        if (calc < 18.5) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está abaixo do peso.";
        } else if (calc >= 18.5 && calc < 25) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está no peso ideal.";
        } else if (calc >= 25 && calc < 30) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está com sobrepeso.";
        } else if (calc >= 30 && calc < 35) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está obeso nível 1.";
        } else if (calc >= 35 && calc < 40) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está obeso nível 2.";
        } else if (calc > 40) {
            var resultado = document.getElementById('resultado');
            resultado.innerHTML = "Seu nome é " + nomeUser + ", seu IMC é de " + calc.toFixed(2) + ". Você está com obesidade mórbida.";
        }
    }
}