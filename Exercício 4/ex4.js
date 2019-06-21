var data = new Date();

var dia = data.getDate() <= 9 ? '0' + (data.getDate()) : data.getDate();
var mes = (data.getMonth() + 1) <= 9 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1;

var mes2 = new Array();
mes2[0] = "Janeiro";
mes2[1] = "Fevereiro";
mes2[2] = "Março";
mes2[3] = "Abril";
mes2[4] = "Maio";
mes2[5] = "Junho";
mes2[6] = "Julho";
mes2[7] = "Agosto";
mes2[8] = "Setembro";
mes2[9] = "Outubro";
mes2[10] = "Novembro";
mes2[11] = "Dezembro";
var mesExtenso = mes2[data.getMonth()];

var ano = data.getFullYear();

document.getElementById('data1').innerHTML = dia + '/' + mes + '/' + ano;
document.getElementById('data2').innerHTML = ano + '-' + mes + '-' + dia;
document.getElementById('data3').innerHTML = dia + ' de ' + mesExtenso + ' de ' + ano;