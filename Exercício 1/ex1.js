var num1 = prompt("Informe o número 1");
var num2 = prompt("Informe o número 2");
var num3 = prompt("Informe o número 3");

var soma = parseInt(num1) + parseInt(num2) + parseInt(num3);
alert("Soma:" + soma);
alert("Média:" + (soma / 3).toFixed(2));